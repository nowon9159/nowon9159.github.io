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
    -   MFA를 지원하지 않고, SQL 서버 등 AWS에 조인할 수 없지만 단순하고 저렴하며 문제에 따라 좋은 솔루션이 될 ㅅ수 있다.

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


