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

또한 권한 경계는 AWS Organization의 SCP(서비스 제어 정책)와 함께 사용할 수 있다.

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

SAML은 Security Assertion Markup Language의 약자로, ADFS 등 많은 ID Provider에서 사용하는 오픈 표준이다.
Microsoft Active Directory와 통합할 수 있고, AWS와 SAML 2.0 호환 IdP를 통합할 수 있다.

이를 통해 콘솔, CLI 또는 모든 API에 임시 자격 증명으로 액세스할 수 있으므로, 각 직원에 대해 IAM 사용자를 만들 필요가 없다.



