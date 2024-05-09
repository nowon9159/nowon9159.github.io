# Overview

# TOC

# Contents
## IAM

**IAM에 대한 간략한 내용**
-   IAM User: 장기 자격 증명이 주어진다.
-   Group: 특정 그룹으로 사용자를 포함할 수 있다.
-   Roles: 단기 자격 증명으로서 STS를 사용한다.
    -   EC2 Instance Role: EC2 메타데이터 서비스를 이용하며 EC2 인스턴스에 대한 단기 자격 증명을 부여한다. 한 인스턴스에 하나의 역할만 할당 가능함. 
    -   Service Role: API Gateway나 CodeDeploy, ASG, Lambda 함수 등에 대한 작업이 필요한 서비스의 경우 Role이 있어야 하는 데 해당 Role은 요구되는 모든 작업을 할수 있게 활성화와 프로비저닝 되어야 한다. 
    -   Cross Account: 이 역할은 한 계정에서 다른 계정으로 가는 액세스가 필요한 작업에서 유용하게 쓰인다. 교차 계정에서 사용자의 자격 증명 대신 Role에 권한을 부여하는 것이다.
-   Policies: 역할과 사용자가 할 수 있는 작업을 정의한다.
    -   AWS Managed: AWS가 정의한 정책으로 시간이 지남에 따라 변할 수 있으나 특정 작업을 수행한다.
    -   Customer Managed: 우리가 직접 정책을 생성할 수 있고 해당 정책에 여러 사용자나 역할을 할당할 수 있다. 버저닝도 가능하다.
    -   Inline Policies: 한 명의 사용자 또는 하나의 역할에 할당되고, 변경할 수도 있지만 사용자나 역할 간 공유는 안된다.
-   Resource Based Polices: S3 버킷 정책이나 SQS 대기열 정책 등의 정책이 있다.

**IAM Policies Deep Dive**
-   IAM Policies는 JSON 문서 형식으로 작성되며, Effect, Action, Resource, Condition, Policy Variable 등 항목이 있다.
-   예를 들어 EC2 볼륨 연결, EC2 볼륨 분리를 리소스인 모든 EC2 인스턴스에서 허용하는 명령문이 있을 때 특정 태그가 지정된 EC2 인스턴스에만 볼륨 연결 및 분리가 허용되도록 태그 기반의 조건을 추가할 수 있다.
-   IAM 정책에 명시적인 DENY가 있다면 이는 모든 ALLOW보다 우선순위가 높다.
-   정책의 모범 사례는 최소 권한 부여를 통해 최대 보안을 확보하는 것이다.
    -   이를 확인할 수 있는 도구로 **IAM Access Advisor**가 있다. IAM 정책에 부여된 모든 권한과 각 권한이 마지막으로 액세스된 시간을 볼 수 있다.
    -   **Access Analyzer**: S3 버킷과 같이 외부 엔티티와 공유된 리소스를 분석한다. 다른 계정에서 S3 버킷에 액세스할 수 있는지 확인해 예기지 못한 액세스가 있다면 해당 S3 버킷을 잠글 수 있다.

**IAM AWS Managed Policies**
-   AdministratorAccess: 모든 리소스에 대해 모든 작업이 허용됨을 의미한다. 관리자에게 매우 일반적인 정책이므로 AWS에서 관리형 정책으로 제공한다.
-   PowerUserAccess:
    -   Effect의 경우 Allow
    -   NotAction은 iam:\*,organizations:\*,account:\*
    -   NotAction이 있기 때문에 NotAction에 있는 것 빼고 다 허용이 된다.
    -   또 일부 IAM 작업은 허용된다.
        -   iam:CreateServiceLinkedRole
        -   iam:DeleteServiceLinkedRole
        -   iam:ListRoles
        -   organizations:DescribeOraganization
        -   account:ListRegions
-   NotAction을 사용한 이유는 DENY로 전부 막아버리면 위의 경우 iam, organizations, account에 대한 모든 권한을 막아버리기 때문에 결과적으로 일부 IAM 작업을 허용하고 나머지 IAM 역할을 묵시적 거부하기 위해, 두 가지를 공존할 수 있게 하는 방법이다.

**IAM Policies Conditions**
-   Condition은 "Condition" : { "{condition-operator}" : {"{condition-key}" : "{condition-value}" }} 이와 같은 구조로 생겼다.
-   Operators는 여러가지가 있다.
    -   String (StringEquals, StringNotEquals, StringLike...)
        -   예를 들어 PrincipalTag를 "job-category":"iamuser-admin" 등으로 지정해 해당 태그가 있는 경우에만 허용할수도 있다.
        -   또는 s3:prefix 를 이용해서 사용자가 특정 home/ 홈 디렉터리에만 액세스할 수 있도록 할 수 있다.
    -   Numeric (NumericEquals, NumericNotEquals, NumericLessThan...)
        -   숫자 연산자를 이용해서 같음, 같지 않음 등을 확인할 수 있다.
    -   Date (DateEquals, DateNotEquals, DateLessThan...)
        -   날짜를 보고 날짜를 비교할 수 있는데, 특정 서비스에 대한 임시 액세스를 제공하려는 경우 유용하다.
    -   Boolean (Bool)
        -   예를들어 SSL을 평가하려면 SecureTransport: true MultiFactorAuthPresent: true 등을 확인해 MFA를 보려는 경우 유용하게 사용된다.
    -   (Not)IpAddress
        -   이 경우 S3 버킷 정책이나 특정 소스 IP만 서비스에 액세스할 수 있도록 하려는 정책에서 유용하다.
    -   ArnEquals, ArnLike
    -   Null

당장 위와 같은 모든 것을 기억할 필요는 없으며 다양한 조건이 존재한다는 것만 알고 있으면 된다.

시험에서 IAM 정책을 사용해 문제를 해결하라고 요구한다면 사용자 지정 스크립트 대신에 이를 사용하면 된다.

**IAM Policies Variable and Tags**
-   ${aws:username}
    -   예를 들어 S3 버킷 정책에서 가장 일반적으로 사용된다. 사용자 이름으로 시작하는 접두사에 대해서만 모든 작업을 수행할 수 있으며, 모든 사용자는 S3 버킷에 자신만의 작은 디렉터리를 가지게 되는 것과 동일한 것이다.
    -   "Resource": ["arn:aws:s3:::mybucket/${aws:username)/*"]
-   AWS 제공 특정 정책 변수와 태그도 있다.
    -   예를들어 aws:CurrentTime, aws:TokenIssueTime, aws:principaltype, aws:Secure Transport, aws:Sourcelp, aws:userid, ec2:SourcelnstanceARN 등이 있다.
-   서비스 특정 정책 역할과 태그도 있다.
    -   예를들어 s3:prefix, s3:max-keys, s3:x-amz-acl, sns:Endpoint, sns:Protocol.. 와 같은 태그 등이 있다.
-   태그 기반 정책 변수를 사용할 수 있다.
    -   iam:ResourceTag/key-name, aws:PrincipalTag/key-name...

**IAM Roles vs Resource Based Policies**
-   S3 버킷과 같은 리소스에 정책을 연결하거나 vs 역할을 프록시로 사용할 수 있다.
    -   예를 들어 계정 A의 사용자가 계정 B의 S3 버킷에 액세스할 때 첫 번째는 계정 B에서 Role을 사용하고 계정 A에서 그 역할을 Assume 하는 것이다. 다른 하나는 S3 Bucket Policy를 사용하는 것이다. S3 버킷 정책에서 계정 A의 사용자가 계정 B의 S3 버킷에 액세스할 수 있도록 혀용한다.
-   Role을 Assume하게 되면 사용자, 애플리케이션 또는 서비스에 대한 원래 권한을 포기하고 역할에 할당된 권한을 가져온다. 즉 B의 역할을 맡기 전에 계정 A의 사용자는 계정 A의 모든 권한을 포기해야한다는 큰 차이가 있다. 
-   반대로 Bucket Policy와 같은 리소스 기반 정책을 사용하는 경우 보안 주체가 어떤 권한도 포기할 필요가 없다.
-   리소스 기반 정책은 사용자가 두 계정에서 작업해야 하는 경우 사용 사례가 있다.
    -   예를 들어 계정 A의 사용자가 계정 A의 DynamoDB를 스캔한 다음 계정 B의 S3 버킷에 그 내용을 덤프해야 할 경우 계정 A에 IAM 역할이 필요하고, 계정 B의 S3 버킷에도 리소스 정책이 필요하다.
-   리소스 기반 정책은 AWS의 대부분의 중요한 리소스에서 지원된다. (S3 버킷, SNS Topic, SQS Queue, Lambda 함수, ECR, Backup, EFS, Glacier, Cloud9 등)

**IAM Permission Boundaries**
IAM Permission Boundaries(권한 경계)는 사용자와 역할에 대해서만 지원되며 그룹에는 지원되지 않는다.

이는 IAM 엔터티가 얻을 수 있는 최대 권한을 설정할 수 있는 고급 기능이다.

예를들어 아래와 같이 권한 경계를 연결한다고 가정해보자
```JSON
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*",
                "cloudwatch:*",
                "ec2:*"
            ],
            "Resource": "*"
        }
    ]
}
```

그리고 IAM 정책에서는 아래와 같이 허용된다.

```JSON
{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Action": "iam:CreateUser",
    "Resource": "*"
  }
}
```

이 경우 결과적으로 아무 권한도 없게 된다.

IAM CreateUser는 IAM 정책에서 허용되지만, IAM 권한 경계에서는 S3, CloudWatch, EC2에 대한 권한만 허용하므로 사용자에게는 아무 권한도 없게 된다.

**결과적으로 둘다 공통적으로 허용되는 경우의 권한만 허용된다는 의미이다.**

또한 권한 경계는 AWS Organization의 SCP(서비스 제어 정책, Service Control Policy)와 함께 사용할 수 있다.

SCP 또한 교집합에 해당하는 부분의 권한만 허용된다.

자세한 그림은 [링크](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)에서 볼 수 있다.

IAM 권한 경계를 사용하는 이유는 비관리자에게 권한 경계 내에서 책임을 위임하고자 할 때이다.

예를 들어 새 IAM 사용자를 생성하거나 개발자가 직접 정책을 할당하고 자신의 권한을 관리할 수 있도록 하되, 권한이 부여된 범위 내에서만 가능하도록 제한할 수 있다.

즉, 권한 에스컬레이션을 방지한다.

또한 조직과 SCP를 사용해 전체 계정을 제한하는 대신 특정 사용자를 제한하는 데 매우 유용하다.

## IAM Access Analyzer

외부에 공유할 리소스를 찾는 데 사용한다.
-   S3 Bucket, IAM Role, KMS Key, Lambda and Layer, SQS Queue, Secrets Manager Secrets 등에 적용된다.

이 리소스들이 Resource Based Policy가 첨부되어 있을 수도 있고 그에따라 다른 계정과 공유할 수 있다. 그러나 공유된 사실을 잊어버릴 수도 있다.

외부 리소스가 데이터에 액세스할 수 있기 때문에 회사에 보안 위험이 될 수도 있다. 그래서 AWS Account 또는 AWS Organization와 같이 전체에 **Zone of Trust를 정의**한다.

Zone of Trust 외부에 있는 것들 중에서 위에 언급한 리소스에 액세스할 수 있는 것들은 findings로 보고될 것이다.

IAM Access Analyzer는 다른 측면도 있는데, IAM Access Analyzer에서 우리의 정책을 검증해서 우리 정책이 정책 문법이나 모범 관행에 부합하는지 검증할 수 있다. (Access Analyzer Policy Validation)
-   General warnings, security warnings, errors, suggestions 등의 제안 사항을 받게 된다.
-   또한 우리가 정책을 개선할 방법에 대한 조치 가능한 권고도 받게 된다.

IAM Access Analyzer에서 직접 정책을 생성할 수도 있다. (Access Analyzer Policy Generation)
-   이미 호출되어진 API 기반으로 우리의 액세스 활동에 맞춤화된 IAM Policy를 생성한다.
-   예를들어 S3 버킷이나 Kinesis Data Stream에 API 호출을하는 람다 함수의 경우 CloudTrail에 로깅될 것이고, Access Analyzer 기능이 CloudTrail 로그를 검토해서 정책을 생성하게 된다.
-   최대 90일까지의 로그를 검토하고, 로그를 이용해서 IAM Policy를 생성하게 된다.

## STS

STS를 이용하면 동일한 계정에서 다수의 계정들에 걸쳐 역할을 Assuem하게 되고 자격 증명 페더레이션을 사용할 수 있게 된다.

**Using STS to Assume a Role**
-   먼저 우리의 계정이나 다수의 계정에 걸쳐 Assume하려는 IAM Role을 정의한다.
-   다음으로 어떤 Principal이 이 IAM 역할에 액세스할 수 있는지 정의하고, Security Token Service의 약자인 STS 서비스를 이용해서 자격 증명을 받는다.
-   STS 서비스를 이용하면 일시적인 자격 증명이 될 것이고, AssumeRole API를 이용해서 우리가 액세스할 수 있는 IAM Role을 맡을 수 있게 된다. 
-   일시적인 기간은 15분에서 12시간 사이이다.

**Assuming a Role with STS**
-   어떤 상황에서 STS를 이용해 Assume을 받아야 하는가?
-   먼저 우리가 보유한 AWS 계정에 있는 사용자에게 우리가 보유한 다른 계정에 있는 리소스에 대한 액세스 권한을 제공하려고 하는 경우가 있다.
-   또는 제3자가 보유한 AWS 계정에 있는 사용자에게 액세스 권한을 부여하려할 수도 있고
-   또는 서비스 역할을 이용해서 AWS가 제공하는 서비스에게 AWS 리소스에 대한 액세스 권한을 줄 수도 있다. 
-   그리고 자격 증명 페더레이션을 사용할 수도 있다.

또한 STS에는 살아 있는 세션과 역할에 대한 자격 증명을 취소하도록 하는 기능이 있다.
-   time statement를 이용하거나 AWSRevokeOlderSessions를 사용해서 정책을 관리하면 된다.
-   시간 조건을 이용해서 추가적인 보안 수준을 제공할 수 있다.

**STS에서 기억해야할 중요한 사항**은 특정 사용자, 애플리케이션, 또는 서비스를 위해 역할을 Assume하게 되면 원래 가졌던 권한을 포기하게 되고, 그 역할에 할당된 권한을 갖게 된다는 점을 기억해야 된다.

**Providing Access to an IAM User in Your or Another AWS Account That You Own**

우리가 보유하지 않은 제3자 계정의 경우에 사용자는 역할을 Assume하게 되고, 그 역할을 통해 EC2 인스턴스를 종료하는 등의 작업을 수행할 수 있다. 그리고 이렇게 할 경우 사용자가 Role을 Assume하도록 명시적으로 권한을 부여해야 한다.

관리 콘솔이나 CLI, AssumeRole API를 이용해서 사용자가 그 역할로 전환하도록 강제할 수도 있는데 여기서는 추가적인 수준의 보안을 갖게 된다는 이점이 있다.

또 MFA를 Role에 추가해서 MFA를 이용하도록 지정된 사용자만 그 역할을 Assume할수 있도록 가능하다. 그러면 최소 권한과 CloudTrail을 이용한 감사라는 이점도 갖게 된다. 중간 단계를 거쳐 EC2 인스턴스를 종료함으로써 우리는 많은 보안상 이점을 추가할 수 있다.

**Cross account access with STS**
그러면 STS 교차 계정 액세스는 실제로 어떻게 사용되는가?

Production Account / Development Account가 있을 때, S3 버킷인 productionapp에 대한 액세스를 개발자들에게 제공하려 한다.

Production Account에서 관리자는 Development Account에 대해 productionapp 버킷에 대한 읽기, 쓰기 권한을 부여하는 역할인 UpdateApp을 생성하게 된다. 즉, 이 역할을 이용해 S3 버킷에 액세스할 수 있게 된다.

그 다음 Development Account에서 우리는 개발자 그룹의 구성원들에게 이 UpdateApp이라는 역할을 Assume할 수 있도록 액세스 권한을 부여한다.

그러면 개발자 그룹의 사용자들만 STS API를 이용해서 해당 역할에 액세스하거나 액세스 권한을 요청할 수 있다. 요청을 받으면 STS는 역할 임시 자격 증명을 리턴한다.
이 임시 자격 증명을 이용해서 사용자들은 S3 버킷에 액세스할 수 있다.

**Providing Access to AWS Accounts Owned by Third Parties**
제 3자가 보유한 계정에 대한 액세스를 제공하려고 하는 경우에는 **External ID**라는 게 추가로 있다.

Zone of Trust라는 개념에 대해 이해했을 것이다. 이것은 우리가 보유한 모든 계정과 Organization을 말한다. 그리고 이 Zone 외부는 제 3자가 될 것이다.

예를 들어 파트너와 협력하고 그들이 서비스를 제공하거나, 컨설팅 회사가 있어서 그 컨설팅 회사에게 우리 계정에 대한 액세스를 제공하려고 할 때 그들은 신뢰 구역의 바깥에 있다.
-   IAM Access Analyzer를 이용하면 계정 안의 어떤 리소스가 신뢰 구역 바깥에 있는지 검색할 수 있다.

우리가 제3자에게 우리 리소스에 대한 액세스 권한을 부여하려고 한다면 3rd Party AWS Account ID라는 걸 정의해야한다.
-   이 외부 ID는 우리외 3rd Party의 비밀이고 우리가 외부 ID를 정의해야 한다.
-   이 외부 ID를 정의하는 이유는 계정에 있는 역할에 대한 액세스 권한을 제3자에게 부여하면 제3자만 그 역할에 액세스하게 해야하기 때문이다.
-   즉, 우리와 제3자 간에 고유하게 역할을 연계하는 것이고, 신뢰를 정의하고 역할을 Assume할 때 반드시 External ID를 제공해야 한다.

**Confused deputy**

외부 ID가 왜 중요한지 이해하기 위해서는 Confused deputy(혼동된 대리인)에 대해 이해해야 한다.

자세한 설명은 [링크](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/confused-deputy.html)에서 확인 가능하다.

-   A 계정 그리고 A 계정에 속해있는 ExampleRole이 있다고 가정해보자. 
-   그리고 3rd Party 회사에서 사용하고 있는 AWS 계정이 있다.
-   그리고 두 계정에 어느곳에도 속하지 않는 외부의 계정이 있다.
-   ExampleRole은 3rd Party 회사의 AWS 계정에 신뢰 관계가 형성되어 있다.

아래와 같은 과정을 거쳐서 문제가 발생한다.
-   3rd Party 회사에서 서비스를 사용할 때 ExampleRole의 ARN을 제공한다.
-   3rd Party는 ExampleRole의 ARN을 사용해 임시 보안 인증을 얻어 A 계정의 리소스에 액세스한다. 3rd Party를 A 계정에서는 "대리자"라고 인식하게 된다.
-   두 계정에 속하지 않는 외부의 계정은 3rd Party의 서비스를 사용하게 되고, 이 계정도 A 계정의 ExampleRole ARN을 알고 있거나 짐작해서 제공한다. 
-   외부 계정은 3rd Party에게 계정의 권한을 요청하면 3rd Party는 ExampleRole을 사용해서 계정의 리소스에 액세스하게 된다.

결국 외부 계정은 무단으로 A 계정의 ExampleRole에 액세스하게 되는 것이다.
3rd Party는 아무것도 모른 채 리소스에 대한 작업을 하게 했으므로 3rd Party는 "혼동된 대리자"가 되었다.

그래서 External ID를 정의하게 되었다.

```JSON
{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Principal": {
      "AWS": "Example Corp's AWS Account ID"
    },
    "Action": "sts:AssumeRole",
    "Condition": {
      "StringEquals": {
        "sts:ExternalId": "12345"
      }
    }
  }
}
```

결국 신뢰 관계를 형성할 때 "sts:ExternalId": "12345"와 같은 구문을 통해 외부 ID를 지정한다.

이 외부 ID는 A 계정과 3rd Party 계정이 공유하는 일종의 비밀이다.

공격을 시도하는 외부 계정은 External ID를 모르기 때문에 접속하지 못하게 되고, 결국 우리는 추가적인 수준의 보안을 갖게되는 것이다.

**Session Tags in STS**
STS에서 세션 태그를 사용할 수 있다.

우리가 IAM Role을 Assume하거나 STS를 사용하는 사용자 페더레이션이 있다면 우리는 세션 태그를 전달할 수 있다.

작동 방식
-   사용자는 예를 들어 STS AssumeRole API 호출을할 것이고, 그 API 호출의 일부로서 Department=HR 이라는 세션 태그를 전달할 것이다.
-   그리고 STS는 세션 태그와 함께 사용자에 대한 임시 보안 자격 증명을 리턴할 것이다.
-   우리는 aws:PrincipalTag라는 조건을 사용할 수 있다. 이 조건 태그와 AssumeRole에 전달된 태그를 비교하게 되는 것이다.
-   예를 들어 hr-docs라는 이름의 S3 버킷이 있고 그 안에는 Bucket Policy를 통해 "StringEquals": {"awsPrincipalTag/Department": "HR"} 조건을 설정하고, 특정한 세션 태그를 이용해서 AssumeRole을 사용한 사용자만 S3 버킷에 대한 API 호출을 할 수 있게 된다.

그래서 이건 우리가 STS 안에서 사용자 페더레이션을 사용하고 IAM 정책에 페더레이션을 통해 전달되는 태그를 기반으로 하는 조건을 넣으려고 할 때 특히 유용하다.

**STS Important APls**
-   AssumeRole: 가장 기본적인 API, 우리 계정이나 다수의 계정 안에서 역할에 액세스하기 위한 것
-   AssumeRoleWithSAML: SAML을 이용해서 로그인했을 때 자격 증명을 얻기 위한 API
-   AssumeRoleWithWebIdentity: IdP를 이용할 때 사용하는 API이다. Provider는 Amazon Cognito, Amazon, Facebook, Google, OpenID Connect 호환 IdP가 포함된다.
    -   AssumeRoleWithWebIdentity API는 사용을 권장하지 않는다. **AssumeRoleWithWebIdentity 대신 Cognito를 사용하도록 권장**한다.
-   GetSessionToken: MFA에 사용된다. MFA를 이용해서 자격 증명을 되돌려 받는 경우
-   GetFederationToken: 프록시 앱을 사용해서 임시 자격 증명을 받기 위해 사용한다. 가령 회사 네트워크 안에서 토큰을 배포하는 것이 있을 때 사용한다.

대략적으로 이것들이 알아야할 중요한 API이고, 앞 네 가지가 가장 중요한 API이다. 다섯 번째(GetFederationToken)는 시험에 나오지 않는다.

## STS
**Identity Federation in AWS**
-   기본적으로 AWS 외부에 있는 사용자에게 AWS 계정 내 리소스에 대한 액세스 권한을 부여하는 것이다.
-   그리고 이미 기업 Directory 내에 사용자가 있으므로 별도의 IAM 사용자를 생성하고 싶지 않은 경우이다.
-   AWS 외부에서 사용자 관리를 하고 싶기 때문에 ID Federation이 필요하다.
-   사용 사례
    -   기업에 Active Directory와 같은 자체 ID 시스템이 있거나, 
    -   웹/모바일 애플리케이션에서 AWS 리소스에 액세스해야 하는 경우가 있다.
-   기본적으로 사용자가 AWS에 액세스하려고 하면 ID Provider와의 신뢰 관계를 설정해야 한다. 그렇지 않으면 AWS가 해당 Provider로부터 ID를 받아들이지 않는다.
-   신뢰 관계가 형성되고 사용자가 ID Provider에 로그인하면 AWS 자격 증명을 받게 되고, 이 임시 자격 증명을 사용해 AWS에 액세스하게 된다.
-   ID Federation은 여러 유형이 있다.
    -   SAML 2.0
    -   Custom Identity Broker
    -   Amazon Cognito를 사용하거나 또는 사용하지 않는 Web Identity Federation 
    -   Single Sign-On(SSO)

**SAML 2.0 Federation**

-   SAML은 Security Assertion Markup Language의 약자로, ADFS 등 많은 ID Provider에서 사용하는 오픈 표준이다.
-   Microsoft Active Directory와 통합할 수 있고, AWS와 SAML 2.0 호환 IdP를 통합할 수 있다.
-   이를 통해 콘솔, CLI 또는 모든 API에 임시 자격 증명으로 액세스할 수 있으므로, 각 직원에 대해 IAM 사용자를 만들 필요가 없다. 물론 이렇게 하기 위해서는 IAM과 SAML 2.0 제공업체 간에 양방향 신뢰를 설정해야 한다.
-   내부적으로 STS 서비스의 AssumeRoleWithSAML API를 사용해 SAML Assertion을 통해 임시 자격 증명을 받는다.
-   SAML 2.0은 이전 방식이고 최신 Amazon Single Sign-On 서비스가 관리형 방식으로 새롭게 나왔지만, SAML 2.0 Federation에 대해서도 알아야 한다.

>   SAML Assertion이란?
>   SAML 어설션은 서비스 공급자에게 로그인하는 직원이 인증되었음을 알려 주는 데이터를 포함하는 XML 문서입니다.
>   사용자가 누구인지, 어떤 관련 정보가 사용자인지, 사용자에게 액세스할 수 있는 권한이 무엇인지를 식별하는 ID 공급자(IdP) 서비스 공급자(SP)에 대해 교환되는 메시지

**SAML 2.0 Federation - AWS API Access**
우리 기업에 ID Provider가 있고, AWS가 있으며 사용자가 S3 버킷에 액세스하려고 한다고 가정해보자
기업 내부에 포털 또는 ID 제공업체가 있다.
1.  사용자는 IdP에 인증 요청을 보낸다.
2.  IdP는 LDAP 기반 ID 저장소 등을 통해 요청을 확인하고, 로그인이 성공하면 SAML Assertion을 반환한다. 
    -   이 SAML Assertion은 사용자가 본인임을 증명하는 것이다. 
3.  이 SAML Assertion을 가지고 사용자는 AssumeRoleWithSAML API로 STS 서비스를 호출할 수 있다. 사용자는 SAML Provider의 ARN, 맡을 역할의 ARN, IdP의 SAML Assertion을 전달한다.
4.  STS는 SAML Assertion을 신뢰할 수 있는지 확인하고
5.  임시 보안 자격 증명을 제공한다.

사용자는 이 메커니즘을 통해 AWS API에 액세스할 수 있다.

자세한 설명은 [링크](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html#CreatingSAML-configuring)에서 참조하면 된다.

**SAML 2.0 Federation - AWS Console Access**

IdP와 LDAP 기반 저장소가 있고 앞의 경우와 동일하게 인증 루프가 있다.
그러나 이번에는 https://signin.aws.amazon.com/saml 엔드포인트에 AWS 로그인 요청을 보낸다.

1.  /saml 엔드포인트에 AWS 로그인 요청을 보낸다.
2.  그러면 STS 서비스를 통해 보안 자격 증명을 반환하고
3.  AWS 콘솔의 로그인 URL이라는 특수 URL을 반환한다.
4.  사용자는 이 URL을 사용해서 AWS 관리 콘솔로 리디렉션된다.

자세한 설명은 [링크](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html)에서 참조하면 된다.


위 두 가지 흐름은 동일한 SAML 2.0 Federation을 사용해서 매우 유사하다.

**SAML 2.0 Federation - Active Directory FS (ADFS)**
ADFS를 사용하는 경우는 IdP가 Microsoft Active Directory Federation Services가 되고, LDAP Identity Store가 Active Directory가 된다.

IdP인 ADFS와 디렉터리 자체인 Active Directory의 차이점을 이해하는 것이 중요하다.

**Custom Identity Broker Application**
더 복잡하고 오래된 방식으로 ID Provider가 SAML 2.0과 호환되지 않는 경우 Custom ID Broker를 사용해야 한다.

AWS 서비스와 관리 콘솔에 액세스하려면 기업 ID Provider와 사용자 지정 ID 브로커가 필요하다.

1. 사용자는 ID 브로커에 로그인하면 브로커가 로그인 자체를 확인한다.
2.  ID 브로커가 AWS에 인증하고 임시 자격 증명을 요청한다. 
    -   이 때 AWS API를 사용할 수 없으므로 Custom ID 브로커에 관리 권한이 있어야 하며, STS 서비스에서 직접 임시 자격 증명을 요청할 수 있어야 한다.
    -   즉, ID 브로커가 해당 사용자에 대한 적절한 IAM 역할을 결정해야 하므로 사용자 관리가 ID 브로커 자체로 이동한다.
    -   사용자 지정 ID 브로커에서 STS의 AssumeRole 또는 GetFederationToken API를 직접 사용하는 방법 밖에는 안된다.
3.  보안 자격 증명을 검색하면 사용자에게 전달되고, 사용자는 AWS API에 액세스하거나 관리 콘솔로 리디렉션 된다.

**Web Identity Federation - Without Cognito**
web ID Federation은 Cognito 없이 하는 방식과 Cognito를 사용하는 방식 두 가지가 있다. AWS에서는 Cognito 사용을 권장한다.

Web ID Federation은 신뢰할 수 없는 환경에서 사용하는 것이다.
이전에는 기업 내부에서 서비스에 액세스했지만, 이번에는 클라이언트가 클라우드에 직접 액세스하려는 상황이다. 또한 Amazon, Google, Facebook 또는 OpenID Connect 호환 IdP를 통해 인증할 것이다.

이 방식은 AWS와 신뢰 메커니즘으로 설정되어 있다.

1.  클라이언트가 제3자 IdP에 로그인한다.
2.  웹 ID 토큰이 클라이언트와 공유된다.
3.  AssumeRoleWithWebIdentity API라는 STS API를 사용해 토큰을 주고 받으며
4.  이를 통해 AWS에 대한 임시 보안 자격 증명을 받는다.
5.  이 자격 증명을 사용해 AWS 리소스에 직접 액세스할 수 있다.

**Web Identity Federation - With Cognito**
Cognito를 사용하면 좀 더 안전하고 간단하다. 웹 ID Federation보다 선호되는데, Cognito에서는 최소 권한의 IAM Role을 만들고 OIDC IdP와 AWS 간에 신뢰만 구축하면 된다.

1.  Cognito 서비스가 있고, 클라이언트는 제3자 IdP에 인증하여 토큰을 받는다.
2.  ID Token은 Amazon Cognito와 교환되어 Cognito 토큰을 반환 받는다.
3.  Cognito 토큰을 STS와 교환하면 AWS에 대한 임시 보안 자격 증명을 받을 수 있다.
4.  클라이언트가 AWS 리소스에 직접 액세스할 수 있다.

왜 Cognito 매커니즘을 사용해야 하는가?
-   Cognito는 익명 사용자를 지원하고, MFA를 지원하며, 데이터 동기화 기능이 있다.
-   이 경우 Amazon Cognito는 Token Vending Machine의 역할을 하여 토큰과 자격 증명을 교환한다.

자세한 설명은 [링크](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_cognito.html)에서 참조하면 된다.


Web ID Federation에서 IAM 정책을 제한하는 방법이 있다.
IAM Policy Variable을 이용하면 된다.

-   cognito-identity.amazonaws.com:sub
-   www.amazon.com:user_id

이 IAM Policy 변수를 사용하면 IAM 정책을 조건으로 제한할 수 있어, 사용자가 정말로 필요한 제한을 받게 할 수 있다.

```Yaml
"Condition": {
    "StringLike": {
        "s3:prefix": "Amazon/mynumbersgame/${www.amazon.com:user_id}/*"
    }
}
```

위와 같이 User_id 접두사로 버킷을 나열하고 해당 접두사로 객체를 가져오고 업데이트하고 넣을 수 있도록 허용하면 된다.

## AWS Directory Service
**What is Microsoft Active Directory (AD)?**
-   Microsoft AD는 AD Domain Service라고 하는 것이 설치된 모든 Windows 서버에서 찾을 수 있다.
-   사용자 계정, 컴퓨터, 프린터, 파일 공유, 보안 그룹 등의 개체로 이루어진 데이터베이스가 될 것이다.
-   Windows, Microsoft 환경에서 보안 관리, 새 계정 생성, 권한 할당을 중앙 집중식으로 할 수 있다.
-   개체, 사용자, 계정, 프린터는 트리라고 하는 것으로 구성되고 조직될 것이다.
-   여러 개의 트리 모임은 포레스트라고 한다.

Microsoft AD는 Domain Controller가 있고, 이 도메인 컨트롤러에 다른 Microsoft 머신들이 연결되어 있다.

도메인 컨트롤러에는 John 사용자가 있고 password라는 비밀 번호가 있을 때 이제 John의 비밀번호를 사용해 이들 머신 중 어디에서나 연결할 수 있고, 액티브 디렉터리가 로그인 자체를 확인한다는 것이다.

그래서 이 로그인들을 도메인 컨트롤러 전반에 걸쳐 동기화할 수 있게 해준다.

**What is ADFS (AD Federation Services)?**
ADFS는 애플리케이션 전반에 걸쳐 SSO(Single Sign On)을 제공하고 서드 파티에 대해 SAML 통합(AWS Console, Dropbox, Office 365 등)을 갖추고 있다.

ADFS는 사용자가 Microsoft Active Directory 서비스의 URL로 이동하면 사용자를 Microsoft Active Directory에 대해 인증할 것이다.
그러면 SAML 토큰이 사용자에게 반환되고, 그 다음 콘솔에 대해 로그인 URL을 얻기 위해 AWS와 토큰을 교환할 것이다.

**AWS Directory Service**
세 가지 유형이 있고 AWS Managed 서비스이다.

-   AWS Managed Microsoft AD
    -   Microsoft AD를 클라우드에서 운영하는 것이다.
    -   고유의 AD를 AWS에서 만들 수 있고, 사용자를 로컬에서 관리하며, MFA를 지원한다.
    -   온프레미스 AD와 신뢰 관계를 설정해야 한다.
    -   온프레미스와 클라우드 두 곳 사이에 신뢰 관계가 있어 사용자가 정의된 곳이 두 군데이다.
-   AD Connector
    -   클라우드 AD에서 온프레미스 AD로의 링크를 만드는 프록시, MFA 지원
    -   사용자는 온프레미스 AD 한 곳에서만 관리된다.
    -   인증은 프록시인 AD Connector로 이동한 다음 응답을 얻기 위해 온프레미스 AD로 프록시된다.
-   Simple AD
    -   Microsoft AD가 아니라 AD 호환 API이다.
    -   Samba라고도 하며 AWS에서 관리되지만 독립 실행형이고 온프레미스 AD에 조인할 수 없다.
    -   Simple AD는 저렴한 대안이며, 기능이 많지 않다.
    -   MFA를 지원하지 않고, SQL 서버 등 AWS에 조인할 수 없지만 단순하고 저렴하며 문제에 따라 좋은 솔루션이 될 수 있다.

**AWS Directory Services AWS Managed Microsoft AD**
AWS Managed Microsoft AD의 경우 VPC 내에 Microsoft Active Directory를 배포하게 된다.
-   고가용성을 위해 두 개의 AZ가 있고, 두 AZ에 두 개의 AD Domain Controller(AD DC)가 배포된다.
-   Windows 인스턴스를 생성해 SharePoint 같은 전통적인 애플리케이션을 배포하거나, 여러 계정과 VPC의 Amazon EC2 인스턴스에서 직접 도메인 컨트롤러에 원활한 도메인 조인을 할 수 있다.
-   Integration: RDS for SQL Server, Workspaces, QuickSight와 원활하게 통합하여 사용할 수 있다. 그리고 SSO를 생성해 서드파티 애플리케이션에 대한 액세스를 제공할 수도 있다.
-   AWS 내에서 독립 저장소가 될 수 있거나 온프레미스 AD에 조인될 수 있다.
-   Multi AZ 배포는 최소 2개의 AZ이지만, 스케일링 및 가용성을 높이려면 더 많은 Domain Controller를 추가할 수 있다.
-   필요한 경우 자동 백업을 받을 수 있다.
-   또한 디렉터리의 자동 다중 리전 복제를 받을 수도 있다.

**AWS Microsoft Managed AD - Integrations**
Managed AA DC는 AD two-way forest trust라는 것을 사용해 온프레미스 Active Directory와 통합된다.

또한 다양한 데이터베이스 서비스와 통합된다.

가장 중요한 것은 RDS for SQL Server, Amazon WorkSpaces, QuickSight, Connect, WorkDocs 및 Single Sign-On이다.

그리고 Single Sign-On을 통해 GitHub, Box, Dropbox, Offiece 365 등의 더 많은 SAML 비즈니스 애플리케이션에 액세스할 수 있다.

마지막으로 EC2 인스턴스에 배포하는 .NET 앱, SharePoint, SQL Server 등의 전통적인 Active Directory 애플리케이션을 AWS에서 관리하는 Active Directory와 통합할 수 있다.

**Connect to on-premise AD**
온프레미스 Active Directory에 연결하는 방법을 이해하는 것이 시험에서 매우 중요하다.

온프레미스 AD를 AWS Managed Microsoft AD에 연결하기 위해서는 Direct Connect 또는 VPN 연결을 설정해야 한다.

이 경우 세 가지 유형의 Forest Trust를 설정할 수 있다.
1.  AWS가 온프레미스를 신뢰하는 One-way trust
2.  온프레미스가 AWS를 신뢰하는 One-way trust
3.  서로를 신뢰하는 Two-way trust

중요한 점은 이 Forest Trust는 동기화와 다르다는 것이다. 복제는 AWS Managed Microsoft AD에서 지원되지 않는다.
사용자가 두 개의 다른 Microsoft Active Directory에 독립적으로 존재하며, 이 Forest Trust 덕분에 한 쪽에 사용자가 없으면 다른 DC(Domain Controller)에 "나는 너를 믿는데 너는 그 사용자가 있니?" 라고 질의할 수 있는 것이다.

온프레미스에 있는 AD App은 온프레미스 AD에 연결할 수 있다.

EC2 인스턴스는 Microsoft Managed AD에 원활한 도메인 조인을 할 수 있다.

Two-way Forest Trust를 설정한 경우 온프레미스에 있는 AD App이 AWS에 속한 도메인을 요청하는 경우, 신뢰 관계 덕분에 Microsoft Managed AD에서 사용자를 확인할 수 있다.

**Solution Architecture: Active Directory Replication**
요구 사항은 이렇다. 예를 들어 온프레미스의 AD를 AWS에 복제해 지연시간을 최소화 하려고 한다고 가정하고, Direct Connect나 VPN이 다운되더라도 사용자가 연결을 유지하고 정상적으로 작동할 수 있도록 온프레미스 AD의 복제본을 AWS에 두려고 한다.

그러려면 온프레미스와 AWS의 AD들 사이에 신뢰 관계를 설정해야 한다.

복제를 설정할 유일한 방법은 EC2 Windows 인스턴스에 액티브 디렉터리를 배포하고 복제를 설정하는 것이다.

그러면 온프레미스 Microsoft AD가 VPC에 복제되어 지연 시간을 최소화하고 재해 복구 전략을 갖출 수 있다.

그리고 이 EC2 인스턴스와 동일한 VPC 내 AWS Managed Microsoft AD DC 사이에 Two-way Trust를 설정할 수 있다.

온프레미스 AD --Replication--> EC2 Windows 인스턴스 <--Two-way Trust--> AWS Managed Microsoft AD DC

**AD Connector**
-   게이트웨이 역할을 하는 프록시로, 요청을 온프레미스 microsoft Active Directory로 리디렉션 한다. 
-   캐싱 기능은 없다.
-   사용자는 온프레미스에서만 관리되며, 신뢰 관계를 설정할 필요가 없다.
-   VPN 또는 Direct Connect가 필요하다.
-   SQL Server와 통합되지 않고 원활한 도메인 조인을 지원하지 않는다.

AD Connector는 어떻게 작동하는가?
-   예를들어 기업 사무실과 AWS 환경이 있으며, 두 곳 사이에 VPN 또는 Direct Connect 연결이 있다. 그리고 기업 사무실 내에 직접 Active Directory를 사용할 수 있다.
-   사용자가 인증을 원하게 되면 다음과 같다.
1.  먼저 사용자 자격 증명을 사용자 정의 로그인 페이지에 입력한다. 
2.  로그인 페이지는 멀티 AZ일 수 있는 AD Connector에 연결된다.
3.  AD Connector는 기업 사무실의 Active Directory로 요청을 프록시 하며 LDAP 인증을 수행한다.
4.  인증이 완료되면 AD Connector는 STS AssumeRole IAM을 수행하여 임시 자격 증명을 가져온다.
5.  사용자가 AWS에 인증된다.


**Simple AD**
-   Simple AD는 매우 저렴한 Active Directory이며 가장 일반적인 디렉터리 기능을 제공한다.
-   EC2 인스턴스 조인, 사용자 및 그룹 관리를 지원한다.
-   MFA, RDS SQL Server, SSO와의 통합을 지원하지 않으며, 소규모 사용자를 위한 것이다.
-   사용하려는 계층에 따라 최대 500명에서 5,000명까지의 사용자만 지원한다.
-   Samba 4를 기반으로 하며 API 측면에서 Microsoft AD와 호환되지만 비용이 낮고 규모가 작다.
-   기본적인 AD 기능이나 LDAP 호환성만 제공되며 온프레미스 Microsoft AD와 신뢰 관계를 설정할 수 없다.


## AWS Organizations
AWS Organizations는 다수의 계정을 한꺼번에 관리할 수 있게 해준다.

Organizations는 상단에 Root Organizational Unit, OU가 있고 그 안에는 관리 목적에 사용할 계정인 Management Account가 있다.

그리고 Root OU 안에는 다양한 OU가 있을 수 있다.
개발 환경을 위한 OU가 있어 OU 안에 다수의 Member Account가 있을 수 있다.

우리는 모든 계정을 관리하는 Management Account와 보통 계정인 Member Account를 구분해야 한다.

DEV OU만 존재할 수 있는 것은 아니고 다른 Member Account가 있는 Prod OU가 있을 수 있다.

그리고 OU 안에 또 OU가 있을 수도 있다.

**OrganizationAccountAccessRole**
Organizations는 어떻게 관리를 수행하게 될까?
OrganizationAccountAccessRole 를 이용해서 수행하게 된다. 시험에 나온다.

Organization이 있고 Management Account가 있는 상태에서 우리가 AWS Organization 서비스의 API를 이용해서 Member Account를 생성하면 그 Member Account 안에 자동으로 IAM Role이 생성되고 그 역할의 이름이 바로 OrganizationAccountAccessRole 이다.

Management Account가 Member Account에 대한 관리 임무를 수행해야 할 때 우리는 외부에서 AssumeRole API를 이용해서 관리 역할을 맡게 된다.

이제 Management Account는 이 역할을 이용해서 IAM 사용자 생성 같은 관리 작업을 Member Account에서 수행한다.

만약 승인을 한다면 Management Account에 있는 IAM User가 Member 계정에 있는 역할을 맡을 수도 있다.

Organization의 API로 생성된 새로운 멤버 계정에 자동으로 이 역할이 추가된다.
그러나 어떠한 계정을 Organization에 초대하고 그 계정이 이미 존재하고 있었다면 우리는 수동으로 이 역할을 생성해야 한다.

**Multi Account Strategies**
우리는 department, cost center, dev / test / prod 등의 다수의 계정 전략이 있다.

(재작성)

가령 dev, test, prod의 환경 별로 계정을 생성하거나, 규제에 따른 제한 조건을 기초로 생성하거나, 리소스 분리를 최적화하기 위해 계정을 생성할 수 있다.

VPC 마다 하나의 계정을 두거나, 계정 당 별도의 서비스 한도를 원할 수도 있으며 로깅을 위한 별도의 계정을 원하는 등 다양한 경우가 있을 수 있다.

(재작성)


**Organizational Units (OU) - Examples**
비즈니스 단위의 형태에 따라 OU가 있을 수도 있다.

Management Account를 기준으로 Sales, Retail 등등의 OU를 가지고 있는 Business Unit으로 구성하거나,
Enviroment Unit으로 구성해 DEV, TEST, PROD 형태의 OU를 두거나,
Project Unit으로 구성해 Project1, Project2 등의 OU를 둘 수도 있다.
결국 우리가 선택하기 나름이고, 몇 가지 아이디어가 있을 뿐이다.

![Example of a basic organization](https://docs.aws.amazon.com/images/whitepapers/latest/organizing-your-aws-environment/images/example-basic-organization.png)

**AWS Organization - Feature Modes**
Organization은 두 가지 기능 모드가 있다.

-   Consolidated billing feature(통합 청구 기능 모드)
    -   이 기능 모드를 이용하면 모든 계정의 청구서를 집계하게 되고, 관리 계정으로부터 직접 하나의 결제 방식이 제공된다.
    -   이렇게 하는 이유는 합계 사용량으로 가격 혜택을 받을 수 있기 때문이다.
    -   모든 계정에 걸쳐 EC2나 S3 등에 대해 대량 사용 할인을 받게 된다.
-   All Feature (Default)
    -   통합 청구 기능도 포함 되지만 그것 외에도 SCP 기능이 추가된다.
    -   어떤 계정을 초대하게 되면, 그 계정은 전체 기능 활성화를 승인해야 한다.
    -   전체 기능 활성화를 하면 SCP(Service Control Policy)를 사용할 수 있는데 Member 계정이 organization을 떠나지 못하게 하는 정책이다.
    -   만약 All Feature를 활성화했다면 다시 통합 청구 기능만을 사용할 수는 없다.

**AWS Organizations - Reserved Instances**
-   청구 목적으로 AWS Organization의 통합 청구 기능은 모든 계정을 하나의 계정으로 간주하게 된다. 그래서 Organization 안의 모든 계정은 다른 어떤 계정이 구매한 Reserved Instance의 시간 당 비용 혜택을 받게 된다. 
-   설령 어떤 계정이 Reserved Instance를 사용하지 않더라도 절약 금액이 극대화 되는 것이다.
-   Organization의 결제 계정인 Management 계정은 Payer 계정을 포함해서 어떠한 계정의 Reserved Instance 공유 또는 Savings Plans 할인 공유를 끌수 있다.
-   반면에 두 계정에 걸쳐 Reserved Instance나 Savings Plans를 공유하려면 두 계정이 공유를 켜야한다.

**AWS Organizations - Moving Accounts**
-   Organizations 간에 계정을 옮길 수도 있다.
-   예를들어 두 개의 AWS Organization이 있고 Member 계정을 둘 사이에 옮기려고 할 때 먼저 기존에 등록되어 있는 Organization에서 Member 계정을 삭제해야 한다.
-   그러면 Member 계정은 독립된 계정이 될 것이고, 새로운 Organization에서 Member 계정을 초대할 수 있다.
-   마지막으로 Member 계정에서 그 초대를 수락해서 Member 계정이 새로운 Organization에 가입하게 할 수 있다.


## AWS Organizations Policies
**Service Control Policies (SCP)**
-   allowlist 또는 blocklist IAM action을 정의할 수 있다.
-   OU 수준이나 계정 수준에서 적용되며, Management Account에는 적용되지 않는다.
-   SCP는 루트 사용자를 포함해서 계정 안에 있는 모든 사용자와 역할에 직접 적용된다.
    -   그러나, 서비스에 연계된(Service-linked) 역할에는 영향을 미치지 않는다. 예를 들어 EC2에 부여된 역할. 서비스에 연계된 역할들은 다른 서비스와 AWS Organization의 통합을 해서 SCP로 제한할 수 없다.
-   SCP는 반드시 명시적인 허용이 필요하다. 기본값으로 아무것도 허용되어 있지 않기 때문이다.
-   사용 사례
    -   EMR을 사용하지 못하게 하는 등 특정 서비스에 대한 액세스를 제한하는 경우
    -   명시적으로 서비스를 비활성화해서 PCI 준수를 강제하는 경우도 있다.

**SCP Hierarchy**
-   OU나 계정 수준마다 다른 SCP가 적용될 수 있고, Management는 모든 관리 능력을 유지하기 위해 SCP가 있어도 적용되지 않는다.
-   계정은 상위에 있는 SCP를 무조건 상속 받는다. 예를 들어 A OU SCP에 DenyRedshift SCP를 할당하면 하위에 있는 Account에 AuthorizedRedshift SCP를 할당해도 명시적으로 OU에서 거부 당하기 때문에 하위 Account는 Redshift에 액세스할 수 없다.
-   OU안에 OU가 있는 경우도 동일하다. A OU 안에 있는 B OU의 경우 Root OU, A OU의 SCP를 상속 받는다.

![SCP_diagram](https://docs.aws.amazon.com/images/organizations/latest/userguide/images/scp_deny_1.png)


**IAM Policy Evaluation Logic**

![Policy_evaluation_logic](https://docs.aws.amazon.com/images/IAM/latest/UserGuide/images/PolicyEvaluationHorizontal111621.png)

이 그림은 AWS 안에서 액션이 어떻게 승인되거나 거부되는지 설명되어 있다.

1.  먼저 정책을 살펴보고 명시적인 거부가 있다면 자동으로 거부된다.
2.  Organizations SCP를 확인하고 허용되어 있다면 다음 단계로 가고 그렇지 않으면 거부된다.
3.  리소스 기반 정책을 확인한다. 정책이 있다면 허용되어 있는지 확인한다.
4.  자격 증명 기반 정책이 있는지 확인하고 허용되어 있는지 확인한다.
5.  IAM 권한 경계를 확인한다.
6.  마지막으로는 세션 정책을 확인한다.

**Restricting Tags with IAM Policies**
-   태그를 이용해서 AWS 리소스를 제한할 수도 있다.
-   aws:TagKeys 의 조건 키를 사용해서 특정 AWS 리소스를 제한할 수 있다.
    -   IAM 정책에 있는 태그 키와 리소스에 첨부된 태그 키를 비교해서 검증할 수도 있다. (시험에 출제됨)
    -   예를들어 "Env", "CostCenter" 태그가 있을 때만 EBS 볼륨을 생성하도록 허용하려면 이런 정책이 있어야 한다.
-   모든 키를 매칭 시키는 경우 "Condition"에 "ForAllValues:StringEquals"를 이용해서 "Env", "CostCenter" 태그가 반드시 모두 있어야 한다고 요구하거나, ForAnyValue를 사용해 최소한 그 태그들 중 하나가 있어야 한다고 요구할 수 있다.
-   EBS를 생성할 때 ForAllValues로 조건을 할당하면 두 태그 모두 있어야 생성이 가능하며 ForAnyValue로 조건을 할당하면 둘 중 하나만 있어도 생성이 가능하다.

**Using SCP to Deny a Region aws:RequestRegion**
-   aws:RequestRegion를 사용해서 전체 리전을 거부하는 SCP도 있을 수 있다.
-   우리는 "Effect": "Deny"를 지정하고 모든 걸 거부할 리전을 지정할 수 있다. 
-   "ArnNotLike" 를 이용해서 특정 Role을 바이패스 설정할 수도 있다.

**Using SCP to Restrict Creating Resources without appropriate Tags**
-   SCP를 이용해서 적절한 태그가 없는 경우에 리소스 생성을 제한할 수도 있다.
-   IAM 사용자와 역할이 금지된 행동을 하지 못하도록 막기 위한 것이다.
-   예를 들어 "Project", "CostCenter" 태그가 없다면 EC2 인스턴스 실행을 제한할 수 있다.
-   "Condition" {"aws:RequestTag/Project": "true"} 으로 설정하면 Project 태그가 없는 요청을 거부할 수 있다.

**AWS Organizations - Tag Policies**
-   태그 정책은 Organization 수준에서 정의되고, 어떤 Organization 안에 있는 모든 리소스에 걸쳐 태그를 표준화하는 데 도움을 준다.
-   그래서 태그 일관성을 유지하고, 태그 리소스를 감독하며 적절하게 태그를 분류하는 등의 목적으로 사용된다.
-   태그 키와 허용되는 값들을 정의한다.
-   비용 할당 태그(Cost Allocation Tags)와 속성 기반 액세스 제어(Attribute-based Access Control)에 도움을 준다.
-   정책을 준수하지 않을 경우 지정된 서비스와 리소스에 대한 태깅 작업이 모두 금지된다.
-   모든 태그 또는 미준수 리소스가 나열된 보고서도 받을 수 있고, 미준수 태그를 검색하려면 Amazon EventBridge를 사용할 수 있다.

```json
{   
    "tags": {
        "costcenter": {
            "tag_key": {
                "@@assign": "CostCenter"
            },
            "tag_value" : {
                "@@assign": ["100", "200"]
            },
            "enforced_for" : {
                "@@assign": ["secretsmanager:*"]
            }
        }
    }
}
```

-   이와 같이 구성되어 있을 때 secretsmanager 서비스에 대해 CostCenter라는 키만 있고 값은 100 또는 200만 있다.
-   결국 규정을 준수하기 위해서는 CostCenter key 에 100 또는 200의 Value가 있어야만 규정이 준수된다.

**AWS Organizations - AI Services Opt-out Policies**
-   Organization에는 AI 서비스 기반 거부 정책도 있다.
-   AWS의 Amazon Lex, Amazon Comprehend, Amazon Polly와 같은 AI 서비스가 우리가 실제로 제공하는 콘텐츠를 이용해 Amazon AI 또는 머신러닝 서비스를 개선할 수 있다.
-   AWS가 우리의 데이터를 이용해서 서비스를 개선하는 것이다. 그러나 우리는 저장된 콘텐츠를 서비스가 개선에 활용하는 것을 거부할 수 있다. 그러려면 우리는 모든 멤버 계정과 모든 AWS 리전에 걸쳐 적용될 DENY 정책을 생성해야 한다.
-   이걸 이용해서 모든 서비스를 거부하거나, 특정 서비스만 거부할 수도 있다.
-   정책은 Organization Root 나 특정 OU에 첨부하거나 직접 개별 멤버 계정에 첨부할 수 있다.

```Json
{
    "services": {
        "default": {
            "opt_out_policy": {
                "@@assign": "optOut"
            }
        },
        "comprehend": {
            "opt_out_policy": {
                "@@operators_allowed_for_child_policies": ["@@none"],
                "@@assign": "optOut"
            }
        },
        "rekognition": {
            "opt_out_policy": {
                "@@assign": "optIn"
            }
        }
    }
}
```

자세한 설명은 [링크](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)에서 확인 가능하다.


**AWS Organizations - Backup Policies**
-   백업 정책은 우리가 AWS Backup을 이용해서 백업 계획을 정의하도록 도와준다.
-   우리는 조직 수준에서 JSON 문서로 백업 정책을 정의하고 빈도, 기간, 백업 리전 등 리소스 백업을 자세하게 통제할 수 있게 된다.
-   이걸 Organization Root 또는 특정한 OU 또는 개별 멤버 계정에 첨부할 수 있다.
-   이렇게 설정하게 되면 이것은 Immutable(불변하는)한 백업 계획이고, AWS Backup의 Member 계정에 표시된다. 그러나, Member 계정에서는 열람만 가능할 것이고 Organization Management 계정 안에서만 관리할 수 있다.

## AWS IAM Identity Center

**AWS IAM Identity Center**
-   이전에 AWS Single Sign-On 서비스에서 이름만 바뀐 똑같은 서비스이다.
-   Organizations 안에 모든 AWS 계정 뿐만 아니라 우리의 비즈니스 클라우드 애플리케이션(Salesforce, Box, Microsoft 365)에게도 단 한 번의 로그인을 제공한다.
-   그리고 SAML 2.0이 통합된 모든 애플리케이션에 접속할 수 있다.
-   EC2 Windows 인스턴스도 Single Login을 제공한다.
-   단 한번의 로그인으로 모든 것에 액세스할 수 있어서 편리하고, 시험에는 다수의 AWS 계정에 한번에 로그인하는 방법에 대해 물어볼 것이다.
-   Id Provider는 두 가지가 있을 수 있다.
    -   IAM Identity Center에 있는 내장형 자격 증명 저장소가 있고
    -   Active Directory 또는 OneLogin, Okta 등의 써드파티 자격 증명 제공자에 접속할 수도 있다.

**AWS IAM Identity Center - Login Flow**
-   로그인 페이지로 가서 사용자 이름과 패스워드를 입력하고 AWS IAM Idnetity Center로 간다.
-   Identity Center에서 원하는 계정을 클릭하면 관리 콘솔에 직접 접속할 수 있다.
-   그래서 특정한 콘솔에 로그인하는 방법을 알 필요가 없고 내 IAM Identity Center 포털에 로그인하고 거기서 싱글 사인온하면 패스워드를 입력할 필요가 없다.
-   다수의 AWS 계정을 갖고 있다면 이 서비스를 사용하는 게 좋다.

**AWS IAM Identity Center**
브라우저 인터페이스는 우리의 IAM Identity Center의 로그인 페이지에 접속할 것이고, 우리는 다양한 사용자 저장소와 통합해야 한다.
-   저장소는 Active Directory가 될수 있다.
    -   Active Directory를 사용해서 사용자와 그룹을 관리할 수 있다.
-   또한 저장소는 IAM Identity Center를 사용할 수도 있다. 내장형 자격 증명 저장소이고, IAM에서 많이 해본 것 처럼 우리는 사용자와 그룹을 정의할 수 있다.

SSO로서 Identity Center, AWS Organization, Windows EC2 인스턴스 또는 비즈니스 클라우드 애플리케이션 또는 커스텀 SAML2.0 적용 애플리케이션을 통합할 수 있다.

SSO를 사용하면 한 번에 로그인하면 되기 때문에 흐름을 크게 단축시킬 수 있어서 편리하다.

Identity Center는 권한 세트를 이용해서 사용자가 무엇에 액세스할 수 있는지 정의한다.

-   IAM Identity Center 안에서 권한과 사용자, 그리고 그룹들은 어떻게 연계되어 있는가?
    -   AWS Organization이 있고, Management 계정에서 IAM Identity Center를 설정한 경우, Development와 Production OU가 있을 때 Developer라는 그룹에 있는 Bob과 Alice라는 두 명의 개발자가 있다고 가정해보자.
    -   Bob과 Alice가 Development OU에 완전히 액세스할 수 있으려면 권한 세트를 생성해야 한다. 그리고 관리자 액세스를 허용해야 한다. 그리고 권한 세트를 특정한 OU와 연계해야 한다.
    -   권한 세트를 개발자 그룹에게 할당하고 Development OU와 연계하면, Bob과 Alice는 Development 계정에 있는 역할을 Assume할 수 있고, 해당 계정에 완벽히 액세스할 수 있게 된다.

결과적으로 권한 세트를 생성하고 해당 권한 세트에 대해 권한을 부여한 뒤 특정 그룹 또는 사용자에게 부여해 그룹 또는 사용자가 Assume을 이용해서 다른 OU 또는 동일한 OU에 액세스할 수 있는 것

**AWS IAM Identity Center Fine-grained Permissions and Assignments**

-   Multi-Account Permission
    -   Identity Center를 이용하면 다수의 계정에 걸쳐 액세스를 관리할 수 있고, 권한 세트를 이용해 하나 또는 다수의 IAM 정책을 사용자와 그룹에 할당하고 그들이 AWS에서 무엇에 액세스할 수 있는지 정의할 수 있다.
    -   예를들어 Dev, Prod 두 개의 계정이 있고, DB에 대한 Admin 권한이 있을 때 Identity Center에서 권한 세트를 설정해 DB에 대한 Admin을 할당하고, 특정 계정의 IAM 역할을 자동으로 Assume 되어 역할에 따른 권한을 받게 된다.
-   Application Assignment
    -   애플리케이션 할당도 Multi-Account Permission과 같은 방식으로 작동하고 어떤 사용자나 그룹이 어떤 애플리케이션에 액세스할 수 있는지 정의할 수 있다.
    -   필요한 URL과 인증서, 메타데이터 등을 제공한다.
-   Attributed-Based Access Control (ABAC)
    -   IAM Identity Center 저장소에 저장된 사용자의 속성을 기초로 세부적인 권한을 태그 기반으로 권한을 부여할 수 있다.
    -   이걸 이용해서 우리는 어떤 사용자를 Cost Center에 할당하던지, 주니어나 시니어 같은 명칭을 제공하던지, 특정한 영역에만 액세스할 수 있도록 local을 설정한다든지 할 수 있다.
    -   활용 사례를 보면 실제로 권한 세트를 한 번만 정의하고 권한 세트가 이런 속성들을 활용하게 된다. 그리고 간단히 그 기본 속성을 변경해서 사용자나 그룹의 AWS 액세스 권한을 수정한다.

## AWS Control Tower

Control Tower는 안전하고 규정을 준수하는 다중계정 AWS 환경을 설정하고 관리하는 모범 사례에 기반한 간편한 방법이다.

Control Tower의 이점
-   몇 번의 클릭 만에 우리의 관리 환경을 자동화할 수 있다.
-   guardrail을 활용해 지속되는 정책 관리 능력을 얻을 것이다.
-   정책 위반 사항을 탐지하고 자동으로 교정해준다.
-   대화형 대시보드를 통해 규정 준수를 감시할 수 있다.

Control Tower는 다중 계정 모범 사례를 자동화하는 방법이고, AWS Organization의 통제 하에 운영된다.
Organization을 설정해 줄것이고 계정을 체계화해 줄 것이다. 그리고 필요로 하는 SCP를 자동으로 구현한다.

**AWS Control Tower - Account Factory**

Account Factory는 계정 프로비저닝과 배포를 자동화한다.

이 기능은 사전 승인된 베이스라인과 Configuration 옵션을 생성할 수 있다.
이는 우리 조직의 모든 계정에 해당되고, 기본 VPC 구성하기 또는 서브넷과 리전 구성하기 등이 있다.

이를 수행하기 위해 AWS Service Catalog라고 불리는 기본 인프라 서비스를 이용한다. 새로운 계정을 프로비저닝하기 위함이다.

Account Factory가 아주 도움이 되는 경우를 살펴보자
-   예를들어 클라우드 컴퓨팅 환경이 있고 ADFS와 Active Directory를 탑재한 데이터 센터가 있다.
-   그리고 클라우드와 기업 데이터 센터 간 VPN 또는 Direct Connect를 구축할 것이다.
-   그래서, Control Tower와 랜딩 존을 사용할 때와 Account Factory 용 계정을 생성할 때 중심은 IAM Identity Center가 될 것이다.
-   여러 설정 방법이 있겠지만 기업 데이터 센터에 AD를 통합하고자 한다면 AWS Managed AD를 생성하게 될 것이고, 이는 IAM Identity Center가 담당하는 인증 소스이다.
-   그리고 기업 데이터 센터의 AD와 AWS 간 양방향 신뢰를 구축한다.
-   이 상황에서 랜딩 존과 Account Factory를 통해 생성된 어떤 계정이던 간에 IAM Identity Center를 통해 인증하기 위해 구성될 것이다.
-   그러므로, 클라우드와 기업 데이터 센터에 있는 Active Directory를 기본적으로 사용하도록 해야한다.

**AWS Control Tower - Detect and Remediate Policy Violations**
-   Guardrail
    -   이는 정책 위반 사항을 탐지하고 교정하기 위해 사용된다. 그래서 가드레일은 지속적인 거버넌스를 제공할 것이다.
    -   Preventive:
        -   SCP를 사용한다.
        -   예를 들어 루트 사용자의 액세스 키 생성 권한을 비활성하거나, 금지하는 작업을 수행
    -   Detective:
        -   계정에 모든 권한을 부여하는 대신 루트 사용자에 대한 MFA 활성화 여부를 탐지하기 위해 Config를 사용한다.
        -   Config의 경우 리소스의 규정 준수 또는 비준수 상태를 제공하기 때문에 유용할 것이다.
    -   예시로는 어떤 리소스가 태그되지 않았는지 등의 컴플라이언스에 부합하지 않는 리소스를 파악하기 위해 사용한다.
    -   구체적인 예시로는 Config를 사용하는 Control Tower의 detective guardrail이 있고, 해당 가드레일이 멤버 계정 내 태그되지 않은 리소스에 대해 감시할 것이다. 만약 규정 비준수 상태라면 SNS 토픽을 트리거하고 람다 함수를 호출할 수도 있다. 그 람다 함수 자체가 이를 해결하고 필요한 곳에 태그를 추가할 수 있다.

**AWS Control Tower - Guardrails Levels**

-   Mandatory (필수 가드레일)
    -   AWS Control Tower에 의해 자동으로 활성화되기도 하고 강제되기도 한다.
    -   예를들어 로그 아카이브 계정에 대한 퍼블릭 읽기 액세스를 허용하지 않을 때 사용하기도 한다.
-   Strongly Recommended
    -   말 그대로 강력히 권장되는 지침이다.
    -   예시로 EC2 인스턴스에 연결된 EBS 볼륨을 활성화하는 경우이다.
-   Elective
    -   선택적 가드레일이다.
    -   기업에서 일반적으로 사용되는 경우이다.
    -   MFA 없이 S3 버킷 삭제 작업을 허용하지 않는 등의 선택 사항을 위해 사용된다.

## AWS Resource Access Manager

RAM이란
-   보유한 리소스를 다른 AWS 계정과 공유하기 위해 사용
-   모든 계정 또는 내 조직에 있는 계정들과 리소스를 공유할 수 있다.
-   리소스 중복을 피할 수 있다.
-   RAM을 통해 VPC 서브넷을 공유할 수 있다.
    -   VPC 서브넷을 공유하면 모든 리소스를 동일한 서브넷에서 실행할 수 있다.
    -   모든 서브넷은 동일한 AWS Organizations의 서브넷이어야 한다.
    -   Security Group과 Default VPC는 공유할 수 없다.
    -   Participants는 서브넷 안에서 각자의 리소스를 관리할 수 있지만 다른 Participants나 소유자에게 속한 리소스를 열람, 수정 또는 삭제할 수 없다. 사실상 네트워킹만 공유하는 것이다.
-   Transit Gateway, Route 53 (Resolver Rule, DNS Firewall Rule Group), License Manager Configurations, Aurora DB Cluster, ACM Private Certificate Authority, CodeBuild Project, EC2(Dedicated Host, Capacity Reservation), AWS Glue(Catalog, Database, Table), AWS Network Firewall Policies, AWS Resource Group, System Manager Incident Manager(Contacts, Response Plans), AWS Outposts(Outpost, Site) 등등 여러 공유 가능한 자원이 있다.


**AWS Resource Access Manager - VPC Example**

시험 관점에서 가장 중요한 사용 사례는 VPC이다.

예를 들어 여러개의 어카운트가 있고, VPC를 소유하는 계정 A가 있다고 가정해보자.
이 VPC는 계정 B와 계정 C 간에 공유되어 있을 거고 각각 계정은 각자의 리소스를 담당하게 된다.

계정들은 다른 계정에 있는 다른 리소스를 열람, 수정 또는 삭제할 수 없다.

예를 들어 EC2 인스턴스와 ALB를 계정 B에 배포하고, 계정 C에 EC2 인스턴스가 있으면 서로 통신을 할수는 있지만 서로를 볼 수는 없다.
왜냐하면 별개의 계정이 있기 때문이다.

그러면 결국 우리 데이터베이스가 A 계정에 있는 VPC의 프라이빗 서브넷에 위치할 수 있고, 그럼 네트워크가 공유된다.

즉, 이 모든 것들이 서로 대화하고 사설 IP를 이용해 서로 액세스할 수 있게 된다.

그러면 VPC 피어링을 할 필요가 없어진다.
보안 그룹 또한 계정을 넘나들며 참조할 수 있어 보안 극대화에 도움이 된다.

활용 사례는 동일한 신뢰 경계 안에 있는 애플리케이션이 있을 수 있고, 동일한 VPC 안에서 배포되기 때문에 네트워크가 단순해진다.

그리고 상호 연결 정도가 매우 심한 애플리케이션이 있는 경우에도 역시 네트워크 설정이 훨씬 단순해진다. VPC가 하나만 있고, 기본적으로 그 안에 배포된 모든 애플리케이션은 서로 대화할 수 있기 때문이다.

**Resource Access Manager Managed Prefix List**

RAM은 Managed Prefix List(관리형 접두사 목록)을 공유할 수 있다.

관리형 접두사 목록은 하나 또는 다수의 CIDR 블록 세트를 말한다.

보안 그룹과 라우트 테이블을 손쉽게 설정하고 관리하도록 해준다.

예를 들어
-   계정 A에는 접두사 목록이 있고 CIDR 1, CIDR 2, CIDR 3가 있다. 이 접두사 목록을 X라고 한다.
-   이것들은 회사의 내부 네트워크를 나타내는 세트 또는 규칙이다.
-   그리고 가령 이 규칙들을 적용하려 하면 모든 보안 그룹에 IP 기반으로 추가하는 대신 접두사 목록을 참조하게 해 목록에 해당하는 리스트를 허용하게 하는 것이다. 그리고 이 접두사 목록을 공유할 수도 있다.
-   RAM을 이용해서 접두사 목록 X를 공유하고 계정 B에서 SSH Port 22를 허용하면 해당하는 CIDR 1, CIDR 2, CIDR 3에 대해 전부 허용할 수 있는 것

Prefix List 종류
-   Custom-Managed Prefix List
    -   우리만의 고객 관리 접두사 목록을 사용한다면 우리는 CIDR을 정의하고 그걸 다른 계정이나 Organization와 공유할 수 있고, 수정할 수 있다.
    -   접두사 목록을 수정하면 그 접두사 목록을 사용하던 모든 보안 그룹 또는 라우트 테이블은 한꺼번에 자동으로 업데이트 된다.
-   AWS Managed Prefix List
    -   AWS의 자체 서비스에 대한 CIDR이고, AWS에 의해 정의되어 우리는 생성, 수정, 공유 또는 삭제할 수 없다.


**Resource Access Manager Route 53 Outbound Resolver**

Outbound Resolver도 RAM으로 공유할 수 있는데 하이브리드 설정이나 다수 계정 및 다수 VPC를 갖고 있는 경우에 포워딩 규칙을 DNS로 확장할 수 있다.

예를 들어 주 계정에서 원하는 도메인 이름과 타겟 IP가 있는 포워딩 규칙인 Route53 리졸버 규칙을 정의하고 다른 계정에 이를 공유하고 다른 계정이 수락하면 다른 VPC와 연계될 수 있고, 이 규칙을 가진 다른 모든 VPC는 우리가 지정한 도메인 이름을 리졸빙할 수 있다.

그럼 우리는 DNS를 위해 중앙 집중적으로 관리되는 리졸버 규칙을 가질 수 있게 된다.

## AWS CloudTrail

**CloudTrail**
-   CloudTrail은 우리의 AWS 계정에 거버넌스, 컴플라이언스, 감사를 구현 해주는 방법이다.
-   Default로 CloudTrail은 활성화된다.
-   CloudTrail을 이용하면 콘솔, SDK, CLI 또는 기타 AWS 서비스에 의해 우리 AWS 계정 안에서 이뤄진 모든 이벤트와 API 호출 이력을 얻을 수 있다.
-   모든 로그를 CloudTrail에서 CloudWatch 로그나 Amazon S3에 넣을 수도 있다.
-   모든 리전에 걸쳐 누적된 모든 이벤트 이력을 모든 리전 또는 하나의 리전에 생성할 수 있다.
-   AWS의 어떠한 리소스가 삭제되었다고 한다면 CloudTrail을 조사하면 된다. CloudTrail 안에는 삭제하는 과정에서 발생한 API 호출이 기록되어 있기 때문이다.

**CloudTrail 구조**
결국 (SDK, CLI 또는 콘솔, IAM 사용자와 IAM 역할, 기타 서비스의 액션) --API 호출--> CloudTrail (CloudTrail에서 조사하고 감사) --기본적으로 CloudTrail은 90일까지만 로그를 남기기 때문에 90일 넘는 기간 동안의 모든 이벤트를 알고 싶으면 CloudWatch 또는 S3 버킷으로 전송--> CloudWatch Logs, S3 버킷

**CloudTrail Events**
기본적으로 CloudTrail에서 세 가지 이벤트를 볼 수 있다.

-   Management Events
    -   우리 AWS 계정 안에서 리소스에 대해 수행된 작업을 나타낸다.
    -   예를들어
        -   누군가가 보안을 설정하면 IAM AttachRolePolicy라는 API 호출을 사용
        -   서브넷을 생성하면 EC2 CreateSubnet API 호출을 사용
        -   CloudTrail 로깅을 설정하면 CloudTrail CreateTrail API를 사용
    -   기본적으로 Management Events를 로깅하도록 설정되어 있다.
    -   Management Events는 누군가 IAM에 있는 모든 사용자를 나열하거나 EC2에 있는 모든 EC2 인스턴스를 나열하는 등 리소스를 수정하지 않는 Read Events가 있고, 누군가 DynamoDB 테이블을 삭제하거나 삭제를 시도할 수 있는 리소스를 수정할 수도 있는 Write Events가 있다.
    -   Write Events는 우리 인프라에 피해를 입힐 수 있기 때문에 훨씬 더 중요할 것이고, Read Events는 정보를 얻는 것이기 때문에 상대적으로 파괴력은 덜하다.
-   Data Events
    -   용량이 크기 때문에 Default로 데이터 이벤트는 로깅되지 않는다.
    -   GetObject, DeleteObject, PutObject 등의 Amazon S3 객체 수준의 활동이 예가 될 수 있다.
    -   읽기와 쓰기 이벤트를 분리할 수 있는 옵션이 있어 GetObject와 같은 읽기 이벤트, DeleteObject PutObject와 같은 쓰기 이벤트를 따로 설정할 수 있다.
    -   Invoke API를 사용하면 람다 함수가 몇 번이나 호출되었는지 알수 있는 AWS 람다 함수 execution activity도 있다.
-   또한 Insight Events도 있다.

**CloudTrail Insight Events**
모든 서비스에서 많은 Management Events가 발생하고 우리 계정에서 빠르게 API가 실행되면 어떤 활동이 이상하고 비정상인지, 무엇이 정상인지 판단하기 어려워질 수 있다. 

그래서 이상활동을 탐지하기 위해 사용하게 된다.

CloudTrail Insight는 활성화하고 요금을 지불해야하고, 활성화하면 우리의 Events를 분석하고 계정에서 일어나는 이상 활동을 탐지하게 된다.
예를들어
-   부정확한 리소스 프로비저닝
-   서비스 한도 도달
-   IAM의 급격하고 과도한 활동
-   주기적인 유지보수 활동의 미달
등을 분석하고 탐지한다.

CloudTrail Insights는 정상적인 관리 활동을 분석해서 Baseline을 생성하고 올바른 유형의 모든 이벤트를 지속적으로 분석(Continous analysis)하게 된다.

즉, 뭔가가 변경되었거나 변경을 시도하는 경우(Write) 항상 이상한 패턴이 있는지 탐지하게 된다.
무언가가 탐지되면 Insights Events가 생성되고, CloudTrail Console에 표시된다.

원하는 경우 S3와 EventBridge Event 등에 전송할 수 있다.

**CloudTrail Events Retention**
-   Default로 이벤트는 CloudTrail에 90일 동안 보관된다. 그리고 자동으로 삭제된다.
-   만약 90일 이상의 기간동안 이벤트를 보관하려면 S3에 로깅해야 한다. 그리고 Athena로 분석할 수 있다.
-   정리하자면 모든 Management Event, Data Event, Insight Event는 90일의 보관 기간 동안 유지되고, 장기 보관시에는 S3 버킷에 로깅해야한다.

## CloudTrail - EventBridge integration
CloudTrail과 EventBridge는 API 호출을 인터셉트 해 특정 작업을 할 때 유용하다.

예를들어
-   어떤 사용자가 DeleteTable API 호출로 DynamoDB의 테이블을 삭제할 때마다 우리가 SNS 알림을 받고 싶다고 가정해보자.
-   우리가 AWS에서 API를 호출하면 API 호출 자체가 CloudTrail에 로깅되고, 모든 API 호출이 로깅된다.
-   그런데, 모든 API 호출이 결국 Amazon EventBridge에 이벤트로 남게 된다.
-   그래서 우리는 구체적인 DeleteTable API 호출을 찾아보고 Rule을 생성할 수 있다.
-   Rule은 수신처가 있을 것이고, SNS가 수신처인 경우 Alert를 생성할 수 있다.

또한 예를 들어
-   어떤 사용자가 우리 계정에서 어떤 역할을 Assume할 때마다 알림을 받길 원한다고 해보자
-   IAM에서 AssumeRole API를 호출하면 CloudTrail은 그걸 로깅한다.
-   그리고 EventBridge 통합을 이용해서 SNS 토픽으로 가는 메시지를 트리거할 수 있다.

또한 
-   보안 그룹 인바운드 규칙을 변경하는 API 호출을 인터셉트할 수도 있다.
-   보안 그룹 호출은 AuthorizeSecurityGroupIngress 이고 CloudTrail에 로깅되고, EventBridge에 표시될 것이다.
-   마지막으로 SNS 알림을 트리거할 수 있다.

## CloudTrail - Solutions Atchitect Professional
CloudTrail 관련 아키텍처를 살펴보자

**CloudTrial Delivery to S3**
먼저 CloudTrail에서 S3로 파일을 전달하는 방법을 보고 이 방법이 사용되는 사용 사례의 유형을 확인해보자

-   CloudTrail에서 Log 파일을 5분 이내로 S3 버킷에 넣는다. 이 과정에서 기본적으로 SSE-S3 암호화를 사용하지만 SSE-KMS를 설정할수도 있다.
-   S3 버킷에 수명 주기 정책을 설정하고 Glacier Tier에 파일을 전송하기도 한다. 파일을 보관하고 액세스할 때 6시간, 12시간이 걸려도 괜찮을 경우 Glacier에 파일을 보내기도 한다.
-   S3로 파일이 전달되면 S3 Event를 통해 SQS, SNS Topic, Labmda 함수에 알릴 수 있다.
-   그런데, CloudTrail을 사용해서 직접 SNS에 알림을 전달하고 이 SNS에서 SQS 또는 Lambda를 호출해도 된다.

아키텍처에 한 가지 방법만 있는 게 아니고 다양한 옵션들이 있다.

이때 어떤 방식으로 함께 어울리는지에 대해 생각하는 것이 SAP 시험에 합격할 열쇠이다.

이때 S3에서 얻을 수 있는 모든 개선점을 생각해보자.
-   Versioning을 활성화해서 실수로 삭제하는 일을 방지하고
-   MFA로 파일 삭제를 예방할 수 있으며
-   S3 수명 주기 정책으로 파일을 S3 IA나 Glacier로 옮길 수 있고
-   S3 Object Lock을 사용해 S3 객체가 삭제/수정 되지 않게 할 수 있다.
-   CloudTrail 로그 파일 무결성 검증을 수행하는 기능도 있다. S3에 전달된 파일이 그대로 유지되는지 또는 삭제되거나 수정되는지를 확인하는 기능이다.

**CloudTrial Multi Account, Multi Region Logging**
CloudTrail은 다중 계정 혹은 다중 리전에서 사용 가능하다.

예를들어
-   A와 B 두 계정이 있고, 로그를 보낼 Security Account가 있다.
-   A와 B 계정에 CloudTrail의 로그를 저장할 S3 버킷을 설정한다.
-   로그 파일이 전달할때 S3 버킷은 Security Account에 위치하는데 이를 해결할 방법은 S3 Bucket Policy를 정의하는 것이다.
-   S3 버킷 정책은 계정 간 전달에 있어 꼭 필요하고 유지하기 쉽다.
-   또한 CloudTrail 버킷의 로그에 A가 액세스해야 할 경우 즉, A Account에서 Security Account에 있는 S3에 액세스해야 하는 경우
    -   Cross-Account 간 역할을 생성해서 Assume role을 이용하거나
    -   Bucket Policy를 수정해서 A 계정에서 읽기를 허용하도록 할 수 있다.

이 처럼 모든 CloudTrail 로그를 한 계정에 두고 보관하는 방법은 안전하다.
보안 계정의 경우 사용자 관리 때문에 보안이 훨씬 엄격할 것이기 때문에 로그 또한 오랫동안 안전할 것이다.

**CloudTrial Alert for API Calls**
-   특정한 API 호출이 완료되면 Alarm을 생성하려고 한다.
-   CloudTrail이 모든 이벤트를 CloudWatch Logs로 스트리밍하고, CloudWatch 로그에 많은 API 사용 사례가 생긴다.
-   이때 CloudWatch 로그로 Metric Filter를 생성하고 CloudWatch Alarm을 만들 수 있다.
-   이 Filter는 우리가 원하는 API 호출을 필터링한다. 예를들면 인스턴스 종료를 감지하려면 해당하는 지표 필터를 만들어야 한다. 그리고 필터에 감지되는 이벤트가 발생하면 지표가 1씩 증가하게 된다.
-   CloudWatch Alarm은 지표 필터가 1이 될 때 트리거 되도록 설정하고, CloudWatch Alarm은 SNS Topic에 전달될 수 있다. SNS Topic에는 Lambda 함수, SQS Queue 등 여러가지로 API 호출에 대해 Alarm을 생성할 수 있다.
-   특정 API에 국한되지 않고 TerminateInstances 같은 특정 API의 발생 횟수, 사용자 별 API 호출 수, 거부된 API 호출에 대한 높은 수준의 감지를 할 수 있다.
-   따라서 한 API 호출에만 해당하는 것이 아니라 메트릭 필터를 만들고 CloudWatch Alarm을 사용해 해당 API 호출을 계산하거나 이상 활동을 감지할 수 있다.

**CloudTrail Organizational Trail**
-   AWS Organization이 있다면 Management 계정과 다른 여러 Member Account가 있다. Management 계정에 Organizational Trail을 설정할 수 있다.
-   이 Trail을 설정하면 모든 Member 계정에서 발생하는 이벤트가 직접 모니터링 도니다.
-   예를들어 Prod OU, Dev OU가 있다고 가정하면 이 OU들에 있는 모든 계정이 모니터링 될 것을 의미한다.
-   이 모든 계정에서 정보를 Management 계정에 있는 S3 버킷으로 보낼 수 있다.
-   이 S3 버킷은 특정 유형의 Organization을 포함하고, my-organization-bucket/Logs/o-exampleorgid/111111111111 등의 이름으로 구성되고, S3 접미사가 CloudTrail에 의해 모니터링되는 계정 번호를 나타낸다.

**CloudTrail How to react to events the fastest?**

CloudTrail은 이벤트를 전달하는데 최대 15분이 걸릴 수 있다. 우리는 이벤트에 어떻게 가장 빠르게 반응할 수 있는가?

-   CloudWatch Events
    -   CloudTrail에서 발생하는 모든 API 호출에 대해 CloudWatch Events를 트리거할 수 있으며, 이것은 가장 반응이 빠른 방법이 될 것이다.
-   CloudWatch Logs로 CloudTrail 전달
    -   CloudTrail을 CloudWatch Logs로 전달하는 경우 이벤트가 스트리밍 되지만 전달되기까지 시간이 걸릴 수 있다.
    -   그래서 우리는 메트릭 필터를 생성해서 발생 횟수를 분석하고 이상 징후를 감지할 수 있다.
-   S3로 CloudTrail 전달
    -   매 5분마다 전달되며, 로그 무결성을 분석하고 다른 계정으로 전달 가능하고, 장기 저장소로 사용할 수 있다.
    -   Athena와 QuickSight 같은 것을 사용해서 로그를 종합적으로 살펴볼 수 있다.

정리하자면 CloudTrail을 S3에 전달하는 것은 반응성은 떨어지지만 더 포괄적이며, 요구 사항에 따라 다른 솔루션을 가질수 있다. CloudWatch Events, CloudWatch Logs, S3 모두 나쁜것이나 좋은 것이 아니라는 것을 이해해야 한다.

## KMS
**KMS란?**
-   AWS에서 "Encryption(암호화)" 라는 단어가 나오면 KMS를 떠올려야 한다.
-   이는 데이터에 대한 액세스를 쉽게 통제하는 방법이며, AWS는 암호화 키를 관리한다.
-   이는 인증에 있어서 IAM과 통합되어 있으며, 모든 AWS 서비스와 매우 원활하게 통합되어 있다. 예를들어 EBS, S3, Redshift, RDS, SSM 등의 서비스가 있다.
-   KMS와 상호 작용하기 위해 CLI나 SDK를 활용할 수 있다.

**KMS - KMS Key Types**

KMS는 두 가지 종류의 키가 존재한다.
-   Symmetric (AES-256 keys)
    -   대칭 키는 KMS의 초기 제공 사항 중 한 가지였다. 정보를 암호화하고 복호화하기 위해 사용되는 단일 암호화 키이다.
    -   AWS KMS와 통합된 모든 서비스는 대칭 KMS 키를 사용한다.
    -   envelope encryption(봉투 암호화)를 사용하고 싶다면 필요하다.
    -   실질적으로 KMS 키 자체에 액세스하거나 암호화를 해제할 수 없다. KMS API 호출을 이용해서 KMS에 데이터를 보내서 이용할 수 밖에 없음
-   Asymmetric (RSA & ECC Key Pairs)
    -   비대칭 키는 새로 나온 키이며, 두 종류의 공용 키를 사용하도록 할 수 있음
    -   Public 과 Private로 이루어진 이것을 Key Pair라고 부른다. Public 키는 암호화하는 데 사용되고, Private 키를 복호화하는데 사용한다.
    -   이는 암호화/복호화 또는 서명/검증 작업에 매우 도움이 된다.
    -   Public 키의 경우 다운로드할 수 있고, 퍼블릭 키를 가지고 어디에서든지 암호화를 실시할 수 있다.
    -   Private 키의 경우 KMS API 호출을 사용해야 한다. Public Key를 이용해 데이터를 암호화하는 순간 복호화할 수 있는 것은 프라이빗 키 뿐이다.
    -   비대칭 키는 KMS API를 직접 호출할 수 없는 사용자가 AWS 외부에서 암호화 기능을 사용하고자 하기 위함이 있다.

**Types of KMS Keys**
-   Customer Managed Keys (CMK, 고객 관리형 키)
    -   KMS에서 직접적으로 만드는 키이다. 그래서 생성하고 관리하고 사용하고, 활성화하고 비활성화할 수 있다.
    -   rotation policy를 설정해서 키를 매년 교체되도록 할 수 있다. 교체된 old key는 보존된다.
    -   KMS 키의 Resource Policy인 key policy를 추가할 수 있다. 이를 이용해 CloudTrail 내 키 사용에 대한 감사를 실시할 수 있다.
    -   envelope encryption(봉투 암호화)에 활용되는 키이다.
    -   이 Key는 우리가 직접 관리해서 고객 관리형 키라고 불리는 것이다.
-   AWS Managed Keys
    -   이는 AWS-S3, AWS-EBS 등과 같이 전적으로 AWS 서비스에 의해서만 쓰이는 키이다. 
    -   AWS에 의해서 관리되며 매년 자동으로 rotate 된다.
    -   CloudTrail에서 Key Policy를 확인하고 감사를 실시할 수 있다.
    -   그러나 독자적인 암호화 작업에 사용될 수는 없다.
-   AWS Owned Keys
    -   AWS에 의해서 생성되고 관리된다. 리소스를 보호하기 위해서 몇몇 서비스에 의해서 사용된다.
    -   다중 계정에 걸쳐서 사용되지만, 이 키는 계정에 존재하지는 않고 AWS에 의해 내부적으로 사용된다.
    -   이 키를 보거나 사용하거나 추적하거나 감사를 실시할 수 없다.

짧게 정리하자면 아래와 같다.

|KMS Key|Customer Managed Key|AWS Managed Key|AWS Owned Key|
|---|:-:|:-:|:-:|
|Can view Metadata|:white_check_mark:|:white_check_mark:|:x:|
|Can view Metadata|:white_check_mark:|:x:|:x:|
|Can view Metadata|:white_check_mark:|:white_check_mark:|:x:|
|Can view Metadata|Optional(every 1 year)|Required(every 1 year)||

**KMS Key Material Origin**
키 생성 방법에 대해서 이야기 해보자

-   Key Material Origin(키 구성요소 오리진)이라고 불리는 것이 있고, 이는 생성 후에 변경될 수 없다. 그래서 생성하는 시점에서 정의해야 한다.
-   이는 키 구성 요소의 소스를 식별하는 KMS 키 속성이다.
-   KMS (AWS_KMS), Default
    -   KMS가 자동으로 생성하고 자체 Key store에 키 구성요소를 만들고 관리한다. 이 경우 키 구성요소를 KMS 키에 직접적으로 가져온다. 
-   External(EXTERNAL)
    -   이 경우 키 구성요소를 KMS 키에 직접적으로 import 해야한다.
    -   AWS 외부의 키 구성요소를 지키고 관리하는 책임은 사용자에게 있다.
    -   외부에서 생성한 후에 KMS에 가져와서 사용한 후 작업을 완료하고 직접 삭제하거나, KMS에 사본을 보관하고 싶은 경우가 있을 수 있다. 이 경우 관리 책임은 사용자에게 있다.
-   Custom Key Store(AWS_CLOUDHSM)
    -   이는 HSM 클러스터 내에서 직접 키 구성요소를 생성하도록 해주고 관리하게 해준다.

**Custom Key Store(AWS_CLOUDHSM)**
CloudHSM으로 지원되는 사용자 지정 키 스토어를 사용하는 경우 어떻게 작동하는 지 이야기 해보자

-   CloudHSM 클러스터를 사용자 지정 키 스토어로서 만들고 KMS와 직접 통합되어 있다. 
-   이는 KMS가 키를 생성할 때 사용자가 소유하고 관리하는 HSM 클러스터에 키 구성요소가 저장된다는 것을 의미한다. 또한 이는 키가 HSM 클러스터 내에 존재한다는 것을 말해주고 키는 KMS에 의해서만 관리되고 사용된다.
-   모든 암호화 작업은 HSM에서 직접 수행된다.

