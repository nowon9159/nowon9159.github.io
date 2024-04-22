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