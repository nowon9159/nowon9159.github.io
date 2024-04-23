# Overview

SOA 강의 내용에서 따로 정리한 부분만 추출한 파일입니다.

GPT를 이용해서 만든 python 파일을 이용해 추출해낸 결과여서 정상적으로 추출되지 않은 부분이 있을 수 있습니다.
빈 부분을 발견 시 자유롭게 의견 주시면 감사 드리며, 원본 파일의 Title을 기반으로 Cheat Sheet에서 검색하시면 내용 확인을 하실 수 있습니다.

SOA.md 파일보다 정확할 수 있으며, 강의 내용 + AWS Docs 기반 재검증을 하려고 노력 했습니다. ~~검증이 안된 부분도 있습니다.~~

그리고 시험 꿀팁만 얻고 싶다면 "시험" 키워드를 Ctrl+f 로 확인하실 것을 추천 드립니다.

합격 기운을 받아가시길 빌겠습니다!

(해당 문서는 아직 완성되지 않았습니다.)

# 목차
<!-- TOC -->

- [Overview](#overview)
- [목차](#%EB%AA%A9%EC%B0%A8)
- [정리 내용](#%EC%A0%95%EB%A6%AC-%EB%82%B4%EC%9A%A9)
    - [**Enhanced Networking 향상된 네트워킹**](#enhanced-networking-%ED%96%A5%EC%83%81%EB%90%9C-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9)
    - [**EC2 Placement Groups 배치 그룹**](#ec2-placement-groups-%EB%B0%B0%EC%B9%98-%EA%B7%B8%EB%A3%B9)
    - [EC2 Shutdown Behavior & Termination Protection](#ec2-shutdown-behavior--termination-protection)
    - [Troubleshooting EC2 Launch Issues](#troubleshooting-ec2-launch-issues)
    - [Troubleshooting EC2 SSH Issues](#troubleshooting-ec2-ssh-issues)
    - [[CCP/SAA/DVA] EC2 Instance Purchasing Options](#ccpsaadva-ec2-instance-purchasing-options)
    - [**[SAA] Spot Instances & Spot Fleet**](#saa-spot-instances--spot-fleet)
    - [**Burstable Instances T2/T3**](#burstable-instances-t2t3)
    - [**Elastic IPs**](#elastic-ips)
    - [**CloudWatch Metrics for EC2**](#cloudwatch-metrics-for-ec2)
    - [**CloudWatch - Unified CloudWatch Agent - Overview**](#cloudwatch---unified-cloudwatch-agent---overview)
    - [**EC2 Instance Status Checks**](#ec2-instance-status-checks)
    - [**EC2 Instance Status Checks - MUST KNOW**](#ec2-instance-status-checks---must-know)
    - [**EC2 Hibernate**](#ec2-hibernate)
    - [**[CCP/SAA/DVA] AMI Overview**](#ccpsaadva-ami-overview)
    - [**AMI No Reboot Option**](#ami-no-reboot-option)
    - [**EC2 Instance Migration using AMIs**](#ec2-instance-migration-using-amis)
    - [**EC2 Image Builder**](#ec2-image-builder)
    - [**AMI In Production**](#ami-in-production)
    - [**Systems Manager Overview**](#systems-manager-overview)
    - [**AWS Tags & SSM Resource Groups**](#aws-tags--ssm-resource-groups)
    - [**SSM Documents & SSM Run Command**](#ssm-documents--ssm-run-command)
    - [**SSM Automation**](#ssm-automation)
    - [**[SAA/DVA] SSM Parameter Store Overview**](#saadva-ssm-parameter-store-overview)
    - [**SSM Inventory & State Manager**](#ssm-inventory--state-manager)
    - [**SSM Patch Manager and Maintenance Windows**](#ssm-patch-manager-and-maintenance-windows)
    - [**SSM Session Manager Overview**](#ssm-session-manager-overview)
    - [**[SAA/DVA] What is High Availability and Scalability?**](#saadva-what-is-high-availability-and-scalability)
    - [**[SAA/DVA] Elastic Load Balancing ELB Overview**](#saadva-elastic-load-balancing-elb-overview)
    - [**[SAA/DVA] Application Load Balancer ALB**](#saadva-application-load-balancer-alb)
    - [**[SAA/DVA] Network Load Balancer NLB**](#saadva-network-load-balancer-nlb)
    - [**[SAA/DVA] Gateway Load Balancer GWLB**](#saadva-gateway-load-balancer-gwlb)
    - [**[SAA/DVA] Elastic Load Balancer - Sticky Sessions**](#saadva-elastic-load-balancer---sticky-sessions)
    - [**[SAA/DVA] Elastic Load Balancer - Cross Zone Load Balancing**](#saadva-elastic-load-balancer---cross-zone-load-balancing)
    - [**[SAA/DVA] Elastic Load Balancer - SSL Certificates**](#saadva-elastic-load-balancer---ssl-certificates)
    - [**[SAA/DVA] Elastic Load Balancer - Connection Draining**](#saadva-elastic-load-balancer---connection-draining)
    - [**Elastic Load Balancer - Health Checks**](#elastic-load-balancer---health-checks)
    - [**Elastic Load Balancer - Monitoring, Troubleshooting, Logging and Tracing**](#elastic-load-balancer---monitoring-troubleshooting-logging-and-tracing)
    - [**Target Group Attributes**](#target-group-attributes)
    - [ALB Rules - Deep Dive](#alb-rules---deep-dive)
    - [[SAA/DVA] Auto Scaling Groups ASG Overview](#saadva-auto-scaling-groups-asg-overview)
    - [[SAA/DVA] Auto Scaling Groups - Scaling Policies](#saadva-auto-scaling-groups---scaling-policies)
    - [**ASG for SysOps**](#asg-for-sysops)
    - [**CloudWatch for ASG**](#cloudwatch-for-asg)
    - [**Auto Scaling Overview**](#auto-scaling-overview)
    - [**[SAA/DVA] Beanstalk Overview**](#saadva-beanstalk-overview)
    - [**[DVA] CloudFormation - Overview **](#dva-cloudformation---overview-)
    - [**[DVA] YAML Crash Course**](#dva-yaml-crash-course)
    - [**[DVA] CloudFormation - Resources**](#dva-cloudformation---resources)
    - [**[DVA] CloudFormation - Parameters**](#dva-cloudformation---parameters)
    - [**[DVA] CloudFormation - Mappings**](#dva-cloudformation---mappings)
    - [**[DVA] CloudFormation - Outputs & Exports**](#dva-cloudformation---outputs--exports)
    - [**[DVA] CloudFormation - Conditions**](#dva-cloudformation---conditions)
    - [**[DVA] CloudFormation - Intrinsic Functions**](#dva-cloudformation---intrinsic-functions)
    - [**[DVA] CloudFormation - Rollbacks**](#dva-cloudformation---rollbacks)
    - [**[DVA] CloudFormation - Service Role**](#dva-cloudformation---service-role)
    - [**[DVA] CloudFormation - Capabilities**](#dva-cloudformation---capabilities)
    - [**[DVA] CloudFormation - Deletion Policy**](#dva-cloudformation---deletion-policy)
    - [**[DVA] CloudFormation - Stack Policy**](#dva-cloudformation---stack-policy)
    - [**[DVA] CloudFormation - Termination Protection**](#dva-cloudformation---termination-protection)
    - [**[DVA] CloudFormation - Custom Resources**](#dva-cloudformation---custom-resources)
    - [**[DVA] CloudFormation - Dynamic References**](#dva-cloudformation---dynamic-references)
    - [**CloudFormation - User Data**](#cloudformation---user-data)
    - [**CloudFormation - cfn-init**](#cloudformation---cfn-init)
    - [**CloudFormation - cfn-signal & Wait Condition**](#cloudformation---cfn-signal--wait-condition)
    - [**CloudFormation - cfn-signal Failures**](#cloudformation---cfn-signal-failures)
    - [**CloudFormation - Nested Stacks**](#cloudformation---nested-stacks)
    - [**CloudFormation - Depends On**](#cloudformation---depends-on)
    - [**CloudFormation - StackSets**](#cloudformation---stacksets)
    - [**CloudFormation - Troubleshooting**](#cloudformation---troubleshooting)
    - [**Lambda - Overview**](#lambda---overview)
    - [**Lambda & CloudWatch Events / EventBridge**](#lambda--cloudwatch-events--eventbridge)
    - [**Lambda & S3 Event Notifications**](#lambda--s3-event-notifications)
    - [**Lambda Permissions - IAM Roles & Resource Policies**](#lambda-permissions---iam-roles--resource-policies)
    - [**Lambda Monitoring & X-Ray Tracing**](#lambda-monitoring--x-ray-tracing)
    - [**Lambda Function Performance**](#lambda-function-performance)
    - [**Lambda Concurrency**](#lambda-concurrency)
    - [**Lambda Monitoring - Extras**](#lambda-monitoring---extras)
    - [**[CCP/SAA/DVA] EBS Overview**](#ccpsaadva-ebs-overview)
    - [**[CCP/SAA/DVA] EC2 Instance Store**](#ccpsaadva-ec2-instance-store)
    - [**[SAA/DVA] EBS Volume Types Deep Dive**](#saadva-ebs-volume-types-deep-dive)
    - [**[SAA] EBS Multi Attach**](#saa-ebs-multi-attach)
    - [**EBS Operation: Volume Resizing**](#ebs-operation-volume-resizing)
    - [**EBS Operation: Snapshots**](#ebs-operation-snapshots)
    - [**EBS Operation: Volume Migration**](#ebs-operation-volume-migration)
    - [**[SAA] EBS Operation: Volume Encryption**](#saa-ebs-operation-volume-encryption)
    - [**[SAA/DVA] Amazon EFS**](#saadva-amazon-efs)
    - [**[SAA/DVA] EFS vs EBS**](#saadva-efs-vs-ebs)
    - [**EFS Access Points**](#efs-access-points)
    - [**EFS - Operations**](#efs---operations)
    - [**EFS - CloudWatch Metrics**](#efs---cloudwatch-metrics)
    - [**[CCP/SAA/DVA] S3 Overview**](#ccpsaadva-s3-overview)
    - [**[CCP/SAA/DVA] S3 Security: Bucket Policy**](#ccpsaadva-s3-security-bucket-policy)
    - [**S3 Security: Bucket Policy Advanced**](#s3-security-bucket-policy-advanced)
    - [**[CCP/SAA/DVA] S3 Website Overview**](#ccpsaadva-s3-website-overview)
    - [**[CCP/SAA/DVA] S3 Versioning**](#ccpsaadva-s3-versioning)
    - [**[CCP/SAA/DVA] S3 Replication**](#ccpsaadva-s3-replication)
    - [**[SAA/DVA] S3 Replication Notes**](#saadva-s3-replication-notes)
    - [**[CCP/SAA/DVA] S3 Storage Classes Overview**](#ccpsaadva-s3-storage-classes-overview)
    - [**[SAA/DVA] S3 Lifecycle Rules with S3 Analytics**](#saadva-s3-lifecycle-rules-with-s3-analytics)
    - [**[SAA/DVA] S3 Event Notifications**](#saadva-s3-event-notifications)
    - [**[SAA/DVA] S3 Performance**](#saadva-s3-performance)
    - [**[SAA/DVA] S3 Select & Glacier Select**](#saadva-s3-select--glacier-select)
    - [**[SAA] S3 Batch Operations**](#saa-s3-batch-operations)
    - [**S3 Inventory**](#s3-inventory)
    - [**S3 Glacier Overview**](#s3-glacier-overview)
    - [**S3 Multi-Part Upload Deep Dive**](#s3-multi-part-upload-deep-dive)
    - [**[SAA] Athena**](#saa-athena)
    - [**[SAA/DVA] S3 Encryption**](#saadva-s3-encryption)
    - [**[SAA/DVA] S3 Default Encryption**](#saadva-s3-default-encryption)
    - [**[SAA/DVA] S3 CORS**](#saadva-s3-cors)
    - [**[SAA/DVA] S3 MFA Delete**](#saadva-s3-mfa-delete)
    - [**[SAA/DVA] S3 Access Logs**](#saadva-s3-access-logs)
    - [**[SAA/DVA] S3 Pre-signed URLs**](#saadva-s3-pre-signed-urls)
    - [**[SAA] Glacier Vault Lock & S3 Object Lock**](#saa-glacier-vault-lock--s3-object-lock)
    - [**S3 Access Points**](#s3-access-points)
    - [**S3 Multi-Region Access Points**](#s3-multi-region-access-points)
    - [**S3 VPC Endpoints**](#s3-vpc-endpoints)
    - [**[CCP/SAA] AWS Snow Family Overview**](#ccpsaa-aws-snow-family-overview)
    - [**[SAA/SAP] Amazon FSx**](#saasap-amazon-fsx)
    - [**FSx for SysOps**](#fsx-for-sysops)
    - [**[SAA] Storage Gateway Overview**](#saa-storage-gateway-overview)
    - [**Storage Gateway for SysOps**](#storage-gateway-for-sysops)
    - [**[SAA/DVA] CloudFront Overview**](#saadva-cloudfront-overview)
    - [**[SAA/DVA] CloudFront - ALB as an Origin**](#saadva-cloudfront---alb-as-an-origin)
    - [**[SAA/DVA] CloudFront - Geo Restriction**](#saadva-cloudfront---geo-restriction)
    - [**CloudFront Reports, Logs and Troubleshooting**](#cloudfront-reports-logs-and-troubleshooting)
    - [**CloudFront Caching - Deep Dive**](#cloudfront-caching---deep-dive)
    - [**CloudFront with ALB Sticky Sessions**](#cloudfront-with-alb-sticky-sessions)
    - [**[SAA/DVA] RDS Overview**](#saadva-rds-overview)
    - [**[SAA/DVA] RDS Multi AZ vs Read Replicas**](#saadva-rds-multi-az-vs-read-replicas)
    - [**RDS Multi AZ – Failover Conditions**](#rds-multi-az--failover-conditions)
    - [**RDS Proxy**](#rds-proxy)
    - [**RDS Parameter Groups**](#rds-parameter-groups)
    - [**RDS Backups and Snapshots**](#rds-backups-and-snapshots)
    - [**RDS Events and Logs**](#rds-events-and-logs)
    - [**RDS & CloudWatch**](#rds--cloudwatch)
    - [**RDS Performance Insights**](#rds-performance-insights)
    - [**[SAA/DVA] Amazon Aurora**](#saadva-amazon-aurora)
    - [**Amazon Aurora - Backups**](#amazon-aurora---backups)
    - [**[SAA/DVA] RDS & Aurora Security**](#saadva-rds--aurora-security)
    - [**Amazon Aurora for SysOps**](#amazon-aurora-for-sysops)
    - [**[SAA/DVA] ElastiCache Overview**](#saadva-elasticache-overview)
    - [**ElastiCache Redis Cluster Modes**](#elasticache-redis-cluster-modes)
    - [**ElastiCache Redis for SysOps**](#elasticache-redis-for-sysops)
    - [**ElastiCache Memcached for SysOps**](#elasticache-memcached-for-sysops)
    - [**CloudWatch Metrics**](#cloudwatch-metrics)
    - [**CloudWatch Custom Metrics**](#cloudwatch-custom-metrics)
    - [**CloudWatch Dashboards**](#cloudwatch-dashboards)
    - [**CloudWatch Logs**](#cloudwatch-logs)
    - [**CloudWatch Alarms**](#cloudwatch-alarms)
    - [**CloudWatch Synthetics**](#cloudwatch-synthetics)
    - [**[SAA/DVA] Amazon EventBridge**](#saadva-amazon-eventbridge)
    - [**Service Quotas Overview**](#service-quotas-overview)
    - [**[SAA/DVA] CloudTrail**](#saadva-cloudtrail)
    - [**[SAA/DVA] CloudTrail - EventBridge Integration**](#saadva-cloudtrail---eventbridge-integration)
    - [**CloudTrail for SysOps**](#cloudtrail-for-sysops)
    - [**[SAA] Config Overview**](#saa-config-overview)
    - [**Config - Aggregators**](#config---aggregators)
    - [**[SAA] CloudWatch vs CloudTrail vs Config**](#saa-cloudwatch-vs-cloudtrail-vs-config)
    - [**AWS Health Dashboard - Overview**](#aws-health-dashboard---overview)
    - [**AWS Health Dashboard - Events & Notifications**](#aws-health-dashboard---events--notifications)
    - [**[SAA] Organizations Overview**](#saa-organizations-overview)
    - [**[CCP] AWS Control Tower Overview**](#ccp-aws-control-tower-overview)
    - [**AWS Service Catalog Overview**](#aws-service-catalog-overview)
    - [**AWS Billing Alarms**](#aws-billing-alarms)
    - [**[SAA] AWS Cost Explorer**](#saa-aws-cost-explorer)
    - [**AWS Budgets**](#aws-budgets)
    - [**AWS Cost Allocation Tags & Cost & Usage Reports**](#aws-cost-allocation-tags--cost--usage-reports)
    - [**[CCP] AWS Compute Optimizer Overview**](#ccp-aws-compute-optimizer-overview)
    - [**[SAA] AWS DataSync**](#saa-aws-datasync)
    - [**[SAA] AWS Backup**](#saa-aws-backup)
    - [**[CCP/SAA] Shared Responsibility Model**](#ccpsaa-shared-responsibility-model)
    - [**[CCP] DDoS, AWS Shield and AWS WAF**](#ccp-ddos-aws-shield-and-aws-waf)
    - [**[CCP] Penetration testing on AWS**](#ccp-penetration-testing-on-aws)
    - [**[CCP/SAA/SAP] Amazon Inspector**](#ccpsaasap-amazon-inspector)
    - [**Logging in AWS**](#logging-in-aws)
    - [**[CCP/SAA/SAP] Amazon GuardDuty**](#ccpsaasap-amazon-guardduty)
    - [**[CCP/SAA] Amazon Macie**](#ccpsaa-amazon-macie)
    - [**[CCP/SAA] Trusted Advisor**](#ccpsaa-trusted-advisor)
    - [**[SAA/DVA] Encryption 101**](#saadva-encryption-101)
    - [**[SAA/DVA] KMS Overview**](#saadva-kms-overview)
    - [**KMS Key Rotation**](#kms-key-rotation)
    - [**KMS For SysOps**](#kms-for-sysops)
    - [**[DVA] CloudHSM Overview**](#dva-cloudhsm-overview)
    - [**[CCP] AWS Artifact Overview**](#ccp-aws-artifact-overview)
    - [**[SAA] AWS Certificate Manager Overview ACM**](#saa-aws-certificate-manager-overview-acm)
    - [**[SAA/DVA] Secrets Manager Overview**](#saadva-secrets-manager-overview)
    - [**Secrets Manager - Monitoring & Troubleshooting**](#secrets-manager---monitoring--troubleshooting)
    - [**[DVA] SSM Parameter Store vs Secrets Manager**](#dva-ssm-parameter-store-vs-secrets-manager)
    - [**[CCP/SAA/DVA] IAM Security Tools**](#ccpsaadva-iam-security-tools)
    - [**IAM Access Analyzer**](#iam-access-analyzer)
    - [**Identity Federation with SAML & Cognito**](#identity-federation-with-saml--cognito)
    - [**STS & Cross Account Access**](#sts--cross-account-access)
    - [**[DVA] Cognito User Pools Overview**](#dva-cognito-user-pools-overview)
    - [**[DVA] Cognito Identity Pools Overview**](#dva-cognito-identity-pools-overview)
    - [**[DVA] Cognito User Pools vs Cognito Identity Pools**](#dva-cognito-user-pools-vs-cognito-identity-pools)
    - [**[SAA/DVA] What is a DNS?**](#saadva-what-is-a-dns)
    - [**[SAA/DVA] Route 53 Overview**](#saadva-route-53-overview)
    - [**[SAA/DVA] Route 53 - Registering a Domain**](#saadva-route-53---registering-a-domain)
    - [**[SAA/DVA] Route 53 - TTL**](#saadva-route-53---ttl)
    - [**[SAA/DVA] CNAME vs Alias**](#saadva-cname-vs-alias)
    - [**[SAA/DVA] Routing Policy - Simple**](#saadva-routing-policy---simple)
    - [**[SAA/DVA] Routing Policy - Weighted**](#saadva-routing-policy---weighted)
    - [**[SAA/DVA] Routing Policy - Latency**](#saadva-routing-policy---latency)
    - [**[SAA/DVA] Route 53 Health Checks**](#saadva-route-53-health-checks)
    - [**[SAA/DVA] Routing Policy - Failover**](#saadva-routing-policy---failover)
    - [**[SAA/DVA] Routing Policy - Geolocation**](#saadva-routing-policy---geolocation)
    - [**[SAA/DVA] Routing Policy - Geoproximity**](#saadva-routing-policy---geoproximity)
    - [**[SAA/DVA] Routing Policy - Traffic Flow & Geoproximity Hands On**](#saadva-routing-policy---traffic-flow--geoproximity-hands-on)
    - [**[SAA/DVA] Routing Policy - IP-based**](#saadva-routing-policy---ip-based)
    - [**[SAA/DVA] Routing Policy - Multi Value**](#saadva-routing-policy---multi-value)
    - [**[SAA/DVA] 3rd Party Domains & Route 53**](#saadva-3rd-party-domains--route-53)
    - [**S3 Website with Route 53**](#s3-website-with-route-53)
    - [**Route 53 Resolvers & Hybrid DNS**](#route-53-resolvers--hybrid-dns)
    - [**[SAA] CIDR, Private vs Public IP**](#saa-cidr-private-vs-public-ip)
    - [**[SAA] VPC Overview**](#saa-vpc-overview)
    - [**[SAA] Subnet Overview**](#saa-subnet-overview)
    - [**[SAA] Internet Gateways & Route Tables**](#saa-internet-gateways--route-tables)
    - [**[SAA] Bastion Hosts**](#saa-bastion-hosts)
    - [**[SAA] NAT Instances**](#saa-nat-instances)
    - [**[SAA] NAT Gateways**](#saa-nat-gateways)
    - [**[SAA] DNS Resolution Options & Route 53 Private Zones**](#saa-dns-resolution-options--route-53-private-zones)
    - [**[SAA] NACL & Security Groups**](#saa-nacl--security-groups)
    - [**[SAA] VPC Reachability Analyzer**](#saa-vpc-reachability-analyzer)
    - [**[SAA] VPC Peering**](#saa-vpc-peering)
    - [**[SAA] VPC Endpoints**](#saa-vpc-endpoints)
    - [**[SAA] VPC Flow Logs**](#saa-vpc-flow-logs)
    - [**[SAA] Site to Site VPN, Virtual Private Gateway & Customer Gateway**](#saa-site-to-site-vpn-virtual-private-gateway--customer-gateway)
    - [**[SAA] Direct Connect & Direct Connect Gateway**](#saa-direct-connect--direct-connect-gateway)
    - [**[SAA] Site to Site VPN as a backup to Direct Connect**](#saa-site-to-site-vpn-as-a-backup-to-direct-connect)
    - [**[SAA] AWS PrivateLink - VPC Endpoint Services**](#saa-aws-privatelink---vpc-endpoint-services)
    - [**[SAA] Transit Gateway**](#saa-transit-gateway)
    - [**[SAA] VPC Traffic Mirroring**](#saa-vpc-traffic-mirroring)
    - [**[SAA] IPv6 for VPC**](#saa-ipv6-for-vpc)
    - [**[SAA] Egress Only Internet Gateway**](#saa-egress-only-internet-gateway)
    - [**[SAA] Networking Costs in AWS**](#saa-networking-costs-in-aws)
    - [**[SAA] Network Firewall**](#saa-network-firewall)
    - [**[CCP] X-Ray**](#ccp-x-ray)

<!-- /TOC -->


# 정리 내용

## **Enhanced Networking (향상된 네트워킹)**
**정리**


- 인스턴스의 네트워크는 SR-IOV 유형을 사용해 더 높은 대역폭, 더 높은 PPS(초당 패킷), 낮은 지연을 제공한다.
- SR-IOV는 ENA(Elastic Network Adapter)와 Intel VF(intel 82599 Virtual Function)가 있다.
  - ENA의 경우 최대 100Gbps의 성능을 제공한다. 또한 t2를 제외한 최신 세대의 EC2 인스턴스에 기본적으로 설치되어 있다.
  - Intel VF의 경우 10Gbps의 성능을 제공한다.
- EFA(Elastic Fabric Adapter)가 있다.
  - 이는 HPC(고성능 컴퓨팅) 전용으로 개선된 ENA이다.
  - Linux에서만 작동하고, MPI (Message Passing Interface) 표준을 활용해서 같은 클러스터 내에 있는 경우 서로 결합된 내부 노드 통신이 있다면 서로 더 나은 네트워크 성능을 얻는다.
  - EFA는 EC2 인스턴스 간 고성능 통신을 제공하고, 기본 Linux OS를 우회하여 더 낮은 지연과 신뢰성 있는 전송을 제공한다.
- 결과적으로 단순히 낮은 지연 시간을 위해 Enhanced Networking을 원한다면 ENA를, HPC 클러스터를 사용한다면 고성능을 위해 EFA를 선택하는 것이 좋다.

## **EC2 Placement Groups (배치 그룹)**
**정리**


- 배치 그룹은 EC2 인스턴스가 어떻게 배치될지를 제어하려고 할 때 사용된다.
- 배치 그룹은 선택 사항이며, 배치 그룹으로 시작하지 않으면 EC2는 기본 하드웨어 전반에 분산되어 인스턴스를 배치하려 한다.
- 배치 그룹은 세 가지 전략이 있다.
  - **클러스터 배치 그룹**
    - 단일 가용 영역 내에서 저지연 하드웨어 설정에 그룹화된다. 높은 성능을 제공하지만 단일 가용 영역 내에 있기 때문에 높은 위험도 제공한다.
    - 모든 EC2 인스턴스가 동일한 랙에 배치되어 동일한 하드웨어, 동일한 가용 영역에 속한다.
    - 렉에 장애가 발생하면 모든 EC2 인스턴스가 동시에 실패하기 때문에 위험이 있다.
    - HPC와 같은 매우 높은 대역폭과 낮은 대기 시간이 필요한 애플리케이션의 경우 클러스터 배치 그룹이 좋은 방법이다.
  - **분산 배치 그룹**
    - EC2가 여러 가용 영역에 걸쳐 확장할 수 있으며 동시에 발생하는 실패의 위험이 줄어든다.
    - EC2 인스턴스가 각기 다른 랙에 분산된다.
    - AZ 당, 배치 그룹 당 7개의 인스턴스로 개수가 제한된다.
    - 높은 가용성을 극대화하고 리스크를 줄이며 어느 정도 큰 규모의 애플리케이션에 적합하다.
  - **파티션 배치 그룹**
    - 인스턴스가 여러 개의 파티션으로 여러 가용 영역에서 분산된다.
    - 한 AZ당 최대 7개의 파티션으로 동일 리전 내의 여러 가용 영역에 걸쳐 확장 가능. 파티션 당 수백 개의 인스턴스 실행 가능하다.
    - 한 파티션에 있는 랙을 다른 파티션은 공유하지 않는다.
    - 응용 프로그램이 데이터 및 서버를 파티션 간에 분산시킬 수 있는 경우 사용한다.

## EC2 Shutdown Behavior & Termination Protection
## Troubleshooting EC2 Launch Issues
**정리**


- InsufficientInstanceCapacity
  - 리전 내에서 생성할 수 있는 최대 수치의 vCPU는 정해져있다. 예를 들어 최대 수치가 64로 되어 있다고 할 때 16 vCPU의 인스턴스를 5개 올리고 싶다면 16\*5=80 이어서 최대 vCPU를 넘게 된다. 이 경우 해당 에러가 발생한다.
  - 또한 최대 수치를 조정했다고 하더라도 AWS 내에서 AZ에 64GB가 준비되지 않을 수도 있다.
  - 해결 법은 아래와 같다.
    - 몇분 기다렸다가 다시 Request
    - 한 번에 적은 인스턴스를 요청해보기 5개의 인스턴스를 1개씩 5번 시작
    - 다른 인스턴스 형식을 요청했다가 원하는 인스턴스 유형으로 스케일 업
    - Service Qoutas에 대한 Request
- Instance terminates immediately
  - 인스턴스가 Pending 상태에서 Terminated 상태로 즉시 변경되는 오류
  - 이유는 아래와 같다.
    - 인스턴스에는 할당할 수 있는 EBS 최대 개수가 있다. EBS 볼륨 제한을 초과했을 경우.
    - EBS 스냅샷이 손상되었을 때
    - 루트 볼륨이 암호화되어 있을 경우 암호 해독을 위해 KMS 키에 액세스할 수 있어야 하는데 액세스 권한이 없을 때.
    - 인스턴스 스토어 지원 AMI에 image.part.xx file과 같은 필수적인 부분이 누락되어 있을 때

## Troubleshooting EC2 SSH Issues
**정리**


- Troubleshooting
  - pem 키에 퍼미션이 400이 아니라면 "Unprotected private key file"이라는 에러가 발생하게 된다.
  - ssh 접속할 때 username이 맞지 않다면 "Host key not found", "Permission denied", "Connection closed by [instance] port 22" 에러가 발생하게 된다.
  - "Connection imed out" 에러가 발생하게 되면 네트워크 오류
    - Security group 문제
    - NACL 문제
    - Route table 또는 subnet 문제
    - 서버가 심각한 부하 상태여서 CPU가 100%인 경우

## [CCP/SAA/DVA] EC2 Instance Purchasing Options
**정리**


- 예를 들어 설명해보자
- 온디맨드는 리조트에 언제든지 들어가고 싶을 때마다 금액을 전액 지불해 시간제로 방을 사용할 수 있는 것과 같다.
- Reserved Instance의 경우 미리 계획을 세우고 리조트에 1,3 년 동안 머물 생각이 확실항 때 사용한다.
- Savings Plan의 경우 리조트에서 특정 금액을 지출할 것을 정확히 알고있을 때
- Spot Instance의 경우 리조트가 빈 방이 있어서 사람들을 유치하려고 파격 세일을 하는 것과 같다. 근데 문제는 내가 지불한 금액보다 더 많이 지불하려하는 다른 사람이 있을 때 언제든지 방을 비워줘야한다.
- Dedicated Instances 는 리조트 한 층을 예약하는 것과 같다.
- Dedicated Host는 리조트 건물 전체를 예약하는 것과 같다.
- Capacity Reservations는 내가 방을 예약할건데 언제 머물지 확실하지는 않지만 언제든지 머물수 있도록하는 것과 같다.
- On-Demand
  - Linux나 Window의 경우 1분 후 1초 단위의 비용 과금이 된다. 다른 OS의 경우 시간 단위 비용 과금이 된다.
  - 단기적이나 방해받지 않는 작업에 추천된다. 응용 프로그램이 어떻게 작동할 지 예측할 수 없는 곳에 사용된다.
- Reserved Instance
  - 온디맨드 대비 72%의 할인이 된다. 할인을 받기 위해 1년 또는 3년의 약정 기간을 명시하고 선결제 없음(No Upfront)/부분 선결제(Partial Upfront)/전체 선결제(All Upfront) 등의 결제 방식을 정해야한다.
  - 범위 측면에서는 Regional 이나 Zonal을 선택해야한다. Zonal의 경우 특정 Zone에 예약되며 조건이 맞을 시 할인이 된다.
  - Instance type(예:m5.large), Region, Tenancy, OS 등의 인스턴스 속성을 선택해야한다.
  - 예약 인스턴스는 DB와 같이 변동 없이 꾸준히 사용되는 응용 프로그램에 추천된다.
  - 예약 인스턴스는 Marketplace에서 사거나 팔수 있다.
- Convertible Reserved Instance
  - Reserved Instance와는 다르게 Instance type, Instance Family, OS, Scpoe, tenancy 등의 속성을 변경할 수 있다.
  - 더 많은 유연성을 가질 수 있어서 Reserved 보다는 할인이 덜 적용된다. (66%)
- EC2 Savings Plan
  - 사용량에 따라 할인을 받을 수 있게 해준다. 예를들어 10$/hour로 1년 또는 3년 약정을 걸 수 있다.
  - 특정 인스턴스 Family에 약정된다. 예를 들어 M5 타입의 인스턴스에 약정되면 M5.large 또는 M5.midium 등 할인이 적용된다.
  - Savings Plan으로 약정을 걸고 약정된 사용량을 넘어선 사용량은 On-Demand 가격으로 청구된다.
  - Instance Size, OS, Tenancy는 변경이 가능하다.
- Dedicated Instances
  - 하드웨어가 내 계정에 할당되어 동일 계정 내의 인스턴스만 해당 하드웨어에 할당되어 사용하는 옵션이다.
  - 인스턴스 배치에 대한 가시성이나 하드웨어 제어 기능을 제공하지 않고, 전용 인스턴스를 중지했다가 다시 실행하면 동일한 호스트에서 실행되지 않을 수도 있다.
  - BYOL의 제한적 지원을 제공한다.
- Dedicated Hosts
  - 물리적 서버를 구매하는 것과 동일하다고 생각하면 된다.
  - 가장 비싼 옵션
  - 사용 사례는 라이센스 모델이 있는 소프트웨어가 있을 때(BYOL), 규제 및 준수 요구가 강한 회사의 경우
- Capacity Reservations
  - 특정 AZ에 온디맨드 인스턴스 용량을 일정 기간 예약할 수 있다. 용량을 확보하지 못할 위험을 줄일 수 있다.
  - 유일한 기능은 용량을 예약하느 것이기 때문에 요금이 할인되지는 않는다. 할인받기 위해서는 Zonal RI나 SP와 결합해야한다.
  - 인스턴스를 실행하던 실행하지 않던 온디맨드 요금이 청구된다.
  - 특정 가용 영역에 필요한 단기의 작업에 적합하다.

## **[SAA] Spot Instances & Spot Fleet**
**정리**


- Spot Instance
  - 스팟 인스턴스는 온디맨드 가격보다 저렴한 비용으로 제공되는 예비 EC2 용량을 사용하는 인스턴스
  - 먼저 실행하고자 하는 스팟 인스턴스에 지불할 최대 스팟 가격을 지정하고, 인스턴스의 현재 스팟 가격이 우리가 지불하려는 최대 스팟 가격보다 미만이면 인스턴스를 유지한다.
  - 현재 스팟 가격이 최대 가격을 초과하는 경우 두 가지 옵션이 있다.
    1.  수행중인 모든 작업을 종료하고 인스턴스를 중지(Interruption)하는 것. Interruption 된 상태에서 최대 스팟 가격 아래로 내려간다면 인스턴스를 다시 시작하고 이전에 남은 작업을 계속할 수 있다.
    2.  EC2 인스턴스를 종료(Terminate)하고 작업을 다시 시작해야 하는 경우 새로운 EC2 인스턴스로 시작.
    - 워크로드 유형에 따라 두 가지 전략이 있고 위 작업을 수행하기 전에 2분의 유예 기간이 주어진다.
  - 스팟 인스턴스는 스팟 request에 따라 다르게 종료된다. request에는 원하는 인스턴스 수, 지불할 최대 가격, 런치 사양(AMI) 및 요청의 유효기간(valid to)(persistent의 경우)와 요청 유형이 있다.
    - 요청 유형은 두가지 이다.
    - `일회성(One-time)` 요청의 경우 스팟 요청이 충족되면 인스턴스가 시작되고 스팟 요청이 사라진다.
    - `영구 요청(Persistent request)` 요청의 경우 특정 인스턴스 수가 스팟 요청의 valid to 기간까지 또는 취소될 때까지 요청이 계속 유효하다.
    - 따라서 인스턴스가 중지되거나 중단되면 스팟 요청이 다시 활성화 돼 인스턴스 수를 보장해준다.
  - 영구적으로 스팟 인스턴스를 종료하는 것은 AWS가 아닌 내 책임이다. 영구적으로 스팟 인스턴스를 종료하려면 스팟 요청을 취소한 후 스팟 인스턴스를 종료해야 한다. 그렇지 않으면 request를 계속 유지하기 위해서 인스턴스를 다시 실행할 것이기 때문
- Spot Fleet
  - 스팟 플릿은 사용자가 지정한 기준에 따라 시작되는 스팟 인스턴스의 집합이다. 선택적으로 스팟 인스턴스 외에 온디맨드 인스턴스도 구성 가능하다.
  - 스팟 플릿은 사용자 요구 사항을 충족하는 스팟 용량 풀을 선택하고 플릿에 대한 목표 용량을 충족하는 스팟 인스턴스를 시작한다.
  - 스팟 용량 풀: 스팟 용량 풀은 인스턴스 유형, 운영 체제, 가용 영역, 네트워크 플랫폼(EC2-Classic 또는 EC2-VPC)이 동일한 미사용 EC2 인스턴스의 집합입니다. 각 스팟 용량 풀은 수요와 공급에 따라 가격이 달라질 수 있습니다.
  - 기본적으로 스팟 플릿은 target capacity를 유지하도록 설정 돼 있다. 스팟 인스턴스가 종료되어도 대체 인스턴스를 시작한다.
  - 스팟 플릿 인스턴스가 종료된 후에 유지되지 않는 일회성 request로 제출할 수도 있다.
  - 요청 유형은 request와 maintain이 있다.
    - request:
    - 스팟 플릿이 원하는 용량을 얻기 위한 비동기식 일회성 요청을 한다.
    - 그 뒤 스팟 중단으로 용량이 감소해도 인스턴스를 보충하지 않고, 용량을 사용할 수 없는 경우에도 대체 스팟 용량에서 요청을 제출하지 않는다.
    - maintain:
    - 스팟 플릿은 원하는 용량을 얻기 위한 비동기식 요청을 하고 중단된 모든 스팟 인스턴스를 자동으로 보충해 용량을 유지한다.
  - 요청 유형을 콘솔에서 지정하려면 Maintain target capacity 확인란을 선택/취소하면 된다.
  - 할당 전략이 있다.
    - **priceCapacityOptimized(권장)**:
    - 스팟 플릿은 시작하는 인스턴스의 수에 맞춰 용량 가용성이 가장 높은 풀을 가져온다.
    - 가까운 시일 내에 중단될 가능성이 가장 낮다고 판단되는 풀에서 스팟 인스턴스를 요청하고, 해당 풀에서 가장 가격이 낮은 스팟 인스턴스를 요청한다.
    - **capacityOptimized**:
    - 시작하는 인스턴스 수에 맞춰 용량 가용성이 가장 높은 풀을 가져온다.
    - 가까운 시일 내에 중단될 가능성이 가장 낮다고 판단되는 풀에서 스팟 인스턴스를 요청
    - 선택적으로 capacityOptimizedPrioritized를 사용해서 플릿의 각 인스턴스 유형에 대해 우선 순위를 설정할 수 있다.
    - **diversified**:
    - 스팟 인스턴스를 모든 풀에 두루 분산
    - **lowestPrice**:
    - 스팟 인스턴스를 용량이 있는 최저 가격 풀에서 제공, 매우 짧은 워크로드의 경우 좋은 옵션
    - 인스턴스 가격만 고려하고 용량 가용성은 고려하지 않기 때문에 중단률이 높아질 수 있다.
    - **InstancePoolsToUseCount**:
    - 스팟 플릿에서 가격이 가장 낮은 스팟 풀을 선택하고 지정한 스팟 풀 수에 걸쳐 대상 스팟 용량을 균등하게 할당

## **Burstable Instances (T2/T3)**
**정리**


- Burstable 은 T2, T3 인스턴스 유형군이다.
- 기본적으로 위 인스턴스 유형 군은 CPU 사용량 대비해 burst credit이라는 것을 가지고 있다.
- 이 burst credit이라는 것은 CPU가 과도하게 사용될 경우 credit을 소진해 CPU를 고성능으로 만들어 과부하된 CPU를 처리할 수 있게 해준다.
- credit은 CPU가 과부하되지 않을 때 시간 단위로 축적이 되고, 최대 축적 credit이 정해져있다. credit을 다 소진하게 되면 CPU 성능이 현저히 떨어진다.
- 그래서 Unlimited라는 것이 있다. Unlimited는 무제한의 credit을 제공해 CPU 사용량이 과부하 되고 크레딧을 전부 소진하더라도 추가 비용만 지불하면 CPU 성능을 보장해준다.
  - 24시간을 기준으로 인스턴스 평균 CPU 사용률이 기준 사용률을 초과하는 사용률에 대해 사용한 vCPU 당 시간 당 요금을 내게 된다.

## **Elastic IPs**
**정리**


- EC2 인스턴스에 Public IP는 중지 후 재시작을 하게 되면 IP 주소가 변경이 된다. 이를 방지하기 위해서 Elastic IP라는 고정 IP가 있다.
- 이 IP를 자유롭게 Attach 또는 Detach 할 수 있고, EIP는 삭제하지 않는 한 변경되지 않고 소유하는 IP이다.
- ~~서버에 EIP가 연결된 경우 요금이 부과되지 않으며, EIP가 연결된 서버를 중지하거나 사용하지 않는 EIP의 경우 요금이 부과되게 된다.~~
- 최근 퍼블릭 IP 고갈 문제로 서버에 EIP가 연결되어 있어도 Public IPv4 에 대해 요금이 부과된다.
- 리전 당 5개의 quota로 되어 있으며, 늘릴 수 있다. 강사는 EIP를 사용하기보다 ELB나 임의의 Public IP를 사용하는 것을 추천했다.

## **CloudWatch Metrics for EC2**
**정리**


- AWS는 EC2 인스턴스에 대한 몇 가지 메트릭을 제공하며 AWS는 이러한 메트릭을 자동으로 수집(push)한다.
- 기본 모니터링은 5분 간격으로 수집하지만 detailed monitoring을 활성화하게되면 1분 간격으로 수집한다.
- 메트릭은 CPU, Network, 디스크, Status 메트릭이 포함된다.
- 기본적으로 RAM에 대한 지표는 지원하지 않는다. 기본적으로 CloudWatch에서 RAM 사용량을 확인할수는 없다.
- 사용자 지정 메트릭을 사용할 수도 있다. 사용자 지정 메트릭의 기본 resolution은 1분이지만 최대 1초 간격의 메트릭을 수집할수도 있다.
  - 사용자 지정 메트릭을 사용하려면 EC2에 CloudWatch에 메트릭을 푸시할수 있는 IAM Role이 필요하다.
- EC2 메트릭
  - CPU Utilization은 0~100% CPU 사용량을 확인 가능하다.
  - Status check는 EC2 인스턴스가 하드웨어 또는 소프트웨어 레벨에서 문제를 겪고 있는지 확인하는 방법이다. 0과 1의 값이고 1의 경우 Fail이 발생했다는 이야기
  - Network in and out은 EC2 인스턴스에 들어오고 나가는 네트워크의 양 및 패킷 수를 나타낸다.
  - 디스크 읽기 및 디스크 쓰기는 0으로 보일 것이다. 인스턴스는 EBS 볼륨이 연결되어 있기 때문에 0으로 보이는 것이 정상 상태이다. 디스크 읽기 및 쓰기 메트릭은 EBS 볼륨에서 볼 수 있다. 그러나 인스턴스 스토어가 있는 EC2의 경우 이러한 메트릭이 0이 아닐 것이다.
  - CPU 크레딧 사용이 있다. AWS 버스터블 유형(t2/t3) 인스턴스의 경우 크레딧을 사용한다.
  - CPU 크레딧 밸런스를 확인할 수 있다. EC2 인스턴스를 사용하지 않으면 CPU 크레딧 밸런스가 시간이 지남에 따라 증가한다.

## **CloudWatch - Unified CloudWatch Agent - Overview**
**정리**


- EC2 인스턴스 내에서 메트릭 및 로그를 수집하는 방법은 CloudWatch Unified Agent이다. EC2 인스턴스 또는 온프레미스 서버에서도 사용 가능하다.
- 이 에이전트를 사용해 추가적인 메트릭(RAM, 프로세스, 사용중인 디스크 공간)이나 로그를 수집할 수 있다.
- 기본적으로 EC2 인스턴스를 실행하면 CloudWatch Logs로 파일이나 로그가 전송되지 않는데, Agent를 설치하면 전송할 수 있다.
- Agent를 구성하려면 SSM Parameter Store를 이용해서 중앙 집중식으로 Config를 저장하거나 대안으로 Configuration 파일을 직접 지정할 수 있다.
- EC2 인스턴스에서 메트릭 및 로그를 CloudWatch로 전송하려면 올바른 권한이 있는지 확인해야한다. 이는 온프레미스에서도 동일하며 온프레미스의 경우 AWS IAM User를 생성해 해당 User의 권한을 이용해야 한다.
- Agent에 의해 푸시되는 모든 메트릭은 CWAgent 접두사로 시작한다. Namespace라는 항목으로 표시되고 변경 가능하다.
- 시험에서 나오는 중요한 내용 중 하나는 Agent에 procstat 플러그인이 있다는 것이다.
  - procstat 플러그인은 Linux 또는 Windows 서버에서 실행 중인 개별 프로세스의 메트릭을 수집하고 시스템 사용률을 모니터링할 수 있다.
  - 예를 들어 프로세스가 사용하는 CPU 사용 시간, 프로세스가 사용하는 메모리 양 또는 EC2 인스턴스에서 직접 실행되는 프로세스에 대한 정보를 얻을 수 있다.
  - pid_file로 모니터링할 프로세스를 선택할 수 있다. PID 번호 또는 프로세스의 이름 또는 프로세스의 이름 정규식 패턴으로 프로세스를 지정할 수 있다.
  - procstat을 사용해 모니터링할 모든 메트릭은 procstat 접두사로 시작된다.

## **EC2 Instance Status Checks**
**정리**


- EC2 인스턴스의 상태 확인은 AWs가 자동으로 수행하는 작업으로 하드웨어 및 소프트웨어의 문제를 식별한다.
- system status check 와 instance status check가 있다.
- system status check는 AWS 시스템에서 발생하는 문제를 모니터링 한다.
  - 예를 들어 실제 물리 호스트에 대한 소프트웨어 또는 하드웨어 문제 또는 호스트가 시스템 전원을 잃는 경우와 같은 상황이다.
  - 이러한 문제에 대한 overview를 확인하려면 personal health dashboard를 확인하면 된다. 이 대시보드에는 AWS가 예정된 사항이나 critial maintenance 항목을 제공하며 이 항목들은 EC2 인스턴스 호스트에 영향을 미친다.
  - 문제를 해결하기 위해서는 인스턴스를 중지하고 시작하면 된다. 인스턴스 중지 및 시작할 때 EC2는 우리 눈에는 보이지 않는 과정을 거친다.
  - AWS 데이터센터 내의 다른 호스트로 마이그레이션 된다. 예를 들어 호스트 1에서 실행중인 EC2 인스턴스가 있었다고 하면 중지 및 시작하고 나면 호스트 2에서 EC2 인스턴스가 실행되게 된다.
- instance status check는 인스턴스의 소프트웨어 및 네트워크 구성을 모니터링한다.
  - 예를 들어 네트워크 구성이 잘못 되었거나 메모리가 고갈된 경우이다.
  - 이 문제를 해결하려면 EC2 인스턴스를 reboot 하거나 인스턴스 구성을 변경하면 된다.
  - CloudWatch 메트릭 기반으로 자동으로 recover하는 방법도 있다. StatusCheckFailed_System, StatusCheckFailed_Instance 또는 이 두 메트릭을 하나의 메트릭으로 그룹화한 StatusCheckFailed이 있다.
  - recover는 두 가지 방법이 있다.
  - 하나는 CloudWatch Alarm과 Action을 이용해서 복구할 수 있다. 이 방법의 경우 recover instance라는 작업(Action)을 사용할 수 있다. 작업이 수행되면 인스턴스는 동일한 Private IP, 동일한 Public IP, 동일한 EIP, 동일한 메타데이터, 동일한 Placement Group을 사용해 인스턴스를 복구한다.
  - 또한 CloudWatch Alarm이기 때문에 SNS로 알림을 보낼수 있다.
  - 하나는 Auto Scailing Group Min, Max, desired 1을 설정하는 것이다. 그리고 ASG 상태 확인을 통해 EC2 인스턴스의 StatusCheck를 확인한다. 이 경우 EC2 인스턴스에 문제가 생겨도 desired 1 을 유지한다. EBS 볼륨, Private IP, EIP 등을 이전과 동일하게 가져갈수는 없다.

## **EC2 Instance Status Checks - MUST KNOW**
## **EC2 Hibernate**
**정리**


- Hibernate는 최대 절전 모드이다. 무슨말이냐? 우리가 일반적으로 인스턴스를 중지하고 시작하게되면 OS 부팅, 캐시 초기화, user data 실행 등등 과정을 거치게 된다.
- Hibernate는 이러한 과정을 거치지않고 RAM의 데이터를 루트 볼륨 EBS에 저장해 부팅 시 이를 활용해 더욱 빠른 부팅을 하게 해준다.
- Hibernate를 사용하기 위해서는 루트 EBS 볼륨은 암호화되어 있어야하고, EBS 볼륨에 RAM 데이터를 담을 만한 충분한 공간이 있어야 한다.
- 사용 사례는 장기 실행 프로세스를 중지하지 않거나 RAM 상태를 저장하려는 경우, 또는 빠르게 부팅하고 초기화에 시간이 오래 걸리는 서비스를 가지고 있는 경우 등이 있다.
- Hibernate 관련 사항
  - 여러가지 다양한 패밀리를 지원하며 RAM 크기는 150GB 미만이어야 한다.
  - 베어메탈 인스턴스는 지원되지 않는다.
  - Linux 및 Windows 및 다른 운영체제도 지원된다.
  - 온디맨드, 예약 및 스팟 인스턴스등 모든 종류의 인스턴스에서 지원된다.
  - 60일 이상 Hibernate 되지 않으며, 60일 이상하려면 중지 상태에서 실행 했다가 다시 Hibernate 해야한다.

## **[CCP/SAA/DVA] AMI Overview**
**정리**


- AMI는 Amazon Machine Image의 약자로서 인스턴스의 사용자 정의를 나타낸다.
- AMI는 소프트웨어 구성뿐만 아니라 운영 체제를 정의하고 설정하며 모니터링 도구를 설정할 수 있다.
- 직접 AMI를 생성하거나 AWS에서 제공해주는 AMI를 사용할 수 있다.
- 특정 Region에 대해 AMI를 생성할 수 있고 원한다면 다른 Region 또는 계정으로 복사할 수 있다.
- 자체 소프트웨어를 설정하고 sales 벤더가 자체 AMI를 생성한 마켓플레이스 AMI를 사용할수도 있다.
- AMI는 먼저 구성된 인스턴스가 있으면 데이터 무결성이 올바르게 유지 되도록 중지하고, 이 인스턴스를 기반으로 AMI를 작성할 수 있으며 EBS 스냅샷이 생성된다. 생성된 AMI를 기반으로 인스턴스를 시작할 수 있다.

## **AMI No Reboot Option**
**정리**


- No-Reboot 이라는 옵션이 있다.
- 이는 실행중인 인스턴스에 AMI를 생성할 때 재부팅을 하지 않는다는 의미이며, 기본적으로 AMI를 생성하기 전에 인스턴스를 중지해야한다.
- No-Reboot 옵션을 활성화하게 되면 실행중인 인스턴스에 연결된 EBS 볼륨에 대한 스냅샷이 직접 생성되고, 그 다음 AMI 이미지가 생성된다.
- 이 경우 파일 무결성이 보장되지 않을 수 있고, 스냅샷이 생성되기 전에 OS 버퍼가 디스크로 플러시되지 않는다.
- AWS 백업 서비스를 사용하는 경우도 인스턴스를 재부팅하지 않는다. 사실상 No-Reboot 동작이다.
- 대안으로는 EventBridge와 Lambda를 이용해서 특정 기간에 람다 함수를 실행 시켜 인스턴스를 재부팅하고 AMI를 생성하는 코드를 작성해 실행시키면 된다.

## **EC2 Instance Migration using AMIs**
**정리**


- EC2 인스턴스를 한 AZ에서 다른 AZ로 마이그레이션하려면 AMI를 사용하면 된다.
- 기본적으로 AMI는 원본과 동일한 데이터, 파일 시스템 및 응용 프로그램을 가지고 있기 때문에 마이그레이션 된 인스턴스도 동일한 내용을 가진다.
- 다른 AWS 계정과 AMI를 공유할수도 있다. **Cross-Account AMI Sharing**
  - AMI를 공유할 때 AMI의 소유권에는 영향을 미치지 않고 공유를 한 계정이 소유자로 남아있다. 공유를 받은 계정은 해당 AMI에 대해 삭제, 공유, 수정은 불가하다.
  - AMI를 공유할 수 있는 방법은 두 가지이다.
  1.  볼륨이 암호화되어 있지 않은 경우
  2.  볼륨이 암호화되어 있는데 사용자 고유의 고객 관리 키(CMK)로 암호화된 경우
  - 볼륨이 암호화되어 있지 않은 경우 단순히 공유만 하면 대상 계정에서 해당 AMI를 이용해 EC2 인스턴스를 생성 가능하다.
  - 만약 암호화된 AMI를 공유할 때에는 해당 AMI 뿐만 아니라 암호화된 키를 공유해야 하며, 대상 계정에 해당 키를 사용해 특정 작업을 수행할 수 있는 권한을 부여해야 한다.
- 다른 AWS 계정과 AMI를 공유하고 해당 AMI를 Copy 가능하다. **Cross-Account AMI Copy**
  - 소스 AMI 소유자인 상태에서 대상에 복사하면 대상 AMI의 소유자가 된다.
  - 복사하는 과정은 공유된 소유자 AMI를 대상 계정에서 Copy하면 Copy된 AMI는 대상자의 소유가 되며 복사가 된다.
  - Copy 과정에서 CMK를 이용해 대상 계정이 소유하는 암호화된 AMI가 생성된다.

## **EC2 Image Builder**
**정리**


- Image Builder는 가상 머신이나 컨테이너 이미지의 자동 생성을 위해 사용되는 서비스이다.
- Image Builder를 이용하면 EC2 인스턴스 용 AMI를 자동으로 생성, 유지 관리, 유효성 검사, 테스트 할 수 있다.
- AMI를 생성하고 유효성 검사를 하고 싶다면 Image Builder는 해당 AMI에서 테스트 EC2 인스턴스를 자동으로 생성하고 미리 정의한 여러 테스트를 실행할 수 있다. 테스트는 건너뛸 수 있다.
- Image Builder는 AMI를 가져와 여러 Region에 배포할 수 있어 응용 프로그램 및 워크 플로우가 실제로 글로벌하게 동작하도록 할 수 있다.
- 또한 스케줄링도 가능하다. 매주 스케줄을 정의하거나 패키지가 업데이트될 때 실행하거나 수동으로 실행 가능하다.
- Image Builder는 무료 서비스여서 기본 리소스에 대해서만 비용이 청구된다. 프로세스 동안 EC2 인스턴스가 생성되면 해당 인스턴스에 대해서만 청구가 되며, 생성된 AMI 저장 비용이 청구가 된다. 이외에 별도의 빌드 및 테스트 및 배포에 대한 비용은 청구되지 않는다.

## **AMI In Production**
**정리**


- 프로덕션 환경에서는 사용자가 사전 승인된 AMI로만 EC2 인스턴스를 시작하도록 강제하는 방법이 있다.
- 사전 승인된 AMI란 특정 태그를 AMI에 지정하는 것이고, 이를 IAM 정책과 결합하면 사용자가 특정 태그가 지정된 AMI로만 인스턴스를 시작할 수 있는 개념이다.
- 예를 들어 env='prod' 라는 태그가 지정된 AMI만 특정 사용자가 시작할 수 있는 것이다.
- 또한 태그를 추가할 수 있는 사용자를 제한하는 것도 중요하다.
- 태그를 추가하는 방법 또는 AWS Config를 사용해 승인되지 않은 EC2 인스턴스로 정의되는 EC2 인스턴스를 찾을 수 있다.
- 예를 들어 사용자가 승인이 되었거나 되지 않았거나 인스턴스를 시작할 수 있을 때 Config를 사용해 이 두 EC2 인스턴스가 규정을 따르는지 여부를 모니터링하는 규칙을 작성할 수 있다.
- 규정을 따르지 않는 것은 Config에 의해 플래그가 지정되고, 조치를 취할 수 있으며, 규정을 따르는 것은 문제가 없다. 플래그는 콘솔에서 확인 가능하다.

## **Systems Manager Overview**
**정리**


- System Manager는 확장 가능한 EC2 Fleet 인스턴스와 온프레미스 서버를 관리하는데 도움이 된다.
- 시험에서는 패치를 적용하거나 실행 중인 모든 종류의 서버에 대해 자동화하는 작업에 System Manager를 이용한다.
- Window 및 Linux 운영체제 모두에서 작동하며 CloudWatch Metric, CloudWatch 대시보드와 완전히 통합되어 있다.
- System Manager는 무료 서비스이고, 사용하는 리소스 또는 생성하는 리소스에 해당해서만 비용이 부과된다.

## **AWS Tags & SSM Resource Groups**
**정리**


- 태그는 많은 리소스에 적용할 수 있는 Key Value 쌍이다. 다양한 리소스에서 사용된다.
- 일반적으로 "Environment":"prod", "Team":"Infra" 등의 태그로 많이 정의된다.
- 태그는 리소스 그룹화, 자동화, 보안 및 비용 할당으로 많이 사용된다. 일반적으로 적은 태그보다 많은 태그를 가지는 것이 더 좋다.
- 태그를 사용해 리소스 그룹을 생성하고 여러 리소스를 그룹화할 수 있다.
- 동일한 태그를 사용해 리소스를 그룹화하면 태그 기반으로 그룹화된 SSM 작업을 할 수 있다.

## **SSM Documents & SSM Run Command**
**정리**


- SSM Documents는 JSON 또는 YAML로 작성될 수 있고, Document에 작업을 정의해 특정 서비스에서 정의된 매개변수와 함께 Document를 수행할 수 있다.
- AWS에서는 미리 정의된 제공되는 Documents가 있으며, 사용자가 자체적으로 SSM Documents를 작성할 수도 있다. 또한 다른 사용자에게 내 Documents를 공유할 수도 있다.
- Documents는 State Manager, Patch Manager, Automation 등의 다른 SSM 기능에 적용 가능하고 SSM Parameter Store에서 일부 데이터를 검색해 문서에 대한 일종의 모듈성과 동적성을 제공할 수 있다.
- SSM Run Command를 사용하면 Documents를 적용할 수 있다.
- Run Command를 사용해 이전에 만든 리소스 그룹(EC2 인스턴스 플릿 전체)을 활용하여 단일 명령을 실행할 수 있다.
- Run Command에는 Rate Control 또는 Error Control이 있다.
  - Rate Control은 말그대로 한 번에 수행해야 할 인스턴스의 비율이다. 예를 들어 1,000개의 인스턴스에 한번에 명령어를 수행한다면 문제가 발생할 수 있으니 점진적으로 수행하는 기능이다.
  - Error Control은 명령어 수행 중 에러가 발생할 경우 Run Command 자체를 중단하는 기능이다. 예를들어 10개의 인스턴스가 있는 리소스 그룹에 대해 10%의 비율을 설정하게 되면 1개 이상의 Error가 발생하면 Command를 중단하는 것이다.
- IAM & CloudTrail과 통합되어 있어 누가 명령을 실행하는 지 알 수 있다.
- Output을 출력받아 콘솔에서 확인하거나 S3 또는 CloudWatch로 Export 가능하다.
- 명령 수행 상태를 확인하려면 콘솔을 살펴보거나 SNS로 정보를 보내 진행 중인지 성공 했는지 실패 했는지 등을 알 수 있다.
- EventBridge나 CloudWatch Events를 연동해 Run Command를 호출할 수도 있다.

## **SSM Automation**
**정리**


- Automation은 EC2 인스턴스나 다른 AWS 리소스를 위한 일반적인 유지 관리와 배포 작업을 단순화한다.
- Run Command와의 다른 점은 Run Command는 단일 명령어 및 스크립트를 수행하는데, Automation은 여러 작업을 단계적으로 수행하거나 Task의 형태로 나누어 수행 가능하다.
- Automation Runbook의 경우 자동화 형식이 될 문서의 이름이다. Runbook은 EC2 인스턴스나 AWS 리소스에 작업을 정의하고 수행하는 것이다. SSM Run Command로 비교하면 Documents == Runbook인 느낌
- Runbook의 경우 AWS가 미리 정의한 Runbook도 있고 Custom Runbook을 만들 수도 있다.
- Automation은 콘솔이나 CLI, SDK를 이용해 트리거 된다. EventBridge Rule을 이용해서 자동화할 수도 있다.
- SSM Maintenance Windows를 이용해서 특정 일정에 수행되는 자동화도 가능하다.
- AWS Config rules remediation으로 규칙에 준수되지 않는 리소스를 발견할 때마다 수행하는 자동화도 가능하다.

## **[SAA/DVA] SSM Parameter Store Overview**
**정리**


- SSM Parameter Store는 configuration과 secrets를 위한 보안 저장소이다. 파라미터 스토어는 Serverless이며, 확장 가능하고 사용이 쉬운 SDK가 특징이다.
- 선택적으로 configuration을 KMS 서비스를 이용해 암호화할 수도 있다.
- CloudFormation과 통합해서 CloudFormation이 파라미터 스토어의 매개변수를 Stack의 input 매개 변수로 활용할 수 있다.
- 파라미터 스토어 매개 변수를 계층 구조와 함께 저장 가능하다.
  - 예를 들어 특정 부서별 db를 관리하고 있고 해당 db에 대한 url과 패스워드 값을 파라미터로 저장해 특정 부서 경로에 액세스할 수 있도록 IAM 정책을 구성하면 부서 별 파라미터 접근 권한을 관리할 수 있다.
  - /infra-department/my-app/dev/db-url
  - /infra-department/my-app/dev/db-password
  - /dev-department/my-app/dev/db-url
  - /dev-department/my-app/dev/db-password 등등..
- 파라미터 스토어를 통해 secrets Manager에 접근할수도 있다.
  - /aws/reference/secretsmanager/secret_ID_in_Secrets_Manager
- AWS가 관리하는 퍼블릭 파라미터를 사용할 수도 있다.
  - 예를 들어 특정 Region에서 최신 AMI를 찾으려면 파라미터 스토어에서 값을 가져올 수 있다.
  - /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2
- Parameter Store에는 두 종류의 매개 변수 Tier가 있다.
  - Standard
    - 무료 요금
    - Standard의 경우 매개 변수 정책을 설정할 수 없다.
  - Advanced
    - 한달에 parameter 당 0.05$
    - 매개 변수 정책 설정 가능
- 매개 변수 정책
  - 매개 변수에 TTL을 설정해서 매개 변수가 만료되는 시점을 설정할 수 있다. 패스워드 같은 민감 데이터를 업데이트하거나 삭제하도록 강제하는 것이다.
  - 한번에 여러 정책을 설정할 수 있다.
    - 예를 들어 매개 변수가 만료되기 15일 전 이벤트 브릿지에서 알람을 받고, 20일 동안 매개 변수가 업데이트되지 않는다면 알람을 받아 두 개의 알람을 한 번에 받을수도 있다.

## **SSM Inventory & State Manager**
**정리**


- SSM Inventory는 관리되는 인스턴스(EC2, 온프레미스)로부터 메타데이터를 수집하는 데 사용된다.
  - 메타데이터에는 많은 것이 포함된다. 설치된 소프트웨어, OS 드라이버, Configurations, 설치된 업데이트, 실행중인 서비스 등등
  - AWS 콘솔에서 데이터를 보거나 S3에 데이터를 저장해 Athena를 이용해 쿼리 후 분석하거나 QuickSight를 이용해 데이터 대시보드를 구축할 수도 있다.
  - 수집 간격은 분, 시간, 일 단위로 가능하다.
  - 여러 계정 및 Region에서 데이터를 모아 하나의 계정에서 중앙 집중형으로 쿼리를 날릴 수 있다.
  - 사용자 지정 인벤토리를 만들 수도 있으며, 설정 초기에 Click here to enable inventory on all instances 를 해주면 모든 인스턴스에 대한 inventory를 활성화 할 수 있다.
- SSM State Manager는 관리되는 EC2를 우리가 정의한 상태로 유지하는 데 사용된다.
  - 사용 사례는 소프트웨어의 인스턴스를 부트스트랩하거나, OS나 소프트웨어 업데이트를 일정에 따라 패치하는 것이다.
  - State Manager Association을 만들어 인스턴스가 유지되어야하는 상태를 정의할 수 있다. 예를 들어 무조건 포트 22번을 닫거나 EC2에 안티 바이러스를 설치해야 하는 등의 상태.
  - 그리고 해당 Configuration이 적용 될 스케줄을 지정해줄수 있다.
  - State manager를 활용하려면 SSM Documents를 사용하고 Association을 생성해야한다.

## **SSM Patch Manager and Maintenance Windows**
**정리**

- Patch Manager는 관리되는 인스턴스의 패치 프로세스를 자동화할 수 있다.
- OS 업데이트, 응용 프로그램 업데이트 및 보안 업데이트를 포함하고, EC2 및 온프레미스 서버, Linux/MacOS/Windows OS를 모두 지원한다.
- 패치 매니저를 사용하여 패치를 원할 때 실행하거나 Maintenance Windows를 사용하여 일정에 따라 패치 매니저를 실행할 수 있다.
- 인스턴스를 스캔하고 모든 관리되는 인스턴스에 대한 패치 컴플라이언스 보고서를 생성하고, 이 보고서에 따른 조치를 취할 수 있다.
- 패치 매니저는 구성 요소가 있음
  - 패치 베이스 라인
    - 패치 베이스라인은 EC2 인스턴스에 설치해야되는 패치와 설치해서는 안되는 패치를 정의하며, 사용자 정의 패치 베이스라인을 생성할 수 있다.
    - 패치는 승인 또는 거부할 수 있으며 승인의 경우 자동 승인을 설정해 일정 기간까지 패치를 완료하거나 일정 기간 이후 패치를 완료하도록 설정할 수 있다.
    - custom 베이스라인을 사용하게 되면 심각도 카테고리를 설정해 critical patch 및 important patch만을 패치를 설치하도록 구성할 수도 있다.
  - 패치 그룹
    - 특정 패치 베이스라인을 정의하는 경우 배치 그룹을 생성해 이를 연결할 수 있다.
    - 패치 그룹을 사용할 때는 인스턴스에 `Patch Group` 또는 `PatchGroup` 태그가 설정되어야 하고, 각 인스턴스는 key value만 같다면 언제든지 하나의 패치 그룹에 속한다. 또한 한 인스턴스는 하나의 패치 그룹에만 속할 수 있고, 패치 그룹은 하나의 패치 베이스라인에만 등록될 수 있다.
- Maintenance Windows
  - 인스턴스에서 작업을 수행할 일정을 정의할 때 사용된다.
  - OS 패치, 드라이버 업데이트 및 소프트웨어 설치 등의 작업을 할 수 있으며, 특정 시간 및 기간에 수행 가능하다. (03:00 ~ 05:00 등)
  - 일정과 기간 그리고 등록된 인스턴스의 집합 그리고 수행되어야할 태스크 등이 포함 돼 있다.
- 시험 관점에서는 패치 매니저가 인스턴스에 패치를 적용하는 데 사용된다는 것, 필요하다면 특정 Maintenance Windows에서 특정 rate control도 가능하다는 것을 알면 된다.

## **SSM Session Manager Overview**
**정리**


- 세션 매니저는 EC2 인스턴스 및 온프레미스 서버에서 셸 환경을 안전하게 시작하는 방법이다.
- 콘솔, CLI 또는 세션 매니저 SDK를 통한 액세스를 지원하며, 세션 매니저는 인스턴스에 직접 SSH 연결하거나 배스쳔 호스트를 사용 하지 않아서 굉장한 이점이 있다.
- EC2 인스턴스는 SSM Agent를 실행하고 SSM 서비스에 등록할 Role이 있어야 한다. 사용자는 IAM 권한을 사용해 세션 매니저 서비스에 연결한다. 세션 매니저는 EC2 인스턴스에서 명령을 실행한다.
- Linux, MacOS, Windows에 대한 공통 셸 인터페이스를 제공한다.
- 모든 연결, 인스턴스에서 실행된 명령은 로그로 기록되며 로그는 S3, CloudWatch Logs로 전송할 수 있다.
- CloudTrail은 StartSession 이벤트를 확인할 수 있어 자동화, 규정 준수 및 경고에 대한 가시성을 제공한다.
- IAM Policy는 사용자 또는 그룹이 세션 매니저에 액세스하고 인스턴스 액세스를 정의하는 데 사용된다.
- 태그를 사용해 특정 EC2 인스턴스에만 액세스할 수 있도록 제한할 수 있다.
- 선택적으로 세션에서 사용자가 실행할 수 있는 명령을 제한할 수 있다.

## **[SAA/DVA] What is High Availability and Scalability?**
**정리**

- Scalability는 응용 프로그램 시스템이 더 큰 부하를 견딜 수 있게 적응하는 것을 의미함
- 수직 Scalability
  - 인스턴스 사이즈를 증가하는 것을 의미한다.
  - 데이터베이스 같은 비 분산 시스템의 경우 수직 Scalability를 사용해야 한다.
  - 일반적으로 수직으로 얼마나 확장할 수 있는지에는 제한이 있다.
  - 인스턴스를 수직으로 확장/축소 하는 것을 scale out/in 이라고 한다.
- 수평 Scalability
  - 응용 프로그램에 대한 인스턴스/시스템 수를 증가시키는 것을 의미한다.
  - 모든 응용 프로그램이 분산될 수 있는 것은 아니다.
  - 인스턴스를 수평으로 확장/축소 하는 것을 scale up/down이라고 한다.
- High Availability(고가용성)
  - 일반적으로 수평 Scalability와 함께 진행되지만 항상 그런 것은 아니다.
  - 응용 프로그램 또는 시스템을 최소한 두 개의 데이터 센터 또는 AWS의 두 가용 영역에서 실행한다는 것을 의미한다.
  - 고가용성의 목표는 데이터 센터 손실을 견딜 수 있도록 하는 것이다. 한 센터가 다운 되더라도 시스템을 여전히 운영 가능해야 한다.
  - RDS Multi AZ에서는 수동 형태의 고가용성이 있을 수 있다.


## **[SAA/DVA] Elastic Load Balancing (ELB) Overview**
**정리**

- 로드 밸런서에 대한 개요
  - 로드 밸런서는 받은 트래픽을 여러 백엔드 또는 다운스트림 EC2 인스턴스 또는 서버로 전달하는 서버이다.
  - 사용자는 정확히 어떤 백엔드 인스턴스에 연결되어 있는지 모르고, 로드 밸런서를 통해서 대상 EC2 인스턴스 전체에 고르게 분배된다.
  - ELB를 사용해야하는 이유는 응용 프로그램에 대한 단일 액세스 포인트를 노출할 수 있기 때문이다.
  - 로드 밸런서는 헬스 체크 매커니즘을 갖추고 있어 어떤 인스턴스에 트래픽을 보내지 않아야 하는지 알 수 있다.
  - 웹 사이트에 HTTPS 암호화 트래픽이 있는 경우 SSL Termination을 수행할 수 있다.
  - 쿠키를 사용해 지속성을 강제할 수 있다.
- ELB란?
  - 관리형 로드 밸런서이며, AWS가 작동을 보장한다. 또한 관리 측면에서 유지보수 및 고가용성을 처리한다.
  - 로드 밸런서는 ASG, ECS, ACM, CloudWatch 등 다양한 AWS 서비스와 통합되어 있다.
- Health check
  - 헬스 체크는 ELB가 대상 EC2 인스턴스가 제대로 작동하는 지 여부를 확인하는 방법이다. -> EC2가 제대로 작동하지 않는다면 해당 인스턴스로 트래픽을 보내지 않기 위해서
  - 헬스 체크는 포트와 라우트를 사용해 수행한다. 예를 들어 프로토콜은 HTTP이고 포트는 4567이며 엔드포인트는 /health일 때 200 Status code를 응답하지 않으면 인스턴스는 Unhealthy로 표시될 거싱고 Unhealthy일 경우 트래픽을 보내지 않을 것이다.
- ELB 종류
  - CLB (Classic Load Balancer)
    - 구 버전 로드 밸런서
    - HTTP, HTTPS, TCP, SSL 등과 호환된다.
  - ALB (Application Load Balancer)
    - HTTP, HTTPS, 웹소켓을 지원한다.
  - NLB (Network Load Balancer)
    - TCP, TLS, UDP 프로토콜을 지원한다.
  - GWLB (Gateway Load Balancer)
    - 3계층인 네트워크 레이어에서 작동하고, IP 프로토콜을 사용한다.
- 전반적으로 더 최신 세대의 로드 밸런서를 사용하는 것이 좋다.
- 로드 밸런서는 internal(private, 내부)나 external(public, 외부 공개)으로 설정될 수 있다.

## **[SAA/DVA] Application Load Balancer (ALB)**
**정리**


- ALB는 Layer 7에서만 작동하며, HTTP에 특화되어 있다.
- 여러 대의 머신에 HTTP 응용 프로그램으로 라우팅할 수 있게 해주며, 여러 대의 머신은 대상 그룹(Target Group)이라 불리는 것에 그룹화 된다.
- HTTP/2와 웹소켓을 지원하고, 로드 밸런서 수준에서 HTTP에서 HTTPS로 트래픽을 자동으로 리다이렉트를 지원한다.
- URL 대상 경로를 기반으로 경로 라우팅을 지원한다.
  example.com/users 및 example.com/posts와 같이 URL의 대상 경로를 기반으로 라우팅할 수 있다.
- hostname 기반으로 라우팅할 수도 있다. 
  one.example.com 또는 other.example.com 을 사용해 액세스되는 경우 서로 다른 대상 그룹으로 라우팅 될 수 있다.
- 쿼리 문자열과 헤더를 기반으로 라우팅할 수도 있다.
  example.com/users?id=123&order=false와 같은 방식으로 라우팅할 수 있다.
- ALB는 마이크로 서비스와 컨테이너 기반 애플리케이션을 보유할 때 유용하다.
- Auto Scaling Group에 의해 ALB 뒤에 있는 애플리케이션이 관리될 수 있따.
- Lambda 함수를 ALB 뒤에 둘수도 있다.
- 대상 그룹을 IP 주소 유형으로 설정해 ALB뒤에 둘 수 있으며, 이 IP는 반드시 Private IP 주소여야한다.
- 애플리케이션 서버는 클라이언트의 IP를 직접적으로 확인할수 없다. 클라이언트의 실제 IP는 X-Forwarded-For 헤더에 삽입된다.
- X-Forwarded-Ports를 사용해 실제 클라이언트의 포트를 얻을 수 있고, X-Forwarded-Proto를 사용해 사용중인 프로토콜도 얻을 수 있다.



## **[SAA/DVA] Network Load Balancer (NLB)**
**정리**

- NLB는 레이어 4 로드 밸런서이며, TCP 및 UDP 트래픽을 처리할 수 있다.
- 매우 높은 성능을 가지고 있어 백만 건 이상의 요청을 처리할 수 있다.
- ALB에 비해 대기 시간이 줄어든다. ALB의 400 밀리초 대비 100 밀리초 정도이다.
- 가용 영역당 정적 IP가 하나이고, 각 AZ에 Elastic IP를 할당할 수 있다. 그래서 애플리케이션이 정적 IP를 노출해야 한다면 유용하다.
- 시험에서 "애플리케이션은 한개, 두개, 세개의 다른 IP에서만 액세스 가능하다"라고 한다면 NLB를 생각해봐야 한다. 또한 극도의 성능, TCP 또는 UDP, 정적 IP를 보면 NLB를 생각해야한다.
- NLB 작동
  - ALB와 매우 유사하다.
  - 대상 그룹을 생성하고 NLB가 해당 대상 그룹으로 리디렉션 한다.
  - 대상 그룹은 EC2 인스턴스, IP 주소가 될 수 있으며, IP 주소는 반드시 Private IP여야한다.
  - NLB를 ALB앞에 놓을 수도 있다. 이렇게 하는 이유는 NLB 덕분에 고정 IP 주소를 얻을 수 있고, ALB 덕분에 HTTP 유형의 트래픽 처리에 대한 모든 규칙을 얻을 수 있다.
  - NLB 대상 그룹에서 수행되는 헬스 체크는 TCP, HTTP, HTTPS 의 세 가지 다른 종류의 프로토콜을 지원한다. 백엔드 애플리케이션이 HTTP 또는 HTTPS 프로토콜을 지원하는 경우 이러한 프로토콜에 대한 헬스 체크를 정의할 수 있다.

## **[SAA/DVA] Gateway Load Balancer (GWLB)**
**정리**

- GWLB는 모든 네트워크 트래픽이 방화벽, 침입 탐지 및 방지 시스템을 통과하도록 할때 사용한다. IDPs나 심층 패킷 검사 시스템을 사용하거나 일부 페이로드를 수정하려면 네트워크 수준에서 수정할 수 있다.
- 기존에는 Third-party 어플라이언스를 EC2와 같은 것으로 해결했는데 GWLB를 사용하면 사용자가 애플리케이션에 액세스할 때 모든 트래픽을 애플리케이션에 도달하기 전에 검사 가능하다.
- 과정
  - GWLB를 통과하면 로드 밸런서는 트래픽을 가상 어플라이언스의 대상 그룹에 분산 시킨다.
  - 모든 트래픽은 애플라이언스에 도달하게 되고 애플라이언스는 트래픽을 분석하고 해야 할 작업을 수행한다.
  - 작업은 방화벽, 침입자 탐지 등이 있을 수 있고, 해당 작업에서 만족하지 않는다면 방화벽의 경우 트래픽을 드롭할 수 있다.
  - 트래픽은 GWLB를 다시 통과하고 GWLB가 트래픽을 애플리케이션으로 다시 전달한다.
- 게이트웨이 로드 밸런서는 L3에서 동작한다.
- GWLB는 두 가지 기능이 있다.
  - 명료한 네트워크 게이트웨이
    - VPC의 모든 트래픽이 단일 진입 및 단일 탈출인 게이트웨이 로드 밸런서를 통과하기 때문이다.
  - 로드 밸런싱
    - 트래픽을 가상 어플라이언스 및 대상 그룹의 세트에 분산 시킨다.
- 시험에서 "GENEVE 프로토콜을 사용하고 포트 6081에서 사용하려면" 이라고 한다면 GWLB를 사용하는 것이다.
- GWLB의 대상 그룹에 해당하는 것은 EC2 인스턴스, IP 주소 등이 있다.

## **[SAA/DVA] Elastic Load Balancer - Sticky Sessions**
**정리**

- ELB에 대해 Sticky Session 또는 Session Affinity를 구현할 수 있다.
- 로드 밸런서로 두 번의 요청을 하는 클라이언트가 동일한 백엔드 인스턴스에 응답할 수 있도록 하는 것이다.
- 클라이언트에서 로드 밸런서로 요청할 때 요청과 함께 쿠키가 전송되며 쿠키 안에는 Sticky Session이 있고, 만료 날짜가 있다. 쿠키가 만료되면 클라이언트는 다른 EC2 인스턴스로 리디렉션될 수 있다.
- 사용 사례는 사용자가 세션 데이터를 잃지 않기 위해 동일한 백엔드 인스턴스로 연결시키는 것이다. 세션 데이터는 사용자의 로그인 정보와 같은 중요한 정보가 포함될 수 있다.
- Sticky Session을 활성화 하면 일부 인스턴스에 요청이 고정 돼 인스턴스에 불균형을 초래할 수 있다.
- Sticky Session에는 두 가지 유형의 쿠키가 있다.
  - 응용 프로그램 기반 쿠키
    - 응용 프로그램 기반 쿠키는 사용자의 응용 프로그램 자체에서 생성하는 사용자 정의 쿠키이다.
    - ALB에서 사용하기 위해 예약된 AWSALB, AWSALBAPP, AWSALBTG 등의 이름을 사용해선 안되고 각 대상 그룹에 대해 개별적인 이름을 지정해야한다.
    - 응용 프로그램에서 필요한 모든 사용자 정의 속성을 포함할 수 있다.
  - 기간 기반 쿠키
    - ALB의 경우 쿠키 이름은 AWSALB이고, CLB의 경우 AWS ELB이다.
    - 기간 기반 쿠키는 특정 기간에 기반하여 만료되며, 해당 기간은 로드 밸런서에서 생성된다.
- Sticky Session은 타겟 그룹에서 설정 가능하다.
- 기간 기반 Sticky Session은 1초에서 7일 사이의 기간을 설정 가능하다.
- 응용 프로그램 기반 쿠키로 1초에서 7일의 기간을 설정할 수 있지만 애플리케이션에서 로드 밸런서로 전송하는 쿠키 이름을 지정해야 한다.

## **[SAA/DVA] Elastic Load Balancer - Cross Zone Load Balancing**
**정리**

- Cross zone load balancing은 가용 영역에 제한하지 않고 로드 밸런서에 등록된 인스턴스에 트래픽이 고르게 분배된다.
- 예를 들어 두 가용 영역이 있고 A 가용 영역 B 가용 영역이 있다고 했을 때 A 가용 영역에는 2개의 인스턴스 B 가용영역은 8개의 인스턴스가 있을 때 Cross zone load balancing을 사용하면 등록된 대상을 기준으로 트래픽을 고르게 분배한다.
- 기존에는 ALB에 부여된 타겟 그룹을 기준으로 50% 대 50%의 트래픽을 분산해 2개 대 8개로 불균형을 초래할 수 있는데, 10개 인스턴스를 기준으로 트래픽을 고르게 분산한다.
- ALB의 경우 Cross Zone load balancing이 기본적으로 활성화되어 있지만 타겟 그룹 수준에서 비활성화할 수 있으며 AZ 간에 데이터 이동시 원래는 비용이 지불되지만 활성화 된 경우 요금이 부과되지 않는다.
- NLB, GWLB의 경우 Cross Zone Load Balancing이 기본적으로 비활성화 되어 있다. ALB와는 다르게 GWLB는 AZ 간 데이터 이동 시 일정량의 비용이 발생한다.

## **[SAA/DVA] Elastic Load Balancer - SSL Certificates**
**정리**

- SSL은 Secure Sockets Layer의 약자이며 전송 연결을 암호화하는 데 사용된다. TLS는 SSL의 최신 버전으로 Transport Layer Security이다.
- Public SSL 인증서는 Certificate Authorities(인증 기관)에 의해서 발급되며 CA는 Letsencrypt, symantec, godaddy, digicert 등 있다.
- Public SSL 인증서를 로드 밸런서에 연결해 클라이언트와 로드 밸런서 간의 연결을 암호화할 수 있다.
- SSL 인증서는 클라이언트와 로드 밸런서 간의 트래픽을 전송 중에 암호화할 수 있게 한다.(In-Flight Encryption). 데이터가 네트워크를 통과하는 동안 암호화되며, 보내는 사람 및 수신자만 해독 가능하다.
- SSL 인증서는 만료 날짜가 있어, 정기적으로 갱신되어야 한다.
- AWS에서는 ACM(AWS Certificate Manager)를 사용해 AWS에서 인증서를 관리할 수 있으며, 필요한 경우 외부 인증서를 ACM에 직접 업로드 할 수 있다.
- 로드밸런서에서 HTTPS 리스너를 설정할 때는 기본적으로 인증서를 지정해야 한다. 다중 도메인을 지원하는 인증서 목록을 추가할 수 있으며, SNI(Server Name Indication)를 사용해 hostname을 지정할 수 있다.
  - domain1.example.com, domain2.example.com 두 개의 도메인 주소가 있고, 해당하는 타겟 그룹이 있을 때 ALB에 클라이언트가 domain1.example.com에 들어온다면 ALB는 그에 맞는 SSL 인증서와 타겟그룹을 사용한다.
  - ALB는 올바른 SSL 인증서를 가져와서 트래픽을 암호화하고 경로를 통해 올바른 타겟 그룹으로 리디렉션 한다. SNI를 사용하면 다른 SSL 인증서를 사용해 여러 웹 사이트에 대한 여러 타겟 그룹을 갖게된다.
- CLB의 경우 하나의 SSL 인증서만 지원 가능하고, ALB v2의 경우 여러 리스너와 여러 SSL 인증서를 지원한다.
- NLB도 SNI를 지원한다.

## **[SAA/DVA] Elastic Load Balancer - Connection Draining**
**정리**

- 인스턴스가 등록 해제(Deregestration)되거나 Unhealthy 상태로 표시될 때 In-flight 요청 또는 Active 요청을 완료할 충분할 시간이 필요하다. 이를 Deregistration Delay를 통해서 보장한다.
- 인스턴스가 Drain 되어 연결이 Drain되면 ELB는 인스턴스가 Deregistration되는 동안 Drain 중인 EC2 인스턴스로 요청을 보내지 않는다. 그리고 존재하는 커넥션이 완성되길 기다린다.
- CLI에서는 deregistration_delay.timeout_seconds 파라미터 값으로 시간을 조정하며, 기본 값은 300초(5분)이고 값을 0으로 설정하면 Drain이 발생하지 않는다. 최대 3,600의 값까지 설정 가능하다.
- 애플리케이션의 요청이 짧은 경우 매개 변수를 30초 정도로 설정하는 것이 좋다. 이렇게 하면 EC2 인스턴스가 빨리 Drain되고 오프라인으로 전환된다. 
- 업로드나 오래 지속되는 요청이 있는 경우 Deregistration을 높은 값으로 설정하고 싶지만 EC2가 빨리 사라지지 않으므로 Trade off가 될 수 있다.

## **Elastic Load Balancer - Health Checks**
**정리**

- ALB 또는 대상 그룹 자체에서 Health check를 설정할 수 있다.
  - HTTP 프로토콜, 인스턴스에 연결할 포트, Health Check 요청을 보낼 Path 등을 지정하여 health check를 할 수 있다.
  - path는 주로 /health 경로를 이용한다. 이 경로는 많은 웹 사이트나 애플리케이션이 기본적으로 가지고 있는 path이다.
- Health check는 여러 가지 매개변수가 있다.
  - check timeout: health check가 실패로 간주되기까지의 시간이다. 기본적으로 5초이며, 5초 안에 health check가 성공하지 않으면 실패로 간주된다.
  - interval: 대상 그룹 또는 ALB가 health check를 수행하는 빈도이다. 기본적으로 30초이며, 매우 낮은 값을 설정하면 응용 프로그램이 과도하게 사용될 수 있다.
  - healthy threshold counts: 대상이 건강한 것으로 간주되기 전에 health check가 성공해야하는 횟수
  - unhealthy threshold counts: 대상이 건강하지 않다고 간주되기 전에 연속으로 ehalth check가 실패해야 하는 횟수
- health status는
  - healthy: 초기 등록 중인 경우
  - Unhealthy: 건강하지 않은 경우
  - Unused: 대상이 등록되지 않아 사용되지 않는 경우
  - Draining: 대상이 등록 해제 중인 경우
  - Unavailable: health check가 비활성화된 경우
- 시험에서 알아야할 것은 대상 그룹에 Unhealthy만 포함된 경우 ELB는 모든 Unhealthy 대상으로 요청을 라우팅한다는 것이다. 이 경우 health check 자체가 잘못 되었다고 가정하고 인스턴스는 여전히 작동할수도 있기 때문에 요청을 라우팅하는 것이다.
- helath check가 EC2 인스턴스의 다른 포트에서 수행되는 경우 트래픽 포트 오버라이드를 수행할 수 있다.
- health check를 완료하고 200 Status code를 전송하는 대신에 특정 code를 설정할 수 있다.

## **Elastic Load Balancer - Monitoring, Troubleshooting, Logging and Tracing**
**정리**

- 로드 밸런서는 여러 오류 유형이 있음
  - 일반적으로 성공적인 요청은 200
  - 클라이언트의 웹 브라우저에서 오류가 발생하는 등 클라이언트의 오류이면 4XX 오류가 발생
    - 400: Bad Request
    - 401: Unauthorized
    - 403: Forbidden
    - 460: 클라이언트가 연결을 닫음
    - 463: 헤더 X-forwarded-for가 잘못된 경우
  - 로드 밸런서 또는 백엔드 EC2 인스턴스가 잘못되어 서버 측에서 발생하는 오류는 5XX 오류가 발생
    - 500: Internal server error
    - 502: Bad gateway
    - 503: Service unavailable, EC2 인스턴스가 로드 밸런서에 응답을 보낼 수 없는 경우
    - 504: Gateway timeout
    - 561: Unauthorized
  - 시험 관점에서 4XX 코드는 클라이언트의 문제이고, 5XX 코드는 서버 문제이다. 로드 밸런서에서 확인할 메트릭 유형을 결정하는 데 도움이 되는 정보이다.
- 로드 밸런서는 여러 메트릭이 있다.
  - UnHealthyHostCount와 HealthyHostCount는 매우 중요하다.
    로드 밸런서에 6개의 인스턴스가 등록되어 있고 그 중 2개가 다운되면 UnHealthyHostCount는 2이고 HealthyHostCount는 4이다.
  - 2XX, 3XX, 4XX, 5XX의 회수를 나타내는 메트릭이 있다.
  - Latency: 클라이언트에게 요청을 얼마나 빨리 받아올 수 있는지에 대한 정보
  - RequestCounts: 로드 밸런서의 전체 요청 횟수
  - RequestCountPerTarget: 평균적으로 얼마나 많은 EC2 인스턴스가 요청을 받는지
  - **SurgeQueueLength**: Helathy한 인스턴스로 라우팅 중인 총 요청 수이고, ASG를 확장하는 데 도움이 될 수 있다. 큰 요청 대기열이 필요 없기 때문에 0에 가깝게 유지 되도록 해야한다. 최대값인 1024에 가까울 수록 추가 요청이나 연결이 거부될 가능성이 커지기 때문이다.
  - **SpilloverCount**: 대기열이 가득 차서 거부된 요청의 수이다. 0보다 큰 값을 갖는 것을 절대로 피해야한다. 0보다 크다면 백엔드를 확장해 추가 요청을 처리하고 클라이언트가 일부 요청을 잃고 있는지 확인해야 한다.
- 해결 방법
  - 400의 경우 클라이언트가 잘못된 요청을 보냈다는 것이다.
  - 503의 경우 로드 밸런서에 사용 가능한 Healthy 상태의 인스턴스가 없다는 것을 의미하므로 HealthyHostCount 메트릭 및 CloudWatch를 확인해보면 된다.
  - 504의 경우 게이트웨이 시간 초과다. EC2 인스턴스의 keep-alive 설정이 활성화되어 있는지 확인하고, keep-alive timeout이 로드 밸런서의 idle timeout 설정보다 큰지 확인해야 한다.
- Load Balancer Access Log
  - 로드 밸런서의 액세스 로그는 S3에 저장될 수 있다.
  - 로그에는 로드 밸런서에 대한 모든 요청이 포함되며 "time, client ip address, latencies, request paths, server response, trace ID"와 같은 메타데이터가 포함된다.
  - S3로 로그를 전송할 때 비용이 발생한다.
  - 액세스 로그는 규정 준수 및 디버깅에 매우 유용하며 ELB 또는 EC2 인스턴스가 종료된 후에도 액세스 데이터를 보관하는 데 도움이 된다.
  - Access Log의 경우 S3로 전송된 로그를 Athena 서비스를 사용해 쿼리할 수도 있다.
- Tracing
  - X-Amzn-Trace-Id라는 사용자 지정 헤더를 이용해 각 Request를 Trace할 수 있다.
  - 이 헤더는 단일 요청을 추적하는 데, 분산 추적 플랫폼이나 로그에서 매우 유용하다.
- ELB 모니터링
  - Requests: 시간당 요청 수로서 부하 확인시 유용하다.
  - TargetResponseTime: 로드 밸런서에서 요청 신호를 전송한 후 Target에서 응답 신호가 수신될 때까지 결과된 시간
  - Error code: 4XX 5XX 등 어디서 문제가 발생했는지 이해하기 위함
  - ConsumedLCUs: 로드 밸런서가 실제로 얼마나 지불하는지

## **Target Group Attributes**
**정리**

- 대상 그룹에는 여러 옵션이 있음
  - 등록 취소 지연 (Deregistration delay)
    - 로드 밸런서가 대상을 등록 취소하기 전에 대기해야 하는 시간에 해당하는 초 단위의 시간 제한
  - 느린 시작 (Slow start)
    - 로드 밸런서가 대상으로 전체 요청 공유를 보내기 전에 대상에 초 단위의 워밍업 시간이 제공된다. 
  - 라우팅 알고리즘
    - 라운드 로빈(Round Robbin)
    - 최소 미해결 요청(Least outstanding requests)
    - 흐름 해시 알고리즘(Flow Hash)
  - Sticky session
    - 활성화 여부, type(애플리케이션 or 기간 기반), 쿠키 이름, 애플리케이션 기반의 쿠키 만료 기간(초 단위)
- Slow start와 routing 알고리즘의 차이
  - **slow start**는 타겟 그룹에서 올라인 상태가 된 EC2 인스턴스로 트래픽을 점진적으로 전송하는 방법.
  - 과부하를 방지하기 위해 사용하고, 0에서 시작해 슬로우 스타트가 종료될 때까지 요청의 수를 선형적으로 증가시킴
  - slow start를 사용하지 않으려면 duration을 0으로 설정하면 된다.
  - **routing 알고리즘**의 경우
    - 최소 미해결 요청 : 기본적으로 가장 사용량이 적은 인스턴스가 다음 요청을 수신할 인스턴스가 된다. 수신되는 요청의 복잡성이 다양하고 등록된 대상의 처리 능력이 다를 경우 사용. ***최소 미해결 요청은 Slow start 모드에서 사용 불가능***
    - 라운드 로빈: 사용 가능한 요청의 수에 관계없이 차례로 요청을 받는다.
    - Flow Hash: NLB의 경우 "프로토콜의 해시, 소스 대상 IP 주소, 소스 대상 포트 및 TCP 시퀀스 번호"를 기반으로 대상이 선택되는 알고리즘. 해시 번호 덕분에 각 TCP 및 UDP 연결은 연결이 지속되는 동안 단일 대상으로 라우팅되며, NLB의 스티키 세션과 동일


## ALB Rules - Deep Dive
**정리**

- ALB는 리스너 규칙이 있음
  - ALB는 가장 마지막으로 수행되는 Default 규칙을 기준으로 순서(Priority)대로 처리된다.
  - 1 개의 Default 규칙 또는 여러 개의 규칙을 가질 수 있고, 각 규칙은 특정 Target을 가진다.
  - Target은 특정 대상 그룹으로 전달하거나 다른 특정 URL로 리디렉션 하거나 고정 response를 보낼 수 있음
  - host header, HTTP request method, path pattern, source ip, http-header, query-string 등의 조건을 이용해 다양한 대상으로의 복잡한 라우팅을 만들 수 있게 해준다.
  - 단일 규칙에서 대상으로서 여러 대상 그룹을 가질 수 있다.
    - 하나의 규칙 내에서 각 대상 그룹에 대한 가중치를 지정할 수 있다.
    - 가중치를 통해 블루-그린 등의 유사한 배포 방식으로 대상 그룹을 교체할 수 있다. v1으로 지정된 대상을 v2로 지정된 대상의 가중치를 사용해 트래픽을 제어할 수 있음

## [SAA/DVA] Auto Scaling Groups (ASG) Overview
**정리**

- 웹 사이트나 응용 프로그램은 시간이 지남에 따라 웹 사이트를 방문하는 사용자가 많아져 부하가 늘거나 줄 수 있다. 가변적인 부하에 맞춰 서버를 빠르게 생성하는 방법이 Auto Scaling Group이다.
- ASG는 EC2 인스턴스를 확장 및 축소할 수 있다. 이를 Scale out/in 이라고 한다.
- ASG는 Minimum capacity, Maximum capacity, Desired capacity 등의 매개변수를 정의해 EC2의 개수를 조정할 수 있다.
- ASG는 로드 밸런서와 결합하는 경우 ASG에 속해 있는 모든 EC2 인스턴스가 로드 밸런서와 연결된다.
- ASG에서 Health Check를 진행해 하나의 인스턴스가 Unhealthy 상태가 되면 해당 인스턴스가 종료되고 대신에 새로운 EC2 인스턴스가 생성된다.
  - 또한 ELB는 EC2의 상태를 health check를 사용해 확인하고 해당 상태를 ASG에 전달할 수 있다. 로드밸런서의 판단에 따라 ASG가 해당 EC2 인스턴스를 종료할 수도 있다.
- ASG에 인스턴스가 추가되면 ELB도 트래픽을 해당 인스턴스에 보내고 부하를 분산 시킬 것이므로, ASG와 ELB를 같이 사용하는 것은 좋은 조합이다.
- ASG는 Launch templates를 기반으로 EC2 인스턴스를 시작하게 된다.
  - Launch template는 ASG 내에서 EC2 인스턴스를 시작하는 AMI, Instance type, Userdata, EBS 볼륨, 보안 그룹, SSH 키페어, IAM 역할, 네트워크 및 서브넷 정보, 로드 밸런서 정보 등이 포함된다.
- ASG에는 우리가 정의해야할 스케일링 정책이 있다.
  - CloudWatch 알람을 기반으로 ASG의 인스턴스를 확장 및 축소할 수 있다.
  - 예를 들어 평균 CPU와 같은 메트릭을 기반으로 알람을 생성하고 트리거를 발생해 ASG에서 스케일링 하게 된다.
  - 알람 기반의 Scail in/out 정책을 생성해 인스턴스를 증가 또는 감소할 수 있다.


## [SAA/DVA] Auto Scaling Groups - Scaling Policies
**정리**

- ASG에는 여러 스케일링 정책이 있다.
  - 동적 스케일링
    - 트래픽의 변화에 따라 ASG의 용량을 조정하는 정책
    - Target tracking scailing
      - 특정 메트릭에 대한 목표 값을 정의해 해당 목표 값을 유지하도록 하는 정책
      - 예를 들어 CPUUtilization을 40%로 지정했다면 40%를 초과했다면 확장 다시 40%를 유지한다면 축소해 메트릭 기준으로 유지하도록 하는 정책
    - Step Scaling (단계별 조정)
      - 특정 지표를 기준으로 알람을 생성하고 해당 알람의 임계값을 넘어서면 특정 인스턴스 개수로 확장하는 정책
      - 예를 들어 CPUUtilization 50%를 기준으로 10개로 확장, CPUUtilization 65%를 기준으로 20개로 확장 이런 방식으로 확장이 가능하다.
    - Simple Scaling (단순 조정)
      - 특정 지표를 기준으로 상한, 하한을 정해놓고 해당 메트릭 범위 내에 있을 시 용량을 유지하지만 상한을 넘거나 하한을 넘으면 용량 조정을 하는 정책
  - scheduled scaling(예약된 스케일링)
    - 운영자가 알고 있는 사용 패턴을 기반으로 스케일링을 예측하는 경우
    - 예를 들어 매주 금요일 오후 5시에 사용자가 발생하면 해당 시간에 맞춰 미리 최소 용량을 늘릴 수 있다.
  - predictive scaling(예측 스케일링)
    - 과거 로드 데이터를 분석한 다음 예측을 생성하고 예측을 기반으로 스케줄링 작업을 수행한다.
- 스케일링 하기에 좋은 메트릭은 불분명하지만 대표적으로는 아래와 같다.
  - CPUUtilization: 모든 인스턴스의 평균 CPU 사용률을 확인하고 이 값이 높아지면 인스턴스가 더 많이 사용된다는 의미이므로 이를 기반으로 스케일링하는 것이 좋다.
  - RequestCountPerTarget: 응용 프로그램에 특화된 메트릭이다. 예를들어 3개의 인스턴스가 있는 ASG가 있고 ALB가 해당 Target으로 각각 3개의 요청을 분산할때 이 값은 3이 된다. 인스턴스가 평균적으로 3개의 요청을 처리 대기 중이기 때문
  - ASGAverageNetworkIn, ASGAverageNetworkOut: 응용 프로그램이 네트워크에 제한되어 있고 업로드 및 다운로드가 많은 경우 인스턴스에 대한 In/Out 네트워크 바이트 수를 기준으로 스케일을 조정할 수 있다.
  - 사용자 지정 메트릭: CloudWatch에서 설정하는 사용자 지정 메트릭 중 하나를 사용할 수 있어 응용 프로그램 별로 설정하고 이를 기반으로 스케일링 정책을 설정할 수 있다.
- 스케일링 쿨다운
  - 인스턴스를 추가하거나 제거하면 항상 쿨다운 기간에 들어가는데, 그 동안 ASG은 추가로 인스턴스를 시작하거나 종료하지 않는다. Default 값은 300초이다.
  - 메트릭이 안정화되고 새로운 인스턴스에 의해 메트릭이 어떻게 변화되는지 확인하기 위함이다. 
  - 인스턴스의 구성 시간을 줄이기 위해 준비된 AMI를 사용하는 것이 좋다. 인스턴스가 즉시 활성화 돼 요청에 빠르게 응답할 수 있다. 활성화가 빨리되면 쿨다운 기간을 줄일 수 있고 ASG의 동적 스케일링을 극대화할 수 있다.
  - ASG에 대한 Detailed Monitoring을 활성화해 메트릭을 1분마다 얻고 메트릭이 빠르게 업데이트 되도록 확인하는 것도 스케일링을 극대화하는 방법 중 하나이다.

## **ASG for SysOps**
**정리**

- ASG에 속해있는 인스턴스에 대한 라이프사이클 훅이 있다. 인스턴스를 시작하거나 종료할 때 실행되는 것이다.
  - Pending
    - 기본적으로 인스턴스를 생성하면 Pending 상태에서 InService 상태로 즉시 전환된다. 그러나 추가적인 단계를 수행하기 위해 훅을 설정하는 것이다.
  - Pending:Wait
    - Pending 후에 훅의 일부로 Pending:Wait 상태로 이동할 수 있다. 인스턴스가 시작될 때 실행할 스크립트를 정의할 수 있다. 예를들어 인스턴스의 초기 설정을 위해 스크립트를 정의하고 수행이 완료되면 Pending:Proceed 상태로 이동하도록 한다.
  - Pending:Proceed
  - InService
  - Terminating
  - Terminating:Wait
    - 인스턴스가 종료되기 전에 작업을 수행할 수도 있다.
    - 인스턴스가 종료되기 전에 스크립트를 실행하거나, 몇 가지 로그를 가져오거나, 정보를 가져오거나, AMI를 만들거나, EBS 스냅샷을 찍을수도 있다.
  - Terminating:Proceed
  - Terminated
  - 전반적인 과정은 차례대로의 순서대로 거친다. 사용자 지정 작업은 Pending:Wait 또는 Termination:Wait로 전환될 때 수행 가능하다.
  - 라이프사이클 훅의 사용 사례는 인스턴스가 시작되고 InService로 전환되기 전에 구성하는 과정과, 로그 추출 또는 특수 Health Check를 수행하는 것이다.
  - 라이프라이클 훅은 EventBridge, SNS 및 SQS를 이용해서 스크립트를 통합할수도 있다. 예를들어 라이프사이클 이벤트가 트리거 될 때 위 대상들에 메시지가 전송되며, 특히 EventBridge로 메시지를 전송하는 경우 Lambda와의 통합을 통해 함수를 호출해 추가적인 스크립팅을 수행 가능하다.
- ASG는 Launch Templates이 있다.
  - EC2를 시작하기 위해 필요한 AMI, 인스턴스 유형, 키페어, 보안그룹 및 기타 매개변수, 태그 및 Userdata와 같은 정보를 Launch Templates를 이용해 ASG가 인스턴스를 시작하는 데 이용할 수 있다.
  - Launch Templates의 경우 편집은 할 수 없고 v1, v2 등 새로운 버전을 만들어 구성해야한다.
  - 버저닝을 이용해서 매개 변수 하위 집합을 만들어 구성 재사용 및 상속을 위해 다른 템플릿을 기반으로 런치 템플릿을 만들수도 있다.
  - Launch Templates를 이용해 온디맨드 및 스팟 인스턴스 또는 둘을 혼합해 최적화된 Fleet을 가질 수 있다.
  - T2 Unlimited Burst 기능을 사용할 수 있다.
  - Launch Configuration이라는 유사한 기능을 하는 서비스가 있지만 레거시한 기능이라 실제로 더 이상 사용되지 않는다.
- SQS & Auto Scaling
  - SQS 큐와 해당 큐에서 메시지를 처리하는 여러 EC2 인스턴스가 있을 때 SQS 큐에 있는 메시지 양에 따라 ASG를 조정할 수 있다.
  - Queue length를 기준으로하는 ApproximateNumberOfMessages 메트릭으로 예를들어 처리해야할 메시지가 너무 많은 큐 길이가 길때 알람을 발생하고 ASG에서 스케일링 정책을 트리거할 수 있다.
- ASG Health Check
  - Multi-AZ 로 구성된 2개 이상의 인스턴스는 고가용성을 보장해준다.
  - 헬스 체크는 아래가 가능하다.
  - EC2 Status
    - EC2 인스턴스의 기본 소프트웨어 및 하드웨어가 작동중인지 확인하기 위한 것으로 기본적으로 활성화되어 있다.
  - ELB Health check
    - 애플리케이션이 대상 그룹 및 ELB에 연결되어 있다면 ELB에 의해 헬스 체크 되는지 확인하기 위한 것. ELB에 대항하는 인스턴스가 건강하지 않다고 판단하면 ASG에서 인스턴스를 종료한다.
  - Custom Health Check
    - 사용자가 수동으로, CLI, SDK를 사용해 ASG에 인스턴스 헬스 체크를 자동으로 보내는 사용자 정의 헬스 체크도 있다.
    - 헬스 체크가 실패하면 인스턴스를 종료한 후에 새 인스턴스를 시작하고, Unhealthy의 인스턴스는 재부팅하지 않음
    - `set-instance-health` 명령어를 사용해 사용자 정의 체크를 할 수 있다.
  - `terminate-instance-in-auto-scaling-group`과 같이 지정된 인스턴스 종료를 요청하는 명령어도 있다.

## **CloudWatch for ASG**
## **Auto Scaling Overview**
**정리**

- Auto Scaling 서비스가 따로 존재한다. AWS의 모든 확장 가능한 리소스에서 사용 가능하다.
  - EC2 인스턴스를 시작하거나 종료 가능
  - Spot Fleet Request 를 통해 인스턴스를 시작하거나 종료 가능. 가격이나 용량 문제로 인스턴스를 자동으로 교체 가능
  - ECS 서비스의 원하는 수를 확장/축소 가능
  - DynamoDB 테이블에서 테이블이나 글로벌 보조 인덱스에 WCU나 RCU 조정
  - Aurora에서 Dynamic Read Replica Auto Scaling을 위해 사용 가능
  - Scaling Plans
    - 동적 스케일링을 포함한 여러 스케일링 옵션 제공
    - 동적 스케일링
      - 동적 스케일링은 시간에 따라 메트릭 기준으로 용량을 조정하는 것, 동적 스케일링하지 않으면 시간이 지남에도 동일한 용량 유지
      - 예를들어 CPUUtilization의 경우 가용성 최적화하기 위해 40%를 목표로 설정, 비용 최적화하기 위해 70%를 목표로 설정, 100%에 가까워질수록 스케일링은 비효율적이고 성능 병목 지점에 도달한다.
      - 자체 메트릭 또는 자체 Target의 값을 선택할 수도 있으나, AWS에서는 Utilization을 권장함.
      - Scail in 비활성화 및 ASG의 쿨다운 기간과 워밍업 시간 지정이 옵션으로 있음.
    - 예측 스케일링
      - AWS에서 제공하는 머신러닝 알고리즘을 사용해 과거 로드를 분석하고 예측을 기반으로 자동으로 스케줄링 작업이 수행됨
    

## **[SAA/DVA] Beanstalk Overview**
**정리**

- Beanstalk는 단일 서비스로 개발자 중심의 애플리케이션을 배포하는데 유용함
- 왜? 개발자는 인프라를 관리하는 지식이 부족하고, 배포할 애플리케이션이 동일한 아키텍쳐를 따르는 경우 매번 재생성할 수 없기 때문
- 단일 인터페이스에서 EC2, ASG, ELB, RDS와 같은 모든 구성 요소를 자동으로 배포하고 재사용하는 관리형 서비스를 제공함. 그래서 개발자는 코드 자체만 신경쓰면 된다.
- Beanstalk의 간단한 기능
  - 용량 프로비저닝
  - 로드 밸런서의 모든 구성
  - 스케일링
  - 응용 프로그램 상태 모니터링
  - 인스턴스 구성
- Beanstalk는 아래와 같은 구성요소
  - 애플리케이션
  - 애플리케이션의 버전
    - 간단히 말해 코드의 버전 관리를 하는 것으로 생각하면 됨
    - v1, v2, v3 등이 될 수 있다.
  - 환경 (Environment)
    - 환경은 특정 응용 프로그램 버전을 실행하는 리소스의 모음
    - 한 번에 한 환경에서만 응용 프로그램 버전을 가질 수 있으며, v1에서 v2로 응용 프로그램 버전을 업데이트할 수 있다.
    - Tier: Beanstalk 에는 `Web server Tier` 와 `Worker Tier` 두 가지가 있음
    - Beanstalk에서 dev, test, prod와 같이 여러 환경을 만들 수 있다.
- 전체적인 프로세스는 아래와 같지만 Manage Environment하는 과정에서 새 버전을 업데이트해서 새 버전으로 다시 배포할 수 있다.
  1. 응용 프로그램 생성 (Create Application)
  2. 새 버전 업로드 (Upload Version)
  3.  환경 시작 (Launch Environment)
  4.  환경 관리 (Manage Environment)
- Beanstalk는 Go, Java SE, PHP, Python 등등 많은 프로그래밍 언어를 지원함.
- Web Server Tier와 Worker Tier
  - Web Server Tier는 로드 밸런서가 트래픽을 보내는 여러 EC2 인스턴스를 포함하는 ASG에 트래픽을 보내는 전통적인 아키텍처
  - Worker Tier는 클라이언트가 직접 EC2 인스턴스에 액세스 하지 않고, SQS Queue를 사용해 메시지를 보내고 EC2 인스턴스는 Queue에서 메시지를 Pull한다.
    - SQS 메시지에 따라 Worker 인스턴스가 스케일링된다.
  - Web Server Tier에서 일부 메시지를 Worker Tier의 SQS로 보내 두 환경을 함께 사용할 수도 있다.
- Beanstalk는 두 가지 배포 모드가 있다.
  - 단일 인스턴스 (Single-instance environments)
    - 개발 목적에 적합하다.
    - Elastic IP가 있는 하나의 EC2 인스턴스와 선택적으로 RDS 데이터베이스도 함께 구성 가능하다.
  - 로드밸런서 사용 고가용성 모드 (Load-balanced environments)
    - 운영 목적에 적합하다.
    - 운영 환경에서는 Beanstalk를 확장하고자 한다면 로드 밸런서를 사용해 여러 EC2 인스턴스에 부하를 분산하고 이를 ASG로 관리하며 여러 가용 영역을 사용해 고가용성을 확보해야한다.
    - RDS 데이터베이스는 Multi-AZ로 구성 가능하다.
  - **시험에서 알아야할 점은 Beanstalk의 배포 속도가 느리다면 AMI로 Golden Image를 미리 구축해두는 것이 좋다.**

## **[DVA] CloudFormation - Overview **
**정리**

- CloudFormation은 AWS 인프라의 모든 리소스에 대해 코드만을 사용해 개략적으로 설명하는 방법이다.
- CloudFormation Templates에서는 원하는 모든 것이 존재하고 서로 연결되어야 한다고 선언하는 것.
- 자동으로 지정한 구성과 정확한 순서로 리소스들을 생성할 수 있고, 콘솔에서 구성하거나 수동으로 작업할 필요 없이 모든 리소스가 CloudFormation을 통해 자동으로 프로비저닝 된다.
- CloudFormation Designer에서는 템플릿에서 작성한 리소스가 다이어그램으로 보여진다.
- CloudFormation을 사용하는 이유
  - IaC 측면
    - 인프라에 대한 모든 변경은 코드 변경을 통해 검토된다.
    - CloudFormation Code를 Git과 같은 SVC를 이용해서 관리할 수 있다.
    - 콘솔 및 CLI 등 수동으로 생성된 리소스가 없으며 수동으로 생성하지 않아도 관리가 뛰어나다.
  - 비용 측면
    - 스택 내 모든 리소스가 동일한 태그가 지정되므로 CloudFormation 스택이 비용을 얼마나 사용하는지 쉽게 확인 가능하다.
    - CloudFormation Templates를 사용하면 리소스 비용을 쉽게 추정할 수 있다.
    - 개발 환경에 템플릿을 17:00에 자동으로 삭제하고 20:00에 다시 생성하는 등 스케줄링을 통해 절약을 할 수 있다.
  - 생산성 측면
    - 인프라를 실시간으로 생성하고 다시 완전히 삭제할 수 있다. 온프레미스와는 다르게 클라우드의 전체적인 능력을 활용하는 것으로 사용한 만큼만 비용을 지불하면 된다.
  - 분리 고려사항 측면
    - VPC Stack, Network Stack, App Stack 등과 같이 여러 애플리케이션 및 여러 레이어에 대한 많은 CloudFormation Stack을 만들어 유기적으로 사용 가능하다.
  - 재사용 측면
    - 웹 및 문서에 있는 기존 템플릿을 활용해 빠르게 자신의 템플릿을 작성할 수 있다.
- CloudFormation 작동 방식
  - 템플릿을 반드시 S3에 업로드하여 CloudFormation에서 참조한다.
    - 템플릿을 업데이트하려면 새로운 버전의 템플릿을 S3에 다시 업로드하여 스택을 업데이트하는 방법밖에 없다.
  - CloudFormation에서 해당 템플릿을 참조해 스택이 생성된다.
    - 스택은 AWS 리소스로 구성되어 있고, AWS에서 생성할 수 있는 모든 종류의 리소스이다.
  - 스택은 리소스를 생성한다.
- CloudFormation 템플릿 배포 방법
  - 수동 방법
    - 전체 프로세스를 확인하기 위한 학습 목적으로 이 방법을 사용한다.
    - CloudFormation 디자이너나 VSCode같은 Code Editor에서 템플릿을 편집하고 콘솔을 사용해 매개변수를 입력할 수 있다.
  - 자동 방법
    - 인프라를 완전히 자동화하려는 경우 권장되는 방법이다.
    - Yaml 파일로 템플릿을 편집하고 CLI 또는 CD 도구를 사용해 템플릿을 배포하여 리소스를 배포할수 있다.
- CloudFormation Templates의 기본 구성 요소
  - AWSTemplateFormatVersion: 템플릿을 읽는 방법을 정의하는 버전이며, AWS 내부 용도로 사용한다. 예:"2010-09-09"
  - Description: 템플릿에 대한 주석
  - Resource(필수 요소): 템플릿에서 선언된 모든 AWS 리소스를 정의한다.
  - Parameter: 템플릿에 동적으로 입력 값을 주는 것.
  - Mappings: 템플릿의 정적 변수, 파라미터와는 다르다.
  - Outputs: 템플릿에서 어떤 항목들이 생성되었는지에 대한 출력
  - Conditions: 리소스 생성을 수행하기 위한 조건
- Template Helper
  - Reference
  - Functions

## **[DVA] YAML Crash Course**
**정리**

- YAML은 JSON과 비슷한 키-값 쌍을 사용하는 문서 형식이다.
- CloudFormation 템플릿을 작성할 때 가독성과 쉽게 구성할 수 있는 측면에서 YAML을 사용하고 있다.
- 들여쓰기 된 여러 키-값 쌍이 있는데, 이를 YAML에서는 Nested Object라고 한다.
- 배열을 지원하며 `-` 기호를 이용해 여러 개의 배열을 나타낸다.
- 다중 행 문자열을 `|` 기호를 이용해 지원한다.
- 주석을 `#` 기호를 이용해 지원한다.

## **[DVA] CloudFormation - Resources**
**정리**

- Resources는 CloudFormation 템플릿의 핵심이며 전체 템플릿에서 유일하게 필수인 섹션이다.
- 여러 AWS 구성 요소를 나타내며 선언되고 서로 참조할 수 있으며, AWS 내부에서 자원의 생성, 업데이트 및 삭제를 우리 대신 처리해준다.
- Resources의 Type은  `service-provider::service-name::data-type-name` 의 형식으로 되어 있으며, 예를 들어 EC2 인스턴스의 경우 `AWS::EC2::Instance` 로 표기한다.
- Properties의 경우 key-value 쌍의 목록이며, 여러 개의 Properties를 지정할 수 있고 User guide 페이지를 확인하면 여러 항목을 어떻게 사용하는지 확인 가능하다.
- Resource FAQ
  - "동적인 수의 리소스를 생성할 수 있는지?": CloudFormation Macros와 Transform을 사용하면 가능하다. *강의 범위에 포함되지 않는다.*
  - "모든 AWS 서비스가 지원되는 지?": 신규 서비스를 제외하고 거의 모든 서비스가 CloudFormation을 지원하며, CloudFormation Custom Resources를 사용하면 지원되지 않는 서비스를 처리할 수 있다.

## **[DVA] CloudFormation - Parameters**
**정리**

- Parameter는 템플릿에 인풋을 제공하는 방법이다. 사용자로 하여금 인풋을 매개 변수를 이용해 입력하고, 결과적으로 여러 사람이 여러 매개 변수를 제공할 수 있도록 재사용할 수 있는 방법이다.
- 예를 들어 SecurityGroupDescription 매개 변수를 설정했다면 해당 매개 변수를 이용해 보안 그룹의 설명을 설정할 수 있다.
- 결과적으로 Parameter는 미래에 변경될 가능성이 있는 항목을 만드는 것이 좋다. 왜? 해당 값을 업데이트하려면 템플릿을 다시 업로드할 필요 없이 매개 변수만 수정하여 업데이트 하면 되기 때문. 또한 미리 결정할 수 없다면 매개 변수로 만들어야 함.
- Parameter type 은 다양하다. String, Number, CommaDelimitedList, List, AWS-Specific Parameter, SSM Parameter, Description, ConstraintDescription(제약 조건), Min/MaxLength, Min/MaxValue, Default, AllowedValues(array), AllowedPattern(regex), NoEcho(Boolean) 등이 있다.
- 모든 것을 기억할 필요 없고, 매개 변수는 단순한 문자열이 아닌것만 알아두면 된다.
- 파라미터는 제약 조건과 유효성 검사를 가질 수 있어서 안전하게 사용 가능하다.
- 예시
  - InstanceType이라는 매개 변수가 있다고 했을 때 AllowedValues로 매개 변수를 제공하게 되면 해당 매개 변수 리스트에 있는 값 중 하나만 선택할 수 있다. 선택권은 주어지지만 변수의 값을 제어할수는 없다.
  - DBPassword라는 매개 변수가 있을 때 NoEcho 매개 변수를 사용하면 DB에 대한 비밀번호를 어디에서도 표시되지 않도록 NoEcho: true 로 설정해 로그에서 제거할 수 있다.
- 파라미터 사용
  - Fn::Ref 또는 !Ref 를 사용해 매개 변수를 참조하고 템플릿의 어디에서나 사용할 수 있다.
  - 이 함수는 매개 변수뿐만 아니라 템플릿 내의 다른 요소를 참조하는 데 사용할 수도 있다.
  - 예를들어 `!Ref SecurityFroupDescription` 을 이용해서 설명을 String의 형태로 불러오거나, `!Ref SSHSecurityGroup` 를 이용해서 설정되어 있는 SecurityGroup 리소스의 리스트를 그대로 다른 SecurityGroup에서 참조하게 할 수도 있다.
  - 그래서 매개 변수를 참조하는 데 리소스가 매개 변수와 동일한 이름을 가지지 않도록 주의해야 한다.
- Pseudo Parameter
  - AWS는 모든 CloudFormation 템플릿에서 따로 매개변수를 생성하지 않더라도 언제든지 사용할 수 있는 Parameter가 정의되어 있다.
  - AWS::AccountId
    - 실제 계정 ID를 자동으로 확인할 수 있다.
  - AWS::Region
    - 템플릿이 위치한 리전 값
  - AWS::StackId
    - 스택 ID
  - AWS::StackName
    - 스택 이름
  - AWS::NotificationARNs
    - 알람 ARN 값
  - AWS::NoValue
    - 아무 값도 리턴하지 않는 것

## **[DVA] CloudFormation - Mappings**
**정리**

- Mappings는 Templates 내에서 고정된 변수이며, 다른 환경 간에 차이를 두고 싶을 때 매우 편리하게 사용된다.
- 예를들어 dev, prod에 따라 다른 값을 제공하거나 AWS Region이나 AMI 유형과 같이 Region에 따라 다른 값을 제공하고 싶을 때 유용하다.
- Mappings는 미리 모든 값을 알고 있고 Region, Availability Zone, AWS 계정, 환경(Dev, Prod)과 같은 변수에서 유도할 수 있는 경우 좋다.
- 매핑 값에 액세스하려면 !FindInMap 함수를 사용하면 된다. `!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]`


## **[DVA] CloudFormation - Outputs & Exports**
**정리**

- Outputs는 선택적으로 특정 값을 선언해서 출력하는 값이고, Export하게 되면 Console이나 CLI를 사용해서 output의 값을 볼 수 있다.
- 예를들어 네트워크 스택을 정의하고 VPC ID, Subnet ID를 출력해 다른 스택에서 재사용하는 경우 Outputs이 매우 유용하다.
- 또한 다른 Stack에서 해당 Output 값을 참조할 수 있다.
  - Fn::ImportValue 함수를 이용하면 다른 스택에서 내보낸 값을 가져올 수 있다.
  - **중요한 사항 중 하나는 Export와 ImportValue를 통해 스택 간 연결을 한 경우 ImportValue로 참조하지 않을 때까지 Export한 스택을 삭제할 수 없다.**


## **[DVA] CloudFormation - Conditions**
**정리**

- Condition은 특정 조건에 기반하여 리소스 또는 Output의 생성을 제어하는 데 사용된다.
- 주로 Environment(dev, prod), AWS Region, Parameter의 값 등으로 조건을 만드는 것이 흔하다.
- 각 Condition은 서로를 참조하고 Parameters나 Mappings를 참조할 수 있다.
- Conditions는 And, Equals, If, Not, Or과 같은 모든 함수를 사용할 수 있다.
- 조건은 리소스 뿐만 아니라 Outputs에도 적용할 수 있다.


## **[DVA] CloudFormation - Intrinsic Functions**
**정리**

- Intrinsic Functions
  - 무조건 알아야하는 함수
    - Ref
      - Parameter에 대한 값 또는 EC2 인스턴스와 같은 생성된 리소스의 물리적 ID를 반환하는 등에 사용된다. 
      - !Ref 이렇게 사용한다.
    - Fn::GetAtt
      - 템플릿에서 생성한 모든 리소스에 연결되며, 이 함수는 속성을 가져오는 데 사용된다.
      - 예를 들어 다른 리소스에 있는 항목에 대한 값을 !GetAtt 를 이용해서 불러올 수 있다.
    - Fn::FindInMap
      - 특정 맵에서 특정 키의 값을 가져오는 데 사용됨. 주로 Mappings의 값을 가져오는 데 사용된다.
    - Fn::ImportValue
      - 주로 다른 스택에서 Export 한 값을 가져오는 데 사용된다.
    - Condition Functions(Fn::If, Fn::Not, Fn::Equals etc...)
    - Fn::Base64
      - 문자열을 Base64로 변환하는 데 사용되며, 주로 EC2 인스턴스의 Userdata에 데이터를 전달할 때 사용된다.
  - 일반
    - Fn::Join
    - Fn::Sub
    - Fn::ForEach
    - Fn::ToJsonString

## **[DVA] CloudFormation - Rollbacks**
**정리**

- 스택을 생성을 하는 과정에서 생성이 실패하면 두 가지 옵션이 있다.
  - (Default) 모든 리소스가 롤백되어 삭제된다.
    - 생성 로그를 확인해 실패 이유를 확인할 수는 있지만 리소스를 직접 확인할수는 없다.
  - 롤백을 비활성화하기 (Preserve successfully provisioned resources)
    - 많은 리소스 중 하나에 스택 생성 중 발생한 문제를 해결하고자 하여 롤백을 비활성화 할 수 있다. 이러면 리소스가 유지된다.
- 스택을 업데이트 하는 과정에서 실패한 경우
  - (Default) 자동으로 마지막에 수행중인 상태로 돌아간다. 다시 말해 새롭게 업데이트로 생성된 모든 리소스들이 삭제된다.
  - 또한 로그를 확인해 오류 메시지를 확인할 수 있다.
- 롤백 자체가 실패하는 경우도 있다.
  - 이는 스택에 문제가 있으며, 수동으로 변경된 리소스가 있을 가능성이 높다.
  - 이 경우 수동으로 리소스를 수정하고 콘솔이나 API를 이용해 ContinueUpdateRollback을 호출해 CloudFormation에게 다시 Rollback을 시도하라고 해야한다.
- Preserve successfully provisioned resources를 설정하면 스택을 롤백할 때 일부가 남아있어 필요에 따라 문제를 해결할 수 있다.(Default의 경우 모든 리소스가 삭제된다) 그러나, 삭제되지 않은 잔여 리소스를 제거하려면 스택을 삭제해야 한다.

## **[DVA] CloudFormation - Service Role**
**정리**

- CloudFormation은 IAM 기반의 서비스 역할을 생성해 실제로 사용자를 대신해 스택 리소스를 생성 및 업데이트, 삭제할 수 있다.
- 예를 들어 사용자는 템플릿을 생성할 수 있는 CloudFormation에 대한 모든 권한과 PassRole이 있을 때 사용자가 PassRole을 이용해서 역할을 전달할 수 있기 때문에 해당 역할에 버킷을 생성, 업데이트 및 삭제할 수 있는 권한이 있다면 이 서비스 역할을 사용해 S3 버킷을 생성할 수 있다.
-  보안을 위해서는 최소 권한 원칙을 준수하고 사용자에게 스택 리소스를 생성할 수 있는 모든 권한을 부여하기 보다 CloudFormation에서 서비스 Role을 호출할 수 있는 권한만 부여하고, 사용자에게는 iam:PassRole 권한을 부여하면 된다.

## **[DVA] CloudFormation - Capabilities**
**정리**

- CAPABILITY_NAMED_IAM
  - CloudFormation 템플릿이 IAM 리소스를 생성하거나 업데이트할 때 CloudFormation에 부여해야하는 기능.
  - IAM 리소스에 사용자 지정 이름으로 설정한 경우 NAMED_IAM을 사용하면 된다.
- CAPABILITY_IAM
  - CloudFormation 템플릿이 IAM 리소스를 생성하거나 업데이트할 때 CloudFormation에 부여해야하는 기능.
  - IAM 리소스에 사용자 지정 이름으로 설정한 경우가 아닌 경우 사용하면 된다.
- 둘다 CloudFormation이 IAM 리소스를 생성할 것임을 명시적으로 인식하기 위해 사용한다.
- CAPABILITY_AUTO_EXPAND
  - CloudFormation 템플릿이 Macros나 Nested 스택을 포함할 때 사용된다.
  - 템플릿이 배포되기 전에 변경될 수 있음을 알 수 있다.
- 결과적으로 위 항목들은 상황에 맞게끔 필수적으로 넣어줘야하는 매개변수 같은 것으로 이해하면 되고, 없으면 스택 생성 시 또는 업데이트할 때 충돌이 발생한다.
- InsufficientCapabilitiesException
  - 템플릿을 시작할 때 CloudFormation 템플릿이 Capabilities를 요청했지만 사용자가 이를 인증하지 않았다는 것을 의미한다.
  - 템플릿을 다시 만들고, 업로드 하고, Capabilities를 꼭 넣어줘야한다.
- AWS 콘솔에서는 체크박스로 나타나고, CLI나 SDK의 경우 API 호출의 추가 매개변수로 제공해줘야 한다.

## **[DVA] CloudFormation - Deletion Policy**
**정리**


- DeletionPolicy는 템플릿에서 리소스에 적용할 수 있는 설정으로 템플릿을 삭제할 때 리소스를 보존하고 백업하는 방법으로 사용된다.
- 기본적으로는 템플릿을 삭제하면 내부의 모든 리소스가 삭제 되지만 DeletionPolicy를 설정해주면 삭제되지 않는다.
- 옵션은 아래와 같다.
  - DeletionPolicy: 없음
    - DeletionPolicy가 Resource에 따로 지정되어 있지 않다면 리소스를 삭제한다는 이야기이다.
  - DeletionPolicy: Retain
    - Retain으로 지정하는 경우 리소스를 보존한다는 의미다.
  - DeletionPolicy: Snapshot
    - EBS 볼륨, ElastiCache 클러스터, ElastiCache ReplicationGroup, RDS DBInstance, DB 클러스터, Redshift, Neptune, DocumentDB 의 경우 Snapshot 옵션을 지원한다.
    - Snapshot의 경우 리소스를 삭제하기 이전에 마지막으로 스냅샷을 생성하고 리소스를 삭제한다.

## **[DVA] CloudFormation - Stack Policy**
**정리**

- Stack Policy는 전체 스택 또는 일부 스택을 업데이트로부터 보호할 경우 사용하면 유용하다.
- Stack Policy는 JSON 문서로 스택 업데이트 중에 특정 리소스에서 허용되는 업데이트 작업을 정의한다.
- Stack Policy를 설정하게 되면 기본적으로 모든 리소스가 보호되며 업데이트를 허용하려는 리소스에 대해 명시적으로 "Allow"가 필요하다.

## **[DVA] CloudFormation - Termination Protection**
**정리**

- Termination Protection을 사용하면 스택이 실수로 삭제되는 것을 방지할 수 있고, 비활성화해야 스택을 삭제할 수 있다.

## **[DVA] CloudFormation - Custom Resources**
**정리**

- CloudFormation에서 지원하지 않거나 CloudFormation 외부에서 사용자 정의 프로비저닝 로직을 정의하려면 사용자 정의 리소스가 필요하다.
- 온프렘 리소스, Third-part 리소스, CloudFormation 스택의 생성, 업데이트 및 삭제 단계에서 Lambda 함수를 통해 사용자 지정 스크립트를 실행하려는 경우가 예다.
- 시험에는 Lambda 함수를 실행해 S3 버킷을 삭제하기 전에 비우는 Custom Resource로 구성 된 스크립트가 자주 등장한다.
- `Type: Custom::MyCustomResourceTypeName` 으로 정의하면 된다.
- 만약 ServiceToken이 필요하다면 lambda 함수의 ARN을 기입하면 된다.

## **[DVA] CloudFormation - Dynamic References**
**정리**

- System Manager Parameter Store에 값을 저장하거나 Secrets Manager에 시크릿을 저장하고, 이 값들을 CloudFormation 템플릿에 참조할 수 있다.
- 예를 들어 Secrets Manager에서 RDS 데이터베이스 인스턴스의 마스터 암호를 저장하고 불러올 수 있다.
- CloudFormation에서 특정 값을 불러오려면 아래와 같은 Key를 사용해야한다.
  - ssm: System manager parameter store에 저장된 평문 값을 나타낸다.
  - ssm-secure: System manager parameter store에 저장된 보안 문자열을 나타낸다.
  - secretsmanager: secrets manager 서비스에 저장된 비밀 값을 나타낸다.
- 값을 불러올 때는 예를 들어 parameter store에 저장된 평문 값을 불러오고 싶다면 스택 내에서 {{resolve:ssm:parameter-name:version}} 라고 불러올 수 있다.
- Secret의 ARN을 가져오기 위해서는 Output에서 !GetAtt 함수를 이용해서 불러올 수 있다.
- 또한 GenerateSecretString를 잉요해서 직접 Secert을 생성할 수 있으며 CloudFormation 내에서 자동으로 비밀번호를 생성하고 동일하게 {{resolve}} 함수를 활용해 참조 가능하다.
- 그리고 CloudFormation 내에서 자동으로 비밀번호를 생성한 경우 SecretTargetAttachment를 이용해 Target과 Secret을 연결해야 비밀번호 Rotation이 진행되어 자동으로 업데이트 된다.

## **CloudFormation - User Data**
**정리**


- 콘솔에서 인스턴스를 생성할 때 Userdata를 작성하듯이 CloudFormation에서 UserData를 작성할 수 있다.
- UserData는 EC2 인스턴스를 정의하는 템플릿에서 Properties 밑에 작성해야 하며, 꼭 Base64 함수를 이용해 인코딩 후 전달해야 한다.
- 스크립트는 실행된 EC2 인스턴스 내에 /var/log/cloud-init-output.log 파일에도 저장되고 파일을 확인하면 전체 로그가 남아 있다.
- 파이프 기호("|")는 전체 스크립트를 사용자 데이터로 다중 문자열로 전달한다는 것을 의미한다.

## **CloudFormation - cfn-init**
**정리**


- 일반적으로 Userdata를 작성하는 데에는 문제가 있을 수 있다.
  - 인스턴스 구성이 커서 스크립트가 많아지는 경우
  - Userdata는 인스턴스 첫 시작에만 적용 돼 Userdata를 다시 적용하려면 인스턴스를 종료하고 새로 만들어야 함
  - UserData를 더 읽기 쉽게 만들려면 어떻게 해야하는가?
  - UserData 스크립트 성공 여부를 어떻게 알 수 있을까?
- 위와 같은 문제가 있어서 CloudFormation helper scripts를 사용한다. helper script는 Python 스크립트로 Amazon Linux AMI와 함께 제공되거나 yum이나 dnf를 사용해 설치 가능하다. cfn-init은 그 중 하나의 중요한 스크립트이다.
- cfn-init은 Resources 내에서 Metadata 블록에 속하는 Config 블록으로 여러 구성 요소로 되어 있다.
  - packages는 MySQL, PHP 등과 같이 미리 패키지화 된 앱 및 구성 요소를 다운로드하고 설치하는 데 사용된다.
  - sources는 파일을 다운로드하고 EC2 인스턴스에 배치하는데 사용된다.
  - files는 EC2 인스턴스에 파일을 생성하는데 사용된다.
  - commands는 일련의 명령을 실행하는 데 사용된다.
  - services는 서비스를 시작하는데 사용된다.
- cfn-init 스크립트를 사용하면 EC2 구성을 읽기 쉽게 만들 수 있다.
- 작동 과정은 이렇다.
  EC2 인스턴스는 init 데이터를 얻기위해 ClouFormation 서비스에 쿼리 전송 -> CloudFormation은 EC2 인스턴스를 시작하고 인스턴스는 cfn-init 스크립트 실행 -> init 데이터를 CloudFormation에서 직접 검색

## **CloudFormation - cfn-signal & Wait Condition**
**정리**


- cfn-signal 스크립트는 cfn-init 스크립트를 실행한 후 올바르게 구성 되었는지 여부를 알 수 있는 방법이다.
- cfn-init 스크립트가 실행된 직후 cfn-signal 스크립트를 실행하고 리소스 생성이 성공했는지 실패했는지 CloudFormation에 알려준다.
- 필수적으로 WaitCondition을 정의해야 하는데 이는 템플릿이 cfn-signal로부터 신호를 받을때까지 기다린다.
  - CreationPolicy와 Type을 WaitCondition으로 지정해주어 하나 이상의 성공 신호를 확인해 2분의 타임아웃 시간동안 스크립트가 정상적으로 수행 되었는지 확인하는 것이다.
- 정리하자면 cfn-signal 스크립트는 cfn-init 스크립트를 실행하고 실행한 결과를 INIT_STATUS 변수로 저장해 cfn-signal 스크립트에서 사용하고 CloudFormation으로 쿼리를 전송하고 WaitCondition은 cfn-signal에서 정상적인 신호를 받을 때까지 기다리는 프로세스가 될 것이다.

## **CloudFormation - cfn-signal Failures**
**정리**


- cfn-signal에서 WaitCondition이 EC2 인스턴스로부터 필요한 수의 신호를 받지 못했다는 문제가 시험에서 많이 나온다고 한다.
- 아래의 이유로 신호를 받지 못한다.
  - 사용 중인 AMI에 CloudFormation helper scripts가 설치되지 않은 경우
  - EC2 인스턴스가 인터넷에 액세스할 수 있는지
  - 특정 이유로 상태 코드가 0이 아닌 경우
- cfn-init 및 cfn-signal 명령의 출력을 확인해보면 원인을 찾을 수 있다. 두 파일 모두 명령어들이 어떻게 실행되었는지 확인할 수 있다.
- 또한 인스턴스에서 실제로 무슨 일이 발생했는 지 확인하려면 CloudFormation Rollback 설정을 해제해야 한다.

## **CloudFormation - Nested Stacks**
**정리**


- Nested Stack은 다른 스택 안에 있는 스택이다.
- 반복되는 패턴과 공통 구성 요소를 별도의 스택에서 분리한 다음 다른 스택에서 호출하기 위해 중첩된 스택을 사용한다.
- 중첩된 스택을 업데이트하려면 항상 상위 스택을 업데이트 해야한다.
- 중첩된 스택안에 다시 중첩된 스택을 넣을 수 있어 매우 깊게 들어갈 수 있다.
- 교차 스택이라는 개념도 있다. 교차 스택은 스택의 수명 주기가 다를 때 매우 유용하다.
- 예를 들어 VPC 스택의 일부 변수를 출력으로 내보내 Applicaion 스택으로 내보내는 것과 같이 한 스택의 출력을 다른 스택에서 사용하는 경우 편리하다.
- CAPABILITY_AUTO_EXPAND는 중첩 스택을 사용하는 스택을 생성할 때 반드시 필요하니 반드시 유의해야한다.

## **CloudFormation - Depends On**
**정리**


- DependsOn은 리소스 생성을 위한 특정 순서를 지정할 수 있다. 예를 들어 특정 리소스가 먼저 생성되어야만 다음 리소스를 생성할 수 있게 설정할 수 있다.
- 사실 Intrinsic Function을 사용하면 CloudFormation은 특정 리소스에 대해 의존적이게 만들 수 있다. 예를 들어 !Ref 나 !GetAtt 함수를 사용해 특정 리소스들을 연결한다면 의존적이다.
- DependsOn은 삭제에서도 똑같이 동작한다. 의존적인 리소스부터 의존을 받고있는 리소스로의 순서로 삭제된다.

## **CloudFormation - StackSets**
**정리**


- 스택 셋은 한 번의 작업으로 여러 계정과 Region에 걸쳐 스택을 배포할 수 있는 방법이다.
- 관리자 계정에서 스택 셋을 만들고 대상 계정은 스택 셋에서 인스턴스와 같은 자원을 생성, 적용 및 삭제하는 데만 사용하도록 할 수 있다. 업데이트 또한 동일하게 관리자 계정에서만 해주면 모든 대상 계정이 업데이트를 받게 된다.
- 하나의 스택이 생성되는 즉시 모든 계정에 스택을 자동으로 배포하도록 설정할 수도 있다.
- AWS Organization을 사용하면 관리자 계정과 대상 계정에 대한 권한 관리를 쉽게 할 수 있다. 관리자 계정이 조직 내의 모든 기능을 수행하려면 "Trusted access"를 사용하도록 설정해야 한다.
- Organization을 사용해주지 않으면 수동으로 IAM 역할을 생성해야한다.
- 보안 및 거버넌스 목적으로 Organization의 특정 구성원 계정에 스택 셋 관리를 위임할 수도 있다. 이 또한 위임된 관리자가 대상 계정에 배포할 수 있도록 "Trusted access"를 사용하도록 해야한다.

## **CloudFormation - Troubleshooting**
**정리**


- 스택이 DELETE_FAILED가 발생하면 확인해야할 사항이 있다.
  - S3 버킷과 같이 삭제 전에 반드시 비워져야하는 일부 리소스를 확인해야한다. S3 버킷을 수동으로 지우거나 Lambda 함수와 함께 Custom Resources를 사용해 S3 버킷을 비워야한다.
  - Stack 내부에 없는 인스턴스가 Stack 내부의 보안 그룹을 사용 중인 경우 보안 그룹을 삭제할 수 없다.
- UPDATE_ROLLBACK_FAILED가 발생하면 업데이트가 실패하고 롤백이 시도 되었지만 롤백도 실패했음을 의미한다.
  - CloudFormation 외부에서 변경된 리소스, 충분하지 않은 IAM 권한, 충분한 signal을 받지 못하는 Auto Scaling Group이 이유가 될 수 있다.
  - 위와 같은 경우 오류를 수동으로 수정하여 해결하고 이것이 작동하는지 확인해야 한다. 보통 이벤트 로그가 힌트를 제공해줄 것이다.
  - 모든 오류를 수정하고나면 ContinueUpdateRollback이라는 API 호출을 해야한다. 롤백이 계속 진행되고 오류가 수정된 경우 롤백이 성공할 것이다.
- 특정 리소스를 삭제하는 데 문제가 있는 경우 DeletionPolicy=Retain을 사용해 해당 리소스의 삭제를 건너뛰고 문제를 찾아볼 수 있다.
- StackSets에도 문제가 발생한다.
  - 스택 상태가 OUTDATED로 나타날 수 있다. 
    - 이 경우 템플릿에서 지정된 리소스를 생성하는 데 필요한 대상 계정의 충분한 권한이 없어서 발생하는 문제일 수 있다.
    - 템플릿이 전역 리소스를 생성하려 하지만 S3 버킷의 이름처럼 고유해야 하는 경우 리소스가 생성이 안될 수도 있다.
    - Trusted Relationship에 문제가 있을 수 있다. 대상 계정에 관리자 계정에 대한 신뢰 관계가 제대로 설정되어 있지 않을 수 있다.
  - StackSets는 동일한 스택을 여러 계정에 배포하기 때문에 권한, Quota, 리소스 이름에 따라 일부 계정에서 작동하지 않을 수 있어 꼼꼼히 고려해야 한다.

## **Lambda - Overview**
**정리**

- 람다는 인스턴스와는 다르게 프로비저닝하지 않고, 관리할 서버가 없어서 인스턴스 타입 별 메모리와 CPU 양에 제한을 받지 않는다.
- 또한 인스턴스는 보통 계속 실행되며 확장이 필요한 경우 ASG를 이용할 수 있지만 서버를 추가하고 제거하는 추가적인 작업이 수행된다. 하지만 람다는 관리할 서버가 없다. 다만 코드를 프로비저닝하고 함수를 실행한다.
- 최대 15분의 짧은 실행 시간을 가지고 있고, 시간에 제한은 있으나 꽤 긴 시간이다.
- 요청이 발생할 때 실행되며, Lambda 함수가 실행되지 않으면 요금이 청구되지 않는다.
- Lambda의 여러가지 이점
  - 가격을 책정하는 게 매우 간단하다.
    - Lambda가 수신한 요청의 수인 호출 횟수와 Lambda가 실행되었던 컴퓨터 시간인 실행 시간에 대해 요금을 지불한다.
  - 많은 종류의 서비스와 통합되어 있다.
  - 여러 가지 프로그래밍 언어를 사용할 수 있어 자유롭다.
  - CloudWatch로 모니터링하는 것이 매우 쉽다.
  - 함수 당 최대 10GB의 RAM을 프로비저닝할 수 있다.
  - 함수의 RAM을 늘리면 CPU 및 네트워크의 품질과 성능도 같이 향상된다.
- Lambda는 node.js, Python, Java, .NET Core, Golang 등등 다양한 언어를 지원한다.
- 사용자 지정 런타임 API 덕분에 거의 모든 언어를 Lambda로 작성할 수 있다. 예를 들어 Lambda에서 Rust 언어 function을 실행하려면 open source project로 사용 가능하다.
- Lambda Container Image를 지원한다. 
  - Lambda에서 자체적으로 실행되는 컨테이너 이미지는 아니며 Lambda 런타임 API를 구현해야 한다.
  - 컨테이너 이미지가 어떻게 구축되는지에 대한 몇 가지 전제 조건이 있어야 하며, 임의의 Docker 이미지를 실행하는 데는 ECS가 선호된다.
  - Lambda에서 컨테이너를 실행하라는 것을 시험에서 발견하면 해당 컨테이너가 Lambda 런타임 API를 구현하지 않는 한 ECS에서 해당 컨테이너를 실행하게 된다.
- Lambda는 다양한 서비스와 통합되어 사용된다.
  - API GW는 REST API를 생성하고 Lambda 함수를 호출하는 데 사용된다.
  - Kinesis는 Lambda를 사용해 데이터를 실시간으로 변환한다.
  - DynamoDB는 Lambda를 사용해 트리거를 생성해 DB에 무언가 발생할 때 Lambda 함수가 트리거된다.
  - S3에 파일이 생성될 때마다 트리거된다.
  - CloudFront는 Lambda@Edge를 사용한다.
  - CloudWatch 이벤트 또는 Eventbridge는 AWS 인프라에서 이벤트가 발생할 때 반응할 수 있도록 한다.
  - CloudWatch Logs는 로그를 어디서든 스트리밍할 수 있다.
  - SNS 주제에서 알림에 반응하는데 Lambda가 사용된다.
  - SQS Queue에서 메시지를 처리하는 데 사용된다.
  - Cognito는 사용자가 데이터베이스에 로그인할 때 반응하는 등의 작업에 사용된다.
- Lambda는 여러 작업에 수행된다.
  - Lambda를 이용해 썸네일 생성을 할 수 있다. S3에 이미지가 업로드 되면 S3 이벤트 알림을 통해 Lambda 함수가 트리거되고 썸네일이 생성되고, 이미지에 대한 메타데이터를 DynamoDB에 저장할 수도 있다.
  - Cron 작업에 이용된다. CloudWatch 이벤트 규칙 도는 EventBridge 규칙을 생성하고 Lambda 함수와 통합해 EC2에 Cron 작업을 할수도 있다.
- Lambda는 호출당, 시간당 비용을 지불한다.
  - 호출 당 비용은 처음 100만은 무료이고 추가 100만 요청 당 0.2$가 부과된다.
  - 시간 당 비용은 한 달을 기준으로 400,000GB/sec가 무료이고 이는 함수가 1GB의 RAM을 갖는 경우이다. 128MB의 RAM을 갖는 경우 실행 시간이 3,200,000 초까지 무료이다. 그 후로는 600,000 GB/sec 당 1$가 부과된다.

## **Lambda & CloudWatch Events / EventBridge**
**정리**

- CloudWatch Events 또는 EventBridge와 Lambda를 통합할 수 있다.
- 서버리스 Cron 또는 Rate 기반 EventBridge Rule을 사용하는 방법
  - 예를 들어 EventBridge Rule을 생성해 1시간마다 람다 함수가 작업을 수행하도록 트리거하는 것
- CodePipeline EventBridge Rule을 이용해서 코드 파이프라인 상태를 감지하고 상태변경 시 Lambda 함수를 호출해 작업을 수핼할 수도 있다.

## **Lambda & S3 Event Notifications**
**정리**

- S3 Event Notification는 Object가 생성, 제거, 복원, 복제가 일어날 때마다 알림을 받을 수 있는 방법이다. *.jpg와 같이 접두사 및 접미사 별로 필터링할수도 있다.
- 가장 일반적으로 S3에 업로드된 모든 이미지의 썸네일 이미지를 생성하는 것이다.
- S3에 이벤트가 발생하면 S3는 세 곳으로 보낼 수 있다.
  - SNS와 SNS 토픽에서 Fan out 패턴을 수행해 여러 SQS Queue로 보내는 방법
  - SQS Queue로 보내서 람다 함수가 해당 SQS Queue를 직접 읽도록 하는 방법
  - S3 Event Notification이 람다 함수를 직접 비동기 호출로 호출하는 방법, 그리고 이 람다 함수는 데이터로 원하는 모든 작업을 수행할 수 있고 문제가 발생할 경우 Dead Letter Queue를 설정할 수도 있다.
- S3 Event Notification의 경우 일반적으로 몇 초 안에 이벤트를 전달하지만 1분 이상 걸릴 수도 있다. 그래서 Event Notification을 놓치지 않으려면 버킷에서 버전 관리를 활성화 해야하며, 비활성화일 경우 같은 개체에 두 개의 쓰기가 동시에 발생하는 경우 Notification을 두 개가 아닌 한 개만 받을 수도 있다.
- 메타데이터를 동기화하는 패턴도 있다.
  - S3 버킷에 새 파일 이벤트가 Lambda로 전송되면 Lambda는 해당 파일을 처리해 데이터를 DynamoDB 테이블 또는 RDS 데이터베이스의 테이블에 삽입할 수도 있다.

## **Lambda Permissions - IAM Roles & Resource Policies**
**정리**

- 람다는 실행 역할이 있다. 람다 함수에 IAM 역할을 연결해야 하고, AWS 서비스 및 리소스에 액세스할 수 있는 권한이 부여된다.
- 아래는 관리형 정책이다.
  - AWSLambdaBasicExecutionRole 을 이용해서 CloudWatch에 Log를 업로드할수 있다.
  - AWSLambdaKinesisExecutionRole 를 이용해서 Kinesis에서 읽어올수 있다.
  - AWSLambdaDynamoDBExecutionRole 를 이용해서 DynamoDB 스트림에서 읽어올수 있다.
  - AWSLambdaSQSQueueExecutionRole 를 이용해서 SQS에서 읽어올수 있다.
  - AWSLambdaVPCAccessExecutionRole 를 이용해서 VPC 내부에 Lambda 함수를 배포할 수 있게 힐수있다.
  - AWSXRayDaemonWriteAccess 를 이용해서 trace data를 X-Ray에 업로드할수 있다.
- 람다 함수는 이벤트 소스 매핑을 사용해 함수를 호출할 때 실행 역할(Execution role)을 사용해서 에빈트 데이터를 읽어 온다.
- 함수 당 하나의 람다 Execution role을 만드는 것이 Best practice이다.
- Lambda 함수는 다른 서비스에서 람다 함수를 호출하는 경우 리소스 기반 정책을 사용하는데, 다른 계정이나 다른 AWS 서비스에 람다 리소스를 사용할 수 있는 권한을 부여해 함수를 호출할 수 있게 해주는 것이고, S3 버킷의 Bucket Policy와 유사하다.
- IAM 원칙에 따라 Lambda 함수에 액세스할 수 있는 경우가 있다.
  - 첫째로는 액세스를 허용하기 위해 IAM 정책이 있어야한다. 예를 들어 IAM 사용자에 전체 권한을 부여하는 경우 Lambda에 대한 관리자 권한도 있기 때문에 함수에 액세스할 수 있다.
  - 둘째로는 리소스 기반 정책이 있다. 서비스 간 액세스가 필요한 경우에 더 유용하며, 예를 들어 S3와 같은 다른 AWS 서비스가 Lambda 함수를 호출하려면 리소스 기반 정책에서 해당 서비스에 액세스 권한을 부여해야 한다.


## **Lambda Monitoring & X-Ray Tracing**
**정리**

- 람다는 로깅, 모니터링 및 Tracing을 수행할 수 있다.
- Lambda Execution Log는 CloudWatch Logs에 자동으로 저장된다. 그런데, 올바른 IAM 정책이 있는 Execution Role이 포함되어 있는 경우에만 한해서이다.
- CloudWatch 메트릭이 있다.
  - Invocation, Duration, Concurrent Execution, Error Count, Success Rate, Throttles, Async Delivery Failure 등이 있다.
  - Kinesis 또는 DynamoDB Stream 의 경우 Iterator Age라는 항목이 있는데, 스트림 읽기가 얼마나 지연되고 있는지를 의미한다.
- Lambda는 X-Ray 서비스를 이용해서 Tracing할 수 있다.
  - Lambda Configuration에서 활성화하면 되고, 활성화 하기만 하면 X-Ray 데몬이 자동으로 실행된다.
  - 그래서 코드에서 X-Ray SDK를 사용하고, IAM Execution Role에 X-Ray에 쓸수 있는 권한이 있으면 된다. AWSXRayDaemonWriteAccess라는 관리형 정책을 사용할 수도 있다.
  - SDK를 사용할 때 X-Ray와 통신하기 위해 환경 변수를 설정해야 한다.
    - X-Amzn-Trace-Id: X-Ray Tracing 헤더이다. 
    - AWS_XRAY_CONTEXT_MISSING: 기본적으로 필요한 변수이며, LOG_ERROR로 통상 설정한다.
    - AWS_XRAY_DAEMON_ADDRESS: 가장 중요한 환경 변수로서, 엑스레이 데몬의 IP와 포트가 실행되는 위치를 알려주는 데몬 주소. IP_ADDRESS:PORT의 형태로 알려준다.


## **Lambda Function Performance**
**정리**

- RAM
  - RAM은 1MB 단위로 최소 128MB에서 최대 10GB까지 확장 가능하다.
  - 람다 함수에 RAM을 추가할수록 더 많은 vCPU 크레딧을 얻을 수 있으며, vCPU를 직접 설정할 수 없어 vCPU를 늘리기 위해서는 RAM을 늘려야한다.
  - 1,792 MB RAM 까지는 1vCPU이고 그 이후로는 2vCPU를 사용하게 된다. 추가된 vCPU를 활용하기 위해서는 코드에서 멀티 스레딩을 사용하도록 해야한다.
- Timeout이 있다. 기본적으로 람다함수는 3초의 Timeout을 가지고 있으며 최대 900초(15분)까지 설정 가능하다. 15분을 넘어가는 것은 람다를 사용할 게 아니라 Fargate, ECS, EC2에 더 적합한 애플리케이션이 될 것이다.
- Execution Context
  - 람다 코드의 외부 종속성을 초기화하는 임시 런타임 환경이다.
  - 이를 사용해 데이터베이스 연결을 설정하고, HTTP 클라이언트 또는 SDK 클라이언트를 생성할 수 있다.
  - 다른 람다 함수 호출을 예상하여 일정 기간 동안 유지되며 맨 처음 호출된 함수에서 사용한 컨텍스트를 다른 호출에서 재사용해 기존의 데이터베이스 연결, DB client 등을 재사용할 수 있어 람다 함수의 속도를 높이고 성능을 향상시킬 수 있다.
  - '/tmp' 디렉터리에도 Execution Context가 포함되며, 이 디렉터리는 파일을 작성할 수 있는 공간으로 함수 실행 전반에서 사용할 수 있다.
- AWS에서 권장하는 방법 중 하나는 핸들러 외부에서 데이터 베이스 연결을 init하는 것이다. 한번만 init 하면 여러 함수 호출에서 재사용할 수 있고 함수 성능을 크게 향상 시킬 수 있다.
- 작업을 위해 대용량 파일을 다운로드해야 하거나 작업을 수행하기 위해 디스크 공간이 필요한 경우 /tmp 파일에 저장하고 함수 실행 동안 파일을 유지할 수 있다. 이를 이용해서 함수가 중지 됐다가 다시 호출 되더라도 디렉터리를 참조해 시간을 절약할 수 있다.
- 그러나 /tmp 디렉터리는 함수 실행 동안에만 일시적으로 존재하는 것이기 때문에 영구적으로 객체를 유지해야 하는 경우 여러 호출에서 지속될 수 있는 공간에 저장해야 하기 때문에 S3와 같은 공간에 저장해야 한다.
- /tmp 공간의 컨텐츠를 암호화할 수 있는 방법이 람다에는 없다. 그래서 KMS 기능을 사용해 데이터 키를 사용해 /tmp 공간의 데이터를 실제로 암호화하는 방법밖에는 없다.

## **Lambda Concurrency**
**정리**

- 람다 함수는 함수를 호출할 수록 동시 실행 수도 많아진다. 이벤트 발생 규모가 매우 크다면 최대 1000개의 람다 함수가 동시에 작업하여 처리된다.
- 람다 함수는 '예약된 동시성(Reserved Concurrency)'를 설정해 람다 함수의 수준에서 동시 실행 수를 제한할 수 있다. 예를 들어 이 람다 함수에 대해 최대 50개의 동시 실행만 가능하다고 지정하는 것과 동일하다.
- 동시성 제한을 초과하는 호출은 스로틀링(Throttling)이라고 하는 현상을 유발하며, 동기 호출과 비동기 호출에 따라 다른 동작을 하게 된다.
  - 비동기의 경우 자동으로 재시도한 후 DLQ(Dead Letter Queue)로 이동한다.
  - 동기의 경우 스로틀링되면 429 Throttle Error 가 반환된다.
- 만약 영구적으로 1000개 이상의 동시 실행이 필요한 경우 더 높은 제한을 얻기 위해 Service Quota를 이용해 제한을 늘려야 한다.
- 동시성 제한은 계정의 모든 함수 또는 CLI 또는 SDK에도 적용되며 이를 고려하지 않으면 하나의 함수가 제한을 초과하면 다른 함수들이 모두 스로틀링 될 것이다. 매우 중요한 사항이다.
- 비동기 호출과 동시성의 대해 알아보자
  - 예를들어 S3 Event Notification의 경우 S3 버킷에 파일을 업로드하면 새 파일 이벤트가 생성되어 Lambda 함수를 호출하게 된다. 동시에 많은 파일이 업로드 되면 다수의 람다 함수가 동시에 실행되며, 제한에 도달하게 되면 스로틀링될 것이다. 
  - 비동기의 경우 스로틀링 에러와 시스템 에러(429, 500 등)가 발생하면 람다는 이벤트를 내부 이벤트 큐에 반환한다. 반환된 이벤트는 람다가 최대 6시간 동안 다시 실행하려고 시도한다. 재시도 간격은 지수 형태로 증가(Exponential Backoff Retry)하여 최대 5분까지 증가한다. 
- Cold Start
  - 새 람다 함수 인스턴스를 생성할 때 코드를 로드하고 핸들러 외부의 코드를 실행하는 것이 콜드 스타트이다.
  - 이는 Init 과정에 해당하며, 초기화 코드가 크고 많은 의존성이 있으며 여러 데이터베이스에 연결하고 많은 SDK를 생성해야 한다면 많은 시간이 소요된다.
  - 결국 새 인스턴스에 의해 서비스되는 첫 번째 요청의 레이턴시가 그 뒤에 요청되는 호출보다 높아지고 사용자 경험에 영향을 미치게 된다.
  - Cold Start를 해결하려면 예약된 동시성(Provisioned Concurrency)을 사용하면 된다.
- 예약된 동시성(Provisioned Concurrency)
  - 함수가 호출되기 전에 미리 동시성을 할당하는 것을 말하며, Cold Start를 발생시키지 않고 모든 호출의 레이턴시를 줄일 수 있는 방법이다.
  - 프로비저닝된 동시성을 관리하기 위해 Application Auto Scaling을 사용해 스케줄링이나 Target utilization을 이용해서 콜드 스타트 문제를 최소화하고 준비된 람다 함수를 확보할 수 있다.

## **Lambda Monitoring - Extras**
**정리**

- 람다는 다양한 CloudWatch Metric이 있다.
  - Invocations: 함수가 호출된 횟수를 제공한다. (성공/실패 모두 포함)
  - Duration: 함수가 이벤트를 처리하는 데 소요되는 시간
  - Errors: 에러가 발생한 호출의 횟수이다.
  - Throttles: 스로틀 된 요청의 수를 나타낸다. 이는 동시성을 위한 용량이 부족했음을 의미한다.
  - DeadLetterErrors: Lambda가 dead letter queues에 이벤트를 보내지 못한 횟수이다.
  - IteratorAge: 스트림의 이벤트 소스 매핑에서 읽을 때마다 얼마나 멀리 떨어져 있는지 알 수 있다.
  - ConcurrentExecutions: 동시에 이벤트를 처리하고 있는 함수 인스턴스의 수
- 그리고 위 메트릭으로 아래와 같은 알람의 예시가 있다.
  - Invocations 메트릭을 기반으로 함수가 호출된 수를 확인한다. 만약 0이라면 함수가 호출되고 있지 않은 것이기 때문에 문제가될 수 있다.
  - Errors 메트릭을 기반으로 오류가 0보다 큰지 살펴보고 프로세스에 문제가 생겼을 때 알람을 받을 수 있다.
  - Throttles 메트릭을 기반으로 0보다 큰지 살펴보고 용량이 부족한지 확인할 수 있다.
- 람다의 로깅을 CloudWatch에서 확인할 수 있다.
  - 함수 인스턴스마다 특정 로그 스트림을 갖도록 로그 그룹이 있는 CloudWatch Logs로 항목을 보낸다.
  - 로그를 보낼 수 있도록 Execution Role에 로그 그룹을 생성하고 로그 스트림을 생성하고 로그 이벤트를 넣을 수 있는지 확인해야 한다.
  - CloudWatch Logs Insights를 사용해 쿼리를 사용한 로그 검색도 가능하다. 예를 들어 지난 100개의 오류 검색, 전체 호출 중 cold start의 비율 검색, 메모리의 100%를 사용하는 호출을 몇 개나 되는지를 확인할 수 있다.
- Lambda Insights
  - 기존 람다 함수에서 Lambda Layer로 제공되는 람다 모니터링 Extension이다. 함수를 실행하기만 해도 CloudWatch Logs 내에서 바로 Lambda Insights에 액세스 가능하다.
  - CPU Time, 메모리, 디스크, 네트워크 등의 시스템 수준 메트릭과 cold start, lambda worker shutdown 등의 진단 정보를 확인할 수 있다.
  - 위와 같은 메트릭을 JSON 파일과 같은 문서로 남기고 CloudWatch Logs에서 Lambda Insights 로그 그룹(/aws/lambda-insights)으로 전송된다.
  - 시스템 수준의 정보를 확인 가능하기 때문에 람다 함수와 관련된 문제를 매우 빠르게 격리할 수 있다.

## **[CCP/SAA/DVA] EBS Overview**
**정리**

- EBS 볼륨은 Elastic Block Store의 약자이며, 인스턴스가 실행되는 동안 인스턴스에 연결할 수 있는 네트워크 드라이브이다.
- 인스턴스가 종료된 후에도 데이터를 지속할 수 있으며, 종료되어 분리된 EBS 볼륨은 인스턴스를 다시 생성하고 이전과 동일하게 마운트하면 데이터를 다시 가져올 수 있다.
- EBS 볼륨은 io type의 경우 Multi Attach 기능을 이용해 여러 개의 인스턴스에 마운트 가능하나 보통 한 번에 하나의 인스턴스에만 마운트할 수 있다.
- EBS 볼륨은 특정 가용 영역에 바운드 되어 A zone에서 생성된 경우 B zone에 연결할 수 없지만 스냅샷을 이용해 다른 가용 영역으로 볼륨 자체를 이동할 수 있다.
- 네트워크 드라이브이기 때문에 서버에 도달하는 데 약간의 지연 시간이 있을 수 있으나, 쉽게 분리하여 다른 인스턴스에 빠르게 연결할 수 있어 장애 조치를 수행할 때 매우 편리하다.
- 볼륨이므로 미리 용량, 초당 입출력 작업 수인 IOPS 등의 기본적으로 EBS 볼륨 성능을 정의해야한다.
- 프로비저닝 용량에 대한 요금이 청구되며, 더 나은 성능이나 더 큰 용량을 원할 경우 시간이 지남에 따라 용량을 늘릴 수 있다.
- 종료 시 삭제(Delete on Termination)이라는 옵션이 있는데, 종료되는 인스턴스와 함께 볼륨을 삭제할 지 설정하는 것이다. 기본적으로 루트 EBS 볼륨은 이 설정이 활성화되어 있다.

## **[CCP/SAA/DVA] EC2 Instance Store**
**정리**

- 인스턴스 스토어의 경우 EBS와 다르게 네트워크 드라이브 형식이 아니라 물리적 서버에 연결된 하드 드라이브이다. 네트워크 대기 시간이 없어 빠른 I/O 성능을 제공한다.
- 또한 Throughput이 우수해 높은 디스크 성능을 원할 때 훌룡한 선택이 된다.
- 인스턴스 스토어가 있는 EC2 인스턴스를 중지하거나 종료하면 스토리지가 손상되며, 좋은 사용 사례는 버퍼 또는 캐시가 있거나 Scratch data 및 임시 콘텐츠가 필요한 경우 사용하기 좋다.
- 장기 저장의 경우 Instance Store 대신 EBS를 사용해야 한다.
- EC2 인스턴스의 회선 서버에 장애가 발생하는 경우 EC2 인스턴스에 연결된 하드웨어도 장애가 발생하기 때문에 큰 손실이 일어날 수 있으며, 이를 방지하기 위해 백업하고 복제하는 것은 전적으로 사용자 책임이다.
- 인스턴스 스토어에서 i3.16xlarge와 같은 타입을 확인하면 초당 330만의 IOPS를 확인 가능한데, gp2의 경우 32,000 IOPS에 해당하므로 인스턴스 스토어가 IOPS 성능이 훨씬 뛰어난 것을 알 수 있다.

## **[SAA/DVA] EBS Volume Types Deep Dive**
**정리**

- EBS는 여러가지 Type이 있다.
  - 가격과 성능의 균형을 맞출수 있는 범용 SSD 볼륨인 gp2, gp3
  - 미션 크리티컬한 저지연 및 고처리량 워크로드에 사용되는 최고 성능의 SSD 볼륨인 io1, io2
  - 자주 액세스하는 처리량 집약적인 워크로드를 위해 설계된 저비용 HDD 볼륨인 st1
  - 가장 저렴한 HDD 볼륨으로 액세스 빈도가 낮은 워크로드를 위해 설계된 sc1
- EBS는 크기, 처리량, IOPS 등 여러가지로 정의된다.
- EC2 인스턴스의 경우 gp2와 gp3 그리고 io1과 io2 만 Boot Volume으로 사용할 수 있다. Boot Volume은 루트 OS가 실행되는 위치를 말하며 Root Volume이라고 생각하면 된다.
- gp2의 경우 시험에서 중요하다.
  - gp2는 지연 시간이 짧고 비용 효율적인 스토리지로 Boot Volume, 가상 데스크톱, 개발 및 테스트 환경에 사용할 수 있다.
  - 크기는 1GB에서 16TB까지 다양하다.
  - Provisioned IOPS
  - 3,000 IOPS까지 버스트할 수 있고, 볼륨의 크기가 IOPS와 연결되어 있어 볼륨 크기를 늘리면 IOPS가 최대 16,000 IOPS까지 증가한다.
  - 쉽게 생각하면 3 IOPS 당 1 GB 라고 생각하면 되고 5,334 GB의 용량을 갖게되면 최대 IOPS인 16,000에 도달하는 것을 의미한다.
- gp3
  - gp2의 새로운 세대의 볼륨
  - 3000 IOPS와 초당 125MB의 처리량을 기본으로 제공
  - IOPS를 최대 16,000까지 그리고 처리량을 최대 초당 1,000MB까지 늘릴 수 있다.
  - IOPS와 처리량을 독립적으로 늘릴 수 있다.
- 중요하게 생각해야할 점은 gp2와 gp3가 비용 효율적이며, 낮은 레이턴시의 스토리지이고, gp3에서는 IOPS와 처리량을 독립적으로 설정할 수 있지만 gp2는 연결되어 있음
- Provisioned IOPS 볼륨 (io1, io2)
  - 스토리지 성능과 일관성에 매우 민감한 데이터베이스 워크로드가 있는 경우 Provisioned IOPS 볼륨이 유용함
  - io1의 경우 
    - 4GB ~ 16TB의 범위를 지원한다. 
    - 프로비저닝 할 수 있는 최대 IOPS는 Nitro 계열 인스턴스의 경우 64,000 그 외 인스턴스의 경우 32,000이 된다. 
    - 스토리지와 무관하게 Provisioned IOPS를 늘릴 수 있다.
  - io2 Block Express의 경우
    - 4GB ~ 16TB의 범위를 지원한다.
    - 밀리초 미만의 지연시간
    - 1GB 당 1,000IOPS의 비율로 256,000까지의 최대 IOPS를 얻을 수 있다.
    - 매우 높은 성능의 I/O 유형의 볼륨
  - io 계열의 경우 EBS Multi Attachment 기능을 지원한다.
- st1 (Throughput 최적화된 HDD)
  - 부팅 볼륨이 될 수 없다.
  - 125GB ~ 16TB 의 범위를 지원한다.
  - 빅데이터, 데이터 웨어하우징, 로그 처리에 적합
  - 최대 처리량은 초당 500MB, 최대 IOPS는 500
- sc1 (Cold HDD)
  - 액세스 빈도가 낮은 데이터 및 가장 낮은 비용이 필요할 때 사용함
  - 최대 처리량은 초당 250MB, 최대 IOPS 250
- 시험에서는 세부적으로 알 필요 없이 데이터 베이스가 필요한 경우 범용 SSD 및 Provisioned IOPS SSD, 높은 처리량과 최저 비용이 필요한 경우 st1, sc1 , 32,000 IOPS 이상이 필요하다면 io1 및 io2와 같이 Nitro 계열 EC2가 필요하다는 것만 알아두면 된다.

## **[SAA] EBS Multi Attach**
**정리**

- EBS 볼륨에는 동일한 가용 영역에 있는 여러 EC2 인스턴스에 동일한 EBS 볼륨을 연결할 수 있는 Multi Attachment 기능이 있다.
- 이 기능은 io1, io2 EBS 볼륨 제품군에서만 사용할 수 있다.
- 활성화되고 연결된 각 인스턴스에 고성능 볼륨에 대한 전체 읽기 및 쓰기 권한이 부여되며, 모든 인스턴스가 동시게 읽기/쓰기를 할 수 있다.
- 사용 사례는 Teradata를 사용하는 클러스터링된 Linux 애플리케이션의 경우나, 애플리케이션에서 동시 권한 작업을 관리해야하는 경우 애플리케이션 가용성을 높일 수 있다.
- Multi Attach 기능은 특정 가용 영역에서만 사용 가능하다. 즉, A zone에서 볼륨 생성 후 C zone의 EC2와 연결 불가능하다.
- Multi Attach는 동일 볼륨에 한해서 최대 16개의 EC2 인스턴스까지 연결 가능하다. (시험에서 나오는 내용)
- 이 기능을 사용하기 위해서는 xfs나 ext4와 같은 파일 시스템과는 달리 클러스터 인식 가능한 파일 시스템을 사용해야한다.

## **EBS Operation: Volume Resizing**
**정리**

- EBS는 볼륨 사이즈 또는 IOPS를 늘릴 수 있다.
- EBS는 볼륨 크기를 조정한 후 드라이브를 다시 파티셔닝해야 한다.인스턴스에 새 공간을 사용하도록 지시하기 전까지는 모르기 때문이다.
- 볼륨 크기를 늘리게되면 블록을 재정렬하기 위해 긴 최적화 단계에 들어갈 수 있고, 볼륨은 계속 사용 가능하다.
- 볼륨 사이즈를 줄일수는 없다. 줄이기 위해서는 더 작은 볼륨을 만들어 작은 볼륨에 데이터를 복사해야 한다.

## **EBS Operation: Snapshots**
**정리**

- EBS 스냅샷에 대해 알아보자
- EBS 볼륨은 어느 시점에나 스냅샷을 만들 수 있다.
- 스냅샷을 하기 위해 볼륨을 분리할 필요는 없지만 볼륨이 인스턴스에 연결되어 있는 경우 일관성 문제가 발생할 수 있어 볼륨을 분리하는 것이 좋다.
- AZ 또는 리전 간 스냅샷을 복사할 수 있다.
- Amazon Data Lifecycle Manager 서비스를 이용해 EBS 스냅샷의 생성, 유지 및 삭제를 자동화하는 데 사용할 수 있다.
- 빠른 스냅샷 복원 (Fast Snapshot Restore, FSR) 기능도 있다.
  - EBS 스냅샷은 기본적으로 내부적인 Amazon S3에 저장한다. 우리 계정에서는 볼 수 없지만 AWS 내부에 저장되는 방식이다.
  - 스냅샷을 EBS 볼륨으로 복원하고 특정 데이터 블록에 액세스할 때 I/O 대기 시간이 발생하게 된다. 블록을 S3에서 가져오기 때문이다.
  - 이전에는 인스턴스 내에서 dd 또는 fio 명령어를 이용해서 전체 볼륨을 읽어 모든 블록을 초기화 해 지연 시간을 해결했는데, FSR을 사용하면 스냅샷에서 전체 볼륨 초기화를 수행해 I/O 지연 없이 EBS 볼륨으로 복원한다.
  - 일반 EBS 스냅샷은 백업 후 복원 시 몇 개의 블록만 초기화되고 블록을 읽을 때마다 S3에서 가져오게 된다. 그러나 FSR을 활성화하고 초기화가 완료되면, 전체 EBS 볼륨이 최고 성능으로 바로 사용 가능한 상태가 된다.
  - FSR은 활성화하면 분 단위로 요금이 청구되어 매우 비싸다.
  - 실제로는 스냅샷을 생성하고 FSR을 활성화해 AWS가 스냅샷을 초기화 하도록한 다음 EBS 볼륨으로 복원하고 FSR을 비활성화 하는 것이다.
  - DLM (Data Lifecycle Manager)를 이용해서 스냅샷에서 직접 FSR을 활성화할 수 있다.
- EBS Snapshot Archive
  - 이 기능을 이용해 스냅샷을 아카이브 Tier라는 다른 스토리지 Tier로 옮길 수 있다.
  - 기존 대비 75% 더 저렴하다.
  - 이 경우 수동이든 자동이든 스냅샷을 이동할 수 있으며 Archive에 있는 경우 복원하는 데 24시간에서 72시간이 걸린다.
  - 급하게 복원할 필요가 없는 스냅샷을 위한 것이고, 비용을 절약하고 싶을 때 사용한다.
- EBS Snapshot Recycle bin
  - 기본적으로 스냅샷을 삭제하면 바로 삭제된다. 휴지통을 설정하면 휴지통에 삭제된 모든 스냅샷이 보관된다.
  - 1 Day에서 1 Year 까지 기간을 정할 수 있고, 지정한 기간동안 스냅샷을 복구할 수 있도록 해 실수로 삭제하는 것을 방지할 수 있다.

## **EBS Operation: Volume Migration**
**정리**

- EBS 볼륨은 특정 AZ에서만 작동하도록 잠겨있다.
- 다른 AZ나 다른 지역으로 마이그레이션 하려면 볼륨에 대한 스냅샷을 생성하고 선택적으로 다른 Region 또는 다른 AZ에 생성한 스냅샷으로 볼륨을 생성하면 된다.

## **[SAA] EBS Operation: Volume Encryption**
**정리**

- EBS 볼륨을 생성하고 암호화하면 아래와 같은 효과가 있다.
  - 볼륨 내부에 저장된 데이터가 암호화된다.
  - 인스턴스와 볼륨 간 이동 중인 모든 데이터가 암호화된다.
  - 모든 스냅샷이 암호화된다.
  - 스냅샷에서 생성된 모든 볼륨이 암호화된다.
- 암복호화는 EC2와 EBS에서 자동으로 처리되어 사용자가 신경 쓸 필요가 없고, 암호화로 인한 대기 시간은 거의 없으며 AES-256 KMS 키를 사용한다.
- 암호화되지 않은 스냅샷을 복사할 때 암호화를 활성화할 수 있다.
  - 과정은 볼륨의 스냅샷을 만들고,
  - 복사 기능을 사용해 스냅샷을 암호화하고,
  - 암호화된 스냅샷에서 새 EBS 볼륨을 생성하고,
  - 암호화된 볼륨을 원래 인스턴스에 연결한다.

## **[SAA/DVA] Amazon EFS**
**정리**

- EFS는 네트워크 파일 시스템인 관리형 NFS이다.
- 많은 EC2 인스턴스에 마운트할 수 있으며 EC2 인스턴스는 서로 다른 가용 영역에 있어도 된다.
- gp2 EBS 볼륨 비용 대비 약 3배를 소요하며 사용량에 따라 비용을 지불해 미리 용량을 프로비저닝할 필요 없다. GB 당 사용량에 따라 데이터 비용을 지불한다.
- 사용 사례는 콘텐츠 관리, 웹 서비스, 데이터 공유, 워드프레스 등이 있다.
- 내부적으로 NFS 프로토콜을 사용한다.
- 액세스 제어는 보안 그룹을 설정해야 한다.
- EFS는 Windows가 아닌 Linux 기반 AMI에만 호환된다는 점을 유의해야 한다.
- EFS에서 KMS를 이용해 내부 데이터 암호화가 가능하다.
- Linux 표준 파일 시스템인 POSIX를 사용하며 표준 파일 API를 지원한다.
- EFS는 수천 개의 동시 NFS 클라이언트와 10GB 이상의 처리량을 제공하며, PB 규모의 네트워크 파일 시스템으로 자동 확장할 수 있다.
- EFS 네트워크 파일 시스템 생성 시 성능 모드를 설정할 수 있다.
  - 범용 모드 (General Purpose Mode)
    - 웹 서버, CMS 등과 같이 지연 시간에 민감한 사용 사례에 사용된다.
  - 최대 I/O 모드 (Max I/O Mode)
    - 지연 시간이 길지만 처리량이 높고 병렬성이 높은 네트워크 파일 시스템
    - 빅 데이터 애플리케이션이나 미디어 처리가 필요한 경우 유용
- 처리량 모드 (Throughput mode)도 여러 옵션이 있다.
  - Elastic throughput (Recommend)
    - 워크로드에 따라 처리량을 자동으로 확장 및 축소할 수 있어 워크로드를 예측하기 어려울 때 사용하면 좋다.
  - Bursting throughput
    - 1 TB 기준 초당 15MB에 버스트를 더해 초당 최대 100 MB를 처리할 수 있다.
  - Provisioned throughput
    - 스토리지 크기에 관계없이 처리량을 설정하려는 경우
    - 프로비저닝된 처리량을 사용하면 1 TB 기준 초당 1GB를 사용할 수 있다.
- 스토리지 클래스도 있다.
  - 표준 Tier
    - 자주 액세스하는 파일을 위한 것
    - 수명 주기 정책을 사용해 파일을 다른 계층으로 옮길 수도 있다.
  - EFS-IA Tier
    - 드물게 액세스하는 파일을 위한 것
    - 파일을 검색할 경우 검색하는 데 드는 비용을 지불하는 계층
    - 파일을 EFS-IA에 저장하게 되면 더 낮은 비용이 지불된다.
- EFS는 Multi-AZ 또는 One Zone 옵션을 제공한다.
  - 특정 가용 영역이 다운되더라도 EFS 파일 시스템에는 영향을 미치지 않아 프로덕션 사용 사례에는 Multi-AZ로 EFS를 설정할 수 있다.
  - 개발용의 경우 EFS One Zone-IA 를 사용해 90%의 비용을 절감할 수 있다. EFS-IA Tier와 호환된다.
- 시험에서는 EFS를 사용해야하는 시나리오와 요구 사항을 충족하기 위해 EFS 네트워크 파일 시스템에서 어떤 옵션을 설정해야 하는지 물어볼 수 있다.

## **[SAA/DVA] EFS vs EBS**
**정리**

- EBS
  - EBS의 경우 io1, io2 볼륨의 Multi Attach 기능을 사용하는 경우를 제외하고 하나의 인스턴스에만 연결되지만, Multi Attach 기능은 매우 특별한 사용 사례에 해당한다.
  - EBS 볼륨은 한 AZ에 종속된다.
  - gp2 유형의 볼륨은 디스크 크기가 증가할수록 I/O가 증가하고, gp3 및 io1 유형의 볼륨은 디스크 크기와 I/O를 독립적으로 증가할 수 있다.
  - AZ 간 EBS 볼륨 마이그레이션을 하려면 스냅샷을 생성하여 다른 AZ로 복원하는 방법을 사용해야 한다.
  - EBS 볼륨 백업은 I/O를 사용하므로 애플리케이션이 많은 트래픽을 처리하는 동안에는 성능에 영향을 줄 수 있어 실행하지 않는 것이 좋다.
  - EC2 인스턴스가 Terminate 되면 기본적으로 EBS 볼륨이 삭제되지만 이를 비활성화할 수도 있다.
  - 인스턴스 스토어 볼륨의 경우 물리적으로 EC2 인스턴스에 연결되어 있어 EC2 인스턴스가 손실되면 스토리지도 손실된다.
- EFS
  - 네트워크 파일 시스템으로 가용 영역에 걸쳐 수백 개의 인스턴스에 연결할 수 있다.
  - POSIX 시스템을 사용하기 때문에 Linux 인스턴스에만 사용할 수 있다.
  - EBS보다 사용 비용이 높지만 EFS-IA 기능을 활용하면 비용을 절감할 수 있다.

## **EFS Access Points**
**정리**

- NFS 환경에 대해 애플리케이션 액세스를 쉽게 관리할 수 있는 EFS Access Points 기능이 있다.
- POSIX 사용자 및 그룹이 파일 시스템에 액세스할 때 액세스 포인트를 사용하도록 강제할 수 있다.
- 액세스를 제한하거나 선택적으로 다른 경로 디렉터리를 지정할 수도 있어 편리하다.
- NFS 클라이언트에서 액세스 포인트로의 액세스는 IAM 정책을 사용해 관리할 수도 있다. 예를들어 특정 경로 /example/data, /example/secret, /example/config 폴더가 있을 때 사용자 별로 다른 경로에 액세스할 수 있도록 할 수 있다.
- UID, GID 기반으로 특정 디렉터리에 대한 권한을 설정해 사용자 또는 그룹 기반으로 액세스를 제한하고 특정 디렉터리를 루트 폴더로서 만들 수도 있다.
- 액세스 포인트를 생성할 때 선택적으로 액세스 포인트에서 식별할 POSIX 사용자를 지정할 수 있으며, 루트 디렉터리 생성 권한도 지정할 수 있다.
- 액세스 포인트의 ARN을 이용해 IAM 정책에 액세스 포인트에 접근하는 것을 허용하도록 할 수 있다.

## **EFS - Operations**
**정리**

- EFS는 라이프사이클 정책을 활성화할 수 있다. IA를 활성화 하거나, IA 설정을 변경할 수 있다.
- 처리량 모드를 변경하거나, 프로비저닝된 처리량 수를 변경할 수 있다.
- EFS Access Points를 생성할 수 있다.
- 만약 EFS 파일 시스템 전체를 마이그레이션 하려면 DataSync 서비스를 사용해야한다. 
  - DataSync가 모든 속성과 메타데이터를 복제하기 때문이다.
  - 또한 암호화된 EFS로 마이그레이션 하거나, 다른 암호화 키를 사용하기 위해 마이그레이션 하려면 DataSync를 사용해야 한다.
  - Max I/O와 같은 Performance mode를 활성화하려면 DataSync를 사용해야 한다.

## **EFS - CloudWatch Metrics**
**정리**

- PercnetIOLimit
  - General Purpose mode의 경우 I/O Limit을 제공해준다.
  - 100%에 가까워질수록 Max I/O로 전환하여 EFS 파일 시스템의 I/O 용량을 증가시키는 것이 좋다. 전환시에는 DataSync 서비스를 이용해야 한다.
- BurstCreditBalance
  - General Purpose mode의 경우 높은 처리량을 위한 Burst Credit이 있다.
  - 이 Credit은 처리량이 100%에 도달하고 모든 크레딧을 사용한 경우 크레딧 잔액은 0이 될 것이고, 다시 사용할 수 있을 때까지 기다려야 한다.
- StorageBytes
  - 바이트 단위로 측정된 파일 시스템의 크기이며, 15분마다 업데이트 된다.
  - Dimension이 있는데 Standard 클래스에 저장된 양, IA 클래스에 저장된 양, Total 저장된 양 (Standard + IA) 이 있다.
- 모든 모니터링 메트릭은 콘솔의 경우 Monitoring 탭에서 확인 가능하다.

## **[CCP/SAA/DVA] S3 Overview**
**정리**

- S3는 여러 목적으로 사용된다.
  - 파일 백업 및 저장
  - 재해 복구 목적으로 데이터를 다른 Region으로 백업
  - 아카이브 목적으로 훨씬 저렴히 S3에 보관하고 검색할 수 있다.
  - 하이브리드 클라우드 스토리지로 사용. 온프레미스 스토리지와 함께 클라우드로 확장하려는 경우 사용
  - 응용 프로그램을 호스팅하고 비디오 파일 및 이미지 등과 같은 미디어를 호스팅하는 데 사용
  - 데이터 레이크를 구축해 많은 데이터를 저장하고 대규모 데이터 분석
  - 소프트웨어 업데이트 제공
  - 정적 웹 사이트 호스팅
- S3는 파일을 버킷이라는 디렉터리에 저장한다. 버킷은 최상위 디렉터리라고 볼 수 있으며, 이러한 S3 버킷 안에 있는 파일은 객체라고 한다.
- 버킷은 AWS에 존재하는 모든 계정 전체에서 전역적으로 고유한 이름으로 생성되어야 한다.
- 버킷은 특정 Region 수준에서 정의된다.
- 버킷은 명명 규칙이 있다.
  - 대문자가 없어야한다.
  - `_`가 없어야한다.
  - 3에서 63자 사이여야 한다.
  - IP 주소가 아니어야 한다.
  - 소문자로 시작해야 한다.
  - `xn--`로 시작하지 않아야 한다.
  - `-s3alias`와 같은 접미사로 끝나지 않아야 한다.
  - 버킷의 이름은 문자 또는 숫자로 시작하고 끝나야 한다.
- 객체는 파일이며 키(key)라고 하는 파일의 전체 경로를 나타내는 것이 있다.
  - / 디렉터리에 있는 myfile.txt 객체의 키는 "/myfile.txt"가 된다.
  - 키는 접두사와 객체 이름으로 구성된다. 예를 들어 myfolder 디렉터리에 있는 myfile.txt 파일의 경우 접두사는 "myfolder/"가 될것이고 객체 이름은 "myfile.txt"가 될 것이다.
- 중요한 것은 S3는 본질적으로 디렉터리라는 개념이 없다. S3는 모든 객체를 키로 구분한다.
- 최대 객체 크기는 5TB 이며, 한 파일이 5GB 이상의 크기인 경우 Multi part로 나누어 업로드 해야한다.
- 객체는 메타데이터를 가질 수 있다. 키와 값 쌍의 목록으로 시스템이나 사용자가 파일에 대한 메타데이터를 지정할 수 있다.
- 객체는 태그를 가질 수 있다. 유니코드 키와 값 쌍으로 최대 10개까지 설정 가능하다. 보안 및 라이프사이클에 유용하다.
- 버킷에 버전 관리를 활성화되어 있으면 객체에 버전 ID가 있다.

## **[CCP/SAA/DVA] S3 Security: Bucket Policy**
**정리**

- S3는 사용자 기반 보안이 있다.
  - 특정 IAM User에 IAM Policy가 있으며 이 Policy를 통해 User가 어떤 API 호출을 혀용할 지 정의한다.
- 리소스 기반 보안도 있다.
  - S3 Bucket Policy를 이용해 버킷 전체에 적용되는 규칙을 S3 콘솔에서 직접 할당할 수 있다.
  - 예를 들어 특정 사용자 또는 다른 계정의 사용자(Cross Account)가 S3 버킷에 접근할 수 있도록 허용하는 정책을 만들 수 있다.
- 객체 액세스 제어 목록(ACL)을 통해 보다 세부적인 보안을 설정할 수 있다.
- 버킷 수준에서도 버킷 ACL을 사용할 수 있지만 일반적이지 않은 방법이며, 비활성화 가능하다.
- 가장 일반적인 S3 버킷의 보안 방법은 Bucket Policy를 사용하는 것이다.
- IAM 보안 주체가 S3 객체에 액세스할 수 있는 경우는 IAM 권한 허용 시, 리소스 정책 허용 시, 명시적으로 거부되지 않은 경우이다.
- 암호화 키를 사용해 S3 객체를 암호화할 수 있다.
- S3 버킷 정책은 JSON 기반 정책이다.
  - Resource: 어떤 리소스를 허용시킬 지
  - Effect: Allow 또는 Deny
  - Actions: Allow 또는 Deny할 API의 집합
  - 등으로 구성된다.
- Bucket Policy를 사용해 버킷에 공개 액세스 권한을 부여하거나, 객체 업로드 시 암호화를 적용하거나, 다른 계정에 액세스 권한을 부여할 수도 있다.
- EC2 인스턴스에서 S3 버킷에 접근하려면 IAM User 대신 IAM Role을 사용해야 한다.
- Cross Account 액세스를 허용하려면 Bucket Policy를 사용해 다른 AWS 계정의 IAM 사용자에게 해당 IAM 사용자가 우리 S3 버킷에 API 호출할 수 있도록 S3 Bucket Policy를 생성해야 한다.
- Block Public Access 설정이 있다. 버킷을 생성할 때 이 설정을 활성화할 수 있으며, S3 Bucket Policy로 버킷을 공개하더라도 이 설정이 있으면 버킷은 공개되지 않는다.

## **S3 Security: Bucket Policy Advanced**
## **[CCP/SAA/DVA] S3 Website Overview**
**정리**

- S3를 사용해 정적 웹사이트를 호스팅하고 이를 인터넷에서 액세스할 수 있도록 제공할 수 있다.
- 웹사이트의 URL은 AWS Region에 따라 달라진다.
- Static Website Hosting 옵션을 활성화하게 되면 버킷의 HTML 파일이나 이미지와 같은 파일을 제공할 수 있다.
- URL의 경우 http://bucket-name.s3-website-Region.amazonaws.com 등으로 사용자가 우리의 S3 버킷에 액세스할 수 있다.
- S3 버킷에 Public 읽기 권한이 없으면 작동하지 않는다. Bucket Policy를 공개적으로 읽기 위해 활성화하면 된다.
- 403 에러가 발생하게 된다면 버킷이 공개되지 않았다는 의미이다.

## **[CCP/SAA/DVA] S3 Versioning**
**정리**

- S3는 버전 관리를 이용해 파일을 관리할 수 있고, 설정을 버킷 수준에서 활성화 해야한다.
- 버전 관리가 활성화 되어 있다면 사용자가 동일 파일을 업로드하면 해당 키(접두사+객체 이름)에 대한 파일의 버전이 생성된다. 그리고 동일한 키를 업로드하려고 하면 해당 파일의 v2, v3가 생성된다.
- 버킷을 버전으로 관리하는 것은 의도하지 않은 삭제를 대비해 좋은 실천 사례이다.
- 파일 버전을 삭제하면 바로 삭제되는 것이 아니라 삭제 Marker만 추가되게 되고, 이전 버전을 복원할 수 있다. 그리고 이전 버전으로 쉽게 롤백할 수 있다.
- 버전 관리를 활성화하기 전에 있던 모든 파일은 버전이 지정되지 않아 버전이 null이다.
- 버전 관리를 일시 중지하면 이전 버전이 삭제되지 않는다.

## **[CCP/SAA/DVA] S3 Replication**
**정리**

- S3는 두 가지 종류의 복제가 있다.
  - Cross-Region Replication(CRR): 리전 간 복제
  - Same-Region Replication(SRR): 동일 리전 내 복제
- 복제는 한 리전의 S3 버킷과 다른 리전의 대상 S3 버킷 간 비동기 복제를 하는 것이다.
- 복제를 하기 위해서는 먼저 버전 관리를 활성화해야 한다.
- CRR의 경우 두 리전이 달라야 하고, SRR은 동일 리전에서 수행한다.
- 두 버킷이 서로 다른 AWS 계정에 있어도 복제가 가능하고, 복제는 비동기적으로 백그라운드에서 이루어진다.
- 복제를 위해서는 S3 서비스에 지정된 버킷에 대한 읽기/쓰기 권한을 부여해야 한다.
- CRR을 이용하면 규정 준수, 데이터에 대한 낮은 대기 시간 액세스, 계정 간 데이터 복제를 위해 사용할 수 있다.
- SRR은 여러 S3 버킷의 로그를 집계, 프로덕션과 테스트 계정 간 라이브 복제를 수행할 때 사용할 수 있다.

## **[SAA/DVA] S3 Replication Notes**
**정리**

- 기존 객체를 복제하기 위해서는 S3 Batch Replication 기능을 사용해야 한다. Replication을 활성화하면 새로운 객체만 복제되기 때문이다.
- 삭제 작업이 있는 경우 소스 버킷의 삭제 마커를 대상 버킷으로 복제할 수 있다. 악의적 삭제를 방지하기 위해서 버전 ID가 있는 삭제 작업은 복제되지 않는다.
- 복제를 체이닝할 수는 없다. 버킷 1에서 버킷2로 복제하고 버킷2에서 버킷 3으로 복제해도 버킷 1의 객체는 버킷 3에 복제되지는 않는다.

## **[CCP/SAA/DVA] S3 Storage Classes Overview**
**정리**

- S3는 다양한 Storage Class 가 있다.  
  - Amazon S3 Standard - General Purpose
  - Amazon S3-Infrequent Access
  - Amazon S3 One Zone-Infrequent Access
  - Glacier Instant Retrieval
  - Glacier Flexible Retrieval
  - Glacier Deep Archive
  - Amazon S3 Intelligent Tiering
- S3에 객체를 생성할 때 Class 를 선택할 수 있고, 수동으로 스토리지 클래스를 변경하거나, Amazon S3 Lifecycle 구성을 사용해 객체를 모든 스토리지 클래스 간에 자동으로 이동 가능하다.
- 클래스에 대해 알아보기 전에 내구성과 가용성의 개념을 알아야 한다.
  - 내구성의 경우 Amazon S3는 11 Nine을 제공한다. (99.999999999%) 매우 높은 내구성이며, 평균적으로 Amazon S3에 1천만 개의 객체를 저장하면 1만 년에 한 번씩 단일 객체가 손실될 것으로 예상된다는 의미이다. 내구성은 모든 Storage Class에서 동일하다.
  - 가용성은 서비스를 사용할 수 있는 정도를 나타내며 Storage Class에 따라 다르다. 
    - S3 Standard의 경우 99.99%의 가용성을 제공한다. 연간 53분 동안 서비스를 사용할 수 없을 것으로 예상된다는 의미이다. 서비스를 사용할 때 일부 오류가 발생할 수 있으며, 애플리케이션 개발 시 이를 고려해야 한다.
- 클래스 별 설명이다.
  - S3 Standard
    - 가용성 99.99%
    - 자주 액세스하는 데이터에 사용된다.
    - 기본적으로 사용하는 스토리지
    - 낮은 레이턴시와 높은 처리량
    - AWS 측의 두 개의 동시 시설 장애를 견딜 수 있음
    - 사용 사례는 빅데이터 분석, 모바일 및 게이밍 애플리케이션, 콘텐츠 배포 등이 있다.
  - S3 Infrequent Access
    - 자주 액세스하지 않지만 필요할 때 빠른 액세스가 필요한 데이터
    - S3 Standard보다 비용이 낮지만 검색 비용이 발생
    - S3 Standard-IA는 약간 낮은 99.9%의 가용성을 제공한다.
    - 사용 사례는 재해 복구 및 백업이다.
  - S3 One Zone-Infrequent Access (One Zone-IA)
    - 단일 AZ 내에서만 높은 내구성을 가지며, AZ가 파괴되면 데이터가 손실된다.
    - 내구성 외에도 가용성이 낮다. 99.5%이다.
    - 사용 사례는 온프레미스 데이터 또는 재생성 가능한 데이터의 백업 사본을 저장하는 것
  - Glacier
    - 매우 저렴한 객체 스토리지
    - 아카이빙 및 백업용으로 사용된다.
    - 저장 비용에 더해 검색 비용을 지불하는 가격 정책
    - 3개의 스토리지 클래스가 있다.
      - Glacier Instant Retrieval: 밀리초 단위의 검색 속도를 제공하므로 분기 별 한번 정도 액세스하는 데이터에 적합. 최소 저장 기간은 90일이고, 백업용이지만 밀리 초 단위로 액세스해야 하는 경우 선택
      - Glacier Flexible Retrieval: 3개의 유연성이 있는데, **빠른 검색(expedited)**으로 1~5분 내에 데이터를 가져올 수 있고 **표준(standard)**으로 3~5시간 내에 데이터를 가져올 수 있고 **대량(bulk)**은 무료이며 5~12시간 내에 데이터를 가져올 수 있다. 최소 저장 기간은 90일. Instant는 즉시 데이터를 검색할 수 있고, Flexible은 최대 12시간 정도를 기다려 데이터를 검색하는 점에서 차이가 있다.
      - Glacier Deep Archive: 장기 저장용. 표준 12시간과 대량 48시간의 2가지 검색 계층이 있다. 데이터 검색을 오랫동안 기다리지만 가장 낮은 비용을 제공하고, 최소 저장 기간은 180일이다.
  - S3 Intelligent Tiering
    - 사용 패턴에 따라 객체를 계층 간에 자동으로 이동시킨다.
    - 패턴 분석을 위해 월간 모니터링 비용과 자동 계층화 비용이 발생한다.
    - 검색 비용이 없다.
    - Frequent 계층이 기본 계층이고, 30일 동안 액세스하지 않은 객체는 Infrequent 계층으로, 90일 이상 액세스하지 않은 객체는 Archive Instant Access 계층으로 자동 이동한다.
    - Archive Access와 Deep Archive Access 계층은 선택 사항이고 각각 90~700일 180~700일 이상 액세스하지 않은 객체를 구성할 수 있다.
    - 객체 이동을 S3에 맡기고 편하게 사용할 수 있다.
- 모든 클래스는 11 nine의 내구성이지만, 가용성은 영역 수에 따라 다르다.


## **[SAA/DVA] S3 Lifecycle Rules (with S3 Analytics)**
**정리**

- 스토리지 클래스 간에 객체를 이동하는 방법이 있다.
  - 조합 별로 설명하자면 Standard 클래스에서는 모든 클래스로 이동 가능하다.
  - Standard IA는 Standard를 제외한 모든 클래스로 이동 가능하다.
  - Intelligent Tiering은 Standard, Standard IA를 제외한 모든 클래스로 이동 가능하다.
  - One-Zone IA는 Glacier Flexible Retrieval, Glacier Deep Archive에만 이동 가능하다.
  - Glacier Instant Retrieval은 Glacier Flexible Retrieval, Glacier Deep Archive에만 이동 가능하다.
  - Glacier Flexible Retrieval는 Glacier Deep Archive에만 이동 가능하다.
- 객체가 자주 액세스되지 않을 것으로 예상되면 Standard IA로 이동하고, 아카이빙할 객체라면 Glacier 계층이나 Deep Archive 계층으로 이동하는 등의 방안이 있다.
- 객체 이동은 수동으로 할 수 있지만, 라이프사이클 규칙을 사용해 자동화할 수 있다.
  - 라이프사이클 규칙
    - Transition Actions: 객체를 다른 스토리지 클래스로 이동하도록 설정한다. 예를 들어 "60일 후 Standard IA 클래스로 이동" 또는 "6개월 후 아카이빙을 위해 Glacier 클래스로 이동"
    - Expiration Actions: 일정 기간 이후 객체를 삭제하도록 할 수 있음. 예를 들어 "액세스 로그 파일을 365일 후 삭제하도록 설정" 또는 버전 관리가 활성화된 경우 "오래된 파일 버전을 삭제" 또는 "2주 이상된 불완전한 멀티파트 업로드를 삭제" 등의 작업을 할 수 있다.
    - 규칙은 특정 접두사에 대해 지정될 수 있으므로, 전체 버킷이나 버킷 내의 특정 경로에 적용될 수 있다.
    - 특정 객체 태그에 대해 지정할 수도 있다. 예를 들어 "Department":"Finance" 객체 태그에 대해 룰을 적용 가능하다.
    - "EC2에서 애플리케이션이 Amazon S3에 프로필 사진을 업로드하면 썸네일을 생성한다. 썸네일은 원본 사진에서 쉽게 재생성 가능하며, 60일만 보관하면 된다. 그러나 원본 이미지는 60일 동안 즉시 검색 가능해야 하며 그 이후에는 6시간 정도 기다려도 괜찮다." 이런 시나리오가 있을 때 솔루션은 "원본 이미지는 Standard 클래스에 두고 60일 후 Glacier로 전환하는 라이프사이클 규칙을 적용하며, 썸네일 이미지는 접두사를 사용해 원본과 구분하고, One-Zone IA 클래스에 두고 60일 후 삭제한다." 일 것이다.
- 객체를 한 클래스에서 다른 클래스로 전환하기 위한 최적의 일수를 결정하기 위해 Amazon S3 Analytics를 사용할 수 있다.
  - S3 Analytics는 Standard와 Standard IA에 대한 권장 사항을 제공한다.
  - One Zone IA나 Glacier는 적용되지 않는다.
  - S3 버킷에서 S3 Analytics를 실행하면 CSV 보고서가 생성되어 권장 사항과 통계를 제공한다.
  - 보고서는 매일 업데이트 되며, 데이터 분석 결과는 24~48시간 후에 볼 수 있다.
  - CSV 보고서를 바탕으로 합리적인 라이프사이클 규칙을 만들거나 개선할 수 있다.

## **[SAA/DVA] S3 Event Notifications**
**정리**

- S3 Event Notification 에서 Event란 객체가 생성되거나 제거되거나 복원되는 등의 하나의 사건을 의미한다.
- 이 이벤트를 필터링할 수 있다. 예를 들어 JPEG으로 끝나는 객체만 고려하고 싶다면 *.jpg 등으로 설정할 수 있다.
- Event Notification의 사용 사례는 S3에 업로드 된 모든 이미지에 대한 썸네일을 자동으로 생성하고 싶을 때 등이 있다.
- Event Notification를 생성해서 SNS Topic, SQS Queue, Lambda Function 등의 대상으로 보낼 수 있다.
- Event는 일반적으로 몇 초 내에 대상으로 전달되지만 때로는 1분 이상 걸릴 수 있다.
- Event Notification이 작동하려면 IAM 권한이 있어야한다. 예를 들어 SNS Topic이 대상인 경우 S3 버킷이 SNS Topic으로 직접 메시지를 보낼 수 있도록 SNS Resource Policy가 있어야한다.
- SQS, Lambda도 동일하게 리소스 정책이 있어야 한다. 이 경우 S3의 IAM Role을 사용하지 않고 SNS, SQS, Lambda에 리소스 액세스 정책을 정의해 권한 관리를 해준다.
- S3를 EventBridge와 같이 사용하는 방법이 있다.
  - Event는 전부 S3 버킷으로 이동한다. 또한 모든 Event는 EventBridge로 이동한다.
  - EventBridge에서는 Rule을 설정할 수 있고, Rule을 이용해 18개 이상의 다양한 AWS 서비스로 전송할 수 있다.
  - EventBridge를 사용하면 고급 필터링 옵션을 사용해 메타데이터, 객체 크기 및 이름 등으로 필터링 해 여러 대상에 동시 전송할 수 있다. 예를 들어 Step Function, Kinesis Data Streams 또는 Firehose로 전송할 수 있다. EventBridge의 고유 기능을 바로 사용할 수도 있다.
  - 결론적으로 이벤트를 보관하고, 이벤트를 replay할 수 있으며 보다 안정적인 전송이 가능하다.


## **[SAA/DVA] S3 Performance**
**정리**

- S3는 기본적으로 많은 수의 요청에 따라 자동으로 확장되고, S3에서 첫 번째 byte를 얻기 위해 100~200ms 라는 매우 빠른 속도를 가지고 있다.
- 접두사 별로 초당 3,500개의 PUT/COPY/POST/DELETE 요청과, 5,500개의 GET/HEAD 요청을 버킷에서 처리할 수 있다. 버킷 내 접두사는 제한이 없기 때문에 매우 높은 성능을 제공하는 것이다.
  - 예를 들어 bucket/folder1/ 과 bucket/folder2/ 는 다른 접두사를 가지고 있으며 각각의 접두사 별로 3,500개의 PUT 5,500의 GET 요청을 처리할 수 있다.
- S3의 성능을 최적화하는 방법이다.
  - Multi Parts Upload
    - 특정 파일을 Parts로 나누어 각 파일을 S3로 업로드하는 방법으로, 업로드를 병렬화 해 전송을 가속화하여 대역폭을 최대화하는 데 도움이 된다.
    - 또한 병렬로 S3로 업로드하고 모든 Parts가 업로드되면 다시 하나의 큰 파일로 합쳐진다.
    - 100MB 이상의 파일에는 Multi Parts Upload를 사용하는 것이 좋으며, 5GB 이상의 파일에는 반드시 사용해야 한다.
  - S3 Transfer Acceleration
    - 파일을 AWS Edge Location으로 전송해 Edge Location이 데이터를 대상 Region의 S3 버킷으로 전달해 업로드/다운로드 전송 속도를 높이기 위한 것이다.
    - 200개 이상의 Edge Location이 있으며 계속 늘어나고 있다.
    - Multi Parts Upload와 호환된다.
    - 예를 들어 미국에 있는 파일을 호주 S3 버킷에 업로드할 때 파일을 미국의 Edge Location에 업로드하고 퍼블릭 인터넷을 통해 Edge Location에서 호주 S3 버킷으로 데이터를 전송하지만 Edge Location에서 S3 버킷까지는 빠른 프라이빗 네트워크를 이용한다.
    - 퍼블릭 인터넷 구간은 최소화하고 AWS 프라이빗 네트워크 구간을 최대화해서 전송 속도를 높이는 것이 전체적인 개념이다.
  - S3 Byte Range Fetches
    - 파일의 특정 Byte 범위만 병렬로 가져와 GET 작업을 병렬화할 수 있는 파일을 가장 효율적으로 읽는 방법
    - 특정 Byte 범위를 가져오는 데 실패하면 더 작은 범위로 재시도할 수 있어 내구성이 높아지며, 다운로드 속도를 높일 수 있다.
    - 예를 들어 S3에 아주 큰 파일이 있을 때 파일의 처음/중간/끝 부분 등 특정 Byte 범위를 병렬로 요청할 수 있다. 이렇게 GET을 병렬화하면 다운로드 속도가 빨라진다.
    - 또 다른 예로는 헤더 정보돠 같이 파일의 일부분만 가져오는 방법이다. 파일의 처음 50 Byte가 헤더 정보라면, 해당 범위만 요청해 헤더 정보를 매우 빠르게 가져올 수 있다.

## **[SAA/DVA] S3 Select & Glacier Select**
**정리**

- S3 Select의 경우 S3에서 특정 파일을 검색할 때 모든 파일을 검색 후에 데이터를 필터링하지 않고 SQL을 사용해 서버 측 필터링을 사용할 수 있는 방법이다.
- rows와 column 기반의 간단한 SQL문을 사용해 클라이언트 측에서 발생하는 네트워크 전송 및 CPU 비용이 감소한다.
- S3 Select를 사용하면 S3가 실제로 파일을 필터링하고 필요한 데이터만 검색할 수 있기 때문에 속도는 최대 400% 빠르고 비용은 80% 정도 저렴해진다.
- 간단한 필터링이 필요하다면 S3 Select를 사용하는 것이 좋고, Glacier에서도 Glacier Select를 이용해서 위와 같은 모든 기능을 사용 가능하다.

## **[SAA] S3 Batch Operations**
**정리**

- S3 Batch Operations를 사용하면 단일 요청으로 기존 S3 객체에 대한 대량 작업을 수행할 수 있다.
- 예를 들어 
  - 많은 S3 객체의 메타데이터와 속성을 한 번에 수정
  - S3 버킷 간 객체를 배치로 복사
  - 시험에 나올 수 있는 사례로 S3 버킷 내 암호화되지 않은 모든 객체를 암호화하는 방법
  - ACL 수정
  - 태그를 수정하거나, 
  - S3 Glacier에서 여러 객체를 한번에 복원하거나, 
  - 람다 함수를 호출해 S3 Batch Operations에 대해 사용자 지정 작업을 수행할 수도 있다.
- 객체 목록에 대해 원하는 작업(jobs)을 수행할 수 있는 것이다.
- jobs는 객체 리스트, 수행할 action, 선택적 매개변수로 구성된다.
- 자체 스크립트 대신 S3 Batch Operation을 사용하는 이유는
  - 재시도 관리, 진행 상황 추적, 완료 알림 보내기, 보고서 생성 등이 가능하기 때문
- S3 Batch Operations에 전달할 객체 목록은 S3 Inventory라는 기능을 사용해 객체 목록을 가져올 수 있음. 또한 S3 Select를 사용해 객체를 필터링할 수 있다. Batch job에 포함할 필터링된 객체 목록을 얻을 수 있다.
- 주요 사용 사례중 하나는 S3 인벤토리를 사용해 암호화되지 않은 객체를 찾고 S3 Batch Operations를 이용해 한꺼번에 암호화하는 것이다.


## **S3 Inventory**
**정리**

- Inventory를 사용하면 S3 버킷 내 모든 객체와 해당 메타데이터를 나열할 수 있다. 이것은 S3 List API를 이용해서 객체와 메타데이터를 가져오는 것보다 더 나은 방법이다.
- 사용 예시
  - 모든 객체의 복제 및 암호화 상태에 대한 감사 및 보고서 생성. 이를 통해 어떤 객체가 암호화되지 않았는지 확인할 수 있다.
  - S3 버킷의 객체 수를 확인
  - 버킷의 모든 이전 객체 버전의 총 스토리지 크기를 확인할 수 있다. S3 인벤토리는 모든 객체 버전을 나열할 수 있기 때문이다.
- 출력 파일 형식은 CSV, ORC, Apache Parquet 등이 있음
- 인벤토리는 매일 또는 매주 생성할 수 있다.
- Amazon Athena, Redshift, Presto, Hive, Spark 등의 AWS 분석 도구를 사용해 이 데이터를 쿼리할 수 있다.
- S3 Select를 사용해 필터링된 보고서를 생성하고 보고서를 S3 Batch Operations에서 활용할 수도 있다.
- Inventory는 비즈니스, 컴플라이언스, 규제 요구사항 등이 있다.

## **S3 Glacier Overview**
**정리**

- 장기 보관 및 백업을 위한 저렴한 객체 저장소로, 데이터는 대략 수십 년 동안 장기간 보관된다.
- 온프레미스에서 자기 테이프 저장소를 실행하는 대안으로 Glacier에서 동일한 작업을 수행 가능하다.
- 내구성은 S3 표준과 동일한 11 nines (99.999999999%) 이고, 저장 비용은 Tier에 따라 다르다.
- 저장 비용은 Standard는 0.004$/GB 이며, Deep Archive Tier의 경우 0.00099$/GB 이다.
- Glacier는 Archive와 Vault로 구성된다.
  - Archive는 데이터를 부르는 명칭이다. S3로 치면 Object와 같은 것이다. 최대 40TB까지 한 Archive로 저장된다.
  - Vault의 경우 데이터를 담는 컨테이너이다. S3로 치면 Bucket과 같은 것이다.
- 기본적으로 모든 데이터는 AES-256을 사용해 정적으로 암호화되며 키는 AWS에서 관리된다.
- Lifecycle Rule을 이용해서 특정 기간 이후에 S3 Glacier에 아카이브할 수 있다.
- Glacier는 몇 가지 알아야할 기능이 있다.
  - Vault를 만들고 삭제할 수 있으며, Vault는 Bucket과 동일하게 비어있을 때만 삭제 가능하다.
  - Vault에서 메타데이터를 검색할 수 있다. Vault의 생성일, 아카이브 수, 모든 아카이브의 총 크기 등을 포함한다.
  - Vault의 Inventory를 다운로드할 수 있으며, 이는 모든 아카이브 단위의 목록이다. 아카이브 ID, 생성 날짜, 크기 등이 포함된다.
- Vault는 직접 파일을 업로드하거나 큰 아카이브에 대해 Multi Parts 업로드를 사용할 수 있다.
- Vault는 파일을 직접 다운로드할 수 있으며, 검색 작업을 수행한 후에 Glacier가 해당 파일을 다운로드할 수 있게 준비하고 주어진 시간 동안 다운로드할 수 있게 해준다.
- 특정 Archive를 삭제할 수 있다.
- Archive된 객체를 복원할 수 있다. Archive -> Bucket Object
  - 복원 및 복원 링크 생성 시 세 가지 옵션이 있다.
    - Expedited: 가장 비싼 옵션이며, 1~5분 정도의 간격으로 파일을 제공하며 0.03$/GB 및 1000개의 요청 당 10$를 지불해야한다.
    - Standard: 조금 느리지만 저렴한 옵션, 3~5시간 소요되며 0.01$/GB 및 1000개의 요청 당 0.03$를 지불해야 한다.
    - Bulk: 5~12시간 소요되며 0.0025$ 및 1000개의 요청 당 0.025$를 지불해야 한다.
- Glacier는 Vault Policy와 Vault Lock이 있다.
  - 각 Vault는 Vault Access Policy와 Vault Lock Policy가 있으며 이러한 정책은 JSON으로 작성된다.
  - Vault Access Policy
    - S3 Bucket Policy와 유사하며 사용자 및 계정 권한을 제한하는 데 사용된다.
  - Vault Lock Policy
    - 규정 및 규정 요구 사항을 위해 파일을 Glacier Vault에 잠글 수 있는 정책
    - 정책이 변경될 수 없도록 만들고, 일단 잠기면 Lock Policy에서 설정한 수명 기간동안 모든 정책을 변경할 수 없으며 잠긴 상태로 유지된다.
    - 예를 들어 아카이브를 1년 미만으로 삭제하지 못하도록 금지하거나 WORM(한번 쓰고 여러번 읽기)을 구현해 Vault 내 파일 또는 Vault 정책 자체를 삭제할 수 없도록 할 수 있다.
- Vault Notification
  - Glacier는 비동기적이라 복원 작업에 대한 알림이 필요하다. 시간이 지나고 복원이 됨을 마냥 기다릴 수 없기 때문이다.
  - 작업이 시작되고 Archive가 다운로드할 준비가 되면 SNS Topic으로 알림을 보낼 수 있다.
- S3 Event Notifications
  - S3 Glacier Storage Class에서 직접 객체를 복원할 때 사용된다.
  - s3:ObjectRestore:Post 로 객체 복원이 시작될 때 알림을 받고, s3:ObjectRestore:Complete로 객체 복원이 완료되었을 때 알림을 받을 수 있다.


## **S3 Multi-Part Upload Deep Dive**
**정리**

- 멀티파트 업로드는 큰 객체를 어떠한 순서로든 여러 부분으로 나누어 업데이트할 수 있게 해준다.
- 업로드를 병렬로 수행하여 전송을 가속화하고 네트워크 대역폭을 최대화하며, 한 부분이 실패한 경우 재시도할 수 있도록 도와준다. 
- 파일 크기가 100MB를 초과하는 경우에 권장하며, 5GB를 초과하는 파일에 대해 반드시 사용해야 한다. 업로드할 수 있는 Part의 최대 개수는 10,000 개
- 파일은 모두 S3에 업로드되고, COMPLETE 요청을 통해 모든 Part 및 파일을 원래의 큰 파일로 다시 연결할 수 있다.
- 업로드에 실패한 경우 다시 실패한 부분만 재업로드해 성능이 향상되고 재시도해야할 시간을 줄일 수 있다.
- 자동으로 오래된 Part를 삭제하려면 Lifecycle Rule을 이용해 완료되지 않은 업로드를 X일 후에 삭제하도록 설정할 수 있다.
  - Lifecycle Rule은 모든 객체에 적용할 수 있다.
  - 만료된 삭제 마커나 미완료된 멀티파트 업로드를 삭제할 수 있다.
- CLI나 SDK를 사용해서 Multipart Upload를 사용할 수 있다.

## **[SAA] Athena**
**정리**

- Athena는 S3 버킷에 저장된 데이터를 분석할 수 있는 서버리스 쿼리 서비스
- 데이터를 분석하기 위해 표준 SQL 언어로 쿼리를 실행한다.
- Athena는 Presto 엔진을 기반으로 구축 되었음
- S3에 있는 데이터를 옮기지 않고 S3 버킷에 있는 데이터를 직접 쿼리하고 분석할 수 있다.
- CSV, JSON, ORC, Avro, Parquet 등 다양한 형식을 지원한다.
- 스캔한 데이터를 기준으로 5$/TB 의 요금이 부과된다.
- AWS QuickSight라는 도구와 함께 일반적으로 사용되어 보고서와 대시보드를 생성한다.
  - QuickSight는 Athena에 연결되고 Athena는 S3 버킷에 연결된다.
- Athena는 특정 쿼리, 비즈니스 인텔리전스, 분석, 보고 및 AWS 서비스에서 생성되는 모든 유형의 로그 분석 및 쿼리이다.
- VPC Flow log, Loadbalancer log, CloudTrail log 등이 대상으로 있다.
- Athena 성능 개선 (시험에 나옴)
  - TB 당 스캔한 데이터 양을 지불하므로 적은 데이터를 스캔할 수 있는 데이터 유형을 사용해야 한다.
    - 필요한 열만 스캔해 비용을 절감할 수 있는 컬럼이나 데이터 유형을 사용할 수 있다.
    - Athena에서 권장되는 형식은 Apache Parquet과 ORC이며, 엄청난 성능 향상을 제공한다. 기존에 있는 데이터를 Glue 서비스를 이용해서 Parquet 또는 ORC 형식으로 변환할 수 있다. Glue는 CSV에서 Parquet로 데이터를 변환하는 ETL 작업에 유용하다.
  - 스캔할 데이터를 줄이기 위해, 더 작게 검색하기 위해서 데이터를 압축해야 한다. bzip2, gzip, Iz4, snappy, zlip, zstd 등 사용할 수 있는 다양한 압축 매커니즘이 있다.
  - Partition Dataset을 이용해서 특정 열을 향상 쿼리할 수 있다.
    - Dataset Partitioning은 S3 버킷 전체 경로와 슬래시가 있고 각 슬래시는 특정 값을 가진 다른 열 이름이 된다.
    - S3에서 데이터를 구성하고 파티셔닝하여 쿼리할 때 어떤 폴더와 S3의 어떤 경로에서 데이터를 스캔해야 하는지 정확히 알 수 있다.
    - 예로는 Parquet 형식의 항공편 데이터가 있다고 가정해보자. 각 연도마다 폴더가 있고 월, 일도 있다고 가정했을 때 Athena에서 특정 연도, 월, 일을 필터링해서 쿼리하면 S3의 어떤 폴더에서 데이터를 가져와야 하는지 정확히 알 수 있다.
    - example: s3://athena-examples/flight/parquet/year= 1991/month=1/day=1/
    - 이렇게 하면 데이터의 하위 집합만 검색하기 때문에 파티셔닝이 매우 잘 된다.
  - 오버헤드를 최소화하기 위해 더 큰 파일을 사용하는 것이다.
    - S3에 많은 작은 파일(128MB 미만의 경우)이 있으면 성능이 좋지 않아진다. 큰 파일이 더 스캔하고 검색하기가 쉽기 때문이다.
- Federated Query
  - Athena는 실제로 어디에서든 데이터를 쿼리할 수 있다.
  - Data Source Connector라는 Lambda 함수를 사용해야 하며, 이 함수가 다른 서비스에서 Federated Query를 실행한다.
  - CloudWatch Logs, DynamoDB, RDS, ElastiCache, DocumentDB, Redshift, Aurora, SQL Server, MySQL, EMR 서비스의 HBase, 온프레미스 데이터베이스 등의 대상에 쿼리를 실행할 수 있다.
  - 쿼리의 결과를 S3 버킷에 저장하여 나중에 분석할 수 있다.

## **[SAA/DVA] S3 Encryption**
**정리**

- S3는 네 가지 방법을 사용해 객체를 암호화할 수 있다.
- Server Side Encryption S3 (SSE-S3)
  - AWS에서 처리하고 관리하고 소유하는 키가 암호화 과정에서 사용된다.
  - 우리는 이 키에 대한 액세스 권한이 없으며, 객체는 AWS에 의해 서버 측에서 암호화된다.
  - 암호화 보안 유형은 AES-256이다.
  - SSE-S3 매커니즘을 사용해 S3에 객체를 암호화하도록 요청하려면 헤더를 "x-amz-server-side-encryption": "AES256"로 설정해야 한다.
  - 올바른 헤더를 사용해 파일을 업로드하면 SSE-S3 메커니즘을 사용해 S3 소유 키와 페어링되고, 키와 객체를 혼합해 암호화를 수행하며 S3 버킷에 저장된다.
  - 기본적으로 새로운 Bucket과 Object에 활성화 되어 있는 암호화이다.
- Server Side Encryption KMS (SSE-KMS)
  - AWS 및 S3 서비스에서 소유한 키에 의존하는 대신 KMS를 사용하여 직접 키를 관리한다.
  - KMS를 사용하면 키에 대한 사용자 제어 권한을 가져 KMS 내에서 직접 키를 생성하고 CloudTrail을 사용해 키 사용을 감사할수 있다. 누군가가 KMS에서 키를 사용하면 CloudTrail 서비스에 기록된다.
  - 헤더를 "x-amz-server-side-encryption": "aws:kms"로 설정해야 한다.
  - 헤더와 함께 객체를 업로드하고, 헤더에서 실제로 사용할 KMS 키를 지정하고 업로드 요청을 보내면 객체가 KMS에 있는 key와 함께 서버측에서 암호화된다.
  - S3 버킷에서 해당 파일을 읽으려면 객체 자체에 대한 액세스 권한 뿐만 아니라 객체를 암호화하는 데 사용된 KMS key에 대한 액세스 권한도 필요하다.
  - SSE-KMS는 몇 가지 제한 사항이 있다.
    - S3에서 파일을 업로드/다운로드할 때 KMS Key를 사용해야해서 업로드를 할 때는 GenerateDataKey와 같은 고유한 API를 사용하고, 다운로드와 같이 암호 해독 시에는 Decrypt API를 사용한다.
    - 각 API 호출은 초당 KMS 서비스의 Qouta에 포함된다. Region에 따라 초당 5,000~30,000 개의 요청이 가능하다. 처리량이 매우 높은 S3 버킷이 있고 KMS키로 암호화되어 있다면 Qouta를 늘려야되는 상황이 있을수 있다. (시험에 나올 수 있음)
- Server Side Encryption Customer (SSE-C)
  - 키가 AWS 외부에서 관리되지만 서버 측 암호화이다. 키를 AWS에 전송해야하기 때문이다.
  - 키를 S3에 제공하지만 S3는 제공된 암호화 키를 저장하지 않고 사용후 폐기된다.
  - 키를 전송할 때 무조건 HTTPS를 사용해야 하고, 모든 요청에 대해 헤더의 일부로 키를 전달해야 한다.
  - 사용자가 키와 함께 파일을 업로드하고 AWS 외부에서 키를 관리한다. 그 다음 S3가 클라이언트가 제공한 키와 객체를 사용해 암호화를 수행하고 암호화된 파일을 S3 버킷에 넣는다.
  - 파일을 읽으려면 사용자가 해당 파일을 암호화하는 데 사용된 키를 제공해야 한다.
- Client Side Encryption (CSE)
  - 클라이언트가 S3에 데이터를 보내기 전에 직접 데이터를 암호화 한다.
  - 클라이언트 측 암호화 라이브러리와 같은 것을 활용하면 구현하기 쉽다.
  - S3에서 데이터를 검색한 다음 S3 외부의 클라이언트에서 데이터 암호를 해독할 수 있어 클라이언트가 키와 암호화 주기를 완전히 관리한다.
  - 파일과 AWS 외부의 클라이언트 키가 있고, 클라이언트 자체에서 암호화를 제공하고 수행하여 암호화된 파일을 S3에 업로드하는 방식이다.
- 전송 중 암호화 (Encryption in transit)
  - 전송 중 암호화는 Encryption in transit 또는 In flight Encryption라고 하며 SSL/TLS을 이용한다.
  - 기본적으로 S3에는 암호화되지 않은 HTTP 엔드포인트와 In flight 암호화가 있는 HTTPS 엔드포인트가 있다.
  - S3를 사용할 때는 데이터 전송이 안전하도록 HTTPS를 사용하는 것이 매우 권장된다.
  - SSE-C 유형의 메커니즘을 사용하는 경우 HTTPS를 반드시 사용해야 한다.
  - 버킷 정책을 이용해서 In flight 암호화를 강제할수도 있다.
    - "aws:SecureTransport": "false" 는 HTTPS를 사용할 때 true HTTPS를 사용하지 않을 때 false이다. 원하는 Actions를 설정하고 해당 옵션을 true로 하면 HTTPS를 사용하는 사용자만 허용된다.

## **[SAA/DVA] S3 Default Encryption**
**정리**

- 새로운 객체 또는 버킷에 자동적으로 SSE-S3 암호화가 적용되며, 모든 버킷에는 기본적으로 SSE-S3 암호화가 적용된다.
- 꼭 SSE-S3를 사용해야만 하는 것은 아니며 SSE-KMS와 같은 다른 암호화를 기본 암호화로 변경할 수도 있다.
- 버킷 정책을 사용해 올바른 암호화 헤더 없이 S3 객체를 PUT하는 API 호출을 거부해 강제로 암호화할 수도 있다.
- 버킷 정책은 항상 기본 암호화 설정보다 먼저 평가된다.

## **[SAA/DVA] S3 CORS**
**정리**

- CORS는 웹 브라우저 기반의 보안 매커니즘으로, 주 Origin에서 다른 Origin으로의 요청을 허용하거나 거부하는 데 사용한다.
- CORS는 Cross-Origin Resource Sharing의 약자이다.
- Same Origin이라는 것은 동일한 스키마, 동일한 호스트 및 동일한 포트를 가진 출처이다.
- 웹 브라우저가 한 웹 사이트를 방문하고 다른 웹사이트에 요청을 해야 한다면, 다른 오리진에서 CORS 헤더를 사용해 요청을 허용하지 않는 한 해당 요청은 처리되지 않는다. 이 헤더를 Access-Control-Allow-Origin 헤더라고 부른다.
- CORS를 웹 서버에서 구성하고 특정 다른 Origin에 대해 GET,PUT 등의 메서드를 허용한다고 가정하면 웹 브라우저에서 다른 Origin으로 요청을 보내 파일을 가져오고 호출을 할 수 있다.
- S3에서는 클라이언트가 S3 버킷에 Cross Origin Request를 보내면 올바른 CORS 헤더를 활성화해야 한다.(시험에 자주 나옴) 특정 Origin을 허용하거나 *로 허용하여 모든 오리진을 빠르게 허용할 수 있다.
- 시험 문제로 자주 나온다.

## **[SAA/DVA] S3 MFA Delete**
**정리**

- S3에서는 객체 버전을 영구적으로 삭제하거나 버킷의 버전 관리를 중지할 때 MFA가 필요하다.
- 버전 관리를 활성화하거나 삭제된 버전을 나열하는 등의 작업에는 MFA가 필요하지 않는다.
- MFA 삭제를 사용하려면 먼저 버킷에서 버전 관리를 활성화해야 하며, 버킷 소유자인 루트 계정만 MFA 삭제를 활성화하거나 비활성화할 수 있다.
- MFA 삭제가 특정 객체 버전의 영구적인 삭제를 방지하기 위한 추가적인 보호 기능임을 기억하면 된다.

## **[SAA/DVA] S3 Access Logs**
**정리**

- S3 Access Log는 감사 목적으로 S3 버킷에 대한 모든 액세스를 로그로 남기고 싶을 경우 사용한다.
- 계정에 관계없이 S3 버킷에 대한 승인 또는 거부 등의 모든 요청이 다른 S3 버킷의 파일로 기록된다.
- 기록된 로그는 Athena와 같은 데이터 분석 도구를 사용해 분석할 수 있다.
- 로깅의 대상 버킷은 동일한 AWS Region에 있어야 한다.
- Access Log를 사용할 경우 절대로 로깅 버킷을 모니터링 중인 버킷과 동일한 버킷으로 설정하지 않아야한다. 로깅 루프가 발생해 버킷 크기가 기하 급수적으로 늘어나 많은 비용이 발생하기 때문이다.

## **[SAA/DVA] S3 Pre-signed URLs**
**정리**

- Pre-Signed URL은 URL을 생성하면 해당 URL을 받는 사용자는 URL을 생성한 사용자의 GET 또는 PUT 권한을 상속받게 된다.
- S3 콘솔, CLI, SDK를 사용해 생성할 수 있다.
- 만료시간이 있으며 콘솔을 이용해 생성한 경우 최대 12시간, CLI를 사용할 경우 최대 168시간까지 설정할 수 있다.
- 사용 사례는 Private S3 버킷에 대해 AWS 외부 누군가에게 파일에 대한 액세스 권한을 부여하고 싶을 때 파일을 공개하거나 보안을 약화시키고 싶지 않은 경우 Pre-Signed URL을 이용해 URL 생성자의 권한으로 제한된 시간 동안 파일에 접근할 수 있는 권한을 부여하는 것이다.
- Pre-Signed URL는 임시 다운로드 또는 업로드 액세스가 필요한 경우 일반적으로 사용된다.
  - 예를 들어 로그인한 사용자만 S3 버킷의 프리미엄 비디오를 다운로드할 수 있게 
  - 동적으로 URL을 생성해 계속 변경되는 사용자 목록이 파일을 다운로드할 수 있게 
  - 일시적으로 사용자가 S3 버킷의 정확한 위치에 파일을 업로드할 수 있게 하면서도 버킷을 Private로 유지할 수 있다.

## **[SAA] Glacier Vault Lock & S3 Object Lock**
**정리**

- Glacier Vault Lock
  - Glacier Vault를 잠금 처리해 한번 쓰고 여러번 읽을 수 있는 WORM 모델을 채택하는 것이다.
  - Vault Lock 정책을 생성한 후 정책 자체를 잠가 향후 편집을 방지할수도 있고, 한번 정책을 잠그면 누구도 변경하거나 삭제할 수 없어 규정 준수 및 데이터 보존에 매우 유용
- S3 Object Lock
  - Vault Lock과 유사한 옵션이다.
  - S3 객체 잠금을 활성화하려면 먼저 버전 관리를 활성화해야한다.
  - WORM 모델을 적용할 수 있지만, 전체 S3 버킷 수준의 잠금 정책이 아닌 버킷 내 각 객체에 대해 잠금을 적용할 수 있다.
  - 특정 객체 버전이 지정된 기간 동안 삭제되지 않도록 차단하는 것이며 두 가지 보존(retention) 모드가 있다.
    - Compliance mode
      - S3 Glacier Vault Lock과 유사하게 루트 사용자를 포함한 모든 사용자가 객체 버전을 덮어쓰거나 삭제할 수 없다.
      - 보유 기간을 설정해 해당 기간 동안 보존되며 아무도 해당 보존 모드와 보존 기간을 변경할 수 없다.
    - governance mode
      - 유연성이 필요한 경우 사용하며, IAM을 통해 특별 권한을 가진 관리자 사용자는 보존 기간을 변경하거나 객체를 직접 삭제할 수 있다.
  - Legal Hold는 S3 버킷의 모든 객체를 무기한 보호한다.
    - 보존 기간과는 무관하게 Legal Hold를 적용하면 이전에 설정한 보존 모드와 보존 기간에 관계없이 영구적으로 보호된다.
    - s3:PutObjectLegalHold IAM 권한을 이용해서 Legal Hold를 적용하거나 제거할 수 있다.

## **S3 Access Points**
**정리**

- S3 Access Points는 예를 들어 한 버킷에 많은 데이터가 있는 경우 많은 사용자, 데이터가 추가되는 경우 권한 관리나 보안 관리를 하기 위해 사용한다.
- Finance Data, Sales Data, Analytics Data 가 있다고 가정했을 때 Finance에 대한 액세스 포인트를 생성하고 Finance 데이터에 접두사 기반의 액세스 포인트 정책을 정의하면 사용자나 그룹이 데이터에 액세스하는 데 편리해진다.
- 액세스 포인트마다 자체 보안인 액세스 포인트 정책이 있어 IAM 권한이 있으면 사용자가 특정 액세스 포인트에 액세스하고 버킷의 특정 부분에만 연결 가능하다. 
- 액세스 포인트는 고유한 DNS 이름이 있다. 이를 통해 액세스 포인트에 연결할 수있고, 인터넷 또는 VPC를 통해 Private 트래픽으로 연결할 수 있다.
- VPC Origin에서 Access Point에 연결하려면 VPC Endpoint를 생성해 Private로 접근할 수 있도록 정의할 수 있다.
  - VPC Endpoint는 내부적으로 정책이 있으며 이 정책은 대상 버킷과 Access Point에 대한 액세스를 허용해야 한다.

## **S3 Multi-Region Access Points**
**정리**

- S3는 멀티 리전 액세스 포인트를 사용해 여러 리전의 여러 S3 버킷에 걸쳐 확장되는 글로벌 엔드포인트를 가질 수 있다.
- 엔드포인트를 통해 액세스하면 엔드포인트가 알맞은 경로의 리전과 S3 버킷으로 리디렉션 해준다.
- 요청이 가장 가까운 S3 버킷으로 동적으로 라우팅되며, 가장 낮은 대기 시간을 제공하고, 모든 액세스 포인트에 등록된 S3 버킷의 데이터가 동일하고 양방향 복제가 이뤄진다. 
- 모든 버킷 간에 복제 규칙을 가져야 한다.
- 모든 리전이 동기화되고 페일오버 기능이 있어 모든 버킷을 Active 또는 일부 버킷을 Backup으로 정의할 수 있어 특정 Region에 문제가 생겨도 페일오버를 수행할 수 있다.
- 애플리케이션이 S3 Bucket에 Object를 요청하면 가장 낮은 대기 시간을 가진 리전으로 자동으로 라우팅된다.

## **S3 VPC Endpoints**
**정리**

- S3 버킷에 액세스하기 위해서는 일반적으로 Public 인터넷을 통해야 한다. 이 방법을 통해 접근하기 위해서는 "aws:SourceIp" 조건 키를 이용해서 특정 Public IP 기반의 요청을 허용해야 한다.
- S3 버킷에 대한 Private 액세스를 활성화하려면 인스턴스를 Private 서브넷에 배치하고 VPC Endpoint Gateway를 생성해야한다.
- VPC Endpoint Gateway는 인스턴스에서 S3 버킷으로 직접 Private 연결을 설정하고 Bucket Policy를 이용해 VPC Endpoint Gateway를 통하게끔 액세스를 강제할 수 있다.
- "aws:SourceVpce"를 이용해 하나 이상의 Endpoint를 지정하는 방법, "aws:SourceVpc"를 이용해 VPC 내의 모든 VPC Endpoint를 포함하게끔 Bucket Policy 에서 설정 가능함

## **[CCP/SAA] AWS Snow Family Overview**
**정리**

- Snow Family는 AWS의 Edge에서 데이터를 수집하고 처리하는 데 사용되거나 AWS로 데이터를 이동하는 데 사용될 수 있다.
- Snow Family는 Snowcone, Snowball Edge, Snowmobile이 있다.
- 데이터 마이그레이션 용도 또는 엣지 컴퓨팅 용도로 사용한다.
- 데이터 마이그레이션 용도
  - Snow Family를 사용해 데이터 마이그레이션 하는 이유는 여러 이유가 있다.
    - 예를 들어 1Gbps 네트워크 회선을 통해 100TB를 전송하려면 12일이 걸린다. 오래 걸린다는 소리
    - 망 Transfer가 작은 경우에 연결성이 제한되거나 대역폭이 제한되어 있을 수 있다.
    - 네트워크를 통해 데이터를 전송하는 비용이 발생한다.
    - 네트워크를 통해 전송하면 연결이 안정적이지 않다.
  - Snow Family는 오프라인 장치로 데이터 마이그레이션을 수행할 수 있게 해준다.
    - 네트워크의 경로를 이용하는 것이 아니라 실제 물리적 장치를 우체국을 통해 사용자에게 보내고, 데이터를 장치에 로드한 다음 다시 AWS에 장치를 보내 자체 인프라에 연결해 데이터를 가져오거나 내보낼 수 있다.
    - 네트워크를 통한 데이터 마이그레이션의 대안이다.
  - 일반적으로 네트워크 전송이 일주일 이상 걸리면 Snowball을 사용하는 게 좋다.
  - Snowball Edge
    - TB 또는 PB의 데이터를 AWS로 이동하는 데 사용될 수 있다.
    - Snowball Edge는 블록 스토리지나 Amazon S3 호환 객체 스토리지 인터페이스가 있다.
    - 두 가지 종류가 있다.
    - Snowball Edge Storage Optimized
      - 80TB HDD 용량을 제공
      - 블록 볼륨 및 S3 호환 객체 스토리지에 적합
    - Snowball Edge Compute Optimized
      - 42TB or 28TB 용량을 제공
      - 블록 볼륨 및 S3 호환 객체 스토리지에 적합
    - 사용 사례는 대규모 클라우드 마이그레이션, 데이터센터 폐쇄, AWS로 데이터 백업을 통한 재해 복구 등
  - Snowcone
    - 작고 휴대 가능한 견고하고 안전한 기기, 열악한 환경에서도 사용 가능
    - 적은 양의 데이터를 다루는 환경에 적합하다.
    - 무게는 2.1kg 정도로 가벼움
    - 엣지 컴퓨팅, 스토리지, 데이터 전송에 사용된다.
    - HDD인 8TB 모델과 SSD 14TB 고성능 모델인 Snowcone SSD 모델 두 가지가 있음
    - Snowball로는 사용할 수 없는 공간이 협소한 환경 등에서 Snowcone을 사용
    - 배터리와 케이블은 제공되지 않아 사용자가 직접 준비해야함
    - AWS로 데이터를 보낼 때는 오프라인으로 보내거나, 인터넷이 연결된 데이터센터에 연결해 AWS DataSync 서비스를 이용할 수 있다.
  - Snowmobile
    - 실제 트럭이며, EB(1,000 PB) 규모의 데이터 전송이 가능하다. 각 Snowmobile은 100PB 용량이며 1EB를 전송하기 위해서는 10 대의 Snowmobile이 필요하다.
    - 고도의 보안, 온도 제어, GPS, 24/7 영상 감시 등이 적용된다.
    - 10PB 이상의 데이터 전송 시 Snowball 보다 Snowmobile이 적합하다.
  - Snowcone의 경우 DataSync 에이전트가 미리 설치되어 있어서 네트워크에 연결하면 DataSync를 통해 네트워크로 데이터를 전송할 수 있다.
  - Snow Family를 사용하는 과정은
    1. 콘솔에서 기기 배송 요청
    2. Snowball 클라이언트를 설치하거나 OpsHub를 사용해 서버에 설치
    3. Snowball을 서버에 연결하고 클라이언트로 파일 복사
    4. 준비가 되면 기기를 AWS에 반송 (반송 과정 중 E-Ink 마커 덕분에 정확한 AWS 시설로 반송됨)
    5. 데이터가 S3 버킷에 로딩되며, Snowball에 있는 잔여 데이터는 최고 수준의 보안 조치에 따라 완전히 삭제됨
- 그리고 Snow Family는 Edge Computing이라는 사용 사례도 있음
  - Edge Computing은 Edge location에서 데이터가 생성될 때 처리하는 것을 말한다.
  - 이동중인 트럭, 바다의 선박, 지하 광산 등 인터넷이 없거나 클라우드에서 멀리 떨어진 곳의 경우 데이터를 생성할 수 있지만 인터넷 연결이 없거나 제한적일 수 있고 컴퓨팅 파워에 접근하기 어려울 수 있다. 그럼에도 불구하고 이런 위치에서 컴퓨팅과 데이터 처리를 해야하는 경우 Edge Computing이 필요하다.
  - Snowball Edge 기기나 Snowcone을 주문해 Edge Location에 배치하면 사용 가능하다.
  - 사용 사례로는 데이터 전처리, 엣지에서의 머신러닝, 미디어 스트림의 사전 트랜스코딩 등이 있다.
  - 데이터를 AWS로 전송해야 한다면 Snowcone이나 Snowball Edge 기기를 반송하면 된다. 즉, 데이터가 생성되는 곳 긑처에서 처리한 다음 AWS로 전송하는 방식이다.
  - Snowcone & Snowcone SSD
    - 2 CPU, 4GB 메모리, 유/무선 액세스를 제공
    - USB-C 전원 또는 옵션 배터리 사용
  - Snowball Edge Compute Optimized
    - 104 vCPU, 416GB RAM, 옵션 GPU(비디오 처리/머신러닝 용도), 28NVMe 또는 42 TB HDD 스토리지 제공
    - 최대 16 노드까지 스토리지 클러스터링 가능해 총 스토리지 크기 늘릴 수 있다.
  - Snowball Edge Storage Optimized
    - 40 vCPU, 80GB RAM, 80TB 스토리지
  - 위 세 개의 기기 모두 EC2 인스턴스와 Lambda 함수를 실행할 수 있고, Lambda의 경우 AWS IoT Greengrass 서비스를 활용함
  - 기기는 장기간 배치 가능하고, 1년과 3년 동안 렌탈할 수 있는 장기 배치 옵션과 할인 가격이 있다.
- OpsHub
  - Snow Family 기기를 사용하기 위해서 과거에는 CLI 도구를 무조건 사용해야 했는데 불편함을 없애기 위해 AWS에서는 OpsHub 소프트웨어를 만들었다.
  - OpsHub는 컴퓨터나 랩톱에 설치하는 프로그램으로 클라우드에서 사용하는 게 아니며, 설치 후 연결하면 GUI를 통해 Snow 기기에 연결, 구성, 사용할 수 있어 편리하다.
  - OpsHub를 통해 단일/클러스터 기기 잠금 해제 및 구성, 파일 전송, 인스턴스 실행 및 관리 (Snow Family에서 실행되는 EC2 인스턴스), 기기 메트릭 모니터링, 기기에서 호환 AWS 서비스 실행(EC2 인스턴스, DataSync, NFS 사용) 등의 작업을 할 수 있다.


## **[SAA/SAP] Amazon FSx**
**정리**

- Amazon FSx는 완전 관리 서비스로서 서드파티 고성능 file system을 시작할 수 있게 해준다.
- Amazon FSx for Windows File Server
  - 완전 관리형 Windows File Server 공유 드라이브이고, Windows 이므로 SMB 프로토콜과 Windwows NTFS를 지원한다.
  - 사용자 보안을 위해 MS Active Directory와 통합된다.
  - ACL 및 사용자 할당량을 사용한다.
  - 특이한 점은 Windows 전용으로 보이지만 Linux EC2 인스턴스에도 마운트할 수 있다.
  - 기존에 온프레미스에 있는 Windows 파일 서버가 있다면 MS Distributed File System(DFS) 기능을 이용해 파일 시스템을 그룹화하여 온프레미스 Windows 파일 서버에 FSx for Windows File Server를 연결할 수 있다.
  - 10GB/s, 수백만의 IOPS, 100 PB 데이터로 확장 가능하다.
  - Storage Option
    - SSD: 데이터베이스, 미디어 처리, 데이터 분석 등 매우 낮은 대기 시간과 민감한 워크로드에 적합한
    - HDD: 홈 디렉터리 및 CMS와 같이 넓고 다양한 워크로드에 사용 가능한
  - 액세스는 온프레미스 인프라에서 VPN이나 Direct Connect와 같은 Private 연결을 통해 가능하다.
  - 고 가용성을 위해 Multi-AZ로 File server를 구성할 수도 있다.
  - 모든 데이터는 재해 복구 목적으로 매일 Amazon S3로 백업 된다.
- Amazon FSx for Lustre
  - 대규모 컴퓨팅에 사용되는 분산 파일 시스템
  - Lustre는 Linux와 Cluster에서 파생되었다.
  - 머신 러닝, High Performance Computing, 비디오 처리, 금융 모델링, 전자 설계 자동화와 같은 애플리케이션에 사용 가능하다.
  - 100 GB/s, 수 백만 IOPS, sub-ms의 대기 시간으로 확장 가능하다.
  - Storage Option
    - SSD: 매우 낮은 latency, IOPS 집중형 워크로드 및 작거나 랜덤 파일 작업을 위한
    - HDD: 대량 및 순차 파일 작업, 처리량 집중형 워크로드의 경우 사용하는
    - SSD가 HDD보다 비용이 더 많이 든다.
  - S3와의 원활한 통합이 가능하다. FSx를 통해 S3를 파일 시스템으로 읽을 수 있고, FSx의 계산 결과를 S3로 쓸 수 있다.
  - 온프레미스 서버에서 VPN 또는 Direct Connect를 통해 사용 가능하다.
  - Deployment Options
    - Scratch
      - 임시 저장소로서 데이터가 복제되지 않는다.
      - 파일이 있지만 서버에 장애가 발생하면 파일이 손실된다.
      - 1TiB 당 200MBps 처리량으로 높은 버스트를 갖고 있다.
      - 데이터의 한 가지 사본을 갖고, S3 Bucket을 데이터 저장소로 사용할 수도 있다.
      - 사용 사례는 단기간 처리, 데이터를 복제하지 않고 비용을 최적화 하려는 경우가 있다.
    - Persistent
      - 장기 저장에 사용된다.
      - 동일한 AZ 내에서 데이터가 복제됨
      - 기본 서버의 장애가 발생하면 파일이 몇 분내에 교체된다.
      - 데이터의 두 가지 사본을 갖는다.
      - 사용 사례는 민감한 데이터의 장기 처리와 저장이다.
- Amazon FSx for NetApp ONTAP
  - AWS에서 관리되는 NetApp ONTAP 파일 시스템이다.
  - NFS, SMB 및 iSCSI 프로토콜과 호환된다.
  - 이미 ONTAP에서 실행 중인 워크로드를 FSx for NetApp ONTAP 파일 시스템을 사용해 AWS로 이동할 수 있다.
  - 매우 넓은 호환성을 가지고 있어 Linux, Windows 및 MacOS, VMware Cloud on AWS, WorkSpaces, AppStream, EC2, ECS, EKS와 같은 서비스와 함께 작동한다.
  - Auto Scaling 기능이 있어서 자동으로 축소되거나 확장된다.
  - 스냅샷, 복제, 저렴한 비용, 데이터 압축, 데이터 중복 제거를 수행할 수 있다.
  - point-in-time 순간 복제를 수행할 수 있어 새로운 워크로드를 테스트하고 싶은 경우 매우 유용하다.
- Amazon FSx for OpenZFS
  - 매니지드 OpenZFS 파일 시스템으로, 다양한 버전의 NFS 프로토콜과 호환된다.
  - Linux, MacOS, Windows, VMWare Cloud on AWS, Amazon Workspaces & AppStream 2.0, EC2, ECS, EKS 등 넓은 호환성을 가지고 있다.
  - 0.5 밀리초 미만의 지연 시간과 최대 100만 IOPS까지 확장 가능하다.
  - 스냅샷, 압축, 저비용을 지원한다.
  - 데이터 중복 제거를 지원하지는 않는다.
  - 사용 사례는 이미 내부 ZFS에서 실행 중인 워크로드를 AWS로 이동하는 것이다.

## **FSx for SysOps**
**정리**

- FSx for windows는 Single-AZ와 Multi-AZ 옵션이 있다.
- Single-AZ
  - 단일 가용 영역 파일 시스템이며, 해당 AZ 내에서만 데이터 복제가 자동으로 수행된다.
  - 두 세대가 있으며 Single-AZ 1 (SSD) 와 Single-AZ 2 (SSD, HDD)가 있다.
- Multi-AZ
  - Multi-AZ를 사용하려면 FSx for Windows Multi-AZ 옵션을 사용하면 된다.
  - 두 가용 영역이 있고, 두 파일 시스템 간 동기 복제가 수행된다.
  - AZ 간 데이터가 자동으로 동기적으로 복제되며 문제가 발생할 경우 자동 장애 조치가 발생한다.
  - 자동 장애 조치는 한 파일 시스템이라도 실패하면 Standby file server가 자동 장애 조치된다.
- FSx for Windows는 2개의 Single-AZ를 사용하고 자체 복제를 수행하는 대신에, 항상 Multi-AZ를 사용하는 것이 좋다.
- 장애 조치를 원하는 경우에는 항상 Multi-AZ를 선택해야 한다. (시험에 나옴)

## **[SAA] Storage Gateway Overview**
**정리**

- AWS의 경우 사용자의 인프라 일부가 AWS의 클라우드에 또한 일부가 온프레미스에 유지되는 Hybrid 클라우드를 지원한다. 
- 클라우드 마이그레이션이 오래 걸리거나, 보안 요구 사항이나 클라우드를 탄력적인 워크로드에만 활용하고 나머지를 온프레미스에 유지하는 전략으로도 사용된다.
- Storage Gateway는 간단히 말해 온프레미스 데이터와 S3 사이의 브릿지 역할을 하는 것이다.
- 사용 사례는
  - 재해 복구를 위해 온프레미스 데이터를 클라우드에 백업
  - 백업과 복원을 통해 클라우드 마이그레이션하거나 온프레미스에서 클라우드로 스토리지를 확장
  - Cold 데이터는 클라우드에 Warm 데이터는 온프레미스에 둘 수도 있으며
  - 대부분의 데이터를 AWS에 저장하고 Storage Gateway를 온프레미스 캐시로 사용해 지연 시간이 낮은 파일 액세스를 수행할 수도 있다.
- 여러 종류의 타입이 있다.
  - S3 File Gateway
    - S3 버킷을 온프레미스 애플리케이션 서버에 연결하되 표준 네트워크 파일 시스템을 사용하고 싶은 경우 사용함
    - S3 버킷의 클래스는 S3 Standard, Standard-IA, One Zone-IA, Intelligent-Tiering 등 원하는 스토리지 클래스를 선택할 수 있다. Glacier & Glacier Deep Archive는 선택 불가능
    - S3 File Gateway를 생성하면 애플리케이션 서버가 NFS나 SMB 프로토콜을 사용해 S3 File Gateway가 내부적으로 요청을 S3 버킷을 위한 HTTPS 요청으로 변환한다.
    - 애플리케이션 서버 입장에서는 일반 파일 공유에 액세스하는 것처럼 보이지만, 실제로는 S3 버킷을 사용하게 된다. 이렇게 S3 객체를 온프레미스 애플리케이션 서버에 노출시킬 수 있다.
    - 일부 객체를 아카이빙하고 싶다면 S3 버킷에 라이프사이클 정책을 생성해 일정 기간 후 객체를 S3 Glacier로 전환해 아카이빙 가능하다. 직접 Glacier와 Glacier Deep Archive를 선택할 수는 없고 전환해야 한다.
    - S3 File Gateway에 구성된 버킷은 NFS나 SMB 프로토콜을 사용해 액세스할 수 있다.
    - 최근 사용된 데이터는 빠른 액세스를 위해 File Gateway에 캐싱된다. 그래서 전체 S3 버킷 데이터가 File Gateway에 있는 것이 아니고 캐싱된 데이터만 존재한다.
    - 버킷에 액세스하려면 각 File Gateway에 대한 IAM 역할을 생성해야 한다.
    - SMB 프로토콜을 사용하는 경우 사용자 인증을 위해 Active Directory와 통합된다. 사용자는 S3 File Gateway에 인증된 후 S3 버킷에 액세스할 수 있다.
  - FSx File Gateway
    - Amazon FSx for Windows File Server에 대한 네이티브 액세스를 제공한다.
    - Amazon FSx File System에 Windows File Sever FSx가 배포되어 있고, 기업 온프렘 데이터 센터의 SMB 클라이언트에서 액세스하려고 할 때 사용한다.
    - Amazon FSx File Gateway를 왜 사용하는가?
      - 실제로 Amazon FSx for Windows File Server를 사용하면 온프레미스 시스템에서 이미 액세스가 가능하지만, 게이트웨이를 생성하면 자주 액세스하는 데이터에 대한 로컬 캐시를 얻을 수 있기 때문이다. 로컬로 캐싱되면 저지연 액세스가 가능해진다.
      - 파일 게이트웨이에 대한 Windows 및 네이티브 호환성(SMB, NTFS, Active Directory)도 제공된다. 온프레미스에 노출하려는 그룹 파일 공유 및 홈 디렉터리에 유용하다.
  - Volume Gateway
    - S3를 백업 스토리지로 하는 iSCSI 프로토콜 기반의 블록 스토리지
    - 볼륨이 EBS 스냅샷에 의해 백업되어 필요 시 온프레미스 볼륨을 복원할 수 있다.
    - 유형은 두가지가 있다.
      - Cached Volume: 최근 데이터에 대한 저지연 액세스를 위한
      - Stored Volume: 전체 데이터 세트를 온프레미스에 두고 S3로 스케쥴에 따라 정기적으로 백업하는
    - iSCSI 프로토콜을 이용해 온프레미스 서버와 Volume Gateway를 연결하고, Volume Gateway는 Amazon S3에 의해 백업되는 EBS 스냅샷을 생성한다.
    - 목적은 Volume Gateway가 실제로 온프레미스 서버의 볼륨을 백업하는 것이다.
  - Tape Gateway
    - 물리적 테이프를 사용해 테이프 백업 시스템을 운영하는 기업을 위한 것이다.
    - 가상 테이프 라이브러리(VTL)이 S3와 Glacier에 의해 백업된다.
    - 테이프 기반 프로세스와 iSCSI 인터페이스를 사용해 기존 데이터를 백업한다.
- 온프레미스에 가상화가 없는 경우 Storage Gateway Hardware Appliance를 주문할 수 있다. 
  - 이는 소형 서버 하드웨어 어플라이언스이고, 설치 후에 File Gateway, Volume Gateway, Tape Gateway로 설정할 수 있다.
  - 물리적으로 설치해야 하고, 올바르게 작동하기 위해 충분한 CPU, 메모리, 네트워크, SSD 캐시 리소스가 필요하다.
  - 가상화 없는 소규모 데이터 센터의 일일 NFS 백업 등에 유용하다.


## **Storage Gateway for SysOps**
**정리**

- 파일 게이트웨이는 POSIX 표준을 준수한다.
  - Linux 파일 시스템이기 때문에 메타데이터 소유권, 권한 및 타임스탬프 정보가 S3의 객체 메타데이터에 저장된다.
- Storage Gateway VM을 재부팅하려면 두 가지 방법이 있다.
  - File Gateway의 경우 단순히 스토리지 게이트웨이 VM을 다시 시작하면 된다.
  - Volume 또는 Tape Gateway의 경우에는 콘솔이나 VM 로컬 콘솔 또는 스토리지 게이트웨이 API를 사용해 스토리지 게이트웨이 서비스를 중지해야 한다. 그 다음 VM을 재부팅하고 API 또는 콘솔을 사용해 스토리지 게이트웨이 서비스를 다시 시작해야 한다.
- Storage Gateway를 활성화하는 두 가지 방법이 있다.
  - Gateway VM CLI를 사용하는 것. 이를 위해서는 시작할 때 "0: 활성화 키 가져오기" 옵션을 선택하면 활성화 키를 게이트웨이 콘솔에 직접 전달할 수 있다.
  - Gateway VM의 80번 포트로 웹 요청을 직접 보내는 것이다. 이를 위해서는 80번 포트를 열어야 한다.
- Activation Failure가 발생할 수 있으며 시험에서 다뤄질 수 있다.
  - 활성화 실패가 발생하는 경우는 80번 포트가 열려있어야 하며, 게이트웨이 VM이 올바른 시간을 가지고 있고 NTP를 사용해 자동으로 시간을 동기화하고 있는지 확인해야 한다.
- Volume Gateway Cache
  - Cached mode에서는 가장 최근 데이터만 Storage Gateway Volume Gateway에 저장된다. 그래서 캐시 효율성을 확인하는 것이 좋다.
  - CloudWatch에서 CacheHitPercent 메트릭이 있는데, 이 값이 매우 높으면 캐시가 효율적이며 많이 사용되고 있어 낮은 대기 시간을 얻고, 값이 매우 낮으면 문제가 있을 수 있다.
  - CachePercentUsed의 경우 캐시가 적절히 채워져 있어야 하고, 캐시가 너무 가득 차면 안된다.
  - Cache Volume Gateway가 캐시 Hit 시에는 트래픽이 기업 데이터 센터 내에 머물게 된다. 하지만 캐시 Miss 시에는 S3 버킷에서 데이터를 가져와야 하므로 더 오래 걸릴 수 있다.
  - 그래서 Volume Gateway 가 Cache mode일 경우 캐시를 효율적으로 사용하는 것이 좋다.
- 예를들어 CacheHitPercent가 30%라고 가정했을 때 캐시 효율성을 높이기 위해 더 큰 캐시 디스크를 만들어야 한다.
  1.  먼저 Cached Volume을 복제해 더 큰 볼륨을 생성한다.
  2.  새 디스크를 볼륨 게이트웨이의 Cached Volume으로 선택한다.
  3.  볼륨을 복제하고 새 볼륨을 게이트웨이의 Cached Volume으로 할당하는 작은 작업이 필요하다.
  

## **[SAA/DVA] CloudFront Overview**
**정리**

- CloudFront는 CDN이다.
- CloudFront는 웹사이트 콘텐츠를 전세계 다양한 엣지 로케이션에 캐싱하여 읽기 성능을 개선한다.
- 콘텐츠가 전세계에 분산되어 캐시되므로 전세계 사용자들의 대기시간이 낮아지고 사용자 경험이 향상된다.
- 콘텐츠가 분산되기 때문에 DDos 공격으로부터 보호받을 수 있으며, Shield와 Web Application Firewall을 사용해 CloudFront로 보호받을 수 있다.
- CloudFront는 여러 유형의 오리진이 있다.
  - S3 버킷은 파일을 배포하고 CloudFront를 통해 엣지에 캐싱하는 데 사용된다. CloudFront을 통해서 들어오는 요청만 S3 버킷에 접근할 수 있도록 하려면 OAC(Origin Access Control)를 사용할 수 있다. OAC는 OAI로 전환 중에 있다.
  - 데이터를 S3 버킷으로 전송하는 데도 사용할 수 있다.
  - CloudFront를 사용자 정의 HTTP 백엔드 (ALB, EC2 인스턴스 등) 앞에 둘 수 있다. S3 웹사이트도 둘 수 있다. S3의 경우 Static S3 Website를 활성화해야 한다.
- CloudFront 작동 원리
  - 전세계에 엣지 로케이션이 있고 오리진에 연결된다.
  - 클라이언트가 엣지 로케이션으로 HTTP 요청을 보내면 엣지 로케이션은 캐시에 콘텐츠가 있는지 확인한다.
  - 없다면 오리진에서 콘텐츠를 가져온다.
  - 엣지 로케이션에서 콘텐츠를 가져오면 로컬 캐시에 캐싱되어 다른 클라이언트가 같은 엣지 로케이션에서 같은 콘텐츠를 요청하면 엣지 로케이션이 오리진에 갈 필요가 없어진다.
- CloudFront와 S3 Cross-Region 복제의 차이점
  - CloudFront는 글로벌 엣지 네트워크를 사용해 각 엣지 로케이션에 파일을 하루 정도 캐싱한다. 전세계에서 액세스할 수 있는 정적 콘텐츠에 적합하다.
  - S3 Cross-Region 복제는 각 대상 리전별로 설정해야 하며, 전세계 모든 리전이 아니다. 파일은 실시간으로 업데이트되고 캐싱은 되지 않고, 읽기 전용이고, 몇 개 리전에서 낮은 레이턴시가 필요한 동적 콘텐츠에 적합하다.

## **[SAA/DVA] CloudFront - ALB as an Origin**
**정리**

- CloudFront는 EC2나 ALB같은 사용자 정의 HTTP 백엔드에 액세스할 수 있다.
- EC2 인스턴스의 경우 Public하게 공개되거나, Edge Location의 모든 Public IP 목록을 허용하는 보안 그룹이 있어야 한다. 해당 IP 목록은 따로 기재되어 있다.
- ALB의 경우 ALB 또한 Public하게 공개 되어야 하며, 이 경우 백엔드 EC2는 프라이빗이 될 수 있다.

## **[SAA/DVA] CloudFront - Geo Restriction**
**정리**

- CloudFront는 지리적 제한(Geo Restriction)을 설정할 수 있다.
- Client가 CloudFront 배포를 통해 Origin으로 액세스할 수 있는 국가를 제한하는 것이다.
- 승인된 국가 목록을 정의하는 Allow 목록을 설정하거나 Deny할 국가 목록을 설정할 수 있다.
- 국가는 사용자의 IP를 국가에 매칭하는 제 3자 Geo-IP 데이터베이스를 사용하여 결정된다.
- 사용 사례는 저작권 법률을 준수해 콘텐츠 액세스를 제어하는 것이다.

## **CloudFront Reports, Logs and Troubleshooting**
**정리**

- CloudFront는 Origin으로의 모든 요청을 로그로 기록하여 지정한 로깅 S3 버킷으로 보낸다.
- 사용자가 CloudFront URL을 통해 웹 사이트에 액세스하고 각 Region 별 Edge Location이 로그 파일 또는 Distribution 로그 데이터를 S3 버킷으로 보내는 것이다. 이렇게 설정하면 CloudFront Distribution에 연결된 Origin 버킷과 로그 파일을 보내는 로그 버킷이 있는 것이다.
- 추가적인 Distribution을 설정할 때 로그 버킷 내에 접두사를 추가해 로그를 분리할 수 있다.
- CloudFront는 여러가지의 report가 있다.
  - Cache Statistics report
  - Popular Objects report
  - Top Referrers
  - Usage report
  - Viewers report
- report를 생성하려면 CloudFront는 액세스 로그 데이터를 사용하지만 액세스 로그를 활성화해 S3로 전송하지 않아도 report가 자동으로 생성된다.
- Trouble Shooting
  - S3나 Origin 서버에서 반환된 HTTP 4XX 및 5XX 상태 코드를 전체 캐시에 저장한다. Origin에 파일이 없어도 응답이 캐시되며, 4xx는 사용자가 기본 버킷에 액세스할 수 없거나(403), 객체가 존재하지 않음(404)을 의미한다. 5xx는 게이트웨이 문제를 나타낸다.
- 콘솔에서 CloudFront 배포의 로깅 설정을 확인할 수 있고, 기존에 생성한 S3 버킷을 선택하고 접두사를 지정해 버킷에 로그를 전송할 수 있다. 액세스 로그를 Athena와 같은 서비스를 사용해 분석할 수도 있다.


## **CloudFront Caching - Deep Dive**
**정리**

- CloudFront는 여러 기준에 따라 캐싱할 수 있다.
  - 헤더
  - 세션
  - 쿠키
  - 쿼리 문자열 매개변수
- 캐시는 전 세계 CloudFront Edge Location에 존재하고, 클라이언트가 Edge Location에 요청을 보내면 데이터가 캐시되어 있다면 헤더와 쿠키, 캐시의 TTL에 따라 캐시에서 데이터를 제공한다.
- 데이터가 캐시에 없으면 요청을 오리진으로 전달하고 데이터를 가져와 클라이언트에 전송하고 결과를 캐싱한다.
- Origin 요청을 최소화하려면 캐시 적중률을 최대화해야 한다.
- 헤더를 사용해 TTL 을 제어할 수 있다. 제어할 수 있는 헤더는 Cache-Control 헤더와 Expires 헤더이다.
- CreateInvalidation API를 사용해 캐시의 일부를 무효화할 수 있다.
- 각각에 대한 캐싱 동작을 자세히 살펴보자
  - Headers
    - 클라이언트가 CloudFront 배포에 HTTP 요청을 보내면 헤더도 함께 전달된다.
    - 헤더에는 Host, User-Agent, Date, Authorization, Keep-Alive, Accept-Ranges 등등이 있다.
    - 이 헤더에 대해 세 가지 방식으로 행동(Behavior)을 지정할 수 있다.
      - 모든 헤더를 오리진으로 전달: 이 경우 캐싱 되지 않고 모든 요청이 오리진으로 간다. CloudFront를 캐싱용으로 사용하지 않으므로 TTL은 0으로 설정해야 한다.
      - Whitelist의 헤더만 전달: 이 경우 지정된 헤더의 모든 값을 기반으로 캐싱된다.
      - 헤더를 전달하지 않는 경우: 기본 헤더만 전달되고 요청 헤더 기반 캐싱은 수행되지 않는다. 이 경우 헤더가 요청에서 제거되므로 가장 높은 캐싱 성능을 제공한다.
    - CloudFront Caching - Whitelist
      - 화이트리스트의 경우 Host와 Authorization 헤더를 화이트리스트에 포함시키고, 이러한 헤더만 오리진으로 전달되고 이 시점에서 캐싱이 발생한다.
      - 클라이언트에서 오리진까지 전달되는 헤더 값이 적기 때문에 캐싱할 값이 적어져 캐싱 성능이 향상도니다.
      - 동일한 요청에 동일한 헤더가 있으면 CloudFront가 직접 응답할 수 있다.
    - Origin Headers vs Cache Behavior
      - Origin Custom 헤더는 캐싱 용도가 아니며 오리진에 헤더를 전달하는 용도이다. 
      - 그러나 Caching Behavior는 캐싱 관련 설정이며, 오리진으로 전달하고 캐싱할 헤더 목록이 포함된다. 
      - CloudFront-is-desktop-viewer나 CloudFront-is-mobile-viewer 헤더를 화이트리스트에 포함하여 오리진으로 전달할 수 있음
    - CloudFront Caching - TTL
      - 원하는 경우 오리진에서 헤더로 응답해야 한다.
      - 헤더는 Cache-Control: max-age이거나 Expires가 될 수 있지만, Cache-Control: max-age 헤더를 오리진에서 반환하는 것이 최신 표준이자 가장 좋은 방법이다.
      - 오리진에서 항상 Cache-Control: max-age 헤더를 반환하면 TTL을 헤더로 직접 제어하고 애플리케이션으로 제어할 수 있다.
      - TTL에 최소/최대 TTL을 설정하고 싶다면 Object Caching 설정에서 사용자가 지정할 수 있다. Cache-Control이 없으면 기본 TTL이 적용된다.
      - 정리하자면, Behavior 설정에서 객체 캐싱에 대해  Use Origin Cache Header를 선택하는 경우 애플리케이션에서 캐시를 설정하게 되고 최소 TTL, 최대 TTL, 기본 TTL을 사용자 지정할 수 있다. 오리진의 응답에 Cache-Control 헤더가 없으면 기본 TTL 값이 적용된다. Cache-Control 헤더가 최소 TTL값 보다 작으면 최소값이 적용되고, 최대값보다 크면 최대값이 사용된다.
    - CloudFront Cache Behavior
      - 쿠키는 특정 헤더이지만 쿠키라는 헤더 이름에 많은 키-값 쌍이 포함된다.
      - 예를들어 username=John Doe, location=UK, lang=eng 등 쿠키가 헤더에 포함되어 있을 수 있다.
      - 쿠키에도 세 가지 설정이 있다.
        - 쿠키를 처리하지 않는 것(기본값): 캐싱이 쿠키를 기반으로 하지 않고 CloudFront에서 오리진으로 쿠키를 전달하지 않는다.
        - Whitelist의 쿠키만 전달: 지정된 큌 값을 기반으로 캐싱된다.
        - 모든 쿠키를 전달: 이 경우 캐싱 성능이 가장 나빠지지만, 애플리케이션에서 모든 쿠키를 사용할 수 있다.
      - 애플리케이션에서 쿠키를 어떻게 사용하는지에 따라 가장 좋은 캐싱 성능을 위해 CloudFront를 적절히 설정해야 한다.
    - Query Strings
      - GET 요청을 할때 ?border=red&size=large와 같은 쿼리 문자열이 URL에 포함되어 있을 때의 경우를 예로 들어보자.
      - 여기에도 세 가지 옵션이 있다.
        - 처리하지 않는것 (기본값): 쿼리 문자열이 오리진으로 전달되지 않고 캐싱 기준이 되지 않는다.
        - Whitelist에 포함된 쿼리 문자열만 전달: 화이트리스트 쿼리 문자열을 기반으로 캐싱
        - 모든 쿼리 문자열 매개변수 전달: 캐싱 성능이 가장 나빠지는데 값이 많기 때문이다.
- 캐싱 적중률 최대화하는 방법
  - 정적 컨텐츠와 동적 컨텐츠 배포를 분리: CloudFront 계층에서 정적 요청은 CloudFront를 통해 정적 컨텐츠 S3 버킷으로 전송. 이 경우 헤더, 쿠키, 세션 캐싱 규칙을 사용하지 않으므로 캐시 적중률이 극대화되며,
    동적 컨텐츠의 경우 ALB + EC2 인스턴스나 API GW + 람다 등 애플리케이션으로 전달한다. 이 경우 헤더와 쿠키를 사용할 수 있고, 이때 CloudFront 배포를 애플리케이션에 맞게 설정하면 캐시 효율을 최대화할 수 있다.
  - CloudWatch 메트릭 CacheHitRate 확인
  - Cache-Control: max-age 헤더와 같은 캐시 보관 기간 지정
  - 최소한의 헤더, 쿠키, 쿼리 문자열 매개변수 지정
- 시험에서 CloudFront의 오리진 헤더와 캐시 동작에 대한 질문이 있을 수 있다.

## **CloudFront with ALB Sticky Sessions**
**정리**

- Sticky Session을 활성화하여 ALB와 CloudFront를 사용하는 방법
- 예시가 있다. ALB와 Target Group이 있는 상황에서 Sticky Session을 활성화 했다. CloudFront를 Edge Location과 함께 설정했으며 잘 작동하도록 원할 때 세션 어피니티를 제어하는 쿠키를 Origin으로 전달해 세션 어피니티가 계속 작동하도록 하면 해결된다.
- 세션 쿠키를 전달하지 않으면 ALB로 전달되지 않아 세션 어피니티가 작동하지 않는다.
- 구체적으로는 사용자가 GET 요청을 보내면서 쿠키(AWSALB=값)를 전달하고, CloudFront는 이 AWSALB 쿠키를 Whitelist에 포함시켜야한다. 그러면 쿠키가 ALB로 전달된다.
- ALB는 쿠키를 보고 같은 사용자의 요청을 항상 동일한 EC2 인스턴스로 보내게 되고, 다른 사용자가 요청을 보내면 쿠키 이름은 AWSALB로 같지만 값은 다르기에 ALB가 다른 EC2 인스턴스로 전달한다.
- ALB에서 Sticky Session을 사용하고 CloudFront와 연동할 때는 모든 쿠키 또는 해당 쿠키를 화이트리스트에 포함시켜야 한다.
- 보안 조치로 캐시된 요청의 TTL을 인증 쿠키보다 짧게 설정하는 것도 좋다.

## **[SAA/DVA] RDS Overview**
**정리**

- RDS는 Relational Database Service의 약자, 데이터베이스를 조회하는 구조화된 언어이며 많은 엔진에서 사용되고 있는 SQL을 질의 언어로 사용하는 데이터베이스를 위한 관리형 데이터베이스 서비스이다.
- AWS에서 관리하는 데이터베이스 엔진 유형은 PostgreSQL, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM DB2, 그리고 AWS 독점 데이터베이스인 Aurora가 있다.
- EC2 인스턴스 위에서 직접 데이터베이스를 배포하는 대신 RDS를 사용하는 이유는?
  - RDS는 관리형 서비스여서 AWS에서 단순 데이터베이스 외에도 많은 서비스를 제공한다. 예를들어 데이터베이스 프로비저닝이 완전 자동화되어 있고 기본 운영체제 패치도 자동이다.
  - 지속적인 백업이 이루어진다.
  - 특점 시점으로 복원(Point In Time Restore)을 할 수 있다.
  - 데이터베이스 성능을 모니터링할 수 있는 대시보드도 있다.
  - 읽기 성능 향상을 위해 읽기 복제본을 설정할 수 있다.
  - Multi-AZ 설정으로 재해 복구에 도움이 된다.
  - 업그레이드를 위한 유지관리 기간이 있다.
  - 인스턴스 유형 증가로 수직 확장, 읽기 본제본 추가로 수평 확장이 가능하다.
  - 스토리지는 EBS(gp2 또는 io1 볼륨)에 백업된다.
  - 관리형 서비스여서 AWS에서 제공하는 서비스만 이용 가능하고 RDS 인스턴스에 SSH로 접속할 수는 없다.
  - 이 같은 기능들을 일반 인스턴스에서 직접 설정해야 하므로 RDS를 사용하는 것이 나쁘지 않다.
- 시험에서 나올 수 있는 기능이 RDS Storage Auto Scale이다.
  - RDS 데이터베이스를 생성할 때 스토리지의 크기를 지정해야 하는데, 데이터베이스 사용량이 많아져 가용 공간이 부족해질 수 있다.
  - 이 기능을 활성화하면 RDS에서 자동으로 스토리지를 확장하고, 데이터베이스를 중지하고 수동으로 스토리지를 늘릴 필요가 없다.
  - 애플리케이션에서 RDS 데이터베이스에 많은 읽기/쓰기 작업을 수행하며 특정 임계값에 도달하면 스토리지가 자동으로 확장되는 기능.

## **[SAA/DVA] RDS Multi AZ vs Read Replicas**
**정리**

- Read Replicas 와 Multi AZ의 차이점을 명확히 이해하고 사용 사례를 파악하는 것이 매우 중요하다.
- Read Replica(읽기 복제본)
  - 애플리케이션에서 RDS 데이터베이스 인스턴스로 읽기/쓰기 작업을 수행한다고 가정해보자.
  - 주 데이터베이스 인스턴스의 읽기 요청이 너무 많아 더 이상 확장할 수 없다면 최대 15개의 읽기 복제본을 생성할 수 있다.
  - 복제본은 동일 가용 영역, 다른 가용 영역 또는 다른 리전에 위치할 수 있다.
  - 주 RDS 인스턴스와 읽기 복제본 사이에는 비동기 복제가 이루어진다. 읽기 작업은 결국 비동기 복제로 인해 일관된 작업이다. 예를 들어 애플리케이션이 읽기 복제본에서 데이터를 읽기 전 복제가 완료되지 않았다면 일부 데이터가 누락될 수 있다.
  - 복제본은 독립(Master) 데이터베이스로 승격할 수도 있다. 복제본 중 하나를 선택해 독립 데이터베이스로 승격하고 쓰기 작업을 수행할 수 있다. 이후에는 복제 메커니즘에서 분리되어 독자적인 라이프사이클을 가진다.
  - Read Replicas를 사용하려면 애플리케이션에서 RDS 클러스터의 모든 읽기 복제본 목록을 활용할 수 있도록 connection string을 기존과 다르게 업데이트 해야한다.
  - 읽기 복제본 사용사례
    - 주로 A 애플리케이션에서 사용하고 있는 Master DB의 데이터를 다른 애플리케이션에서 다른 업무로 사용하고자할 때 사용한다.(데이터 보고 및 분석 등) 
    - 이 경우 다른 애플리케이션의 트래픽을 받기에 Master DB에 과부하가 걸리는 것을 비동기 복제가 이뤄진 읽기 복제본으로 방지하기 위해서이다. 
  - 읽기 복제본은 SELECT 문과 같은 읽기 전용 문장만 사용 가능하다. INSERT, UPDATE, DELETE와 같이 데이터베이스를 변경하는 작업은할 수 없다.
  - 읽기 복제본은 다른 AZ에 있는 읽기 복제본에 대해 비동기 복제 트래픽은 요금이 부과되지 않는다. 하지만, 다른 리전에 읽기 복제본이 있는 경우 리전 간 복제 트래픽에 대한 네트워크 비용이 발생한다.
- Multi AZ
  - Multi AZ는 주로 재해 복구를 위해 사용된다.
  - 예를들어 AZ A의 마스터 데이터베이스 인스턴스로 읽기/쓰기 작업을 수행하고, AZ B의 Standby 인스턴스로 동기식 복제가 이뤄진다.
  - 동기식 복제: 마스터에 대한 모든 변경 사항이 동기식으로 대기 인스턴스에 복제된다.
  - 단일 DNS Name: 애플리케이션은 하나의 DNS 이름으로 접속하여 마스터에 문제가 생기면 자동으로 Standby 데이터베이스로 fail over 된다. 이렇게 가용성이 향상되어 Multi AZ라고 부른다.
  - Fail Over: 애플리케이션 관점에서는 수동 개입 없이 자동으로 데이터베이스 연결을 시도하면 새 마스터로 페일오버 된다. Multi AZ는 확장을 위한것이 아니며, 페일오버할 목적으로만 존재한다.
  - 확장에 사용되지 않는다: Multi AZ에 있는 RDS 인스턴스는 Standby 데이터베이스이므로 아무도 읽거나 쓸 수 없다. 단순히 마스터 데이터베이스에 문제가 생길 경우를 대비한 장애 조치로만 존재한다.
  - 읽기 복제본도 원한다면 Multi AZ로 설정할 수 있다.
  - 시험에 나올 수 있는 질문
    - RDS 데이터베이스를 단일 AZ에서 Multi AZ로 전환하는 방법이다. 다운타임 없이 작업이 이루어진다는 점을 알아야하고, 데이터베이스를 중지할 필요 없이 Multi AZ를 활성화하기만 하면 된다.
    - 내부적으로는 RDS에서 자동으로 메인 데이터베이스의 스냅샷을 찍고, 이 스냅샷으로 새 Standby 데이터베이스를 복원한다. Stanby 데이터베이스가 복원되면 두 데이터베이스 간 동기화가 이뤄지고, Standby 데이터베이스가 메인 데이터베이스를 따라잡게 된다.


## **RDS Multi AZ – Failover Conditions**
**정리**

- Multi AZ에서 기본 DB에서 대기 DB로 장애 조치가 발생하는 조건
  - 기본 DB에 장애가 발생한 경우
  - 기본 DB 운영체제에서 소프트웨어 패치 중일 때
  - 네트워크 연결 문제로 기본 DB에 접근할 수 없을 때
  - 기본 DB 인스턴스를 수정할 때 (예: 인스턴스 유형 변경)
  - 기본 DB가 응답하지 않거나 비정상적일 때
  - underlying 스토리지 장애 발생 시
  - 가용 영역 중단 시
- 수동으로 "Reboot with failover" 옵션을 사용해 DB 인스턴스 장애 조치를 초기화할 수도 있다.
- 시험에서 나오는 문제

## **RDS Proxy**
**정리**

- 먼저 RDS 프록시가 필요한 이유를 이해해야 함
- 예를 들어 람다 함수가 있고 RDS 데이터베이스에 액세스하려는 경우 기본적으로 함수는 VPC 외부에서 실행되며, Public 서브넷에 있는 리소스에만 액세스 가능하다. 
- 따라서 Private RDS 데이터베이스나 Private ElastiCache 또는 Private Internal ELB의 경우 액세스 불가하다.
- 기본 Lambda 배포에서는 Lambda가 Public Endpoint 또는 DynamoDB와 통신할수 있는데, Private RDS가 있는 Private Subnet이 있는 경우 Lambda는 접근할 수 없다.
- 그래서 Lambda가 AWSLambdaVPCAccessExecutionRole와 같은 Role을 지정하면 Lambda는 자체 보안 그룹과 연결할 ENI를 갖게 되고, 프라이빗 서브넷 내에서 RDS 데이터베이스에 액세스 가능해진다.
- 그리고 이 액세스 과정에서 동시에 많은 Lambda 함수가 있는 경우 RDS 데이터베이스에 많은 연결이 있을 수 있다. 결국 TooManyConnection Exception이 발생할 수 있다.
- **그래서 RDS Proxy라는 것을 배포할 수 있다.**
- RDS Proxy는 유휴 연결을 정리하고 RDS Proxy가 RDS 데이터베이스에 대한 연결 풀을 관리하게 된다.
- 예를 들어 Private Subnet에 RDS가 있고 RDS Proxy가 Public Subnet에 있을 때 함수가 Public Subnet에 있는 RDS Proxy를 통해서 RDS에 연결할 수 있다. 따라서 위의 방법처럼 VPC 연결이 필요하지 않는다.
- 여러개의 Lambda 함수가 있더라도 RDS Proxy는 Connection Pooling이라는 작업을 수행해 RDS 인스턴스에 하나의 연결만 하게 된다.
- 이 방법에는 IAM 인증이 지원되며 프록시에서 RDS 데이터베이스 인스턴스로 IAM 세부 정보를 전달할 수 있다. 사용자 이름과 비밀번호를 사용한 데이터베이스 인증 또한 지원된다.
- RDS Proxy에 더 많은 연결이 이뤄질수록 더 많이 확장되어 RDS Proxy 계층의 자동 확장이 된다.
- RDS 프록시는 설정 시 여러 옵션이 있다.
  - Idle client connection timeout
    - 응용 프로그램이 몇 분 이상 연결을 사용하지 않았다면 연결을 정리하는 옵션
    - 프록시가 connection을 어떻게 정리하는지에 대한 옵션이다.
  - Connection pool maximum connections
    - 프록시에서 Main 데이터베이스로의 최대 연결의 백분율을 설정할 수 있다.
  - Secrets manager secret
    - RDS의 사용자 이름과 암호를 secret으로 제공해줘야 함
  - IAM 역할
    - IAM 인증을 활성화해서 IAM으로 연결할 수 있는 옵션
    - IAM 인증을 사용하거나 데이터베이스 사용자 이름과 암호를 사용할 수 있음
  - enhanced logging
    - 데이터베이스로 전달되는 모든 쿼리의 로깅을 활성화할 수 있지만, 이는 프록시를 느리게 만들기 때문에 24시간 후에 비활성화 된다.


## **RDS Parameter Groups**
**정리**

- RDS Parameter Group은 데이터베이스 엔진을 사용자 정의할 수 있도록 파라미터를 지정하는 것
- 두 종류가 있다. 즉시 적용되는 동적 파라미터, 데이터베이스 인스턴스가 다시 부팅된 후에만 적용되는 정적 파라미터
- 또한 데이터베이스 인스턴스에서 파라미터 그룹을 전체적으로 다른 파라미터 그룹으로 변경할 수도 있다. 이 경우 데이터베이스를 다시 부팅해야 하지만, 사용자 정의 그룹으로 변경하는 것은 매우 편리하다.
- 시험 관점에서 반드시 알아야 할 파라미터
  - rds.force_ssl=1 : PostgreSQL 및 SQL 서버의 경우 이 값을 1로 설정해서 SSL 연결을 강제할 수 있다.
  - require_secure_transport=1 : MySQL과 MariaDB에는 rds.force_ssl와 비슷한 파라미터인 require_secure_transport로 SSL 연결을 강제한다.

## **RDS Backups and Snapshots**
**정리**

- RDS에서 백업과 스냅샷의 차이
  - 백업
    - 백업은 지속적으로 이루어지며 Point In Time Recovery(시점 복구)를 허용한다.
    - 백업은 maintenance windows에서 이루어진다.
    - 데이터베이스 인스턴스를 삭제할 때는 수행된 모든 자동 백업을 유지할 수 있다.
    - 백업에는 보존 기간이 있으며, 0일부터 35일까지 설정할 수 있다. 따라서 지난 35일 동안 중 특정 시점으로 되돌아가고 싶다면 백업을 사용할 수 있다.
    - 백업을 비활성화하려면 백업의 보존 기간을 0으로 설정하면 된다.
  - 스냅샷
    - 스냅샷은 IO 작업을 수행하고, 스냅샷이 생성되는 동안 데이터베이스가 몇 초에서 몇 분동안 중지된다.
    - Multi AZ가 활성화된 경우 스냅샷은 마스터에서 진행되는 것이 아니라 Standby 인스턴스에서 수행된다.
    - 스냅샷은 첫 번째 스냅샷만 Full 백업이 수행되고, 그 이후로는 증분 백업이다.
    - 스냅샷은 복사와 여러 계정 간 공유할 수 있다.
    - 수동 스냅샷은 만료되지 않는다. 따라서 DB를 삭제할 때 최종 스냅샷을 촬영할 수 있다.
  - 백업이든 스냅샷이든 자동 백업 또는 데이터베이스 스냅샷에서 복원하게 되면 새로운 데이터베이스 인스턴스가 생성된다.
  - 스냅샷 공유에 대해 이야기 해보자
    - 백업은 공유할 수 없지만 스냅샷은 공유할 수 있다. EBS 스냅샷을 공유하는 방법과 매우 유사하다.
    - 수동 스냅샷은 공유가 가능하지만, 자동 스냅샷은 공유할 수 없다.
    - 공유되지 않은 암호화된 스냅샷은 다른 계정과 공유할 수 있다.
    하지만, 암호화된 스냅샷을 공유하려면 해당 스냅샷과 관련된 CMK(Customer Managed Key)도 같이 공유해야 한다.
    또는 다른 계정이 해당 스냅샷에 대한 액세스 권한을 얻으려면 CMK에 대한 권한이 있어야한다.

## **RDS Events and Logs**
**정리**

- RDS 이벤트 & RDS 이벤트 Subscription
  - RDS는 데이터베이스 인스턴스, 스냅샷, 파라미터 그룹 또는 보안 그룹의 변경 사항 등 다양한 이벤트 관련 기록을 유지한다.
    - 예를 들어 데이터베이스 상태가 pending에서 running으로 변경된 것과 같은 것이다.
  - RDS 이벤트 Subscription의 경우 SNS Topic을 이용해 일부 이벤트나 모든 이벤트를 알리도록 설정할 수 있다.
  - 특정 이벤트 소스나 카테고리를 지정해 더 세부적인 유형의 이벤트를 SNS로 보낼 수도 있다.
  - EventBridge에서 이러한 이벤트를 받을 수 있고, Rule을 설정하면 RDS 이벤트에 반응한다.
    - 예를 들어 DB 인스턴스의 백업 이벤트가 RDS 이벤트로 전송되면 SNS 알림을 트리거하거나 EventBridge 이벤트를 트리거할 수 있다.
- RDS Log file
  - RDS 데이터베이스 인스턴스에는 일반 로그, 감사 로그, 오류 로그, 슬로우 쿼리 로그 등이 있다.
  - 이러한 로그를 CloudWatch Logs로 전송할 수 있고, CloudWatch Logs에 메트릭 필터를 적용할 수 있다.
  - 예를 들어 Error 키워드를 검색하고, 빈도수를 체크해 너무 많이 또는 자주 발생하면 CloudWatch 경보를 설정할 수 있다.
  - CloudWatch 경보가 SNS 주제로 경고를 보내고 SNS 주제에서 DB 관리자에게 알림을 보낼수도 있다.
  - 데이터베이스 이벤트 뿐만 아니라 로그 자체를 기반으로 RDS 데이터베이스에 대한 경고 및 이벤트 처리를 수행할 수 있다는 의미이다.

## **RDS & CloudWatch**
**정리**

- CloudWatch에서는 다음과 같은 기본 메트릭을 얻을 수 있다.
  - DatabaseConnections
  - SwapUsage
  - ReadlOPS / WritelOPS
  - ReadLatency / WriteLatency
  - ReadThroughPut / Write ThroughPut
  - DiskQueueDepth
  - FreeStorageSpace
  - 위 메트릭을 통해 여러 문제를 해결 가능하다. 예를 들어 지연 시간이 높으면 문제가 있거나, 읽기 IOPS가 급격히 증가하면 EBS 볼륨의 IOPS 한도에 도달하거나, DiskQueueDepth가 너무 높으면 많은 작업이 실행되기를 기다리고 있다는 것을 의미한다.
- 또한 향상된 모니터링(Enhanced Monitoring)을 활성화할 수 있다.
  - 향상된 모니터링은 일반적으로 DB 인스턴스에서 실행되는 에이전트로부터 수집되는 메트릭
  - CPU
  - 메모리
  - 파일 시스템
  - 디스크 IO 메트릭
  - 등등 50가지 이상의 새로운 메트릭이다.
  - 기본적으로 비활성화이고 따로 활성화 해줘야한다.
- per second granularity는 모니터링을 얼마나 세밀하게 할 것인지 정할 수 있다.

## **RDS Performance Insights**
**정리**

- RDS Performance Insights를 사용하면 데이터베이스 성능을 시각화하고, 데이터베이스에 영향을 미치는 이슈를 분석할 수 있다.
- 부하를 네 가지 다른 유형의 메트릭으로 필터링할 수 있다.
  - Waits
    - 병목 현상이 발생하는 리소스를 보여줌
    - CPU, IO 또는 lock이 될 수 있다.
    - 다른 유형의 인스턴스로 업그레이드 해야하는지, CPU 최적화, IO 최적화할 지를 알아야할 경우 Waits 항목이 가시화 해줄 것이다.
  - SQL 문
    - 데이터베이스를 차단하거나 느리게 만드는 SQL 문을 식별할 수 있으며, 원인 파악을 위해 SQL 문을 실행하는 팀 또는 애플리케이션 관련에 연락해 최적화 가능하다.
  - Hosts
    - 호스트 별로 필터링하고, 그룹화하여 데이터베이스를 많이 사용하는 서버 또는 애플리케이션 서버를 찾아 조치를 취할 수 있다.
    - 액세스를 차단하거나 왜 이렇게 데이터베이스를 많이 사용하는 지 얘기를 통해 이해할 수 있다.
  - Users
    - Username을 사용해 데이터베이스를 가장 많이 사용하는 사용자를 찾을 수 있다.
  - DBLoad
    - 데이터베이스 엔진에 대한 활성 세션 수
- 위의 모든 것들은 데이터베이스 부하를 주는 SQL 쿼리를 보고 문제를 해결할 수 있도록 한다.

## **[SAA/DVA] Amazon Aurora**
**정리**

- Aurora는 AWS의 고유 기술이다. 오픈 소스가 아니지만 PostgreSQL과 MySQL과 호환되도록 만들어졌다.
- Aurora는 MySQL RDS보다 5배, Postgres RDS보다 3배의 성능 향상을 얻는다.
- Aurora 스토리지는 자동으로 확장된다.
  - 기본 10GB에서 데이터를 더 넣을수록 자동으로 128TB까지 자동으로 확장된다.
  - 자동으로 확장되기 때문에 DB 또는 시스템 운영자는 디스크 모니터링을 하지 않아도 된다.
- Aurora는 최대 15개의 읽기 전용 복제본을 가질 수 있다. 복제 프로세스는 RDS MySQL보다 빠르고, 일반적으로 sub 10ms 복제 지연이 있다.
- Aurora에서 장애 조치는 수행하면 즉시 실행되어 MySQL RDS의 Multi-AZ에서의 장애 조치보다 훨씬 빠르다.
- 고가용성이 네이티브하게 지원된다.
- 비용은 RDS 기준 약 20%정도 비싸지만, 규모에 따라 더 효율적일수 있다.
- High Availability and Read Scaling
  - Aurora는 항상 3개의 가용 영역에 걸쳐 6개의 데이터 복사본을 저장한다. 
  - 쓰기 작업에는 6개 중 4개의 복사본이 필요하므로, 하나의 가용 영역이 중단되어도 문제가 없다. 
  - 읽기 작업의 경우 6개 중 3개의 복사본만 필요하므로 읽기 작업을 위한 고가용성이 보장된다.
  - Self healing 프로세스라는 기능을 이용해 데이터가 손상되거나 잘못된 경우 백엔드의 Peer-to-Peer 복제를 통해 자체적으로 치유된다.
  - 단일 볼륨에 의존하지 않고 수백 개의 볼륨에 의존해 리스크가 크게 감소한다. 사용자가 관리할 필요 없지만 백엔드에서 이런 작업이 이뤄지고 있다.
  - 3개의 가용 영역이 있을 때 한 데이터를 쓰면 6개의 복사본이 생긴다. 그리고 또 다른 데이터를 쓰면 6개의 복사본이 또 만들어진다. 계속적으로 6개의 복사본이 생성된다. 데이터들은 다른 볼륨에 분산되어 저장되며, 스트라이핑 기술이 매우 효율적으로 적용된다.
  - Aurora는 RDS의 Multi-AZ와 유사하다. 기본적으로 쓰기 작업을 처리하는 마스터 인스턴스가 하나만 있고, 마스터 인스턴스가 작동하지 않으면 평균 30초 미만의 시간 내에 Fail-over가 발생한다.
  - 마스터 인스턴스 위에 최대 15개의 읽기 전용 복제본을 둘 수 있으며, 모두 읽기 요청을 서비스한다.
  - 읽기 전용 복제본 중 하나가 마스터 인스턴스 장애 시 새로운 마스터로 승격할 수 있다.
  - 읽기 전용 복제본은 교차 리전 복제본을 지원한다.
  - 정리하자면 마스터 인스턴스 하나, 다수의 읽기 전용 복제본, 복제/자체 치유/자동 확장이 되는 작은 블록 단위의 스토리지
- 클라이언트가 있을 때 Aurora 클러스터가 어떻게 작동하는지?
  - 10GB에서 128TB까지 자동 확장되는 공유 스토리지 볼륨에서 마스터 인스턴스만이 이 스토리지에 쓰기를 한다.
  - 마스터 인스턴스는 변경되고 Fail Over 될 수 있기 때문에 Aurora는 Writer Endpoint(라이터 엔드포인트)라는 것을 제공한다. 이는 항상 마스터 인스턴스를 가리키는 DNS 이름이다.
  - 마스터 인스턴스가 Fail Over 되어도 클라이언트는 계속 라이터 엔드포인트에 접속하면 자동으로 새로운 마스터 인스턴스로 연결된다.
  - 많은 수의 읽기 전용 복제본도 자동 확장으로 인해 애플리케이션에서 읽기 복제본의 위치와 URL을 추적하기 어려울 수 있다. Reader Endpoint(리더 엔드포인트)를 이용한다. 라이터 엔드포인트와 똑같이 연결 로드 밸런싱을 지원하며 모든 읽기 복제본에 자동으로 연결된다. 따라서 클라이언트가 리더 엔드포인트에 접속하면 읽기 복제본 중 하나에 연결되고, 이를 통해 로드 밸런싱이 이뤄진다.
  - 로드 밸런싱은 Connection 수준에서 이뤄지지 Statement 수준에서는 이뤄지지 않는것을 유의해야 한다.
- 몇 가지 주의해야할 점이 있다.
  - Aurora의 심층 기능을 기억해야한다.
    - Automatic fail-over
    - Backup and Recovery
    - Isolation and security
    - Industry compliance
    - Push-button scaling by auto scailing
    - Automated Patching with Zero Downtime
    - Advanced Monitoring
    - Routine Maintenance(정기적 유지관리)
    - Backtrack: restore data at any point of time without using backups
      - 예를 들어 "어제 오후 4시 상태로 돌려놔" 또는 "5시로 돌려놔" 등의 요청으로 특정 시점의 데이터로 복원할 수 있다.

## **Amazon Aurora - Backups**
**정리**

- Aurora는 백업, Backtrack, Restore가 있다.
- Automatic Backup
  - 1일 부터 35일까지 기간을 설정하고 자동 백업을 진행한다. 자동 백업은 비활성화 할 수 없다.
  - PITR(Point-In-Time Recovery)를 수행해 현재 시간에서 5분 이내에 DB 클러스터를 복원할 수 있게 한다.
  - RDS와 마찬가지로 새로운 DB 클러스터를 생성하여 복원된다.
- Aurora Backtracking
  - 데이터베이스를 최대 72시간 전후로 되감을 수 있다.
  - Backtracking은 백업과 달리 새 클러스터를 생성하지 않고 같은 위치에서 복원된다.
  - 현재는 Aurora MySQL에서만 지원된다.
- Aurora Database Cloning
  - 새로운 데이터베이스 클러스터를 만든다. 초기에는 원본 클러스터와 동일한 DB 클러스터 볼륨을 사용하지만, 그 후에는  쓰기 시 데이터가 새 볼륨으로 복사되는 copy-on-write 프로토콜이 사용된다.
  - copy-on-write를 사용하면 초기 복제본을 생성하기 위해 최소한의 추가 공간을 사용하는 이점이 있음
  - 그래서 프로덕션 데이터를 사용해 테스트 환경을 만들고자할 때 사용한다.
  - 한 번의 클릭으로 새로운 환경에 액세스할 수 있어 매우 편리하다.
  - Cloning에 대한 이해를 돕기 위한 [링크](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html#Aurora.Managing.Clone.Protocol)

## **[SAA/DVA] RDS & Aurora Security**
**정리**

- RDS와 Aurora 보안에 관해 알아보자
- At-rest 암호화가 될수 있다.
  - 데이터베이스 최초 실행시 설정되는 데이터 암호화를 통해 볼륨에 있는 데이터가 암호화된다. 이를 위해 마스터와 모든 복제본은 KMS를 사용해 암호화된다.
  - 만약 마스터 데이터베이스를 암호화하지 않는다면, 읽기 전용 복제본은 암호화할 수 없다.
  - 이미 존재하는 암호화되지 않은 데이터베이스를 암호화하려면, 암호화되지 않은 데이터베이스에서 스냅샷을 만든 다음 그 스냅샷을 암호화된 데이터베이스로 복원해야한다.
- 전송 중 암호화 (In-Flight Encryption)
  - 클라이언트와 데이터베이스 간 암호화이며, RDS와 Aurora의 각 데이터베이스는 기본적으로 전송 중 암호화가 가능하다.
  - 클라이언트는 AWS에서 제공하는 TLS 루트 인증서를 사용해야 한다.
- IAM Authentication
  - 인증에 대해서는 전통적인 사용자 이름과 비밀번호 조합을 사용할 수 있다.
  - 또한 AWS 서비스이므로 IAM 역할을 사용해 데이터베이스에 연결할 수도 있다.
- Security Group을 사용해 데이터베이스에 대한 네트워크 액세스를 제어할 수 있다.
  - 특정 포트, IP, 보안 그룹을 허용하거나 차단할 수 있다.
- RDS와 Aurora는 관리형 서비스이므로 SSH 액세스가 없다.
  - AWS의 RDS Custom Service를 사용하는 경우는 예외이다.
- 감사 로그를 활성화할 수 있다.
  - 시간에 따른 RDS와 Aurora의 쿼리 및 데이터베이스 활동을 파악할 수 있도록 활성화할 수 있다.
  - 시간이 지나면 사라지며, 장기간 보관하려면 AWS의 CloudWatch Logs 서비스로 로그를 전송해야 한다.

## **Amazon Aurora for SysOps**
**정리**

- 각 Read Replica에는 우선 순위를 설정할 수 있다.
  - 0 ~ 15까지 설정 가능
  - 장애 조치 우선 순위를 제어하고자 할 때 도움이 된다.
  - RDS는 우선 순위가 가장 높은(티어가 가장 낮은) Read Replica를 승격 시킨다.
  - replica가 동일한 우선 순위를 가진 경우 크기가 가장 큰 것을 승격 시킨다.
  - 동일한 우선 순위와 동일한 크기를 가진 경우 무작위로 하나를 승격 시킨다.
- RDS MySQL 스냅샷을 Aurora MySQL 클러스터로 마이그레이션할 수 있다.
- Aurora CloudWatch Metric
  - AuroraReplicaLag
    - Primary instance에서 업데이트를 복제할 때의 지연량
    - 데이터를 Aurora 클러스터에 기록할 때 해당 데이터가 복제될 수 있으므로 그에 따른 지연이 발생할 수 있다.
  - AuroraReplicaLagMaximum/AuroraReplicaLagMinimum
    - Primary instance와 DB 클러스터의 Aurora DB 인스턴스 사이에 발생하는 최대/최소 지연시간
    - ReplicaLag가 높은 경우 최종 일관성에 의해 사용자가 데이터를 가져오는 복제본에 따라 다른 경험을 할 수 있다. 
    - 예를 들어 사용자가 장바구니에 항목을 추가하고 새로고침을 하면 항목이 누락될 수 있다.
  - DatabaseConnections
    - 데이터베이스 인스턴스에 대한 현재 연결 수를 의미한다.
  - InsertLatency
    - INSERT 작업의 평균 지속 시간

## **[SAA/DVA] ElastiCache Overview**
**정리**

- ElastiCache Overview
  - ElastiCache는 관리형 Redis 또는 Memcached를 제공해 캐시 기술을 얻을 수 있다.
  - 캐시는 매우 높은 성능과 낮은 대기 시간을 갖는 In-Memory 데이터베이스이다.
  - 주로 읽기 중심 워크로드로 인한 데이터베이스 부하를 줄이는 데 도움이 된다.
  - 즉, 공통 쿼리가 캐시되므로 데이터베이스가 매번 쿼리되지 않고 캐시를 사용해 이러한 쿼리의 결과를 검색할 수 있다.
  - 또한 애플리케이션의 상태를 ElastiCache에 넣음으로써 애플리케이션을 Stateless 상태로 만드는 데도 도움이 된다.
  - RDS와 마찬가지로 AWS가 운영 체제, 패치, 최적화, 설정, 구성, 모니터링, 장애 복구 및 백업과 같은 유지 보수 작업을 수행한다.
  - ElastiCache를 사용하면 캐시를 활성화하고 단순히 사용하는 것만으로는 충분하지 않고, 데이터베이스 쿼리 전후에 캐시를 조회하도록 애플리케이션을 변경해야 하므로 애플리케이션 코드를 상당히 변경해야 한다.
- ElastiCache Architecture - DB Cache
  - ElastiCache와 RDS 데이터베이스 그리고 애플리케이션이 있다고 가정해보자.
  - 애플리케이션은 ElastiCache에 쿼리를 실행해 해당 쿼리가 이미 수행되었는지 확인하고, 이미 수행 돼 저장된 경우 이를 Cache Hit라고 하고, 저장되지 않은 경우를 Cache Miss 라고 한다.
    - Cache Miss의 경우 DB에서 데이터를 가져와야 하고, 가져오는 과정에서 동일한 쿼리를 수행할 다른 애플리케이션 또는 인스턴스를 위해 데이터를 캐시에 다시 기록한다.
    - Cache Hit의 경우 데이터베이스의 부하를 줄이는데 도움이 된다. 데이터베이스 쿼리를 실행하기 위한 과정을 절약하기 때문이다.
  - Cache의 경우 무효화 전략이 필요하다. 가장 최근의 데이터를 Cache에 유지하기 위해서이다.
- ElastiCache Architecture - User Session Store
  - 애플리케이션 상태를 ElastiCache에 저장해 애플리케이션을 Stateless로 만들 수 있다.
  - 사용자가 애플리케이션에 로그인하면 애플리케이션은 세션 데이터를 ElastiCache에 기록한다. 사용자가 애플리케이션의 다른 인스턴스로 리디렉션 되더라도 ElastiCache에서 세션 캐시를 검색하기 때문에 사용자는 다시 로그인할 필요가 없다.
- Redis vs Memcached
  - Redis의 경우 
    - Multi AZ with Auro-Failover가 있고, 읽기를 확장하고 고가용성을 확보하기 위한 Read Replicas가 있다.
    - AOF Persistence를 사용해 데이터 내구성을 확보하며, 백업 및 복원 기능도 있다.
    - Redis는 데이터 내구성에 중점을 둔다.
    - 집합(Sets) 및 정렬된 집합(Sorted Sets)를 지원해 캐시로서의 기능적 측면도 있다.
    - 정리하자면 Redis는 복제되고 고가용성을 갖춘 지속적인 캐시로 보인다.
  - Memcached
    - 샤딩이라고 불리는 데이터 분할을 위해 다중 노드를 사용하는 방식을 사용한다.
    - 고가용성이 없으며, 복제가 발생하지 않는다.
    - 지속적인 캐시도 아니며, 백업과 복원 기능도 없다.
    - Multi-thread 아키텍쳐이다. memcached는 sharding을 통해 여러 인스턴스가 함께 작동한다.
- 기억해야할 점은 Redis는 고가용성, 백업, 읽기 복제본 등을 지원하지만, Memcached는 데이터 손실을 감수할 수 있는 순수 분산 캐시라는 것이다. 고가용성이나 백업, 복원 기능이 없다.

## **ElastiCache Redis Cluster Modes**
**정리**

- Redis는 두 가지 ElastiCache 복제 유형이 있다.
- ElastiCache Replication: Cluster Mode Disabled
  - 하나의 샤드 안에 모든 데이터가 있고, 하나의 Primary Cache Node와 옵션으로 최대 5개의 Cache Replica node를 설정할 수 있다.
  - Primary node에 장애가 발생했을 때 Replica가 인계받을 수 있다.
  - Cache 간 복제는 동기식으로 진행됨
  - Primary 노드는 읽기와 쓰기에 사용되고 Replica 노드는 읽기 전용이다.
  - 재해 복구 외에도 읽기 전용 복제본을 활성화해 ElastiCache for Redis의 읽기 능력을 확장할 수 있다.
  - 하나의 샤드안의 모든 노드에 모든 데이터가 분산되어 있으므로 노드 장애 시 데이터 손실을 방지할 수 있다.
  - Multi-AZ도 기본적으로 활성화되어 Multi-AZ 장애조치도 가능하다.
  -  스케일링은 두 가지 방식이 있다.
    - Horizontal
      - 읽기 전용 복제본을 추가하거나 제거하는 수평 확장이다.
      - 최대 5개의 읽기 전용 복제본을 가질 수 있다.
    - Vertical
      - 노드 유형을 더 크거나 작게 하는 수직 확장
      - 이전 노드 그룹이 업그레이드되며, 새 노드 그룹이 만들어지고 자동으로 복제 된다.
      - 새 노드 그룹이 최신 상태가 되면 DNS가 업데이트되고 애플리케이션이 새 노드 그룹을 사용하게 된다.
- ElastiCache Replication: Cluster Mode Enabled
  - 데이터가 여러 샤드에 걸쳐 파티셔닝되므로 쓰기 확장에 유용하다.
  - 샤드 1, 샤드 2 ... 샤드 N 등 확장 가능하다.
  - 샤드는 하나의 Primary 노드와 최대 5개의 복제본 노드가 있을 수 있다.
  - 모든 샤드에 동일한 수의 복제본을 설정하고 데이터는 복제된다.
  - Multi-AZ 기능이 기본으로 활성화되어 있어 AZ 장애 시 Primary와 Replica 간 장애 조치가 가능하다.
  - 클러스터 당 최대 500개 노드를 가질 수 있다. 즉, 복제본을 설정하지 않으면 500개의 단일 마스터 샤드를 가질 수 있다.
  - Auro Scaling을 설정할 수 있다.
    - 클러스터의 샤드 또는 Replica 수를 자동으로 늘리거나 줄일 수 있다.
    - 대상 추적 및 예약 스케일링 정책을 모두 지원한다.
    - 대상 추적의 경우 CPUUtilization 60% 등 추적할 메트릭을 설정하고 임계치를 넘어가면 CloudWatch 알람이 트리거되고 이 알람을 통해 클러스터의 샤드 수를 늘릴 수 있다.
    - 클러스터에 연결하려면 Cluster Configuration Endpoint라고 하는 방식을 사용해야 한다.
- Redis Connection Endpoint
  - Standalone Node(단일 노드)
    - 노드 엔드포인트 하나를 사용해 읽기, 쓰기 연산을 할 수 있다.
  - Cluster Mode Disabled Cluster
    - Primary Endpoint: 모든 읽기/쓰기 연산에 사용된다.
    - Reader Endpoint: 모든 읽기 전용 복제본에 대한 읽기 연산에 사용된다.
    - Node Endpoint: 개별 노드에 대한 읽기 연산에 사용 된다.
  - Cluster Mode Enabled Cluster
    - Configuration Endpoint: 클러스터 모드와 호환되는 모든 읽기, 쓰기 연산에 사용된다. 
    - Node Endpoint: 개별 노드에 대한 읽기 연산에 사용 된다.

## **ElastiCache Redis for SysOps**
**정리**

- 

## **ElastiCache Memcached for SysOps**
## **CloudWatch Metrics**
## **CloudWatch Custom Metrics**
## **CloudWatch Dashboards**
## **CloudWatch Logs**
## **CloudWatch Alarms**
## **CloudWatch Synthetics**
## **[SAA/DVA] Amazon EventBridge**
## **Service Quotas Overview**
## **[SAA/DVA] CloudTrail**
## **[SAA/DVA] CloudTrail - EventBridge Integration**
## **CloudTrail for SysOps**
## **[SAA] Config Overview**
## **Config - Aggregators**
## **[SAA] CloudWatch vs CloudTrail vs Config**
## **AWS Health Dashboard - Overview**
## **AWS Health Dashboard - Events & Notifications**
## **[SAA] Organizations Overview**
## **[CCP] AWS Control Tower Overview**
## **AWS Service Catalog Overview**
## **AWS Billing Alarms**
## **[SAA] AWS Cost Explorer**
## **AWS Budgets**
## **AWS Cost Allocation Tags & Cost & Usage Reports**
## **[CCP] AWS Compute Optimizer Overview**
## **[SAA] AWS DataSync**
## **[SAA] AWS Backup**
## **[CCP/SAA] Shared Responsibility Model**
## **[CCP] DDoS, AWS Shield and AWS WAF**
## **[CCP] Penetration testing on AWS**
## **[CCP/SAA/SAP] Amazon Inspector**
## **Logging in AWS**
## **[CCP/SAA/SAP] Amazon GuardDuty**
## **[CCP/SAA] Amazon Macie**
## **[CCP/SAA] Trusted Advisor**
## **[SAA/DVA] Encryption 101**
## **[SAA/DVA] KMS Overview**
## **KMS Key Rotation**
## **KMS For SysOps**
## **[DVA] CloudHSM Overview**
## **[CCP] AWS Artifact Overview**
## **[SAA] AWS Certificate Manager Overview (ACM)**
## **[SAA/DVA] Secrets Manager Overview**
## **Secrets Manager - Monitoring & Troubleshooting**
## **[DVA] SSM Parameter Store vs Secrets Manager**
## **[CCP/SAA/DVA] IAM Security Tools**
## **IAM Access Analyzer**
## **Identity Federation with SAML & Cognito**
## **STS & Cross Account Access**
## **[DVA] Cognito User Pools Overview**
## **[DVA] Cognito Identity Pools Overview**
## **[DVA] Cognito User Pools vs Cognito Identity Pools**
## **[SAA/DVA] What is a DNS?**
## **[SAA/DVA] Route 53 Overview**
## **[SAA/DVA] Route 53 - Registering a Domain**
## **[SAA/DVA] Route 53 - TTL**
## **[SAA/DVA] CNAME vs Alias**
## **[SAA/DVA] Routing Policy - Simple**
## **[SAA/DVA] Routing Policy - Weighted**
## **[SAA/DVA] Routing Policy - Latency**
## **[SAA/DVA] Route 53 Health Checks**
## **[SAA/DVA] Routing Policy - Failover**
## **[SAA/DVA] Routing Policy - Geolocation**
## **[SAA/DVA] Routing Policy - Geoproximity**
## **[SAA/DVA] Routing Policy - Traffic Flow & Geoproximity Hands On**
## **[SAA/DVA] Routing Policy - IP-based**
## **[SAA/DVA] Routing Policy - Multi Value**
## **[SAA/DVA] 3rd Party Domains & Route 53**
## **S3 Website with Route 53**
## **Route 53 Resolvers & Hybrid DNS**
## **[SAA] CIDR, Private vs Public IP**
## **[SAA] VPC Overview**
## **[SAA] Subnet Overview**
## **[SAA] Internet Gateways & Route Tables**
## **[SAA] Bastion Hosts**
## **[SAA] NAT Instances**
## **[SAA] NAT Gateways**
## **[SAA] DNS Resolution Options & Route 53 Private Zones**
## **[SAA] NACL & Security Groups**
## **[SAA] VPC Reachability Analyzer**
## **[SAA] VPC Peering**
## **[SAA] VPC Endpoints**
## **[SAA] VPC Flow Logs**
## **[SAA] Site to Site VPN, Virtual Private Gateway & Customer Gateway**
## **[SAA] Direct Connect & Direct Connect Gateway**
## **[SAA] Site to Site VPN as a backup to Direct Connect**
## **[SAA] AWS PrivateLink - VPC Endpoint Services**
## **[SAA] Transit Gateway**
## **[SAA] VPC Traffic Mirroring**
## **[SAA] IPv6 for VPC**
## **[SAA] Egress Only Internet Gateway**
## **[SAA] Networking Costs in AWS**
## **[SAA] Network Firewall**
## **[CCP] X-Ray**
