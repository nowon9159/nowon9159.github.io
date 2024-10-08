# Overview
안녕하세요 SOA 강의를 듣고 정리한 내용입니다.

공부 방법은 Udemy에서 Stephane Maarek 님의 강의를 영어 스크립트를 한글로 번역하여 참고했고, 한글로 번역하는 과정에서 Deepl, ChatGPT(3.5), Claude3를 이용했습니다.

*밑에 Instructions 등의 내용도 있지만 사용 중간부터는 번역이 이상해져 사용하지 않았습니다.*

강의 내용을 기반으로 번역이 매끄럽게 되지 않는 부분은 AWS Docs를 참조하려고 했습니다.

시간이 없으신 분들은 각 파트의 `정리` 부분을 중점으로 참고하시거나 [Cheat Sheet](https://github.com/nowon9159/nowon9159.github.io/blob/main/SOA-C02/SOA-C02_Cheat_Sheet.md)를 참고하시면 됩니다.
또는 `시험` 이라는 키워드를 검색하시면 됩니다.

참고하시는 분들께 제 합격 기운을 나눠 드립니다.
부디 공부에 큰 도움이 되셨음 좋겠습니다.

# Custom Instructions
<!-- TOC -->

- [Overview](#overview)
- [Custom Instructions](#custom-instructions)
- [Contents](#contents)
    - [**Enhanced Networking 향상된 네트워킹**](#enhanced-networking-%ED%96%A5%EC%83%81%EB%90%9C-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9)
    - [**EC2 Placement Groups 배치 그룹**](#ec2-placement-groups-%EB%B0%B0%EC%B9%98-%EA%B7%B8%EB%A3%B9)
        - [Cluster Placement Group 클러스터 배치 그룹](#cluster-placement-group-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0-%EB%B0%B0%EC%B9%98-%EA%B7%B8%EB%A3%B9)
        - [Spread Placement Group 분산 배치 그룹](#spread-placement-group-%EB%B6%84%EC%82%B0-%EB%B0%B0%EC%B9%98-%EA%B7%B8%EB%A3%B9)
        - [Partition Placement Group 파티션 배치 그룹](#partition-placement-group-%ED%8C%8C%ED%8B%B0%EC%85%98-%EB%B0%B0%EC%B9%98-%EA%B7%B8%EB%A3%B9)
    - [EC2 Shutdown Behavior & Termination Protection](#ec2-shutdown-behavior--termination-protection)
    - [Troubleshooting EC2 Launch Issues](#troubleshooting-ec2-launch-issues)
    - [Troubleshooting EC2 SSH Issues](#troubleshooting-ec2-ssh-issues)
        - [**Troubleshooting**](#troubleshooting)
        - [**SSH vs. EC2 Instance Connect**](#ssh-vs-ec2-instance-connect)
    - [[CCP/SAA/DVA] EC2 Instance Purchasing Options](#ccpsaadva-ec2-instance-purchasing-options)
        - [**인스턴스 구매 옵션**](#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EA%B5%AC%EB%A7%A4-%EC%98%B5%EC%85%98)
        - [**EC2 On Demand**](#ec2-on-demand)
        - [**Reserved Instances**](#reserved-instances)
        - [**Convertible Reserved Instance**](#convertible-reserved-instance)
        - [**EC2 Savings Plans**](#ec2-savings-plans)
        - [**Spot Instance**](#spot-instance)
        - [**Dedicated Hosts**](#dedicated-hosts)
        - [**Dedicated Instances**](#dedicated-instances)
        - [**EC2 Capacity Reservations**](#ec2-capacity-reservations)
    - [**[SAA] Spot Instances & Spot Fleet**](#saa-spot-instances--spot-fleet)
        - [스팟 인스턴스](#%EC%8A%A4%ED%8C%9F-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4)
        - [스팟 블록](#%EC%8A%A4%ED%8C%9F-%EB%B8%94%EB%A1%9D)
        - [스팟 플릿 강의 번역이 부실하여 강의 내용 기반 따로 정리함](#%EC%8A%A4%ED%8C%9F-%ED%94%8C%EB%A6%BF-%EA%B0%95%EC%9D%98-%EB%B2%88%EC%97%AD%EC%9D%B4-%EB%B6%80%EC%8B%A4%ED%95%98%EC%97%AC-%EA%B0%95%EC%9D%98-%EB%82%B4%EC%9A%A9-%EA%B8%B0%EB%B0%98-%EB%94%B0%EB%A1%9C-%EC%A0%95%EB%A6%AC%ED%95%A8)
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
    - [**AWS Amplify**](#aws-amplify)

<!-- /TOC -->

# Contents

## **Enhanced Networking (향상된 네트워킹)**

인스턴스의 네트워크는 SR-IOV(Single Root - I/O Virtualization) 를 사용한다. 이는 더 높은 대역폭, 더 높은 PPS(초당 패킷), 낮은 지연을 제공한다.

이에 대한 두 가지 옵션이 있다.
가장 최근 옵션은 Elastic Network Adapter(ENA)로, 최대 100Gbps의 성능을 제공한다.
두번째로는 Legacy인 Intel VF(intel 82599 Virtual Function) 인터페이스가 있는데 10 Gbps를 제공한다.

ENA 어댑터는 T2를 제외한 최신 세대의 EC2 인스턴스에서 작동한다.

그리고 Elastic Fabric Adapter(EFA)가 있다. 이는 HPC(고성능 컴퓨팅) 전용으로 개선된 ENA이다. Linux에서만 작동하고, 같은 클러스터 내에 있는 경우 서로 결합된 많은 내부 노드 통신이 있다면 서로 더 나은 네트워크 성능을 얻는다. 이는 MPI(Message Passing Interface) 표준을 활용한다.

EFA는 EC2 인스턴스 간의 통신이 높아지기 때문에 더 고성능을 제공하며 기본 Linux OS를 우회하여 더 낮은 지연과 신뢰성 있는 전송을 제공한다.

요지는 낮은 지연을 위해 Enhanced Networking을 원한다면 ENA를 찾고, HPC 클러스터가 있다면 고성능을 위해 EFA를 찾아보자.

Amazon Linux 2 에는 모든 인스턴스에 ENA 모듈이 설치되어 있다.
`$ modinfo ena`를 입력하면 ENA 모듈이 EC2 인스턴스에 로드되어 있는 것을 볼 수 있다.
`$ ethtool -i eth0`를 입력하면 드라이버가 ena로 보여진다.

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

Placement Groups는 AWS 인프라 내에서 EC2 인스턴스가 어떻게 배치될지를 제어하려고 할 때 사용된다.

직접 AWS 하드웨어와 상호 작용하지는 않지만 EC2 인스턴스를 서로 어떻게 배치하길 원하는지 AWS에 알릴 수 있다.

배치 그룹은 선택 사항이다. 인스턴스를 배치 그룹으로 시작하지 않으면 EC2는 기본 하드웨어 전반에 분산되어 인스턴스를 배치하려 한다.

인스턴스 생성시에 신규 또는 기존 배치 그룹에 인스턴스를 추가하도록 설정 가능

Placement Groups 를 생성할 때는 세 가지 전략을 사용할 수 있다.

### Cluster Placement Group (클러스터 배치 그룹)

인스턴스가 단일 가용 영역 내에서 저지연 하드웨어 설정에 그룹화된다.
이것은 높은 성능을 제공하지만 높은 위험도 제공한다.

모든 EC2 인스턴스가 동일한 랙에 배치되며 동일한 하드웨어를 공유하며 동일한 가용 영역에 속한다.
매우 낮은 대기 시간과 높은 네트워크 속도(대개 10 기가비트 정도)를 얻기 위해 수행된다.
우수한 네트워크를 얻지만, 우수한 네트워크의 단점은 랙에 장애가 발생하면 모든 EC2 인스턴스가 동시에 실패할 수 있다는 것이다.
모든 종류의 응용 프로그램에 적합한 것은 아니지만 응용 프로그램이 HPC와 같은 매우 높은 대역폭과 낮은 대기 시간이 필요한 경우 클러스터 배치 그룹이 좋은 방법이다.

### Spread Placement Group (분산 배치 그룹)

인스턴스가 서로 다른 랙에 분산된다.
이는 한 AZ 당 7개의 EC2 인스턴스로 제한되어 있다. 주로 중요한 응용 프로그램에 사용된다.

실패 위험을 최소화할 때 좋다.
EC2가 여러 가용 영역에 걸쳐 확장할 수 있으며 동시에 발생하는 실패의 위험이 줄어든다.
왜냐하면 하드웨어 1이 실패하면 하드웨어2가 실패하지 않을 것이기 때문이다.
이러한 구성에서는 AZ 당 Placement Group 당 7개의 인스턴스로 제한된다.
따라서 꽤 큰 규모의 응용 프로그램이어야 하지만 너무 크지 않아야 한다.
이는 고가용성을 극대화하고 위험을 감소시키려는 중요한 응용 프로그램에 사용된다.
AZ 당 Placement Group 당 7개의 인스턴스로 제한된다는 것을 명심해야한다.

### Partition Placement Group (파티션 배치 그룹)

Spread와 유사함. 인스턴스가 여러 파티션에 걸쳐 여러 가용 영역에서 분산된다.

한 AZ당 최대 7개의 파티션을 가질 수 있으며 이러한 파티션은 같은 Region의 여러 가용 영역에 걸쳐 확장될 수 있다.
각 파티션은 AWS에서 랙을 나타내며 많은 파티션을 가지고 있으면 인스턴스가 여러 하드웨어 랙에 분산되어 랙의 장애로부터 안전하다는 것을 보장한다.
이러한 설정으로 그룹 당 수백 개의 EC2 인스턴스까지 확장할 수 있다.

Spread Placement Group과의 차이점은 파티션 인스턴스와 다른 파티션의 인스턴스가 동일한 하드웨어 물리적 랙을 공유하지 않으며, 따라서 각 파티션은 실패로부터 격리된다.
하나의 파티션이 다운되면 파티션 번호 2가 다운되더라도 파티션 번호 1은 정상이어야한다.
이러한 EC2 인스턴스가 어느 파티션에 속하는지 알아내려면 메타데이터 서비스를 사용해 이 정보에 액세스할 수 있는 옵션이 있다.

파티션 배치 그룹의 경우 데이터를 분산하고 파티션 간에 서버를 분산할 수 있는 애플리케이션을 보유할 때 사용한다. 일반적으로 대용량 데이터 응용 프로그램에서 사용되며 HDFS, Hbase, Cassandra, Kafka를 사용하는 경우가 있다.

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
    - 파티션 안에 있는 인스턴스는 다른 파티션에 속한 인스턴스와 랙을 공유하지 않는다.
    - 응용 프로그램이 데이터 및 서버를 파티션 간에 분산시킬 수 있는 경우 사용한다.

## EC2 Shutdown Behavior & Termination Protection

인스턴스는 중지(Stop)와 종료(Terminate)가 있음

종료는 또한 종료 방지(Termination Protection) 설정을 할 수 있어서 인스턴스를 생성하거나 생성하고 나서 종료 방지 설정을 할 수 있음. 훨씬 안전함
AWS Console이나 CLI의 우발적인 종료 동작을 막아준다.

종료 설정이 되어 있어도 OS 내에서 shutdown 명령어를 내리게 되면 Terminate 된다.
`$ sudo shutdown` 하게 되면 Terminated 되기 때문에 주의해야 함
> init 0 또는 systemctl poweroff 명령어도 동일하다.

## Troubleshooting EC2 Launch Issues

**InstanceLimitExceeded**
리전당 최대 vCPU 수에 도달했음을 의미
기본적으로 64GB인데 해결 방법은 다른 리전에서 인스턴스를 실행하는 것과 리전에 제한된 Service Quotas를 늘리면 된다.

**InsufficientInstanceCapacity**
만약 내가 Default 64GB인 상태에서 128GB의 인스턴스 타입을 선택하게 되면 인스턴스의 특정 AZ에 대해 온디맨드에 대한 특정 용량을 갖추지 못했다는 error임
이는 AWS에서 발생하는 문제이기도 하다. 왜냐하면 AZ에서 64GB가 준비되지 않았을 수도 있으니까

정리하자면 AWS에서 요청을 수행할 만큼의 충분한 가용 온디맨드 용량이 없기 때문이다.

해결 법은

- 몇 분 기다렸다가 다시 Request 하기
- 한 번에 적은 인스턴스를 요청해보기. 만약 내가 5개의 인스턴스를 한꺼번에 launch 했다고 했을 때, 1개 1개씩 신청하면 된다.
- 다른 인스턴스 형식을 요청하기. 완전 다른 인스턴스 유형을 선택 했다가 원하는 인스턴스 유형으로 스케일 업 해도 된다.
- Service Quotas에 대한 Request하기

**Instance terminates immediately**
인스턴스가 pending 상태에서 Terminated 상태로 즉시 변경되는 것

이유는 아래와 같다.

- EBS 볼륨 제한을 초과했을 때
- EBS 스냅샷이 손상되었을 때
- 루트 볼륨이 암호화되어 있으며, 암호 해독을 위해 KMS 키에 액세스할 수 있는 권한이 없을 때
- 인스턴스 스토어 지원 AMI에 image.part.xx file과 같은 필수적인 부분이 누락 되었을 때

정확한 이유를 찾으려면 EC2 콘솔에서 Description 탭에 있는 State를 확인하면 된다.

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

### **Troubleshooting**

- pem 키에 400 퍼미션이 아니라면 Unprotected private key file이라는 error가 발생하게 된다.
- ssh 접속을 할 때 username이 맞지 않다면 "Host key not found", "Permission denied", "Connection closed by [instance] port 22" error가 발생하게 된다.
- "Connection timed out" error 가 발생하게 되면 네트워크 오류이다.
  - Security Group이 올바르게 되어있지 않은 경우
  - NACL이 올바르게 되어있지 않은 경우
  - Route table이나 subnet 문제
  - 인스턴스가 Public IPv4 주소를 가지고 있지 않은 경우
  - 서버가 심각한 부하 상태여서 CPU가 100% 인 경우

### **SSH vs. EC2 Instance Connect**

- SSH를 사용해 인스턴스에 연결하는 경우
  - 인바운드 룰에 맞는 host ip가 제대로 SG에 등록 되어 있는지
- EC2 Instance Connect를 사용하는 경우
  - SG에 [AWS IP Range](https://ip-ranges.amazonaws.com/ip-ranges.json)를 허용 했는지

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

### **인스턴스 구매 옵션**

- On-Demand Instance
  - short workload, 예측 가능한 요금, 초 단위 비용 부과
- Reserved (1 & 3 Year)
  - Reserved Instances : long workload
  - Convertible Reserved Instances : long workload, 어느정도 시간이 지난 후 인스턴스 유형을 변경할 경우 사용되는. 인스턴스 유형을 변경할 수 있는 Reserved Instances
- Savings Plans (1 & 3 Year)
  - 특정 인스턴스 유형에 커밋하는 대신 특정 양의 사용량에 커밋해서 더욱 현대적이다.
  - long workload
- Spot instance
  - 짧은 워크로드에 적합함.
  - 언제든지 이 인스턴스를 잃을 수 있지만 가격이 굉장히 쌈
- Dedicated Hosts
  - 전체 물리 서버를 예약하고 인스턴스 배치(Placement)를 조정 가능하다.
- Dedicated Instances (전용 인스턴스)
  - 다른 고객에게 내가 사용하고자 하는 인스턴스의 하드웨어를 사용하게 하지 않는
- Capacity Reservations (용량 예약)
  - 특정 AZ의 용량을 일정 시간동안 예약하는

### **EC2 On Demand**

- Linux 나 Windows 인스턴스를 사용하게 되면 1분 후 초 단위 비용 과금이 되게 된다. 다른 OS의 경우 시간 단위 비용 과금이 된다.
- 원가는 제일 높지만 선급도 없고 장기적인 계약도 없다.
- 단기적이고 방해받지 않는 작업에 추천됨. 응용 프로그램이 어떻게 작동할지 예측할 수 없는 곳에 사용됨.

### **Reserved Instances**

- 온디맨드에 비해서 72% 정도 할인이 된다.
- Instance Type(예:m4.large), Region, Tenancy, OS 등의 인스턴스 속성을 예약한다.
- 더 많은 할인을 받기 위해 1년이나 3년의 예약 기간을 명시하고 선결제 없음(No Upfront), 부분 선결제(partial Upfront), 전체 선결제(All Upfront)를 정해야한다.
- 범위 측면에서는 Regional 이거나 Zonal을 선택해야 한다. Zonal로 선택하게 되면 특정 Zone에 reserve 할 수 있고 조건이 맞을 시 할인이 됨
- 예약 인스턴스는 DB와 같이 꾸준히 사용되는 응용 프로그램에 추천된다.
- 예약 인스턴스를 Reserved Instance Marketplace에서 사거나 팔 수 있다.

### **Convertible Reserved Instance**

- 전환형 예약 인스턴스의 경우 EC2 instance type, instance family, OS, scope(Regional or zonal), tenancy를 변경할 수 있다.
- 더 많은 유연성을 가질 수 있어서 할인을 조금 덜 받을 수 있다. 66%

### **EC2 Savings Plans**

- 장기 사용량에 따라 할인을 받을 수 있도록 해준다. 예약 인스턴스와 같은 72% 임.
- 특정 Family에 대한 사용량을 기준으로 약정. 예를 들면 10$/hour로 1년 또는 3년 약정을 걸 수 있다.
- Savings Plan로 약정을 건 외의 사용량은 On-demand 가격으로 청구된다.
- 특정 인스턴스 패밀리에 묶이게 된다. 예를 들어 us-east-1에 M5 타입의 인스턴스를 넣는다고 가정할 때 M5.xlarge 또는 M5.2xlarge 등 가능하다.
- 이외에 유연한 항목들은 Instance size, OS, Tenancy 가 있다.

### **Spot Instance**

- 온디맨드에 비해서 90%의 할인율을 자랑한다.
- max price가 spot price 보다 작아지면 인스턴스는 중지 과정에 들어간다.
- AWS에서 가장 비용 효율적인 인스턴스이다.
- 실패해도 크게 문제가 없는 workload에서 유용하게 사용될 것이다. 예를 들면 batch 작업이나, 데이터 분석, 이미지 프로세싱 등 모든 종류의 분산된 작업
- 그래서 데이터베이스나 종료되면 안되는 작업에는 적합하지 않다.

### **Dedicated Hosts**

- 물리적 서버와 EC2 인스턴스 용량을 확보해 실제 사용에 전념할 수 있다.
- 규정 요건을 준수하고 기존 서버 바운드 소프트웨어 라이센스를 사용할 수 있도록 허용한다. (소켓 당, 코어 당, VM 당 소프트웨어 라이센스)
- 요금의 경우 아래와 같다.
  - 온디맨드 : 1초당 요금 부과
  - Reserved : 1 or 3 year (선결제 없음, 부분 선결제, 전체 선결제)
- 가장 비싼 Instance 옵션
- 사용 사례는 라이선스 모델이 있는 소프트웨어가 있을 때. (BYOL) , 규제 및 준수 요구가 강한 회사의 경우

### **Dedicated Instances**

- 인스턴스는 내 전용으로 할당된 하드웨어에서 실행된다. 동일 계정 내의 다른 인스턴스와 하드웨어를 공유할수도 있다.
- 인스턴스 배치에 대한 제어는 할 수 없다.
- 전용 인스턴스는 자체 하드웨어에서 실행되는 것을 의미하며, 전용 호스트는 물리적 서버에 직접 액세스 해 low-level의 하드웨어를 확인할 수 있다.

### **EC2 Capacity Reservations**

- 특정 AZ에 온디맨드 인스턴스를 일시적으로 예약할 수 있다. 예약 후에는 예약한 용량에 한해서 언제든지 액세스할 수 있다.
- 유일한 기능은 용량을 예약하는 것이기 때문에 요금이 할인되지는 않는다. 할인을 받으려면 Zonal RI나 SP와 결합해야한다.
- 인스턴스를 실행하던 실행하지 않던 온디맨드 요금이 청구된다.
- 이것은 특정 가용 영역에 필요한 단기의 작업에 적합하다.

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

### 스팟 인스턴스

온디맨드 가격보다 저렴한 비용으로 제공되는 예비 EC2 용량을 사용하는 인스턴스

스팟 인스턴스는 온디맨드 대비 최대 90% 할인을 받을 수 있다.

먼저 해당 스팟 인스턴스에 지불할 최대 스팟 가격(Maximum price)을 정의한다.
인스턴스의 현재 스팟 가격이 우리가 지불하려는 최대 가격보다 낮으면 인스턴스를 유지한다. 물론 시간 당 스팟 가격은 제공량과 capacity에 따라 변동하며 상승 및 하락한다.

현재 스팟 가격이 정의한 최대 가격을 초과하는 경우 두 가지 옵션이 있다. 이 두 가지 옵션에 대해서는 2분의 유예 기간이 제공된다. 그래서 이를 수행하는 데에는 약간의 시간이 주어진다.

옵션 중 하나는 수행 중인 모든 작업을 종료하고 인스턴스를 중지(Interruption)하는 것이다. Interruption된 상태에서 max 스팟 가격 아래로 내려간다면 인스턴스를 다시 시작하고 이전에 남은 작업을 계속할 수 있다.
또는 EC2 인스턴스를 종료(Terminate)하고 작업을 다시 시작해야 하는 경우 새로운 EC2 인스턴스로 시작할 수 있다.

워크로드 유형에 따라 두 가지 전략이 있지만 2분의 유예 기간이 주어진다.

### 스팟 블록

AWS에서 스팟 인스턴스를 회수하기를 원하지 않는다면 스팟 블록을 사용하면 된다.
스팟 블록은 정의된 기간 동안 용량을 예약하여 인스턴스가 지정된 기간 동안 실행되도록 하는 것이다.
BlockDuration 매개변수를 사용해 인스턴스를 실행할 시간과 지불할 최대 가격을 지정하기만 하면된다.

지정된 기간은 1시간부터 6시간까지 지정할 수 있으며 문서 상으로는 어떠한 interruption 없이 사용 가능하다.
문서 상으로는 특정 상황에서 인스턴스가 회수 될 수 있다. 전체적으로 고려했을 때 인스턴스가 회수되지 않을 것으로 예상된다.

스팟 인스턴스는 주로 배치 작업, 데이터 분석, 장애에 견딜 수 있는 작업에 사용된다. 그리고 중요한 작업이나 데이터베이스에는 적합하지 않는다.

**_중요 : 스팟 블록은 Deprecated 되었음_**

**스팟 인스턴스 가격**
특정 Region에 대해 특정 가용 영역에 해당하는 스팟 가격이 있다. 스팟 가격은 고려 중인 가용 영역에 따라 다양하다.

**스팟 인스턴스를 어떻게 종료하는가?**
스팟 request를 고려 해봐야한다. spot request에서는 원하는 인스턴스 수, 지불할 최대 가격, 런치 사양(AMI 등) 및 요청의 유효기간(valid to)과 두 가지 요청 유형 중 하나를 선택한다.

요청 유형은 두 가지이다.

- 일회성(One-time)
  - 일회성 요청의 경우 스팟 요청이 충족되면 즉시 인스턴스가 시작되고 스팟 요청이 사라진다.
- 영구 요청(Persistent request)
  - 영구 요청의 경우 특정 인스턴스 수가 스팟 요청의 valid 기간 내에서 유효할 때까지 요청이 계속 유효해야 한다.
  - 따라서 어떤 이유로든 인스턴스가 스팟 가격에 따라 중지(Interruption)되거나 중단(Termination)되면 스팟 요청이 다시 활성화된다. 그리고 유효한 경우 다시 시작된다.
  - 영구 요청에 경우 스팟 인스턴스를 중지하고 스팟 요청이 활성 상태인 경우 자동으로 인스턴스를 다시 시작한다.

스팟 요청을 취소하려면 open state, active state, disabled state 상태여야 한다.

인스턴스들을 종료하는 것은 AWS의 책임이 아닌 여전히 내 책임이다. 영구적으로 스팟 인스턴스를 종료하고 다시 시작하지 않으려면 스팟 요청을 취소한 다음 관련된 스팟 인스턴스를 종료해야 한다.
왜냐하면 스팟 인스턴스를 먼저 종료하면 스팟 요청으로 돌아가고 스팟 요청의 개수대로 유지하기 위해 인스턴스를 다시 실행할 것이기 때문이다.
https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/spot-requests.html

### 스팟 플릿 (강의 번역이 부실하여 강의 내용 기반 따로 정리함)

스팟 플릿은 사용자가 지정한 기준에 따라 시작되는 스팟 인스턴스의 집합이며 온디맨드 인스턴스도 선택적으로 집합을 구성할수 있다.

스팟 플릿은 사용자의 요구 사항을 충족하는 스팟 용량 풀을 선택하고 플릿에 대한 목표 용량을 충족하는 스팟 인스턴스를 시작한다.

- 스팟 용량 풀은 인스턴스 유형, 운영 체제, 가용 영역, 네트워크 플랫폼(EC2-Classic 또는 EC2-VPC)이 동일한 미사용 EC2 인스턴스의 집합입니다. 각 스팟 용량 풀은 수요와 공급에 따라 가격이 달라질 수 있습니다.

기본적으로 스팟 플릿은 스팟 인스턴스가 종료된 후 대체 인스턴스를 시작하여 target capacity를 유지하도록 설정되어 있다. 스팟 플릿 인스턴스가 종료된 후에 유지되지 않는 일회성 request로 제출할 수도 있다. 스팟 플릿 request에 온디맨드 인스턴스 요청을 포함할 수 있다.

요청 유형

- request
  - 스팟 플릿이 원하는 용량을 얻기 위한 비동기식 일회성 요청을 한다.
  - 그 뒤에 스팟 중단으로 용량이 감소하게되면 인스턴스를 보충하려고 하지 않으며, 용량을 사용할 수 없는 경우 대체 스팟 용량에서 요청을 제출하지 않는다.
- maintain
  - 스팟 플릿은 원하는 용량을 얻기 위한 비동기식 요청을 하고 중단된 모든 스팟 인스턴스를 자동으로 보충해 용량을 유지한다.
- 콘솔에서 유형을 지정하려면 Maintain target capacity 확인란을 선택/취소하면 된다.

launch configuration은 스팟 플릿이 스팟 인스턴스를 시작할 수 있는 모든 스팟 용량 풀(인스턴스 유형, 가용 영역)을 결정한다. 하지만 인스턴스를 시작할 때 스팟 플릿은 지정한 할당 전략을 사용하여 가능한 풀에서 특정 풀을 선택합니다.

스팟 인스턴스 할당 전략

- priceCapacityOptimized(권장)
  - 스팟 플릿은 시작하는 인스턴스의 수에 맞추어 용량 가용성이 가장 높은 풀을 가져온다. 즉, 가까운 시일 내에 중단될 가능성이 가장 낮다고 판단되는 풀에서 스팟 인스턴스를 요청. 그러면 스팟 플릿이 해당 풀에서 가장 가격이 낮은 스팟 인스턴스를 요청한다.
- capacityOptimized
  - 시작하는 인스턴스의 수에 맞추어 용량 가용성이 가장 높은 풀을 가져온다.
  - 즉, 가까운 시일 내에 중단될 가능성이 가장 낮다고 판단되는 풀에서 스팟 인스턴스를 요청.
  - 선택적으로 capacityOptimizedPrioritized를 사용하여 플릿의 각 인스턴스 유형에 대해 우선 순위를 설정할 수 있음
- diversified
  - 스팟 인스턴스는 모든 풀에 두루 분산
- lowestPrice
  - 스팟 인스턴스는 용량이 있는 최저 가격 풀에서 제공. 매우 짧은 워크 로드의 경우 좋은 옵션
  - 인스턴스 가격만 고려하고 용량 가용성은 고려하지 않기 때문에 중단률이 높아질 수 있다.
- InstancePoolsToUseCount : 스팟 플릿에서 가격이 가장 낮은 스팟 풀을 선택하고 지정한 스팟 풀 수에 걸쳐 대상 스팟 용량을 균등하게 할당

기억해야할 점은 스팟 플릿을 사용하여 여러 launch pool과 여러 인스턴스 유형을 정의할 수 있다는 것

그리고 스팟 플릿에서 lowestPrice 전략을 사용하면 스팟 플릿은 자동으로 최저 가격의 스팟 인스턴스를 요청할 것이다.
따라서 스팟 플릿은 최대한의 절약을 얻을 수 있도록 올바른 인스턴스 풀을 선택하는 데 도움이 되어 추가 절약을 제공한다. 이것이 스팟 플릿의 이점

간단히 스팟 플릿을 요청하는 것과 스팟 플릿을 사용해 `내가 원하는 인스턴스 유형과 원하는 가용 영역을 정확히 알고 있고, 어떤 풀에서 최저 가격을 제공하더라도, 모든 인스턴스 유형과 모든 가용 영역 중에서 선택할 수 있도록 하겠습니다` 라고 말하는 것의 차이를 이해해야 한다.

**스팟 용량 풀**

- 스팟 용량 풀은 동일한 인스턴스 유형(예: m5.large), 운영 체제, 가용 영역 및 네트워크 플랫폼을 가지는 미사용 EC2 인스턴스의 세트입니다. 스팟 플릿 요청을 할 때 인스턴스 유형, AMI, 가용 영역 또는 서브넷에 따라 바뀌는 여러 시작 사양을 포함할 수 있습니다. 스팟 플릿은 요청에 포함된 시작 사양과 스팟 플릿 요청의 구성을 기반으로 스팟 플릿 요청을 이행하는 데 사용되는 스팟 용량 풀을 선택합니다. 스팟 인스턴스는 선택한 풀에서 가져옵니다.

**정리**

- Spot Instance
  - 스팟 인스턴스는 온디맨드 가격보다 저렴한 비용으로 제공되는 예비 EC2 용량을 사용하는 인스턴스
  - 먼저 실행하고자 하는 스팟 인스턴스에 지불할 최대 스팟 가격을 지정하고, 인스턴스의 현재 스팟 가격(Spot Price)이 우리가 지불하려는 최대 스팟 가격보다 미만이면 인스턴스를 유지한다.
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

T2,T3 인스턴스 유형의 경우 부하가 급증하는 경우 CPU가 burst될 수 있다.
이 burst라는 것은 CPU가 부하를 처리할 수 있게 성능이 좋아진다는 말이다.

인스턴스가 burst되게 되면 통상 burst credit이라고 하는 크레딧이 있고, 인스턴스가 수명 주기를 가지고 있으며 CPU가 강력히 사용될 때 이 credit이 사용된다.

모든 크레딧이 소진되면 CPU 성능이 매우 나빠지며 인스턴스를 올바르게 사용할 수 없게 된다.
그러나 인스턴스의 부하가 급증하지 않아 CPU가 많이 사용되지 않으면 credit은 시간이 지나면서 다시 축적되어 필요할 때마다 재사용할 수 있다.

인스턴스는 예상치 못한 유형의 트래픽을 처리하는 데 훌룡할 수 있으며 올바르게 처리된다면 굉장히 유용한 유형의 인스턴스가 될 수 있다.
그러나 인스턴스가 일관되게 낮은 크레딧을 소비한다면 T 계열을 올바르게 사용하고 있는 것이 아닐 수 있으므로 다른 유형의 인스턴스로 전환해야 할 것이다.

CloudWatch 모니터링에서 이를 살펴볼 수 있다.

맹점은 credit이 0에 도달하면 CPU 사용률은 실제로 100%가 아니게 된다.

이를 해결하기 위해 T2 및 T3 Unlimited라는 것이 있다.

Unlimited는 무제한의 burst credit 잔액을 제공해 credit이 0에 도달해도 원하는 만큼 사용할 수 있다.
아무리 CPU가 과부하 되더라도 credit 잔액을 초과한 추가 비용만 지불하면 성능에 손실이 발생하지 않는다.

24시간 동안 또는 인스턴스 수명(더 짧음) 동안 인스턴스의 평균 CPU 사용률이 기준 이하인 경우에 모든 CPU 사용량 급증에 대해 시간당 CPU 인스턴스 요금이 적용된다.
이말인 즉슨 24시간 평균 CPU 사용률을 초과하는 사용량에 대해 사용한 CPU 당 시간 당 요금을 내게 된다.

그래서 항상 100%를 사용하는 CPU 인스턴스가 있다면 많은 요금이 추가 청구 될 수 있어 주의해야 한다.

**정리**

- Burstable 은 T2, T3 인스턴스 유형군이다.
- 기본적으로 위 인스턴스 유형 군은 CPU 사용량 대비해 burst credit이라는 것을 가지고 있다.
- 이 burst credit이라는 것은 CPU가 과도하게 사용될 경우 credit을 소진해 CPU를 고성능으로 만들어 과부하된 CPU를 처리할 수 있게 해준다.
- credit은 CPU가 과부하되지 않을 때 시간 단위로 축적이 되고, 최대 축적 credit이 정해져있다. credit을 다 소진하게 되면 CPU 성능이 현저히 떨어진다.
- 그래서 Unlimited라는 것이 있다. Unlimited는 무제한의 credit을 제공해 CPU 사용량이 과부하 되고 크레딧을 전부 소진하더라도 추가 비용만 지불하면 CPU 성능을 보장해준다.
  - 24시간을 기준으로 인스턴스 평균 CPU 사용률이 기준 사용률을 초과하는 사용률에 대해 사용한 vCPU 당 시간 당 요금을 내게 된다.

## **Elastic IPs**

EC2 인스턴스를 중지하고 시작하면 Public IP가 변경된다. 고정된 IP가 필요하다면 EIP가 필요하다.

EIP는 삭제하지 않는 한 변경되지 않고 소유할 수 있는 IPv4 IP이다. 이는 예약된 것이므로 EIP를 한 번에 한 EC2 인스턴스에 연결하고 해당 EC2 인스턴스가 해당 IP의 IPv4를 상속하도록 한다.

이 IP를 인스턴스 간에 다시 매핑할 수 있고, 서버에 연결된 경우 EIP에 대한 요금을 지불하지 않는다.
EIP를 연결하지 않은 경우 요금이 청구된다.

EIP를 사용하면 인스턴스나 소프트웨어의 장애를 순식간에 계정 내에서 소프트웨어를 실행 중인 다른 인스턴스로 주소를 다시 매핑하여 조치할 수 있다.

기본적으로 AWS 리전 당 최대 다섯 개의 EIP를 보유할 수 있다.
AWS에 요청해 Quota를 늘릴 수 있지만 강사 개인의 의견으로는 꼭 필요하지 않은 경우에 EIP를 사용하는 것을 피해야 한다고 한다.

다른 대안은 임의의 Public IP를 사용하고 Route53을 사용해 DNS 이름을 등록하거나 로드 밸런서를 사용하는 것이다.

로드 밸런서는 정적 호스트 이름을 가지고 있으며 로드 밸런서는 올바른 EC2 인스턴스로 리디렉션할 수 있다.

**정리**

- EC2 인스턴스에 Public IP는 중지 후 재시작을 하게 되면 IP 주소가 변경이 된다. 이를 방지하기 위해서 Elastic IP라는 고정 IP가 있다.
- 이 IP를 자유롭게 Attach 또는 Detach 할 수 있고, EIP는 삭제하지 않는 한 변경되지 않고 소유하는 IP이다.
- ~~서버에 EIP가 연결된 경우 요금이 부과되지 않으며, EIP가 연결된 서버를 중지하거나 사용하지 않는 EIP의 경우 요금이 부과되게 된다.~~
- 최근 퍼블릭 IP 고갈 문제로 서버에 EIP가 연결되어 있어도 Public IPv4 에 대해 요금이 부과된다.
- 리전 당 5개의 quota로 되어 있으며, 늘릴 수 있다. 강사는 EIP를 사용하기보다 ELB나 임의의 Public IP를 사용하는 것을 추천했다.

## **CloudWatch Metrics for EC2**

CloudWatch가 EC2와 어떻게 연결되어 있는지 알아보는 것은 중요하다. 이는 시험에서 중요한 부분이다.

AWS는 EC2 인스턴스에 대한 몇 가지 메트릭을 제공하며 AWS는 이러한 메트릭을 자동으로 수집(push)한다.
기본 모니터링이 있으며 이 경우 메트릭은 5분 간격으로 수집된다. 그러나 세부(detailed) 모니터링을 활성화할 수 있고, 이 경우에는 메트릭이 1분 간격으로 수집된다.

이 메트릭에는 CPU, 네트워크, 디스크 및 Status 확인 메트릭이 포함된다.
위 네 가지 매트릭은 매우 중요하다.

사용자 지정 메트릭을 사용할 수도 있다. 이는 사용자가 푸시하는 사용자 지정 메트릭이다. 사용자 지정 메트릭의 기본 resolution은 1분이지만 최대 1초까지의 사용자 지정 메트릭을 사용할 수 있다.

EC2의 사용자 지정 메트릭을 푸시하려면 EC2 인스턴스에 CloudWatch에 메트릭을 푸시할 수 있는 권한이 있는 IAM 역할이 있어야 한다. (Agent 설정해야해서)

**EC2 메트릭**
첫번째로는 CPU 메트릭이다.

CPU Utilization을 확인 가능하고, T2 또는 T3 인스턴스와 같이 버스트가 발생하는 경우에는 버스트의 크레딧 사용량과 크레딧 잔액을 확인할 수 있다.

네트워크의 경우 인스턴스로 들어오고 나가는 네트워크 양을 확인할 수 있다.

상태 확인(health check)은 본질적으로 인스턴스가 건강한지 여부를 확인한다.
EC2 인스턴스가 작동하는지 여부를 Amazon이 확인하고 기본 하드웨어가 작동하는지 확인하는 시스템 상태도 Amazon이 확인한다.
시스템 상태 확인은 Amazon이 수행하는 Health Check 이므로 사용자는 이에 대한 제어권이 없지만, instance status와 system status를 구분할 수 있어야 한다.

인스턴스 스토어를 사용하는 경우에만 EC2 인스턴스에 대한 디스크 정보를 얻을 수 있다. 이 인스턴스 스토어는 디스크에 대한 읽기 및 쓰기 작업 또는 바이트를 제공한다. (EBS에 대한 지표를 확인하기 위해서는 Agent를 설치해야 함)

RAM은 AWS EC2 메트릭에 포함되어 있지 않는다.
시험에 자주 CloudWatch에서 RAM 사용량을 얻을수 있는지 물어본다.
AWS는 CloudWatch에 RAM 사용량을 푸시하지 않는다.

Metric에 대해 자세히 확인해보자

상태 확인의 경우 EC2 인스턴스가 하드웨어 레벨이나 소프트웨어 레벨에서 문제를 겪고 있는지 여부를 확인하는 방법이다. 0과 1 사이의 값으로 나타나고 1의 경우 Fail이 되었다는 이야기

네트워크 IN과 OUT은 당연하게 EC2 인스턴스에 들어오고 나가는 네트워크의 양 및 패킷 수를 나타낸다.

디스크 읽기 및 디스크 쓰기는 0처럼 보이며 우리의 EC2 인스턴스에 EBS 볼륨이 연결되어 있기 때문에 정상이다.
디스크 읽기 및 쓰기 메트릭은 EBS 볼륨 자체에서 확인할 수 있다.
그러나 EC2 인스턴스가 인스턴스 스토어가 있는 EC2 인스턴스인 경우 이러한 메트릭이 채워져 있는 것을 볼 수 있다.

AWS 버스터블 유형의 경우 CPU 크레딧 사용량을 확인할 수 있다.
또한 CPU 크레딧 밸런스가 있다. EC2 인스턴스를 사용하지 않으면 CPU 크레딧 밸런스가 시간이 지남에 따라 증가한다.

EC2 Detailed monitoring을 활성화하면 다음 과정을 거친다.
상태 확인 -> 모니터링 -> 자세한 모니터링 관리
이렇게 하면 5분 간격이 아닌 1분 간격의 그래프가 표시된다.
자세한 모니터링을 활성화하면 추가 비용이 발생할 수 있다.

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

EC2 인스턴스 내에서 메트릭 및 로그를 수집하는 방법에 대해 알아보자.
이를 위한 것이 CloudWatch Unified Agent이다.

EC2 인스턴스나 온프레미스 서버에도 적용할 수 있다.

이 에이전트를 사용해 추가적인 시스템 수준 메트릭(RAM, 프로세스, 사용중인 디스크 공간 등)을 수집할 수 있다.

또한 로그를 CloudWatch Logs로 전송할 수 있다.
기본적으로 EC2 인스턴스를 시작하면 인스턴스에서 CloudWatch Logs로 파일이나 로그가 전송되지 않는다.

에이전트를 구성하려면 SSM Parameter Store를 사용해 구성을 중앙 집중식으로 저장하거나 대안으로 Configuration 파일을 지정할 수 있다.

통합 CloudWatch 에이전트가 있는 EC2 인스턴스에서 메트릭 및 로그를 CloudWatch로 전송하려면 에이전트를 구성하고 올바른 권한이 있는지 확인해야 한다.

온프레미스에서도 동일하게 권한 설정을 해주어야한다. 온프레미스에서 Agent에 대한 권한은 Agent를 실행하는 데 필요한 IAM User를 생성하고 해당 User에 대한 권한을 받는 형식이다.

Agent에 의해 푸시되는 모든 메트릭은 CWAgent 접두사로 시작한다. 이는 네임스페이스에 해당한다. 변경할 수는 있지만 기본값은 이것이다.

시험에서 나오는 중요한 내용 중 하나는 Agent에 procstat 플러그인이 있다는 것이다.
procstat 플러그인을 사용하면 Linux 또는 Windows 서버에서 실행 중인 개별 프로세스의 메트릭을 수집하고 시스템 사용률을 모니터링할 수 있다.

예를 들어 프로세스가 사용하는 CPU 사용 시간, 프로세스가 사용하는 메모리 양 또는 EC2 인스턴스에서 직접 실행되는 프로세스에 대한 정보를 얻을 수 있다.

pid_file로 모니터링할 프로세스를 선택할 수 있다. PID 번호 또는 프로세스의 이름 또는 패턴으로 파일을 얻을 수 있다.

이 플러그인을 사용해 모니터링할 프로세스를 필터링하려면 프로세스에 관한 통계와 관련된 모든 메트릭은 procstat 접두사로 시작한다. 따라서 프로세스가 실행되고 관련 메트릭을 얻고자 하는 경우 Unified CloudWatch Agent를 사용하고 해당 플러그인을 구성해야한다.

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

EC2 인스턴스의 상태 확인은 AWS가 자동으로 수행하는 작업으로, EC2 인스턴스의 하드웨어 및 소프트웨어 문제를 식별한다.

두 가지 유형이 있다.

첫 번째 유형은 system status check 이는 AWS 시스템에서 발생하는 문제를 모니터링한다.

예를 들어 실제 물리 호스트에 대한 소프트웨어 또는 하드웨어 문제 또는 호스트가 시스템 전원을 잃는 경우와 같은 상황이다.
이러한 문제에 대한 overview를 확인하려면 personal health dashboard를 확인하면 된다.
이 대시보드에서는 AWS가 예정된 사항이나 critical maintenance 항목을 제공하며 이 항목들은 EC2 인스턴스 호스트에 영향을 미칠 것으로 조치해야 한나다.
조치 방법 중 하나는 인스턴스를 중지하고 시작하는 것이다.

EC2는 우리 눈에는 보이지 않는 과정을 거친다. 우리가 EC2 인스턴스를 중지하고 시작하게 되면 자동으로 AWS 데이터센터 내의 다른 호스트로 마이그레이션 된다.

예를 들어 호스트 1에서 EC2 인스턴스가 실행중이던 상황에서 중지하고 시작하게 되면 호스트 2로 EC2 인스턴스가 마이그레이션 된다.

단순히 중지하고 시작했기 때문에 새로 시작된 호스트 2에는 문제가 없으며, 하드웨어 장애 문제를 해결할 수 있다.

두 번째 유형은 instance status check 이다.

인스턴스의 소프트웨어 및 네트워크 구성을 모니터링한다. 예를 들어, 네트워크 구성이 잘못 되었거나 메모리가 고갈된 경우이다.

이 문제를 해결하려면 EC2 인스턴스를 reboot하거나 인스턴스 구성을 변경하면 된다.

자동으로 복구하고 CloudWatch 메트릭을 확인하는 방법도 있다.
StatusCheckFailed_System, StatusCheckFailed_Instance 또는 이러한 두 메트릭을 하나의 메트릭으로 그룹화한 StatusCheckFailed이 있다.

첫번째로는 CloudWatch Alarm으로 복구하는 방법이 있다. 이 Alarm에는 인스턴스를 복구하는 recover instance라는 작업(Action)이 있다.
작업이 수행되면 인스턴스는 동일한 Private IP, 동일한 Public IP, 동일한 EIP, 동일한 메타데이터 및 동일한 배치 그룹을 사용해 인스턴스를 복구한다.

또한 CloudWatch Alarm이므로 SNS와 같은 곳으로 알림을 보낼 수도 있다.
EC2 인스턴스는 CloudWatch 메트릭을 통해 상태 확인이 실패한 경우를 모니터링하고 복구할 수 있다.

또한 두번째로는 다른 방법 옵션 2도 있다. 덜 일반적인 방법이다.

auto scaling group min max와 desired 1을 설정하는 것이다.
그리고 상태 확인을 통해 EC2 인스턴스의 상태 확인을 확인한다.

이 경우 EC2 인스턴스에 문제가 발생하면 ASG에 의해 인스턴스가 종료된다. 따라서 최소, 최대 및 원하는 대상이 1인 경우 동일한 ASG 내에서 새 EC2 인스턴스가 시작된다.

이 경우 EBS 볼륨, Private IP, EIP 등을 이전과 동일하게 가져갈수는 없다.
자동화를 잘 설정하면 동일하게 복구 할수도 있을 것이다.

특정 EC2 인스턴스에 중점을 둔 경우 옵션 1이 훨씬 선호될 것이다.

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

이러한 내용은 시험에서 2~3문제의 주요 내용일 수 있으므로 차이를 알아두는 것이 중요합니다.

SYSTEM status checks
시스템 상태 확인은 인스턴스가 실행 중인 AWS 시스템을 모니터링합니다.

기본 호스트에 문제가 있는 경우, 
- 예를 들면:
  - 네트워크 연결 손실
  - 시스템 전원 손실
  - 물리 호스트에서의 소프트웨어 문제
  - 물리 호스트에서의 하드웨어 문제로 네트워크 접근성에 영향을 미침
- 해결 방법
  - AWS가 호스트를 수정하기를 기다리거나, EC2 인스턴스를 새 호스트로 이동시킬 수 있음 = 인스턴스 중지 및 시작 (EBS로 백업된 경우)

INSTANCE status checks
인스턴스 상태 확인은 개별 인스턴스의 소프트웨어 및 네트워크 구성을 모니터링합니다.

- 문제의 예:
  - 올바르지 않은 네트워킹 또는 시작 구성
  - 메모리 부족
  - 손상된 파일 시스템
  - 호환되지 않는 커널
  - 수정이 필요할 때는 직접 개입이 필요함
- 해결 방법  
  - EC2 인스턴스를 restart하거나, EC2 인스턴스 구성 변경


## **EC2 Hibernate**

EC2 Hibernate 설명에 앞서 이해해야할 내용이 있다.

우리는 인스턴스를 중지하고 종료할 수있다는 것을 알 수 있다. 중지하면 EBS 디스크의 데이터가 다음 시작까지 유지 된다.

그리고 종료하면 루트 볼륨이 인스턴스와 함께 삭제되도록 설정한 경우 삭제되지만 종료 시 인스턴스와 함께 삭제되지 않도록 설정된 모든 볼륨은 유지된다.

그리고 인스턴스를 시작하면 운영 체제가 부팅되고, EC2 User data가 실행되고, 그런 다음 운영 체제가 부팅된다.

그리고 응용 프로그램이 시작되고 캐시가 초기화되며 이는 시간이 소요될 수 있다. 왜냐면 기계를 부팅하는 것이기 때문이다.

그러나 Hibernate를 사용하면 RAM에 있던 내용이 보존된다. 즉, 인스턴스 부팅이 훨씬 빨라질 것이다. 왜냐하면 운영 체제가 중지되거나 다시 시작되지 않고 동결되어 있기 때문이다.

내부적으로 RAM 상태가 루트 EBS 볼륨의 파일에 기록된다. 즉, 루트 EBS 볼륨은 암호화되어 있어야 하며 RAM을 포함할 만큼 충분한 공간이 있어야 한다.

사용 사례는 장기 실행 프로세스를 중지하지 않거나 RAM 상태를 저장하려는 경우, 또는 빠르게 부팅하고 초기화에 시간이 오래 걸리는 서비스르 가지고 있는 경우 등이 있다.

EC2 Hibernate에 관한 몇 가지 사항은 다음과 같다.

- 여러가지 다양한 패밀리를 지원하며 인스턴스 RAM 크기는 150GB 미만이어야한다.
- 베어 메탈 인스턴스는 적용되지 않는다.
- Linux 및 Windows를 비롯한 여러 가지 운영 체제에서 작동한다.
- 루트 볼륨에 적용되며 해당 루트 볼륨은 EBS 볼륨이어야 하며, 암호화 되어 있어야하고, RAM을 담을 충분한 크기가 있어야한다.
- 온디맨드, 예약 및 스팟 인스턴스와 같은 모든 종류의 인스턴스에서 사용 가능하다.
- 60일 이상 Hibernate 되지 않으므로, 60일 이상 하려고 한다면 시작하고 다시 중지 해야한다.

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

AMI는 Amazon Machine Image 의 약자이며 EC2 인스턴스의 사용자 정의를 나타낸다.

AWS에서 생성한 AMI를 사용하거나 사용자 정의 AMI로 만들 수 있다.

AMI에는 소프트웨어 구성뿐만 아니라 운영 체제를 정의하고 설정하며 모니터링 도구를 설정할 수 있다.

우리가 직접 AMI를 만들면 EC2 인스턴스에 설치하려는 모든 소프트웨어가 AMI를 통해 미리 패키지되기 때문에 부팅 시간 및 구성 시간이 빨라진다.

그래서 우리는 자체 AMI를 작성해야 하며 특정 Region에 대해 작성할 수 있으며 원한다면 AWS 글로벌 인프라를 활용해 다른 Region으로 복사할 수 있다.

Amazon Linux 2 AMI도 있다. 이 AMI는 AWS에서 제공하는 매우 인기 있는 AMI 중 하나이다.

AWS Marketplace AMI에서 EC2 인스턴스를 시작할 수도 있다. 이는 다른 사람이 만든 AMI로서 sales AMI이다.
AWS에서는 자체 소프트웨어를 설정하고 sales 벤더가 자체 AMI를 생성하여 마켓플레이스에서 AMI를 sales 것이 일반적이다.

사용자로서 우리도 AWS 마켓 플레이스에서 AMI를 sales 비즈니스를 만들 수 있다.

AMI는 어떤 프로세스로 EC2 인스턴스에서 동작하는 가? 먼저 EC2 인스턴스를 시작하고 사용자가 인스턴스를 구성한다. 그런 다음 데이터 무결성이 올바르게 유지 되도록 인스턴스를 중지한다. 그런 다음 이를 기반으로 AMI를 작성할 수 있으며 EBS 스냅샷이 생성된다. 마지막으로 다른 AMI에서 인스턴스를 시작할 수 있다.

**정리**

- AMI는 Amazon Machine Image의 약자로서 인스턴스의 사용자 정의를 나타낸다.
- AMI는 소프트웨어 구성뿐만 아니라 운영 체제를 정의하고 설정하며 모니터링 도구를 설정할 수 있다.
- 직접 AMI를 생성하거나 AWS에서 제공해주는 AMI를 사용할 수 있다.
- 특정 Region에 대해 AMI를 생성할 수 있고 원한다면 다른 Region 또는 계정으로 복사할 수 있다.
- 자체 소프트웨어를 설정하고 sales 벤더가 자체 AMI를 생성한 마켓플레이스 AMI를 사용할수도 있다.
- AMI는 먼저 구성된 인스턴스가 있으면 데이터 무결성이 올바르게 유지 되도록 중지하고, 이 인스턴스를 기반으로 AMI를 작성할 수 있으며 EBS 스냅샷이 생성된다. 생성된 AMI를 기반으로 인스턴스를 시작할 수 있다.

## **AMI No Reboot Option**

"No-Reboot" 이 옵션을 사용하면 EC2 인스턴스를 먼저 종료하지 않고도 AMI를 생성할 수 있다.

기본적으로 이 옵션은 선택되어 있지 않으며, AMI를 생성하기 전에 인스턴스를 중지해야 한다는 것을 의미한다. 이는 파일 시스템 무결성을 유지하기 위함이다.

No-Reboot가 비활성화된 상태에서 AMI를 생성하려면 인스턴스가 중지된다. 중지된 후 연결된 EBS 볼륨은 EBS 스냅샷이 생성된다. 이후 EBS 스냅샷은 AMI로 변환된다.

No-Reboot 옵션을 활성화하면 현재 실행중인 EC2 인스턴스에 다음 AMI 이미지가 않을 수 있으며, 스냅샷이 생성되기 전에 OS 버퍼가 디스크로 플러시되지 않는다. **_인스턴스가 계속 실행 중인 상태에서 AMI를 생성할 때는 주의가 필요하다._**

AWS 백업 서비스를 사용할 때는 Backup Plan을 만들어 AMI를 생성할 수 있다. 그러나 백업 서비스는 EBS 스냅샷을 찍는 동안 인스턴스를 재부팅하지 않는다. 따라서 기본 옵션은 사실상 No-Reboot 동작이다.
즉, AWS 백업을 사용할 때는 인스턴스가 작동 중일 때에도 중단되지 않고 AMI가 생성된다.
backup plan을 사용하면 무결성이 보장되지 않으므로 주의해야 한다.

대안으로 Amazon EC2 인스턴스를 AMI로 스케줄 백업하려면 EventBridge 규칙을 생성할 수 있다. 예를 들어 매주 한 번 Lambda 함수를 호출하는 일정을 만들 수 있다.

Lambda 함수에는 reboot 옵션과 함께 image를 생성하는 고유의 코드가 있을 것이다.
이렇게 한다면 EC2는 rebooting을 진행하고 AMI를 생성할 것이다.

**정리**

- No-Reboot 이라는 옵션이 있다.
- 이는 실행중인 인스턴스에 AMI를 생성할 때 재부팅을 하지 않는다는 의미이며, 기본적으로 AMI를 생성하기 전에 인스턴스를 중지해야한다.
- No-Reboot 옵션을 활성화하게 되면 실행중인 인스턴스에 연결된 EBS 볼륨에 대한 스냅샷이 직접 생성되고, 그 다음 AMI 이미지가 생성된다.
- 이 경우 파일 무결성이 보장되지 않을 수 있고, 스냅샷이 생성되기 전에 OS 버퍼가 디스크로 플러시되지 않는다.
- AWS 백업 서비스를 사용하는 경우도 인스턴스를 재부팅하지 않는다. 사실상 No-Reboot 동작이다.
- 대안으로는 EventBridge와 Lambda를 이용해서 특정 기간에 람다 함수를 실행 시켜 인스턴스를 재부팅하고 AMI를 생성하는 코드를 작성해 실행시키면 된다.

## **EC2 Instance Migration using AMIs**

EC2 인스턴스를 한 AZ에서 다른 AZ로 마이그레이션하려면 AMI를 사용한다.

기본적으로 AMI는 원본과 동일한 데이터, 파일 시스템 및 응용 프로그램을 가지고 있기 때문에 마이그레이션 된 인스턴스도 동일한 내용을 가진다.

다른 AWS 계정과 AMI를 공유하는 **Cross-Account AMI Sharing** 도 있다.

AMI를 공유할 때 AMI의 소유권(ownership)에는 영향을 미치지 않는다. 여전히 공유를 한 계정이 소유자로 남아있다.

AMI를 공유할 수 있는 경우는 두 가지이다.

1. 볼륨이 암호화되지 않은 경우
2. 볼륨이 암호화되었는데 사용자 고유의 고객 관리 키(CMK)로 암호화된 경우

예를 들어 설명해보자
계정 A에서는 암호화되지 않은 AMI가 생성되며, 이를 계정 B와 공유한다. 그러면 계정 B는 해당 소스 AMI에서 직접 EC2 인스턴스를 시작할 수 있다. 마찬가지로 암호화 키를 사용하여 AMI를 공유할 때는 해당 AMI뿐만 아니라 암호화된 키도 공유해야 한다. 그리고 대상 계정에는 해당 키를 사용하여 특정 작업을 수행할 수 있는 권한을 부여해야 한다.

다음으로는 **Cross-Account AMI Copy**이다.

소스 AMI의 소유자인 상태에서 대상에 복사하면 대상 AMI의 소유자가 된다.
따라서 소스 AMI의 소유자는 대상 AMI의 저장소(EBS 스냅샷)에 대한 읽기 권한을 부여해야 한다.
계정 B는 이제 AMI의 EBS 스냅샷을 읽을 권한이 있으므로 소스 AMI를 자체 계정으로 복사할 수 있다. 이 과정에서 필요에 따라 스냅샷을 자체 키로 암호화할 수 있다.

공유된 AMI가 암호화된 스냅샷인 경우 소유자는 암호화된 키를 공유해야 한다. 복사 중에 자체 CMK로 AMI를 암호활 수도 있다.

예를들어 기본 EBS 스냅샷을 공유하고 대상 계정에 KMS 키 권한을 부여한다. 대상 계정은 CMK-A를 사용해 암호를 해독하고 CMK-B 및 자체 계정을 사용해 다시 암호화할 수 있는 복사 명령을 실행할 수 있다. 이렇게하면 대상 계정 B가 소유하는 자체 암호화 매커니즘을 사용하는 사용자 정의 AMI가 생성된다.

정리하자면 AMI를 복사하려면 복사를 위해 AMI 소유자가 되어야한다. 그리고 소스 AMI의 소유자는 대상 AMI의 EBS 스냅샷에 대한 읽기 권한을 부여해야한다.

AMI가 공유된 경우 해당 AMI를 복사하여 소유자가 되는 대신 복사를 통해 자체 계정에서 AMI를 소유할 수 있다.

또한 AMI 자체를 사용하려면 해당 AMI의 권한을 확인하고 편집할 수 있다. 콘솔에서 권한을 수정하려면 AMI - Action - Edit AMI permissions를 선택하면 된다. 여기에는 AMI의 공개 여부를 포함해 여러 옵션이 제공된다. 특정 계정, 조직 또는 OU와 공유하려면 해당 계정 ID를 추가할 수있다. 그리고 권한을 부여할 때 해당 스냅샷을 만들 때 연결된 스냅샷에 볼륨 권한을 추가할 수도 있다.

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

가상 머신이나 컨테이너 이미지의 자동 생성을 위해 사용되는 서비스

EC2 Image Builder를 이용하면 EC2 인스턴스용 AMI를 자동으로 생성, 유지 관리, 유효성 검사 및 테스트할 수 있게 된다.

예를 들어 설명해보자면 EC2 Image Builder 서비스가 실행될 때 자동으로 인스턴스를 생성하게 되는데, 이 인스턴스는 구성 요소를 빌드하고 소프트웨어를 사용자 정의한다.
예를 들어 JAva 설치, CLI 업데이트, 소프트웨어 시스템 업데이트, 방화벽 설치 또는 EC2 인스턴스에서 정의한 내용을 수행할 수 있다.

그 다음 이 모든 작업이 완료되면 해당 EC2 인스턴스에서 AMI가 생성된다. 이 모든 것들이 자동화된다.

AMI를 생성하고 유효성 검사를 하고 싶다면 Image Builder는 해당 AMI에서 테스트 EC2 인스턴스를 자동으로 생성하고 미리 정의한 여러 테스트를 실행한다.
테스트를 실행하고 싶지 않다면 테스트를 건너 뛸 수 있다.

그 다음 AMI가 테스트되면 해당 AMI가 배포된다.

Image Builder는 AMI를 가져와 여러 Region에 배포할 수 있어 응용 프로그램 및 워크플로우가 실제로 글로벌하게 동작하도록 할 수 있다.

EC2 Image Builder는 스케줄에 따라 실행할 수 있다. 매주 스케줄을 정의하거나 패키지가 업데이트될 때 실행하거나 수동으로 실행할 수 있다.

이 서비스는 무료 서비스여서 기본 리소스에 대해서만 비용이 청구된다.
이 프로세스 동안 EC2 인스턴스를 생성하면 Image Builder가 이러한 EC2 인스턴스를 생성하게 되므로 해당 EC2 인스턴스에 대한 비용이 청구된다.
또한 AMI가 생성되고 배포되면 해당 AMI의 스토리지에 대한 비용이 청구된다.

**정리**

- Image Builder는 가상 머신이나 컨테이너 이미지의 자동 생성을 위해 사용되는 서비스이다.
- Image Builder를 이용하면 EC2 인스턴스 용 AMI를 자동으로 생성, 유지 관리, 유효성 검사, 테스트 할 수 있다.
- AMI를 생성하고 유효성 검사를 하고 싶다면 Image Builder는 해당 AMI에서 테스트 EC2 인스턴스를 자동으로 생성하고 미리 정의한 여러 테스트를 실행할 수 있다. 테스트는 건너뛸 수 있다.
- Image Builder는 AMI를 가져와 여러 Region에 배포할 수 있어 응용 프로그램 및 워크 플로우가 실제로 글로벌하게 동작하도록 할 수 있다.
- 또한 스케줄링도 가능하다. 매주 스케줄을 정의하거나 패키지가 업데이트될 때 실행하거나 수동으로 실행 가능하다.
- Image Builder는 무료 서비스여서 기본 리소스에 대해서만 비용이 청구된다. 프로세스 동안 EC2 인스턴스가 생성되면 해당 인스턴스에 대해서만 청구가 되며, 생성된 AMI 저장 비용이 청구가 된다. 이외에 별도의 빌드 및 테스트 및 배포에 대한 비용은 청구되지 않는다.

## **AMI In Production**

프로덕션 환경에서 사용하는 방법에 대한 설명

사용자가 사전 승인된 AMIs에서만 EC2 인스턴스를 시작하도록 강제하는 방법이 있다.

사전 승인된 AMI란 특정 태그로 AMI에 태그를 지정해 IAM 정책과 결합하면 사용자가 특정 태그가 지정된 AMI만 시작할 수 있도록 제한할 수 있다.

예를 들어 env='prod' 환경으로 태그를 AMI에 할당해 제한하는 것이다.

계정 내 두 종류의 AMI가 있다고 가정 해보자 태그가 없는 AMI와 env='prod'로 태그가 있는 AMI

AMI에 태그를 추가할 수 있는 사용자를 제한하는 것도 중요하다. 하지만 태그와 IAM 정책의 조합 덕분에 사용자는 승인되지 않은 AMI에서 EC2 인스턴스를 시작할 수 없고, 승인된 AMI에서 EC2 인스턴스를 시작할 수 있다.

결론적으로 AMI가 승인되지 않았을 때 인스턴스를 시작하지 못하도록 하는 것

두 번째로는 AWS Config를 사용해 승인되지 않은 EC2 인스턴스로 정의되는 EC2 인스턴스를 찾을 수 있다.

예를 들어 사용자가 승인된 AMI와 승인되지 않은 AMI에서 인스턴스를 launch 하는 방법을 찾았다면 Config를 사용해 이 두 EC2 인스턴스가 규정을 따르는지 여부를 모니터링하는 규칙을 작성할 수 있다.

규정을 따르지 않는 것은 Config에 의해 플래그가 지정되며, 조치를 취할 수 있다. 규정을 따르는 것은 문제가 없다. 플래그는 콘솔 - Rules에서 확인 가능

**정리**

- 프로덕션 환경에서는 사용자가 사전 승인된 AMI로만 EC2 인스턴스를 시작하도록 강제하는 방법이 있다.
- 사전 승인된 AMI란 특정 태그를 AMI에 지정하는 것이고, 이를 IAM 정책과 결합하면 사용자가 특정 태그가 지정된 AMI로만 인스턴스를 시작할 수 있는 개념이다.
- 예를 들어 env='prod' 라는 태그가 지정된 AMI만 특정 사용자가 시작할 수 있는 것이다.
- 또한 태그를 추가할 수 있는 사용자를 제한하는 것도 중요하다.
- 태그를 추가하는 방법 또는 AWS Config를 사용해 승인되지 않은 EC2 인스턴스로 정의되는 EC2 인스턴스를 찾을 수 있다.
- 예를 들어 사용자가 승인이 되었거나 되지 않았거나 인스턴스를 시작할 수 있을 때 Config를 사용해 이 두 EC2 인스턴스가 규정을 따르는지 여부를 모니터링하는 규칙을 작성할 수 있다.
- 규정을 따르지 않는 것은 Config에 의해 플래그가 지정되고, 조치를 취할 수 있으며, 규정을 따르는 것은 문제가 없다. 플래그는 콘솔에서 확인 가능하다.

## **Systems Manager Overview**

System Manager는 확장 가능한 EC2 Fleet 인스턴스와 온프레미스 서버를 관리하는 데 도움이 된다.

여러 도구들이 Systems Manager에 존재하고 인프라 상태에 대한 인사이트를 얻게하고 문제를 쉽게 감지하며 패치 자동화와 향상된 규정 준수를 제공한다.

시험에서는 패치를 적용할 때 대개 시스템 매니저를 사용하거나 실행중인 모든 종류의 자동화에 시스템 매니저를 사용할 것이다.

이 서비스는 Windows 및 Linux 운영 체제 모두에서 작동하며 CloudWatch Metrics와 대시 보드와 완전히 통합되어 있다.

또한 Config와 통합되어 있으며 무료 서비스이고 사용하는 리소스 또는 생성하는 리소스에 대해서만 비용이 발생한다.

**정리**

- System Manager는 확장 가능한 EC2 Fleet 인스턴스와 온프레미스 서버를 관리하는데 도움이 된다.
- 시험에서는 패치를 적용하거나 실행 중인 모든 종류의 서버에 대해 자동화하는 작업에 System Manager를 이용한다.
- Window 및 Linux 운영체제 모두에서 작동하며 CloudWatch Metric, CloudWatch 대시보드와 완전히 통합되어 있다.
- System Manager는 무료 서비스이고, 사용하는 리소스 또는 생성하는 리소스에 해당해서만 비용이 부과된다.

## **AWS Tags & SSM Resource Groups**

태그와 리소스 그룹에 대해 알아보자

태그는 많은 AWS 리소스에 적용할 수 있는 key-value 쌍이다.
일반적으로 EC2에서 사용되지만 다양한 소스에서도 사용된다.

일반적으로 "Environment", "Team" 등의 태그가 사용된다.

태그는 리소스 그룹화, 자동화, 보안 및 비용 할당을 위해 사용된다. 일반적인 규칙은 너무 적은 태그보다는 많은 태그를 가지는 것이 더 좋다.

태그를 사용해 리소스 그룹을 생성하고 동일한 태그를 공유하는 두 리소스 및 여러 리소스를 그룹화할 수 있다.

예를 들어 "Environment"="dev"로 태그된 두 개의 EC2 인스턴스를 그룹화할 수 있다.
Region 수준에서 수행할 수 있는 작업이며, EC2 인스턴스뿐만 아니라 S3, DynamoDB, Lambda 등과 함께 작동한다.

시스템 매니저에서 리소스 그룹을 만들고 태그 기반으로 선택하면 여러 리소스를 관리할 수 있다.

예를 들어 "Environment"="dev" 태그가 할당된 EC2 가 두개 있다고 했을 때 리소스 그룹을 생성해서 AWS::service::resource 형식의 리소스 유형을 선택하고 "Environment"="dev" 태그를 지정하게 되면 해당 리소스 그룹은 태그 기반으로 SSM을 직접 작업할 수 있다.

**정리**

- 태그는 많은 리소스에 적용할 수 있는 Key Value 쌍이다. 다양한 리소스에서 사용된다.
- 일반적으로 "Environment":"prod", "Team":"Infra" 등의 태그로 많이 정의된다.
- 태그는 리소스 그룹화, 자동화, 보안 및 비용 할당으로 많이 사용된다. 일반적으로 적은 태그보다 많은 태그를 가지는 것이 더 좋다.
- 태그를 사용해 리소스 그룹을 생성하고 여러 리소스를 그룹화할 수 있다.
- 동일한 태그를 사용해 리소스를 그룹화하면 태그 기반으로 그룹화된 SSM 작업을 할 수 있다.

## **SSM Documents & SSM Run Command**

SSM Documents는 JSON 또는 YAML로 작성될 수 있으며, 매개변수를 정의해 Documents가 무엇을 수행하는지, 즉 작업을 정의하고 특정 서비스에서 문서가 실행된다.

AWS에는 이미 많은 문서가 존재하며, 우리가 하는 작업을 더 빨리 진행하기 위해 이를 활용할 수 있다.

SSM을 자주 사용하기 시작하면 자체 SSM Documents를 작성할 것이다.

이러한 Documents를 state manager, patch manager, automation 와 같은 다른 SSM 기능에 적용할 수 있으며, SSM Parameter Store에서 일부 데이터를 검색하여 문서가 어떻게 작동할지에 대한 일종의 모듈성과 동적성을 제공할 수 있다.

SSM 은 Amazon 소유의 Documents, 내 소유의 Documents 등이 있다. 내가 소유한 Documents도 있고 다른 사람들과 Documents를 공유할 수도 있다.

Documents를 적용하는 첫 번째 방법은 Run Command SSM 기능을 사용하는 것이다.

Run command를 사용하여 전체 Documents를 실행하거나(EC2 인스턴스 플릿 전체에 대한 스크립트인 경우) 간단히 EC2 인스턴스 플릿 전체에서 단일 명령을 실행할 수 있다.
이를 위해 이전에 만든 리소스 그룹을 사용할 수 있다.

run command에는 rate control 및 error contorl 기능이 있다. 예를 들어 1,000개의 인스턴스에 명령을 실행한다면 1,2 분 동안 다운될 것이다. 점진적으로 수행해야 하며, 오류가 발생할 경우 플릿의 명령을 중단할 수 있어야 한다.

IAM & CloudTrail과 완전히 통합되어 있다.
그래서 누가 명령을 실행하는지 알 수 있다.

SSH가 필요 없다. 에이전트가 명령을 실행하지만 system manager는 명령을 실행하기 위해 인스턴스에 SSH 액세스 권한을 필요로 하지 않는다.

명령 output은 콘솔에서 볼 수 있지만 S3 버킷이나 CloudWatch로 보낼 수도 있다.

명령 실행 상태를 알려면 콘솔을 살펴볼 수도 있고 SNS로 정보를 보낼 수도 있다. 진행 중인지, 성공 했는지 실패 했는지 등을 알 수 있다.

자동화와 EvnetBridge를 위한 CloudWatch Events의 실행 명령을 호출하는 데 사용될 수 있다.

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

Automation은 EC2 인스턴스나 다른 AWS 리소스를 위한 일반적인 유지 관리와 배포 작업을 단순화하도록 도와준다.

예를 들어 Automation을 사용하면 인스턴스 재시작이나 AMI 생성, EBS 스냅샷 작업같은 걸 할 수 있다.

run command의 경우 인스턴스의 내부에서 명령어를 실행했지만 automation의 경우 외부에서 실행한다.

Automation Runbook의 경우 자동화 형식이 될 SSM을 위한 문서의 이름이다. 일반적으로 runbook이라고 한다.

runbook은 EC2 인스턴스나 AWS 리소스에 작업을 정의하고 수행하는 것이다.
AWS가 미리 정의한 Runbook을 사용할 수도 있고 custom runbook을 만들 수도 있다.

SSM Automation은 콘솔이나 CLI, SDK를 이용해 트리거 된다.
또한 EventBridge Rule을 이용해서 자동화 할 수 있다.
SSM Maintenance Windows를 이용해서 특정 일정에 수행되는 자동화도 가능하다.
AWS Config rules remediation으로 규칙에 준수되지 않는 리소스를 발견할 때마다 자동화도 가능하다.

Documents가 실행될 곳을 선택할 수도 있다.
simple execution, Rate control, Multi-account and Region, Manual execution 등이 가능하다.

**정리**

- Automation은 EC2 인스턴스나 다른 AWS 리소스를 위한 일반적인 유지 관리와 배포 작업을 단순화한다.
- Run Command와의 다른 점은 Run Command는 단일 명령어 및 스크립트를 수행하는데, Automation은 여러 작업을 단계적으로 수행하거나 Task의 형태로 나누어 수행 가능하다.
- Automation Runbook의 경우 자동화 형식이 될 문서의 이름이다. Runbook은 EC2 인스턴스나 AWS 리소스에 작업을 정의하고 수행하는 것이다. SSM Run Command로 비교하면 Documents == Runbook인 느낌
- Runbook의 경우 AWS가 미리 정의한 Runbook도 있고 Custom Runbook을 만들 수도 있다.
- Automation은 콘솔이나 CLI, SDK를 이용해 트리거 된다. EventBridge Rule을 이용해서 자동화할 수도 있다.
- SSM Maintenance Windows를 이용해서 특정 일정에 수행되는 자동화도 가능하다.
- AWS Config rules remediation으로 규칙에 준수되지 않는 리소스를 발견할 때마다 수행하는 자동화도 가능하다.

## **[SAA/DVA] SSM Parameter Store Overview**

SSM 파라미터 스토어는 configuration과 secrets를 위한 보안 저장소이다.
선택적으로 configuration을 KMS 서비스를 이용해서 암호화할 수도 있다.
SSM 파라미터 스토어는 serverless이며 확장 가능하며 지속 가능하고 사용이 쉬운 SDK가 특징이다.

configuration과 secrets를 업데이트하면 버전 트래킹을 하게 된다.

보안은 IAM을 통해 제공된다.

아마존 EventBridge로 알림을 받을 수 있다.

CloudFormation과 통합될 수 있다. CloudFormation이 파라미터 스토어의 매개 변수를 stack의 input 매개 변수로 활용할 수 있다.

예를 들어 Application과 SSM Parameter Store가 있을 때 일반 텍스트 구성을 저장할 수 있고, Application의 IAM 사용 권한(EC2 인스턴스 역할이나 암호화된 Configuration을 통해서 권한이 부여된)을 확인하게된다.
이 경우 Parameter Store는 KMS로 암호화될 것이다.
KMS 서비스는 암호화와 Decryption에 사용될 것이다.

물론 Application은 기본 KMS 키에 액세스 권한이 있어야 암호화와 복호화를 실행할 수 있다.

파라미터 스토어에 매개 변수를 계층 구조와 함께 저장 가능하다.

예를 들어 부서를 경로로 정의할 수 있다. 그리고 부서 아래에 application 그리고 dev prod 등등 원하는 방식으로 변수를 정리할 수 있게 해준다.
/my-department/my-app/dev/db-url/
/my-department/my-app/dev/db-password/
/my-department/my-app/prod/db-url/
/my-department/my-app/prod/db-password/
등등..

그 다음 IAM 정책을 단순화해 Application이 전체 부서나 전체 앱 또는 앱 부서 환경 특정 경로에 액세스할 수 있도록 할 수 있다.

파라미터 스토어를 통해 Secrets Manager에 접근할수도 있다.
ex) /aws/reference/secretsmanager/secret_ID_in_Secrets_Manager

또한 AWS가 발행하는 퍼블릭 파라미터라는 것도 사용할 수 있다.
예를 들어, 우리 특정 Region에서 최신 AMI를 찾으려면 API 호출로서 파라미터 스토어에서 가져올 수 있다.
ex) /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 (public)

Application을 예로 들면 Dev Lambda Function은 IAM 롤이 있고, /my-department/my-app/dev/db-url 등에 액세스를 가능하게 한다.

Systems Manager에는 두 종류의 매개 변수 계층이 있다.
하나는 Standard 하나는 Advanced이다.

가장 큰 차이는 최대 변수 값 크기이다. Standard는 4KB Advanced는 8KB이다.
그리고 매개 변수 정책의 가용성도 있다.

Standard는 공짜고 Advanced는 한달에 advanced parameter 당 0.05$이다.

매개 변수 정책이란 무엇인가?

- 매개 변수에 TTL을 설정할수 있다. 만료일을 의미한다. 패스워드 같은 민감한 데이터를 업데이트하거나 삭제하도록 강요하는 것이다.
- 한번에 여러 가지 정책을 할당할 수 있다.
- 예를 들어서 매개 변수가 만료되기 15일 전에 이벤트 브릿지에서 알림을 받거나, 20일 동안 매개 변수가 업데이트되지 않는다면 알림을 받는 것처럼 두 개의 알림을 한번에 받을 수도 있다.

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

**SSM Inventory**
SSM의 인벤토리 기능을 살펴보자.
관리되는 인스턴스로부터 메타데이터를 수집하는 데 사용된다. EC2일수도 있고 On-premises일 수도 있다.

메타데이터는 많은 것을 포함할 수 있다. 설치된 소프트웨어, OS 드라이버, configurations, 설치된 업데이트, 실행중인 서비스 등등

AWS 콘솔에서 데이터를 볼 수도 있고 S3에 저장할 수도 있다. 서버리스 용 Athena를 이용해서 쿼리 후 분석할 수도 있고, 대시보드를 구축하고 싶다면 QuickSight를 이용할 수도 있다.

메타데이터의 수집 간격을 지정할 수 있다. 분, 시간, 일 단위로 가능하다.

여러 계정 및 Region에서 데이터를 모아 하나의 계정에서 중앙 집중형으로 쿼리를 날릴 수 있다.

마지막으로, 원한다면 사용자 지정 인벤토리를 만들 수 있다. 예를들어 각각의 관리되고 있는 인스턴스의 rack 위치를 확인하거나 할 수 있다.

초기에는 enable inventory를 해야 모든 인스턴스에 대한 inventory를 활성화 할수있다.

**State Manager**
State Manager는 관리되고 있는 EC2를 우리가 정의한 상태로 유지하는 프로세스를 자동화하는 데 사용된다.
사용 사례는 소프트웨어의 인스턴스를 부트스트랩하거나, OS나 소프트웨어 업데이트를 일정에 따라 패치하는 것이다.

State Manager Association을 만들어야한다.
인스턴스가 유지되어야하는 상태를 정의한다. 예를 들어 무조건 포트 22번을 닫거나 EC2의 안티 바이러스를 설치해야 하는 등의 상태이다.
그리고 해당 configuation이 적용 될 스케줄을 지정해준다.

State Manager를 활용하려면 SSM Documents를 사용하고 Association을 생성해야한다.
예를 들어 CloudWatch Agent를 설정하는 SSM Document를 생성할 수 있다.

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

**SSM Patch Manager 개요**

- 패치 매니저를 사용하여 관리되는 인스턴스의 패치 프로세스를 자동화
- OS 업데이트, 응용 프로그램 업데이트 및 보안 업데이트를 포함한다.
- EC2 인스턴스 및 온프레미스 서버, Linux, MacOS 및 Windows를 모두 지원한다.
- 패치 매니저를 사용하여 패치를 원할 때 실행하거나 Maintenance Windows를 사용하려면 일정에 따라 패치 매니저를 실행할 수 있다.
- 패치 매니저는 인스턴스를 스캔하고 패치 컴플라이언스 보고서를 생성한다. 이 보고서는 모든 Machine의 목록이고, 이 보고서에 따른 조치를 취할 수 있다.

**패치 매니저 구성 요소**

- 패치 베이스라인
  - 패치 베이스라인은 EC2 인스턴스에 설치해야하는 패치와 설치해서는 안되는 패치를 정의하며 사용자 정의 패치 베이스라인을 생성할 수 있다.
  - 사용자 정의 패치 베이스라인을 사용하여 인스턴스에서 승인 또는 거부된 패치를 지정할 수 있다. 패치는 출시된 지 일정 기간 이내에 자동으로 승인될 수도 있다.
  - 기본적으로 패치 베이스라인은 SSM 매니지드 인스턴스에 크리티컬 패치 및 보안 관련 패치만을 설치하도록 설정된다.
- 패치 그룹
  - 특정 패치 베이스라인을 정의하는 경우 패치 그룹을 생성하여 이를 연결할 수 있다. 예를들어 dev, test, prod에 대한 패치 그룹을 생성할 수 있다.
  - 패치 그룹을 사용할 때는 인스턴스가 tag key가 정의되어야 하고, 각 인스턴스는 언제든지 하나의 패치 그룹에만 속할 수 있다.
  - 패치 그룹은 하나의 패치 베이스라인에만 등록될 수 있다.

**패치 베이스라인 종류**

- 패치 베이스라인은 미리 정의된 베이스라인이 있고, 이는 AWS에서 관리하며 수정할 수 없다.
- 또한 사용자 정의 패치 베이스라인을 정의할 수 있다.
  - 여기에는 자동으로 승인되는 패치, 허용되는 패치, 거부되는 패치 및 운영체제가 포함될 수 있다.
  - 또한 사용자 지정 또는 대체 패치 저장소를 지정할 수 있다.

**Maintenance Windows**

- 인스턴스에서 작업을 수행할 일정을 정의할 때 사용된다.
- OS 패치, 드라이버 업데이트 및 소프트웨어 설치 등의 작업을 할 수 있으며, 특정 시간 및 기간에 수행 가능하다. (03:00 ~ 05:00 등)
- Maintenance window는 일정과 기간 그리고 등록된 인스턴스의 집합 그리고 수행되어야할 태스크 등이 포함되어 있다.

**시험 관점에서 알아야할 내용**

- 패치 매니저가 인스턴스에 패치를 적용하는 데 사용된다는 것
- 필요하다면 특정 Maintenance Windows에서 특정 rate control도 가능하다.

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

**개요**

- EC2 인스턴스 및 온프레미스 서버에서 안전한 셸 환경을 시작하는 방법
- 콘솔, CLI 또는 세션 매니저 SDK를 통한 액세스를 지원하며, 세션 매니저의 중요한 이점은 인스턴스에 직접 SSH 액세스가 필요하지 않다는 것
- 배스쳔 호스트나 SSH 키가 필요하지 않다.

**작동 방식**

- EC2 인스턴스는 SSM 에이전트를 실행하고 SSM 서비스에 등록할 Role이 있어야한다.
- 사용자는 올바른 IAM 권한으로 세션 매니저 서비스에 연결한다.
- 세션 매니저는 EC2 인스턴스에서 명령을 실행하여 Run commands 서비스 기능과 유사한 기능을 제공한다.
- Linux, MacOS, Windows에 대한 공통 쉘 인터페이스를 제공한다.
- 모든 연결, 인스턴스 및 실행된 명령은 로그로 기록되며 로그는 Amazon S3 또는 CloudWatch Logs로 전송할 수 있다.

**보안 및 규정 준수**

- CloudTrail은 StartSession 이벤트를 확인할 수 있어 자동화, 규정 준수 및 경고에 대한 가시성을 제공한다.
- IAM Policy는 사용자 또는 그룹이 세션 매니저에 액세스하고 인스턴스 액세스를 정의하는 데 사용된다.
- 태그를 사용해 특정 EC2 인스턴스에만 액세스를 제한할 수 있다.

**IAM 정책 예시**

```json
{
  "Effect": "Allow",
  "Action": "ssm:StartSession",
  "Resource": "arn:aws:ec2:*:*:instance/*",
  "Condition": {
    "StringEquals": {
      "ssm:resourceTag/environment": "dev"
    }
  }
}
```

**추가 정보**

- SSM에 액세스하고 S3 및 CloudWatch에 쓰기 권한이 필요하다.
- 선택적으로 세션에서 사용자가 실행할 수 있는 명령을 제한할 수 있다.

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

**Scalability와 고가용성**

- Scalability는 응용프로그램 시스템이 적응해 더 큰 부하를 견딜 수 있다는 것을 의미한다.
- Scalability는 수직 Scalability, 수평 Scalability로 나뉜다.
- Scalability는 Availability와는 다른 말이다.

**수직 Scalability**

- 인스턴스의 사이즈를 증가해야 한다는 것을 의미한다.
- 인스턴스 타입을 t2.micro 에서 t2.large로 업스케일링하는 경우를 말한다.
- 비분산 시스템의 경우 수직 Scalability를 사용해야한다. 예를 들어 데이터베이스가 있다.
- 일반적으로 수직으로 얼마나 확장할 수 있는지에는 제한이 있다.

**수평 Scalability**

- 응용 프로그램에 대한 인스턴스/시스템 수를 증가시킨다는 것을 의미한다.
- 모든 응용 프로그램이 분산 시스템이 될수 있는 것은 아니다.

**High Availability**

- 일반적으로 수평 Scalability와 함께 진행되지만 항상 그런것은 아니다.
- 응용 프로그램 또는 시스템을 최소한 두 개의 데이터 센터 또는 AWS의 두 가용 영역에서 실행한다는 것을 의미한다.
- 고가용성의 목표는 데이터 센터 손실을 견딜 수 있도록 하는 것이므로 한 센터가 다운 되더라도 여전히 운영이 가능하다.
- RDS Multi AZ에서는 수동 형태의 고가용성이 있을 수 있다.

인스턴스를 수평으로 확장/축소 하는 것은 scale out/in 이라고 한다. 그리고 수직으로 확장/축소 하는 것은 scale up/down 이라고 한다.

고가용성은 Multi AZ가 활성화된 오토 스케일러 그룹이나 로드 밸런서를 위한 것이다.

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

**개요**

- 로드 밸런서는 받은 트래픽을 여러 백엔드 또는 다운스트림 EC2 인스턴스 또는 서버로 전달하는 서버이다.
- 사용자가 많아질수록 로드는 EC2 인스턴스 전체에 고르게 분배된다. 그런데 핵심은 사용자가 어떤 백엔드 인스턴스에 연결되어 있는지 모른다는 것이다.
- ELB를 사용해야하는 이유는 우리의 응용 프로그램에 대한 단일 액세스 포인트를 노출하기 때문이다.
- 다운스트림 인스턴스의 장애를 원활하게 처리할 수 있다.
- 로드 밸런서는 헬스 체크 매커니즘을 갖추고 있으며 어떤 인스턴스에 트래픽을 보내지 않아야 하는지 이해할 수 있다.
- 웹 사이트에 HTTPS 암호화 트래픽이 있는 경우 SSL Termination을 수행할 수 있다.
- 쿠키를 사용해 지속성을 강제할 수 있다.

**ELB란?**

- ELB는 관리형 로드 밸런서이다. AWS가 관리하고 무슨 일이 있든 작동함을 보장한다. 업그레이드, 유지보수 및 고가용성을 처리한다.
- 자체 로드 밸런서를 관리해야 한다면 확장성 측면에서 어려움이 있을 것이다.
- 로드 밸런서는 다양한 AWS 오퍼링 및 서비스와 통합되어 있다. ASG, ECS, ACM, CloudWatch 등등 많은 서비스와 통합된다.

**Health check**

- 헬스 체크는 우리의 ELB가 EC2 인스턴스가 제대로 작동하는지 여부를 확인하는 방법이다. EC2가 제대로 작동하지 않는다면 해당 인스턴스로 트래픽을 보내고 싶지 않기 때문이다.
- 헬스 체크는 포트와 라우트를 사용하여 수행된다. 예를들어 프로토콜은 HTTP이고 포트는 4567이며 엔드 포인트는 /health이다. 이 같은 경우 200 상태 코드를 응답하지 않으면 인스턴스는 건강하지 않다고 표시될 것이다. 건강하지 않다고 생각이 되면 트래픽을 보내지 않을 것이다.

**ELB 종류**

- CLB (Classic Load Balancer)
  - 구 버전 로드 밸런서이다.
  - HTTP, HTTPS, TCP, SSL 등과 호환된다.
  - 전반적으로 AWS에서는 더이상 이 로드 밸런서를 사용하지 않기를 원한다.
- ALB (Application Load Balancer)
  - HTTP, HTTPS, 웹 소켓을 지원한다.
- NLB (Network Load Balancer)
  - TCP, TLS, UDP 프로토콜을 지원한다.
- GWLB (Gateway Load Balancer)
  - 네트워크 레이어에서 작동하며 IP 프로토콜을 사용한다.

전반적으로 더 최신 세대의 로드 밸런서를 사용하는 것이 좋다.
네트워크나 외부 공개 로드 밸런서로 설정되거나 내부로 설정될 수 있다.

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

**개요**

- 레이어 7에서만 작동하는 로드 밸런서, 즉 HTTP에 특화되어 있다. 여러 대의 머신에 HTTP 응용 프로그램으로 라우팅할 수 있게 해준다.
- 여러 대의 머신은 대상 그룹(Target Group)이라 불리는 것에 그룹화된다.
- 컨테이너와 ECS를 사용할 때 유용하다
- HTTP/2와 웹소켓을 지원하며, 리다이렉트를 지원한다. 로드 밸런서 수준에서 HTTP에서 HTTPS로 트래픽을 자동으로 리다이렉트 한다.
- URL의 대상 경로를 기반으로 경로 라우팅을 지원한다. 예를들어 example.com/users 및 example.com/posts와 같이 URL의 대상 경로를 기반으로 라우팅할 수 있다.
- 또한 URL의 hostname 기반으로 라우팅할 수도 있다. 따라서 one.example.com 또는 other.example.com 을 사용해 액세스되는 경우 서로 다른 대상 그룹으로 라우팅될 수 있다.
- 그리고 쿼리 문자열과 헤더를 기반으로 라우팅할 수도 있다. 예를 들어 example.com/reserves 및 id=123&order=false는 서로 다른 대상 그룹으로 라우팅될 수 있다.
- ALB는 마이크로 서비스와 컨테이너 기반 애플리케이션을 보유할 때 훌룡하다.
- Auto Scaling 그룹에 의해서 ALB 뒤에 있는 애플리케이션이 관리될 수 있다.
- Lambda 함수를 ALB 뒤에 둘수도 있다.
- IP 주소를 ALB 뒤에 둘 수도 있으며, 이 IP는 반드시 Private IP 주소여야한다.
- 헬스 체크는 대상 그룹 수준에서 이뤄진다. 대상 그룹을 구성하려면 서버의 사설 IP를 지정해야한다.
- ALB는 고정된 hostname을 얻게 된다.
- 애플리케이션 서버는 클라이언트의 IP를 직접적으로 확인할 수 없다 클라이언트의 실제 IP는 X-Forwarded-For 헤더에 삽입된다.
- X-Forwarded-Ports를 사용해 실제 클라이언트의 포트를 얻을 수 있고, X-Forwarded-Proto를 사용해 사용중인 프로토콜도 얻을 수 있다.

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

- 레이어 4 로드 밸런서이며 TCP 및 UDP 트래픽을 처리할 수 있다.
- 매우 높은 성능을 가지고 있어 백만 건 이상의 요청을 처리할 수 있다.
- ALB에 비해 대기 시간이 줄어든다. 약 400밀리초 대비 100밀리초 정도가 된다.
- 가용 영역당 정적 IP가 하나뿐이며 각 AZ에 Elastic IP를 할당할 수 있다. 응용 프로그램을 정적 IP 집합으로 노출해야할 때 매우 유용하다. 시험에서 "애플리케이션은 오직 한/두/세 개의 다른 IP에서만 액세스 가능하다" 라고 한다면 NLB를 옵션으로 생각해야 한다.
- 시험에서 극도의 성능, TCP 또는 UDP, 정적 IP를 보면 NLB라고 생각하면 된다.

**NLB 작동**

- ALB와 매우 유사하게 작동한다.
- 대상 그룹을 생성하고 NLB가 해당 대상 그룹으로 리디렉션한다.
- 대상 그룹은 EC2 인스턴스가 될 수 있으며, IP 주소도 등록할 수 있다. IP 주소는 하드 코딩되어 있어야 하며, Private IP여야 한다. 소유한 EC2 인스턴스의 Private IP를 등록하거나 자체 데이터 센터에 있는 서버의 Private IP를 사용할수도 있다.
- NLB를 ALB 앞에 놓을 수도 있다. 이렇게 하는 이유는 NLB 덕분에 고정 IP 주소를 얻을 수 있고, ALB 덕분에 HTTP 유형의 트래픽 처리에 대한 모든 규칙을 얻을 수 있다.
- NLB 대상 그룹에서 수행되는 헬스 체크는 TCP, HTTP, HTTPS 의 세 가지 다른 종류의 프로토콜을 지원한다. 백엔드 애플리케이션이 HTTP 또는 HTTPS 프로토콜을 지원하는 경우 이러한 프로토콜에 대한 헬스 체크를 정의할 수 있다.

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

- 게이트웨이 로드밸런서는 모든 네트워크 트래픽이 방화벽, 침입 탐지 및 방지 시스템(IDPS) 또는 패킷 검사 시스템을 통화하도록 하거나 네트워크 수준에서 일부 페이로드를 수정하려는 경우 사용한다.
- 사용자가 애플리케이션에 액세스할 때 모든 네트워크 트래픽을 애플리케이션에 도달하기 전에 검사하고 싶으면 third-party 어플라이언스(EC2와 같은)를 배치해야 했는데 GWLB를 사용하면 매우 간단해진다.
- GWLB를 통과하면 로드 밸런서는 해당 트래픽을 가상 어플라이언스의 대상 그룹에 분산시킨다. 따라서 모든 트래픽은 애플라이언스에 도달하게 되고 애플라이언스는 트래픽을 분석하고 해야 할 작업을 수행한다. 작업은 방화벽, 침입자 탐지 등이 있을 수 있다. 만약 해당 작업에서 만족하지 않다면 트래픽을 드롭할 수 있다.(방화벽의 경우) 트래픽은 게이트웨이 로드 밸런서를 다시 통과하고 게이트웨이 로드 밸런서가 트래픽을 애플리케이션으로 전달한다.
- 위 과정을 정리하면 모든 트래픽이 GWLB를 통과하고 분산된 third-party appliance가 모든 네트워크 트래픽을 분석하고 필요에 따라 드롭했다고 보면 된다.
- 게이트웨이 로드 밸런서는 L3에서 동작한다.
- 게이트웨이 로드 밸런서는 두 가지 기능이 있다.
  1.  명료한 네트워크 게이트웨이.
      - 왜냐하면 VPC의 모든 트래픽이 단일 진입 및 단일 탈출인 게이트웨이 로드 밸런서를 통과하기 때문이다.
  2.  로드 밸런싱
      - 트래픽을 가상 어플라이언스 및 대상 그룹의 세트에 분산 시킨다.
- 시험에서 "GENEVE 프로토콜을 사용하고 포트 6081에서 사용하려면" 이라면 게이트웨이 로드 밸런서를 사용한다는 것이다.
- 게이트웨이 로드 밸런서의 대상 그룹이 될 수 있는 것은 Third-party 애플라이언스이다. 이것은 EC2 인스턴스일 수 있고 인스턴스 ID로 등록할 수 있다. 그리고 Private IP 주소로 등록할 수 있다. 자체 네트워크 또는 자체 데이터 센터의 서버도 등록 가능하다.

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

- ELB에 대해 스티키 세션 또는 세션 어피니티를 구현하는 것이 가능하다.
- 이것은 로드 밸런서로 두 번의 요청을 하는 클라이언트가 동일한 백엔드 인스턴스를 가지고 응답하도록 하는 것이다.
- 클라이언트에서 로드 밸런서로 요청할 때 요청과 함께 쿠키가 전송되며 쿠키 안에는 스티키 세션이 있고 만료 날짜가 있다. 따라서 쿠키가 만료되면 클라이언트는 다른 EC2 인스턴스로 리디렉션될 수 있다.
- 사용 사례는 사용자가 세션 데이터를 잃지 않기 위해 동일한 백엔드 인스턴스에 연결되어 있는지 확인하는 것이다. 세션 데이터에는 사용자의 로그인과 같은 중요한 정보가 포함될 수 있다.
- 스티키 세션을 활성화 하면 일부 인스턴스에 요청이 고정 돼 인스턴스에 불균형을 초래할 수 있다.
- 쿠키 자체는 어떻게 되는걸까? 스티키 세션에는 두 가지 유형의 쿠키가 있다.
  - 첫 번째는 응용 프로그램 기반 쿠키
    - 응용 프로그램 기반 쿠키의 경우 대상(응용 프로그램 자체)에서 생성하는 사용자 정의 쿠키이다.
    - 여기에는 응용 프로그램에서 필요한 모든 사용자 정의 속성을 포함할 수 있다.
    - 쿠키 이름은 각 대상 그룹에 대해 개별적으로 지정되어야하며 다음 이름을 사용해서는 안된다. AWSALB, AWSALBAPP, AWSALBTG. 이것은 이미 ALB에서 사용하기 위해 예약되어 있다.
  - 두 번째는 기간 기반 쿠키
    - ALB의 경우 쿠키 이름은 AWSALB이고, CLB의 경우 AWSELB이다. 이 쿠키는 특정 기간에 기반하여 만료되며, 해당 기간은 로드 밸런서에서 생성된다.
- 스티키 세션은 타겟 그룹에서 설정 가능하다.
- 기간형 스티키 세션의 경우 1초에서 7일 사이의 기간을 설정 가능하다. 또는 응용 프로그램 기반 쿠키로 1초에서 7일까지의 기간을 설정할 수 있지만 애플리케이션에서 로드 밸런서로 전송하는 쿠키 이름을 지정해야 한다.

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

- 예를 들어 두 가용 영역이 있고 첫 번째 영역에는 두 개의 인스턴스가 그리고 두 번째 영역에는 여덟 개의 EC2 인스턴스가 있다고 가정할때 Cross Zone Load Balancing을 사용하면 로드 밸런스에 등록된 인스턴스에 트래픽이 고르게 분배된다.
- 기존에는 ALB에 부여된 타겟 그룹을 기준으로 50% / 50% 의 트래픽을 분산시키지만 위와 같은 경우에는 불균형을 초래할 수 있으니 10개의 인스턴스를 기준으로 트래픽을 리디렉션해 고르게 분배한다.
- Cross Zone을 사용하지 않는 경우 트래픽이 각 AZ 내에서 유지된다.
- ALB의 경우 Cross Zone Load Balancing이 기본적으로 활성화되어 있지만 타겟 그룹 수준에서 비활성화할 수 있으며 AZ 간에 데이터 이동 시 원래는 비용을 지불해야 하지만 활성화 된 경우 요금이 부과되지 않는다.
- NLB, GWLB의 경우 Cross Zone Load Balancing이 기본적으로 비활성화되어 있다. ALB 같은 경우와 다르게 GWLB의 경우 기본적으로 비활성화 상태에서 활성화를 하게 되면 AZ 간 데이터 이동 시 일정량의 비용이 발생한다.

**정리**
- Cross zone load balancing은 가용 영역에 제한하지 않고 로드 밸런서에 등록된 인스턴스에 트래픽이 고르게 분배된다.
- 예를 들어 두 가용 영역이 있고 A 가용 영역 B 가용 영역이 있다고 했을 때 A 가용 영역에는 2개의 인스턴스 B 가용영역은 8개의 인스턴스가 있을 때 Cross zone load balancing을 사용하면 등록된 대상을 기준으로 트래픽을 고르게 분배한다.
- 기존에는 ALB에 부여된 타겟 그룹을 기준으로 50% 대 50%의 트래픽을 분산해 2개 대 8개로 불균형을 초래할 수 있는데, 10개 인스턴스를 기준으로 트래픽을 고르게 분산한다.
- ALB의 경우 Cross Zone load balancing이 기본적으로 활성화되어 있지만 타겟 그룹 수준에서 비활성화할 수 있으며 AZ 간에 데이터 이동시 원래는 비용이 지불되지만 활성화 된 경우 요금이 부과되지 않는다.
- NLB, GWLB의 경우 Cross Zone Load Balancing이 기본적으로 비활성화 되어 있다. ALB와는 다르게 GWLB는 AZ 간 데이터 이동 시 일정량의 비용이 발생한다.

## **[SAA/DVA] Elastic Load Balancer - SSL Certificates**

- SSL 인증서는 클라이언트와 로드 밸런서 간의 트래픽을 전송 중에 암호화할 수 있게 한다. 이를 "In-flight encryption"이라고 한다. 데이터가 네트워크를 통과하는 동안 암호화되고 보내는 사람 및 수신자만 해독할 수 있다.
- SSL은 Secure Sockets Layer의 약자이며 전송 연결을 암호화하는 데 사용된다. TLS는 SSL의 최신 버전으로 Transport Layer Security를 나타낸다.
- Public SSL 인증서는 Certificate Authorities(인증 기관)에 의해서 발급되며, CA는 Letsencrypt/symantec/GoDaddy/Digicert 등이 있다.
- Public SSL 인증서를 로드 밸런서에 연결해 클라이언트와 로드 밸런서 간의 연결을 암호화할 수 있다.
- SSL 인증서는 설정한 만료 날짜를 가지고 정기적으로 갱신되어야 한다.
- 인증서의 만료일은 ACM(AWS Certificate Manager)을 사용하여 AWS에서 관리할 수 있으며, 필요한 경우 ACM에 직접 인증서를 업로드할 수도 있다.
- HTTPS 리스너를 설정할 때는 기본적으로 인증서를 지정해야 한다. 다중 도메인을 지원하는 선택적인 인증서 목록을 추가할 수 있으며, SNI(Server Name Indication)을 사용해 hostname을 지정할 수 있다.
- 예를 들어 ALB가 두 개의 SSL 인증서, domain1.example.com domain2.example.com 두 개의 도메인 주소를 가지며 해당하는 타겟 그룹이 각각 있다고 가정했을 때, ALB에 클라이언트가 domain1.example.com에 들어오고자 하면 ALB는 그에 맞는 SSL 인증서와 타겟그룹을 사용해야할 것이다.
- ALB는 올바른 SSL 인증서를 가져와서 트래픽을 암호화 한 다음 경로를 통해 올바른 타겟 그룹으로 리디렉션할 것이다. SNI를 사용하면 다른 SSL 인증서를 사용해 여러 웹 사이트에 대한 여러 타겟 그룹을 가질 수 있다는 말이다.
- CLB의 경우 하나의 SSL 인증서만 지원할 수 있고, ALB v2의 경우 여러 리스너와 여러 SSL 인증서를 지원할 수 있다.
- NLB의 경우도 SNI를 지원한다.

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

- CLB를 사용하는 경우 Connection Draining 이라고 하지만 ALB 또는 NLB를 사용하는 경우 Deregistration Delay 라고 불린다.
- 인스턴스가 Deregestration 즉, 등록 해제되거나 Unhealthy 상태로 표시될 때 In-flight 요청 또는 active 요청을 완료할 충분한 시간을 제공하는 것이다.
- 인스턴스가 Drain 되어서 연결이 드레인되면, ELB는 인스턴스가 Deregistration되는 동안 드레인 중인 EC2 인스턴스로 요청을 보내지 않는다.
- deregistration_delay.timeout_seconds 파라미터 값이 존재하는 데 이는 기본값 300초(5분)이며, 값이 0으로 설정되면 Drain이 발생하지 않는다. 최소 1에서 최대 3,600 사이의 값을 설정할 수 있다.
- 애플리케이션의 요청이 짧은 경우(ex:1초 미만) 매개변수를 30초로 설정하는 것이 좋다. 이렇게 하면 EC2 인스턴스가 매우 빨리 드레인되고 오프라인으로 전환된다. 업로드 또는 긴 지속 요청이 있는 경우 값을 높게 설정하는 대신에 인스턴스가 빨리 사라지지는 않을 것이다.

**정리**
- 인스턴스가 등록 해제(Deregestration)되거나 Unhealthy 상태로 표시될 때 In-flight 요청 또는 Active 요청을 완료할 충분할 시간이 필요하다. 이를 Deregistration Delay를 통해서 보장한다.
- 인스턴스가 Drain 되어 연결이 Drain되면 ELB는 인스턴스가 Deregistration되는 동안 Drain 중인 EC2 인스턴스로 요청을 보내지 않는다. 그리고 존재하는 커넥션이 완성되길 기다린다.
- CLI에서는 deregistration_delay.timeout_seconds 파라미터 값으로 시간을 조정하며, 기본 값은 300초(5분)이고 값을 0으로 설정하면 Drain이 발생하지 않는다. 최대 3,600의 값까지 설정 가능하다.
- 애플리케이션의 요청이 짧은 경우 매개 변수를 30초 정도로 설정하는 것이 좋다. 이렇게 하면 EC2 인스턴스가 빨리 Drain되고 오프라인으로 전환된다. 
- 업로드나 오래 지속되는 요청이 있는 경우 Deregistration을 높은 값으로 설정하고 싶지만 EC2가 빨리 사라지지 않으므로 Trade off가 될 수 있다.

## **Elastic Load Balancer - Health Checks**

- ALB 또는 대상 그룹 자체에서 Health check를 설정할 수 있다.
- 예를 들어 백엔드 인스턴스에 Health check 설정을 한다고 가정해보자.
- 프로토콜은 HTTP 프로토콜을 사용하고, 포트는 인스턴스에 연결할 포트이다. 기본적으로 80은 HTTP 포트지만 사용자 정의할 수 있다. Check path는 Health check 요청을 보낼 위치이다.
- path가 "/" 로 되어 있는 경우는 웹 사이트의 루트로 보내라는 것을 의미하지만 많은 웹 사이트나 애플리케이션은 "/health" 경로를 가지고 있으며 이는 EC2 인스턴스에서 특정 테스트를 하기 위한 health check 경로이다.
- check timeout은 health check가 실패로 간주되기까지의 시간으로 기본적으로 5초이다. 따라서 5초 안에 health check 가 성공하지 않으면 5초 후에 실패로 간주된다.
- interval은 대상 그룹 또는 ALB가 Health check를 수행하는 빈도이다. 매우 낮은 값을 설정하면 응용 프로그램이 과도하게 사용될 수 있다. 30초가 health check 하는 좋은 기본값이지만 물론 이를 감소시킬 수 있다.
- healthy threshold counts는 대상이 건강한 것으로 간주되기 전에 health check가 성공해야 하는 횟수이며, unhealthy threshold counts는 인스턴스가 건강하지 않다고 간주되기 전에 연속으로 health check가 실패해야 하는 횟수이다.
- health status는 초기 등록 중인 경우 healthy, 건강하지 않은 경우 unhealthy, 사용되지 않는 경우 unused(대상이 등록되지 않음), 드레인 중인 경우 draining(대상이 등록 해제 중), health check가 비활성화된 경우 unavailable이 있다.
- 시험에서 알면 좋은 것은 대상 그룹에 unhealthy만 포함된 경우 ELB는 모든 unhealthy 대상으로 요청을 라우팅할 것이다. 이 경우는 health check 자체가 잘못 되었고, 인스턴스는 여전히 작동할수도 있기 때문에 health check가 잘못되었다고 가정하고 요청을 라우팅하는 것이다.
- health check가 EC2 인스턴스의 다른 포트에서 수행되는 경우 트래픽 포트 오버라이드를 수행할 수 있다.
- health check 를 완료하고 200 status code를 재전송하는 대신에 특정 code를 설정할 수 있다.

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

**개요**

- 로드밸런서에서 발생할 수 있는 에러 유형을 살펴보자
- 일반적으로 성공적인 요청은 200으로 나타난다.
- 클라이언트의 웹 브라우저에서 오류가 발생하는 등 클라이언트가 오류를 발생시키면 4XX 유형의 오류를 수신하게 된다.
  - 400은 잘못된 요청, 401은 권한 없음, 403은 Forbidden, 460은 클라이언트가 연결을 닫음, 463은 헤더 X-forwarded-for가 잘못된 경우
- 로드 밸런서 또는 백엔드 EC2 인스턴스가 잘못되어 서버 측에서 발생하는 모든 오류는 5XX 유형의 코드가 된다.
  - 500은 내부 서버 오류, 502는 잘못된 게이트웨이, 503은 서비스를 사용할 수 없음(EC2 인스턴스가 로드 밸런서에 응답을 보낼 수 없는 경우), 504는 게이트웨이 시간 초과, 561은 권한 없음
- 시험 관점에서 4XX 코드는 클라이언트 측 오류이므로 클라이언트 문제를 나타내며, 5XX 오류는 서버 문제이다. 이것은 로드 밸런서에서 확인할 메트릭 유형을 결정하는 데 도움이 되는 정보이다.

**로드 밸런서의 메트릭**

- 로드 밸런서에서 CloudWatch 메트릭으로 직접 전송되는 메트릭이 있다.
- 예를들어 백엔드 연결 오류를 모니터링해 EC2 인스턴스가 오류를 발생시키는지 확인할 수 있다.
- UnHealthyHostCount와 HealthyHostCount는 매우 중요하다. 로드 밸런서에 6개에 인스턴스가 등록되어 있고 2개가 다운되었다고 가정할 때 HealthyHostCount는 4개이고, UnHealthyHostCount는 2개이다.
- 다음으로 2XX, 3XX, 4XX, 5XX 가 있다.
- 클라이언트에게 요청을 얼마나 빨리 받아올 수 있는지에 대한 정보인 latency 정보가 있다.
- 로드 밸런서의 전체 요청 횟수를 나타내는 RequestCounts
- 평균적으로 얼마나 많은 EC2 인스턴스가 요청을 받는지에 대한 RequestCountPerTarget
- 대기 중이며 Healthy한 인스턴스로 라우팅중인 총 요청 수이며, ASG를 확장하는 데 도움이 될 수 있는 SurgeQueueLength. 최대 값은 1024이며, 큰 요청 대기열이 필요가 없기 때문에 이 대기열이 0에 가깝게 유지 되도록 해야한다. 큐가 가득 차면 추가 요청이나 연결이 거부되기 때문에.
- SpilloverCount는 대기열이 가득 차서 거부된 요청의 수이다. 0보다 큰 값을 갖는 것을 절대로 피해야한다. 0보다 크다면 백엔드를 확장해 추가 요청을 처리하고 클라이언트가 일부 요청을 잃고 있는지 확인해야 한다.

**예시**

- 메트릭을 사용해 문제를 해결하려면 다음과 같다.
  - 400 Bad Request는 클라이언트가 잘못된 요청을 보냈다는 것을 의미한다.
  - 503은 로드 밸런서에 사용가능한 healthy한 인스턴스가 없다는 것을 의미하므로 HealthyHostCount 메트릭 및 CloudWatch를 확인할 수 있다.
  - 504는 게이트웨이 시간 초과다. EC2 인스턴스의 keep-alive 설정이 활성화되어 있는지 확인하고, keep-alive timeout이 로드 밸런서의 idle timeout 설정보다 큰지 확인해야한다.

전반적으로 로드 밸런서에대한 Alarm을 설정하고 문서 기반의 문제 해결을 해야한다.

**Load Balancer Access Log**

- 로드 밸런서의 액세스 로그는 S3에 저장될 수 있다. 이 로그에는 로드 밸런서에 대한 모든 요청이 포함된다.
- time, client IP address, latencies, request paths, server response, trace ID와 같은 메타데이터가 포함된다.
- S3로 로그를 전송할 때 비용이 발생하고 전송 비용만 지불하게 된다.
- 액세스 로그는 규정 준수 및 디버깅에 매우 유용하며 ELB 또는 EC2 인스턴스가 종료된 후에도 액세스 데이터를 보관하는 데 도움이 된다.
- 액세스 로그는 추가 보안을 위해서 암호화된다.

**request tracing**

- X-Amzn-Trace-Id라는 사용자 지정 헤더가 각 HTTP 요청에 추가된다.
- 이 헤더는 단일 요청을 추적하는 데 분산 추적 플랫폼이나 로그에서 매우 유용하다.
- ~~주의할 점은 ALB가 아직 X-Ray와 통합되어 있지 않다는 것이며 따라서 X-Ray에서 이러한 request tracing이 나타나지 않을 것이다.~~
  - 240227 기준으로 HTTP 요청을 추적할 수 있다. [확인 링크](https://docs.aws.amazon.com/ko_kr/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader)

**모니터링 옵션**

- ELB 콘솔창에서 확인할 경우 Monitoring 탭에서는 모든 로드 밸런서에 대한 사용 가능한 메트릭을 확인할 수 있다.
- Target Response Time, 부하 확인하기에 좋은
  Requests(시간 당 요청 수), 어디서 문제가 발생했는지 이해하기 위한 오류 코드 메트릭, ASG에서 scale용도로 사용하기 좋은 ActiveConnectionCount, 로드 밸런서가 실제로 얼마나 지불하는 지에 대한 Consumed Load Balancer Capacity Units(ConsumedLCUs) 등 중요한 메트릭이 있다.
- 로그에 대한 옵션을 살펴볼수도 있다. 액세스 로그를 모니터링하려면 속성을 편집하고 활성화할 수 있으며, 로드 밸런서로 전송된 모든 로그를 S3 버킷으로 전송하도록 설정할 수 있다.
- Amazon Athena 서비스를 사용해 이러한 액세스 로그를 쿼리할 수 있다.

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

- 대상 그룹에 설정할 수 있는 모든 옵션을 살펴보자
- 등록 취소 지연 (deregistration delay)
  - 로드 밸런서가 대상을 등록 취소하기 전에 대기해야 하는 시간에 해당하는 초 단위의 시간 제한이다.
- 느린 시작 (slow start)
  - 느린 시작 모드를 사용하면 로드 밸런서가 대상으로 전체 요청 공유를 보내기 전에 대상에 워밍업 시간이 제공된다. 초 단위의 워밍업 시간
- 라우팅 알고리즘이 있다.
  - 라운드 로빈
  - 최소 미해결 요청
  - 흐름 해시 알고리즘(Flow hash)
- 스티키 설정이 있다.
  - 활성화 여부, type(애플리케이션 기반 또는 기간 기반), 쿠키 이름(애플리케이션 기반, 기간 기반), 초 단위의 애플리케이션 기반의 쿠키 만료 기간
- slow start 와 routing 알고리즘의 차이를 알아보자
  - slow start는 기본적으로 타겟 그룹에서 온라인 상태가 될 때마다 전체 요청을 수신하기 때문에 트래픽을 EC2 인스턴스로 점진적으로 전송하는 방법이다. slow start를 사용하지 않으면 EC2 인스턴스가 대상 그룹의 일부가 되자마자 전체 요청을 받게 되어 인스턴스에 과부하가 걸릴 수 있다.
  - 따라서 로드 밸런서는 0에서 시작해 슬로우 스타트가 종료될 때까지 대상에 보내는 요청의 수를 선형적으로 증가시킨 다음 전체 몫을 차지하게 된다.
  - slow start를 사용하지 않으려면 slow start duration을 0으로 설정하면 된다. duration은 최대 900초까지 설정 가능하다.
  - 라우팅 알고리즘 중 **최소 미해결 요청**은 기본적으로 가장 사용량이 적은 인스턴스가 다음 요청을 수신할 인스턴스가 된다. 일반적으로 수신되는 요청의 복잡성이 다양하고 등록된 대상의 처리 능력이 다를때 사용된다.
  - 최소 미해결 요청은 slow start 모드에서는 사용할 수 없다.
  - **라운드 로빈**의 경우 사용 가능한 요청의 수에 관계없이 대상이 차례로 다음 요청을 받게 된다. 대상 그룹에 3개의 인스턴스가 있다고 가정하면 1, 2, 3 의 순서대로 요청을 전달하고 다시 1에게 요청을 받게되는 것
  - NLB에는 **flow hash 요청 라우팅**이 있는데, 프로토콜의 해시, 소스 대상 IP 주소, 소스 대상 포트 및 TCP 시퀀스 번호를 기반으로 대상이 선택된다. 각 TCP 및 UDP 연결은 연결이 지속되는 동안 단일 대상으로 라우팅되며, NLB의 스티키 세션과 동일하다. 간단하게 사용자가 요청을 할 때마다 방금 말한 모든 정보가 flow hash 알고리즘을 통해 해시된다. 그리고 해시 번호 덕분에 TCP 연결이 열려 있는 한 동일한 사용자의 동일한 요청을 동일한 EC2 인스턴스로 라우팅 할 수 있다.

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

- ALB에는 리스너 규칙(Listener Rule)이 있다.
- ALB는 여러 규칙이나 한 규칙만 가질 수 있고, 항상 가장 마지막으로 수행되는 기본 규칙이 있다. 각 규칙은 특정 대상을 가진다.
- 규칙은 순서(Priority)가 있으며 순서대로 처리된다.
- 예를 들면 특정 대상 그룹으로 전달하거나 다른 특정 URL로 리디렉션하거나 고정 response를 보낼 수 있다.
- 기본 규칙을 제외한 나머지 규칙은 특정 조건을 가질 수 있다.
  - 예를 들어 host header 규칙, HTTP request method(GET 또는 POST인지 확인하는), path pattern("/myapp1","/myapp2"), Source IP(어디서 요청이 오는지 확인), http-header, query-string 등이 있다.
  - 이와 같은 특정 조건을 이용해 다양한 대상 그룹으로의 복잡한 라우팅을 만들 수 있게 해준다.
- ALB의 단일 규칙에서 대상으로서 여러 대상 그룹을 가질수 있다.
  - 하나의 규칙 내에서 각 대상 그룹에 대한 가중치를 지정할 수 있게하는 방법이다.
  - 가중치를 통해 백엔드 서비스를 한 대상 그룹에서 다른 대상 그룹으로 업데이트할 수 있다. 예를 들어 v1을 한 대상 그룹에 두고 v2를 다른 대상에 둔 후 가중치를 사용해 트래픽을 제어해 v2를 시험해볼 수도 있다.

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

웹 사이트나 응용 프로그램을 배포할 때 시간이 지남에 따라 웹 사이트를 방문하는 사용자가 많아져 부하가 변경될 수 있다.

AWS에서 EC2 인스턴스 생성 API 호출로 서버를 빠르게 생성하고 제거할 수 있기 때문에 이를 자동화한 것이 Auto Scaling Group이다.

ASG의 목표는 EC2 인스턴스를 확장(out)하는 것이다. 기억해야 할 중요한 점은 늘어난 부하에 맞춰 확장(out)하거나 축소(in)하여 부하가 감소하는 것이다.

ASG는 최소 및 최대 EC2 인스턴스 수를 보장하기 위한 매개변수를 정의할수도 있다. 그래서 ASG의 크기는 시간에 따라 변할 것이다.

ASG는 로드 밸런서와 결합하는 경우 ASG의 일부로 있는 모든 EC2 인스턴스가 로드 밸런서에 연결된다.

하나의 인스턴스가 Unhealthy 상태로 판단되면 해당 인스턴스가 종료되고 대신에 새로운 EC2 인스턴스가 생성된다.

ASG는 무료이며 EC2 인스턴스와 같은 하위 리소스가 생성된 만큼만 요금을 지불하면 된다.

ASG는 최소한으로 필요한 인스턴스 수인 minimum capacity 을 설정하고 최대 인스턴스 수인 maximum capacity를 설정하고, Desired capacity를 최대 용량보다는 작게 필요에 따라 확장할 수 있다.
ELB는 EC2의 상태를 health check를 사용해 확인하고 해당 상태를 ASG에 전달할 수 있다. 로드 밸런서의 판단에 따라 ASG가 해당 EC2 인스턴스를 종료할 수 있어 편리하다.
ASG에 인스턴스가 추가되면 ELB도 트래픽을 해당 인스턴스로 보내고 부하를 분산 시킬 것이다. 따라서 로드 밸런서와 ASG를 함께 사용하는 것은 훌룡한 조합이다.

ASG를 만들려면 launch templates을 만들어야한다. launch configurations가 templates 이전에 있었지만 현재는 사용되지 않는 개념이다.

- launch template
  - 런치 템플릿은 ASG 내에서 EC2 인스턴스를 시작하는 방법에 대한 정보를 포함한다.
  - AMI 및 인스턴스 유형, EC2 User data, EBS 볼륨, 보안 그룹, SSH 키페어, EC2 인스턴스용 IAM 역할, 네트워크 및 서브넷 정보, 로드 밸런서 정보 등이 포함된다. 이 모든 매개변수는 우리가 EC2 인스턴스를 생성할 때 지정한 것과 매우 유사하다.

ASG에는 우리가 정의해야 할 최소 크기, 최대 크기 및 초기 용량이 있으며 스케일링 정책도 있다.

- 스케일링 정책
  - CloudWatch 알람을 기반으로 ASG의 인스턴스를 확장 및 축소할 수 있다.
  - 예를 들어 ASG 전체의 평균 CPU와 같은 메트릭을 기반으로 알람을 생성하고 평균 CPU가 너무 높다면 알람이 발생해 트리거되고 ASG에서 스케일링을 하게 된다.
  - 결과적으로 알람을 기반으로 스케일 아웃 또는 스케일 인 정책을 생성해 인스턴스를 증가 또는 감소할 수 있다.

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

**ASG에는 여러가지 스케일링 정책이 있다.**

- 동적 스케일링
  - 트래픽의 변화에 따라 ASG의 용량을 조정하는 정책
  - Target tracking scaling
    - CPU 사용률 같이 ASG에 대한 메트릭을 정의하고 목표 값을 정의하는 것이다.
    - CPU 사용률을 40%로 설정하면 ASG는 자동으로 확장 또는 축소 해 메트릭을 약 40%로 유지한다.
  - Step scaling과 Simple scaling의 경우 CloudWatch 알람을 정의해 ASG에 용량 단위를 추가하거나 제거하려는 경우 트리거 되게 된다.
    - 예를 들어 알람이 트리거 되면 2 개의 Unit을 추가해라, 알람이 트리거 되면 1 개의 Unit을 제거해라 등.
- 예약된 스케일링(scheduled scaling)
  - 운영자가 알고 있는 사용 패턴을 기반으로 스케일링을 예측하는 경우
  - 예를 들어 매주 금요일 오후 5시에 사용자가 발생할 것으로 예상되면 최소 용량을 늘릴 수 있다.
- 예측 스케일링(predictive scaling)
  - 주기적인 데이터가 있는 경우 매우 유용하다.
  - ASG는 자동으로 기존에 남아있는 기록을 분석한 다음 예측을 생성하고 예측을 기반으로 스케줄링 작업을 수행한다.
- 스케일링을 위한 좋은 메트릭은 의문이다. 보통 여러가지가 있다.
- 첫 번째는 CPU 사용률이다. 왜냐하면 모든 인스턴스의 평균 CPU 사용률을 확인하고 이 값이 높아지면 인스턴스가 더 많이 사용된다는 의미이므로 이를 기반으로 스케일링하는 것이 좋다.
- 두번째는 RequestCountPerTarget이다. 응용 프로그램에 특화된 메트릭이다. 3 개의 인스턴스가 있는 ASG가 있고 ALB가 이를 통해 요청을 분산하고 있을 때 RequestCountPerTarget 메트릭 값은 3이다. 왜냐하면 각 인스턴스는 평균적으로 3개의 요청이 처리 대기 중이기 때문이다.
- 다음으로는 ASGAverageNetworkIn, ASGAverageNetworkOut이 있다. 응용 프로그램이 네트워크에 제한되어 있고 업로드 및 다운로드가 많은 경우 인스턴스에 대한 평균 네트워크 In 또는 Out 바이트수를 기준으로 스케일을 조절할 수 있다.
- 그리고 CloudWatch에서 설정하는 사용자 지정 메트릭 중 하나를 사용할 수 있어 응용 프로그램 별로 사용자 지정 메트릭을 설정하고 이를 기반으로 스케일링 정책을 설정할 수 있다.

**스케일링 쿨다운**

- 인스턴스를 추가하거나 제거하는 등의 스케일링이 발생한 후 항상 쿨다운 기간에 들어가는데 그 동안 ASG는 추가로 인스턴스를 시작하거나 종료하지 않는다. 기본 300초/5분이다.
- 이유는 메트릭이 안정화되고 새로운 인스턴스가 이펙트를 발휘하여 메트릭이 어떻게 변화되는지 확인하기 위해서.
- 그래서 스케일링 활동이 발생하면 쿨다운이 적용되었는지 여부를 확인하게 된다.
- 쿨다운이 기본적으로 적용되어 있다면 scaling을 무시하고 그렇지 않다면 scaling을 진행한다.
- 한 가지 팁은 인스턴스의 구성 시간을 줄이기 위해 준비된 AMI를 사용하는 것이다. 인스턴스를 구성하는 데 시간을 낭비하지 않으면 인스턴스가 즉시 활성화돼 요청에 빠르게 응답할 수 있다. 그리고 활성화되는 시간이 더 빨라 쿨다운 기간은 줄일 수 있고 ASG의 더 동적인 스케일링을 얻을 수 있다
- ASG에 대한 Detailed monitoring을 활성화해 메트릭을 1분마다 얻고 이러한 메트릭이 충분히 빠르게 업데이트되도록 확인하는 것도 방법이다.

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

- 시험에 참여하기 전에 알아야 할 몇 가지 기능을 살펴보자. 
- ASG에 속해있는 인스턴스에 대한 라이프사이클 훅이 있다. 인스턴스를 시작하거나 종료할 때 실행되는 것을 의미한다.
- 기본적으로 인스턴스를 생성하면 pending 상태에서 in service 상태로 즉시 전환된다. 그러나 추가적인 단계를 수행하기 위해 라이프사이클 훅을 설정할 수 있다.
- pending 후에 라이프사이클 훅의 일부로 pending wait 상태로 이동할 수 있으며 이 상태에서는 인스턴스가 시작될 때 실행할 스크립트를 정의할 수 있다. 예를 들어 초기 설정을 위해 EC2 인스턴스의 초기 설정이 완료되면 pending proceed 상태로 이동하도록 만들 수 있다.
- 그 후에 in service 상태로 이동한다. 따라서 이 라이프사이클 훅을 사용하면 pending과 in service 상태 사이에서 사용자 지정 로직을 수행할 수 있다.
- 또한 인스턴스가 종료되기 전에 어떤 작업을 수행할 수도 있다. 예를 들어 인스턴스가 in service에서 terminating으로 전환된다면 라이프사이클 훅의 일부로 termination wait 상태로 이동할 수 있다. 이 상태에서 다시 스크립트를 실행하거나 몇 가지 로그를 가져오거나 원하는 작업을 수행하거나 정보를 가져오거나 AMI를 만들거나 EBS 스냅샷을 찍을 수도 있다.
- 그 다음 terminating proceed로 이동한 후 terminated 상태로 전환된다.
- 이러한 모든 라이프사이클 훅의 사용 사례는 인스턴스가 시작되고 서비스로 전환되기 전에 cleanup, 로그 추출 또는 특수 헬스 체크를 수행하는 것이다.
- 라이프사이클 훅에 스크립트를 통합하려면 EventBridge, SNS 및 SQS를 사용하면 된다. 라이프사이클 이벤트가 트리거될 때 이 세 가지 대상 중 하나로 메시지가 전송될 수 있다.
- 예를 들어 EventBridge로 전송되면 람다 함수를 호출해 추가적인 스크립팅을 수행할 수 있다.
- ASG에는 launch configurations, launch templates가 있다.
- 두 가지 모두 EC2 인스턴스를 시작하기 위한 AMI, 인스턴스 유형, 키페어, 보안 그룹 및 기타 매개변수를 지정할 수 있게 해주며, 태그 및 사용자 데이터가 포함된다. 이것은 모두 ASG가 인스턴스를 시작하는 데 사용된다.
- 런치 구성은 편집할 수는 없다. 따라서 새로운 환경 설정의 런치 구성을 만들고 싶을 때마다 실제로 런치 구성을 새로 만들어야한다.
- 그리고 런치 템플릿의 경우 새 버전을 만들어야 한다.
- **_런치 구성은 AWS의 레거시한 부분이어서 실제로 더이상 사용되지 않는다._**
- 런치 템플릿은 매개 변수 하위 집합을 만들 수 있어서 구성 재사용 및 상속을 위해 다른 런치 템플릿을 기반으로 하는 런치 템플릿을 가질 수 있다.

- 런치 템플릿의 일부로 온디맨드 및 스팟 인스턴스 또는 둘을 혼합하여 프로비저닝 해 최적화된 Fleet을 가질 수 있다. (런치 구성으로는 불가능함)
- 런치 템플릿은 Placement Group, capacity reserve, dedicated host 및 여러 인스턴스 유형을 지원한다.
- T2 무제한 버스트 기능을 사용할 수 있다.


**SQS와 Auto Scaling**

- 어떻게 SQS 큐 상태를 기반으로 ASG를 스케일링할 것인가에 대한 내용이다.
- SQS 큐와 해당 큐에서 메시지를 처리하는 여러 EC2 인스턴스가 있다고 가정해보자, 여기서 할 일은 SQS 큐에 있는 메시지의 양에 따라 ASG를 조정하는 것이다.
- 이를 위해서 CloudWatch 메트릭을 만들 수 있다. 예를 들어 queue length에 대한 메트릭이다. 메트릭은 ApproximateNumberOfMessages 이다.
- 처리해야 할 메시지가 너무 많은 큐 길이가 너무 길때 알람을 발생하고 ASG에서 스케일링 정책을 트리거할 수 있다.

**ASG 헬스체크**

- 고가용성을 보장하려면 ASG에 적어도 두 개의 인스턴스가 있어야 한다.
- 그리고 EC2 health check와 같은 몇 가지 헬스 체크를 수행할 수 있다. EC2 인스턴스의 기본 소프트웨어 및 하드웨어가 여전히 작동 중인지 확인하기 위한 것으로 기본적으로 활성화되어 있다.
- ELB 헬스 체크도 있다. 애플리케이션이 대상 그룹 및 ALB에 연결되어 있다면 해당 애플리케이션이 ELB에 의해 헬스 체크되는지 확인하기 위한 것이다. ELB에 대항하는 인스턴스가 건강하지 않다고 판단하면 ASG에서 해당 인스턴스를 종료한다.
- 사용자가 수동으로 또는 CLI, SDK를 사용하여 ASG에 인스턴스 health check를 자동으로 보내는 사용자 정의 헬스 체크도 있다.
- 인스턴스 헬스 체크가 실패하게 되면 인스턴스를 종료한 후에 새 인스턴스를 시작하며, Unhealthy의 인스턴스는 재부팅하지 않는다.
- 사용자 정의 헬스 체크에 사용되는 API 호출을 하는 `set-instance-health` 명령어가 있다. 사용해보기 좋을 것이다.
- `terminate-instance-in-auto-scaling-group`와 같이 지정된 인스턴스 종료를 요청하는 명령어도 있다.

ASG의 몇 가지 일반적인 문제 해결 방법
-   이미 실행중인 인스턴스가 있지만 새로운 EC2 인스턴스를 시작할 수 없는 경우가 있다.
-   ASG가 최대 용량 매개변수로 설정한 제한에 도달한 경우일 수 있다. 이 경우 더 많은 인스턴스를 할당하기 위해서 최대 용량을 늘려야한다.
-   또 다른 경우는 AZ에서 용량 문제가 있는 경우이다.
-   전체 중 특정 EC2를 시작하는 것이 실패하는 경우 보안 그룹이 존재하지 않는 경우일 수 있다.
-   키페어가 존재하지 않을 수 있다.
-   ASG가 24시간 동안 인스턴스를 시작하는 데 문제가 있는 경우 자동으로 디버그를 위해 ASG의 자동 스케일링 프로세스를 중지한다.

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

**ASG 수준 메트릭 (Opt-in)**

- 1분마다 수집되는 ASG 수준의 메트릭.
- GroupMinSize: ASG 내의 최소 인스턴스 수.
- GroupMaxSize: ASG 내의 최대 인스턴스 수.
- GroupDesiredCapacity: ASG 내의 원하는 인스턴스 수.
- GroupInServiceInstances: "InService" 상태의 인스턴스 수.
- PendingInstances: "Pending" 상태의 인스턴스 수.
- StandbyInstances: "Standby" 상태의 인스턴스 수.
- TerminatingInstances: "Terminating" 상태의 인스턴스 수.
- TotalInstances: ASG 내의 총 인스턴스 수.
- 참고: 이러한 메트릭에 액세스하려면 ASG 수준에서 메트릭 수집을 활성화해야 합니다.

**EC2 수준 메트릭 (기본 활성화)**

- CPU Utilization: EC2 인스턴스의 CPU 사용량.
- Network In/Out: 네트워크 트래픽의 데이터 전송률.
- Disk Read/Write: 디스크 I/O 메트릭(인스턴스 스토어의 경우 해당 없음).
- Status Checks: EC2 인스턴스의 상태 확인.
- 참고: 기본 모니터링은 5분 간격으로 메트릭을 제공하며, 상세 모니터링은 1분 간격으로 제공됩니다.

**그룹 메트릭 수집**

- ASG 설정으로 이동합니다.
- "Enable" 버튼을 클릭하여 그룹 수준 메트릭 수집을 시작합니다.

## **Auto Scaling Overview**

- AWS의 모든 확장 가능한 리소스에서 사용 가능하다.
- EC2 인스턴스를 시작하거나 종료할 수 있게 해준다.
- Spot Fleet 요청을 통해 Spot Fleet 요청 자체에서 인스턴스를 시작하거나 종료할 수 있다. 그리고 가격이나 용량 문제로 인해 중단된 인스턴스를 자동으로 교체할 수 있다.
- ECS에도 사용되어 ECS 서비스의 원하는 수를 상향 및 하향 조정한다.
- DynamoDB 테이블에서는 테이블이나 글로벌 보조 인덱스에 Auto Scaling을 사용해 시간에 따라 WCU(Write Capacity Units) RCU(Read Capacity Units)를 조정한다.
- Aurora는 Dynamic Read Replica Auto Scaling을 위해 Auto Scaling을 사용한다.
- Scaling Plans는 동적 스케일링을 포함한 여러 가지 스케일링 옵션을 제공한다.
- 동적 스케일링이 없으면 시간이 지남에 따라 동일한 용량을 유지한다. 그러나 동적 스케일링에서는 시간에 따라 용량을 조정한다.
- 따라서 utilization을 안정화할 수 있다.
- 또한 가용성을 최적화할 수 있으며, 이 경우 utilization의 40%를 목표로 설정할 수 있다.
- 또는 비용을 최적화할 수 있으며 이 경우 70%의 utilization을 목표로 삼는다.
- 그러나 100%에 가까워질수록 스케일링은 효율적이지 않아지고, 성능 병목 지점에 도달하게 된다.
- 자체 메트릭 또는 특정 값을 선택할 수도 있다. AWS에서는 Utilization을 권장 사항으로 제공한다.
- 동적 스케일링의 옵션으로는 scail in 비활성화가 있고, ASG의 쿨 다운 기간과 워밍업 시간 지정이 있다.
- 동적 스케일링의 대안으로는 예측 스케일링이 있다.
- 예측 스케일링은 AWS에서 제공하는 머신러닝 알고리즘을 사용해 과거 로드를 분석하고 예측을 생성한 다음 해당 예측을 기반으로 자동으로 스케줄링 작업이 수행된다.

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

배포할 애플리케이션이 많고 이러한 애플리케이션이 동일한 아키텍처를 따르는 경우 매번 재생성하는 것은 번거롭다.

개발자의 입장에서 인프라를 관리하고 코드로 배포하는 것은 복잡할 수 있다.
Beanstalk는 AWS에서 애플리케이션을 배포하는 개발자 중심의 관점을 제공한다.

아이디어는 단일 인터페이스에서 EC2, ASG, ELB, RDS와 같은 모든 구성 요소를 자동으로 배포하고 모든 구성 요소를 재사용하는 관리형 서비스이다.

Beanstalk는 아래와 같은 간단한 기능을 한다.

- 용량 프로비저닝
- 로드 밸런서의 모든 구성
- 스케일링
- 응용 프로그램 상태 모니터링
- 인스턴스 구성 등

Beanstalk를 사용하며 개발자로서 유일하게 신경써야할 부분은 코드 자체이다.

여전히 각 구성 요소의 구성에 대한 완전한 제어를 가지고 있지만 Beanstalk는 하나의 단일 인터페이스 번들로 묶여있다.

또한 Beanstalk는 애플리케이션을 업데이트하는 매우 편리한 방법도 제공한다.

Beanstalk 서비스는 그 자체로 무료이지만 ASG나 ELB에서 활용하는 기본 인스턴스에 대한 비용이 발생할 것이다.

Beanstalk의 구성 요소는 아래와 같다.

- 애플리케이션
- 애플리케이션의 버전
  - 말그대로이다. 버전 1, 버전 2, 버전 3 등이 될 수 있다.
- 환경 (Environment)
  - 환경은 특정 응용 프로그램 버전을 실행하는 리소스의 모음이다.
  - 한 번에 한 환경에서만 한 응용 프로그램 버전을 가질 수 있으며 버전 1에서 버전 2로 응용 프로그램 버전을 업데이트할 수 있다.
  - Tier: Beanstalk에는 웹 서버 Tier, Worker Tier 두 가지가 있다.
  - Beanstalk에서 여러 환경을 만들 수 있다. 예를들어 dev, test, prod와 같은 환경.

전체적으로 프로세스를 정리하자면

1.  응용 프로그램 생성
2.  새 버전 업로드
3.  환경 시작
4.  환경 관리

이런 순서로 구성이 되지만 환경 관리를 하는 과정에서 새 버전을 업데이트하고 새 버전을 다시 배포할 수 있다.

Beanstalk는 Go, Java SE, Java with Tomcat, .NET Core on Linux, .NET on Windows Server, Node.js, PHP, Python, Ruby, Packer Builder, Single Docker Container, Multi Docker Container, Pre-configured Docker와 같은 많은 프로그래밍 언어를 지원한다.

Beanstalk에서 Web server Tier 와 Worker Tier를 알아보자

웹 서버 티어는 로드 밸런서가 트래픽을 보내는 여러 EC2 인스턴스를 포함하는 ASG에 트래픽을 보내는 전통적인 아키텍처이다.

워커 Tier는 클라이언트가 직접 EC2 인스턴스에 액세스하지 않는다.
SQS Queue를 사용해서 메시지를 보내고 EC2 인스턴스는 메시지를 처리하기 위해 SQS Queue에서 메시지를 pull할 것이다.

이 경우 Worker 환경은 SQS 메시지 수에 따라 자동으로 스케일이 조정된다. SQS queue에 메시지가 많을수록 더 많은 EC2 인스턴스가 생성된다.

그리고 웹 서버 티어가 워커 환경의 SQS queue로 메시지를 전송해서 두 환경을 함께 사용할 수 있다는 것이다.

Beanstalk에는 두 가지 배포 모드가 있다.

첫 번째는 단일 인스턴스로, 개발 목적에 적합하다.
이 경우 Elastic IP가 있는 하나의 EC2 인스턴스가 있을 것이고, 옵션으로 RDS 데이터베이스를 시작할 수도 있다.
그러나 모든 것이 Elastic IP가 있는 인스턴스를 기반으로 한다.

개발 목적으로는 훌룡하지만 실제로 사용할 때 Elastic Beanstalk를 확장하고 싶다면 로드 밸런서를 사용해 고가용성을 확보해야한다.

고가용성을 확보하는 것은 운영 환경에 적합하고 로드 밸런서가 여러 EC2 인스턴스에 부하를 분산하고 이를 ASG로 관리하며 여러 가용 영역을 사용한다.

마지막으로 RDS 데이터베이스는 마스터와 스탠바이가 있는 멀티 AZ로 구성될 수 있다.

시험에서 알아야할 점은 만약 Beanstalk의 배포 속도가 느리다면 Golden Image를 미리 구축해두는 것이 좋다.

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

CloudFormation은 코드만 사용해 모든 리소스에 대한 AWS 인프라를 개략적으로 설명하는 방법이다.

CloudFormation 템플릿에서는 원하는 것을 선언해 이러한 모든 것이 존재하고 서로 연결되어야 한다고 한다.
예를 들어 "나는 보안 그룹이 필요하고, 이 보안 그룹을 사용하는 두 개의 EC2 인스턴스가 필요하고 이 EC2 인스턴스 앞에 연결된 로드 밸런서가 필요하다" 는 내용을 코드로서 선언할 수 있다.

CloudFormation은 자동으로 지정한 구성과 정확한 순서로 리소스들을 생성한다.
따라서 수동으로 콘솔에서 구성하거나 수동으로 작업할 필요가 없이 모든 것이 CloudFormation을 통해 자동으로 프로비저닝 된다.

템플릿을 작성할 때 YAML이나 JSON 형식의 코드가 많아질 것이다.

CloudFormation Designer에서는 템플릿에 작성한 이러한 리소스가 다이어그램으로 보여지는 것을 알 수 있다.

**CloudFormation을 사용해야하는 이유는 무엇일까?**

- IaC를 위해서 (Infrastructure as Code)
  - 수동으로 생성된 리소스가 없다는 것을 의미하고 수동으로 관리하지 않아도 되어 제어에 뛰어나다.
  - CloudFormation code를 Git과 같은 version control을 이용해서 관리할 수 있다.
  - 인프라에 대한 모든 변경은 코드 변경을 통해 검토된다.
- 비용 측면에서
  - 스택 내의 모든 리소스가 식별자로 태그가 지정되므로 CloudFormation 스택이 비용을 얼마나 사용하는지 쉽게 확인할 수 있다.
  - 또한 CloudFormation 템플릿을 사용하면 리소스 비용을 쉽게 추정할 수 있다.
  - 마지막으로 절약을 할 수 있다. 예를 들어 개발 환경에 템플릿을 오후 5:00에 자동으로 삭제하고 오후 8:00에 안전하게 다시 생성할 수 있다.
- 생산성
  - 클라우드에서 인프라를 실시간으로 파괴하고 다시 생성할 수 있다. 이는 클라우드의 전체적인 능력을 활용하는 것으로, 필요한 것만 생성하고 삭제하며 사용한 만큼만 비용을 지불하면 된다.
  - 템플릿에 대한 다이어그램을 자동으로 생성할 수 있어 아키텍처 다이어그램에 매우 유용하고, 템플릿은 선언적 프로그래밍이다. 그래서 리소스의 생성 순서나 오케스트레이션 순서를 추론할 필요가 없다.
- 분리 고려사항
  - VPC Stack, Network Stack, App Stack 등과 같이 여러 애플리케이션 및 여러 레이어에 대한 많은 CloudFormation 스택을 만들 수 있다.
- 재사용
  - CloudFormation을 사용하면 웹 및 문서에서 기존 템플릿을 활용해 빠르게 자신의 CloudFormation 템플릿을 작성할 수 있다.

**CloudFormation은 어떻게 작동하는가?**

먼저 템플릿을 Amazon S3에 업로드해야 하며 그런 다음 CloudFormation에서 참조해야한다.
업로드하고 나면 CloudFormation에서 참조해 스택이 생성된다.

CloudFormation 스택이란 무엇인가? 이것은 AWS 리소스로 구성되어 있으며 AWS에서 생성할 수 있는 모든 종류의 것이다.

템플릿을 업데이트하려면 이전에 생성한 것을 업데이트할 수는 없고, 새로운 버전의 템플릿을 AWS에 다시 업로드하고 스택을 업데이트해야 한다.

스택은 리전 내에서 이름으로 식별되며 CloudFormation 스택을 삭제하면 CloudFormation에 의해 생성된 모든 아티팩트와 리소스가 삭제된다.

CloudFormation 템플릿을 배포하는 방법은

- 수동 방법
  - CloudFormation 디자이너나 코드 편집기에서 템플릿을 편집하고
  - 콘솔을 사용해 매개 변수를 입력한다.
  - 학습 목적으로 전체 프로세스를 확인하기 위해 이 방법을 사용한다.
- 자동 방법
  - Yaml 파일로 템플릿을 편집하고
  - CLI 또는 CD 도구를 사용해 템플릿을 배포할 수 있다.
  - 이는 플로우와 인프라를 완전히 자동화하려는 경우 권장되는 방법이다.

CloudFormation Templates의 기본 구성 요소

- Template
  - AWSTemplateFormatVersion: 템플릿을 읽는 방법을 정의하는 버전이다. AWS 내부 용도로 사용한다.
  - Description: 템플릿에 대한 주석이다.
  - Resource(필수 요소): 템플릿에서 선언된 모든 AWS 리소스를 정의한다.
  - Parameter: 템플릿에 동적으로 입력 값을 주는 것이다.
  - Mappings: 템플릿의 정적 변수이며, 파라미터와는 차이점이 있다.
  - Outputs: 템플릿에서 어떤 항목들이 생성되었는지에 대한 출력이다.
  - Conditions: 리소스 생성을 수행하기 위한 조건

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

CloudFormation에서 가장 자주 볼 것은 아마 YAML 템플릿일 것이다.

- YAML은 JSON과 마찬가지로 키-값 쌍을 사용한다. JSON은 많은 문자 보간 등의 이유로 CloudFomation 템플릿을 작성하는 데 좋지 않고, 가독성과 쉽게 구성할 수 있는 측면에서 YAML이 매우 좋다고 생각한다.
- YAML은 들여쓰기가 된 여러 키-값 쌍이 있다. 이것은 nested object라고 부르며 JSON 내에서는 nest object라고 한다.
- 그리고 배열을 지원한다. 하나의 오브젝트 내에서 여러개의 배열을 나타내는 마이너스 기호가 있다.
- 또한 다중 행 문자열을 지원하며 "|" 파이프 기호를 이용하면 된다.
- "#" 을 이용해 주석을 추가할 수도 있다.

```yaml
Resources:
  MyInstance:
    Type: AWS::EC2::Instance
    Properties:
      AvailabilityZone: us-east-1a
      ImageId: ami-0a3c3a20c09d6f377
      InstanceType: t2.micro
      SecurityGroups:
        - !Ref SSHSecurityGroup
      # we install our web server with user data
      UserData:
        Fn::Base64: |
          #!/bin/bash -xe
          dnf update -y
          dnf install -y httpd
          systemctl start httpd
          systemctl enable httpd
          echo "<h1>Hello World from user data</h1>" > /var/www/html/index.html

  # our EC2 security group
  SSHSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: SSH and HTTP
      SecurityGroupIngress:
        - CidrIp: 0.0.0.0/0
          FromPort: 22
          IpProtocol: tcp
          ToPort: 22
        - CidrIp: 0.0.0.0/0
          FromPort: 80
          IpProtocol: tcp
          ToPort: 80
```

**정리**
- YAML은 JSON과 비슷한 키-값 쌍을 사용하는 문서 형식이다.
- CloudFormation 템플릿을 작성할 때 가독성과 쉽게 구성할 수 있는 측면에서 YAML을 사용하고 있다.
- 들여쓰기 된 여러 키-값 쌍이 있는데, 이를 YAML에서는 Nested Object라고 한다.
- 배열을 지원하며 `-` 기호를 이용해 여러 개의 배열을 나타낸다.
- 다중 행 문자열을 `|` 기호를 이용해 지원한다.
- 주석을 `#` 기호를 이용해 지원한다.

## **[DVA] CloudFormation - Resources**

Resources는 CloudForamtion 템플릿의 핵심이며 전체 CloudFormation 템플릿에서 유일하게 필수인 섹션이다.

Resources는 템플릿의 일부로 생성 및 구성된 여러 AWS 구성 요소를 나타낸다.
Resources는 선언되고 서로 참조할 수 있으며, AWS는 자원의 생성, 업데이트 및 삭제를 우리 대신 처리해준다.

다양한 유형의 Resources가 있다. 700개 이상의 Resources 유형이 있어서 문서를 읽는 방법을 가르쳐준다.

Resources 유형 식별자는 `service-provider::service-name::data-type-name` 의 형식으로 되어 있다.

EC2의 경우 아래와 같은 형식의 yaml 파일을 갖는다.

properties의 경우 key value 쌍의 목록이다.
여러 개의 properties를 확인할 수 있으며 User guide 페이지를 확인하게 되면 여러 항목을 어떻게 사용하는 지 확인할 수 있다.

```yaml
Type: AWS::EC2::Instance
Properties:
  AdditionalInfo: String
  Affinity: String
  AvailabilityZone: String
  ~~~
```

많은 리소스에 대해 사용 가능한 많은 속성이 있다.
일반적으로 콘솔에서 지정할 수 있는 모든 것은 CloudFormation을 통해서도 지정할 수 있다.

리소스에 대해 몇 가지 자주 묻는 질문이 있다.

1.  동적 수의 리소스를 생성할 수 있을까?
    - 가능하다. Cloudformation macros와 Transform을 사용해야 하지만 이 강의의 범위에 포함되지 않는다.
2.  모든 AWS 서비스가 지원되는가?
    - 신규 서비스를 제외하고 거의 모든 서비스가 CloudFormation을 지원한다.
    - CloudFormation Custom Resources를 사용하면 지원되지 않는 서비스를 처리할 수 있다.

**정리**
- Resources는 CloudFormation 템플릿의 핵심이며 전체 템플릿에서 유일하게 필수인 섹션이다.
- 여러 AWS 구성 요소를 나타내며 선언되고 서로 참조할 수 있으며, AWS 내부에서 자원의 생성, 업데이트 및 삭제를 우리 대신 처리해준다.
- Resources의 Type은  `service-provider::service-name::data-type-name` 의 형식으로 되어 있으며, 예를 들어 EC2 인스턴스의 경우 `AWS::EC2::Instance` 로 표기한다.
- Properties의 경우 key-value 쌍의 목록이며, 여러 개의 Properties를 지정할 수 있고 User guide 페이지를 확인하면 여러 항목을 어떻게 사용하는지 확인 가능하다.
- Resource FAQ
  - "동적인 수의 리소스를 생성할 수 있는지?": CloudFormation Macros와 Transform을 사용하면 가능하다. *강의 범위에 포함되지 않는다.*
  - "모든 AWS 서비스가 지원되는 지?": 신규 서비스를 제외하고 거의 모든 서비스가 CloudFormation을 지원하며, CloudFormation Custom Resources를 사용하면 지원되지 않는 서비스를 처리할 수 있다.

## **[DVA] CloudFormation - Parameters**

Parameter는 템플릿에 인풋을 제공하는 방법이다.

CloudFormation 템플릿이 있고 사용자에게 매개 변수 값을 제공하려면 이러한 매개 변수는 CloudFormation 템플릿의 일부로 정의된다.

이전에 보안 그룹에 설명을 부여할 때 매개 변수를 이용해서 입력해주었다.

매개 변수는 여러 사람이 여러 매개 변수를 제공할 수 있도록 템플릿을 여러 곳에서 재사용하려면 알아야 할 중요한 내용이다.

인풋은 미리 결정할 수 없으므로 매개 변수는 강력하게 제어되고 type으로 인해 템플릿에서 오류가 발생하는 것을 방지할 수 있다.

예를들어 SecurityGroupDescription 매개 변수를 설정해서 보안 그룹의 설명을 설정할 수 있다.

우리는 다음과 같은 질문을 해봐야한다.

이 CloudFormation 리소스 config는 미래에 변경될 가능성이 있는가?
이러한 경우 매개 변수로 만드는 것이 좋다.
왜냐면 해당 값을 업데이트하려면 매개 변수만 수정하면 되고 템플릿을 다시 업로드 할 필요가 없기 때문이다.

또한 미리 결정할 수 없다면 매개 변수로 만들어야 한다.

매개 변수에는 여러 설정이 있으며 첫 번째는 유형이다.
String, Number, CommaDelimitedList, List, AWS-Specific Parameter, SSM Parameter 등이 있다.

또 Description, ConstraintDescription(제약 조건), Min/MaxLength, Min/MaxValue, Default, AllowedValues(array), AllowedPattern(regex), NoEcho(Boolean) 등등이 있다.

모든 것을 기억할 필요는 없지만 매개 변수는 단순한 문자열이 아니다.

파라미터는 제약 조건과 유효성 검사를 가질 수 있어서 안전하게 사용할 수 있도록 할 수 있다.

중요한 예시 두 가지를 소개하겠다.

첫번째는 AllowedValues 이다.
여기에는 InstanceType이라는 매개 변수가 있다.

Type: String인 EC2 InstanceType을 선택할 수 있다.

```yaml
AllowedValues:
  - t2.micro
  - t2.small
  - t2.medium
Default: t2.micro
```

이런 형태로 있을 때 이 매개변수는 세 가지 값 중 하나만 선택할 수 있으며 선택권이 주어지지만 제어가 된다.
기본 값이 t2.micro로 설정 되어 있기 때문에 기본적으로 t2.micro가 선택된다.

또한 NoEcho 매개변수가 있다.

예를 들어 매개 변수로 데이터베이스 암호를 입력하려고 하지만 물론 이것은 암호이므로 비밀로 유지해야한다.

따라서 패스워드가 어디에서도 표시되지 않도록 NoEcho: true로 설정해 로그에서 제거한다.

매개 변수를 어떻게 사용하는지 살펴보자

!Ref 함수를 사용하면 매개 변수를 참조하고 템플릿의 어디에서나 사용할 수 있다.

Fn::Ref 를 사용할 수도 있지만 !Ref라는 약식 버전이 있다.

이 함수는 매개 변수를 참조하는 것뿐만 아니라 템플릿 내의 다른 요소를 참조하는데 사용할 수 있다.

```yaml
Parameters:
  SecurityGroupDescription:
    Description: Security Group Description
    Type: String

Resources:
  MyInstance:
  Type: AWS:: EC2:: Instance
  Properties:
    AvailabilityZone: us-east-la
    ImageId: ami-0a3c3a20c09d6f377.
    InstanceType: t2.micro
    SecurityGroups:
      - !Ref SSHSecurityGroup
      - !Ref ServerSecurityGroup
```

```yaml
# our second EC2 security group
ServerSecurityGroup:
  Type: AWS::EC2::SecurityGroup
  Properties:
    GroupDescription: !Ref SecurityGroupDescription
    SecurityGroupIngress:
    - IpProtocol: tcp
      FromPort: 80
      ToPort: 80
      CidrIp: 0.0.0.0/0
    - IpProtocol: tcp
      FromPort: 22
      ToPort: 22
      CidrIp: 192.168.1.1/32
```

예를들어 SecurityGroupDescription이라는 매개변수에 Description과 Type: String 을 설정하고 제약 조건이 없다고 가정해보자

!Ref SecurityGroupDecription을 하게 되면 SecurityGroupDecription에 설정되어 있는 설명이 String의 형태로 참조되게 된다.

이것이 !Ref 함수의 사용 방법이고 CloudFormation 템플릿 내에서 매개 변수를 참조하는 방법이다.

!Ref 함수는 다른 위치에서도 사용된다.
꼭 파라미터를 불러오는 것이 아니라 이미 설정 되어 있는 SecurityGroup의 리소스의 리스트를 그대로 다른 SecurityGroup에서 참조하게 할 수도 있다.

따라서 매개 변수를 참조하는 데 동일한 방식이 사용되므로 리소스가 매개 변수와 동일한 이름을 가지지 않도록 주의해야 한다.

Pseudo Parameter가 있다.

AWS는 모든 CloudFormation 템플릿에서 Pseudo Parameter를 제공하고 있다.

이러한 것들은 생성하지 않았더라도 존재하며 언제든지 사용할 수 있으며 기본적으로 활성화되어 있다.

예를들어 아래와 같은 Pseudo Parameter가 있다.

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

매핑은 클라우드포메이션 템플릿 내에서 고정된 변수이며, 다른 환경 간에 차이를 두고 싶을 때 매우 편리하다.

예를 들어 dev, prod와 같이 다른 값을 제공하거나 AWS 지역이나 AMI 유형과 같은 Region에 따라 다른 값을 제공하고 싶을 때 유용하다.

```yaml
Mappings:
  RegionMap:
    us-east-1:
      "HVM64": "ami-0ff8a91507f77f867"
    us-west-1:
      "HVM64": "ami-0bdb828fd58c52235"
    eu-west-1:
      "HVM64": "ami-047bb4163c506cd98"
    ap-southeast-1:
      "HVM64": "ami-08569b978cc4dfa10"
    ap-northeast-1:
      "HVM64": "ami-06cd52961ce9f0d85"
```

위와 같이 각 Region에 따라 다른 AMI를 얻을 수 있다.

매핑 값에 액세스하려면 FindInMap 함수를 사용할 수 있다.
`Fn::FindInMap: [ MapName, TopLevelKey, SecondLevelKey ]`
`!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]`

```yaml
Resources:
  MyEC2Instance:
    Type: AWS: :EC2:: Instance
    Properties:
      ImageId: !FindInMap [RegionMap, !Ref "AWS::Region", HVM64]
      InstanceType: t2.micro
```

언제 매핑을 사용하는 것이 좋고 언제 매개 변수를 사용하는 것이 좋을까?
**매핑은 미리 모든 값을 알고 있고 지역, 가용 영역, AWS 계정, 환경(Dev, Prod)과 같은 변수에서 유도할 수 있는 경우에 좋다.**

이러한 템플릿에 대해 더 안전한 제어를 제공한다.

그러나 사용자가 원하는 값이 실행 시점에 어떤 것이며 사용자에게 최대한의 자유를 제공하려면 매개 변수를 사용해야 한다.

**정리**
- Mappings는 Templates 내에서 고정된 변수이며, 다른 환경 간에 차이를 두고 싶을 때 매우 편리하게 사용된다.
- 예를들어 dev, prod에 따라 다른 값을 제공하거나 AWS Region이나 AMI 유형과 같이 Region에 따라 다른 값을 제공하고 싶을 때 유용하다.
- Mappings는 미리 모든 값을 알고 있고 Region, Availability Zone, AWS 계정, 환경(Dev, Prod)과 같은 변수에서 유도할 수 있는 경우 좋다.
- 매핑 값에 액세스하려면 !FindInMap 함수를 사용하면 된다. `!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]`


## **[DVA] CloudFormation - Outputs & Exports**

Outputs는 선택 사항이며 선택적인 output 값을 선언한다.

이러한 값을 선언하면 다른 스택에서 output 값을 가져올 수 있다.

예를들어 네트워크 스택을 생성하고 내보낸 output이 있는 경우 해당 내보낸 output 값을 다른 애플리케이션 스택에서 참조할 수 있다.

콘솔이나 AWS CLI를 사용해서 output의 값을 볼 수 있다.

따라서 네트워크 스택을 정의하고 VPC ID, Subnet ID를 출력하여 다른 방식으로 재사용하는 경우에 출력이 매우 유용하다.

이렇게 하면 스택 간의 협업을 수행하고 자체 스택을 처리하고 협업할 수 있다.

```yaml
Outputs:
  PublicSubnet:
    Description: The subnet ID to use for public web servers
    Value:
      Ref: PublicSubnet
    Export:
      Name:
        "Fn::Sub": "${AWS::StackName}-SubnetID"
  WebServerSecurityGroup:
    Description: The security group ID to use for public web servers
    Value:
      "Fn::GetAtt":
        - WebServerSecurityGroup
        - GroupId
    Export:
      Name:
        "Fn::Sub": "${AWS::StackName}-SecurityGroupID"
```

위 코드에서는 Output이 있다.

```yaml
Resources:
  WebServerInstance:
    Type: 'AWS::EC2::Instance'
    Properties:
      InstanceType: t2.micro
      ImageId: ami-a1b23456
      NetworkInterfaces:
        - GroupSet:
            - Fn::ImportValue:
              'Fn::Sub': '${NetworkStackNameParameter}-SecurityGroupID'
          AssociatePublicIpAddress: 'true'
          DeviceIndex: '0'
          DeleteOnTermination: 'true'
          SubnetId: Fn::ImportValue:
            'Fn::Sub': '${NetworkStackNameParameter}-SubnetID'
```

Fn::ImportValue 함수를 이용하면 다른 스택에서 내보낸 값을 가져올 수 있다.

두 개의 다른 CloudFormation 템플릿을 연결할 수 있는데, 연결된 상황에서 첫 번째 스택이 내보낸 값을 더 이상 참조하지 않을 때까지 첫 번째 스택을 삭제할 수 없다. **증요**

**정리**
- Outputs는 선택적으로 특정 값을 선언해서 출력하는 값이고, Export하게 되면 Console이나 CLI를 사용해서 output의 값을 볼 수 있다.
- 예를들어 네트워크 스택을 정의하고 VPC ID, Subnet ID를 출력해 다른 스택에서 재사용하는 경우 Outputs이 매우 유용하다.
- 또한 다른 Stack에서 해당 Output 값을 참조할 수 있다.
  - Fn::ImportValue 함수를 이용하면 다른 스택에서 내보낸 값을 가져올 수 있다.
  - **중요한 사항 중 하나는 Export와 ImportValue를 통해 스택 간 연결을 한 경우 ImportValue로 참조하지 않을 때까지 Export한 스택을 삭제할 수 없다.**


## **[DVA] CloudFormation - Conditions**

Condition은 특정 조건에 기반하여 리소스 또는 output의 생성을 제어하는 데 사용된다.

예를 들어 개발 환경에서만 생성되어야하는 몇 가지 항목이 있을 수 있다. dev 또는 prod 스택 처럼 특정 환경에서만 생성되어야 하는 항목이 예다.
예를 들어 차이점을 두어 하나는 EBS 볼륨을 가지고 있고 다른 하나는 그렇지 않은 경우이다.

따라서 조건을 원하는 대로 만들 수 있다.

그러나 일반적으로는 개발, 테스트 및 프로덕션과 같은 환경에 따라 조건을 만드는 것이 흔하다. 또는 Region 또는 매개변수 값에 따라 조건을 만들수도 있다.

각 Condition은 서로를 참조하고 매개변수 값이나 매핑을 참조할 수 있다.

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: CloudFormation Condition 예제
Parameters:
  EnableFeature:
    Type: String
    AllowedValues: ["true", "false"]
    Description: 특정 기능을 활성화할지 여부를 선택합니다.
Conditions:
  EnableFeatureCondition: !Equals [!Ref EnableFeature, "true"]
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Condition: EnableFeatureCondition
    Properties:
      BucketName: MyEnabledBucket
Outputs:
  OutputMessage:
    Description: |
      조건에 따라 S3 버킷이 생성되었습니다.
    Value: !If
      - EnableFeatureCondition
      - "Enabled 기능이 활성화되었습니다."
      - "Enabled 기능이 비활성화되었습니다."
```

예를 들어 위에서는 EnableFeatureCondition 이라는 조건 값을 정의하고 여기에서 Equal을 이용해 EnableFeature의 파라미터와 동일한 값인지 확인한다.

EnableFeature의 파라미터와 동일하다면 true가 된다.

조건을 만들려면 And, Equals, If, Not, Or과 같은 모든 함수를 사용할 수 있고 이런 방식으로 조건을 만들 수 있다.

조건을 리소스에 적용하지만 출력 등에도 적용할 수 있다.

시험에서는 Conditions를 작성하는 방법을 알 필요는 없다. 조건이 존재한다는 것을 알기만 하면 된다.

**정리**
- Condition은 특정 조건에 기반하여 리소스 또는 Output의 생성을 제어하는 데 사용된다.
- 주로 Environment(dev, prod), AWS Region, Parameter의 값 등으로 조건을 만드는 것이 흔하다.
- 각 Condition은 서로를 참조하고 Parameters나 Mappings를 참조할 수 있다.
- Conditions는 And, Equals, If, Not, Or과 같은 모든 함수를 사용할 수 있다.
- 조건은 리소스 뿐만 아니라 Outputs에도 적용할 수 있다.


## **[DVA] CloudFormation - Intrinsic Functions**

Intrinsic Funtions(내장 함수)는 무조건 알아야 할 것이 있다.

- **must know**
  - Ref
  - Fn::GetAtt
  - Fn::FindInMap
  - Fn::ImportValue
  - Condition Functions(Fn::If, Fn::Not, Fn::Equals etc...)
  - Fn::Base64
- 일반
  - Fn::Join
  - Fn::Sub
  - Fn::ForEach
  - Fn::ToJsonString

이러한 함수들은 CloudFormation 문서에서 확인 가능하다.

**Ref 함수**는 매개변수에 대한 값 또는 생성된 기본 리소스(EC2 인스턴스 등)의 물리적 ID를 반환하는 데 사용될 수 있다.

느낌표와 함께 항상 축약하여 사용된다. !Ref

**GetAtt 함수**는 템플릿에서 생성한 모든 리소스에 연결된다. 이 함수는 속성을 가져오는 데 사용된다.

```yaml
Resources:
  EC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      Imageld: ami-0742b4e673072066f
      InstanceType: t2.micro

EBSVolume:
  Type: AWS::EC2::VoLume
  Condition: CreateProdResources
  Properties:
    Size: 100
    AvailabilityZone: !GetAtt EC2Instance.AvailabilityZone
```

```yaml
AWSTemplateFormatVersion: 2010-09-09
Resources:
  myELB:
    Type: AWS::ElasticLoadBalancing::LoadBalancer
    Properties:
      AvailabilityZones:
        - eu-west-1a
      Listeners:
        - LoadBalancerPort: "80"
          InstancePort: "80"
          Protocol: HTTP
  myELBIngressGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: ELB ingress group
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          SourceSecurityGroupOwnerId: !GetAtt myELB.SourceSecurityGroup.OwnerAlias
          SourceSecurityGroupName: !GetAtt myELB.SourceSecurityGroup.GroupName
```

예제 코드에서 볼 수 있듯이 myELB에 !GetAtt 함수를 이용해서 myELB.SourceSecurityGroup.OwnerAlias 해당 속성 값을 가져오게 된다.

예를 들어 "EC2Instance" EC2 인스턴스를 생성하고 "EC2Instance"라는 이름의 인스턴스에서 가용 영역을 가져오려면 `!GetAtt EC2Instance.AvailabilityZone`을 사용하면 속성을 가져올 수 있다.

FindInMap 함수는 특정 맵에서 특정 키의 값을 가져오는 데 사용된다. 주로 매필을 사용할 때 사용된다.

ImportValue 함수는 다른 스택에서 내보낸 값을 가져오는 데 사용된다.

Base64 함수는 문자열을 Base64 표현으로 변환하는 데 사용된다. 주로 EC2 인스턴스의 Userdata에 데이터를 전달할 때 사용된다.

이런 식으로 내장 함수들은 템플릿 내에서 동적이고 유연한 작업을 수행하는 데 중요한 도구이다.

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

**Stack failure options**
스택을 생성하고 스택 생성이 실패하면 두 가지 옵션이 있다.

첫 번째는 기본 옵션으로 모든 것이 롤백되어 삭제된다.

CloudFormation 생성 로그를 확인하여 실패 이유를 이해할 수 있지만 리소스를 확인할 수는 없다.

두번째는 리소스 중 하나에 문제가 있고 나머지는 유지하고 싶다면 롤백을 비활성화하여 스택 생성 중에 무엇이 발생했는지 문제 해결할 수 있다. (Preserve successfully provisioned resources)

스택 업데이트의 문제인 경우 기본적으로 스택은 자동으로 마지막으로 알려진 작동 중인 상태로 롤백된다. 다시 말해 새롭게 업데이트로 생성된 모든 리소스들이 삭제된다.
생성된 모든 것이 삭제되었을 때 로그를 확인해 오류 메시지를 확인할 수 있다.

롤백 실패의 경우 스택 업데이트 중 롤백이 실패한 경우이다. 이는 스택에 문제가 있으며 수동으로 변경된 리소스가 있을 가능성이 높다. 이 경우 수동으로 리소스를 수정해야 한다.
그 다음 콘솔이나 API를 통해 ContinueUpdateRollback을 호출해 CloudFormation에 다시 롤백을 시도하라고 알릴 수 있다.

디폴트인 상태에서 실패하면 모든 것이 삭제되지만 Preserve successfully provisioned resources로 설정하게되면 일부가 남아있기 때문에 필요에 따라 문제를 해결할 수 있다. 허나 삭제되지 않은 잔여물을 제거하려면 스택을 삭제해야 한다.

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

CloudFormation은 서비스 역할을 사용할 수 있다. 서비스 역할은 CloudFormation 전용으로 만든 IAM 역할로, CloudFormation이 실제로 나를 대신해 스택 리소스를 생성, 업데이트 및 삭제할 수 있게 한다.

따라서 사용자에게 리소스와 직접 작업할 수 있는 권한이 없지만 스택 리소스를 생성, 업데이트 및 삭제할 수 있는 능력을 부여하려면 서비스 역할을 사용한다.

예를 들어 사용자는 템플릿을 생성 가능한 cloudformation에 대한 모든 권한과 PassRole이 있다.
CloudFormation에 할당할 Service Role을 생성하고, 해당 역할은 버킷을 생성, 업데이트 및 삭제할 수 있는 권한을 갖게되면

사용자가 CloudFormation에 PassRole을 이용해서 역할을 전달할 수 있기 때문에 CloudFormation은 이 서비스 역할을 사용해 S3 버킷을 생성할 수 있다.

보안을 위한 사용 사례로는 최소 권한 원칙을 실현하고 사용자에게 스택 리소스를 생성할 수 있는 모든 권한을 부여하지 않고 CloudFormation에서 서비스 역할을 호출할 수 있는 권한만 부여하려는 경우가 있다. 이를 위해 사용자는 iam:PassRole이라는 권한을 가지고 있어야 한다.

**정리**
- CloudFormation은 IAM 기반의 서비스 역할을 생성해 실제로 사용자를 대신해 스택 리소스를 생성 및 업데이트, 삭제할 수 있다.
- 예를 들어 사용자는 템플릿을 생성할 수 있는 CloudFormation에 대한 모든 권한과 PassRole이 있을 때 사용자가 PassRole을 이용해서 역할을 전달할 수 있기 때문에 해당 역할에 버킷을 생성, 업데이트 및 삭제할 수 있는 권한이 있다면 이 서비스 역할을 사용해 S3 버킷을 생성할 수 있다.
-  보안을 위해서는 최소 권한 원칙을 준수하고 사용자에게 스택 리소스를 생성할 수 있는 모든 권한을 부여하기 보다 CloudFormation에서 서비스 Role을 호출할 수 있는 권한만 부여하고, 사용자에게는 iam:PassRole 권한을 부여하면 된다.

## **[DVA] CloudFormation - Capabilities**

**CAPABILITY_NAMED_IAM**과 **CAPABILITY_IAM**이 있다.

이것은 CloudFormation 템플릿이 IAM 리소스를 생성하거나 업데이트할 때 CloudFormation에 부여해야 하는 기능이다.

예를 들어 IAM 사용자, 역할, 그룹, 정책 등을 CloudFormation 템플릿을 통해 생성할 때이다.

리소스에 사용자가 부여한 이름이 지정된 경우 CAPABILITY_NAMED_IAM을 지정하고 그렇지 않으면 단순히 CAPABILITY_IAM을 사용한다.

이렇게 하는 이유는 CloudFormation이 IAM 리소스를 생성할 것임을 명시적으로 인식하려는 것이다.

**CAPABILITY_AUTO_EXPAND**도 있다.

이는 CloudFormation 템플릿이 매크로와 Nested 스택(스택 내의 스택)을 포함할 때 사용된다.
템플릿이 배포되기 전에 변경될 수 있다는 사실을 명시적으로 인식하고 있다.

결과적으로 CAPABILITY_NAMED_IAM, CAPABILITY_IAM, CAPABILITY_AUTO_EXPAND 는 위 상황에 맞게끔 필수적으로 넣어줘야 하는 매개변수 같은 걸로 이해하면 된다. 없으면 스택 생성하거나 업데이트할 때 충돌이 발생함!

InsufficientCapabilitiesException는 템플릿을 시작할 때 CloudFormation 템플릿이 Capabilities를 요청했지만 사용자가 이를 인증하지 않았다는 것을 의미한다.
결국 템플릿을 다시 만들고, 업로드하고, Capabilities를 꼭 넣어줘야 한다.

이 capability들은 CLI나 SDK를 사용할 경우 API 호출의 추가 매개변수이고, AWS 콘솔에서는 선택하는 체크박스로 나타난다.

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

Deletion Policy는 템플릿에서 리소스에 적용할 수 있는 설정으로 리소스가 CloudForamtion 템플릿에서 제거되거나 CloudFormation 스택이 삭제될 때 리소스에 대해 어떤 작업을 수행할지를 제어할 수 있게 해준다.

리소스를 보존하고 백업하는 방법으로 사용된다.

기본적으로 CloudFormation 템플릿을 삭제하면 내부의 모든 리소스가 삭제된다. 이는 기본적으로 DeletionPolicy가 delete로 설정되어 있어서이다.

템플릿 내에 S3가 있을 경우 S3는 제외이다. S3는 버킷이 비어있을 경우에만 DeletionPolicy가 작동된다.

DeletionPolicy: Retain는 템플릿에서 보존하려는 리소스를 지정하는 것이다.

DeletionPolicy: Snapshot이 있다. 이는 리소스를 삭제하기 전에 마지막 스냅샷을 생성하는 것이다.
EBS 볼륨, ElastiCache 클러스터, ElastiCache ReplicationGroup, RDS DBInstance, DB 클러스터, Redshift, Neptune, DocumentDB 등에서 지원된다.

백업 및 안전성 목적으로 매우 유용하다.

```yaml
# Does not exist DeletionPolicy
Resources:
  SGroup1:
    Type: 'AWS::EC2::SecurityGroup'
    Properties:
      GroupDescription: EC2 Instance access

# Retain
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  myS3Bucket:
    Type: AWS::S3::Bucket
    DeletionPolicy: Retain

# Snapshot
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  myvol:
    Type: AWS::EC2::Volume
    DeletionPolicy: Snapshot
```

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

기본적으로 CloudFormation 스택을 업데이트할 때 모든 리소스에 대해 모든 작업이 허용된다.

그래서 스택을 원하는대로 변경할 수 있지만 때로는 전체 스택 또는 일부 스택을 업데이트로부터 보호하고 싶을 수도 있다.

스택 정책은 JSON 문서로 스택 업데이트 중에 특정 리소스에서 허용되는 업데이트 작업을 정의한다.

```json
{
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "Update:*",
      "Resource": "*"
    }
  ]
}
```

위와 같은 형식의 JSON 문서로 구성되며 Effect가 Allow라면 모든 것에 대한 업데이트를 허용한다는 이야기이다.

스택 정책은 의도하지 않은 업데이트로부터 리소스를 보호하는 것이며, 스택 정책을 설정하면 기본적으로 모든 리소스가 보호된다.
업데이트를 허용하려는 리소스에 대해 명시적으로 "Allow"가 필요하다

**정리**
- Stack Policy는 전체 스택 또는 일부 스택을 업데이트로부터 보호할 경우 사용하면 유용하다.
- Stack Policy는 JSON 문서로 스택 업데이트 중에 특정 리소스에서 허용되는 업데이트 작업을 정의한다.
- Stack Policy를 설정하게 되면 기본적으로 모든 리소스가 보호되며 업데이트를 허용하려는 리소스에 대해 명시적으로 "Allow"가 필요하다.

## **[DVA] CloudFormation - Termination Protection**

스택이 실수로 삭제되는 것을 방지하려면 Termination Protection을 사용해야한다.

Termination Protection이 활성화되어 있으면 먼저 Termination Protection을 비활성화해야 스택을 삭제할수 있다고 출력이 될 것이다.

**정리**
- Termination Protection을 사용하면 스택이 실수로 삭제되는 것을 방지할 수 있고, 비활성화해야 스택을 삭제할 수 있다.

## **[DVA] CloudFormation - Custom Resources**

CloudFormation에서 지원하지 않거나 CloudFormation 외부에서 사용자 정의 프로비저닝 로직을 정의하려면 사용자 정의 리소스가 필요하다.

예를들면 온프레미스 리소스나 Third-party 리소스, 또는 CloudFormation 스택의 생성, 업데이트 및 삭제 단계에서 Lambda 함수를 통해 사용자 지정 스크립트를 실행하려는 경우이다.

예를들어 Lambda 함수를 실행해 S3 버킷을 삭제하기 전에 비우는 스크립트를 설정할 수 있다. (시험에 자주 등장하는 케이스의 문제)

사용자 정의 리소스를 정의하려면 템플릿에서 정의하면 되고, AWS::CloudFormation::CustomResource 또는 Custom::MyCustomResourceTypeName(추천) 로 정의하면 된다.

```yaml
Resources:
  MyCustomResourceUsingLambda:
    Type: Custom::MyCustomResourceTypeName
    properties:
      ServiceToken: arn:aws:lambda:REGION:ACCOUNT_ID:function:RUNCTION_NAME
      ExampleProperty: "ExampleValue"
```

위 예제에서 볼 수 있듯이 Type 항목을 Custom::MyCustomResourceTypeName 로 지정했다. 예를 들어 Custom::MyLambdaResource 로 지정할수도 있다.

ServiceToken은 Lambda 함수의 ARN이나 SNS의 ARN을 기입하면 된다.

사용 사례는 S3 버킷에서 오브젝트를 삭제하는 게 있다.
왜냐하면 비어 있지 않은 S3는 CloudFormation에서 삭제할 수 없기 때문이다.

그래서 보통 유저가 delete stack을 할 때 Custom resource로 S3 버킷을 비우는 람다 함수를 생성해 사용한다.

**정리**
- CloudFormation에서 지원하지 않거나 CloudFormation 외부에서 사용자 정의 프로비저닝 로직을 정의하려면 사용자 정의 리소스가 필요하다.
- 온프렘 리소스, Third-part 리소스, CloudFormation 스택의 생성, 업데이트 및 삭제 단계에서 Lambda 함수를 통해 사용자 지정 스크립트를 실행하려는 경우가 예다.
- 시험에는 Lambda 함수를 실행해 S3 버킷을 삭제하기 전에 비우는 Custom Resource로 구성 된 스크립트가 자주 등장한다.
- `Type: Custom::MyCustomResourceTypeName` 으로 정의하면 된다.
- 만약 ServiceToken이 필요하다면 lambda 함수의 ARN을 기입하면 된다.

## **[DVA] CloudFormation - Dynamic References**

System Manager Parameter store에 값을 저장하거나 Secrets Manager에 시크릿을 저장할 수 있다.
이 값을 CloudFormation 템플릿에 참조할 수 있다. 템플릿 생성, 업데이트 또는 삭제 작업 중에 CloudFormation이 지정된 참조의 값을 검색한다는 개념

예를 들어 Secrets Manager에서 RDS 데이터베이스 인스턴스의 마스터 암호를 검색하려고 할 수 있다.

CloudFormation을 이용하면 3가지 유형의 키를 사용해 Parameter Store 또는 Secrets Manager에서 값을 가져올 수 있다.

1.  Systems Manager Parameter Store에 저장된 평문 값을 나타내는 ssm
2.  Systems Manager Parameter Store에 저장된 보안 문자열을 나타내는 ssm-secure
3.  그리고 Secrets Manager 서비스에 저장된 비밀 값을 나타내는 secretsmanager

{{resolve:[service-name]:reference-key}} 아래와 같은 형태로 값을 불러올 수 있고 ssm 의 경우 {{resolve:ssm:parameter-name:version}}이다.

```yaml
MyRDSInstance:
  Type: "AWS::RDS::DBInstance"
  Properties:
    DBName: MyRDSInstance
    AllocatedStorage: "20"
    DBInstanceClass: db.t2.micro
    Engine: mysql
    MasterUsername: "{{resolve:secretsmanager:MyRDSSecret:SecretString:username}}"
    MasterUserPassword: "{{resolve:secretsmanager:MyRDSSecret:SecretString:password}}"
```

위 예문에서는 secretsmanager에 있는 사용자 이름과 암호를 동적 참조를 사용해 불러온다.

AWS::RDS::DBCluster 예를 들어 aurora를 생성하는 스택을 만들면 ManageMasterUserPassword가 True로 설정되어 Secrets Manager에 마스터 사용자의 비밀번호가 암시적으로 생성된다.
즉, RDS 서비스 자체가 Secrets Manager에 마스터 사용자 비밀번호 및 rotation을 관리하기 위한 비밀을 생성한다.

```yaml
Resources:
  MyCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      Engine: aurora-mysql
      MasterUsername: masteruser
      ManageMasterUserPassword: true

Outputs:
  Secret:
    Value: !GetAtt Mycluster.MasterUserSecret.SecretArn
```

그래서 Secrets의 ARN을 가져오기 위해서는 Output에서 !GetAtt Mycluster.MasterUserSecret.SecretArn 등을 사용해 Secret을 가져와야한다.

다른 방법은 동적 참조를 이용하는 방법이다.

```yaml
Resources:
  MyDatabaseSecret:
    Type: AWS::SecretsManager::Secret
    properties:
      Name: MyDatabaseSecret
      GenerateSecretString:
        SecretStringTemplate: '{"username": "admin"}'
        GenerateStringKey: "password"
        PasswordLength: 16
        ExcludeCharacters: '"@/\'
```

이번에는 !GetAtt 로 가져오는 것이 아니라 비밀번호를 직접 생성하는 GenerateSecretString을 사용한다.
CloudFormation 내에서 자동으로 비밀번호를 생성한다.

```yaml
MyDBInstance:
  Type: AWS::RDS::DBInstance
  Properties:
    DBName: mydatabase
    AllocatedStorage: 20
    DBInstanceClass: db.t2.micro
    Engine: mysql
    MasterUsername: "{{resolve:secretsmanager:MyDatabaseSecret:SecretString:username}}"
    MasterUserPassword: "{{resolve:secretsmanager:MyDatabaseSecret:SecretString:password}}"
```

그 다음으로는 DB 인스턴스가 있는데, 이 데이터베이스 인스턴스는 {{resolve}} 함수를 활용해 RDS 데이터베이스 인스턴스에서 비밀을 참조할 것이다. (실제로 값은 Secrets Manager에 저장)
즉, 데이터베이스 인스턴스가 Secrets Manager에서 시크릿을 활용하게 된다.

```yaml
SecretRDSAttachment:
  Type: AWS::SecretsManager::SecretTargetAttachment
  properties:
    SecretId: !Ref MyDatabaseSecret
    TargetId: !Ref MyDBInstance
    TargetType: AWS::RDS::DBInstance
```

마지막으로 위 두 가지를 서로 연결하고 비밀번호 Rotation이 있는지 확인하기 위해 SecretTargetAttachement를 만들어 데이터베이스에 Secrets Manager에서 이 Secret에 연결해야 한다는 것을 알려주면 시간이 지나면 Secret이 Rotate되고 RDS 데이터베이스가 자동으로 업데이트될 수 있다.

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

CloudFormation을 이용해서 EC2 인스턴스에 User Data를 전달할 수 있다.

User data는 EC2 인스턴스 시작을 위한 스크립트로 사용될 수 있으며, 콘솔로 설정할 수도 있지만 CloudFormation 템플릿을 통해 동일한 작업을 수행할 수도 있다.

중요한 것은 스크립트 전체를 Base64라는 함수를 통해 전달하는 것이다.

User data 스크립트는 /var/log/cloud-init-output.log 라는 파일에도 저장된다.
이 파일을 통해 어떤 일이 발생했는지 어떤 문제가 있었는지 확인 가능하다.

```yaml
    Properties:
        UserData:
            Fn::Base64: |
            #!/bin/bash -xe
            dnf update -y
            dnf install -y httpd
            systemctl start httpd
            systemctl enable httpd
            echo "<h1>Hello World from user data</h1>" > /var/www/html/index.html
```

위와 같은 userdata를 사용하는 웹 서버를 시작한다고 가정해보자
Fn::Base64: | 에서 파이프 기호("|")는 이 전체 스크립트를 사용자 데이터로 전달한다는 것을 의미한다.

인스턴스가 실행되고 userdata및 결과를 확인하려면 /var/log/cloud-init-output.log 파일을 확인해 clouds-init의 로그를 확인하면 명령과 결과를 확인할 수 있다.

**정리**

- 콘솔에서 인스턴스를 생성할 때 Userdata를 작성하듯이 CloudFormation에서 UserData를 작성할 수 있다.
- UserData는 EC2 인스턴스를 정의하는 템플릿에서 Properties 밑에 작성해야 하며, 꼭 Base64 함수를 이용해 인코딩 후 전달해야 한다.
- 스크립트는 실행된 EC2 인스턴스 내에 /var/log/cloud-init-output.log 파일에도 저장되고 파일을 확인하면 전체 로그가 남아 있다.
- 파이프 기호("|")는 전체 스크립트를 사용자 데이터로 다중 문자열로 전달한다는 것을 의미한다.

## **CloudFormation - cfn-init**

Userdata는 몇 가지 문제가 있다.

인스턴스 구성이 매우 커서 스크립트가 많아지는 경우는 어떻게 해야 하는가? 그리고 Userdata는 인스턴스 첫 시작에만 적용되어 EC2 인스턴스를 종료하고 새로 만들지 않고도 어떻게 userdata를 실행할 수 있을까? userdata를 더 읽기 쉽게 만들려면 어떻게 해야하며 userdata 스크립트가 성공했는지 여부를 어떻게 알수 있을까?

CloudFormation helper scripts를 사용하면 된다.

script는 Python 스크립트이고 Amazon Linux AMI와 함께 제공되거나 yum이나 dnf를 사용해 설치할 수 있다.

그 중에서도 cfn-init, cfn-signal, cfn-get-metadata, cfn-hup 네 가지 중요한 스크립트가 있다.

CloudFormation init 은 리소스 내에서 메타데이터 블록에 속하는 config 블록으로 여러 구성 요소로 되어 있다.

```yaml
Resources:
  MyInstance:
    Type: AWS::EC2::Instance
    Properties:
      AvailabilityZone: us-east-1a
      ImageId: ami-0a3c3a20c09d6f377
      InstanceType: t2.micro
      SecurityGroups:
        - !Ref SSHSecurityGroup
      # we install our web server with user data
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash -xe
          # Get the latest CloudFormation package
          dnf update -y aws-cfn-bootstrap
          # Start cfn-init
          /opt/aws/bin/cfn-init -s ${AWS::StackId} -r MyInstance --region ${AWS::Region} || error_exit 'Failed to run cfn-init'
    Metadata:
      Comment: Install a simple Apache HTTP page
      AWS::CloudFormation::Init:
        config:
          packages:
            yum:
              httpd: []
          files:
            "/var/www/html/index.html":
              content: |
                <h1>Hello World from EC2 instance!</h1>
                <p>This was created using cfn-init</p>
              mode: "000644"
          commands:
            hello:
              command: "echo 'hello world'"
          services:
            sysvinit:
              httpd:
                enabled: "true"
                ensureRunning: "true"
```

packages는 MySQL, PHP 등과 같은 미리 패키지화된 앱 및 구성 요소를 다운로드하고 설치하는 데 사용된다.

파일을 다운로드하고 EC2 인스턴스에 배치하는 데 사용되는 sources:
EC2 인스턴스에 파일을 생성하는 데 사용되는 files:
일련의명령을 실행하는 데 사용되는 commands:
서비스를 시작하는 데 사용되는 services가 있다.

cfn-init 스크립트를 사용하면 복잡한 EC2 구성을 읽기 쉽게 만들 수 있다.
작동 과정은 EC2 인스턴스는 init 데이터를 얻기 위해 CloudFormation 서비스에 쿼리를 날리고, CloudFormation은 EC2 인스턴스를 시작하고 인스턴스는 cfn-init 스크립트를 실행하며 init 데이터를 CloudFormation에서 직접 검색한다.

CloudFormation init 블록을 리소스의 메타데이터에 정의해야한다.

이러한 작업에 대한 모든 로그는 /var/log/cfn-init.log 파일에 기록된다.

예제 UserData에 `/opt/aws/bin/cfn-init -s ${AWS::StackId} -r MyInstance --region ${AWS::Region}` 명령어가 있는데 -s 인수로 StackId를 전달하고 -r 인수로 어떤 리소스에 메타데이터가 첨부되어 있는지를 찾을지 정해주는 것이다.

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

EC2 인스턴스를 cfn-init 스크립트를 실행한 후 올바르게 구성되었는지 여부를 알 수 있는 방법에 대해 이야기 해보자

이를 위해서 cfn-signal 스크립트를 사용한다.

일반적으로 cfn-init 스크립트 바로 다음에 cfn-signal 스크립트를 실행한다.

그리고 이 스크립트는 리소스 생성이 성공했는지 실패했는지 CloudFormation에 알려줄 것이다.

이를 위해 우리는 CloudFormation에서 WaitCondition이라고 불리는 것을 정의해야한다.

WaitCondition은 이름에서 알 수 있듯이 템플릿이 cfn-signal로부터 신호를 받을때까지 기다린다.

```yaml
# 성공 스크립트
UserData:
        Fn::Base64:
          !Sub |
            #!/bin/bash -x
            # Get the latest CloudFormation package
            dnf update -y aws-cfn-bootstrap
            # Initialize EC2 Instance
            /opt/aws/bin/cfn-init -v --stack ${AWS::StackName} --resource MyInstance --region ${AWS::Region}
            # Get result of last command
            INIT_STATUS=$?
            # send result back using cfn-signal
            /opt/aws/bin/cfn-signal -e $INIT_STATUS --stack ${AWS::StackName} --resource SampleWaitCondition --region ${AWS::Region}
            # exit the script
            exit $INIT_STATUS

Metadata:
      Comment: Install a simple Apache HTTP page
      AWS::CloudFormation::Init:
        config:
          packages:
            yum:
              httpd: []
          files:
            "/var/www/html/index.html":
              content: |
                <h1>Hello World from EC2 instance!</h1>
                <p>This was created using cfn-init</p>
              mode: '000644'
          commands:
            hello:
              command: "echo 'hello world'"
          services:
            sysvinit:
              httpd:
                enabled: 'true'
                ensureRunning: 'true'

  SampleWaitCondition:
    CreationPolicy:
      ResourceSignal:
        Timeout: PT3M
        Count: 1
    Type: AWS::CloudFormation::WaitCondition
```

위 예제에서 timeout과 count를 포함하는 생성 정책이 있다.
우리가 하나 이상으로 카운트를 정의하면 하나 이상의 리소스가 CloudFormation에게 성공 신호를 전달하는 것이다.

예를 들어 CloudFormation은 EC2 인스턴스를 시작하고 WaitCondition이 발생할 것이다. EC2 인스턴스는 cfn-init을 실행할 것이고 init 데이터를 검색하지만, init 데이터 바로 뒤에 cfn-signal에서 신호를 수행하여 WaitCondition에서 데이터를 다시 CloudFormation으로 전달한다.

```yaml
UserData:
  Fn::Base64: !Sub |
    #!/bin/bash -x
    # Get the latest CloudFormation package
    dnf update -y aws-cfn-bootstrap
    # Initialize EC2 Instance
    /opt/aws/bin/cfn-init -v --stack ${AWS::StackName} --resource MyInstance --region ${AWS::Region}
    # Get result of last command
    INIT_STATUS=$?
    # send result back using cfn-signal
    /opt/aws/bin/cfn-signal -e $INIT_STATUS --stack ${AWS::StackName} --resource SampleWaitCondition --region ${AWS::Region}
    # exit the script
    exit $INIT_STATUS
```

여기 스크립트가 조금 다른 yaml 파일이 있다. 이전과 마찬가지로 cfn-init을 실행하는데, 마지막 명령의 결과를 INIT_STATUS라는 변수에 저장한다. 그래서 cfn-init이 성공했다면 변수는 0이 될것이다. 실패할 경우 0이 아닌 다른 오류 코드 가 될 것이다.

cfn-signal 스크립트에 INIT_STATUS를 전달하고 최종적으로 CloudFormation에 결과를 전송한다.

WaitCondition에서 Count 1 에 해당하는 신호를 받는데까지 대기하는 시간(타임아웃)은 2분이다. 2분 내에 아무것도 받지 못하면 실패하고 성공 또는 실패 시그널을 받는다.

최종적으로 정리하자면 /opt/aws/bin/cfn-init 스크립트를 실행하고 실행한 결과를 변수화 해 /opt/aws/bin/cfn-signal 스크립트에서 사용해 CloudFormation으로 전송하며, WaitCondition은 /opt/aws/bin/cfn-signal 에서 정상적인 신호를 받을 때까지 기다리는 것이다.

**정리**

- cfn-signal 스크립트는 cfn-init 스크립트를 실행한 후 올바르게 구성 되었는지 여부를 알 수 있는 방법이다.
- cfn-init 스크립트가 실행된 직후 cfn-signal 스크립트를 실행하고 리소스 생성이 성공했는지 실패했는지 CloudFormation에 알려준다.
- 필수적으로 WaitCondition을 정의해야 하는데 이는 템플릿이 cfn-signal로부터 신호를 받을때까지 기다린다.
  - CreationPolicy와 Type을 WaitCondition으로 지정해주어 하나 이상의 성공 신호를 확인해 2분의 타임아웃 시간동안 스크립트가 정상적으로 수행 되었는지 확인하는 것이다.
- 정리하자면 cfn-signal 스크립트는 cfn-init 스크립트를 실행하고 실행한 결과를 INIT_STATUS 변수로 저장해 cfn-signal 스크립트에서 사용하고 CloudFormation으로 쿼리를 전송하고 WaitCondition은 cfn-signal에서 정상적인 신호를 받을 때까지 기다리는 프로세스가 될 것이다.

## **CloudFormation - cfn-signal Failures**

```yaml
# 실패 스크립트
UserData:
        Fn::Base64:
          !Sub |
            #!/bin/bash -x
            # Get the latest CloudFormation package
            dnf update -y aws-cfn-bootstrap
            # Initialize EC2 Instance
            /opt/aws/bin/cfn-init -v --stack ${AWS::StackName} --resource MyInstance --region ${AWS::Region}
            # Get result of last command
            INIT_STATUS=$?
            # send result back using cfn-signal
            /opt/aws/bin/cfn-signal -e $INIT_STATUS --stack ${AWS::StackName} --resource SampleWaitCondition --region ${AWS::Region}
            # exit the script
            exit $INIT_STATUS

Metadata:
      Comment: Install a simple Apache HTTP page
      AWS::CloudFormation::Init:
        config:
          packages:
            yum:
              httpd: []
          files:
            "/var/www/html/index.html":
              content: |
                <h1>Hello World from EC2 instance!</h1>
                <p>This was created using cfn-init</p>
              mode: '000644'
          commands:
            hello:
              command: "echo 'boom' && exit 1"
          services:
            sysvinit:
              httpd:
                enabled: 'true'
                ensureRunning: 'true'

   SampleWaitCondition:
    CreationPolicy:
      ResourceSignal:
        Timeout: PT3M
        Count: 1
    Type: AWS::CloudFormation::WaitCondition
```

WaitCondition이 EC2 인스턴스로부터 필요한 수의 신호를 수신하지 못했다는 문제가 일반적으로 많이 나온다.

여기에 몇 가지 이유가 있다.

사용 중인 AMI에 CloudFormation helper scripts가 설치되지 않았을 수 있다.
스크립트가 포함되어 있지 않다면 인스턴스에 설치하면 된다.

또한 cfn-init 및 cfn-signal 명령의 출력도 확인해야 한다. 몇 개의 로그 파일을 통해 이 명령어들이 어떻게 실행되었는지에 대한 많은 정보를 얻을 수 있다.

인스턴스에 액세스하려면 먼저 CloudFormation의 롤백 기능을 비활성화해야한다.
비활성화 하지 않는다면 실패한 EC2 인스턴스가 실패 상태가 되자마자 자동으로 CloudFormation이 삭제 상태가 되어 삭제되기 때문에 실제로 무슨 일이 발생했는지 파악하기 위함이다.

또한 EC2 인스턴스가 인터넷에 액세스할 수 있는지 확인해야 한다.

그리고 오류 발생 여부를 확인해야 한다. 위 예제에서 볼 수 있듯이 `commands: ` 항목을 확인해보면 echo boom 뒤에 exit 1을 실행한다.

상태코드 0이 아닌 1을 반환하므로 cfn-init 명령어는 1의 코드를 갖고 있게 되고 INIT_STATUS 변수에 1이 저장되며 CloudFormation에는 1 오류 상태를 전달하게되어 CloudFormation이 실패하게 될 것이다.

앞서 말했듯이 위와 같은 실패 상황에서 디버깅을 위해선 rollback 설정을 해제해야한다.

**정리**

- cfn-signal에서 WaitCondition이 EC2 인스턴스로부터 필요한 수의 신호를 받지 못했다는 문제가 시험에서 많이 나온다고 한다.
- 아래의 이유로 신호를 받지 못한다.
  - 사용 중인 AMI에 CloudFormation helper scripts가 설치되지 않은 경우
  - EC2 인스턴스가 인터넷에 액세스할 수 있는지
  - 특정 이유로 상태 코드가 0이 아닌 경우
- cfn-init 및 cfn-signal 명령의 출력을 확인해보면 원인을 찾을 수 있다. 두 파일 모두 명령어들이 어떻게 실행되었는지 확인할 수 있다.
- 또한 인스턴스에서 실제로 무슨 일이 발생했는 지 확인하려면 CloudFormation Rollback 설정을 해제해야 한다.

## **CloudFormation - Nested Stacks**

Nested Stack(중첩 스택)은 다른 스택 안에 있는 스택이다.

중첩 스택을 사용하면 반복되는 패턴과 공통 구성 요소를 별도의 스택에서 분리한 다음 다른 스택에서 호출할 수 있다.

예를 들어 재사용되는 로드 밸런서 구성이 있는 경우 이를 중첩 스택으로 구성할 수 있다.

중첩된 스택을 업데이트하기 위해서는 항상 상위 스택을 업데이트 해야한다. 루트 스택과 중첩된 스택은 그 자체 안에 중첩된 스택을 가질수 있다. 중첩된 스택안에 중첩된 스택을 다시 넣을수 있어 매우 깊이 들어갈 수 있다.

Cross Stack(교차 스택)이라는 개념도 있다. 교차 스택의 경우 스택의 수명 주기가 다를 때 매우 유용하다.

예를 들어 VPC 스택이 있고 일부 변수를 출력으로 내보내 Application 스택으로 내보내는 경우 즉, 스택 간에 값을 전달해야 할 때 매우 편리하다.

중첩 스택의 경우 재사용해야 하는 컴포넌트가 있는 경우 유용하다. 예를 들어 한 애플리케이션 스택을 구성할 때 RDS 스택, ASG 스택, ELB 스택을 생성해야 할 경우 또 다른 인스턴스를 생성하게 되면 이전에 생성했던 것과는 다른 각각의 RDS 스택, ASG 스택, ELB 스택을 생성하게 된다.

상황에 따라 교차 스택과 중첩 스택을 다르게 사용해야한다.

```yaml
Resources:
  MyKeyPair:
    Type: AWS::EC2::KeyPair
    Properties:
      KeyName: DemoKeyPair
      KeyType: rsa

  myStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/cloudformation-templates-us-east-1/LAMP_Single_Instance.template
      Parameters:
        KeyName: !Ref MyKeyPair
        DBName: "mydb"
        DBUser: "user"
        DBPassword: "pass"
        DBRootPassword: "passroot"
        InstanceType: t2.micro
        SSHLocation: "0.0.0.0/0"

Outputs:
  StackRef:
    Value: !Ref myStack
  OutputFromNestedStack:
    Value: !GetAtt myStack.Outputs.WebsiteURL
```

중첩 스택의 경우 Resources 안에 스택을 지정해서 사용한다.
위 예제에서는 스택의 위치를 TemplateURL로 지정하고 해당 스택에 있는 파라미터를 불러온다.

CAPABILITY_AUTO_EXPAND는 중첩스택을 사용하는 스택을 생성할 때 반드시 필요하니 유의해야한다.

**정리**

- Nested Stack은 다른 스택 안에 있는 스택이다.
- 반복되는 패턴과 공통 구성 요소를 별도의 스택에서 분리한 다음 다른 스택에서 호출하기 위해 중첩된 스택을 사용한다.
- 중첩된 스택을 업데이트하려면 항상 상위 스택을 업데이트 해야한다.
- 중첩된 스택안에 다시 중첩된 스택을 넣을 수 있어 매우 깊게 들어갈 수 있다.
- 교차 스택이라는 개념도 있다. 교차 스택은 스택의 수명 주기가 다를 때 매우 유용하다.
- 예를 들어 VPC 스택의 일부 변수를 출력으로 내보내 Applicaion 스택으로 내보내는 것과 같이 한 스택의 출력을 다른 스택에서 사용하는 경우 편리하다.
- CAPABILITY_AUTO_EXPAND는 중첩 스택을 사용하는 스택을 생성할 때 반드시 필요하니 반드시 유의해야한다.

## **CloudFormation - Depends On**

DependsOn은 리소스 생성을 위한 특정 순서를 지정할 수 있는 방법이다.

예를들어 EC2 인스턴스와 RDS 데이터베이스를 템플릿에 기재해놓고 DependsOn DBInstance를 추가한다면 DB 인스턴스가 먼저 성공적으로 생성되어야만 EC2 인스턴스가 생성된다.

사실 intrinsic function(내장 함수)를 사용하면 CloudFormation은 특정 리소스에 대해 의존적이게 만들 수 있다.

예를 들어 EC2 인스턴스를 생성할 때 특정 보안 그룹을 !Ref 내장 함수로서 불러오게끔 하면 특정 보안 그룹을 먼저 생성한 뒤 EC2 인스턴스를 생성하게 된다.

그러나 Ref 함수나 GetAtt 함수를 사용해 연결하지 않는 경우에는 DependsOn 속성을 사용해 연결할 수 있으며, 이는 모든 리소스에서 작동한다.

```yaml
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0a3c3a20c09d6f377
      InstanceType: t2.micro

  MyBucket:
    Type: AWS::S3::Bucket
    DependsOn: MyEC2Instance
```

위와 같은 예제 코드에서 Mybucket을 생성할 때 DependsOn 속성이 MyEC2Instance로 할당되어 있어 MyEC2Instance가 생성되지 않는 한 S3는 생성되지 않는다.

EC2 인스턴스가 생성 완료되자마자 MyBucket이 생성될 것이다.

그리고 DependsOn 속성은 삭제에서도 똑같이 작용된다.
생성된 역순으로 삭제가 된다.
S3 버킷이 삭제된 이후에 인스턴스가 삭제될 것이다.

**정리**

- DependsOn은 리소스 생성을 위한 특정 순서를 지정할 수 있다. 예를 들어 특정 리소스가 먼저 생성되어야만 다음 리소스를 생성할 수 있게 설정할 수 있다.
- 사실 Intrinsic Function을 사용하면 CloudFormation은 특정 리소스에 대해 의존적이게 만들 수 있다. 예를 들어 !Ref 나 !GetAtt 함수를 사용해 특정 리소스들을 연결한다면 의존적이다.
- DependsOn은 삭제에서도 똑같이 동작한다. 의존적인 리소스부터 의존을 받고있는 리소스로의 순서로 삭제된다.

## **CloudFormation - StackSets**

스택셋은 한 번의 작업으로 여러 계정과 Region에 걸쳐 스택을 배포할 수 있는 방법이다.

관리자 계정으로 스택 셋을 만들고 대상 계정은 스택 셋에서 인스턴스를 생성, 적용 및 삭제하는 데만 사용하도록 할 수 있다.

관리자 계정에서 스택 셋을 업로드하고 업데이트하면 모든 대상 계정이 모든 리전에서 이 업데이트를 받게 된다.

또한 대상 계정과 관리자 계정을 정의하기 위해 AWS Organization 내의 계정에 이를 적용할 수도 있다.

관리자 계정과 대상 계정의 개념이 있기 때문에 두 계정 모두 권한이 있어야한다.

그래서 관리자 계정과 대상 계정 모두 신뢰 관계(Trust Relationship)가 있는 IAM 역할을 만들어 놓고 해당 역할을 이용해 CloudFormation 템플릿을 대상 계정에 배포할 수 있다.

따라서 관리자 계정에는 모든 대상 계정의 모든 AWSCloudFormationStackSetExecutionRole과 신뢰 관계를 갖는 AWS AWSCloudFormationStackSetAdministrationRole 역할이 있다.
실행 역할 - 관리 역할 두 역할이 있다고 생각하면 된다.

AWS Organization을 사용하지 않는 경우 이러한 역할을 수동으로 생성해야 함.

수동으로 생성하는 경우 관리자 계정에서 역할을 생성할 때 AWSCloudFormationStackSetAdministrationRole라는 명확한 이름을 가진 역할을 생성해야하고 신뢰 관계도 설정해주어야한다.
또한 대상 계정에서 AWSCloudFormationStackSetExecutionRole라는 명확한 이름을 가진 역할을 생성하고 해당 역할에서 CloudFormation이 실행할 수 있는 모든 정책을 허용해줘야한다.

Organization을 사용하는 경우 자동으로 Organization이 사용자를 대신해 IAM 역할을 생성한다.

이러한 작업을 하려면 Organization 및 모든 기능 내에서 "trusted access"를 사용하도록 설정해야 하며, 향후 조직의 새 계정을 포함해 모든 새 계정에 자동으로 배포할 수 있다.

하나의 스택이 생성되는 즉시 모든 계정에 스택을 자동으로 배포하도록 설정할 수도 있다.

보안 및 거버넌스 목적으로 Organization의 특정 구성원 계정에 스택 셋 관리를 위임할수도 있다. 위임된 관리자가 Organization에서 관리하는 계정에 배포할 수 있도록 조직 내에서 trusted access를 활성화 해야한다.

**정리**

- 스택 셋은 한 번의 작업으로 여러 계정과 Region에 걸쳐 스택을 배포할 수 있는 방법이다.
- 관리자 계정에서 스택 셋을 만들고 대상 계정은 스택 셋에서 인스턴스와 같은 자원을 생성, 적용 및 삭제하는 데만 사용하도록 할 수 있다. 업데이트 또한 동일하게 관리자 계정에서만 해주면 모든 대상 계정이 업데이트를 받게 된다.
- 하나의 스택이 생성되는 즉시 모든 계정에 스택을 자동으로 배포하도록 설정할 수도 있다.
- AWS Organization을 사용하면 관리자 계정과 대상 계정에 대한 권한 관리를 쉽게 할 수 있다. 관리자 계정이 조직 내의 모든 기능을 수행하려면 "Trusted access"를 사용하도록 설정해야 한다.
- Organization을 사용해주지 않으면 수동으로 IAM 역할을 생성해야한다.
- 보안 및 거버넌스 목적으로 Organization의 특정 구성원 계정에 스택 셋 관리를 위임할 수도 있다. 이 또한 위임된 관리자가 대상 계정에 배포할 수 있도록 "Trusted access"를 사용하도록 해야한다.

## **CloudFormation - Troubleshooting**

DELETE_FAILED 상태에서 확인해야할 사항이 있다.

S3 버킷과 같이 삭제 전에 비워져야 하는 일부 리소스가 있는 경우가 있다. S3 버킷을 수동으로 비우거나 Lambda 함수와 함께 Custom Resources를 사용해 S3 버킷 비우기 작업을 자동화할 수 있다.

Stack 내부에 없는 인스턴스가 Stack 내부의 보안 그룹을 사용 중인 경우 보안 그룹을 삭제할 수 없다.

특정 리소스의 삭제에 문제가 있는 경우 DeletionPolicy=Retain을 사용해 해당 리소스의 삭제를 건너 뛸 수 있다.

UPDATE_ROLLBACK_FAILED가 발생하면 업데이트가 실패하고 롤백이 시도되었지만 롤백도 실패했음을 의미한다.

CloudFormation 외부에서 변경된 리소스, 충분하지 않은 IAM 권한, 충분한 signal을 받지 못하는 Auto Scaling Group이 이유가 될 수 있다.

이 경우 오류를 수동으로 수정하여 해결하고 이것이 작동하는지 확인해야한다. 보통 이벤트 로그가 힌트를 제공해줄 것이다.

오류가 수정되었다면 ContinueUpdateRollback이라는 API 호출을 해야한다. 롤백이 계속 진행되고, 오류가 완벽히 수정된 경우 최종적으로 롤백이 성공할 것이다.

이번엔 StackSets 문제 해결이다.

스택 작업이 실패하고 스택 인스턴스 상태가 OUTDATED로 나타날 수 있다.

이는 템플릿에서 지정된 리소스를 생성하는 데 필요한 대상 계정의 충분한 권한이 없는 문제일 수 있다.

또는 템플릿이 전역 리소스를 생성하려고 하지만 해당 리소스는 고유해야 하는 경우이다. 예를들어 S3 버킷의 이름은 고유해야 하며 템플릿에서 고정적으로 이름이 지정된 경우 한 스택에서는 작동하지만 다른 계정이나 Region에서는 이미 사용중인 이름으로 인식될 것이다.

또는 Trusted Relationship에 문제가 있을 수 있다.
예를 들어 관리자 계정이 대상 계정과 필요한 신뢰 관계가 없을 수 있다.

또는 StackSets는 동일한 스택을 여러 계정에 배포하기 때문에 권한, 할당량, 리소스 이름 등에 따라 일부 계정에서 작동하지 않을 수 있어 더 고려해봐야 한다.

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

람다는 무엇일까요?
먼저 EC2를 먼저 생각해보면 EC2는 클라우드의 가상 서버이고, 인스턴스를 프로비저닝 해야한다.

우리는 프로비저닝한 인스턴스 타입 별 메모리와 CPU 양에 제한을 받는다.

인스턴스는 계속해서 실행되고 중지하고 재시작하는 과정에서 최적화할 수 있지만 그렇지 않으면 인스턴스는 계속 실행된다.

확장이 필요하면 ASG를 이용할 수 있지만 자동으로 서버를 추가하고 제거하기 위해 추가적인 작업이 수행된다는 것을 의미한다.

Lambda는 서버리스 함수이며, 관리할 서버가 없다.

코드를 프로비저닝하고 함수를 실행할 뿐이다.

최대 15분까지의 짧은 실행 시간을 가지고 있으며 시간에 제한이 있다.
강사의 의견으로는 그리 짧지 않다고 한다.

요청이 발생할 때 실행되며, Lambda를 사용하지 않으면 함수가 실행되지 않고 함수가 실행될 때만 요금이 청구된다.

함수 인스턴스 및 동시성이 필요한 경우 자동으로 AWS가 더 많은 Lambda 함수를 프로비저닝한다.

Lambda는 여러가지 이점이 있다.

- 가격을 책정하는 게 매우 간단하다.
  - 호출 횟수(Lambda가 수신한 요청 수)와 실행 시간(Lambda가 실행되었던 컴퓨터 시간)에 대해 지불하게 된다.
- 많은 종류의 서비스와 통합되어 있다.
  - 여러 가지 프로그래밍 언어를 사용할 수 있어 자유롭다.
- CloudWatch와의 모니터링 통합이 매우 쉽다.
- 함수당 최대 10GB의 RAM을 프로비저닝할 수 있다.
- 함수의 RAM을 늘리면 CPU 및 네트워크의 품질과 성능도 같이 향상된다.

Lambda는 여러 언어를 지원한다.
node.js(JavaScript), Python, Java(Java 8 호환 또는 Java 11), .NET Core의 C#, Golang, Powershell을 위한 C#, Ruby 등의 다양한 언어를 지원하게 된다.

Lambda의 사용자 지정 런타임 API 덕분에 거의 모든 언어를 Lambda 용으로 작성할 수 있다. 예를 들어 Lambda에서 Rust 언어 Function을 실행하려면 오픈 소스 프로젝트로 사용 가능하다.

Lambda 컨테이너 이미지를 지원한다.
Lambda 컨테이너 이미지는 이미지 자체 Lambda 런타임 API를 구현해야 하므로 Lambda에서 자체적으로 실행할 수 있는 것은 아니다.

Lambda에서 컨테이너 이미지를 이용해 컨테이너를 실행하려는 경우 해당 컨테이너가 Lambda 런타임 API를 구현하지 않은 경우 해당 컨테이너를 ECS 또는 Fargate에서 실행해야 한다.

Lambda는 다양한 서비스와 통합되어 사용된다.

- API Gateway는 REST API를 생성하고 Lambda 함수를 호출하는 데 사용된다.
- Kinesis는 Lambda를 사용해 데이터를 실시간으로 변환한다.
- DynamoDB는 트리거를 생성하는 데 사용된다. DB에 무언가 발생할 때 Lambda 함수가 트리거된다.
- S3에 파일이 생성될 때마다 트리거된다.
- CloudFront는 Lambda@Edge를 사용한다.
- CloudWatch 이벤트 또는 EventBridge는 AWS 인프라에서 이벤트가 발생할 때 반응할 수 있도록 한다. 예를 들어 빌드 파이프라인 상태가 변경되면 그에 기반한 자동화를 수행하고 싶을 때 Lambda 함수를 사용할 수 있다.
- CloudWatch Logs는 로그를 어디서든 스트리밍할 수 있다.
- SNS 주제에서 알림에 반응하는 데 Lambda가 사용된다.
- SQS 대기열에서 메시지를 처리하는 데 사용된다.
- Cognito는 예를 들어 사용자가 데이터베이스에 로그인할 때 반응하는 데 사용된다.

예를 들어 Lambda를 이용해 서버리스 썸네일 생성을 할 수 있다.
S3에 새 이미지가 업로드 되면 S3 이벤트 알림을 통해 Lambda 함수가 트리거 되고 썸네일이 생성된다. 생성되는 동시에 이미지에 대한 일부 메타데이터를 DynamoDB에 삽입 할 수도 있다.

그리고 또 다른 예는 Cron 작업이 있다.
기존 EC2의 방법으로 Cron 작업을 하게 되면 EC2에 상태 변화가 있거나 Cron이 제대로 동작하지 않을 가능성이 있다.
그래서 CloudWatch 이벤트 규칙 또는 EventBridge 규칙을 생성하고 Lambda 함수와 통합해 같은 작업을 수행할 수 있다.

람다는 호출당 비용을 지불한다. 처음 100만 요청은 무료이고, 추가 100만 요청당 20센트를 지불하게 된다.

또한 시간 대비 비용을 지불한다.

1달을 기준으로 400,000GB/sec 가 무료이다.
함수가 1 기가바이트의 RAM을 갖는 경우 실행 시간이 400,000 초까지 제공된다.
128 MB의 RAM을 갖는 경우 실행 시간이 3,200,000 초까지 제공된다.

그 이후로는 600,000GB/sec 당 1$가 부과된다.

굉장히 싼 요금 부과 정책이다.

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

CloudWatch Events 또는 EventBridge를 Lambda와 통합하는 방법에 대해 이야기 해보자

첫 번째는 서버리스 Cron 또는 Rate 기반 EventBridge Rule을 사용하는 것이다.
예를 들어 EventBridge 규칙을 생성해 1시간마다 람다 함수가 작업을 수행하도록 트리거하는 것이다.

또는 코드 파이프라인 상태가 변경될 때마다 감지하고 상태 변경시 Lambda 함수를 호출하여 작업을 수행하도록 하는 CodePipeline EventBridge 규칙을 만들 수도 있다.

**정리**
- CloudWatch Events 또는 EventBridge와 Lambda를 통합할 수 있다.
- 서버리스 Cron 또는 Rate 기반 EventBridge Rule을 사용하는 방법
  - 예를 들어 EventBridge Rule을 생성해 1시간마다 람다 함수가 작업을 수행하도록 트리거하는 것
- CodePipeline EventBridge Rule을 이용해서 코드 파이프라인 상태를 감지하고 상태변경 시 Lambda 함수를 호출해 작업을 수핼할 수도 있다.

## **Lambda & S3 Event Notifications**

S3 Event Notification과 Lambda를 통합하는 방법을 알아보자

S3 Event Notification은 개체가 생성, 제거, 복원, 복제가 일어날 때마다 알림을 받을 수 있는 방법이다.
접두사 및 접미사 별로 필터링할 수 있다. 예: \*.jpg

가장 일반적인 사용 사례는 S3에 업로드된 모든 이미지의 썸네일 이미지를 생성하는 것이다.

S3에 이벤트가 발생하면 S3에서는 이를 세 곳으로 보낼 수 있는데

1.  SNS와 SNS 토픽에서 팬 아웃 패턴을 수행해 여러 SQS Queue로 보내거나,
2.  SQS Queue로 보내서 람다 함수가 해당 SQS Queue를 직접 읽도록 하거나,
3.  S3 Event Notification이 람다 함수를 직접 비동기 호출로 호출하는 방법이 있다. 그리고 이 람다 함수는 해당 데이터로 원하는 모든 작업을 수행할 수 있으며, 문제가 발생할 경우 Dead Letter Queue를 설정할 수도 있다.

S3 Event Notification은 일반적으로 몇 초 안에 이벤트를 전달하지만 때로는 1분 이상 걸릴 수 있으므로 이벤트 알림을 놓치지 않으려면 버킷에서 버전 관리를 활성화 해야한다.
그렇지 않으면 같은 개체에 대해 두 개의 쓰기가 동시에 발생하는 경우 알림을 두 개가 아닌 한개만 받을 수 있다.

메타데이터를 동기화하는 패턴이 있다.
S3 버킷에 새 파일 이벤트가 Lambda로 전송된다.
그리고 Lambda 함수는 해당 파일을 처리해 해당 데이터를 DynamoDB 테이블 또는 RDS 데이터베이스의 테이블에 삽입할 수도 있다.

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

람다 실행 역할과 권한에 대해 이야기 해보자

람다 함수에 IAM 역할을 연결해야하고, 이렇게 하면 람다 함수에 AWS 서비스 및 리소스에 액세스할 수 있는 권한이 부여된다.

그리고 관리형 정책을 사용할수도 있다.

예를들어

- AWSLambdaBasicExecutionRole 을 이용해서 CloudWatch에 Log를 업로드하거나,
- AWSLambdaKinesisExecutionRole 를 이용해서 Kinesis에서 읽어오거나
- AWSLambdaDynamoDBExecutionRole 를 이용해서 DynamoDB 스트림에서 읽어 오거나
- AWSLambdaSQSQueueExecutionRole 를 이용해서 SQS에서 읽어오거나
- AWSLambdaVPCAccessExecutionRole 를 이용해서 VPC 내부에 Lambda 함수를 배포할 수 있게 하거나
- AWSXRayDaemonWriteAccess 를 이용해서 trace data를 X-Ray에 업로드하는

여러가지의 관리형 정책이 있다. 람다에 대한 자체 정책을 만들 수도 있다.

이벤트 소스 매핑을 사용해 함수를 호출할 때 람다는 실행 역할(execution role)을 사용해서 이벤트 데이터를 읽어온다. 

반면에 Lambda 함수는 다른 서비스에서 호출되는 경우 특정 IAM 역할이 필요하지 않다.

그런데 함수당 하나의 람다 실행 역할을 만드는 것이 Best practice이다.
이벤트 소스 매핑을 위한 것이거나 람다 함수가 실제로 다른 서비스를 호출해야하는 경우에 해당한다.

하지만 다른 서비스에서 람다 함수를 호출하는 경우에 리소스 기반 정책을 사용하는데, 이것은 다른 계정이나 다른 AWS 서비스에 람다 리소스를 사용할 수 있는 권한을 부여해 함수에서 이를 호출하는 것이며, 이것은 Amazon S3 버킷의 S3 버킷 정책과 매우 유사하다.

따라서 다음 두 가지 중 하나에 해당하는 경우 IAM 원칙에 따라 Lambda 함수에 액세스할 수 있다.

첫째로는 principal에 연결된 IAM 정책이 승인한다.
예를 들어 IAM 사용자가 있고 전체 권한을 가지고 있어 관리자 액세스 정책 덕분에 람다 함수에 액세스할 수 있다.

두번째로는 리소스 기반 정책을 통해 람다 함수에 대한 액세스 권한을 부여하는 경우 서비스 대 서비스 액세스 권한이 있을 때 더 유용하다.

Amazon S3와 같은 다른 AWS 서비스에서 람다 함수를 호출하려는 경우 리소스 기반 정책을 통해 액세스 권한을 부여해야 한다.

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

Lambda가 로깅, 모니터링 및 Tracing을 수행하는 방법에 대해 이야기 해보자

모든 Lambda 실행 로그가 CloudWatch Logs에 자동으로 저장되기 때문에 Lambda는 cloudWatch Logs와 통합되어 있다는 것을 알 수 있다.

Lambda 함수에 올바른 IAM 정책이 있는 실행 역할이 있고, 이 역할은 Lambda 기본 실행 역할에 포함되어 있는 경우, Lambda 함수가 CloudWatch Logs에 쓸수 있는 권한을 부여한다.

CloudWatch 메트릭이 있다.

호출, 기간, 동시 실행, 오류 횟수, 성공률, 스로틀, 비동기 전송 실패에 대한 정보를 나타낸다.

그리고 Kinesis 또는 DynamoDB 스트림에서 읽는 경우 Iterator Age라는 항목이 있는데 스트림 읽기가 얼마나 지연되고 있는지를 의미하는 것도 나타낸다.

Lambda 함수에서 X-Ray 로 Tracing을 수행할 수 있다.
Lambda configuration에서 활성화하기만 하면 되는데, 이를 액티브 트레이싱이라고 한다. 활성화 하면 엑스레이 데몬이 자동으로 실행된다.

우리가 해야할 일은 코드에서 엑스레이 SDK를 사용하기만 하면 된다. Lambda 함수에 X-Ray에 쓸 수 있는 올바른 IAM 실행 역할이 있는지 확인해야 한다.
AWSXRayDaemonWriteAccess라는 관리형 정책을 사용할 수 있다.

X-Ray와 통신하기 위해 환경 변수를 설정해야 한다.
이 환경 변수는 미리 예약되어 있어 함수 구성에서 설정할 수 없다.

- X_AMZN_TRACE_ID: X-Ray 추적 헤더이다. 간접 호출할 때마다 환경변수가 변경된다.
- AWS_XRAY_CONTEXT_MISSING: 기본적으로 필요한 변수이다. LOG_ERROR로 설정하면 된다.
- AWS_XRAY_DAEMON_ADDRESS: 람다 함수와 관련해 엑스레이 데몬의 IP와 포트가 실행되는 위치를 알려주는 데몬 주소이다. IP_ADDRESS:PORT의 형태로 알려준다.

환경 변수는 앞서 다른 환경 변수와 동일한 방식으로 액세스할 수 있다.

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

람다 함수의 구성과 성능에 대해 이야기 해보자

가장 먼저 RAM이다.
1메가 바이트 단위로 최소 128MB에서 최대 10기가바이트까지 확장할 수 있다.

람다 함수에 더 많은 RAM 또는 메모리를 추가할수록 더 많은 vCPU 크레딧을 얻을 수 있다는 개념이다.
vCPU 수를 직접 설정할 수는 없다. 암시적으로 더 많은 vCPU를 얻으려면 RAM을 늘려야 한다.

따라서 1,792 MB에 RAM에 도달하면 함수는 하나의 전체 vCPU에 해당하는 값을 갖게 된다.

이 이후로는 두 개 이상의 vCPU를 사용하게 되므로 추가된 vCPU의 이점을 누리려면 멀티스레딩을 사용해야 한다.

애플리케이션이 CPU에 바인딩되어 있다는 것은 계산이 많다는 것을 의미하고, 애플리케이션의 성능을 개선하려면 (함수가 실행되는 시간을 줄이려면) 애플리케이션 즉 람다함수 RAM을 늘려야 한다.
일반적으로 시험에 이런 문제가 나온다.

Timeout이 있다.
람다 함수는 기본적으로 3초의 시간 제한이 있다. 람다 함수가 3초 이상 실행되면 타임아웃과 함께 오류가 발생하지만 타임아웃을 최대 900초(15분)까지 설정할 수 있다. 15분을 초과하는 것은 람다에 적합한 사용 사례가 아니며 Fargate, ECS 또는 EC2에 더 적합할 수 있다.

다음은 execution context(실행 컨텍스트)가 있다. 이는 람다 코드의 외부 종속성을 초기화하는 임시 런타임 환경이다. 이 컨텍스트를 사용해 데이터베이스 연결을 설정하고, HTTP 클라이언트 또는 SDK 클라이언트를 생성할 수 있다.

execution context는 다른 람다 함수 호출을 예상하여 일정 기간 동안 유지된다. 즉, 람다 함수를 연속으로 여러 번 호출하면 해당 호출 컨텍스트를 재사용해 기존의 데이터베이스 연결, DB Client 등을 모두 재사용할 수 있으며, 이는 람다 함수의 속도를 높이고 성능을 향상시켜 매우 유용하다.

execution context는 `/tmp` 디렉터리도 포함되며, 이 디렉터리는 파일을 작성할 수 있는 공간으로 실행 전반에서 사용할 수 있다.

이 실행 컨텍스트를 활용하는 코드는 아래와 같다.

```python
import os

def get_user_handler(event, context):

  DB_URL = os.getenv("DB_URL")
  db_client = db.connect(DB_URL)
  user = db_client.get(user_id = event["user_id"])

  return user
```

위 코드는 활용하기 좋지 않다. 람다가 호출할 get_user_handler라는 함수가 있기 때문이다. 이 코드를 읽어보면 os.getenv라는 DB_URL을 가져와서 환경 변수를 가져오는데, 이부분은 좋다.
다음 줄은 db_client = db.connect(DB_URL)인데. 사용자를 가져오려면 먼저 데이터베이스에 연결해야 하기 때문에 올바른 것처럼 보이지만, 람다 함수가 실행될 때마다 이 데이터베이스 연결이 실행되어야 한다.

따라서 누군가 람다 함수를 호출할 때마다 데이터베이스에 연결한 다음 사용자를 가져와야한다. 람다 함수가 여러 번 호출될 수 있기 때문에 이는 매우 비효율적이다.

```python
import os

DB_URL = os.getenv("DB_URL")
db_client = db.connect(DB_URL)

def get_user_handler(event, context):

  user = db_client.get(user_id = event["user_id"])

  return user
```

대신 AWS 권장하는 방법이자 모범 사례는 핸들러 외부에서 데이터 베이스 연결을 init하는 것인데, 한 번만 init 하면 여러 함수 호출에서 재사용할 수 있고 함수 성능을 크게 향상시킬 수 있기 때문이다.

임시 파일을 작성해서 재사용해야하는 경우에는 어떻게 해야 할까? /tmp 디렉터리를 사용하면된다.

예를 들어 작업을 위해 대용량 파일을 다운로드해야 하거나 작업을 수행하기 위해 디스크 공간이 필요한 경우, 모든 파일을 /tmp에 저장한다.

이것은 람다 함수에 사용할 수 있는 10GB(최대 크기)의 디스크 공간을 확보하고, 이 디렉터리는 람다 함수의 실행 시간 동안 유지된다는 것이다.

따라서 람다 함수가 중지되었다가 다시 호출되더라도 /tmp 공간에서 정확히 동일한 파일을 다시 찾아서 많은 시간을 절약할 수 있다.

이것은 실행 컨텍스트와 완전히 동일한 개념이다.

여기에서는 최대 0.5 기가바이트에 달하는 매우 무거운 파일을 /tmp 공간에 쓸 수 있다.

따라서 일시적이지 않고 영구적으로 객체를 유지해야하는 경우에는 여러 호출에서 지속될 수 있는 공간에 저장해야 하며, 그 공간은 예를 들어 Amazon S3가 될 것이다.

그리고 /tmp 공간의 콘텐츠를 암호화하려는 경우 람다에는 이를 위한 설정이 없다. KMS 기능을 사용해 데이터 키를 생성하고 이 데이터 키를 사용해 임시 공간의 데이터를 실제로 암호화해야 한다.

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

람다의 동시성과 스로틀링에 대해 이야기 해보자

람다 함수를 더 많이 호출할수록 더 많은 람다 함수를 동시에 실행할 수 있다.

즉, 낮은 스케일로 람다 함수를 호출하면 두 개의 람다 함수가 동시에 실행될 수 있다.
하지만 이벤트 발생 규모가 매우 큰 경우 최대 1000개의 람다 함수가 동시에 작동하여 들어오는 모든 이벤트를 처리할 수 있다.

따라서 람다 함수가 수행할 수 있는 동시 실행 횟수를 제한할 수 있으며, 이를 권장한다.

이를 위해 reserved concurrency(예약된 동시성)를 설정할 수 있으며 이는 함수 수준에서 설정된다.
즉, "이 람다 함수는 최대 50개까지만 동시 실행이 가능합니다." 라는 제한을 설정할 수 있다.

따라서 동시성 제한을 초과하여 호출할 때마다 Throttle이라는 것이 트리거된다. 그리고 스로틀이 동기식인 경우 다른 동작이 발생한다.
ThrottleError - 429 에러를 반환하게 된다.

비동기 호출인 경우 자동으로 재시도한 다음 DLQ(dead-letter queues)로 이동한다.

따라서 한 번에 1000개 이상의 동시 실행이 필요한 경우 Support 티켓을 열러서 더 높은 한도를 요청할 수 있다.

예를들어 동시성을 확보하지 않으면 아래와 같은 상황이 발생 가능하다.

ALB, API GW, SDK/CLI가 람다 함수에 연결되어 있고 많은 유저가 호출을 보내 최대 값인 1000의 동시성을 사용하고 있다고 가정했을 때 ALB에서 1000의 동시성을 모두 사용하고 있다면 API GW와 SDK/CLI를 사용하고자 하는 사용자들은 모두 스로틀링된다.

동시성 제한은 계정의 모든 기능에 적용되므로 한 기능이 제한을 초과하면 다른 기능도 스로틀될 수 있으므로 주의해야 한다는 것을 유의해야한다.

비동기 호출의 경우에 대해 이야기 해보자

S3 이벤트 알림의 경우 S3 버킷에 파일을 업로드하면 새 파일 이벤트가 생성되어 Lambda 함수를 호출하고 동시에 많은 파일을 업로드한다고 가정해보자. 수 많은 다양한 Lambda 동시 실행이 발생할 것이고, 함수에 사용 가능한 동시성이 충분하지 않은 경우 추가 요청이 스로틀링될 것이다.

위와 같은 경우 요청이 비동기이기 때문에 스로틀링 오류 및 시스템 오류(429 및 5XX)가 발생하면 Lambda는 이벤트를 이벤트 대기열로 반환한다. 따라서 비동기 모드는 내부 이벤트 대기열이 있으며 Lambda는 최대 6시간 동안 함수를 다시 실행하려고 시도한다.

스로틀링으로 인해 많은 재시도가 발생하고 재시도 간격은 기하급수적으로 증가한다.
1초에서 최대 5분마다 재시도할 수 있다.

이렇게 하면 람다 함수가 계속 재시도해 언젠가는 올바르게 실행할 수 있는 동시성 및 용량을 찾을 수 있다.

콜드 스타트와 프로비저닝 된 동시성을 알아보자

콜드 스타트는 새로운 람다 함수 인스턴스를 생성할 때 코드를 로드하고 핸들러 외부의 코드를 실행해야 한다는 뜻이다. 이는 모든 함수의 init에 해당한다.

코드가 많고 종속성이 많으며 많은 데이터베이스에 연결하고 많은 SDK를 생성하는 등 초기화 규모가 큰 경우 이 프로세스에 많은 시간이 소요될 수 있다.

따라서 새 인스턴스가 제공하는 첫 번째 요청은 나머지 요청보다 지연 시간이 길어 사용자에게 영향을 미칠 수 있다.
따라서 사용자가 요청 응답을 받기까지 3초를 기다린다면 매우 느리게 느껴질 수 있으며, 콜드 스타트를 경험하고 제품에 불만을 가질 수 있다.

그렇다면 프로비저닝 된 동시성이란 것을 사용할 수 있다.

함수가 호출되기도 전에 동시성을 미리 할당하는 것이다.

이렇게 하면 콜드 스타트가 발생하지 않고 모든 호출의 대기 시간이 짧아진다.

그리고 이 동시성을 관리하기 위해 Application auto scaling 서비스를 사용할 수 있다.

예를 들어 일정이나 target의 utilization등의 지표에 대해 예약된 람다 함수를 충분히 확보해 사용할 준비가 되었는지 확인하고 콜드 스타트 문제를 최소화할 수 있다.

이전에는 VPC에서 람다 함수를 실행할 때마다 시간이 오래 걸리곤 했는데, VPC의 콜드 스타트 시간을 획기적으로 줄이기 위해 별도의 방법이 있다. [링크](https://aws.amazon.com/ko/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/)

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

Lambda 모니터링에 대해 자세히 알아보자
Lambda와 관련된 많은 CloudWatch 메트릭이 있다.

- Invocations: 함수가 호출된 횟수를 제공한다. (성공/실패 모두 포함)
- Duration: 함수가 이벤트를 처리하는 데 소요되는 시간
- Errors: 에러가 발생한 호출의 횟수이다.
- Throttles: 스로틀 된 요청의 수를 나타낸다. 이는 동시성을 위한 용량이 부족했음을 의미한다.
- DeadLetterErrors: Lambda가 dead letter queues에 이벤트를 보내지 못한 횟수이다.
- IteratorAge: 스트림의 이벤트 소스 매핑에서 읽을 때마다 얼마나 멀리 떨어져 있는지 알 수 있다.
- ConcurrentExecutions: 동시에 이벤트를 처리하고 있는 함수 인스턴스의 수

위의 메트릭을 기반으로 알람을 만들 수 있다.

1.  Invocations 메트릭을 기반으로 Lambda의 Invocations 수를 가져올 수 있다.

- 이 수치가 0과 같다면 람다 함수가 지속적으로 호출될 것으로 예상하기 때문에 문제일 수 있다.

2.  또한 Errors 메트릭을 기반으로 오류가 0보다 큰지 살펴보고 람다 함수가 무언가를 처리하지 못했을 때 경고를 받을 수도 있다
3.  Throttles 메트릭을 기반으로 0보다 큰지 살펴보고 용량이 부족한 지도 확인할 수 있다.

람다의 로깅을 CloudWatch에서 확인할 수 있다.

각 함수 인스턴스마다 특정 로그 스트림을 갖도록 자체 로그 그룹이 있는 CloudWatch Logs로 항목을 보낸다.
로그를 보내기 위해서 Lambda 함수에 로그 그룹을 생성하고 로그 스트림을 생성하고 로그 이벤트를 넣을 수 있는 실행 역할이 있는지 확인해야한다.

또한 CloudWatch Logs Insights를 사용해 실제로 Lambda 함수의 모든 로그를 검색할 수 있다.

Insights를 이용해서 다양한 쿼리를 사용해 지난 100개의 오류가 무엇인지, 전체 호출 중 cold start의 비율은 얼마인지, 실제로 할당된 메모리의 100%를 사용하는 호출은 몇 개나 되는지 등을 살펴볼 수 있다.

Lambda의 모니터링을 위한 Lambda Insights도 있다.

Lambda Insights는 아래와 같은 메트릭을 수집, 집계, 요약한다.

- 시스템 수준 메트릭
  - CPU time, 메모리, 디스크, 네트워크
- 진단 정보
  - cold start, Lambda worker shutdowns

위와 같은 메트릭들을 일종의 JSON 파일과 같은 문서로 남기고 CloudWatch Logs에서 Lambda Insights 로그 그룹(/aws/lambda-insights)으로 전송된다.

위와 같은 System Level의 정보에 액세스할 수 있으므로 람다 함수와 관련된 문제를 매우 빠르게 격리할 수 있다.

Lambda Insights는 기존 Lambda 함수에서 Lambda Layer로 사용해야하고, Lambda Extension이다.

따라서 함수를 실행하기만 해도 추가 확장 기능 덕분에 CloudWatch Logs 내에서 바로 Lambda Insights에 액세스할 수 있다.

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

EBS 볼륨이 무엇인지 정의해보자

EBS 볼륨은 Elastic Block Store의 약자이다.

인스턴스가 실행되는 동안 인스턴스에 연결할 수 있는 네트워크 드라이브이며, 우리는 알게 모르게 사용하고 있다.

EBS 볼륨을 사용하면 인스턴스가 종료된 후에도 데이터를 지속할 수 있다.

인스턴스를 다시 생성하고 이전과 동일한 EBS 볼륨에 마운트하면 데이터를 다시 가져올 수 있다.

따라서 이러한 EBS 볼륨은 한 번에 하나의 인스턴스에만 마운트할 수 있다.
**_이는 사실 Certified Cloud Practitioner 레벨에서의 설명이고 Multi Attach 를 이용하면 여러개의 인스턴스에 마운트 가능하다._**

그리고 EBS 볼륨을 생성하면 특정 가용 영역에 바인딩된다.

EBS 볼륨은 네트워크 USB Stick 이라고 생각하면 편하다. 컴퓨터에서 꺼내서 다른 컴퓨터에 넣을 수 있지만 실제로 물리적으로 다른 컴퓨터에 넣지 않고 네트워크를 통해 연결되는 USB 스틱이다.

네트워크 드라이브이기 때문에 인스턴스와 EBS 볼륨 간의 통신을 위해 네트워크를 사용하게 된다.
네트워크를 사용하기 때문에 다른 서버에 도달하는 데 약간의 지연 시간이 있을 수 있다.
EC2 인스턴스에서 분리하여 다른 인스턴스에 매우 빠르게 연결할 수 있다. 따라서 장애 조치를 수행할 때 매우 편리하다.

EBS 볼륨은 특정 가용영역에 고정되어 있으므로 a zone 에서 생성된 경우 b zone에 연결할 수 없지만 스냅샷을 수행하면 다른 가용 영역에서 볼륨을 이동할 수 있다.

볼륨이므로 용량을 미리 프로비저닝 해야한다. 미리 몇 GB를 원하는 지 초당 입출력 작업 수인 IOPS를 말해야 하며, 기본적으로 EBS 볼륨의 성능을 어떻게 정의할 지 정해야 한다.
프로비저닝 용량에 대한 요금이 청구되며, 더 나은 성능이나 더 큰 용량을 원할 경우 시간이 지남에 따라 용량을 늘릴 수 있다.

종료시 삭제라는 속성이 있는데, 콘솔에서 EBS 볼륨을 생성할 때 Delete on Termination이라는 옵션이 있다. 기본적으로 루트 EBS 볼륨은 종료되는 인스턴스와 함께 삭제된다.
그리고 종료 시 삭제 기능을 활성화할 지 비활성화할 지 제어할 수 있다.

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

인스턴스 스토어의 경우 EBS와 다르게 네트워크 드라이브를 EC2 인스턴스에 연결하는 방법이 아니라 물리적 서버에 연결된 하드 드라이브이다.

EC2 Instance Store는 더 나은 I/O 성능을 위해 사용된다.
_확실한지는 모르겠다._

EC2 Instance Store는 Throughput이 우수하므로 매우 높은 디스크 성능을 원할 때 훌룡한 선택이 될 수 있다.

주의해야할 점은 인스턴스 스토어가 있는 EC2 인스턴스를 중지하거나 종료하면 스토리지가 손실된다는 것이다.

좋은 사용 사례는 버퍼, 캐시가 있거나 scratch data, 임시 콘텐츠가 필요한 경우 장기적인 스토리지가 아닌 이러한 작업을 수행하기에 좋은 장소가 될 수 있다.

장기 저장의 경우 EBS가 좋은 사용 사례이다.

EC2 인스턴스의 회선 서버에 장애가 발생하는 경우 EC2 인스턴스에 연결된 하드웨어도 함께 장애가 발생하므로 큰 손실을 입을 수 있다.
EC2 인스턴스 스토어를 사용하기 위해서는 이를 백업하고 필요에 따라 올바르게 복제하는 것은 전적으로 사용자 책임이다.

인스턴스 스토어에서 I3. 으로 표시된 인스턴스 크기를 보면 초당 몇개의 I/O 작업을 수행할 수 있는지에 해당하는 읽기 IOPS와 쓰기 IOPS를 보면 알 수 있다.

예로들어 비교하면 가장 성능이 좋은 인스턴스 스토어의 경우 읽기 IOPS와 쓰기 IOPS 모두 330만 또는 140만에 해당하는데 gp2의 경우 32,000 IOPS에 해당한다. 그래서 인스턴스 스토어가 IOPS 성능이 훨씬 뛰어나다.

**정리**
- 인스턴스 스토어의 경우 EBS와 다르게 네트워크 드라이브 형식이 아니라 물리적 서버에 연결된 하드 드라이브이다. 네트워크 대기 시간이 없어 빠른 I/O 성능을 제공한다.
- 또한 Throughput이 우수해 높은 디스크 성능을 원할 때 훌룡한 선택이 된다.
- 인스턴스 스토어가 있는 EC2 인스턴스를 중지하거나 종료하면 스토리지가 손상되며, 좋은 사용 사례는 버퍼 또는 캐시가 있거나 Scratch data 및 임시 콘텐츠가 필요한 경우 사용하기 좋다.
- 장기 저장의 경우 Instance Store 대신 EBS를 사용해야 한다.
- EC2 인스턴스의 회선 서버에 장애가 발생하는 경우 EC2 인스턴스에 연결된 하드웨어도 장애가 발생하기 때문에 큰 손실이 일어날 수 있으며, 이를 방지하기 위해 백업하고 복제하는 것은 전적으로 사용자 책임이다.
- 인스턴스 스토어에서 i3.16xlarge와 같은 타입을 확인하면 초당 330만의 IOPS를 확인 가능한데, gp2의 경우 32,000 IOPS에 해당하므로 인스턴스 스토어가 IOPS 성능이 훨씬 뛰어난 것을 알 수 있다.

## **[SAA/DVA] EBS Volume Types Deep Dive**

EBS의 유형에 대해 알아보자. 여섯 가지 유형이 있으며 몇 가지 범주로 그룹화할 수 있다.

첫 번째는 다양한 워크로드에서 가격과 성능의 균형을 맞출 수 있는 범용 SSD 볼륨인 gp2, gp3이다.

그리고 io1과 io2 블록 익스프레스가 있다.
이는 미션 크리티컬한 저지연 및 고처리량 워크로드에 사용되는 최고 성능의 SSD 볼륨이다.

st1 볼륨은 자주 액세스하는 처리량 집약적인 워크로드를 위해 설계된 저비용 HDD 볼륨이다.

sc1 볼륨은 가장 저렴한 HDD 볼륨으로 액세스 빈도가 낮은 워크로드를 위해 설계 되었다.

EBS 볼륨은 크기 / 처리량 / 초당 I/O 작업(IOPS) 등 여러가지로 정의된다.

EC2 인스턴스의 경우 gp2와 gp3 그리고 io1과 io2 만 boot volume으로 사용할 수 있다. 이는 루트 OS가 실행되는 위치를 말한다. 결론적으로 루트 볼륨은 gp2/gp3/io1/io2만 가능하다는 이야기이다.

시험에서 가장 중요한 것은 범용인 gp2와 Provisioned IOPS이다.

gp2의 경우 지연 시간이 짧고 비용 효율적인 스토리지로 시스템 부팅 볼륨, 가상 데스크톱, 개발 및 테스트 환경에 사용할 수 있다. 크기는 1GB에서 16TB 까지 다양하다.

gp3는 새로운 세대의 볼륨이다.
gp3는 3000 IOPS와 초당 125MB의 처리량을 기본으로 제공하고, IOPS를 최대 16,000까지 그리고 처리량을 최대 초당 1,000MB까지 늘릴수 있다. IOPS와 처리량은 독립적으로 늘릴 수 있다.

gp2의 경우, 최대 3,000 IOPS까지 버스트할 수 있으며 볼륨의 크기가 IOPS와 연결되어 있다. 즉 볼륨의 크기인 기가 바이트 수를 늘리면 IOPS가 최대 16,000 IOPS까지 증가한다. 3 IOPS 당 GB이므로 5,334 GB의 용량을 갖게 된다면 최대의 IOPS인 16,000 IOPS에 도달하는 것을 의미한다.

중요하게 생각해야할 점은 gp2와 gp3가 비용 효율적이며, 낮은 레이턴시의 스토리지이고, gp3에서는 IOPS와 처리량을 독립적으로 설정할 수 있지만 gp2는 연결되어 있다는 점이다.

Provisioned IOPS 볼륨이 있다.
provisioned IOPS 볼륨은 IOPS 성능을 유지해야 하는 중요한 비즈니스 애플리케이션이나 16,000개 이상의 많은 IOPS가 필요한 애플리케이션에 사용된다.

따라서 스토리지 성능과 일관성에 매우 민감한 데이터베이스 워크로드가 있는 경우 프로비저닝 된 볼륨이 유용할 수 있다.

4~16 TB의 범위를 지원하는 io1 유형의 볼륨이 있고, 프로비저닝 할수 있는 최대 IOPS는 Nitro 계열 인스턴스의 경우 64,000를 다른 종류의 인스턴스의 경우 32,000이 될 것이고, 스토리지 크기와 무관하게 PIOPS(프로비저닝할 수 있는 IOPS)를 늘릴 수 있다.

io2 Block Express의 경우 4 GiB ~ 64 TiB의 범위를 지원한다.
밀리초 미만의 지연 시간과 기가바이트당 1,000 IOPS의 비율로 256,000과 같은 많은 최대 IOPS를 얻을 수 있다. 매우 높은 성능의 I/O 유형의 볼륨이며, 프로비저닝된 IOPS 볼륨의 경우 EBS Multi Attachment 기능을 지원한다.

st1과 sc1에 대해 살펴보자

부팅 볼륨 즉, 루트 볼륨이 될 수 없다. 125 GiB에서 16 TiB까지 가능하다

Throughput 최적화된 HDD (st1) 의 경우 빅데이터, 데이터 웨어하우징, 로그 처리에 적합하며 최대 처리량은 초당 500 MiB, 최대 IOPS는 500이다.

Cold HDD (sc1)의 경우 액세스 빈도가 낮은 데이터, 가장 낮은 비용이 필요할 때 사용하는 경우이다.
최대 처리량은 초당 250 MiB이고, 최대 IOPS도 250이다.

시험에서는 아래와 같이 볼륨의 높은 수준에서 차이점만 이해하면된다.

즉, 데이터베이스가 필요한 경우 범용 SSD와 Provisioned IOPS SSD, 높은 처리량과 최저 비용이 필요한 경우 st1 및 sc1 등
또한 32,000 IOPS 이상을 얻으려면 io1 또는 io2와 함께 EC2 Nitro 계열이 필요하다.

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

EBS 볼륨의 Multi Attachment 기능에 대해 알아보자

이름에서 알 수 있듯이 멀티 어태치를 사용하면 동일한 EBS 볼륨을 동일한 가용 영역에 있는 여러 EC2 인스턴스에 연결할 수 있다.

이 기능은 io1 및 io2 EBS 볼륨 제품군에서만 사용할 수 있는 기능이다.

활성화하고 연결된 각 인스턴스에 고성능 볼륨에 대한 전체 읽기 및 쓰기 권한이 부여되며, 모든 인스턴스가 동시에 쓰기와 읽기를 할 수 있다.

사용 사례는 Teradata를 사용하는 클러스터된 Linux 애플리케이션의 경우 또는 애플리케이션에서 동시 권한 작업을 관리해야 하는 경우 애플리케이션 가용성을 높일 수 있다.

Multi Attach 기능은 지정된 가용 영역 내에서만 사용할 수 있으며, 한 AZ에서 다른 AZ로 EBS 볼륨을 연결할 수 없다. (A Zone으로 볼륨 생성 후 C Zone의 EC2와 연결 불가능)

Multi Attach는 동일한 볼륨을 연결할 수 있는 EC2 인스턴스가 한 번에 최대 16개까지라는 점이다. 시험을 위해 반드시 알아야한다.

이 기능이 작동하려면 클러스터를 인식할 수 있는 파일 시스템을 사용해야한다. xfs나 ex4와는 다른 파일 시스템이다.

**정리**
- EBS 볼륨에는 동일한 가용 영역에 있는 여러 EC2 인스턴스에 동일한 EBS 볼륨을 연결할 수 있는 Multi Attachment 기능이 있다.
- 이 기능은 io1, io2 EBS 볼륨 제품군에서만 사용할 수 있다.
- 활성화되고 연결된 각 인스턴스에 고성능 볼륨에 대한 전체 읽기 및 쓰기 권한이 부여되며, 모든 인스턴스가 동시게 읽기/쓰기를 할 수 있다.
- 사용 사례는 Teradata를 사용하는 클러스터링된 Linux 애플리케이션의 경우나, 애플리케이션에서 동시 권한 작업을 관리해야하는 경우 애플리케이션 가용성을 높일 수 있다.
- Multi Attach 기능은 특정 가용 영역에서만 사용 가능하다. 즉, A zone에서 볼륨 생성 후 C zone의 EC2와 연결 불가능하다.
- Multi Attach는 동일 볼륨에 한해서 최대 16개의 EC2 인스턴스까지 연결 가능하다. (시험에서 나오는 내용)
- 이 기능을 사용하기 위해서는 xfs나 ext4와 같은 파일 시스템과는 달리 클러스터 인식 가능한 파일 시스템을 사용해야한다.

## **EBS Operation: Volume Resizing**

EBS는 볼륨의 사이즈 또는 IOPS를 늘릴 수 있다.

EBS 볼륨 크기를 조정한 후 해야 할 일은 드라이브를 다시 파티션하는 것이다.

볼륨 크기를 늘리면 사용 가능한 크기가 더 많아지지만, 드라이브를 다시 파티션하여 인스턴스에 새 공간을 사용하도록 지시하기 전까지는 EC2 인스턴스가 이를 알 수 없다.

따라서 크기를 늘리면 볼륨이 긴 최적화 단계에 들어갈 수 있다. 블록을 재정렬하기 위한 것이고, 그 동안에도 볼륨은 계속 사용할 수 있다.

EBS 볼륨의 크기를 줄일 수는 없다.
만약 볼륨의 크기를 줄이고 싶다면 더 작은 볼륨을 만들어 작은 볼륨에 데이터를 복사한 다음 올바르게 첨부해야 한다.

그래서 250 GB 볼륨이 있다고 가정하고 1 TB로 볼륨을 확장한다고 가정하면 사용 중인 250 GB의 파티션을 확인하고 부족한 750 GB를 추가하기 위해 EBS 볼륨을 다시 파티션해야 EC2 인스턴스가 해당 용량을 사용할 수 있다.

Linux OS의 경우 아래와 같은 과정을 거친다.

```bash
# lsblk로 크기를 조정할 파티션 확인
$ lsblk

# growpart로 파티션 크기 조정
# growpart <device> <partition number>
$ sudo growpart /dev/nvme0n1 1

# 파티션에 늘어난 볼륨 크기가 반영되었는지 확인
$ lsblk

# 파일 시스템 확장
$ sudo resize2fs /dev/nvme0n1

# 변경된 디스크 용량 확인
$ df -h
```

windows OS의 경우 아래와 같은 과정을 거친다.

```markdown
1.  diskmgmt.msc 를 cmd에 입력 후 파티션 확인

- 추가된 볼륨 용량이 Unallocated 되어 있다.

2.  파티션 조절하고자 하는 볼륨에 우클릭 후 Extend Volume
3.  추가하고자 하는 볼륨 용량을 Add 후 용량을 늘려준다.
```

**정리**
- EBS는 볼륨 사이즈 또는 IOPS를 늘릴 수 있다.
- EBS는 볼륨 크기를 조정한 후 드라이브를 다시 파티셔닝해야 한다.인스턴스에 새 공간을 사용하도록 지시하기 전까지는 모르기 때문이다.
- 볼륨 크기를 늘리게되면 블록을 재정렬하기 위해 긴 최적화 단계에 들어갈 수 있고, 볼륨은 계속 사용 가능하다.
- 볼륨 사이즈를 줄일수는 없다. 줄이기 위해서는 더 작은 볼륨을 만들어 작은 볼륨에 데이터를 복사해야 한다.

## **EBS Operation: Snapshots**

EBS 스냅샷에 대해 알아보자

EBS 볼륨은 어느 시점에나 스냅샷을 만들 수 있다.
스냅샷을 하기 위해 볼륨을 분리할 필요는 없지만, 볼륨이 인스턴스에 연결되어 있으면 일관성 문제가 발생할 수 있으므로 볼륨을 분리하는 것이 좋다.

AZ 또는 리전 간 스냅샷을 복사할 수 있다.
us-east-1a에서 us-east-1b로 스냅샷을 복사해 다른 AZ에서 스냅샷을 마이그레이션할 수 있다.

EBS 스냅샷의 생성, 유지 및 삭제를 자동화하는 데 사용되는 Amazon Data Lifecycle Manager라는 서비스도 있다.

리스스 태그를 사용해 백업하려는 리소스를 식별할 수 있다.

예를들어 Amazon Data Lifecycle Manager는 ec2 인스턴스에 "env":"prod" 태그를 식별해 해당 태그가 지정된 인스턴스 자체와 해당 EBS 볼륨이 백업된다. 그리고 Amazon Data Lifecycle Manager로 이동해 해당 스냅샷과 AMI를 기반으로 생성할수도 있다.

Amazon Data Lifecycle Manager 외부에서 생성된 스냅샷이나 AMI는 관리할 수 없다.

유용하지만 비용이 많이드는 빠른 스냅샷 복원(fast snapshot restore, FSR) 기능도 있다.

이 기능은 내부적으로 EBS 스냅샷을 Amazon S3에 저장한다는 개념이다. 눈에 보이지는 않지만 AWS 내부에 저장되는 방식이다.

스냅샷을 EBS 볼륨으로 복원하고 특정 데이터 블록에 액세스할 때마다 I/O 대기 시간이 발생하는 데 블록을 S3에 가져오기 때문이다. 

인스턴스 내에서 dd 또는 fio 명령어를 이용해 전체 볼륨을 읽어 모든 블록을 초기화하는 방법을 이전에 사용해 I/O 지연을 줄였었는데, FSR을 사용하면 스냅샷에서 전체 볼륨 초기화를 수행할 수 있어서 볼륨이 완전히 초기화되면 I/O 지연 없이 EBS 볼륨으로 복원할 수 있다. 일반 EBS 스냅샷 백업 후 복원 시 몇 개의 블록만 초기화되고 블록을 읽을 때마다 S3에서 가져오게 된다.

즉, 스냅샷에서 FSR을 활성화하고 초기화가 완료되면, 전체 EBS 볼륨이 최고 성능으로 바로 사용 가능한 상태가 된다.

FSR은 활성화하면 분 단위로 요금이 청구되어 매우 비싸다.

실제 사용 사례는 스냅샷을 생성하고 FSR을 활성화 해 AWS가 스냅샷을 초기화하도록 한 다음 EBS 볼륨으로 복원하고 FSR을 비활성화 하는 것이다.

Data Lifecycle Manager을 사용해서 스냅샷에서 직접 FSR을 활성화할 수 있다.

EBS 스냅샷 아카이브라는 기능이 있다.
이를 통해 스냅샷을 아카이브 티어라는 다른 스토리지 티어로 옮길 수 있다.

이 Tier 는 75% 더 저렴하다.

스냅샷을 Archive Tier로 설정하면 수동이든 자동이든 스냅샷을 이동할 수 있으며, 아카이브에 있는 경우 아카이브에서 복원하는 데 24시간에서 72시간이 걸린다. 급하게 복원할 필요가 없는 스냅샷을 위한 것이고, 비용을 절약하고 싶을 때 사용한다.

EBS 스냅샷의 휴지통 기능도 있다.

기본적으로 스냅샷을 삭제하면 해당 스냅샷은 사라진다. 하지만 휴지통을 설정하면 휴지통에 삭제된 모든 스냅샷이 보관된다.

하루에서 1년까지 기간을 지정하면 지정한 기간동안 스냅샷을 복구할 수 있도록 설정해 실수로 삭제되는 것을 방지할 수 있다.

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

EBS 볼륨은 특정 AZ에서만 작동하도록 잠겨있다.
따라서 다른 AZ나 다른 지역으로 마이그레이션하려면 볼륨을 스냅샷 해야한다.

그 다음 선택적으로 다른 Region 또는 다른 AZ에 스냅샷으로 볼륨을 생성하면 된다.

**정리**
- EBS 볼륨은 특정 AZ에서만 작동하도록 잠겨있다.
- 다른 AZ나 다른 지역으로 마이그레이션 하려면 볼륨에 대한 스냅샷을 생성하고 선택적으로 다른 Region 또는 다른 AZ에 생성한 스냅샷으로 볼륨을 생성하면 된다.

## **[SAA] EBS Operation: Volume Encryption**

EBS 볼륨을 암호화하는 방법에 대해 이야기 해보자

EBS 볼륨을 생성하고 암호화하면 볼륨 내부에 저장된 데이터가 암호화되고, 인스턴스와 볼륨 간에 이동 중인 모든 데이터가 암호화되고, 모든 스냅샷이 암호화되고, 스냅샷에서 생성된 모든 볼륨이 암호화된다.

암호화는 지연 시간에 미치는 영향이 매우 적고, 거의 없으며, KMS의 키를 활용하므로 AES-256을 사용해야 한다.

암호화되지 않은 EBS 볼륨을 암호화 하는 방법
볼륨의 EBS 스냅샷을 생성한 후 복사 기능을 사용하여 EBS 스냅샷을 암호화한다. 그런 다음 암호화된 스냅샷에서 새 EBS 볼륨을 생성하면 생성된 볼륨도 암호화되며 이 암호화된 볼륨을 원본 인스턴스에 연결할 수 있다.

암호화 과정에서 KMS 키를 선택할 수 있다.

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

EFS는 네트워크 파일 시스템인 관리형 NFS 이다.

그리고 네트워크 파일 시스템이기 때문에 많은 EC2 인스턴스에 마운트할 수 있으며 이러한 EC2 인스턴스는 서로 다른 가용 영역에 있을 수도 있다.

EFS는 가용성이 높고 확장성이 뛰어나며 비용이 많이 든다.

gp2 EBS 볼륨 비용의 약 3배에 달하며 사용량에 따라 비용을 지불하여 미리 용량을 프로비저닝할 필요가 없다.

EFS의 사용 사례는 콘텐츠 관리, 웹 서비스, 데이터 공유, 워드프레스이다.
내부적으로는 NFS 프로토콜을 사용한다.

EFS에 대한 액세스를 제어하려면 보안 그룹을 설정해야한다.

EFS는 Windows가 아닌 Linux 기반 AMI와만 호환된다는 점에 유의해야한다.

KMS를 사용해 EFS 드라이브에서 데이터를 암호화 할 수 있고, Linux의 표준 파일 시스템인 POSIX를 사용하며 표준 파일 API를 지원한다.

EFS는 미리 용량을 Provisioning 할 필요 없이 자동으로 확장되며 EFS에서 사용하는 각 기가바이트의 데이터에 대해 사용량에 따라 비용을 지불한다.

EFS는 수천 개의 동시 NFS 클라이언트와 10 GB 이상의 처리량을 제공하며, PB 규모의 네트워크 파일 시스템으로 자동 확장할 수 있다.

EFS 네트워크 파일 시스템 생성 시 성능 모드(Performance mode)를 설정할 수 있으며 몇 가지 옵션이 있다.

- 범용 모드 (General Purpose mode)
  - 웹 서버, CMS 등과 같이 지연 시간에 민감한 사용 사례에 사용된다.
- 최대 I/O 모드 (Max I/O mode)
  - 지연 시간이 길지만 처리량이 높고 병렬성이 높은 네트워크 파일 시스템
  - 빅 데이터 애플리케이션이나 미디어 처리가 필요한 경우 유용

또한 처리량 모드(Throughput mode)에도 여러 옵션이 있다.

- Elastic throughput (Recommend)
  - 워크로드에 따라 처리량을 자동으로 확장 및 축소할 수 있다. 워크로드가 예측할 수 없을 때 매우 유용하다.
  - 예를 들어, 워크로드에 따라 읽기는 초당 최대 3GiB, 쓰기는 초당 1GiB를 얻을 수 있다.
- Bursting throughput
  - 1 TiB 기준 초당 15 MiB에 버스트를 더해 초당 최대 100 MiB를 처리할 수 있다.
- Provisioned throughput
  - 스토리지 크기에 관계없이 처리량을 설정하려는 경우
  - 프로비저닝된 처리량을 사용하면 1 TiB 기준 초당 1GiB를 사용할 수 있다. 스토리지와 처리량의 상관관계가 없어진다.

스토리지 클래스도 있다.

- 표준 계층
  - 자주 액세스하는 파일을 위한 것.
  - 수명 주기 정책을 사용해 며칠 후 파일을 다른 계층으로 옮길 수도 있다.
- EFS-IA 계층
  - EFS-IA는 드물게 액세스하는 파일을 위한 것
  - 파일을 검색할 경우 검색하는 데 드는 비용을 지불하는 계층
  - 파일을 EFS-IA에 저장하게 되면 더 낮은 비용이 지불된다.

가용 영역이 다운되더라도 EFS 파일 시스템에는 영향을 미치지 않으므로 프로덕션 사용 사례에 적합한 Multi-AZ로 EFS를 설정할 수 있다.

그러나 개발용으로 단일 영역 EFS 파일 시스템을 사용하려는 경우 EFS One Zone-IA를 사용해 90%의 비용을 절감할 수 있다.
백업은 기본적으로 활성화되어 있으며 EFS-IA 티어와도 호환된다.

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

EBS 볼륨은 io1 및 io2 유형 볼륨의 Multi Attach 기능을 사용하는 경우를 제외하고는 한 번에 하나의 인스턴스에 연결되지만, 이는 매우 특별한 사용 사례에 해당한다.

EBS 볼륨은 한 AZ에 종속된다.

gp2 유형의 볼륨의 경우 디스크 크기가 증가하면 I/O가 증가하며, gp3 및 io1 유형의 볼륨의 경우 디스크 크기와 독립적으로 I/O를 늘릴 수 있다.

AZ 간에 EBS 볼륨을 마이그레이션 하려면 스냅샷을 생성해야 하므로 EBS 스냅샷으로 이동한 다음 스냅샷을 다른 AZ로 복원할 수 있다. (한 AZ에서 다른 AZ로 이동하는 방법)

EBS 볼륨 백업은 I/O를 사용하므로 애플리케이션이 많은 트래픽을 처리하는 동안에는 성능에 영향을 줄 수 있으므로 실행하지 않아야 한다.

EC2 인스턴스의 경우 인스턴스가 Terminate 되면 기본적으로 인스턴스의 EBS 볼륨이 삭제 되지만 이 동작을 비활성화 할 수 있다.

인스턴스 스토어의 경우 물리적으로 EC2 인스턴스에 연결되어 있다. 따라서 EC2 인스턴스가 손실되면 스토리지도 손실된다.

EFS의 경우이다.

네트워크 파일 시스템으로 가용 영역에 걸쳐 수백 개의 인스턴스에 연결하는 것이 목표이다.

따라서 하나의 EFS 파일 시스템으로 서로 다른 AZ에 서로 다른 마운트 대상을 지정한 다음 여러 인스턴스가 하나의 파일 시스템을 함께 공유할 수 있다.

예를 들어 WordPress가 있고 POSIX 시스템을 사용하기 때문에 Linux 인스턴스에만 해당되는 경우에 매우 유용하다.

EFS는 EBS보다 가격대가 높지만 EFS-IA 기능을 활용하면 비용을 절감할 수 있다.

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

NFS 환경에 대한 애플리케이션 액세스를 쉽게 관리할 수 있는 기능인 EFS Access Points 라는 기능이 있다.

POSIX 사용자 및 그룹이 파일 시스템에 액세스할 때 이 액세스 포인트를 사용하도록 강제할 수 있다.

액세스 포인트를 사용하면 파일 시스템 내의 특정 디렉터리에 대한 액세스를 제한할 수 있고 선택적으로 다른 경로 디렉터리를 지정할 수도 있어 편리할 수 있다.

NFS 클라이언트에서 액세스 포인트로의 액세스는 IAM 정책을 사용하여 수행할 수 있다.

예를 들어 회사 전체에 공유할 EFS 파일 시스템이 있지만 경로 아래에 다른 폴더가 있다고 하자.
/data, /secret, /config 폴더가 있고 사용자마다 EFS 파일 시스템의 다른 부분에 액세스할 수 있도록 하려고 한다.

UID GID 기반으로 특정 디렉터리에 대한 권한을 설정해 특정 사용자 또는 그룹 기반으로 액세스를 제한하고, 특정 디렉터리에 대해 루트 폴더로 만들 수 있다.

이 액세스 포인트 덕분에 특정 사용자 및 그룹은 EFS 파일 시스템의 해당 부분에만 액세스 할 수 있다.

이 모든 것은 IAM 권한에 의해 규제된다.
따라서 여러 그룹에서 EFS 파일 시스템을 사용할 수 있지만 각기 다른 제한과 권한으로 사용할 수 있다.

액세스 포인트를 생성할 때 선택적으로 이 액세스 포인트에서 식별할 POSIX 사용자를 지정할 수 있고, 루트 디렉터리 생성 권한도 지정할 수 있다.

액세스 포인트는 ARN이 존재하는데 ARN을 이용해 IAM 정책에 액세스 포인트에 접근하는 것을 허용하도록 할 수 있다.

**정리**
- NFS 환경에 대해 애플리케이션 액세스를 쉽게 관리할 수 있는 EFS Access Points 기능이 있다.
- POSIX 사용자 및 그룹이 파일 시스템에 액세스할 때 액세스 포인트를 사용하도록 강제할 수 있다.
- 액세스를 제한하거나 선택적으로 다른 경로 디렉터리를 지정할 수도 있어 편리하다.
- NFS 클라이언트에서 액세스 포인트로의 액세스는 IAM 정책을 사용해 관리할 수도 있다. 예를들어 특정 경로 /example/data, /example/secret, /example/config 폴더가 있을 때 사용자 별로 다른 경로에 액세스할 수 있도록 할 수 있다.
- UID, GID 기반으로 특정 디렉터리에 대한 권한을 설정해 사용자 또는 그룹 기반으로 액세스를 제한하고 특정 디렉터리를 루트 폴더로서 만들 수도 있다.
- 액세스 포인트를 생성할 때 선택적으로 액세스 포인트에서 식별할 POSIX 사용자를 지정할 수 있으며, 루트 디렉터리 생성 권한도 지정할 수 있다.
- 액세스 포인트의 ARN을 이용해 IAM 정책에 액세스 포인트에 접근하는 것을 허용하도록 할 수 있다.

## **EFS - Operations**

EFS 파일 시스템에서 수행할 수 있는 작업에 대해 이야기 해보자

EFS는 라이프사이클 정책을 활성화하거나 IA로 전환하거나 IA 설정을 변경할 수 있다.
또한 처리량 모드와 할당된 처리량 숫자를 변경하거나 EFS Access Points를 만들 수 있다.

그러나 일부 작업은 DataSync를 사용해 EFS 파일 시스템의 전체 마이그레이션을 해야한다. 왜냐하면 DataSync가 모든 속성과 메타데이터를 복제하기 때문이다.

예를들어 암호화된 EFS로 마이그레이션하거나 다른 암호화 키로 마이그레이션 하려면 DataSync를 사용해야 하며, Max I/O와 같은 성능 모드를 활성화하려면 DataSync를 사용해야 한다.

왜냐하면 새로운 별도의 EFS 파일 시스템을 생성해야 하기 때문이다.

예를들어 원본 EFS 파일 시스템이 있고, 암호화된 대상 EFS 파일 시스템이 있다고 가정해보자.
두 파일 시스템 간에 DataSync 서비스를 이용해 데이터를 마이그레이션 할 수 있다.

또한 EFS를 암호화하거나 암호화를 변경하려면 DataSync를 사용해야한다.

**정리**
- EFS는 라이프사이클 정책을 활성화할 수 있다. IA를 활성화 하거나, IA 설정을 변경할 수 있다.
- 처리량 모드를 변경하거나, 프로비저닝된 처리량 수를 변경할 수 있다.
- EFS Access Points를 생성할 수 있다.
- 만약 EFS 파일 시스템 전체를 마이그레이션 하려면 DataSync 서비스를 사용해야한다. 
  - DataSync가 모든 속성과 메타데이터를 복제하기 때문이다.
  - 또한 암호화된 EFS로 마이그레이션 하거나, 다른 암호화 키를 사용하기 위해 마이그레이션 하려면 DataSync를 사용해야 한다.
  - Max I/O와 같은 Performance mode를 활성화하려면 DataSync를 사용해야 한다.

## **EFS - CloudWatch Metrics**

EFS 는 여러 CloudWatch Metric이 있다.

- PercentIOLimit
  - 이 메트릭은 General Purpose의 I/O 제한에 도달하는데 얼마나 가까운지에 대한 정보를 제공한다.
  - 만약 매우 높은 백분율을 얻거나 100%에 가까워진다면, 권장 사항은 Max I/O로 전환하여 EFS 파일 시스템의 I/O 용량을 증가시키는 것이다. (DataSync 서비스를 이용하여)
- BurstCreditBalance
  - 일반적인 목적의 EFS 파일 시스템을 사용하면 높은 처리량 수준을 달성하기 위해 사용할 수 있는 Burst credit이 있다.
  - 그러나 처리량이 100%에 도달하고 모든 크레딧을 사용하면 크레딧 잔액이 0이 될 것이고, 다시 사용할 수 있을 때까지 기다려야 한다.
- StorageBytes
  - 바이트 단위로 측정된 파일 시스템의 크기이며, 15분마다 업데이트된다.
  - 여러 Demension이 있어서 Standard 클래스에 저장된 양, IA 클래스에 저장된 양, 전체는 Standard 및 IA의 합계이다.

모든 모니터링 메트릭에는 파일 시스템을 클릭하고 Monitoring을 클릭해 직접 액세스할 수 있다.

예시로 Throughput을 75% 이상일 때 경고가 표시될 수 있다.

IOPS 유형 별, 유형 별 Throughput, PercentIOLimit, 현재 EFS 파일 시스템에 연결된 클라이언트 수, EFS 파일 시스템에서 사용중인 스토리지 양 등이 있다.

실시간 정보를 얻으려면 시계열 또는 단일 값으로 선택할 수 있다.

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

S3는 파일 백업 및 저장을 위해 사용할 수 있다.

재해 복구 목적으로 데이터를 다른 지역으로 이동해 한 지역이 다운되더라도 데이터가 다른 곳에 백업되도록 할 수 있다.

아카이브 목적으로 파일을 S3에 보관하고 나중에 훨씬 저렴하게 검색할 수 있다.

하이브리드 클라우드 스토리지로 사용해 온프레미스 스토리지가 있지만 클라우드로 확장하려는 경우에도 S3를 사용할 수 있다.

응용 프로그램을 호스팅하고 비디오 파일, 이미지 등과 같은 미디어를 호스팅하는 데 사용할 수 있다.

데이터 레이크를 구축하여 많은 데이터를 저장하고 대규모 데이터 분석을 수행할 수 있다.

소프트웨어 업데이트를 제공하고 정적 웹 사이트를 호스팅하는 데 사용할 수 있다.

S3는 파일을 버킷에 저장한다.
버킷은 최상위 디렉터리로 볼 수 있으며, 이러한 S3 버킷의 파일은 객체라고 한다.

버킷은 우리의 계정에서 생성되어야하며 글로벌하게 고유한 이름을 가져야한다. 우리가 설정한 이름은 우리 계정의 모든 Region 뿐만 아니라 AWS에서 존재하는 모든 계정 전체에서 고유해야 한다는 이야기이다.

버킷은 Region 수준에서 정의된다. S3는 글로벌 서비스처럼 보이지만 버킷은 실제로 특정 Region에 생성된다.

S3 버킷은 명명 규칙이 있다.
버킷 이름은 대문자나 언더스코어가 없어야 하며 3에서 63자 사이여야 한다. IP가 아니어야하고, 소문자로 시작해야한다.
그리고 몇 가지 접두사 제한이 있다. (특정 서비스에서 사용하는 접두사, 접미사)
버킷 이름은 문자 또는 숫자로 시작하고 끝나야 한다.

객체는 파일이며 키(key)라는 것이 있다.
객체 키는 파일의 전체 경로를 나타낸다.

최상위 디렉터리에 있는 myfile.txt 의 키는 "myfile.txt" 가 된다.
만약 특정 폴더에 들어있다면 "myfolder/folder/myfile.txt" 가 된다.

키는 접두사와 객체 이름으로 구성된다. 접두사 "myfolder/folder" 객체 이름 "myfile.txt"로 분해할 수 있다.

그런데 S3는 본질적으로 디렉터리라는 개념이 없다. UI에서는 거의 그렇지 않다고 느껴질 것인데, S3는 모든 객체를 키로 구분한다.
키는 단순히 슬래시를 포함하는 매우 긴 이름이다.

객체는 파일, 또는 기타 모든 것을 Amazon S3에 업로드할 수 있다. 최대 객체 크기는 5 TB 이며, 파일이 매우 크고 5 GB보다 큰 경우 해당 파일을 multi part로 나누어 업로드해야 한다.

따라서 5 TB 파일이 있는 경우 최소 1,000개의 5 GB part로 업로드 해야한다.

객체에는 메타데이터도 설정할 수 있다. 키-값 페어 형식으로 시스템이나 사용자가 파일에 대한 메타데이터를 지정할 수 있다. 

태그도 유니코드 키-값 페어 최대 10개까지 설정 가능하며 보안, 라이프사이클 관리 등에 유용하다. 

버전 관리가 활성화되어 있다면 객체에 버전 ID도 있다.

버킷에 버전 관리를 활성화한 경우 객체에 버전 ID가 있을 수도 있다.

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

S3의 보안 정책에 대해 이야기 해보자

S3는 사용자 기반 보안이 있다. 특정 IAM 사용자에 대해 허용되어야 하는 API 호출을 권한 부여하는 IAM 정책을 가질 수 있다.

또한 리소스 기반 보안이 있다. S3 Bucket Policy를 사용할 수 있으며 S3 콘솔에서 직접 할당할 수 있는 Bucket 전체 규칙이다.

이를 통해 특정 사용자가 들어오거나 다른 계정의 사용자(교차 계정)가 S3 버킷에 액세스할 수 있다.

다음으로 object Access Control List(ACL)이 있다. 이는 비활성화될 수 있다.

Bucket 수준에서도 Bucket ACL을 가질 수 있다.
Bucket ACL이 훨씬 덜 일반적이고 비활성화될 수 있다.

현재 Amazon S3 버킷에서 일반적으로 보안을 구현하는 방법은 Bucket Policy를 사용하는 것이다.

IAM 권한이 허용하거나 리소스 정책이 허용해 명시적으로 거부된 작업이 없으면 IAM 원칙은 지정된 API 호출에서 S3 객체에 액세스할 수 있다.

마지막으로 S3에서 보안을 구현하는 방법은 암호화 키를 사용해 객체를 암호화하는 것이다.

S3 Bucket Policy는 실제로 JSON 기반의 정책이며 읽기가 상당히 쉽다.

아래는 예시이다.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Principal": {
        "AWS": "arn:aws:iam::111122223333:role/JohnDoe"
      },
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:GetObjectVersion"],
      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*",
      "Condition": {
        "StringEquals": {
          "s3:ExistingObjectTag/environment": "production"
        }
      }
    }
  ]
}
```

Resource 블록의 경우 정책이 적용되는 버킷 및 객체를 알려준다.

Effect 의 경우 Allow 또는 Deny가 있다.

Action은 Effect를 적용할 작업이다.

Principal은 계정 또는 사용자를 나타낸다. 이 정책을 적용할 대상을 의미한다.

S3 Bucket Policy를 사용해서 Bucket에 대한 공개 액세스를 부여하거나 객체를 업로드할 때 객체를 강제로 암호화하거나 다른 계정에 액세스 권한을 부여할 수 있다.

사용자가 계정 내에 있는 경우(IAM 사용자) S3에 액세스하려는 경우 해당 사용자에게 IAM Policy를 부여해 S3 버킷에 액세스할 수 있다.

그러나 EC2 인스턴스에서 S3 버킷으로의 액세스를 제공하려면 IAM User 대신에 IAM Role을 사용해야 한다.

따라서 올바른 IAM 권한이 있는 EC2 인스턴스 역할을 생성하면 해당 EC2 인스턴스는 S3 버킷에 액세스할 수 있다.

Cross-Account 액세스를 허용하려면 Bucket 정책을 사용해야 한다.

다른 AWS 계정에 있는 IAM 사용자가 있고 해당 특정 IAM 사용자에 대한 Cross-Account 액세스를 허용하는 Bucket Policy를 생성하면 IAM 사용자는 우리의 S3 버킷으로 API 호출을 수행할 수 있다.

또한 S3 버킷은 Block Public Access 설정이 있다.
버킷을 생성할 때 설정할 수 있고 데이터 누출을 방지하기 위한 보안의 추가적인 레이어이다.

S3 버킷 정책으로 버킷을 공개적으로 만드는 설정이 있더라도 Block Public Access이 활성화 된 경우 버킷은 절대로 공개되지 않는다.

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

**_시험에서는 알 필요 없다._**

S3 Bucket Policy를 사용하면 버킷에 대한 공개 액세스를 허용하거나 업로드 시 객체를 강제로 암호화하거나 다른 Region 및 교차 계정에 액세스 권한을 부여하거나 공개 IP 또는 Elastic IP에 대한 조건을 지정하거나(Private IP에 대한 조건은 적용되지 않는다.), Source VPC 또는 Source VPC 엔드포인트, CloudFront 원본 ID, MFA 강제 등 여러가지 작업이 가능하다.

유용한 예제를 살펴보자

aws:PrincipalOrgID 를 이용해서 S3 버킷에 대한 액세스를 AWS Organization에 속한 모든 주체에게 제한한다.

s3:x-amz-server-sideencryption를 이용해서 암호화되지 않은 객체의 업로드를 방지한다.

NotIpAddress를 이용해서 SourceIp에서 제공한 IP 범위 내에 IP가 해당하지 않으면 업로드를 거부할 수 있다.

Action 중 GetObject의 경우 Resource의 path 가 \*로 되어야 모든 object에 대한 권한을 얻게 되고
ListBucket의 경우 해당 Bucket의 이름만 기재해줘도 된다.

MultiFactorAuthPresent 를 이용해서 MFA에 인증된 경우에만 객체를 가져올 수 있도록 한다.

## **[CCP/SAA/DVA] S3 Website Overview**

S3를 사용해서 웹사이트를 만들수 있다.

S3는 정적 웹사이트를 호스팅하고 이를 인터넷에서 액세스할 수 있도록 제공할 수 있다. 웹사이트의 URL은 AWS Region에 따라 달라진다.

버킷에 HTML 파일이나 이미지와 같은 파일이 들어 있을 것이다.

이 버킷을 Static Website Hosting 옵션을 활성화하게 되면 버킷의 이름에 따라
http://bucket-name.s3-website-Region.amazonaws.com 또는
http://bucket-name.s3-website.Region.amazonaws.com 등의 이름으로 나타날 것이고, 사용자가 우리의 S3 버킷에 액세스할 수 있을 것이다.

그러나 우리의 S3 버킷에 Public 읽기 권한이 없으면 작동하지 않는다.

그래서 버킷 정책을 공개적으로 읽기 위해 활성화 하면 된다.
403 에러가 발생하게 된다면 버킷이 공개되지 않았다는 의미이다.

**정리**
- S3를 사용해 정적 웹사이트를 호스팅하고 이를 인터넷에서 액세스할 수 있도록 제공할 수 있다.
- 웹사이트의 URL은 AWS Region에 따라 달라진다.
- Static Website Hosting 옵션을 활성화하게 되면 버킷의 HTML 파일이나 이미지와 같은 파일을 제공할 수 있다.
- URL의 경우 http://bucket-name.s3-website-Region.amazonaws.com 등으로 사용자가 우리의 S3 버킷에 액세스할 수 있다.
- S3 버킷에 Public 읽기 권한이 없으면 작동하지 않는다. Bucket Policy를 공개적으로 읽기 위해 활성화하면 된다.
- 403 에러가 발생하게 된다면 버킷이 공개되지 않았다는 의미이다.

## **[CCP/SAA/DVA] S3 Versioning**

S3에서는 파일을 버전으로 관리할 수 있으며 이는 버킷 레벨에서 활성화해야 하는 설정이다.

내 버킷이 있고 버전 관리가 활성화 되어 있다면 사용자가 파일을 업로드할 때마다 해당 파일의 버전이 선택된 키에 생성된다.

그리고 동일한 키를 다시 업로드하려고 하면 해당 파일의 버전 2가 생성되고, 버전 3이 생성되며 이어지게 된다.

따라서 버킷을 버전으로 관리하는 것이 좋은 실천 사례이다. 의도하지 않은 삭제에 대비하기 때문이다.

파일 버전을 삭제하면 실제로 삭제 대신 삭제 marker가 추가되어 이전에 있었던 버전을 복원할 수 있다. 그리고 이전 버전으로 쉽게 롤백할 수 있다.

몇 가지 주의 사항이 있다.

먼저 버전 관리를 활성화하기 전에 버전이 지정되지 않은 모든 파일은 버전이 null이다.

또한 버전 관리를 일시 중지하면 이전 버전이 삭제되지 않는다.

**정리**
- S3는 버전 관리를 이용해 파일을 관리할 수 있고, 설정을 버킷 수준에서 활성화 해야한다.
- 버전 관리가 활성화 되어 있다면 사용자가 동일 파일을 업로드하면 해당 키(접두사+객체 이름)에 대한 파일의 버전이 생성된다. 그리고 동일한 키를 업로드하려고 하면 해당 파일의 v2, v3가 생성된다.
- 버킷을 버전으로 관리하는 것은 의도하지 않은 삭제를 대비해 좋은 실천 사례이다.
- 파일 버전을 삭제하면 바로 삭제되는 것이 아니라 삭제 Marker만 추가되게 되고, 이전 버전을 복원할 수 있다. 그리고 이전 버전으로 쉽게 롤백할 수 있다.
- 버전 관리를 활성화하기 전에 있던 모든 파일은 버전이 지정되지 않아 버전이 null이다.
- 버전 관리를 일시 중지하면 이전 버전이 삭제되지 않는다.

## **[CCP/SAA/DVA] S3 Replication**

S3 복제에 대해 이야기 해보자

S3는 두 가지 종류의 복제가 있다.

교차 Region 복제 (Cross-Region Replication, CRR) 그리고 동일 Region 복제 (Same-Region Replication, SRR)

하나의 Region에 있는 S3 버킷과 다른 Region에 있는 대상 S3 버킷이 있으며, 이 두 버킷 간에 비동기 복제를 설정할 수 있다.

따라서 이를 위해서는 먼저 원본 및 대상 버킷에서 Versioning을 활성화해야 한다.

이러한 복제 매커니즘은 백그라운드에서 발생한다.

복제가 작동하려면 S3 서비스에 적절한 IAM 권한을 부여해 지정된 버킷에서 읽고 쓸 수 있도록 해야 한다.

복제의 사용 사례이다.

첫 번째로 CRR을 사용하면 규정 준수나 데이터에 대한 낮은 지연 시간 액세스 제공 등 여러 이점이 있을 수 있다.

SRR의 경우 로그를 여러 S3 버킷에 집계하거나 프로덕션 및 테스트 계정 간에 실시간 복제를 수행하는 데 유용할 수 있다.

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

복제에 대한 몇 가지 참고 사항이 있다.

기존 객체를 복제하려면 S3 Batch Replication 기능을 사용해야한다.
복제를 활성화하면 새로운 객체만 복제되기 때문

이 기능을 통해 기존 객체와 복제에 실패한 객체가 복제된다.

또한 소스 버킷에서 대상 버킷으로 삭제 Marker를 복제할 수 있다.

기본적으로는 S3 복제가 활성화되고 원본 버킷에서 객체가 삭제되면 S3는 원본 버킷에서만 삭제 마커를 추가한다. 이것은 악의적인 삭제를 피할 수 있다.

그런데 삭제 Marker 복제 기능을 활성화하면 Marker가 대상 버킷에 복제되고 원본 버킷과 대상 버킷 모두에서 객체가 삭제된 것처럼 동작한다.

마지막으로 복제를 Chainging 할 수 없다.

예를 들어 버킷 1에서 버킷 2로 복제되고, 버킷 2가 버킷 3으로 복제된 경우 버킷 1의 객체는 버킷 3으로 복제되지 않는다.

**정리**
- 기존 객체를 복제하기 위해서는 S3 Batch Replication 기능을 사용해야 한다. Replication을 활성화하면 새로운 객체만 복제되기 때문이다.
- 삭제 작업이 있는 경우 소스 버킷의 삭제 마커를 대상 버킷으로 복제할 수 있다. 악의적 삭제를 방지하기 위해서 버전 ID가 있는 삭제 작업은 복제되지 않는다.
- 복제를 체이닝할 수는 없다. 버킷 1에서 버킷2로 복제하고 버킷2에서 버킷 3으로 복제해도 버킷 1의 객체는 버킷 3에 복제되지는 않는다.

## **[CCP/SAA/DVA] S3 Storage Classes Overview**

S3는 다양한 Storage Class 가 있다.

- Amazon S3 Standard - General Purpose
- Amazon S3-Infrequent Access
- Amazon S3 One Zone-Infrequent Access
- Glacier Instant Retrieval
- Glacier Flexible Retrieval
- Glacier Deep Archive
- Amazon S3 Intelligent Tiering

가 있다.

모든 클래스에 대해 시험에서 알고 있어야 한다.
S3에 객체를 만들 때 해당 클래스를 선택할 수 있으며 수동으로 스토리지 클래스를 수정하거나 S3 Lifecycle을 사용하여 개체를 자동으로 스토리지 클래스 간 이동할 수도 있다.

클래스에 들어가기 전에 내구성(durability) 및 가용성(availability)에 대해 정의해보자

내구성은 S3에서 객체가 얼마나 자주 손실될 것인지를 나타낸다. S3는 매우 높은 내구성을 가지고 있으며 11nines로 표현된다. 즉, 99.999999999% 이다. 이는 평균적으로 10 백만개의 객체를 Amazon S3에 저장할 때 한 객체가 10,000년에 한 번 손실될 것으로 예상할 수 있음을 의미한다. 내구성은 Amazon S3의 모든 스토리지 클래스에 대해 동일하다.

가용성은 서비스가 얼마나 즉시 사용 가능한지를 나타낸다. 이는 스토리지 클래스에 따라 다르다. 예를 들어, S3 Standard는 99.99%의 가용성을 가지고 이싿. 이는 연간 약 53분 동안 서비스가 사용 불가능하다는 것을 의미한다. 이것은 서비스를 다룰 때 일부 오류가 발생할 수 있음을 의미하므로 응용 프로그램을 개발할 때 이를 고려해야 한다.

S3 Standard는 99.99%의 가용성을 가지고 있고 빈번하게 액세스되는 데이터에 사용된다.
기본적으로 사용하는 저장소 유형이며, 지연 시간이 낮고 처리량이 높다.

AWS 측면에서 두 가용 영역의 장애를 견딜 수 있다.

사용 사례로는 대규모 데이터 분석, 모바일 및 게임 응용 프로그램, 콘텐츠 배포 등이 있다.

다음으로 Amazon S3 Infrequent Access 가 있다.

이는 덜 자주 액세스되는 데이터이지만 필요할 때 빠른 액세스가 필요한 데이터이다.

S3 Standard보다 낮은 비용이 들지만 검색에 비용이 발생한다.

S3 Standard-IA의 가용성은 99.9% 이며, 사용 사례로는 재해 복구 및 백업이 있다.

Amazon S3 One Zone-Infrequent Access, One Zone-IA는 단일 가용 영역 내에서 고 내구성을 가지며 AZ가 파괴되면 데이터가 손실된다. 또한 가용성이 99.5%로 더 낮다.

S3 One Zone-IA의 사용 사례는 예를 들어 온프레미스 데이터 또는 다시 생성할 수 있는 데이터의 백업의 보조 복사본을 저장하는 것이다.

다음은 Glacier 스토리지 클래스가 있다.

Glacier는 아카이빙 및 백업을 위한 저렴한 객체 저장소이다.

가격은 저장소 비용과 검색 비용을 지불해야 한다.

Glacier는 Amazon S3 Glacier Instant Retrieval이 있다. 이는 분기마다 액세스되는 데이터에 적합한 미리 측정된 검색을 제공한다. 최소 저장 기간은 90일이다.

그래서 이것은 백업이지만 밀리초 내에 액세스해야 한다.

다음은 Glacier Flexible Retrieval 이다. 이전에는 S3 Glacier라 불렀지만 계층이 추가됨에 따라 이름을 바꿔주었다.

Amazon Glacier Flexible Retrieval에는 세 가지 Flexible이 있다.

- Expedited로 데이터를 1분에서 5분 사이에 가져올 수 있다.
- Standard로 데이터를 3시간에서 5시간 사이에 가져올 수 있다.
- Bulk는 무료이며 데이터를 5시간에서 12시간 사이에 가져올 수 있다.

Flexible은 최소 저장 기간이 90일이다.

여기서 Instant는 데이터를 즉시 검색하고 Flexible은 데이터를 검색하는 데 최대 12시간까지 기다릴 수 있는 의미이다.

다음 장기 저장을 위한 Glacier Deep Archive가 있다.

검색에 대한 두 가지 티어가 있다.

- Standard는 12시간이고,
- Bulk는 48시간이다.

데이터를 검색하는 데 많은 시간을 기다릴 수 있지만 가장 낮은 비용을 제공한다.
최소 저장 기간은 180일이다.

S3 Intelligent-Tiering이라는 스토리지 클래스가 있다.

이는 사용 패턴을 기반으로 개체를 액세스 티어 간에 이동할 수 있게 해준다.

이를 위해 매달 작은 Monitoring 요금, 자동 티어링 수수료가 발생한다.

S3 Intellignet-Tiering에서는 액세스 비용이 발생하지 않는다.

Tier는 아래와 같다.

- Frequent Access tier: 기본 tier
- Infrequent Access tier: 30일 동안 액세스되지 않은 개체에 대한
- Archive Instant Access: 90일 동안 액세스되지 않은 개체에 대한
- Archive Access(optional): 옵션으로 추가할 수있는 Tier이고, 90일부터 700일 이상까지 구성할 수 있다.
- Deep Archive Access(optional): 180일부터 700일 이상까지 액세스되지 않은 개체에 대해 구성할 수 있다.

S3 Intelligent-Tiering은 객체를 이동시키는 동안 우리가 해야할 것은 없다.

스토리지 클래스의 내구성은 어디서나 11 nines를 얻고 가용성은 내려갈수록 Zone이 줄어든다.

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

여러 스토리지 클래스 간에 객체를 이동하고 전환하는 방법에 대해 이야기 해보자

보통은 Standard로 시작해서 Standard-IA 그리고 Intelligent Tiering으로 그리고 One-Zone IA로 이동, One-Zone IA에서는 Flexible Retrieval이나 Deep Archive로 이동할 수 있다.
(One-Zone IA에서 Glacier Instant Retrieval로 못가는 것 빼고는 나머지는 다 각자 클래스로 이동 가능하다.)

객체가 드물게 액세스될 것으로 예상된다면 Standard IA로 이동하고, 객체를 아카이빙할 것으로 예상된다면 Glacier 티어나 Deep Archive 티어로 이동해라

이러한 객체 이동은 수동으로 수행할 수 있지만 우리는 Lifecycle Rule을 이용해서 자동화할 수 있다.

Lifecycle Rule은 여러 구성 요소로 이루어져 있다.

Transition Actions: 객체를 다른 스토리지 클래스로 전환할 수 있도록 하는 작업

- 예를 들어, 60일이 지난 객체를 Standard IA 클래스로 이동하거나,
- 6개월이 지난 객체를 Glacier로 이동할 수 있다.

Expiration Actions: 객체를 만료하는 만료 작업

- 예를 들어 액세스 로그 파일은 365일 후에 삭제하려면 만료 작업을 설정할 수 있다.
- 버전 관리를 활성화했다면 오래된 파일 버전을 삭제하는 데 Expiration 작업을 사용할 수 있다.
- 또한 만약 Multi-Part upload가 2주 이상 지난 경우에는 불완전한 멀티파트 업로드를 삭제하는 데 이를 사용할 수 있다.

규칙은 특정 접두사에 대해 지정될 수 있으므로, 전체 버킷이나 버킷 내의 특정 경로에 적용될 수 있다.
또한 특정 객체 태그에 대해 지정할 수도 있다. 예를 들어 "Department":"Finance" 에 대한 룰만 적용하려면 가능하다.

예를 들어보자

회사의 규칙 중 하나가 30일 동안은 삭제된 S3 객체를 즉시 복원할 수 있어야 하며, 30일 동안에는 삭제된 객체를 48시간 내에 복구할 수 있어야 한다고 명시되어 있다면 삭제된 객체를 숨기기 위해 S3 Vesioning을 활성화 해 객체 버전을 유지하고 가져올 수 있다.
이렇게 하면 객체가 사실은 Deletion Marker에 의해 숨겨지고 나중에 복구할 수 있게 된다.
그런 다음 현재 버전이 아닌 객체를 Standard IA로 전환하는 규칙을 만든다.
그 후에 현재 버전이 아닌 객체를 아카이빙 목적으로 Glacier Deep Archive로 전환한다.

그런데 어떻게 하면 객체를 한 클래스에서 다른 클래스로 전환할 최적 일 수를 결정할 수 있을까?
여기에 Amazon S3 Analytics를 활용할 수 있다.

Standard 형 및 Standard IA 형이 있다.

One-Zone IA 또는 Glacier과 함께 작동하지는 않는다.

이 기능은 권장 사항과 통계를 담은 CSV 보고서를 생성할 것이며, 보고서는 매일 업데이트되며 데이터 분석 결과를 보려면 24 ~ 48 시간이 걸릴 수 있다.

따라서 합리적인 라이프 사이클 규칙을 만들거나 개선하는데 도움을 줄 수 있다.

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

S3 이벤트 Notification에 대해 알아보자

이벤트란 무엇인가? 이벤트는 객체가 생성되거나 제거되거나 복원되는 등의 사건을 의미한다.
이러한 이벤트를 필터링할 수 있다.

예를 들어 JPEG으로 끝나는 객체만 고려하고 싶다면 그렇게 설정할 수 있다.

이벤트 알림의 사용 사례는 Amazon S3에 업로드 된 모든 이미지에 대한 썸네일을 자동으로 생성하고 싶을 때일 수 있다.

이벤트 알림을 생성해서 몇 가지 대상으로 보낼 수 있다.
이 대상은 SNS 토픽, SQS 큐, Lambda 함수일 수 있다.

S3 이벤트는 원하는 만큼 생성할 수 있으며 원하는 대상으로 보낼 수 있다.

이벤트는 일반적으로 몇 초 내에 대상으로 전달되지만 때로는 1분 이상 걸릴 수 있다.

이벤트 알림이 작동하려면 IAM 권한이 필요하다. 예를 들어 SNS 토픽으로 전송하는 경우 SNS 리소스 액세스 정책이 있어야 된다. SNS 토픽으로 S3 버킷이 직접 메시지를 보낼 수 있도록 허용해야 한다.

SQS를 사용하는 경우에도 SQS 리소스 정책이 있어야 하고, Lambda를 사용하는 경우에도 Lambda 리소스 정책이 있어야한다.

여기서는 S3의 IAM 역할을 사용하지 않고 SNS, SQS, Lambda 함수에 리소스 액세스 정책을 정의한다.

이러한 Event는 우리 S3 버킷으로 이동하게 된다. 어떤 이벤트든지 어떤 경우에도 모든 이벤트는 EventBridge로 이동한다.

EventBridge에서는 Rule을 설정할 수 있다.
이 Rule을 이용하면 이러한 Event를 18개 이상의 다양한 AWS 서비스로 전송할 수 있다.
이는 S3 이벤트 알림 기능을 확장한다.

EventBridge를 사용하면 고급 필터링 옵션을 사용할 수 있다. 메타데이터, 객체 크기 및 이름으로 필터링할 수 있으며 여러 대상에 동시에 전송할 수 있다.
예를 들어 Step Functions, Kinesis Data Streams 또는 Firehose로 전송할 수 있다. 심지어 Event Bridge에서 직접 제공하는 기능도 이용 가능하다.

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

S3의 기본 성능에 대해 이야기 해보자

S3는 기본적으로 높은 요청에 의해서 자동으로 스케일링되고, 첫 byte를 얻기 위해 100 ~ 200 밀리세컨즈라는 매우 빠른 속도를 가지고 있다.

애플리케이션이 분할된 S3 프리픽스 별 초당 3,500개의 PUT/POST/COPY/DELETE 요청을 그리고 프리픽스 별 초당 5,500개의 GET/HEAD 요청을 얻을 수 있다.

프리픽스 별 초당이 무엇을 의미하는지 확인해보자

예를들어 4개의 파일이 있다고 하면
첫번째는 "folder/subfolderone/file" 오브젝트가 있다고 가정해보자 이 파일에 대해 해당 프리픽스에서 초당 3,500 회의 PUT 및 5,500 회의 GET을 얻을 수 있다.

두번째는 "folder/subfoldertwo/file" 오브젝트가 있다고 했을 때 subfoldertwo 프리픽스에 대해서도 초당 3,500 회의 PUT 및 5,500 회의 GET을 얻을 수 있다.

S3 성능을 최적화하는 방법은 아래와 같다.

**Multi Parts Upload**는 100MB 이상인 파일에 대해 사용하는 것이 좋으며, 5GB 이상인 파일에 대해서는 필수적으로 사용해야한다.

멀티 파트 업로드는 업로드를 병렬화 해 전송을 가속화하여 대역폭을 최대화하는 데 도움이 된다.

파일을 부분으로 나누고 각 파일을 병렬로 Amazon S3로 업로드한다. S3에서 모든 부분이 업로드되면 다시 큰 파일로 합친다.

**S3 Transfer Acceleration**도 있다. 업로드 및 다운로드를 위함이다.

파일을 AWS 엣지 Location으로 전송해 엣지 Location이 데이터를 대상 지역의 S3 버킷으로 전달하여 전솔해 속도를 높이기 위한 것이다.

Edge Location은 리전 이상이고, 200개 이상의 Edge Location이 있고 Location은 계속해서 증가하고 있다.

S3 Transfer Acceleration은 Multi Parts Upload와 호환된다.

파일을 효율적으로 읽는 방법인 **S3 Byte Range Fetches**가 있다.
이 기능은 파일의 특정 바이트 범위를 가져와서 GET을 병렬화 하는 것이다.

또한 특정 바이트 범위를 가져오는 데 실패한 경우 더 작은 바이트 범위를 재시도할 수 있고, 장애 발생 시에 더 나은 내구성을 갖게 된다.

이를 사용해 다운로드 속도를 높이는 데 사용할 수 있다.
또한 파일의 일부만 검색하는 방법으로 사용할 수도 있다.

S3 파일의 처음 50 바이트가 파일에 대한 헤더이고, 파일에 대한 몇 가지 정보를 제공한다면 50 바이트를 Byte Range Fetches를 통해 정보를 빨리 얻을 수 있다.

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

S3에서 특정 파일을 검색하려고 하지만 모든 파일을 검색 후에 데이터를 필터링하면 너무 많은 데이터를 검색하게 된다.

이 대신에 SQL을 사용해 서버 측 필터링을 사용할 수 있다면 어떤가.
rows 와 column 기반의 간단한 SQL 문을 사용해서 데이터를 적게 전송하고 데이터를 찾아내는 데 클라이언트 측에서 발생하는 네트워크 전송 및 CPU 비용이 감소한다.

S3 Select를 사용하면 S3가 실제로 파일을 필터링하고 필요한 데이터만 검색하도록 할 수 있다.
Amazon은 S3 Select 사용이 최대 400% 빠르고 80% 저렴하다고 한다.

S3 Select를 이용해 CSV 파일만 필터를 적용해 가져오려고 할 때 서버측에서 필터링된 데이터 세트를 보내줘 훨씬 작고 저렴한 데이터를 받게 된다.

간단한 필터링에 대해서는 S3 Select를 생각해보자.

Glacier Select에서도 동일하다.

**정리**
- S3 Select의 경우 S3에서 특정 파일을 검색할 때 모든 파일을 검색 후에 데이터를 필터링하지 않고 SQL을 사용해 서버 측 필터링을 사용할 수 있는 방법이다.
- rows와 column 기반의 간단한 SQL문을 사용해 클라이언트 측에서 발생하는 네트워크 전송 및 CPU 비용이 감소한다.
- S3 Select를 사용하면 S3가 실제로 파일을 필터링하고 필요한 데이터만 검색할 수 있기 때문에 속도는 최대 400% 빠르고 비용은 80% 정도 저렴해진다.
- 간단한 필터링이 필요하다면 S3 Select를 사용하는 것이 좋고, Glacier에서도 Glacier Select를 이용해서 위와 같은 모든 기능을 사용 가능하다.

## **[SAA] S3 Batch Operations**

S3 Batch Operations를 사용하면 단일 요청으로 기존 S3 객체에 대한 대량 작업을 수행할 수 있다.

예를 들어 여러 S3 객체의 객체 메타데이터 및 속성을 한 번에 수정할 수 있다.
또는 S3 버킷 간에 객체를 일괄 작업으로 복사할 수 있다.
또는 시험에 나올수 있는 사항 중 하나로 S3 버킷의 모든 암호화되지 않은 객체를 암호화할 수 있다.
또는 ACL 또는 태그를 수정하거나, S3 Glacier에서 한 번에 여러 객체를 복원하거나, S3 Batch Operation에서 각 객체에 대해 원하는 사용자 정의 작업을 수행하도록 Lambda 함수를 호출할 수 있다.

결과적으로 객체 목록에 대해 원하는 작업을 수행하기 위함이다.

따라서 job은 객체 목록, 수행할 작업 및 선택적 매개변수로 구성된다.

자체 스크립트 대신 S3 Batch Operation을 사용하는 이유는 무엇인가?

S3 Batch Operation를 사용하면 재시도 관리, 진행 상황 추적, 완료 알림 보내기, 보고서 생성 등이 가능하다.

S3 Batch Operation에 전달할 객체 목록은 S3에서 S3 Inventory라는 기능을 사용해 객체 목록을 가져오고 S3 Select를 사용해 객체를 필터링할 수 있다.

S3 Inventory 및 S3 Select를 사용해서 원하는 객체의 필터링 된 목록을 얻는다.
Batch Operation으로 필터링 된 목록의 객체를 처리한다.

다시 말해서 주요 사용 사례 중 하나는 S3 Inventory를 사용해서 암호화되지 않은 모든 객체를 찾고 S3 Batch Operations를 사용해 한꺼번에 모두 암호화하는 것이다.

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

S3 Inventory Job을 사용해서 S3 버킷의 모든 객체와 해당 메타데이터를 나열할 수 있다.
S3 List API 를 이용해서 모든 객체를 나열하고 연결된 모든 메타데이터를 가져오는 것보다 더 나은 방법이다.

S3 인벤토리의 사용 예시로는 모든 객체의 복제 및 암호화 상태에 대한 감사 및 보고서를 생성하는 것, S3 버킷의 객체 수를 얻거나 S3 Inventory는 모든 객체 버전을 나열할 수 있기 때문에 버킷의 이전 객체 버전의 총 량을 식별할 수 있다.

출력 파일은 CSV, ORC 또는 Apache Parquet이다.

Inventory는 매일 또는 매주 생성할 수 있다.

이 모든 데이터는 Athena, Redshift, Presto, Hive, Spark와 같은 유명한 도구를 사용해 쿼리할 수 있다.

Presto, Hive 및 Spark는 AWS 내부에 있지 않아도 외부에서 사용할 수 있으며 S3 Select를 사용해 필터링된 보고서를 생성하고 해당 보고서를 S3 Batch Operations에 사용할 수 있다.

Inventory는 비즈니스, 규정 준수 및 규정 요구에 사용을 한다.

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

장기 보관 및 백업을 위한 저렴한 객체 저장소로, 데이터는 장기간 보관된다. 대략 수십 년 동안 보관된다.

이는 온프레미스에서 자기 테이프 저장소를 실행하는 대안이다. 온프레미스에서 데이터를 테이프에 저장하는 대신 Glacier에서 동일한 작업을 수행할 수 있다.

내구성은 S3 표준과 동일한 99.999999999% (11 nines) 이며, 저장 비용은 티어에 따라 다르다.

저장 비용은 표준인 경우 GB 당 약 0.4센트에며, Deep Archive 티어의 경우 GB 당 0.099센트이다.

Glacier는 Archive와 Vault라는 구성 요소가 있다.

Archive는 데이터를 부르는 명칭이라고 생각하면 된다. S3로 치면 Object와 같은 것이다. 최대 40 TB까지 한 아카이브로 저장된다.

그리고 Vault의 경우 데이터를 담는 컨테이너이다. S3로 치면 Bucket과 같은 것이다.

기본적으로 모든 데이터는 AES-256을 사용하여 정적으로 암호화되며 키는 AWS에서 관리된다. 그래서 Glacier의 모든 데이터는 어떤 경우에도 자동으로 암호화된다.

특정 기간 이후에 S3에 아카이브하려면 Glacier를 사용하고 백업 수명 주기 정책을 사용하면 된다.

몇 가지 알아두어야 할 Glacier 기능이 있다.

- Vault를 만들고 삭제할 수 있으며 Vault는 비어있을 때만 삭제할 수 있다.
- Vault에서 메타데이터를 검색할 수 있다. Vault의 생성일, 아카이브 수, 모든 아카이브의 총 크기등을 포함한다.
- Vault의 Inventory를 다운로드할 수 있으며, 이는 모든 아카이브 단위의 목록이다. 아카이브 ID, 생성 날짜, 크기 등이 포함된다.

Vault의 작업에는 업로드가 있다. Vault에 직접 파일을 업로드하거나 큰 아카이브에 대해 Multi-Part 업로드를 사용할 수 있다.

Vault에서 파일을 직접 다운로드할 수 있다.
검색 작업을 수행한 후에 Glacier가 해당 파일을 다운로드할 수 있게 준비하고 주어진 시간 동안 다운로드할 수 있게 해준다.

특정 아카이브를 삭제할 수 있다.

아카이브 된 객체를 복원할 수 있다. Archive -> Object
복원 및 복원 링크 생성 시 세 가지 옵션이 있다.

1.  가장 비싼 Expedited 는 1 ~ 5 분 정도의 간격으로 파일을 제공하며 GB 당 3센트 및 1000개의 요청 당 10 달러를 지불해야 한다.
2.  더 느리지만 더 저렴한 Standard, 3시간에서 5시간이 소요되며 GB 당 1센트 및 1000개의 요청 당 3센트를 지불해야 한다.
3.  가장 느리지만 가장 비용 효율적인 Bulk, 파일 요청 후 5시간 ~ 12시간 간격으로 제공하며 GB 당 0.25 센트 및 1000개의 요청 당 2.50센트를 지불해야 한다.

Glacier는 Vault Policy와 Vault Lock이 있다.

각 Vault에는 Vault Access Policy와 Vault Lock Policy가 있으며 이러한 정책은 JSON으로 작성된다.

먼저 Vault Access Policy이다.
이것은 S3 Bucket Policy와 유사하게 동작한다.
사용자 및 계정 권한을 제한하는 데 사용되는 Vault 액세스 정책이ek.

Vault Lock Policy는 규정 및 규정 요구 사항을 위해 파일을 Glacier Vault에 잠글 수 있는 정책이다.
Lock Policy는 정책이 변경될 수 없도록 만든다. 일단 잠기면 Vault에 대한 모든 정책을 변경할 수 없으며, Lock Policy의 수명 동안 잠긴 상태로 유지된다.

예를 들어 아카이브를 1년 미만으로 삭제하지 못하도록 금지하거나 WORM 정책 (한 번 쓰고 여러 번 읽기)를 구현해 Vault 내의 파일 또는 Vault 정책 자체를 삭제할 수 없도록 할 수 있다.

Glacier는 비동기적이기 때문에 복원 작업에 대한 알림이 필요하다. 시간이 지날때까지 마냥 기다릴 수 없기 때문이다.

이를 위해 복원이 완료되면 SNS Topic으로 직접 알림을 보낼 수 있는 Vault Notification을 구성할 수 있다.

또한 작업을 시작할 때 SNS Topic으로 알림을 보낼 수 있다.

예를 들어 Glacier는 여러 Vault와 아카이브가 있고, 사용자가 아카이브 복원 작업을 시작하면 5시간에서 12시간 사이로 얻게 된다.

이 작업은 시간이 걸리므로 아카이브가 다운로드할 준비가 되면 Glacier는 SNS Topic으로 알림을 보낼 수 있다.

다른 옵션은 S3 Event Notifications를 사용하는 것이다.

이는 S3 Glacier 저장 클래스에서 직접 객체를 복원할 때 사용된다.
이 경우 S3 Object Restore Post로 객체 복원이 시작될 때 알림을 받고,
S3 Object Restore Complete로 객체 복원이 완료되었을 때 알림을 받을 수 있다.

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

멀티파트 업로드는 큰 객체를 어떠한 순서로든 여러 부분으로 나누어 업데이트할 수 있게 해주고, 파일 크기가 100MB를 초과하는 경우에 권장되며, 5GB를 초과하는 파일에 대해 사용해야한다.

업로드를 병렬로 수행하여 전송을 가속화하고, 한 부분이 실패한 경우 재시도할 수 있도록 도와준다.

업로드할 수 있는 Part의 최대 개수는 10,000 개이며, 여러 부분으로 나눈 파일을 병렬로 업로드 한다.

이를 통해 네트워크 대역폭을 최대화하고 특정 부분 업로드 실패 시 재시도할 수 있다.

파일은 모두 S3에 업로드되고, 모든 Part 및 파일을 S3에 다시 큰 파일로 연결하는 완료 요청을 수행할 수 있다.

실패한 경우 다시 실패한 부분만 업로드해 성능을 향상시키고 재시도해야할 시간을 줄일 수 있다.

그리고 이전 Part를 자동으로 삭제하려면 라이프사이클 정책을 사용해 X일 후에 완료되지 않은 업로드를 삭제할 수 있다.

CLI 또는 SDK를 사용해서 멀티파트 업로드를 활용할 수 있다.

LifeCycle Rule을 만들 수 있으며 라이프 사이클을 이용해서 만료된 삭제 마커 또는 멀티파트 업로드가 불완전하게 진행된 파일들을 삭제할 수도 있다.

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

Athena는 S3 버킷에 저장된 데이터를 분석하는 데 도움이 되는 서버리스 쿼리 서비스이다.

데이터를 분석하기 위해 표준 SQL 언어를 사용해 파일을 쿼리하며, Presto 엔진을 기반으로 하고 있다. 이 엔진은 SQL 언어를 사용한다.

Athena는 서버리스이며 S3 버킷에 있는 데이터를 직접 분석한다.

CSV, JSON, ORC, Avro, Parquet과 같은 다양한 형식을 지원하며 가격은 데이터를 스캔할 때마다 TB 기준 5.00 달러의 비용을 지불한다.

Athena는 종종 QuickSight라는 도구와 함께 사용되어 리포트 및 대시 보드를 생성한다.
QuickSight는 Athena와 그리고 S3와 연결된다.

Athena의 사용 사례는 향상된 쿼리, 비즈니스 인텔리전스, 분석, 보고 및 AWS 서비스에서 기원하는 모든 종류의 로그를 분석 및 쿼리하는 것이다.

예를 들어 VPC Flow Log, Load Balancer Log, CloudTrail 등이 될 수 있다.

시험에서는 S#에서 서버리스 SQL 엔진을 사용해 데이터를 분석해야 할 때 Athena를 고려할 수 있다.

Athena는 **성능 향상**을 할 수 있다.
데이터 스캔할 때 테라바이트 당 비용을 지불하므로 더 적은 데이터를 스캔할 유형의 데이터를 사용해야 한다.

이를 위해 비용 절감을 위해 Column 데이터 형식을 사용할 수 있으며, 필요한 열만 스캔하게 된다.
따라서 Athena에 권장되는 형식은 Apache Parquet 및 ORC이며, 이는 매우 큰 성능 향상을 제공할 것이다.

또한 Apache Parquet 또는 ORC 형식으로 파일을 변환하려면 Glue와 같은 서비스를 사용해야 한다.

Glue는 ETL 작업으로 데이터를 변환하는 데 매우 유용할 수 있다.

또한 더 적은 데이터를 스캔하려면 데이터를 압축해야 한다. 여러 가지 압축 메커니즘이 있다.

특정 열에서 항상 쿼리를 실행할 것으로 알고 있다면 데이터 세트를 파티션화할 수 있다.

데이터를 파티션화하면 S3 버킷에 전체 경로가 슬래시로 나뉘며 각 슬래시는 다른 열 이름 및 특정 값이 된다.
따라서 S3에서 어떤 폴더와 경로에서 데이터를 스캔해야 하는지 정확하게 알 수 있도록 데이터를 S3에 파티션으로 구성한다.

예시: s3://~~~PathtoTable/<PARTITION_COLUMN_NAME>=<VALUE>
non hive style 예시: elb/plaintext/2015/01/01/part-r-00000-ce65fca5-d6c6-40e6-b1f9-190cc4f93814.txt
hive style 예시: s3://athena-examples/flight/parquet/year=1991/month=1/day=1/

Athena에서 쿼리를 실행하고 특정 연도, 특정 월 및 특정 일에 대한 필터를 설정하면 Amazon S3에서 데이터를 가져올 정확한 폴더를 알 수 있으며, 따라서 데이터의 일 부분만 검색한다. 이는 매우 효과적인 파티셔닝을 갖게 된다.

또한 너무 작은 파일은 사용하지 않는 것이다.

S3에 많은 작은 파일이 있는 경우 더 큰 파일(128 MB 이상)이 있는 경우보다 성능이 좋지 않다.

더 큰 파일은 스캔 및 검색이 더 쉬워 선능이 향상된다.

Athena의 또 다른 기능은 **연합 쿼리(Federated Query)**이다.

Athena는 S3의 데이터를 쿼리하는 것 외에 실제로는 어디에서나 데이터를 쿼리할 수 있다.
예를 들어 관계형 또는 비관계형 데이터베이스, 객체 및 사용자 지정 데이터 소스 등 AWS 또는 온프레미스에서 쿼리할 수 있다.

Data Source Connector를 사용해서 위와 같은 작업이 가능하다.
이는 람다 함수이며 해당 람다 함수는 다른 서비스에서 Federated Query를 실행한다.

한 번 호출로 인해 여러 데이터 원본에 걸쳐 통합 SQL 쿼리를 실행하는 것.

예를 들어 CloudWatch Logs, DynamoDB, RDS 등이 될 수 있다.

실제로 구성을 보면 Athena - Lambda(Data Source Connector) - ElastiCache, DocumentDB, DynamoDB 등의 서비스이다.

Federated Query는 ElastiCache, DocumentDB, DynamoDB, RedShift, Aurora, SQL server, MySQL, EMR 서비스의 HBase 또는 온프레미스 데이터베이스를 포함한 쿼리를 실행할 수 있다.

실행한 쿼리의 결과물은 다시 S3로 저장할 수 있다.

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

S3에서 객체 암호화에 대해 알아보자

S3 버킷에서는 네 가지 방법을 사용해 객체를 암호화할 수 있다.

그 중 하나인 서버 측 암호화 SSE를 알아보자. SSE는 여러가지 형태가 있다.

SSE-S3는 Default로 활성화 되어 있는 암호화이다.
사용자는 키에 액세스 할 수 없고 AWS에서 처리, 관리 및 소유하는 key를 사용한다.

객체는 AWS에 의해 서버 측에서 암호화 되고 암호화 보안 유형은 AES-256이다.

SEE-S3 메커니즘을 사용하기 위해서는 헤더를 "x-amz-server-side-encryption": "AES256" 로 설정해야 한다.

SSE-S3는 새 버킷 및 새 객체에 대해 기본적으로 활성화 되어 있어 올바른 헤더와 함께 파일을 업로드하면 된다.

과정은 이렇다.
사용자는 올바른 헤더와 함께 파일을 업로드하고 업로드 된 객체는 S3가 자체적으로 가지고 있는 키와 함께 암호화 되어 Bucket에 파일이 올라간다.

SSE-KMS에 대해 알아보자

이번에는 AWS 및 S3 서비스가 소유한 키를 의존하는 대신 KMS 서비스를 사용해 자체 키를 관리하는 것이다.

KMS를 사용하는 이점은 키에 대한 사용자 제어를 갖고 있어 KMS 내에서 키를 생성하고 KMS에서 키를 사용할 때마다 모든 것을 로깅하는 AWS 서비스인 CloudTrail을 사용해 키 사용을 감사할 수 있다는 것이다.

그래서 "x-amz-server-side-encryption": "aws:kms" 헤더가 있어야 하며, 헤더가 있다면 객체는 서버 측에서 암호화 된다.

과정은 이렇다.
다른 헤더를 사용해 객체를 업로드하고 헤더에서 실제로 사용할 KMS 키를 지정하면 객체가 다 업로드 된 뒤 지정된 KMS 키와 함께 암호화 되어 Bucket에 파일이 올라간다.

SSE-KMS에는 일부 제한이 있다.

앞으로 S3에서 파일을 업로드하고 다운로드하는 경우 KMS 키를 활용해야 한다.

KMS 키에는 자체 API가 있는데, GenerateDataKey나 복호화할 때 사용하는 Decrypt API를 사용하므로 KMS 서비스에 API 호출을 수행하게 된다.

이러한 각 API 호출은 KMS API 호출 제한(quota)에 기여하게 되며, Region에 따라 초당 5,000에서 30,000개의 요청이 있다.

Service Quotas는 증가할 수 있지만, 매우 높은 처리량을 갖는 S3 버킷이 있고 모든 것이 KMS 키를 사용해 암호화된 경우에는 스레드 링크 유형의 사용 사례로 이어질 수 있다.
_시험에 이 부분이 나올 수 있다._

다음은 SSE-C 유형의 암호화이다.

이번에는 키가 AWS 외부에서 관리되지만 키를 AWS로 전송하기 때문에 여전히 서버 측 암호화이다.
그런데 Amazon S3에는 제공한 암호화 키를 저장하지 않는다.

사용된 후에 폐기 된다.

따라서 이 경우에는 키를 S3로 전송하기 때문에 HTTPS를 반드시 사용하고 모든 요청에 대해 HTTP 헤더의 부분으로서 key를 포함시켜야 한다.

과정은 이렇다.
사용자는 파일과 함께 키를 업로드하지만 사용자는 키를 AWS 외부에서 관리한다. 그런 다음 Amazon S3는 클라이언트가 제공한 키와 객체를 사용해 일부 암호화를 수행하고 파일을 암호화된 상태로 S3 버킷에 넣는다.

파일을 읽기 위해서는 사용자는 다시 파일을 암호화하는 데 사용된 키를 제공해야 한다.

마지막으로 클라이언트 측 암호화(Client-Side Encryption)에 대해 이야기 해보자

클라이언트 측 암호화는 Client-Side Encryption Library와 같은 클라이언트 라이브러리를 활용하면 구현하기 더 쉽다.

클라이언트 측 암호화는 클라이언트가 데이터를 S3로 보내기 전에 스스로 데이터를 암호화해야 한다는 것이다.

또한 데이터를 S3에서 검색(조회)할 때 데이터의 복호화는 S3 외부(클라이언트)에서 발생한다.

따라서 클라이언트가 key와 암호화 주기를 완전히 관리한다

과정은 이렇다.
파일과 AWS 외부에 있는 클라이언트의 키가 있다. 클라이언트 자체가 암호화를 제공하고 수행하므로 암호화된 파일이 생성된다. 그리고 이 파일은 업로드를 위해 Amazons S3로 보낼 수 있다.

Encryption in transit 전송 중 암호화도 있다.

Encryption in flight 는 SSL/TLS라고도 불린다.

기본적으로 S3 버킷에는 암호화되지 않는 HTTP 엔드포인트와 암호화가 포함된 HTTPS 엔드포인트 두 가지가 있다.

웹 사이트를 방문할 때 녹색 잠금 아이콘이나 그냥 잠금 아이콘을 보면 일반적으로 이것은 in flight 암호화를 사용하고 있음을 나타낸다.

사용자와 대상 사버 간의 연결이 안전하고 완전히 암호화되어 있다고 보면 된다.

따라서 S3를 사용할 때 데이터의 안전한 전송을 위해 HTTPS를 사용하는 것이 권장된다.
그리고 in flight 암호화를 강제로 적용 시키는 방법이 버킷 정책을 사용하면 된다.

S3 버킷에 버킷 정책을 첨부하고 Condition이 "aws:SecureTransport": "false" 인 경우 GetObject 작업을 거부하도록 하는 정책을 첨부하면 된다.

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

Default 암호화와 버킷 정책에 대해 간단히 알아보자

모든 버킷에는 기본적으로 SSE-S3 암호화가 적용된다.

새로운 객체 또는 버킷에도 자동으로 적용된다.

그러나 SSE-KMS와 같은 다른 기본 암호화로 변경할 수도 있다.

그럼에도 불구하고 버킷 정책을 사용해 올바른 암호화 헤더 없이 S3 객체를 넣는 모든 API 호출을 거부해 강제로 암호화 할수도 있다.

예를 들어 SSE-KMS 또는 SSE-C의 경우이다.

버킷 정책은 항상 기본 암호화 설정보다 먼저 평가된다.

**정리**
- 새로운 객체 또는 버킷에 자동적으로 SSE-S3 암호화가 적용되며, 모든 버킷에는 기본적으로 SSE-S3 암호화가 적용된다.
- 꼭 SSE-S3를 사용해야만 하는 것은 아니며 SSE-KMS와 같은 다른 암호화를 기본 암호화로 변경할 수도 있다.
- 버킷 정책을 사용해 올바른 암호화 헤더 없이 S3 객체를 PUT하는 API 호출을 거부해 강제로 암호화할 수도 있다.
- 버킷 정책은 항상 기본 암호화 설정보다 먼저 평가된다.

## **[SAA/DVA] S3 CORS**

CORS는 Cross-Origin Resource Sharing의 약자이다.

동일한 출처는 동일한 스키마, 동일한 호스트 및 동일한 포트를 가진 것이다.

CORS는 웹 브라우저 기반의 보안 매커니즘으로, 주 Origin을 방문하면서 다른 Origin으로의 요청을 허용하거나 거부하는 데 사용한다.

따라서 웹 브라우저가 한 웹 사이트를 방문하고 다른 웹 사이트로 요청을 할 경우 해당 요청은 다른 출처이며 CORS 헤더를 사용해 요청을 허용하지 않는 한 충족되지 않는다.

이러한 헤더는 Access-Control-Allow-Origin 헤더로 불린다.

예를들어 https://www.example.com 과 https://www.other.com 도메인이 있을 때 웹 브라우저는 example 도메인에 접속해 emaple 도메인에 있는 index.html 파일이 다른 웹 서버에서 일부 이미지를 가져온다고 가정해보자

웹 브라우저에는 보안이 내장되어 있고, In Flight 요청을 먼저 other에 보내게 된다.

그러면 웹 서버는 이 헤더를 사용해 example 도메인에 대해 GET, PUT, DELETE 등의 메소드를 허용하는지 여부를 알려줄 것이다.
이렇게 알려주는 정보가 담긴 헤더를 CORS 헤더라고 한다.

웹 브라우저가 이 CORS 헤더만으로도 충족한다면 요청을 수행해 이미지 파일을 검색하고 호출을 수행할 것이다.

S3에서는 클라이언트가 S3 버킷에게 CORS 요청을 수행하는 경우 올바른 CORS 헤더를 활성화 해야 한다.

빠르게 수행할 수 있는 한 가지 방법은 특정 출처를 허용하거나 아니면 모든 출처를 허용하는 것이다.

_시험 문제에서 매우 인기 있음_

**정리**
- CORS는 웹 브라우저 기반의 보안 매커니즘으로, 주 Origin에서 다른 Origin으로의 요청을 허용하거나 거부하는 데 사용한다.
- CORS는 Cross-Origin Resource Sharing의 약자이다.
- Same Origin이라는 것은 동일한 스키마, 동일한 호스트 및 동일한 포트를 가진 출처이다.
- 웹 브라우저가 한 웹 사이트를 방문하고 다른 웹사이트에 요청을 해야 한다면, 다른 오리진에서 CORS 헤더를 사용해 요청을 허용하지 않는 한 해당 요청은 처리되지 않는다. 이 헤더를 Access-Control-Allow-Origin 헤더라고 부른다.
- CORS를 웹 서버에서 구성하고 특정 다른 Origin에 대해 GET,PUT 등의 메서드를 허용한다고 가정하면 웹 브라우저에서 다른 Origin으로 요청을 보내 파일을 가져오고 호출을 할 수 있다.
- S3에서는 클라이언트가 S3 버킷에 Cross Origin Request를 보내면 올바른 CORS 헤더를 활성화해야 한다.(시험에 자주 나옴) 특정 Origin을 허용하거나 *로 허용하여 모든 오리진을 빠르게 허용할 수 있다.
- 시험 문제로 자주 나온다.

## **[SAA/DVA] S3 MFA Delete**

S3에서 MFA가 필요한 순간은 Object 버전을 영구적으로 삭제하려는 경우에 필요하다.

위 경우에는 영구적인 삭제에 대한 보호 조치이거나 버킷에서 버전 관리를 중지하려는 경우이다.
이 경우 모두 한번 수행하면 복구할 수 없기 때문에 MFA가 필요할 것이다.

그러나 버전 관리를 활성화하거나 삭제된 버전을 나열하려는 경우에는 MFA가 필요하지 않을 것이다.

MFA 를 사용하려면 버킷에서 먼저 버전 관리를 활성화해야 한다.

또한 MFA Delete를 활성화하거나 비활성화할 수 있는 것은 버킷 소유자인 루트 계정뿐이다.

주로 기억해야할 부분은 MFA Delete가 특정 객체 버전의 영구적인 삭제를 방지하기 위한 추가적인 보호 기능임을 기억하면 된다.

**정리**
- S3에서는 객체 버전을 영구적으로 삭제하거나 버킷의 버전 관리를 중지할 때 MFA가 필요하다.
- 버전 관리를 활성화하거나 삭제된 버전을 나열하는 등의 작업에는 MFA가 필요하지 않는다.
- MFA 삭제를 사용하려면 먼저 버킷에서 버전 관리를 활성화해야 하며, 버킷 소유자인 루트 계정만 MFA 삭제를 활성화하거나 비활성화할 수 있다.
- MFA 삭제가 특정 객체 버전의 영구적인 삭제를 방지하기 위한 추가적인 보호 기능임을 기억하면 된다.

## **[SAA/DVA] S3 Access Logs**

S3 Access Log에 대해 알아보자

감사 목적으로 S3 버킷으로 수행된 모든 액세스를 로깅하는 것이 좋다.

어떤 계정에서든지 권한이 부여 되었는지에 대한 여부와 상관없이 S3 버킷으로의 모든 요청이 대상 S3 버킷과 다른 S3 버킷에 파일로 기록된다.

이 데이터를 Athena와 같은 데이터 분석 도구를 사용해 분석할 수 있다.

대상 로깅 버킷은 동일한 AWS 리전에 있어야 한다.

과정은 이렇다.
먼저 사용자는 S3 버킷에 대해 요청을 하고 그 다음 액세스 로그를 활성화한다.

그리고 이 모든 요청이 로깅 버킷에 기록된다.

Access Log를 사용할 때 주의해야 할 점이 있다.

모니터링 버킷과 로깅 버킷을 동일하게 설정하면 안된다. 동일하게 설정하면 로깅 루프가 생성되어 끝없이 반복되어 버킷 크기가 기하급수적으로 커져 많은 비용이 발생할 수 있다.

**정리**
- S3 Access Log는 감사 목적으로 S3 버킷에 대한 모든 액세스를 로그로 남기고 싶을 경우 사용한다.
- 계정에 관계없이 S3 버킷에 대한 승인 또는 거부 등의 모든 요청이 다른 S3 버킷의 파일로 기록된다.
- 기록된 로그는 Athena와 같은 데이터 분석 도구를 사용해 분석할 수 있다.
- 로깅의 대상 버킷은 동일한 AWS Region에 있어야 한다.
- Access Log를 사용할 경우 절대로 로깅 버킷을 모니터링 중인 버킷과 동일한 버킷으로 설정하지 않아야한다. 로깅 루프가 발생해 버킷 크기가 기하 급수적으로 늘어나 많은 비용이 발생하기 때문이다.

## **[SAA/DVA] S3 Pre-signed URLs**

Pre-Signed URL에 대해 이야기 해보자

이 URL은 S3 콘솔, CLI, SDK를 사용해 생성할 수 있는 URL이며, 만료 시간이 있다.
콘솔을 사용하면 최대 12시간이고 CLI나 SDK로 생성하는 경우 최대 168시간(7일)까지 사용 가능하다.

Pre-Signed URL을 생성할 때 해당 URL을 받게 될 사용자는 GET, PUT을 위해 그 URL을 생성한 사용자의 권한을 상속받는다.

사용 사례는 S3 버킷이 Private이고 AWS 외부의 누군가에게 한 파일에 대한 액세스를 제공하려는 경우이다.

파일 또는 버킷을 Public으로 만들고 싶지 않으며 어떠한 보안도 제거하고 싶지 않다.

그래서 버킷 소유자 또는 사용자로서 이 파일에서 pre-signed 된 url을 생성하고 S3 버킷에서 URL을 제공받게 된다. 그 다음 제한된 시간동안 대상 사용자에게 전송하게 된다.

그러면 URL을 제공받은 사용자는 S3 버킷에서 파일에 액세스하기 위해 이 URL을 사용하게 되고, 그 결과로 S3 버킷에서 파일을 받아서 사용자가 다운로드할 수 있게 된다.

pre-signed url은 특정 파일의 임시 액세스를 위한 매우 일반적인 사용 사례이다.

예를 들어 로그인한 사용자만 S3 버킷의 프리미엄 비디오를 다운로드하도록 허용하거나, 사용자가 S3 버킷의 특정 위치에 파일을 업로드할 수 있도록 임시로 허용하는 것이다.

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

Glacier Vault Lock에 대해 이야기 해보자

Glacier Vault를 잠금 처리해 WORM 모델을 채택하려는 것이다.
WORM은 한번 쓰고 여러번 읽을 수 있는 모델을 말한다.

객체가 Glacier Vault에 삽입되고 Vault 자체에 Vault Lock Policy가 있으면 객체가 더 이상 삭제되지 않으며 관리자 또는 AWS도 삭제할 수 없다.

규정 준수 또는 데이터 보존과 같은 법적인 요구 사항에 매우 유용하다.

S3 버킷 전체 수준의 잠금 정책 뿐만 아니라 버킷 내의 각 객체에 대한 잠금을 설정하는 방법도 있다.

S3 Object Lock을 활성화하려면 먼저 Versioning을 활성화해야 한다.
또한 WORM 모델을 채택할 수 있게 된다.

따라서 특정 객체 버전이 지정된 시간 동안 삭제되지 않도록 S3 Object Lock을 수행하려는 것이다.

두 가지 retention 모드가 있다.

첫째로는 compliance mode가 있다.

compliance mode는 S3 Glacier Vault Lock에서 본 것과 유사하다.

즉, 루트 사용자를 포함한 모든 사용자가 객체 버전을 덮어쓰거나 삭제할 수 없다.
그리고 보유 기간 모드 자체를 변경하거나 보유 기간을 단축할 수 없다.

좀 더 유연성을 원한다면 governance retention mode가 있다.

대부분의 사용자는 객체 버전의 잠금 설정을 덮어쓰거나 삭제할수 없으나, 일부 사용자인 관리자 사용자는 IAM을 통해 제공되는 특별한 권한을 부여받아 잠금 설정을 변경하거나 객체를 직접 삭제할 수 있다.

governance mode는 보유 기간을 설정하되 compliance mode와는 다르게 기간을 필요 시 연장할 수 있다.

또한 object lock과는 별개로 객체에 Legal hold를 적용할 수 있다.

Legal hold는 보유 기간과 관계없이 S3 버킷의 모든 객체를 영구히 보호하며, 이전에 설정한 보유 기간과는 독립적이다.

따라서 Legal hold를 적용하면 해당 객체가 영구히 보존된다.

S3 PutObjectLegalHold IAM 권한을 갖는 사용자는 어떤 객체든 Legal hold를 놓거나 제거할 수 있다.

이는 관리자가 PutObjectLegalHold 권한을 사용해 객체를 보호하고, 법적 조사가 종료되면 이 권한을 사용해 다시 제거하면 된다.

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

S3 Access Points 에 대해 이야기 해보자

S3 버킷에 많은 데이터가 있는 예를 들어보자

finance 데이터, sales 데이터가 있으며 다양한 사용자나 그룹이 자신의 데이터에 액세스하려고 한다.

많은 사용자가 있는 경우 S3 버킷 정책이 점점 복잡해질 수 있다.
그리고 사용자와 데이터가 추가되면 될수록 관리하기가 어려워질 것이다.

Access Point를 설정하면 관리하기가 쉬워진다.

예를 들어 finance 액세스 포인트를 생성하고, finance 데이터에 연결할 수 있다. 연결은 finance 접두사에 대한 액세스 포인트 정책을 정의하면 된다.

sales 데이터도 동일하다.

분석을 위해 analytics 액세스 포인트를 가져야 한다면, finanace와 sales에 모두 접근 가능하지만 읽기 전용 액세스로 정의할 수 있다.

이렇게 하면 보안에 대한 관리를 S3 버킷 정책에서 액세스 포인트로 옮길 수 있다.

각 액세스 포인트마다 자체 보안이 있으므로 적절한 IAM 권한이 있으면 사용자가 특정 액세스 포인트에 액세스하고 버킷의 특정 부분에만 연결할 수 있다.

액세스 포인트는 고유한 DNS 이름이 있다. 이것이 액세스 포인트에 연결하는 방법이다.
인터넷 또는 VPC를 통한 Private 트래픽으로 연결할 수 있다.

S3 액세스 포인트의 VPC Origin에 대한 경우 이를 Private로 접근할 수 있도록 정의할 수 있다.

예를 들어 VPC의 EC2 인스턴스에서 인터넷을 통해 이동하지 않고 VPC 액세스 포인트를 통해 S3 버킷에 액세스할 수 있다.

따라서 VPC Origin을 통해 액세스 포인트에 연결하려면 VPC Endpoint를 생성해야 한다.

VPC에 존재해 이를 통해 VPC 원본을 통해 Access Point로 Private 연결할 수 있다.

VPC 엔드포인트에는 정책이 있으며 이 정책은 대상 버킷과 액세스 포인트에 액세스를 허용해야한다.

**정리**
- S3 Access Points는 예를 들어 한 버킷에 많은 데이터가 있는 경우 많은 사용자, 데이터가 추가되는 경우 권한 관리나 보안 관리를 하기 위해 사용한다.
- Finance Data, Sales Data, Analytics Data 가 있다고 가정했을 때 Finance에 대한 액세스 포인트를 생성하고 Finance 데이터에 접두사 기반의 액세스 포인트 정책을 정의하면 사용자나 그룹이 데이터에 액세스하는 데 편리해진다.
- 액세스 포인트마다 자체 보안인 액세스 포인트 정책이 있어 IAM 권한이 있으면 사용자가 특정 액세스 포인트에 액세스하고 버킷의 특정 부분에만 연결 가능하다. 
- 액세스 포인트는 고유한 DNS 이름이 있다. 이를 통해 액세스 포인트에 연결할 수있고, 인터넷 또는 VPC를 통해 Private 트래픽으로 연결할 수 있다.
- VPC Origin에서 Access Point에 연결하려면 VPC Endpoint를 생성해 Private로 접근할 수 있도록 정의할 수 있다.
  - VPC Endpoint는 내부적으로 정책이 있으며 이 정책은 대상 버킷과 Access Point에 대한 액세스를 허용해야 한다.

## **S3 Multi-Region Access Points**

S3에서는 멀티 리전 액세스 포인트를 정의할 수도 있다.

이 액세스 포인트를 사용하면 여러 리전의 여러 S3 버킷에 걸쳐 확장되는 글로벌 엔드포인트를 가질 수 있다.

이 엔드포인트를 통해 액세스하면 엔드포인트가 알맞은 리전에 알맞은 S3 버킷으로 리디렉션 된다.

요청이 가장 가까운 S3 버킷으로 동적으로 라우팅되어 가장 낮은 대기 시간을 제공하며, 모든 액세스 포인트에 등록된 S3 버킷의 데이터가 동일하고 이중 방향 복제가 이뤄진다.

또한 페일오버 제어도 있으므로 모든 버킷을 Active 상태로 정의하거나 일부 버킷을 Backup으로 사용해 문제가 발생한 경우 페일오버를 수행할 수 있다.

예를 들어 us-east, ap-northeast, eu-west 세 가지 리전을 사용하는 경우 버킷 내 모든 데이터가 복제되고, 모든 버킷 간에 복제 규칙을 가져야 한다.

애플리케이션이 S3 버킷 Object를 요청하면 가장 낮은 대기 시간을 가진 리전으로 자동으로 라우팅 된다.

특정 리전이 다운된 경우 다른 리전으로 리디렉션될 수 있다. 그리고 Active/Passive 또는 Active/Active 페일오버가 되어서 객체를 요청할 때 Active 상태의 버킷으로 이동하게된다.

페일오버 제어는 Active/Passive 뿐만 아니라 Active/Active 유형의 설정에도 적용된다.

**정리**
- S3는 멀티 리전 액세스 포인트를 사용해 여러 리전의 여러 S3 버킷에 걸쳐 확장되는 글로벌 엔드포인트를 가질 수 있다.
- 엔드포인트를 통해 액세스하면 엔드포인트가 알맞은 경로의 리전과 S3 버킷으로 리디렉션 해준다.
- 요청이 가장 가까운 S3 버킷으로 동적으로 라우팅되며, 가장 낮은 대기 시간을 제공하고, 모든 액세스 포인트에 등록된 S3 버킷의 데이터가 동일하고 양방향 복제가 이뤄진다. 
- 모든 버킷 간에 복제 규칙을 가져야 한다.
- 모든 리전이 동기화되고 페일오버 기능이 있어 모든 버킷을 Active 또는 일부 버킷을 Backup으로 정의할 수 있어 특정 Region에 문제가 생겨도 페일오버를 수행할 수 있다.
- 애플리케이션이 S3 Bucket에 Object를 요청하면 가장 낮은 대기 시간을 가진 리전으로 자동으로 라우팅된다.

## **S3 VPC Endpoints**

S3를 위한 VPC 엔드포인트 게이트웨이의 작동 방식에 대해 알아보자

기본적으로 S3 버킷은 AWS 클라우드에 존재하지만, 액세스하려면 일반적으로 Public 인터넷을 통해 액세스해야 한다.

예를 들어 Public 서브넷에 배포된 인스턴스가 S3 버킷의 Public 엔드포인트를 통해 Public 인터넷을 통해 접근하고 파일이 이러한 경로를 통해 전송된다.

S3 버킷은 버킷 정책을 통해 "aws:SourceIp" 조건 키를 이용해서 특정 Public IP 기반의 요청만 허용할 수 있다.

그러나 S3 버킷에 대한 Private 액세스를 활성화하려면, 인스턴스를 Private 서브넷에 배치하고 VPC 엔드포인트 게이트웨이를 생성해야한다.

VPC 엔드포인트 게이트웨이는 인스턴스에서 S3 버킷으로 직접 Private 연결을 설정하고, Bucket 정책을 이용해 VPC 엔드포인트 게이트웨이를 통해 액세스를 강제할 수 있다.

이 경우 "aws:SourceVpce" 를 사용해 하나 이상의 엔드포인트를 지정하거나, 미리 정의된 VPC 내의 모든 가능한 VPC 엔드포인트를 포함하는 "aws:SourceVpc" 조건을 지정할 수 있다.

**정리**
- S3 버킷에 액세스하기 위해서는 일반적으로 Public 인터넷을 통해야 한다. 이 방법을 통해 접근하기 위해서는 "aws:SourceIp" 조건 키를 이용해서 특정 Public IP 기반의 요청을 허용해야 한다.
- S3 버킷에 대한 Private 액세스를 활성화하려면 인스턴스를 Private 서브넷에 배치하고 VPC Endpoint Gateway를 생성해야한다.
- VPC Endpoint Gateway는 인스턴스에서 S3 버킷으로 직접 Private 연결을 설정하고 Bucket Policy를 이용해 VPC Endpoint Gateway를 통하게끔 액세스를 강제할 수 있다.
- "aws:SourceVpce"를 이용해 하나 이상의 Endpoint를 지정하는 방법, "aws:SourceVpc"를 이용해 VPC 내의 모든 VPC Endpoint를 포함하게끔 Bucket Policy 에서 설정 가능함

## **[CCP/SAA] AWS Snow Family Overview**

Snow Family는 AWS의 Edge에서 데이터를 수집하고 처리하는 데 사용되거나 AWS로 데이터를 이동하는 데 사용될 수 있다.

Snow Family에는 Snowcone, Snoball Edge 및 Snowmobile이 있다.
사용 사례는 데이터 마이그레이션 및 엣지 컴퓨팅을 위함이다.

엣지 컴퓨팅을 위해서는 Snowcone 및 Snowball Edge를 사용할 수 있다.

먼저 데이터 마이그레이션에 대해 알아보자

Snow Family를 사용해 데이터 마이그레이션을 하는 이유는 무엇인가?

네트워크를 통해 많은 양의 데이터를 전송하는 데 많은 시간이 소요될 수 있다.

예를 들어 1Gbits/sec의 네트워크 회선을 통해 100 TB를 전송하려면 12일이 걸릴 것이다. 종종 데이터를 빠르게 AWS로 이동시키고 싶은 경우가 있다.

그리고 망 Transfer가 작은 경우에도 연결성이 제한되어 있거나 대역폭이 제한되어 있을 수 있다.

이러한 경우에는 네트워크를 통해 데이터를 전송하는 것이 비용이 발생할 수 있다.

위와 같은 이유로 인해 Snow Family가 필요할 수 있다.

Snow Family는 오프라인 장치로 데이터 이전을 수행할 수 있게 해준다.

AWS는 실제 물리적 장치를 우체국을 통해 보내고, 데이터를 장치에 로드한 다음 장치를 다시 AWS로 보내서 자체 인프라에 연결하여 데이터를 가져오거나 내보낼 수 있다. 이는 AWS로 데이터를 전송하는 물리적 경로를 통해 이뤄지고, 네트워크의 경로가 아니다.

Snowball Edge는 테라바이트 또는 페타바이트의 데이터를 AWS로 이동하는 데 사용될 수 있다. 그리고 데이터 전송 작업 당 비용을 지불하게 된다.

Snowball Edge 내의 인터페이스는 블록 스토리지 또는 Amazon S3 호환 객체 스토리지를 제공할 것이다.

Snowball Edge는 두 가지 유형이 있다.

Snowball Edge Storage opimized

- 하드웨어 디스크 용량이 80 TB, 블록 볼륨 또는 S3 호환 객체 스토리지에 작동
  Snowball Edge Compute Optimized
- 용량이 28TB 또는 42 TB

용량을 더 많이 확보하려면 Storage Optimized를 선택하는 것이 좋다.

Snowball Edge의 데이터 전송을 위한 사용 사례로는 대규모 데이터 클라우드 마이그레이션, 데이터 센터 비활성화 또는 AWS로 데이터 백업을 통한 재해 복구 등이 있다.

Snowcone은 매우 작은 휴대용 장치로, 건조하고 안전하며 가혹한 환경에서도 견딜 수 있으며 데이터 양이 적은 환경에 적합하다. 무게는 약 2.1 킬로그램이다.

엣지 컴퓨팅, 스토리지 및 데이터 전송에 사용될 것이다.

두 가지 유형이 있다.

Snowcone

- HDD 스토리지, 8 TB
  Snowcone SSD
- SSD 스토리지, 14 TB

Snowball이 맞지 않는 공간 제약 환경에 사용할 수 있으며, 배터리와 케이블은 별도로 제공해야 한다.

데이터를 AWS로 보내는 방법은 두가지 옵션이 있다.

데이터를 배송하여 오프라인으로 데이터를 보내는 방법과
데이터를 캡처한 후 인터넷 연결이 있는 데이터 센터(예: 어디든지)에서 장치를 연결한 다음 AWS DataSync 서비스를 사용해 데이터를 AWS로 다시 전송할 수 있다.

마지막으로 Snowmobile이 있다.
Snowmobile은 실제 트럭이다.

Snowmobile을 사용하면 EB(Exabyte, EB)의 데이터를 전송할 수 있다.

Snowmobile마다 100 PB의 용량이 있으며, EB의 데이터를 전송하려면 10대의 Snowmobile을 주문해야 한다.

높은 보안 수준과 온도 제어, GPS, 24/7 비디오 감시 기능이 있으므로 데이터를 안전하게 전송할 수 있다.

10 PB 이상의 데이터를 전송하는 경우 Snowball보다 더 나은 사용 사례가 된다.

AWS에서 권장하는 마이그레이션 크기는 Snowcone은 최대 24 TB, Snowball Edge는 페타바이트까지이며, 데이터를 오프라인으로 전송해야 한다.

Snowmobile의 경우 EB의 데이터까지 사용사례이다.

데이터 동기화 Agent가 Snowcone에 사전 설치되어 있으며 네트워크에 연결하여 DataSync를 사용해 데이터를 네트워크를 통해 전송할 수도 있다.

Snow Family 장치를 사용하는 법은 아래와 같다.

먼저 콘솔에서 장치를 요청해 배송을 받고, 서버에 Snowball 클라이언트를 설치하거나 AWS Apps Hub를 사용한다.
그 다음 Snowball을 서버에 연결하고 클라이언트에서 파일을 복사하기 시작한다. 작업이 완료되면 장치를 다시 발송한다.
E-Ink 마커 덕분에 장치가 적절한 AWS 시설로 직접 이동하게 되고 데이터가 S3 버킷에 로드된다.
Snowball은 최고 보안 조치에 따라 완전히 삭제 된다.

또한 이제 마이그레이션 용도로만 Snow Family를 사용하지는 않는다. 두 번째 사용 사례는 엣지 컴퓨팅이다.

엣지 컴퓨팅은 데이터가 생성되는 동안 Edge Location에서 데이터를 처리하는 것이다.

Edge Location은 실제로 인터넷이 없거나 클라우드에서 멀리 떨어진 곳을 말한다.
예를 들어 도로에 트럭이나 바다에 배가 있거나 지하의 광산이 있을 수 있다.

이러한 모든 것들은 데이터를 생성할 수 있지만 인터넷 연결이 없거나 제한된 경우가 있을 수 있다. 그럼에도 불구하고 이러한 위치에서 계산 및 데이터 처리를 실행하려고 하는 경우 엣지 컴퓨팅이 필요하다.

엣지 컴퓨팅을 하려면 Snowball Edge 장치 또는 Snowcone을 주문해 이러한 엣지 위치에 장치를 설치하고 엣지 컴퓨팅을 시작한다.

사용 사례로는 데이터를 사전 처리하거나 엣지에서 머신 러닝을 수행하고, 미디어 스트밀의 사전 트랜스코딩 등이 있다.

데이터를 AWS로 다시 전송해야 할 경우 Snowcone 또는 Snowball Edge 장치를 다시 발송할 수 있다.
즉, 데이터가 생성되는 곳 긑처에서 처리한 다음 AWS로 전송하는 방식이다.

엣지 컴퓨팅을 위해서는 Snowcone과 Snowcone SSD가 있다.

이는 2 CPUs, 4GB memory, 유/무선 액세스를 제공하며 USB-C 전원 또는 옵션 배터리를 사용한다.

Compute optimized Snowball Edge 가 있는데
이는 104 vCPU, 416GB RAM, 옵션 GPU(비디오 처리/머신러닝 용), 28TB NVMe 또는 42 TB HDD의 스토리지를 제공한다. 16노드까지 스토리지 클러스터링도 가능해 총 스토리지 크기를 늘릴 수 있다.

Storage optimized Snoball Edge는
40 vCPU, 80GB RAM, 80TB 스토리지를 제공한다.

Snowcone 기기 모두 EC2 인스턴스와 Lambda 함수를 실행할 수 있으며, Lambda의 경우 AWS IoT Greengrass 서비스를 활용한다.

기기는 장기간 배치할 수 있으며 실제로 1년에서 3년동안 렌탈할 수 있는 장기 배치 옵션과 할인 가격이 있다.

OpsHub라는 Snow Family 제품군이 있다.

OpsHub는 컴퓨터나 랩톱에 설치하는 프로그램으로 클라우드에서 사용하는 게 아니다. 설치 후 연결하면 그래픽 인터페이스를 통해 Snow 기기에 연결, 구성, 사용할 수 있어 편리하다. CLI 도구를 사용하지 않아도 된다는 말이다.

OpsHub를 통해 단일/클러스터 기기 잠금 해제 및 구성, 파일 전송, 인스턴스 실행 및 관리(Snow Family에서 실행되는 EC2 인스턴스), 기기 메트릭 모니터링, 기기에서 호환 AWS 서비스 실행(EC2 인스턴스, DataSync 또는 네트워크 파일 시스템 사용) 등의 작업을 할 수 있다.

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

FSx는 AWS에서 완전 관리되는 서비스로서 서드파티 고성능 파일 시스템을 시작할 수 있게 해준다.

FSx의 경우 RDS와 비슷한 매니지드 서비스로서의 파일 시스템인 경우이다.

**Amazon FSx for Windows File Server**의 경우

이는 완전히 관리되는 Windows 파일 서버 공유 드라이브이다.
Windows이므로 SMB 프로토콜과 Windows NTFS를 지원한다.

또한 사용자의 보안을 위해 Microsoft Active Directory와 통합된다.

또한 ACL 및 사용자 할당량을 사용한다.

그러나 특이점은 Windows 전용으로 보이지만 Linux EC2 인스턴스에도 마운트할 수 있다는 것이다.

그리고 기존에 온프레미스에 있는 Windows 파일 서버가 있다면 Microsoft Distributed File System(DFS) 기능을 사용해 파일 시스템을 그룹화하여 온프레미스 Windows 파일 서버에 FSx for Windows File Server를 연결할 수 있다.

성능 측면에서 이는 초당 수십 기가바이트, 수백만 IOPS, 수백 페타바이트의 데이터로 확장 가능하다.

저장소 옵션은 매우 낮은 대기 시간, 민감한 워크로드(예: 데이터베이스, 미디어 처리, 데이터 분석)에 적합한 SSD 또는 홈 디렉터리 또는 CMS와 같은 다양한 워크로드에 사용할 수 있는 HDD를 사용할 수 있다.

FSx for Windows File Server에 대한 액세스는 온프레미스 인프라에서 Private 연결을 통해 가능하며, 고가용성을 위해 FSx for Windows File Server를 Multi-AZ로 구성할 수도 있다.

모든 데이터는 재해 복구 목적으로 매일 Amazon S3로 백업 된다.

**Amazon FSx for Lustre**는 대규모 컴퓨팅에 사용되는 분산 파일 시스템이다.

Lustre라는 용어는 Linux와 Cluster에서 파생되었다.

머신 러닝 및 고성능 컴퓨팅 또는 HPC에 사용된다.

비디오 처리, 금율 모델링, 전자 설계 자동화와 같은 응용 프로그램을 사용할 수 있다.

수백 기가바이트의 데이터, 수백만 IOPS 및 서브 밀리초의 대기 시간으로 확장할 수 있다.

저장소는
매우 낮은 대기 시간, IOPS 집중형 워크로드 및 micro 또는 랜덤 파일 작업을 위해 SSD를 사용하거나
대량 및 순차 파일 작업에 대한 처리량 집중형 워크로드의 경우 HDD를 사용할 수 있다.

SSD가 HDD 보다 비용이 더 많이 든다.

S3와의 원활한 통합이 가능하다. 즉, FSx를 통해 S3를 파일 시스템으로 읽을 수 있고, FSx의 계산 결과를 다시 Amazon S3로 쓸 수 있다.

Amazon FSx for Lustre는 온프레미스 서버에서 VPN 또는 Direct Connect를 통해 사용할 수 있다.

FSx의 경우 파일 시스템 배포 옵션을 알아야한다.

Scratch 파일 시스템과 Persistent 파일 시스템이 있다.

**스크래치 파일 시스템**은 임시 저장소이며 데이터가 복제되지 않는다. 파일이 있지만 기본 서버가 실패하면 파일이 손실된다. 그러나 이러한 최적화로 높은 버스트를 얻을 수 있다.

예를 들어 1TB 당 200MB/sec 의 처리량을 얻을 수 있다.

스크래치 파일 시스템의 사용 사례는 데이터의 단기 처리이며 데이터를 복제하지 않고 비용을 최적화하려는 경우이다.

스크래치 파일 시스템의 경우 데이터의 한 가지 사본을 갖는다.

스크래치 파일 시스템의 경우 S3 Bucket을 데이터 저장소로 사용할 수도 있다.

**영속적 파일 시스템**의 경우 장기 저장에 사용된다.

동일한 AZ내에서 복제되며, 기본 서버의 장애가 발생하면 파일이 몇 분 내에 투명하게 교체된다.

영속적 파일 시스템의 사용 사례는 민감한 데이터의 장기 처리와 저장이다.

영속적 파일 시스템의 경우 데이터의 두 가지 사본을 갖는다.

**Amazon FSx for NetApp ONTAP**은 AWS에서 관리되는 NetApp ONTAP 파일 시스템이다.

이 파일 시스템은 NFS, SMB 및 iSCSI 프로토콜과 호환된다.

이미 ONTAP에서 실행 중인 워크로드를 AWS로 이동하기 위해 FSx for NetApp ONTAP 파일 시스템을 사용할 수 있다.

매우 넓은 호환성을 가지고 있다. Linux, Windows 및 MacOS, VMware Cloud on AWS, WorkSpaces, AppStream, EC2, ECS, EKS와 같은 서비스와 함께 작동한다.

Auto Scaling 기능이 있어서 자동으로 축소 되거나 확장 된다.

그리고 복제, 스냅샷을 이용해 복제 기능을 사용한다.

저렴한 비용, 데이터 압축을 할 수 있다.

데이터 중복 제거를 수행할 수 있다.

NetApp ONTAP에서 파일의 중복 항목을 찾을 수 있다.

시점 별 즉시 복제가 가능하여 새로운 워크로드를 테스트하고 싶은 경우 매우 유용하다.

**Amazon FSx for OpenZFS**가 있다. AWS에서 관리되는 OpenZFS 파일 시스템으로, 다양한 버전의 NFS 프로토콜과 호환된다.

사용 사례는 이미 내부 ZFS에서 실행 중인 워크로드를 AWS로 이동하는 것이다. 또한 Linux, MacOS, Windows 등과의 넓은 호환성을 가지고 있다.

매우 높은 성능을 제공한다. 0.5 밀리초 미만의 지연 시간으로 최대 100만 IOPS까지 확장할 수 있으며 스냅샷, 압축 및 저렴한 비용을 지원하지만 데이터 중복을 지원하지는 않는다.

시점 별 즉시 복제를 지원하여 새로운 워크로드를 테스트하는 데 매우 유용하다.

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

FSx for Windows는 Single-AZ 및 Multi-AZ 옵션이 있다.

Single-AZ의 경우 단일 가용 영역 파일 시스템이며, 해당 AZ 내에서만 데이터 복제가 자동으로 수행된다.

Single-AZ는 두 가지 세대가 있다.

Single-AZ 1은 SSD만 있고, Single-AZ 2 는 SSD 및 HDD가 있다.

Multi-AZ를 사용하려면 FSx for Windows Multi-AZ 옵션을 사용하는 것이다.

두 가용 영역이 있고, 두 파일 시스템 간에 동기 복제가 수행된다.

이는 AZ 간에 데이터가 자동으로 복제된다.
동기적이며, 문제가 발생할 경우 자동 장애 조치가 발생한다.

따라서 한 파일 시스템이라도 실패하면 대기 복제로 자동 장애 조치가 수행된다.

FSx for Windows는 2개의 Single-AZ를 사용하고 자체 복제를 수행하는 대신 항상 Multi-AZ를 사용하는 것이 좋다. 장애 조치를 원하는 경우에는 항상 Multi-AZ를 선택해야한다. (시험에 나옴)

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

AWS는 Hybrid 클라우드를 지원하고 있다.

Hybrid 클라우드는 사용자의 인프라의 일부가 AWS의 클라우드에, 일부가 온프레미스에 유지되는 것을 의미한다.

클라우드 마이그레이션이 오래걸리거나, 보안 요구 사항이나 클라우드를 탄력적인 워크로드에만 활용하고 나머지를 온프레미스에 유지하는 전략의 일부일 수도 있다.

S3 데이터를 온프레미스에 노출시키려면 Storage Gateway를 사용해야한다.
간단히 말해 온프레미스 데이터와 S3 사이의 브릿지 역할을 하는 것이다.

AWS의 클라우드 네이티브 스토리지 옵션은 블록 스토리지로 EBS나 EC2 인스턴스 스토어가 있고, 파일 시스템으로 EFS나 FSx가 있고, 객체 스토리지로 S3 나 Glacier가 있다.

Storage Gateway는 간단히 말해 온프레미스 데이터와 클라우드 데이터 간 브리지이다.
온프레미스 데이터를 스토리지 게이트웨이를 통해 클라우드로 브리징한다.


사용 사례는
- 재해 복구를 위해 온프레미스 데이터를 클라우드에 백업
- 백업과 복원을 통해 클라우드 마이그레이션하거나 온프레미스에서 클라우드로 스토리지를 확장

예를 들어 클라우드에는 Cold 데이터가 온프레미스에는 더 자주 사용되는 Warm 데이터를 둘 수도 있다.
그리고 대부분의 데이터를 AWS에 저장하고 Storage Gateway를 온프레미스 캐시로 사용해 지연 시간이 낮은 파일 액세스를 수행할 수도 있다.

다양한 사용 사례가 있기 때문에 여러 종류가 있다.
1.  S3 File Gateway
2.  FSx File Gateway
3.  Volume Gateway
4.  Tape Gateway

**S3 File Gateway**은 S3 버킷이 있고 원하는 스토리지 클래스를 사용할 수 있다.
그리고 이 S3 버킷을 온프레미스 응용 프로그램 서버에 연결하고 표준 NFS를 사용하려고 한다.

이를 위해 NFS 또는 SMB 프로토콜을 사용할 수 있는 S3 File Gateway를 생성할 것이다.
그리고 이 프로토콜을 사용함으로써 S3 File Gateway는 실제로 암호화된 HTTP 요청으로 변환될 것이다.

응용 프로그램 서버의 관점에서는 일반 파일 공유에 액세스하는 것 처럼 보이지만, 실제로는 S3 버킷을 사용하고 있다.

그런 다음 이러한 객체 중 일부를 아카이브하려면 S3 버킷에 수명주기 정책을 만들어서 일정 시간이 지난 후에 S3 Glacier로 객체를 이동시킬 수 있다.

가장 최근에 사용된 데이터는 빠른 액세스를 위해 파일 게이트웨이에 캐시된다.
따라서 전체 S3 버킷이 파일 게이트웨이에 있는 것이 아니라 가장 최근에 사용된 파일이 파일 게이트웨이에 있다.

버킷에 액세스하려면 각 파일 게이트웨이에 대한 IAM 역할을 생성해야 한다.

SMB 프로토콜을 사용하는 경우 Windows 파일 시스템에 대한 더 네이티브한 통합을 위해 사용자 인증을 위한 Active Directory와 통합되어 있다.
즉, 사용자는 S3 파일 게이트웨이에 인증된 후에 버킷에 액세스할 수 있다.

**Amazon FSx File Gateway**의 경우 Amazon FSx for Windows File Server에 대한 네이티브 액세스를 제공한다.

Amazon FSx for Windows File Server를 사용하고 있다면 특별한 조치 없이도 온프레미스의 SMB 클라이언트에서 AWS에 액세스 가능하다.

그렇다면 왜 FSx File Gateway를 사용하는가?
Gateway를 만드는 경우 자주 액세스하는 데이터에 대해 회사 데이터 센터에 로컬 캐시를 얻게되고 낮은 지연 시간으로 액세스할 수 있게 된다.

**Volume Gateway**의 경우 S3에서 지원되는 iSCSI 프로토콜을 사용하는 블록 스토리지이다.

응용 프로그램 서버가 iSCSI 프로토콜을 통해 볼륨을 마운트하는 것이다.

또한 온프레미스에 전체 데이터가 있고 S3로 백업을 예약해 우리의 응용 프로그램 서버를 백업 할 수 있다. 실제로 온프레미스 서버의 볼륨을 EBS 스냅샷의 형태로 백업한다고 생각하면 된다.

그리고 캐시 볼륨을 얻게 되어 애플리케이션의 가장 최근 데이터에 대한 저지연 액세스를 얻게 된다.

**Tape gateway**의 경우 일부 회사에서 사용하는 테이프 백업 시스템을 클라우드로 백업하는 것이다.

그래서 이 가상 테이프 라이브러리(VTL)은 Amazon S3 및 Glacier에 의해 지원된다.

iSCSI 인터페이스를 사용해 테이프 기반 프로세스를 사용해 기존 데이터를 백업한다.

**Storage Gateway Hardware Apliance**

게이트웨이는 기업 데이터 센터에서 실행되어야 한다.
그러나 때로는 추가적인 게이트웨이를 실행할 가상 서버가 없는 경우도 있다.

그래서 옵션으로 AWS의 하드웨어를 활용하는 Storage Gateway Hardware Apliance가 있다.

온프레미스에서 가상화를 사용할 수 없는 경우 Storage Gateway 하드웨어 애플라이언스를 사용할 수 있다.

이 하드웨어 애플라이언스를 인프라에 설치한 후에 File Gateway, Volume Gateway 또는 Tape Gateway로 설정할 수 있다.

가상화가 없는 작은 데이터 센터에서 일일 NFS 백업에 매우 유용하다.

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

파일 게이트웨이는 Linux 파일 시스템이기 때문에 POSIX 호환성을 갖는다.
- 이는 S3 객체의 메타데이터 소유권, 권한 및 타임 스태프 정보를 S3 객체의 메타데이터에 저장한다는 것을 의미한다.

Storage Gateway VM을 유지보수하기 위해 재부팅하려면 두 가지 방법이 있다.

- 파일 게이트웨이인 경우 Storage Gateway VM을 간단히 다시 시작하면 된다.
- 볼륨 또는 테이프 게이트웨이인 경우 콘솔이나 VM 로컬 콘솔 또는 Storage Gateway API를 통해 Storage Gateway 서비스를 중지해야 한다. 그 다음 Stogate Gateway VM을 다시 부팅하고 Storage Gateway 서비스를 다시 시작해야 한다. 그 다음 API 또는 콘솔을 통해 Storage Gateway 서비스를 다시 시작한다.
  - 정리하자면 아래와 같다.
    1.  콘솔이나 VM 로컬 콘솔 또는 Storage Gateway API를 통해 Storage Gateway 서비스 중지
    2.  Storage Gateway VM 재부팅
    3.  Storage Gateway 서비스 다시 시작
    4.  API 또는 콘솔을 통해 Storage Gateway 서비스 다시 시작

Storage Gateway 활성화하는 방법은 두 가지 방법이 있다. 활성화 키를 얻어야한다.

첫번 째 활성화 키를 얻는 방법은 Gateway VM CLI를 사용하는 것이다.
시작할 때 0:에 해당하는 활성화 키 가져오기 옵션을 이용해 활성화 키를 게이트웨이 콘솔에 직접 전달할 수 있다.

두번 째 방법은 Gateway VM으로 직접 웹 요청을 만드는 것이다.
이 경우 포트 80으로 직접 웹 요청을 만들어야 한다. 따라서 파일 게이트웨이가 포트 80을 열고 콘솔에서 액세스할 수 있게 되면 활성화할 수 있다.

활성화 실패가 발생할 수 있다.
예를 들어 두번 째 방법을 사용하는 경우 Gateway VM에 포트 80이 열려 있는지 확인해야 하며, 매우 극히 드문 경우지만 Gateway VM이 올바른 시간을 갖고 자동으로 시간을 동기화하고 있는지 확인해야 한다. File Gateway의 시간이 실제 NTP 서버의 시간과 너무 차이 나지 않도록 보장하기 위한 것이다.

볼륨 게이트웨이 Cached 모드에 대해 이야기 해보자

Cached 모드에서는 최신 데이터만 Volume Gateway에 저장한다. 다라서 캐시 효율성을 고려해야 한다.

CloudWatch에는 CacheHitPercent 지표라는 지표가 있으며 이를 가능한 높게 유지해야 한다.
매우 높은 지표를 갖고 있다면 캐시가 효율적이며 많이 사용되며 더 낮은 지연 시간을 얻게 된다.

CachePercentUsed를 확인해야 한다. 이것은 너무 높지 않아야한다. 캐시가 적절히 채워져야 하지만 너무 높으면 문제가 될 수 있다.

또한 서버에 캐시 볼륨 게이트웨이가 있는 경우 유의해야 한다.

Cache Hit이 발생하면 기업 데이터 센터 내에 트래픽이 유지된다.
Cache Miss가 발생하면 S3 버킷에서 데이터를 다시 가져와야 할 수 있다.

따라서 볼륨 게이트웨이가 캐시 모드에 있을 때 캐시를 효율적으로 사용하는 것이 중요하다.

캐시 효율성을 높이는 한 가지 옵션은 캐시 디스크를 더 크게 만드는 것이다. 이 경우 볼륨을 복제해 더 큰 크기의 볼륨을 만들어야 한다. 그런 다음 새 디스크를 볼륨 게이트웨이의 Cached 볼륨으로 선택해야 한다.

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

CloudFront 는 콘텐츠 전송 네트워크 CDN이다.
CloudFront는 웹 사이트의 콘텐츠를 다양한 엣지 위치에서 캐싱하여 읽기 성능을 향상시킨다.

콘텐츠가 전 세계적으로 캐싱되어 있기 때문에 전 세계의 사용자가 낮은 지연 시간을 갖게 되며 이는 사용자 경험을 향상시킨다.

CloudFront는 216개의 지점으로 이루어져 있으며, 전 세계의 Edge Location에 해당한다. Location은 계속해서 추가되고 있다.

또한 콘텐츠를 전 세계적으로 분산하여 DDos 보호를 받게 된다.

Shield 및 WAF라는 것을 사용해 보호 되기도 한다.

실제 사용 사례는 아래와 같다.
호주에 S3 버킷과 웹 사이트를 만들었지만 미국에 사용자가 있다고 가정하면, 사용자는 CloudFront를 사용하여 미국의 Edge Location에서 콘텐츠를 요청하고 CloudFront가 호주에서 콘텐츠를 가져올 수 있다.

중국에 사용자가 있다면 중국의 Location으로 연결되어 S3 버킷으로 리디렉션되고 콘텐츠가 Edge에 캐싱된다.

CloudFront에는 여러 유형의 Origin이 있다.

그리고 CloudFront 만이 S3 버킷에 액세스할 수 있도록 보장하기 위해 Origin Access Control(OAC)라는 것을 사용할 수 있다.

CloudFront는 또한 데이터를 S3 버킷으로 보낼 수 있다.
S3에 파일을 업로드하는 것을 의미한다.

사용자 정의 Origin HTTP 백엔드 앞에 CloudFront를 사용할 수도 있다.

고수준에서 CloudFront는 전 세계의 Edge Location이 있으며, Origin에 연결된다. Origin은 S3 버킷이나 HTTP 서버일 수 있다.

클라이언트가 연결하여 Edge Location으로 HTTP 요청을 하면 Edge location은 캐시에 대항 항목이 있는 지 확인하고 캐시에 해당 항목이 없으면 Origin으로 이동해 요청 결과를 가져온다.

다른 클라이언트가 동일 Edge location에서 동일한 콘텐츠를 요청할 때 Origin으로 이동할 필요가 없다.

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

CloudFront는 사용자 정의 HTTP 백엔드에 액세스할 수 있다. EC2 인스턴스나 ALB와 같은 것도 포함된다.

EC2 인스턴스에 HTTP 백엔드를 개발했다고 가정하면 사용자가 CloudFront를 통해 액세스 하기 위해서는 EC2 인스턴스는 Public하게 공개되어야 한다.

따라서 보안이 호환되고 작동되도록 하려면 Edge Location의 모든 공개 IP 목록을 허용하는 보안 그룹이 있어야 한다.
CloudFront IP 목록은 따로 기재되어 있다.

ALB를 사용하는 예시이다.
마찬가지로 ALB는 공개 되어야 하며, 이 경우 백엔드 EC2 인스턴스는 프라이빗이 될 수 있다.

단지 EC2 인스턴스 보안 그룹이 로드 밸런서의 보안 그룹을 허용하도록만 하면 된다.
사용자는 Edge Location에 액세스하고, 애플리케이션 로드 밸런서의 보안 그룹에서 Edge Location의 공개 IP를 허용하여 연결을 설정할 수 있다.

**정리**
- CloudFront는 EC2나 ALB같은 사용자 정의 HTTP 백엔드에 액세스할 수 있다.
- EC2 인스턴스의 경우 Public하게 공개되거나, Edge Location의 모든 Public IP 목록을 허용하는 보안 그룹이 있어야 한다. 해당 IP 목록은 따로 기재되어 있다.
- ALB의 경우 ALB 또한 Public하게 공개 되어야 하며, 이 경우 백엔드 EC2는 프라이빗이 될 수 있다.

## **[SAA/DVA] CloudFront - Geo Restriction**

CloudFront에는 지리적 제한(Geo Restriction)을 할수 있다.

이를 사용해서 사용자가 배포를 통해 Origin에 액세스할 수 있는 국가를 제한할 수 있다.

승인된 국가 목록을 정의하는 Allow 목록을 설정하거나 Deny할 국가 목록을 설정할 수 있다.

국가는 사용자의 IP를 국가에 매칭하는 제 3자 Geo-IP 데이터베이스를 사용하여 결정된다.

지리적 제한을 사용하는 사용 사례는 저작권 법률을 준수해 콘텐츠 액세스를 제어하는 것이다.

**정리**
- CloudFront는 지리적 제한(Geo Restriction)을 설정할 수 있다.
- Client가 CloudFront 배포를 통해 Origin으로 액세스할 수 있는 국가를 제한하는 것이다.
- 승인된 국가 목록을 정의하는 Allow 목록을 설정하거나 Deny할 국가 목록을 설정할 수 있다.
- 국가는 사용자의 IP를 국가에 매칭하는 제 3자 Geo-IP 데이터베이스를 사용하여 결정된다.
- 사용 사례는 저작권 법률을 준수해 콘텐츠 액세스를 제어하는 것이다.

## **CloudFront Reports, Logs and Troubleshooting**

CloudFront의 액세스 로그에 대해 이야기 해보자

S3 버킷이나 로드 밸런서와 마찬가지로 활성화할 때 CloudFront는 Origin으로의 모든 요청을 로그로 기록하여 지정한 로깅 S3 버킷으로 보낸다.

작동 방식은 사용자가 CloudFront URL을 통해 웹 사이트에 액세스하고 각 Region 별 Edge Location이 로그 파일 또는 Distribution 로그 데이터를 중앙 S3 버킷으로 보내는 것이다.

이 중앙 S3 버킷은 로깅 버킷이지만 Origin 버킷과는 다르도록 설정해야 한다.

S3에는 그럼 CloudFront 배포에 연결된 Origin 버킷과 로그 파일을 보내는 로그 버킷이 있는 것이다.

또한 두 번째 CloudFront 배포가 생긴다고 해도 이를 동일한 로그 버킷으로 보낼 수 있다.

로그 버킷 내에 접두사를 추가해 배포를 분리할 수 있다.

CloudFront에는 캐시 통계 report, 인기 있는 객체 report, Top referrer report, 사용량 report 및 뷰어 report 등 많은 report가 있다.

이러한 report를 생성하려면 CloudFront는 액세스 로그에서 데이터를 사용하지만 액세스 로그를 S3로 보내도록 설정하지 않아도 이러한 report가 생성된다.

문제 해결을 위해 CloudFront는 S3나 Origin 서버에서 반환된 HTTP 400 및 500 상태 코드의 Origin Cache를 설정한다.
원본에 파일이 없는 경우에도 해당 응답은 무조건 캐시된다.

4xx는 사용자가 기본 버킷에 액세스할 수 없음을 나타내며, 예를 들어 403이거나 사용자가 존재하지 않는 개체를 요청하는 경우 404이다.

5xx는 게이트웨이 문제를 나타낸다.

콘솔에서는 CloudFront의 표준 로깅 옵션 등을 설정 가능하다. S3 버킷을 선택할 수 있으며 필요하면 S3 버킷으로 로그를 보내기 위해 로그 접두사를 지정할 수 있다.

이 액세스 로그는 Athena와 같은 서비스를 사용해 로그를 분석할 수 있다.

실제 배포의 분석 report를 살펴보면 실제 사용 중인 배포를 선택해 지난 일주일간의 요청 수에 대한 보고서를 볼 수 있다.

예를 들어 특정 날에 이 배포에서 80,000 개의 요청이 있었고, 일일 또는 시간 별 세분성을 얻어서 객체 요청 패턴에 대한 자세한 정보를 얻을 수 있다.

캐시 히트 대 캐시 미스 및 오류에 대한 정보를 얻을 수 있다.
캐시 히트가 높고 캐시 미스가 낮다면 배포가 올바르게 작동되고 있음을 의미한다.

또한 뷰어로 전송된 바이트 전송량을 확인할 수 있다.

또한 우리가 받는 HTTP 상태 코드에 대한 정보를 얻을 수 있다.
2xx, 3xx, 4xx, 5xx 등이 있는지 여부이다.

인기 있는 객체는 캐시에서 인기 있는 객체와 히트 또는 미스와 같은 정보를 제공한다.

Top refrerer는 어떤 웹 사이트가 내 캐시로 데이터를 보내고 있는지에 대한 정보를 제공한다.

Usage는 프로토콜 별 데이터 전송에 대한 사용량을 보여준다.
매일 HTTPS를 통해 8~9 GB 의 데이터가 제공되며 HTTP와 같은 다른 프로토콜에 대한 사용량은 섞여있지 않은 사용량을 확인 가능하다.

그리고 Location에서 추가 정보를 얻을 수도 있다.
데이터가 CloudFront에서 사용자로 이동하는지, CloudFront에서 Origin으로 이동하는지 등 데이터의 흐름이 어디인지에 대한 정보이다.

Viewer로 이동해 내가 어떤 종류의 사용자를 가지고 있는지에 대한 정보를 제공한다.
데스크톱, 봇, 모바일 등이 있다. 이 정보에 대한 추세도 확인할 수 있다.

내 배포에 액세스하는 웹 브라우저, 운영 체제 및 위치에 대한 정보도 확인 가능하다.
내 배포에 액세스하는 국가에 대한 정보를 제공하고 있다.

마지막으로 해당 배포와 관련된 모니터링을 살펴볼 수 있다.
Metric은 요청 합계, 데이터 전송량, 오류율, 4xx 또는 5xx 오류율, 원본까지의 지연 시간 및 캐시 오류율이 표시된다.

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

CloudFront 캐싱에 대해 알아보자

CloudFront는 여러가지를 기반으로 캐시를 할 수 있다. 헤더, 세션, 쿠키, 쿼리 문자열 매개변수를 이용해 가능하다.

이러한 매개 변수에 대한 설정에 따라 캐시가 더 나은 효율을 발휘하거나 덜 효율적일 수 있다.

캐시는 전 세계의 CloudFront Edge Location에 위치한다. 원본에 대한 요청을 최소화하기 위해 캐시 히트를 극대화해야한다.

TTL을 제어할 수 있으며, 헤더를 사용해 어떻게 하는지 알아보자.
제어할 수 있는 헤더가 두 개 있다. 캐시 제어 헤더와 만료 헤더이다.

그리고 CreateInvalidation API를 사용해서 캐시의 일부를 무효화할 수 있다.

헤더 캐싱 동작을 알아보자

클라이언트가 CloudFront 배포에 HTTP 요청을 전달할 때 헤더를 전달한다.

헤더는 호스트 및 값, 자용자 에이전트 및 값, 날짜 및 값, 권한 부여 및 값, keep alive 및 값, accept range 및 값의 조합이다.

또한 헤더는 원하는 대로 될 수 있다.

예를들어 프로토콜 HTTP 1.1을 사용해 이미지 cat.jpg를 GET 방식으로 가져오는 헤더가 있다.

CloudFront는 3가지 방법으로 구성할 수 있다.

1.  모든 헤더를 Origin으로 전달

- 이 경우 TTL은 0으로 설정되어야한다.
- 캐싱이 없고 모든 요청이 원본으로 전달된다.
- CloudFront를 사용하여 캐싱하지 않는다.

2.  화이트 리스트 기반으로 전달

- 원하는 헤더의 화이트리스트를 전달하면 지정된 헤더의 모든 값에 기반하여 캐싱

3.  요청에서 헤더 제거

- 헤더를 전달하지 않도록 하면 기본 헤더에 대해서만 전달되고 요청 헤더에 따른 캐싱이 없다.

모든 헤더를 전달할지, 화이트리스트 헤더를 전달할지 또는 헤더를 전혀 전달하지 않을지의 여부는 응용 프로그램에 따라 다르다.

가능한 모든 헤더가 필요한 경우 또는 일부 헤더가 필요하지 않게 설정한다.

예를 들어 화이트리스트 설정의 경우 몇 가지 헤더를 화이트 리스트에 추가할 것이다.

예를 들어 호스트 및 권한 부여 헤더를 화이트 리스트에 추가하면 헤더가 원본으로 전달되고 캐시가 발생할 것이다.

그래서 결국 Action을 어떻게하고 싶은지는 사용자에게 달려 있다.

CloudFront의 원본 헤더와 CloudFront 캐시 동작에 관한 것은 시험에 나올 수 있다.

**원본 사용자 정의 헤더(Origin custom header)**의 경우 원본 자체에서 설정할 수 있는 설정이다. 모든 단일 요청에 대해 원본 수준의 설정이며, 모든 요청에 대해 일정한 헤더 이름과 헤더 값을 설정한다.

즉, 모든 요청에 대해 어떤 헤더가 올 것이고 CloudFront가 여기에서 지정한 헤더를 추가한다.

사용 사례는 요청이 CloudFront에서 온 것임을 원본에게 알리고 싶을 때 사용할 수 있다. 그래서 사용자가 정의한 것으로 일정하여 무엇이든 상관없이 유지 된다.

그리고 **행동 설정(Behavior setting)**이 있다.

행동 수준에서 설정하는 것이며 캐시 동작이다.

월본 사용자 정의 헤더는 캐싱에 사용되지 않는다. 단지 원본으로 헤더를 전달하기 위해 사용된다. 그런데 행동 설정의 경우 캐시 관련 설정이다.

원본으로 전달하고 캐시할 모든 헤더 목록이 포함된다.

예를들어 CloudFront는 CloudFront-Is-Desktop-Viewer 또는 CloudFront-Is-Mobile-Viewer 라는 헤더를 화이트리스트로 전달하고 원본으로 전달한다.

다음으로 캐싱 TTL이 있다.

헤더는 "Cache-Control: max-age" 또는 "Expires" 헤더가 있다.
그리고 CloudFront에서 원본으로부터 응답할 때 Cache-Control: max-age 헤더를 사용하는게 CloudFront에서 작업을 수행하는 가장 최신의 표준 및 가장 좋은 방법이다.

원본이 항상 Cache-Control 헤더를 반환하면 TTL을 헤더로 직접 제어할 수 있으므로 응용 프로그램으로 제어할 수 있다.

그러나 TTL에 대한 최소 및 최대 경계를 설정하려는 경우 객체 캐싱 설정에서 사용자 정의를 선택할 수 있다.

Behavior 레벨의 설정은 캐싱 설정이기 때문에 객체 캐싱을 위해 헤더를 사용한다고 할 수 있다.
이 경우 응용 프로그램은 무슨일이 있던 캐시를 설정할 것이다.

또는 최소 TTL, 최대 TTL 및 기본 TTL을 갖도록 사용자 정의할 수 있다.

그리고 Cache-Control 헤더가 응답에서 누락된 경우 기본 값으로 기본 설정된다.

이렇게 설정하면 최소 TTL 최대 TTL을 갖고 응용 프로그램은 Cache-Control를 반환할 것이다.
이것은 선택 사항이지만 권장되는 것이고, Cache-Control이 최소 값보다 작은 경우 최소값이 사용된다. 최대 값보다 큰 경우 최대값이 사용된다. 또한 Cache-Control이 누락되면 이 설정에서 설정한 기본 TTL이 적용된다.

쿠키와 쿼리 문자열 매개변수이다.

쿠키는 특정 헤더로서 많은 키-값 쌍이 있다.

쿠키는 세 가지 다른 설정을 가질 수 있다.

1.  쿠키를 처리하지 않는 것(기본 깂)

- 캐싱이 쿠키에 기반하지 않으며 쿠키가 CloudFront에서 원본으로 전달되지 않는다.

2.  쿠키의 화이트리스트 기반 전달

- 캐싱은 지정된 모든 쿠키 값에 기반한다.

3.  모든 쿠키를 전달

- 명백히 최악의 캐싱 성능을 제공하지만 응용 프로그램이 모든 것을 사용할 수 있다.

설정하는 것은 응용 프로그램에 따라 다르기 때문에 응용 프로그램 내에서 쿠키가 어떻게 사용되는 지가 매우 중요하다.

쿼리 문자열 매개변수에 대한 동작이다.

GET /image/cat.jpg?border=red&size=large 등의 쿼리 문자열이 있다.

1.  쿼리 문자열 처리하지 않기(기본 값)

- 원본으로 전달되지 않으며 캐싱이 이 쿼리 문자열에 기반하지 않는다.

2.  쿼리 문자열의 화이트리스트를 전달

- 이 경우 캐싱은 화이트리스트에 기반

3.  모든 쿼리 문자열을 전달

- 모든 매개변수를 기반으로 캐싱된다.
- 많은 값이 있기 때문에 최악의 캐싱 성능 제공

캐시 히트를 극대화 하는 방법은 정적 및 동적 배포를 분리하는 것이다.

예를들어 CloudFront 레이어가 있는 경우 모든 정적 요청은 CloudFront로 이동하여 정적 컨텐츠 S3 버킷에 저장되어야 한다.

이 배포의 경우 헤더를 사용하지 않고 쿠키를 사용하지 않으며 세션 캐싱 규칙을 사용하지 않는다. 그러면 S3에서 정적으로 내려오는 동안 캐시 히트를 극대화할 수 잇다.

그러나 동적 컨텐츠를 가지고 있는 ALB + EC2 인스턴스 또는 API 게이트웨이 및 람다에서 실행되는 응용프로그램은 몇 가지 헤더 및 쿠키를 사용할 것이다.

이 배포의 경우 응용 프로그램과 정확히 유사하게 헤더 및 쿠키를 맞춰 캐시를 극대화할 수 있다.

요약하면 캐시 히트 비율을 높이려면

- CloudWatch 메트릭을 살펴보고 객체가 캐시에 있어야하는 기간을 지정.
- Cache-Control max-age 헤더를 사용
- 필요한 최소한의 헤더를 지정하거나 지정하지 않는다.
- 필요한 최소한의 쿠키를 지정하거나 지정하지 않는다.
- 그리고 쿼리 문자열 매개변수도 동일하게 지정
- 정적 및 동적 배포를 분리하기

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

ALB와 함께 CloudFront를 사용하는 방법이다.

예시가 있다. ALB와 Target Group이 있는 상황에서 동일한 사용자의 동일한 요청이 동일한 백엔드 EC2 인스턴스로 전송되도록 Sticky Session을 활성화 했다.

CloudFront를 Edge Location과 함께 설정했으며 잘 작동하도록 원한다.

세션 어피니티를 제어하는 쿠키를 Origin으로 전달하여 세션 어피니티가 계속 작동하도록 하면 해결된다.

왜냐하면 이 세션에 대한 쿠키를 전달하지 않으면 당연히 ALB로 전달되지 않기 때문에 세션 어피니티가 작동하지 않는다.

구체적으로 사용자가 GET을 수행할 때 AWSALB 쿠키를 보내고 CloudFront는 이 쿠키에 대해 화이트 리스트를 작성한다. AWSALB 쿠키가 ALB로 전달되고 ALB는 쿠키를 볼 수 있다.

동일한 사용자의 경우 항상 동일한 EC2 인스턴스로 요청을 보낼 것을 알게 된다.

다른 사용자가 다른 요청을 전달할 때 이번에도 쿠키가 AWSALB를 보내지만 값은 다를 것이다.
그럼 다시 쿠키의 값을 전달하고 ALB가 다른 EC2 인스턴스로 전달할 것이다.

그럼 다른 사용자는 다른 EC2에 스티키 세션이 맺어질 것이다.

결론적으로 ALB와 스티키 세션을 사용하는 경우 CloudFront에서 모든 쿠키 또는 세션 어피니티를 제어하는 쿠키에 화이트리스트를 설정하면된다. 그리고 보안 조치로 캐시된 요청에 대한 TTL을 authentication cookie expire 보다 작은 값으로 설정해야 한다.

**정리**
- Sticky Session을 활성화하여 ALB와 CloudFront를 사용하는 방법
- 예시가 있다. ALB와 Target Group이 있는 상황에서 Sticky Session을 활성화 했다. CloudFront를 Edge Location과 함께 설정했으며 잘 작동하도록 원할 때 세션 어피니티를 제어하는 쿠키를 Origin으로 전달해 세션 어피니티가 계속 작동하도록 하면 해결된다.
- 세션 쿠키를 전달하지 않으면 ALB로 전달되지 않아 세션 어피니티가 작동하지 않는다.
- 구체적으로는 사용자가 GET 요청을 보내면서 쿠키(AWSALB=값)를 전달하고, CloudFront는 이 AWSALB 쿠키를 Whitelist에 포함시켜야한다. 그러면 쿠키가 ALB로 전달된다.
- ALB는 쿠키를 보고 같은 사용자의 요청을 항상 동일한 EC2 인스턴스로 보내게 되고, 다른 사용자가 요청을 보내면 쿠키 이름은 AWSALB로 같지만 값은 다르기에 ALB가 다른 EC2 인스턴스로 전달한다.
- ALB에서 Sticky Session을 사용하고 CloudFront와 연동할 때는 모든 쿠키 또는 해당 쿠키를 화이트리스트에 포함시켜야 한다.
- 보안 조치로 캐시된 요청의 TTL을 인증 쿠키보다 짧게 설정하는 것도 좋다.

## **[SAA/DVA] RDS Overview**

RDS는 관계형 데이터베이스 서비스를 의미하며, 이는 SQL을 쿼리 언어로 사용하는 데이터베이스를 위한 관리형 데이터베이스 서비스이다.

SQL은 데이터베이스를 쿼리하는 구조화된 언어로 매우 잘 적응되어 있으며 다양한 엔진에서 실행된다.

AWS에서 관리되는 RDS 엔진은 PostgreSQL, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM DB2, AWS의 독점 DB인 Aurora가 있다.

왜 우리는 EC2 인스턴스에 DB 서비스를 배포하는 대신 RDS를 사용해야 하는가?

왜냐하면 RDS 는 관리형 서비스이며, 관리형 서비스로 AWS는 데이터베이스를 제공하는 것뿐만 아니라 여러 가지 서비스를 제공한다. 아래와 같다.

- 데이터베이스의 프로비저닝은 완전히 자동화되어 있으며, 기본 운영체제 패치도 자동화된다.
- 지속적인 백업이 이루어지며 특정 타임 스탬프로 복원 가능하다. 이것을 "지정된 시간으로 복원, Points in time restore"라고 한다.
- 데이터베이스 성능을 볼 수 있는 모니터링 대시보드를 가질 수 있다.
- 읽기 본제본을 사용할 수 있다.
- 읽기 성능을 향상 시키기 위해 Multi AZ를 설정할 수 있으며, 재해 복구에 도움이 되는 Multi AZ에 대한 섹션도 있다.
- 업그레이드를 위한 Maintenance 창을 가지고 있으며, 인스턴스 유형을 증가시킴으로써 수직 스케일링과 읽기 복제본을 추가함으로써 수평 스케일링이 가능하다.
- 스토리지는 EBS에 의해 백업되며, 이는 우리가 이미 알고 있는 gp2 볼륨 또는 io1이다.

우리가 할 수 없는 것은 RDS 인스턴스에 SSH로 접속하는 것이다. 왜냐면 이것은 관리형 서비스이기 때문에 AWS가 서비스를 제공하고 기본 EC2 인스턴스에 액세스할 수 없다.
EC2에 자체 데이터베이스 엔진을 배포하려면 설정해야 할 모든 것을 얻을 수 있기 때문에 접속하지 못한다고 꼭 안좋은 것은 아니다.

시험에 나올 수 있는 기능이 하나 있는데, RDS 스토리지 자동 스케일링이다.
이 기능은 RDS 데이터베이스를 생성할 때 얼마나 많은 스토리지를 원하는지 지정해야 한다.

예를 들어 20 GB의 스토리지를 원한다고 가정해봤을 때 데이터베이스를 많이 사용하고 있고 여유 공간이 없을 때 이 기능이 활성화되어 있다면 RDS는 이를 감지하고 자동으로 스토리지를 확장해준다.
데이터베이스를 확장하기 위해 중단할 필요가 없다.

응용 프로그램이 RDS 데이터베이스에 많은 읽기 쓰기를 수행하고 있다면 특정 임계값에 도달하면 스토리지가 자동으로 확장될 수 있다.

이를 위해서 스토리지가 얼마나 커질지에 대한 최대 한도를 설정해야 한다.
무한정으로 확장되지 않도록 최대 스토리지 한도를 설정하고, 무료 스토리지가 할당된 양의 10%보다 적고 저 스토리지가 최소 5분 이상 지속되고 마지막 수정 이후 6시간이 경과했을 때 자동으로 스토리지를 조정할 수 있다.

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

RDS Read Replica와 Multi AZ의 차이를 정확히 이해하고 용도를 명확히 파악하는 것이 매우 중요하다.

Read Replica를 먼저 알아보자

이름에서 알 수 있듯이 읽기 복제본은 읽기를 확장하는 데 도움이 된다.

**Read Replica의 특징**

- 15개까지 읽기 복제본 생성 가능
  - 애플리케이션은 데이터베이스 인스턴스에 읽기 및 쓰기를 수행하지만 메인 데이터베이스 인스턴스는 너무 많은 요청을 받는다고 가정해보자. 이 경우 최대 15개의 읽기 복제본을 생성 가능하다.
- 동일한 가용 영역 내, 가용 영역을 거쳐 또는 리전을 거쳐 배치할 수 있다.
- Main RDS 데이터베이스 인스턴스와 읽기 복제본 간에 비동기 복제가 수행된다.
- 복제본은 또한 자체 데이터베이스로 승격될 수도 있다.
  - 그리고 승격 이후에는 복제 메커니즘을 완전히 벗어나 자체 수명주기를 갖는다.

**Read Replica 사용 사례**
Production 애플리케이션에서 사용하는 Production 데이터베이스가 일반적으로 부하를 감당하고 있을 때 해당 DB에는 읽기 및 쓰기를 수행한다.
새로운 팀이 들어와 데이터 보고서 및 분석을 실행하려고 할때 보고서 애플리케이션을 Main RDS에 연결하면 과부하가 발생해 Production 애플리케이션이 느려질 수 있다.
SA로서 할 일은 새로운 워크로드를 실행하기 위해 Read Replica를 생성하는 것이다.
그러면 주 RDS와 읽기 복제본 간에 일부 비동기 복제가 발생하고 읽기 복제본에서 읽기 및 분석을 수행할 수 있다.

그러므로 Read Replica를 사용할 때는 SELECT 유형의 문장에만 사용되도록 확인해야 한다.
읽기인 SELECT를 제외하고 INSERT, UPDATE, DELETE와 같은 키워드를 사용할 수 없다.

**Read Replica의 네트워킹 비용**

AWS에서는 일반적으로 데이터가 한 가용 영역에서 다른 가용 영역으로 이동할 때 비용이 발생하지만, RDS는 동일한 리전에 있으면 비용을 지불하지 않는다.

그러나 다른 리전을 복제하는 경우 리전을 넘나들며 복제되므로 네트워크에 복제 비용이 발생한다.

**RDS Multi AZ**에 대해 이야기 해보자

Multi AZ는 주로 재해 복구를 위해 사용된다.

Multi AZ 특징

- 동기식 복제
  - 애플리케이션은 AZ A 에 있는 마스터 RDS에 읽기 및 쓰기를 수행하고 AZ B에 대기 중인 인스턴스로 동기 복제를 가지며, 마스터에서 발생하는 모든 변경 사항을 동기적을 복제한다. 따라서 응용 프로그램이 마스터에 쓰기를 하면 해당 변경 사항이 수락되기 위해 대기 중인 데이터베이스로도 복제되어야 한다.
- 단일 DNS name
  - 이에 단일 DNS name을 얻게된다. 응용 프로그램은 DNS name과 통신하며, 마스터에 문제가 발생하는 경우 DNS name으로 대기 중인 데이터베이스로 자동 장애 조치가 수행된다. 이를 통해 가용성이 향상되며 이것이 Multi AZ라고 하는 이유이다.
- failover
  - 전체 AZ를 잃거나 네트워크가 중단되거나 마스터 데이터베이스에 인스턴스 또는 저장소 장애가 발생한 경우, 대기 중인 데이터베이스가 새로운 마스터가 된다.
- 애플리케이션에서 수동으로 개입하지 않아도 됨
- 확장에 사용되지 않는다.
  - Multi AZ에 있는 RDS instance는 standby이기 때문에 대기 중이다. 그래서 아무도 읽거나 쓸 수 없다. 단지 마스터 데이터베이스에 문제가 발생할 경우를 대비한 장애 조치로만 존재한다.

Read Replica를 재해 복구용으로 Multi AZ로 설정할수도 있는지?
답은 원한다면 가능하다.

시험에서 나올 수 있는 질문 중 하나는 RDS 데이터베이스를 Single AZ에서 Multi AZ로 어떻게 변경할 수 있는지에 대한 것이다.

알아둘 점은 이 작업이 다운타임이 없는 작업이고, Single AZ에서 Multi AZ로 변경하려면 데이터베이스를 중지할 필요가 없다.

해야할 일은 데이터베이스를 수정하고 Multi AZ를 활성화하는 것이다.

내부적으로는 다음과 같은 일이 발생한다.
RDS가 자동으로 주 데이터베이스의 스냅샷을 촬영하고, 이 스냅샷이 새로운 standby 데이터베이스로 복원된다. 그리고 standby 데이터베이스가 복원되면 두 데이터베이스 간에 동기화가 설정될 것이며, 따라서 대기 중인 데이터베이스가 주 RDS 데이터베이스를 따라잡게 될 것이다.

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

Multi AZ의 장애 조건은 무엇인가?

- 주 데이터베이스의 장애가 있다.
  - 주 데이터 베이스의 fail
  - 주 데이터베이스의 운영 체제가 소프트웨어 패치 중인 경우
  - 주 데이터베이스가 네트워크 연결 손실로 도달할 수 없는 경우
  - 주 데이터베이스 인스턴스를 수정하는 경우 (예:인스턴스 유형 변경)
  - 주 데이터베이스가 바쁘고 응답하지 않는 경우
  - 기본 저장소의 장애
- 또한 AZ 장애 발생
- Reboot with failover라는 옵션을 사용하여 데이터베이스 인스턴스의 수동 장애 조치를 시작하는 경우

위 경우 모두 RDS Multi AZ의 장애 조건이다.

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

RDS 프록시에 대해 알아보자

RDS 프록시가 왜 필요한지 이해해야한다.

- 람다 함수가 있고 RDS 데이터베이스에 액세스하려는 경우, 기본적으로 함수가 시작될 때 AWS의 해 소유된 VPC 내부가 아닌 외부에서 시작된다. 그래서 Public 서브넷에 없는 리소스에 액세스할 수 없다.
- 보통 Private에 RDS 또는 ElastiCache 또는 ELB가 있는 경우가 있어 액세스할 수 없다.
- 기본적인 람다 배포로는 Public Endpoint 또는 DynamoDB에만 액세스할 수 있다.
- RDS 데이터베이스를 Public으로 만들면 람다가 연결할 수 있지만 RDS를 Public에 만드는 것은 안전하지 않다.

위와 같은 이유로 람다를 VPC에 배포할 수 있다.
람다는 VPC에 배포할 수 있다.

이를 위해 VPC ID와 Subnet 및 보안 그룹을 정의하고 이를 위해 IAM Role(AWSLambdaVPCAccessExecutionRole)을 지정해서 ENI를 생성해 RDS 데이터베이스에 직접 연결한다.

이제 Private 서브넷 내에서 람다가 자체 보안 그룹과 함께 연결할 ENI를 갖게 될 것이고, 람다는 이 ENI에 직접적으로 연결을 설정할 것이다. 그 다음 ENI를 통해 RDS 데이터베이스에 액세스할 것이다.

작동하려면 몇 가지 보안 그룹을 설정해야 한다.

그러나 함수가 RDS에 연결할 때 데이터베이스 연결을 열고 유지해야 한다. 그리고 동시에 여러 람다 함수 인스턴스가 있으면 RDS에 많은 연결이 열릴 수 있다. 람다 함수가 연결을 정리하는 데 좋지 않은 경우이다.

그래서 RDS 프록시를 배포할 수 있다.

RDS 프록시를 사용하면 더 이상 유휴 연결을 정리하거나 코드화할 필요가 없으며 RDS 프록시가 RDS 데이터베이스로의 연결 풀을 관리한다.

예를 들어 프라이빗 서브넷 내에 RDS 데이터베이스가 있는 경우 동일한 프라이빗 서브넷에 RDS 프록시를 배포할 수 있다. 원하는 경우 다른 서브넷에 배포할 수 있다.
Public 서브넷에 배치할 수도 있다.
그 후 람다 함수가 설정되면 직접 RDS 프록시에 연결할 수 있다.

람다 함수는 RDS 프록시에 여러 개의 연결을 설정 하겠지만, RDS 프록시는 연결 풀링을 수행해 RDS 인스턴스에 대해 하나의 연결만 설정할 것이다. 이를 통해 "TooManyConnections" exception을 피할 수 있다.

프록시에서 RDS 데이터 인스턴스로 IAM 세부 정보를 전달해 IAM 인증을 지원한다.
사용자 이름과 비밀번호로 데이터베이스 인증도 지원되며, RDS 프록시에 연결이 늘어날수록 프록시 계층의 자동 확장이 이루어진다.

람다 함수는 프록시에 연결되야한다. 그래서 Public 서브넷과 Public 서브넷에 있는 프록시가 있다면 Public 람다 함수를 가질 수 있거나 적어도 일반적으로 배포된 람다 함수를 가질 수 있다.
그리고 프라이빗 서브넷에 배포된 프라이빗 RDS 프록시가 있다면 당연히 람다 함수를 VPC에 배포해야 한다.

RDS 프록시는 설정 시 여러 옵션이 있다.

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

그리고 프록시가 생성되면 응용 프로그램이나 람다 함수에서 즉시 프록시를 활용할 수 있는 Connection URL을 제공한다.

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

파라미터 그룹에 대해 알아보자

파라미터 그룹을 사용해서 데이터베이스 엔진을 사용자 정의할 수 있다.
즉시 적용되는 동적 파라미터와 데이터베이스 인스턴스가 다시 부팅된 후에만 적용되는 정적 파라미터 두 종류가 있다.

또한 데이터베이스 인스턴스에서 파라미터 그룹을 전체적으로 변경할 수도 있다.
이 경우 데이터베이스를 다시 부팅해야 하지만, 기본 파라미터 그룹에서 사용자 정의 그룹으로 변경하는 것은 매우 편리하다.

시험 관점에서 유용한 반드시 알아야 할 파라미터가 있다.

- rds.force_ssl=1
  - PostgreSQL 및 SQL Server의 경우 이 값을 1로 설정해서 SSL 연결을 강제할 수 있다.
- require_secure_transport=1
  - MySQL과 MariaDB에는 위와 비슷한 파라미터가 있어 SSL 연결을 강제할 수 있다.

**정리**
- RDS Parameter Group은 데이터베이스 엔진을 사용자 정의할 수 있도록 파라미터를 지정하는 것
- 두 종류가 있다. 즉시 적용되는 동적 파라미터, 데이터베이스 인스턴스가 다시 부팅된 후에만 적용되는 정적 파라미터
- 또한 데이터베이스 인스턴스에서 파라미터 그룹을 전체적으로 다른 파라미터 그룹으로 변경할 수도 있다. 이 경우 데이터베이스를 다시 부팅해야 하지만, 사용자 정의 그룹으로 변경하는 것은 매우 편리하다.
- 시험 관점에서 반드시 알아야 할 파라미터
  - rds.force_ssl=1 : PostgreSQL 및 SQL 서버의 경우 이 값을 1로 설정해서 SSL 연결을 강제할 수 있다.
  - require_secure_transport=1 : MySQL과 MariaDB에는 rds.force_ssl와 비슷한 파라미터인 require_secure_transport로 SSL 연결을 강제한다.

## **RDS Backups and Snapshots**

RDS에서 백업과 스냅샷의 차이에 대해 알아보자

백업은 아래와 같다

- 백업은 지속적으로 이루어지며 point in time recovery(시점 복구)를 허용한다.
- 백업은 Maintenance windows에서 이루어진다.
- 데이터베이스 인스턴스를 삭제할 때는 수행된 모든 자동 백업을 유지할 수 있다.
- 백업에는 보존 기간이 있으며, 이를 0일부터 35일까지 설정할 수 있다. 따라서 지난 35일 동안의 모든 시점으로 되돌아가고 싶다면 백업을 사용할 수 있다.
- 백업을 비활성화하려면 백업의 보존 기간을 0으로 설정하면 된다.

> point-in-time recovery(시점 복구)란?
> 사용자가 원하는 시간을 정해 해당 시점으로 복원할 수 있는 것을 말한다.

스냅샷은 아래와 같다.

- 스냅샷은 IO 작업을 수행하고 스냅샷이 촬영되는 동안 데이터베이스가 몇 초에서 몇 분동안 중지된다. (짧은 IO 중단)
- Multi AZ가 활성화된 경우 스냅샷은 마스터에서가 아닌 Standby 데이터베이스에서 수행된다.
- 스냅샷은 첫 번째 스냅샷 이후 점진적으로 이루어지며 첫 번째 스냅샷은 full 백업이 수행된다.
- DB 스냅샷은 복사와 여러 계정간에 공유할 수 있다.
- 수동 스냅샷은 만료되지 않는다. 따라서 DB를 삭제할 때 최종 스냅샷을 촬영할 수 있다.

백업이든 스냅샷이든 자동 백업 또는 데이터베이스 스냅샷에서 복원하면 새로운 데이터베이스 인스턴스가 생성된다.

스냅샷 공유에 대해 이야기 해보자

- 백업은 공유할 수 없지만 스냅샷은 공유할 수 있다. 이는 EBS 스냅샷을 공유하는 방법과 매우 유사하다.
- 수동 스냅샷은 공유가 가능하지만 자동 스냅샷은 공유할 수 없다.
- 공유되지 않은 암호화된 스냅샷은 다른 계정과 공유할 수 있다. 하지만 암호화된 스냅샷을 공유하려면 해당 스냅샷과 관련된 CMK(Customer Managed Key)도 같이 공유해야한다. 또는 다른 계정이 해당 스냅샷에 대한 액세스 권한을 얻으려면 CMK에 대한 권한을 가지고 있어야한다.

**정리**
- RDS에서 백업과 스냅샷의 차이
  - 백업
    - 백업은 지속적으로 이루어지며 Point In Time Recovery(시점 복구)를 허용한다.
    - 백업은 maintenance windows에서 이루어진다.
    - 데이터베이스 인스턴스를 삭제할 때는 수행된 모든 자동 백업을 유지할 수 있다.
    - 백업에는 보존 기간이 있으며, 0일부터 35일까지 설정할 수 있다. 따라서 지난 35일 동안 중 특정 시점으로 되돌아가고 싶다면 백업을 사용할 수 있다.
    - 백업을 비활성화하려면 백업의 보존 기간을 0으로 설정하면 된다.
  - 스냅샷
    - 스냅샷은 IO 작업을 수행하고, 스냅샷이 생성되는 동안 데이터베이스가 몇 초에서 몇 분동안 중지된다. (짧은 IO 중단)
    - Multi AZ가 활성화된 경우 스냅샷은 마스터에서 진행되는 것이 아니라 Standby 인스턴스에서 수행된다.
    - 스냅샷은 첫 번째 스냅샷만 Full 백업이 수행되고, 그 이후로는 증분 백업이다.
    - 스냅샷은 복사와 여러 계정 간 공유할 수 있다.
    - 수동 스냅샷은 만료되지 않는다. 따라서 DB를 삭제할 때 최종 스냅샷을 촬영할 수 있다.
  - 백업이든 스냅샷이든 자동 백업 또는 데이터베이스 스냅샷에서 복원하게 되면 새로운 데이터베이스 인스턴스가 생성된다.
  - 스냅샷 공유에 대해 이야기 해보자
    - 백업은 공유할 수 없지만 스냅샷은 공유할 수 있다. EBS 스냅샷을 공유하는 방법과 매우 유사하다.
    - 수동 스냅샷은 공유가 가능하지만, 자동 스냅샷은 공유할 수 없다.
    - 암호화된 스냅샷은 다른 계정과 공유할 수 있다.
    하지만, 암호화된 스냅샷을 공유하려면 해당 스냅샷과 관련된 CMK(Customer Managed Key)도 같이 공유해야 한다.
    또는 다른 계정이 해당 스냅샷에 대한 액세스 권한을 얻으려면 CMK에 대한 권한이 있어야한다.

## **RDS Events and Logs**

RDS 이벤트와 이벤트 구독에 대해 이야기 해보자

RDS는 데이터베이스 인스턴스, 스냅샷, 파라미터 그룹 또는 보안 그룹에 대한 여러 이벤트에 대한 기록을 유지한다

이벤트란 무엇인가?
데이터베이스 상태가 대기 중에서 실행 중으로 변경된 것이 이벤트이다.

그래서 우리는 RDS 이벤트 구독을 가질 것이고, 이러한 이벤트들에 대한 알림을 받을 수 있다.

SNS 주제를 통해 이벤트 또는 이전 이벤트에 대한 알림을 받을 수 있다.
이벤트 소스(SG, instance 등..)와 카테고리(creation, failover 등..)를 지정할 수도 있다.

더 세분화된 유형의 이벤트를 SNS로 보내고 싶다면 이벤트 브릿지에서 이러한 이벤트를 가져올 수도 있다.

이벤트 브릿지를 설정해 몇 가지 규칙을 설정한 다음, 이벤트 브릿지가 RDS 이벤트에 반응하도록 할 수 있다.
예를 들어, DB 인스턴스의 백업 이벤트가 RDS 이벤트로 전송되고, 이를 통해 SNS에 알림을 트리거하거나 이벤트 브릿지에서 이벤트를 트리거할 수 있다.

다음은 데이터베이스 로그 파일에 관한 것이다.

RDS 데이터베이스 인스턴스에는 일반 로그, 감사 로그, 오류 로그, 느린 쿼리 로그 등의 로그가 있다.

이러한 로그를 CloudWatch Logs로 전송한 다음, CloudWatch Logs 위에 메트릭 필터를 적용할 수 있다.
예를 들어 오류 키워드를 살펴보고 너무 많이 발생하거나 자주 발생하는 경우, CloudWatch 경보를 설정할 수 있다.

그런 다음 이 CloudWatch 경보는 SNS 주제로 데이터베이스 관리자에게 알림을 보낼수 있다.

이렇게 하면 RDS 데이터베이스의 이벤트가 아니라 로그 자체를 기반으로 한 경보 및 이벤트를 수행할 수 있다.

콘솔에서는 24시간 동안의 데이터를 이벤트 탭을 클릭해 계정 내, 리전 내에서 발생한 모든 이벤트를 볼 수 있다.

**정리**
- RDS 이벤트 & RDS 이벤트 Subscription
  - RDS는 데이터베이스 인스턴스, 스냅샷, 파라미터 그룹 또는 보안 그룹의 변경 사항 등 다양한 이벤트 관련 기록을 유지한다.
    - 예를 들어 데이터베이스 상태가 pending에서 running으로 변경된 것과 같은 것이다.
  - RDS 이벤트 Subscription의 경우 SNS Topic을 이용해 일부 이벤트나 모든 이벤트를 알리도록 설정할 수 있다.
  - 특정 이벤트 소스(SG, Instances 등)나 카테고리(creation, failover 등)를 지정해 더 세부적인 유형의 이벤트를 SNS로 보낼 수도 있다.
  - EventBridge에서 이러한 이벤트를 받을 수 있고, Rule을 설정하면 RDS 이벤트에 반응한다.
    - 예를 들어 DB 인스턴스의 백업 이벤트가 RDS 이벤트로 전송되면 SNS 알림을 트리거하거나 EventBridge 이벤트를 트리거할 수 있다.
- RDS Log file
  - RDS 데이터베이스 인스턴스에는 일반 로그, 감사 로그, 오류 로그, 슬로우 쿼리 로그 등이 있다.
  - 이러한 로그를 CloudWatch Logs로 전송할 수 있고, CloudWatch Logs에 메트릭 필터를 적용할 수 있다.
  - 예를 들어 Error 키워드를 검색하고, 빈도수를 체크해 너무 많이 또는 자주 발생하면 CloudWatch 경보를 설정할 수 있다.
  - CloudWatch 경보가 SNS 주제로 경고를 보내고 SNS 주제에서 DB 관리자에게 알림을 보낼수도 있다.
  - 데이터베이스 이벤트 뿐만 아니라 로그 자체를 기반으로 RDS 데이터베이스에 대한 경고 및 이벤트 처리를 수행할 수 있다는 의미이다.

## **RDS & CloudWatch**

CloudWatch에서 RDS를 살펴보자

하이퍼바이저로부터 다움과 같은 기본 메트릭을 얻을 수 있다.

- 데이터베이스 연결 수
- 스왑 사용량
- 읽기 IOPS 쓰기 IOPS
- 읽기 지연/쓰기 지연
- 읽기/쓰기 처리량
- 디스크 대기열 깊이
- 여유 저장 공간

이런 메트릭을 통해 많은 문제를 해결할 수 있다.

예를 들어 지연이 높으면 문제가 있을 수 있고, 읽기 IOPS가 급격히 증가하면 EBS 볼륨의 IOPS 한도에 도달할 수도 있다. 디스크 대기열 깊이가 너무 높으면 많은 작업이 실행되기를 기다리고 있다는 것을 의미한다.

CPU도 살펴볼 수 있다.

위와 같은 메트릭들은 기본 메트릭을 제공되며, 향상된 모니터링(Enhanced monitoring) 을 활성화할 수 있다.

향상된 모니터링은 일반적으로 DB 인스턴스에서 실행되는 에이전트로부터 수집되는 메트릭이다.

따라서 특별하고 구체적인 정보를 얻게 되며 CPU, 메모리, 파일 시스템, 디스크 IO 메트릭을 포함하여 50가지 이상의 새로운 메트릭에 액세스할 수 있다.
기본적으로는 비활성화이고 따로 활성화 해주어야한다.

per second granularity 가 있다. 이는 모니터링을 얼마나 세밀하게 할 것인지 정할 수 있다.

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

RDS Performance Insights를 사용하면 데이터베이스 성능을 시각화할 수 있으며, 데이터베이스에 영향을 미치는 이슈를 분석할 수 있다.

데이터베이스 부하를 시각화하고 네 가지 다른 유형의 메트릭으로 부하를 필터링할 수 있다.

- 첫번째는 Waits이다.
  - Waits는 병목 현상이 발생하는 리소스를 보여준다. CPU, IO 또는 lock 이 될수도 있다. 데이터베이스를 다른 유형의 인스턴스로 업그레이드하고 CPU를 최적화할지 IO를 최적화할지 알아야 할 경우, Waits는 데이터베이스가 가장 많이 기다리는 것을 잘 보여줄 것이다.
- SQL 문에 의해 필터링할 수도 있다.
  - 기본적으로 SQL 문이 데이터베이스를 차단하거나 느리게 만들고 있는 경우 해당 SQL 문을 식별할 수 있으며 그 원인을 파악하기 위해 그 SQL문을 실행하는 팀 또는 애플리케이션에 연락해 최적화할 수 있다.
- 호스트 별로 필터링할 수 있다.
  - 기본적으로 호스트별로 필터링하고 그룹화하여 데이터베이스를 많이 사용하는 서버 또는 애플리케이션 서버를 찾아 조치를 취할 수 있다.
  - 액세스를 차단하거나 대화하여 왜 우리의 데이터베이스를 많이 사용하는 지 이해할 수 있다.
- 사용자 별로 필터링할 수 있다.
  - 사용자 이름을 사용해 데이터베이스를 가장 많이 사용하는 사용자를 찾는 것이다.

데이터베이스 부하는 데이터베이스 엔진에 대한 활성 세션 수로 평가된다.

위의 모든 것들은 기본적으로 데이터베이스 부하를 주는 SQL 쿼리를 보고 문제를 해결할 수 있도록 하는 것이다.

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

Aurora에 대해 이야기 해보자

Aurora는 AWS의 고유 기술이다.
오픈 소스가 아니지만 PostgreSQL과 MySQL과 호환되도록 만들어졌으며, 기본적으로 Aurora DB는 호환 가능한 드라이버를 가지고 있다.

Postgres나 MySQL 데이터베이스에 연결하는 것과 같은 방식으로 연결하면 작동한다.

Aurora는 MySQL RDS보다 5배 Postgres RDS 보다 3배의 성능 향상을 얻는다.

Aurora 스토리지는 자동으로 확장된다.
10GB에서 시작하여 데이터를 더 넣을수록 자동으로 128TB까지 자동으로 확장된다.
자동으로 확장되기 때문에 DB 또는 시스템 운영자는 디스크 모니터링을 하지 않아도 된다.

Aurora는 최대 15개의 읽기 전용 복제본을 가질 수 있으며, 복제 프로세스는 MySQL보다 빠르다 일반적으로 서브 10ms 복제 지연을 볼 수 있다.

Aurora에서 장애 조치를 수행하면 즉시 실행되므로 MySQL RDS의 Multi-AZ에서의 장애조치보다 훨씬 빠르다.

클라우드 네이티브이기 때문에 기본적으로 고가용성을 제공받는다.

비용은 RDS보다 약간 더 비싸지만, 규모에 따라 더 많은 절약을 위해 효율적이다.

고가용성 및 읽기 확장은 아래와 같다.

Aurora는 3개의 가용 영역 간에 작성하는 모든 데이터에 대해 데이터의 6개 복사본을 저장한다.
Aurora는 4개의 복사본 중 3개만 필요로 하기 때문에 사용 가능하므로 한 가용 영역이 다운 되어도 문제가 없다.

그리고 읽기 작업에 대해 필요한 6개의 복사본 중 3개만 필요하기 때문에 읽기 작업에 대해 사용 가능하다.

뒷단에서는 데이터가 손상되거나 나쁜 경우 일종의 자가 치유 프로세스가 발생하며, 이것은 백엔드에서 피어 투 피어 복제로 자동으로 처리된다.

하나의 볼륨에 의존하는 것이 아니라 수백 개의 볼륨에 의존한다.

데이터를 작성한다고 가정했을 때 한 데이터를 작성하면 세 가용 영역에서 6개의 사본을 볼 수 있다.

Aurora는 RDS의 멀티 AZ와 같다. 기본적으로 하나의 인스턴스만 쓰기를 수행한다. 따라서 Aurora에는 마스터가 있고, 여기서 쓰기가 수행된다.

그리고 마스터가 작동하지 않으면 평균 30초 미만의 시간의 매우 빠른 장애 조치가 발생한다.

마스터 위에 최대 15개의 읽기 전용 복제본을 가질 수 있으며 모든 복제본은 읽기를 처리한다. 많은 양의 읽기 워크로드를 확장할 수 있다.

그리고 읽기 전용 복제본 중 하나가 마스터의 역할을 대신 수행할 수 있다.
읽기 전용 복제본은 교차 리전 복제를 지원한다.

Aurora가 클러스터로서 어떻게 작동하는지 알아보자

Aurora는 기본적으로 마스터 또한 여러 읽기 전용 복제본이 있고 스토리지가 복제되고 자가 치유되며 자동으로 확장되고 작은 블록마다 작동한다.

공유된 스토리지 볼륨은 자동으로 확장되며 많은 DB와 통신하게된다.

또한 마스터는 스토리지에 쓰기 작업을 유일하게 할 수 있다.

마스터는 장애조치가 발생하면 교체되기 때문에 Aurora는 Writer endpoint를 제공한다.

Writer 엔드포인트는 항상 마스터를 가리키는 DNS name을 가졌다. 따라서 마스터가 장애조치 되어도 클라이언트는 계속해서 작성자 엔드포인트에 연결하고 자동으로 올바른 인스턴스로 리디렉션하게 된다.

읽기 전용 복제본은 자동 스케일링을 설정할 수 있다. 따라서 최대 15개 까지의 읽기 전용 복제본을 가지며, 항상 올바른 수의 읽기 전용 복제본을 뵤유하도록 오토 스케일링을 설정할 수 있다.

오토 스케일링으로 인해 복제본이 많아지면 복제본의 위치를 추적하는 것은 매우 어려울 수 있다. 그래서 Reader endpoint라는 게 있다.

Reader endpoint는 Writer endpoint와 정확히 같은 기능을 제공한다.
연결 로드 밸런싱에 도움이 되며 자동으로 모든 읽기 전용 복제본에 연결된다.

따라서 클라이언트가 Reader 엔드포인트에 연결할 때마다 읽기 전용 복제본 중 하나에 연결 로드 밸런싱이 수행된다. 주의해야할 점은 SQL 문 수준이 아니라 연결 수준에서 로드 밸런싱이 이루어진다는 점이다.

Aurora는 백트랙(backtracking)이라는 기능을 제공하는데, 언제든지 데이터를 복원할 수 있는 능력이다.
언제든지 "어제 오후 4시로 복원하고 싶다." 또는 "어제 오후 5시로 돌아가고 싶다."고 한다면 언제든지 그렇게 할 수 있다.

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

오로라의 백업, 백트래킹, 복원에 대해 이야기 해보자

자동 백업이 있고 보존 기간을 1일부터 35일 까지 설정할 수 있다. 이를 비활성화할 수 없다.

point-in-time recovery를 수행해 현재 시간에서 5분 이내에 데이터베이스를 복원할 수 있게 한다.

자동 백업은 복원하면 RDS와 마찬가지로 새로운 데이터베이스 클러스터로 복원된다.

Aurora 백트래킹을 사용해 데이터베이스를 최대 72시간 전후로 되감을 수 있다.
백 래킹은 백업과 다르며 새 클러스터를 생성하지 않고 같은 위치에서 복원된다.
현재는 오로라 MySQL에서만 지원된다.

마지막으로 오로라 데이터베이스 Clone을 사용하면 원본 클러스터와 동일한 DB 클러스터 볼륨을 사용해 새로운 데이터베이스 클러스터를 만들지만, 쓰기 시 데이터가 새 볼륨으로 복사되는 복사본 작성 프로토콜이 사용된다.

데이터베이스 클론을 사용하는 경우는 예를 들어 프로덕션 데이터를 사용해 테스트 환경을 생성하고 싶을 때이다. 한번 클릭하면 새로운 환경에 접근할 수 있어 편리하다.

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

RDS와 Aurora 보안에 관해 알아보자

RDS 및 Aurora 데이터베이스의 데이터는 at-rest 상태에서 암호화될 수 있다.
이 의미는 데이터가 볼륨에서 암호화된다는 의미이다.

이를 위해 마스터 및 모든 복제본은 KMS를 사용하여 암호화된다. 이는 데이터베이스를 처음 시작할 때 지정된다.

마스터 데이터베이스를 암호화하지 않았다면 복제본을 암호화할 수 없다.
또한 이미 암호화되지 않은 데이터베이스를 암호화하려면 해당 데이터베이스의 스냅샷을 가져와 암호화된 데이터베이스로 복원해야 한다.

이것이 at-rest 암호화이다.

그리고 In-flight 암호화가 있다.
클라이언트와 데이터베이스 사이의 통신에서 발생하는 이동 중 암호화이다.

RDS 및 Aurora의 각 데이터베이스는 기본적으로 이동 중 암호화를 지원한다.
따라서 클라이언트는 AWS에서 제공되는 TLS 루트 인증서를 사용해야 한다.

데이터베이스 인증 측면에서 RDS 및 오로라는 전통적인 사용자 이름과 암호 조합을 사용할 수 있으나 AWS를 사용하기 때문에 IAM 역할을 사용해 데이터베이스에 연결할 수도 있다.

또한 보안 그룹을 사용해 데이터베이스에 대한 네트워크 액세스를 제어할 수 있다. 특정 포트, IP, 보안 그룹을 허용하거나 차단할 수 있다.

마지막으로 RDS 및 오로라는 관리형 서비스이므로 SSH 액세스가 없다.
AWS의 RDS 사용자 정의 서비스를 사용하는 경우를 제외하고는 해당한다.

감사 로그를 원한다면 RDS 및 오로라에서 시간이 지남에 따라 수행되는 쿼리 및 데이터베이스에서 발생하는 작업을 확인하기 위해 감사 로그를 사용할 수 있다.
원하는 경우 CloudWatch Logs 서비스로 전송하여 장기간 보관할 수 있다.

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

SysOps 시험을 위한 오로라에 관한 정보이다.

각 Read Replica에는 0에서 15 사이의 우선 순위 티어를 할당할 수 있다.
이는 장애 조치 우선순위를 제어하고자 할 때 도움이 된다. RDS는 우선 순위가 가장 높은(티어가 가장 낮은) Read Reaplica를 승격시킨다.

두개 복제본이 동일한 우선 순위를 가질 경우, 오로라는 크기가 가장 큰 것을 승격시킨다. 그리고 동일한 우선 순위와 동일한 크기를 가지는 경우 무작위로 하나를 승격 시킨다.

또한 RDS MySQL 스냅샷을 Aurora MySQL 클러스터로 마이그레이션할 수 있다.
이것은 RDS가 새로운 서비스를 사용하기 위해 오로라로 이동하는 데 도움을 주는 방법이다.

Aurora에 대한 CloudWatch Metric에 대해 알아보자

- AuroraReplicaLag
  - 이는 기본 인스턴스에서 업데이트를 복제할 때의 지연량이다.
  - 데이터를 Aurora 클러스터에 기록할 때 해당 데이터는 복제될 수 있으므로 그에 따른 지연이 발생할 수 있다.
- AuroraReplicaLagMaximum/AuroraReplicaLagMinimum
  - 기본 인스턴스와 DB 클러스터의 Aurora DB 인스턴스 사이에 걸친 최대/최소 지연시간을 나타낸다.
  - 복제 지연이 높은 경우 사용자가 데이터를 가져오는 복제본에 따라 다른 경험을 할 수 있다. 이는 최종 일관성 때문이다.
  - 예를 들어 사용자가 장바구니에 항목을 추가하고 장바구니를 새로 고치면 항목이 누락될 수 있다. 이는 사용자에게 좋은 경험이 아니지만 최종 일관성 때문에 발생한다.
- DatabaseConnections
  - 데이터베이스 인스턴스에 대한 현재 연결 수를 의미한다.
- InsertLatency
  - INSERT 작업의 평균 지속 시간이다.

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

RDS가 관리형 관계형 데이터베이스를 제공하는 것처럼 ElastiCache는 관리형 Redis 또는 Memcached를 제공하여 캐시 기술을 얻을 수 있다.

캐시는 매우 높은 성능과 낮은 대기 시간을 갖는 인메모리 데이터베이스이다.
캐시는 주로 읽기 중심 워크로드로 인한 데이터베이스 부하를 줄이는 데 도움이 된다.

즉, 공통 쿼리가 캐시되므로 데이터베이스가 매번 쿼리되지 않는다. 대신 캐시를 사용해 이러한 쿼리의 결과를 검색할 수 있다.

이는 애플리케이션의 상태를 Amazon ElastiCache에 넣음으로써 애플리케이션을 Stateless 상태로 만드는 데도 도움이 된다.

RDS와 마찬가지로 AWS가 운영 체제, 패치, 최적화, 설정, 구성, 모니터링, 장애 복구 및 백업과 같은 유지 관리 작업을 수행할 것이다.

그러나 ElastiCache를 사용하면 애플리케이션 코드를 상당히 변경해야 한다.

이것은 캐시를 활성화하고 사용하는 것만드로는 충분하지 않으며 데이터베이스 쿼리 전후에 캐시를 조회하도록 애플리케이션을 변경해야 한다.

예시로 아키텍처를 살펴보자

우리에게 ElastiCache와 RDS 데이터베이스, 그리고 애플리케이션이 있다.

애플리케이션은 ElastiCache에 쿼리를 실행해 해당 쿼리가 이미 수행되었는지 확인하고,
이미 수행되어 ElastiCache에 저장된 경우 이를 캐시 히트라고 한다.
그리고 ElastiCache에서 직접 결과를 얻는다. 따라서 데이터베이스 쿼리를 실행하기 위한 과정을 절약할 수 있다.

캐시 미스의 경우, 데이터베이스에서 데이터를 가져와야 한다.
그러면 동일한 쿼리를 수행할 다른 애플리케이션 또는 인스턴스를 위해 데이터를 캐시에 다시 기록할 수 있다.
이렇게 하면 다음에 같은 쿼리가 수행되었을 때 캐시 히트가 발생한다.

캐시 히트의 경우 데이터베이스의 부하를 줄이는 데 도움이 된다.

그리고 캐시에 저장하기 때문에 캐시 무효화 전략이 필요하다. 그리고 이것이 캐싱 기술을 사용하는 데 있어서 큰 어려움이다.

또 다른 아키텍처는 애플리케이션 상태를 저장하여 애플리케이션을 Stateless로 만드는 것이다.

사용자가 애플리케이션에 로그인하면 애플리케이션은 세션 데이터를 ElastiCache에 기록한다. 사용자가 애플리케이션의 다른 인스턴스로 리디렉션될 경우 애플리케이션은 ElastiCache에서 세션 캐시를 검색할 수 있다. 사용자는 여전히 로그인되어 있으며 다시 로그인할 필요가 없다.

Redis와 Memcached는 어떤 차이가 있을까?

Redis의 경우 Multi AZ witrh Auto-Failover가 있고, 읽기를 확장하고 고가용성을 확보하려면 Read Replicas가 있다.

AOF persistence를 사용해 데이터 내구성을 확보하며, 백업 및 복원 기능도 있다.

다시 말해 Redis는 데이터 내구성에 중점을 둔다.

그리고 캐시로서의 기능 측면에서, 집합(Set) 및 정렬된 집합(sorted set)을 지원한다.

Redis는 복제되고 고가용성을 갖춘 지속적인 캐시로 나타난다.

반면에 Memached는 데이터의 분할을 위해 다중 노드를 사용한다.
이를 샤딩이라고 한다.

고가용성이 없으며, 복제가 발생하지 않는다. 지속적인 캐시도 아니며, 백업과 복원 기능도 없다.

이는 멀티 스레드 아키텍쳐이다.

Memcached에서는 여러 인스턴스가 함께 작동하고 있으며 어떤 샤딩을 통해 데이터를 분할한다.

Memcached는 데이터 손실을 감수할 수 있는 분산 캐시이다.

이것들이 두 기술 간의 주요 차이점이다.

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

Redis의 경우 두 가지 유형의 ElastiCache Replication가 있다.

첫 번째 유형은 Cluster Mode Disabled이다.

이 경우 하나의 주 노드와 최대 다섯 개의 레플리카 노드를 가질 수 있다.

Redis의 경우에 단일 샤드가 있으므로 모든 데이터가 이 샤드에 포함된다.
주 캐시 노드 하나와 선택적으로 최대 다섯 개의 캐시 레플리카를 설정할 수 있다.

주 노드의 실패가 발생할 경우 레플리카가 이를 대체할 수 있다.

캐시와 주 노드 간의 복제는 동기적이며, 주 노드는 읽기 및 쓰기에 사용되고 다른 노드는 읽기 전용이다.

재해 복구뿐만 아니라 ElastiCache for Redis의 읽기 성능을 확장하기 위해 Read Replica를 활성화 해 읽기 용량을 확장할 수 있다.

모든 데이터가 Redis 클러스터의 모든 노드에 있으므로 노드가 실패할 경우 데이터 손실을 방지할 수 있다.

또한 Multi-AZ가 기본적으로 활성화되어 있으므로 Multi-AZ 장애 조치에 유용하다.

클러스터 모드를 비활성화하면 수평 및 수직 확장이 가능하다.

Read Replica를 추가하거나 제거하여 수평 확장을 수행할 수 있다.(최대 다섯 개의 Read Replica) 수직 확장을 위해 더 크거나 작은 노드 유형으로 확장 또는 축소할 수 있다.

이 경우 배후에서는 이전 노드 그룹이 업그레이드 되고 새 노드 그룹이 생성되며 복제가 자동으로 수행된다.

새로운 노드 그룹이 최신 상태가 되면 DNS가 업데이트되고 응용 프로그램이 새로운 노드 그룹을 사용한다.

두 번째 모드는 Cluster Mode Enabled이다.

이 모드에서는 데이터가 여러 샤드로 분할되어 쓰기 확장이 가능하다.

데이터는 Shard 1, shard 2 또는 Shard N과 같은 여러 샤드에 부분적으로 저장된다.

각 샤드는 이전에 Cluster Mode가 비활성화된 경우와 마찬가지로 작동하며 하나의 주 노드와 최대 다섯 개의 레플리카 노드를 가질 수 있다.

데이터는 모든 샤드에 고르게 복제되며 각 샤드에 동일한 수의 레플리카가 설정된다.

Multi-AZ 기능도 사용 가능하며 클러스터 당 최대 500개의 노드를 가질 수 있다.
따라서 replicas를 설정하지 않으면 단일 마스터를 가진 500개의 샤드가 있지만 하나의 마스터와 하나의 레플리카를 설정한다면 250개의 샤드가 있게 된다.

그리고 예를 들어 다섯 개의 Replica와 하나의 마스터를 원한다면, 최대 83개의 샤드를 얻을 수 잇다.

클러스터 모드를 활성화할 때 데이터를 샤딩하는 것은 쓰기를 확장하고 데이터가 분할되어 여러 다른 샤드에 걸쳐 저장될 것이다.

클러스터 모드가 활성화되었을 때와 비활성화되었을 때의 주요 차이점이다.

클러스터 모드가 활성화되었을 때 Redis를 위해 Auto Scaling을 설정할 수 있다.

따라서 클러스터 내의 샤드 또는 레플리카 수를 자동으로 증가 또는 감소시킬 수 있다.

이는 Target Tracking 및 Shceduled Scaling Policies를 모두 지원한다.
이 기능을 사용하려면 클러스터 모드가 활성화되어 있어야 한다.

Target Tracking 을 진행하기 위해서 추적할 지표가 있어야 한다.
예를 들어 CPU 사용률이 있다.

Target Tracking 정책을 설정해 대상 CPU 사용률이 약 60%로 유지되도록 하면 CloudWatch 경보를 트리거하고 이 CloudWatch 경보를 이용해 클러스터 내의 샤드 수를 증가시키고, 새로운 샤드가 생성된다.

물론 응용 프로그램이 이러한 샤드를 활용할 수 있어야 한다.

클러스터에 연결하려면 Endpoint를 사용해야한다.
Connection Endpoint에 대해 이야기 해보자

Standalone Node

- 이 경우 노드의 단일 엔드포인트를 사용해 읽기 및 쓰기를 수행한다.
  Cluster Mode Disabled Cluster
- 이 경우 하나의 Primary 엔드포인트(모든 쓰기 작업에 대한 것)와 Reader 엔드포인트(모든 읽기 레플리카에 걸친 읽기 작업에 대한 것)이 있습니다.
- 그리고 개별 노드에 액세스하여 읽기 작업을 수행하는 Node 엔드포인트도 있다.
  Cluster Mode Enabled Cluster
- 클러스터 모드와 호환되는 모든 읽기 및 쓰기 작업에 대해 사용되는 Configuration 엔드포인트가 있다.
- 그리고 개별 노드에 액세스하여 읽기 작업을 수행하는 Node 엔드포인트가 있다.

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

Redis가 SysOps 시험에서 어떻게 나오는지 알아보자

먼저 Redis의 확장 방법을 알아야한다.

Redis에는 Cluster Enabled 모드와 Cluster Disabled 모드가 있다.

**Cluster Disabled** 모드에는 하나의 노드 그룹이 있으며 주 노드와 최대 5개의 레플리카 노드가 있다.

수평 확장을 수행하려면 노드 그룹에서 Read Replica를 추가하거나 제거하는 것만으로도 간단하다.

다른 종류로는 수직 확장이 있다.
이 경우 ElastiCache 클러스터의 내부 인스턴스 유형을 변경하는 것이다.

이 작업은 Redis 에서 한 번의 클릭으로 수행된다. 그러나 내부적으로는 ElastiCache가 새로운 노드 그룹을 생성하고 이전 노드 그룹에서 새로운 노드 그룹으로 데이터 복제가 수행될 것이다.

그리고 마지막으로 복제가 완료되면 ElastiCache 서비스에서 DNS 업데이트가 수행되어 응용 프로그램이 새로운 노드 그룹에 직접 연결할 수 있도록 투명하게 처리될 것이다.

이것이 Cluster Disabled 의 경우고 **Cluster Enabled** 의 경우를 살펴보자

두 가지 유형의 확장이 있다.

1.  온라인 확장

- 클러스터가 확장되는 동안 클러스터가 계속 가동되어 있다.
- 다운타임이 없고, 성능 저하가 발생할 수 있지만 Redis 클러스터는 계속 가동된다.

2.  오프라인 확장

- 클러스터를 오프라인 상태로 가져간다.
- 확장 프로세스 중에 요청을 처리할 수 없게 된다.

Cluster Enabled의 경우의 수평 및 수직 확장을 살펴보자

클러스터 모드가 활성화된 경우 레디스는 리샤딩(샤드 추가 및 제거에 따른 스케일링) 및 샤드 리밸런싱을 수행하여 키 공간을 가능한 많이 분산시킬 수 있다.

이 수평 확장은 온라인 및 오프라인 모두에서 지원된다.

수직 확장은 노드 유형을 변경하는 것으로, 이것은 온라인 확장을 지원한다. 그리고 이는 한 번의 클릭으로 수행되며 내부에서 처리된다.

모니터링할 Redis 메트릭

- Evictions
  - 공간을 확보하기 위해 캐시가 새로운 쓰기 작업을 위해 만료되지 않은 항목을 삭제한 횟수를 나타낸다.
  - 쉽게말해 메모리가 과다하게 사용되는 경우를 의미한다.
  - 해결책은 만료된 항목을 자동으로 삭제하도록 eviction policy를 선택하는 것이다.
  - 예를들어 가장 최근에 사용되지 않은 항목을 자동으로 삭제하여 너무 많은 삭제를 방지하거나, 더 큰 노드 유형을 선택하거나, Redis를 클러스터 모드로 사용하는 경우 더 많은 노드를 추가하여 수평으로 확장할 수 있다.
- CPUUtilization
  - CPU 사용률이 너무 높으면 더 큰 노드 유형으로 확장하거나, 더 많은 노드를 추가해 수평으로 확장해야한다.
- SwapUsage
  - 스왑 사용량은 50 MB를 초과해서는 안되며, 그렇다면 메모리 설정을 확인해야 한다.
- CurrConnections
  - 이는 Redis 클러스터에 대한 현재 및 활성 연결 수를 나타낸다.
  - 이 값이 너무 높으면 애플리케이션이 매번 Redis에 연결을 초기화하고 있는 것일 수 있으므로 이를 확인해야한다.
- DatabaseMemoryUsagePercentage
  - 메모리 사용률의 백분율
- NetworkBytesIn/Out & NetworkPacketsIn/Out
- ReplicationBytes
  - 클러스터 내 데이터의 복제에 관한 정보
  - 복제 바이트는 높아야한다.
- ReplicationLag
  - 클러스터 낸 데이터의 복제에 관한 정보
  - 복제 지연은 낮아야한다.
  - 복제 노드와 주 노드 사이에 지연이 없어야 한다.

**정리**
- Redis 확장 방법에는 Cluster Enabled 모드, Cluster Disabled 모드가 있다.
  - Cluster Disabled
    - 하나의 노드 그룹이 있으며, 주 노드와 최대 5개의 레플리카 노드가 있다.
    - 수평 확장을 수행하려면 노드 그룹에서 Read Replica를 추가하거나 제거하면 되어서 간단하다.
    - 수직 확장 방법도 있다. 이 경우 Elasticache 클러스터 내부 인스턴스 유형을 변경한다. 수직 확장은 한번의 클릭으로 수행된다. 내부적으로는 Elasticache가 새로운 노드 그룹을 생성하고 이전 노드 그룹에서 새로운 노드 그룹으로 데이터 복제가 수행된다. 복제가 완료되면 ElastiCache 서비스에서 DNS 업데이트가 수행 돼 응용 프로그램이 새로운 노드 그룹에 직접 연결할 수 있도록 처리된다.
  - Cluster Enabled
    - 두 가지 확장이 있다.
    - 온라인 확장
      - 클러스터가 확장되는 동안 클러스터가 계속 가동 됨
      - 다운 타임이 없고, 성능 저하가 발생할 수 있지만 Redis 클러스터는 계속 가동됨
    - 오프라인 확장
      - 클러스터를 오프라인 상태로 가져간다.
      - 확장 프로세스 중에 요청을 처리할 수 없게 된다.
    - Enabled에서는 레디스는 리샤딩(샤드 추가 및 제거에 따른 스케일링) 및 샤드 리밸런싱을 수행하여 키 공간을 가능한 많이 분산시킬 수 있다. 이 방법은 수평 확장으로 온/오프라인 모두에서 지원된다.
    - 수직 확장은 노드 유형을 변경하는 것으로, 온라인 확장을 지원하고, 한 번의 클릭으로 내부에서 수행된다.
- Redis 메트릭
  - Evictions
    - 공간을 확보하기 위해 새로운 쓰기 작업을 위해 만료되지 않은 항목을 캐시가 삭제한 횟수를 나타낸다.
    - 쉽게 생각해 메모리가 과다하게 사용되는 경우를 의미한다.
    - 해결하기 위해서는 만료된 항목을 자동 삭제하는 eviction policy 를 선택하면 된다.
  - CPUUtilization
    - CPU 사용률이 너무 높으면 더 큰 노드 유형으로 확장하거나, 더 많은 노드를 추가해 수평으로 확장해야 한다.
  - SwapUsage
    - Swap 사용량은 50MB를 초과해서는 안되고, 메모리 설정을 확인해야 한다.
  - CurrConnections
    - Redis 클러스터에 대한 현재 활성 연결 수를 나타낸다.
    - 값이 너무 높으면 애플리케이션이 매번 Redis에 연결을 초기화하고 있을수도 있으니 확인해야한다.
  - DatabaseMemoryUsagePercentage
    - 메모리 사용률의 백분율
  - NetworkBytesIn/Out & NetworkPacketsIn/Out
  - ReplicationBytes
    - 클러스터 내 데이터의 복제에 관한 정보
    - 높은 지표를 유지하는 것이 좋다.
  - ReplicationLag
    - 클러스터 내 데이터 복제에 관한 정보이며, 복제 지연을 의미하므로 낮을수록 좋다.
    - 복제 노드와 주 노드 사이에 지연이 없어야 한다.
  
## **ElastiCache Memcached for SysOps**

Memcached의 시험관점에서 알아야 할 내용을 살펴보자

Memcached의 스케일링에 대해 이야기 해보자

Memcached 클러스터가 있고 캐시 노드가 두 개 있다고 가정 해보자
memcached 클러스터는 1부터 40 사이의 노드를 가질 수 있다. 이는 소프트 limit이다.

수평으로 확장하려면 클러스터에서 노드를 추가하거나 제거해야 한다.

그리고 Auto-discovery를 사용해 애플리케이션이 이러한 새 노드를 찾을 수 있다.
따라서 수평 확장을 수행하려면 클러스터에 캐시 노드를 추가하기만 하면 되며, Auto-discovery를 사용해 원활하게 작동한다.

이제 수직 확장의 경우, 더 크거나 작은 노드 유형으로 확장할 수 있다.
스케일 업 프로세스는 새로운 노드 유형을 가진 새 클러스터를 생성하는 것이다.

그 다음 애플리케이션을 새 클러스터의 엔드포인트를 사용하도록 업데이트하고 이전 클러스터를 삭제 해야한다. 이 작업은 수동으로 진행해야 한다.

Memcached는 백업 시스템이 없다. 따라서 Memcached 클러스터 또는 노드는 데이터가 없는 상태로 시작된다. 그리고 애플리케이션에서 데이터를 직접 채워넣어야 한다.

Memcached의 자동 탐지(Auto Discovery)란 무엇인가?
클러스터가 있고 클라이언트가 연결하려고 한다. 일반적으로 클라이언트는 각각의 노드를 참조하여 DNS 엔드포인트를 사용해 연결해야한다.

시간이 지나고 새 노드를 추가하거나 제거하면 클라이언트가 모든 노드에 대한 업데이트를 받을 수 없다. 그래서 캐시 노드는 모든 다른 노드들에 대해 알고 있는 것이다.
그래서 클라이언트는 configuration endpoint에 연결될 것이고 endpoint는 cache node중 하나의 IP 주소를 클라이언트에게 반환하게 된다.

그 다음 캐시 노드 1은 클러스터 내 모든 노드의 IP 주소 메타데이터를 응답하고 클라이언트는 이를 사용해 클러스터에서 올바른 데이터를 찾아 연결할 수 있다.

마지막으로 모니터링할 메트릭은 Redis와 매우 유사하다.

- Evictions
  - 공간을 확보하기 위해 캐시가 새로운 쓰기 작업을 위해 만료되지 않은 항목을 삭제한 횟수를 나타낸다.
  - 쉽게말해 메모리가 과다하게 사용되는 경우를 의미한다.
  - 해결책은 만료된 항목을 자동으로 삭제하도록 eviction policy를 선택하는 것이다.
  - 예를들어 가장 최근에 사용되지 않은 항목을 자동으로 삭제하여 너무 많은 삭제를 방지하거나, 더 큰 노드 유형을 선택하거나, Redis를 클러스터 모드로 사용하는 경우 더 많은 노드를 추가하여 수평으로 확장할 수 있다.
- CPUUtilization
  - CPU 사용률이 너무 높으면 더 큰 노드 유형으로 확장하거나, 더 많은 노드를 추가해 수평으로 확장해야한다.
- SwapUsage
  - 스왑 사용량은 50 MB를 초과해서는 안되며, 그렇다면 메모리 설정을 확인해야 한다.
- CurrConnections
  - 이는 Redis 클러스터에 대한 현재 및 활성 연결 수를 나타낸다.
  - 이 값이 너무 높으면 애플리케이션이 매번 Redis에 연결을 초기화하고 있는 것일 수 있으므로 이를 확인해야한다.
- FreeableMemory
  - 호스트에서 사용 가능한 메모리의 양

**정리**
- Memcached 스케일링
  - Memcached 클러스터가 있고 캐시 노드가 2개 있다고 가정했을 때 클러스터는 1부터 40 사이의 노드를 가질 수 있다. (소프트 limit)
  - 수평 확장
    - 클러스터에서 노드를 추가하거나 제거해야한다.
    - Auto-discovery를 사용해 애플리케이션이 새 노드를 찾을 수 있다.
    - 클러스터에 캐시 노드를 추가하기만 하면 되고, Auto-discovery를 사용해 원활히 수평 확장이 된다.
  - 수직 확장
    - 더 크거나 작은 노드 유형으로 확장할 수 있다.
    - 스케일 업은 새로운 노드 유형을 가진 새 클러스터를 생성하고 애플리케이션을 새 클러스터의 엔드포인트를 사용하도록 업데이트하고 이전 클러스터를 삭제 해야한다. 이 작업은 수동으로 해야한다.
- Memcached는 백업 시스템이 없다. Memcached 클러스터 또는 노드는 데이터가 없는 상태로 시작된다. 그리고 애플리케이션에서 데이터를 직접 채워 넣어야 한다.
- Auto-discovery는 클라이언트가 DNS 엔드포인트를 사용해서 연결하고자 할 때 시간이 지나고 새 노드를 추가하거나 제거하면 클라이언트가 모든 노드에 대한 업데이트를 받을 수 있게 캐시 노드가 다른 노드를 알고 있고, 클라이언트는 Configuration endpoint에 연결되어 endpoint에서 제공해주는 cache node 중 하나의 IP 주소를 클라이언트에게 반환하는 것이다. 그리고 cache node 중 하나는 클러스터 내 모든 노드의 IP 주소 메타데이터를 응답하고 클라이언트는 이를 사용해 클러스터에서 올바른 데이터를 찾아 연결하는 것
- 모니터링 메트릭은 Redis와 매우 유사하다.
  - Evictions
  - CPUUtilization
  - SwapUsage
  - CurrConnections
  - FreeableMemory
  


## **CloudWatch Metrics**

CloudWatch 메트릭

- AWS의 모든 서비스에 대한 메트릭을 제공
- 메트릭의 이름이 해당 메트릭이 의미하는 것을 대략적으로 알려준다. (CPUUtilization, NetworkIn 등...)
- 메트릭은 Namespace에 속함
- 메트릭의 속성인 dimension을 가진다. (Instance id, environment 등...)
- 한 메트릭 당 최대 30개의 Dimension을 선택할 수 있다.
- 메트릭에는 타임 스탬프가 포함되며,
- CloudWatch 대시보드를 사용해 메트릭을 볼 수 있다.

EC2 Detailed Monitoring

- 기본적으로 EC2 인스턴스의 메트릭은 5분마다 수집되지만, 비용 추가로 EC2 Detailed 모니터링을 활성화하면 1분마다 메트릭 데이터를 얻을 수 있다.
- 이를 활성화하면 EC2 인스턴스의 메트릭 변화에 더 빠르게 대응할 수 있으며, ASG에 대한 이점을 얻을 수 있다.
- EC2 Detailed Monitoring은 10개까지 Free Tier이다.
- RAM 사용량은 기본적으로 푸시되지 않으며, 인스턴스에서 사용자 정의 메트릭으로 푸시해야 한다.

콘솔에서 봤을 때 CloudWatch 대시보드에서 Metric 탭이 있으며 All Metric을 확인해보면 여러가지 서비스를 기준으로 네임스페이스 별 메트릭을 볼 수 있다.

CloudWatch 메트릭은 시간 범위를 선택하고 다양한 방식으로 필터링하여 사용할 수 있다.

필터링, 대시보드에 추가, CSV로 다운로드, 공유 등 다양한 작업을 수행할 수 있으며 리전, Dimension, 리소스 등을 기준으로 메트릭을 필터링할 수 있다.

**정리**
- CloudWatch Metrics
  - AWS의 모든 서비스에 대한 메트릭을 제공하며, 메트릭의 이름을 보면 해당 메트릭이 의미하는 것을 대략적으로 알 수 있다. 예: CPUUtilization, NetworkIn 등
  - 메트릭은 Namespace로 그룹화된다.
  - 메트릭은 dimension이라는 측정 기준을 가지며, 한 메트릭 당 최대 30개의 Dimension을 선택할 수 있다. 예: InstanceId, Environment 등
  - 메트릭은 타임 스탬프가 포함되며, CloudWatch 대시보드를 사용해 메트릭을 볼 수 있다.
- EC2 Detailed Monitoring
  - 기본적으로 EC2 인스턴스는 5분 주기로 수집되지만, EC2 Detailed Monitoring을 활성화하면 1분마다 메트릭 데이터를 얻는다. 대신 비용이 추가됨
  - 활성화 하면 EC2 인스턴스의 메트릭 변화에 빠르게 대응할 수 있으며, ASG와 같이 사용하면 로드의 변화에 빠르게 대응할 수 있는 이점이 있다.
  - EC2 Detailed Monitoring는 10개까지 Free Tier이다.
  - RAM 사용량은 Detailed Monitoring을 활성화해도 푸시되지 않으며 Agent를 설치해야 한다.
- CloudWatch 대시보드에서 All Metric을 확인하면 여러가지 서비스를 네임스페이스 별로 메트릭을 확인할 수 있다.
- 메트릭은 시간 범위를 선택하고, 다양한 방식으로 필터링 해 사용 가능하다.
- 필터링, 대시보드에 추가, CSV로 다운로드, 공유 등 다양한 작업을 수행할 수 있으며 리전, Dimension, 리소스 등을 기준으로 메트릭을 필터링할 수 있다.



## **CloudWatch Custom Metrics**

이 전에 봤던 모든 메트릭은 기본적으로 활성화된 내부 서비스에서 직접 가져온 메트릭이다.
그러나 CloudWatch에서 사용자 정의 메트릭을 가져올 수 있는 방법이 있다.

사용자는 RAM의 메모리 사용률이나 디스크 사용률과 같은 메트릭을 CloudWatch에 푸시하려면 PutMetricData라는 API 호출을 사용할 수 있다.

사용자는 세그먼트 메트릭에 Dimension 또는 Attribute를 추가할 수 있다. 예를 들어 Instance.id, Environment.name 등

그리고 Metric Resolution이라는 API 매개변수로 메트릭 해상도를 지정할 수 있다.

1.  Standard로 지정하면 1분마다 메트릭을 푸시할 수 있다.
2.  High Resolution으로 지정하면 1, 5, 10, 30 초마다 메트릭을 푸시할 수 있다.

사용자 정의 메트릭의 중요한 측면 중 하나는 메트릭을 보낼 때 메트릭의 시간을 조정하여 푸시할 수도 있다는 것이다. 이렇게 해도 CloudWatch에서는 오류라고 받아들이지 않는다.
그래서 EC2 인스턴스의 시간이 현재 AWS의 실제 시간과 동기화되어 있는지 확인해야 한다.

사용자 정의 메트릭을 푸시해보자

AWS CLI CloudWatch 문서의 put-metric-data 섹션을 참고해보면 timestamp 매개변수가 있는 것을 알 수 있다. 과거 최대 2주간 미래 최대 2시간까지 타임스탬프를 지정할 수 있다.

데이터 이름, 값을, 단위, 차원 및 저장 해상도등을 지정해 명령어를 수행하면 CloudWatch에 데이터를 푸시하게 된다.

CloudWatch의 Agent는 정기적으로 PutMetricData API 호출을 사용해 메트릭을 CloudWatch로 푸시한다.

**정리**
- CloudWatch Custom Metrics
  - 활성화된 내부 서비스에서 기본적으로 메트릭이 푸시된다. 그러나 사용자 정의 메트릭을 가져올 수 있는 방법이 있다.
  - 사용자는 PutMetricData라는 API 호출을 사용해 RAM의 메모리 사용률이나, 디스크 사용률 같은 메트릭을 푸시할 수 있다.
  - Instance.id, Environment.name 등의 Dimension 또는 Attribute를 segment 메트릭에 추가할 수 있다.
  - StorageResolution 같은 경우 API 파라미터를 통해 메트릭 해상도를 조절할 수 있다.
    1. Standard로 지정하면 1분마다 메트릭을 푸시할 수 있음
    2. High Resolution의 경우 1/5/10/30초로 설정가능하나 비쌈
  - Custom Metric의 중요한 점중 하나는 메트릭을 보낼 때 메트릭의 시간을 조정해 과거 2주 또는 향후 2시간까지 메트릭을 푸시하는 경우 CloudWatch에서 오류라고 받아들이지 않는다. 중요한 시험 포인트이다. 그래서 EC2 인스턴스의 시간이 현재 AWS의 실제 시간과 동기화되어 있는지 확인해야 함

## **CloudWatch Dashboards**

CloudWatch 대시보드는 메트릭을 표시할 수 있다.

- 주요 메트릭 및 Alarm에 액세스할 수 있으며, 대시보드는 Global이다. 즉 여러 리전 및 AWS의 다른 계정에서 다른 리전의 그래프를 포함할 수 있다. (시험 관점에서 중요)
- 대시보드에서 타임 존 및 시간 범위를 변경할 수 있으며 자동 새로 고침을 설정할 수 있다.
- AWS 계정이 없는 사람들과 대시보드를 공유할 수 있다.
- 가격은 무료로 최대 3개의 대시보드와 최대 50개의 메트릭을 무료로 제공하며 이후에는 대시보드 당 월 3달러를 지불해야 한다.

**정리**
- CloudWatch Dashboards
  - 대시보드는 주요 메트릭 및 Alarm에 액세스할 수 있는 Global 서비스이다. 그래서 여러 리전 및 AWS의 다른 계정과 다른 리전의 그래프를 포함할 수 있다. (시험 관점에서 중요)
  - 대시보드에서 타임 존 및 시간 범위를 변경할 수 있고 자동 새로 고침을 설정할 수 있다.
  - AWS 계정이 없어도 대시보드를 공유할수 있다.
  - 무료 3개의 대시보드와 최대 50개의 메트릭을 제공하고, 이후에는 대시보드 당 월 3달러를 지불해야 한다.

## **CloudWatch Logs**

CloudWatch Logs는 AWS에서 응용 프로그램 로그를 저장하는 이상적인 장소이다.

이를 위해 먼저 로그 그룹을 정의해야 한다. 이 그룹은 원하는대로 이름을 지정할 수 있지만, 일반적으로 응용 프로그램 중 하나를 나타낸다.

그런 다음 로그 그룹 내에서 여러 로그 스트림이 있다. 이는 응용 프로그램 내의 로그 인스턴스나 특정 로그 파일 또는 클러스터의 일부로써 특정 컨테이너를 나타낸다.

그런 다음 로그 expiration policies를 정의한다. 이 정책을 사용해 로그를 영구적으로 보존하거나 만료시킬 수 있다. 만료 기간은 1일부터 10년 그리고 삭제 안함이 있다.

CloudWatch Logs를 다양한 대상으로 보낼 수 있다. 예를 들어 S3로 일괄적으로 내보내거나 Kinesis Data Streams, Kinesis Data Firehose, AWS Lambda, OpenSearch로 스트림을 전송할 수 있다.

모든 로그는 기본적으로 암호화되며, 필요한 경우 자체 키를 사용해 KMS 기반 암호화를 설정할 수 있다.

어떤 Resource의 로그 데이터를 보낼 수 있나?

- SDK 또는 CloudWatch Logs Agent 또는 CloudWatch 통합 Agent를 사용해 로그를 전송할 수 있다. CloudWatch 통합 Agent는 로그를 CloudWatch로 보내며, CloudWatch Logs Agent는 이제 deprecated 되었다.
- Elastic Beanstalk는 응용 프로그램에서 직접 로그를 수집해 CloudWatch에 보낸다.
- ECS는 컨테이너에서 직접 로그를 CloudWatch로 조낸다.
- Lambda는 함수 자체에서 로그를 보낸다.
- VPC Flow Logs는 VPC 메타데이터 네트워크 트래픽에 특정 로그를 보낸다.
- API GW는 API GW에 대한 모든 요청을 CloudWatch Logs로 보낸다.
- CloudTrail은 필터를 기반으로 직접 로그를 보낼 수 있다.
- Route53은 서비스에 대한 DNS 쿼리를 모두 로깅한다.

CloudWatch Logs Insights를 사용하면 Logs에서 로그를 쿼리할 수 있다.

Logs Insights는 Logs 내 쿼리 기능으로, 쿼리를 작성하고 적용할 시간 범위를 지정한 다음 자동으로 시각화된 결과를 얻을 수 있다.

또한 이 시각화를 생성하는 데 사용된 특정 로그 라인을 볼 수 있다.

이 시각화는 결과로 내보낼 수도 있으며 원하는 때마다 다시 실행할 수 있도록 대시보드에 추가할 수도 있다.

CloudWatch Logs Insights 콘솔의 일부로 제공되는 간단한 쿼리가 많이 있다. 예를 들어 가장 최근 25개의 이벤트를 찾거나 로그에 "예외" 또는 "오류"가 있는 이벤트의 수를 살펴볼 수 있다. 또는 특정 IP를 찾을 수 있다.

목적에 부합하는 쿼리 언어를 제공한다.

- CloudWatch Logs에서 쿼리를 작성하는 데 필요한 모든 필드가 자동으로 감지되어 조건에 따라 필터링할 수 있다.
- 통계를 계산하고 이벤트를 정렬하고 이벤트의 수를 제한할 수 있다.
- 쿼리를 저장하고 CloudWatch 대시보드에 추가할 수도 있다.

여러 로그 그룹을 한 번에 쿼리할 수 있으며, 이들이 다른 계정에 속해 있더라도 쿼리할 수 있다.

CloudWatch Logs Insights 는 실시간 엔진이 아닌 쿼리 엔진이다. 따라서 쿼리를 실행할 때에만 historical 데이터를 쿼리한다.

CloudWatch Logs는 대상이 여러개 있다.

첫째로는 S3이다.

- 모든 로그를 S3로 일괄적으로 내보내는 것이며, 최대 12시간이 걸릴 수 있다.
- Export를 시작하는 API 호출은 CreateExportTask이다. 이것은 batch로 내보내는 것이므로 실시간 또는 Almost-realtime이 아니다. 실시간으로 하고 싶다면 CloudWatch Logs Subscription을 사용해야 한다.

CloudWatch Logs Subscription

- 로그 이벤트의 실시간 스트림을 받을 수 있으며, 처리 및 분석을 수행할 수 있다.
- 이 데이터를 Kinesis Data Stream, Kinesis Data Firehose 또는 Lambda와 같은 여러 위치로 보낼 수 있다.
- Subscription Filter를 지정해 목적지로 전달할 로그 이벤트 유형을 지정할 수 있다.
  - Kinesis Data Stream으로 데이터를 보내고 Kinesis Data Firehose, Kinesis Data Analytics, Amazon EC2 또는 Lambda 와의 통합을 사용하려는 경우 좋은 선택이 될 것이다.
  - Kinesis Data Firehose로 직접 보낼 수도 있다. 데이터를 거의 실시간으로 S3 똔느 OpenSearch Service로 보낼 수 있다.
  - 사용자 정의 Lambda 함수를 작성하거나 OpenSearch Service로 실시간 데이터를 보내는 관리형 Lambda 함수를 사용할 수 있다.

구독 필터를 사용하면 여러 CloudWatch Logs에서 데이터를 다른 계정 및 다른 리전으로 집계하여 하나의 특정 계정에 있는 Kinesis Data Stream과 같은 공통 목적지로 데이터를 집계하는 것이 가능하다. 그리고 거의 실시간으로 S3로 이동한다.

Logs Subscription을 수행하는 방법의 핵심은 목적지를 사용해야 한다는 것이다.

예를 들어 보내는 계정과 받는 계정이 있을 때 Subscription Filter를 생성하고 이를 받는 계정의 Kinesis Data Stream의 구독 목적지로 전송한다.

그런 다음 첫 번째 계정이 실제로 이 목적지로 데이터를 보낼 수 있도록 목적지 액세스 정책(Destination Access Policy)을 첨부한다.

그런 다음 받는 계정에 Kinesis Data Stream으로 레코드를 보낼 수 있는 권한이 있는 IAM 역할을 생성하고 이 역할이 첫 번째 계정에 의해 assume될 수 있도록 확인한다.

이런 모든 사항이 갖춰지면 하나의 계정의 CloudWatch Logs에서 다른 계정의 목적지로 데이터를 보낼 수 있다.

**정리**
- CloudWatch Logs
  - AWS에서 응용 프로그램 로그를 저장하는 장소이다.
  - 로그 그룹을 통해 로그를 저장하는데, 로그 그룹 이름은 아무렇게나 지정 가능하나 일반적으로 응용 프로그램 이름으로 한다.
  - 로그 그룹 내에 여러 로그 스트림이 있다. 응용 프로그램, 특정 로그 파일, 특정 컨테이너의 로그를 나타낸다.
  - Expiration Policies를 사용해 로그를 영구적으로 보존하거나 만료시킬 수 있다. 만료 기간은 1일~10년 그리고 삭제 안함이 있다. (실제로 Log Retension을 설정해도 삭제되는 데 최대 72시간이 걸린다고 한다.)
  - Logs를 다양한 대상으로 보낼 수 있다. 예를 들어 S3로 일괄 전송하거나, Kinesis Data Streams, Kinesis Data Firehose, Lambda, OpenSearch 로 스트림을 전송할 수 있다.
  - 모든 로그는 기본적으로 암호화되고, 필요한 경우 KMS 기반 암호화를 설정할 수 있다.
  - CloudWatch Logs로 데이터 전송 가능한 서비스
    - CloudWatch 통합 Agent, SDK (기존에 CloudWatch Logs Agent가 있었는데 Deprecated 됨)
    - Elastic Beanstalk 응용 프로그램에서 직접 로그를 수집해 CloudWatch에 보낸다.
    - ECS는 컨테이너에서 직접 로그를 CloudWatch에 보낸다.
    - VPC Flow Logs는 VPC 메타데이터 네트워크 트래픽에 특정 로그를 보낸다.
    - API GW는 API GW에 대한 모든 요청을 CloudWatch에 보낸다.
    - CloudTrail은 필터를 기반으로 직접 로그를 보낼 수 있다.
    - Route53은 서비스에 대한 DNS 쿼리를 모두 로깅한다.
  - CloudWatch Logs Insights를 사용하면 Logs에서 로그를 쿼리할 수 있다.
    - Logs Insights는 Logs 내 쿼리 기능으로, 쿼리를 작성하고 적용할 시간 범위를 지정한 다음 자동으로 시각화된 결과를 얻을 수 있다.
    - 시각화를 생성하는 데 사용된 특정 로그 라인을 볼수 있으며, 시각화를 추출할 수 있고, 원할 때마다 특정 쿼리를 다시 실행할 수 있도록 대시보드에 추가할 수도 있다.
    - 콘솔에서 제공되는 간단한 쿼리가 많이 있다. 예를 들어 가장 최근 25개의 이벤트를 찾거나, 로그에 "Exceptions" 또는 "Error" 가 있는 이벤트의 수를 살펴보거나, 특정 IP를 기반으로 찾을 수도 있다.
  - 목적 기반의 쿼리 언어를 제공한다.
    - CloudWatch Logs에서 쿼리를 작성하는 데 필요한 모든 필드가 자동으로 감지되어 조건에 따라 필터링할 수 있다.
    - 통계를 계산하고 이벤트를 정렬하고 이벤트의 수를 제한할 수 있다.
    - 쿼리를 저장하고 CloudWatch 대시보드에 추가할 수도 있다.
  - 여러 로그 그룹을 한 번에 쿼리할 수 있고, 로그 그룹이 다른 계정에 있더라도 쿼리할 수 있다.
  - Logs Insights는 실시간 엔진이 아닌 쿼리 엔진이기 때문에 쿼리를 실행할 때만 hisotical 데이터를 쿼리한다.
  - CloudWatch Logs는 대상이 여러 개 있다.
    - S3
      - 모든 로그를 S3로 일괄적으로 내보내는 것이고, 최대 12시간이 걸릴 수 있다.
      - Export를 시작하는 API 호출은 CreateExportTask이다. 이는 배치로 내보내는 것으로 실시간이나, Almost-realtime이 아니다.
      - 실시간으로 하고 싶다면 CloudWatch Logs Subscription을 사용해야 한다.
    - CloudWatch Logs Subscription
      - 로그 이벤트의 실시간 스트림을 받을 수 있으며, 처리 및 분석을 수행할 수 있다.
      - 데이터를 Kinesis Data Stream, Kinesis Data Firehose 또는 Lambda와 같은 여러 위치로 보낼 수 있다.
      - Subscription Filter를 지정해 목적지로 전달할 로그 이벤트 유형을 지정할 수 있다.
        - Kinesis Data Stream으로 데이터를 보내고 Kinesis Data Firehose, Kinesis Data Analytics, Amazon EC2 또는 Lambda와의 통합을 사용하는 경우 좋을 것이다.
        - Kinesis Data Firehose로 직접 보낼수도 있다. 데이터를 거의 실시간으로 S3 또는 OpenSearch Service로 보낼 수 있다.
        - 사용자 정의 Lambda 함수를 작성하거나 OpenSearch Service로 실시간 데이터를 보내는 관리형 Lambda 함수를 사용할 수 있다.
      - Subscription Filter를 사용하면 여러 CloudWatch Logs에서 데이터를 다른 계정 및 다른 리전으로 집계해 하나의 특정 계정에 있는 Kinesis Data Stream과 같은 공통 목적지로 데이터를 집계하는 것이 가능하다. 그리고 거의 실시간으로 S3로 이동한다.
      - 교차 계정으로 Subscription을 수행하는 방법의 핵심은 목적지를 생성해 사용하는 것이다. 
        - 예를 들어 보내는 계정과 받는 계정이 있을 때 Subscription Filter를 생성하고 이를 받는 계정의 Kinesis Data Stream의 구독 목적지로 전송한다.
        - 그 다음 보내는 계정이 실제로 데이터를 보낼 수 있도록 목적지 액세스 정책(Destination Access Policy)을 첨부한다.
        - 그 다음 받는 계정이 Kinesis Data Stream으로 Record를 보낼 수 있는 권한이 있는 IAM 역할을 생성하고 이 역할이 첫 번째 계정에 의해 Assume 될 수 있도록 확인한다.
        - 이렇게 모든 사항이 갖춰지면 하나의 계정에서 CloudWatch Logs에서 다른 계정의 목적지로 데이터를 보낼 수 있다.

## **CloudWatch Alarms**

CloudWatch의 알람에 대해 논의해보자

알람은 모든 메트릭에서 알림을 트리거하는 데 사용된다. 다양한 옵션에 대해 복잡한 알람을 정의할 수 있다. 예를 들어 샘플링, %, 최대/최소 등이 있다.

알람에는 세 가지 상태가 있다.

- OK는 알람이 트리거되지 않은 상태를 나타낸다.
- INSUFFICIENT_DATA는 알람이 상태를 결정할 데이터가 충분하지 않은 상태를 나타낸다.
- ALARM은 임계값이 위반되었으며 따라서 알림이 전송될 것임을 의미한다.

period는 알람이 메트릭을 평가하는 데 걸리는 시간을 의미한다. 매우 짧을 수도 매우 길 수도 있으며 High Resolution 사용자 정의 메트릭에도 적용할 수 있다. 예를들어 10초, 30초 또는 60초의 배수이다.

알람에는 세 가지 주요 대상이 있다.

1.  EC2 인스턴스에 대한 작업이다.

- 예를 들어 Stopping, Terminating, rebooting, recovering

2.  ASG의 작업을 트리거하는 것이다.

- 예를 들어 스케일 아웃 또는 스케일 인이다.

3.  마지막으로 SNS 서비스에 알림을 보내는 것이다.

- 예를 들어 SNS 서비스에서 Lambda 함수에 연결하여 알람이 위반되었을 때 Lambda 함수가 원하는 작업을 수행하도록 할 수 있다.

Composite alarms(복합 알람)

- CloudWatch 알람은 단일 메트릭에 대한 것이지만, 여러 메트릭을 사용하려면 복합 알람을 사용해야 한다.
- 복합 알람은 실제로 여러 다른 알람의 상태를 측정하고 이러한 알람은 각각 다른 메트릭에 의존할 수 있다.
  따라서 복합 알람은 이러한 다른 알람을 결합하는 작업이다.
- AND 조건 또는 OR 조건을 사용해 검사 조건을 유연하게 지정할 수 있다.
- 이는 "Alarm noise"를 줄이는 데 매우 유용하다.

복잡한 복합 알람을 만들어서 "CPU가 높고 네트워크가 높을 때만 알람을 받고 싶다"와 같은 조건을 지정할 수 있다.
복합 알람을 통해 매우 창의적으로 사용할 수 있다.

EC2 instance recovery에 대해 이야기 해보자
EC2 VM을 확인하는 Status health check 및 기본 하드웨어를 확인하는 System health check가 있다.

이 두 가지 check에 대한 CloudWatch 알람을 정의할 수 있으며, 이렇게 하면 특정 EC2 인스턴스를 모니터링 할 수 있다.

그리고 알람이 위반되면 EC2 인스턴스 복구를 시작할 수 있다.
예를 들어 EC2 인스턴스를 한 호스트에서 다른 호스트로 이동하는 것과 같은 행위를 할 수 있다.

> 최근 문서 확인 시 복구 작업은 StatusCheckFailed_Instance가 아닌 StatusCheckFailed_System을 통해서만 사용할 수 있다.

복구를 수행할 때는 인스턴스에 대해 동일한 private/public/EIP/메타데이터/Placement Group 을 유지시켜준다.

또한 EC2 인스턴스가 복구되었다는 알람을 SNS 주제로 보낼 수도 있다.

CloudWatch Logs 메트릭 필터 위에 알람을 생성할 수 있다.
그리고 EC2 인스턴스가 ERROR과 같은 단어가 너무 많이 발생할 때 (로그가 발생할 때) 알람을 보내고 Amazon SNS 메시지를 보낸다.

알람을 테스트하려면 set-alarm-state라는 CLI 호출을 사용할 수 있다. 이것은 특정 임계값에 도달하지 않았더라도 알람을 트리거하려는 경우에 유용하다.

왜냐면 인프라에 대한 올바른 조치를 취하는지 여부를 확인하기 위해 알람이 트리거되는 것이 올바른지 확인하려고 할 때 도움이 된다.

**정리**
- CloudWatch Alarms
  - 알람은 모든 메트릭에서 알림을 트리거하는 데 사용된다. 샘플링, %, 최대/최소 등 다양한 옵션에 대해 복잡한 알람을 정의할 수 있다.
  - 알람은 세 가지 상태가 있다. 
    "OK" 는 알람이 트리거되지 않은 상태를 나타낸다.
    "INSUFFICIENT_DATA"는 알람이 상태를 결정할 데이터가 충분하지 않은 상태를 나타낸다.
    "ALARM"은 임계 값이 위반되었으며 알림이 전송될 것임을 의미한다.
  - period는 알람이 메트릭을 평가하는 데 걸리는 시간을 의미한다. High Resolution 사용자 정의 메트릭의 경우 10초, 30초 또는 60초의 배수로 설정 가능하다.
  - 알람은 세 가지 주요 대상이 있다.
    - EC2 인스턴스
      - Stopping, Terminating, rebooting, recovering
    - EC2 Auto Scaling Group의 작업을 트리거
      - Scail out, Scail in
    - SNS 서비스에 알림을 보내는 것
      - SNS 서비스에서 Lambda 함수에 연결하여 알람이 트리거 되었을 때 Lambda 함수가 원하는 작업을 수행하도록 할 수 있음
  - Composite Alarms (복합 알람)
    - CloudWatch Alarms는 기본적으로 단일 메트릭에 대한 것이지만, 여러 메트릭을 사용하고자 한다면 Composite Alarm을 사용해야 한다.
    - Composite Alarm은 실제로 여러 다른 알람의 상태를 측정하고 알람들은 각기 다른 메트릭에 의존할 수 있다.
    - AND 및 OR 조건을 사용해 검사 조건을 유연히 지정할 수 있다.
    - "alarm noise"를 줄이기 위해 복잡한 Composite Alarm을 만들어서 "CPU가 높고 IOPS도 높을 때만 알람을 받고 싶다" 같은 조건을 지정할 수 있다.
  - EC2 Instance Recovery
    - Status Check 중에 EC2 VM의 상태를 확인하는 Instance status와 기본 하드웨어를 확인하는 System status가 있다.
    - 두 check에 대한 CloudWatch 알람을 정의할 수 있고, 이를 통해서 EC2 인스턴스 복구를 시작할 수 있다. 예를 들어 EC2 인스턴스를 현재의 호스트에서 다른 호스트로 이동할 수 있다.
    - Recovery의 경우 StatusCheckFailed_Instance가 아닌 StatusCheckFailed_System을 통해서만 사용 가능
    - 복구를 수행하면 인스턴스에 대해 동일한 PrivateIP,PublicIP, EIP, 메타데이터, Placement Group을 유지한다.
    - EC2 인스턴스의 복구 알람을 SNS Topic으로 보낼 수도 있다.
  - CloudWatch Logs 메트릭 필터에 알람을 생성할 수 있다. 예를 들어 EC2 인스턴스가 "ERROR" 과 같은 단어가 너무 많이 발생하면 알람을 보내고 SNS 메시지를 보낸다.
  - 알람을 테스트하려면 set-alarm-state라는 CLI 호출을 사용할 수 있고, 특정 임계값에 도달하지 않았더라도 알람을 트리거하려는 경우에 유용하다.

## **CloudWatch Synthetics**

CloudWatch Synthetics Canary에 대해 이야기 해보자

이것은 구성 가능한 스크립트를 가지고 있고, 이 스크립트가 CloudWatch에서 실행되어 API, URL 또는 웹 사이트를 모니터링할 수 있다.

스트립트를 정의하고 이 스크립트가 고객이 하는 것을 프로그래밍 방식으로 재현할 수 있도록 하는 것이다.

예를 들어 고객이 제품 웹 페이지에 들어가고 클릭하고 장바구니에 담고 체크 아웃으로 이동하여 신용카드 세부 정보를 입력하고 체크 아웃이 작동하는지 확인한다면, 이 모든 것을 CloudWatch Synthetics Canary로 테스트하고 재현할 수 있다.

스크립트가 어떻게 실패하는지 확인하면 문제를 발견하게 되고, 이것은 고객이 발견하기 전에 문제를 발견하는 것이 좋다. 특정 흐름이 작동하는지 여부를 확인하는 것이다.

일부 엔드포인트의 가용성 및 지연 시간을 확인할 수도 있으며, 로드 시간 데이터를 저장하고 UI의 스크린샷을 찍을 수도 있다.

us-east-1에 배포된 애플리케이션을 모니터링할 경우 문제가 발생하면 CloudWatch 알람이 트리거되어 Lambda 함수가 호출된다. 그리고 Lambda 함수는 Route 53의 DNS 레코드를 us-west-2의 다른 인스턴스로 업데이트하여 작동하는 애플리케이션 버전으로 리디렉션할 수 있다.

Synthetics Canary가 실행할 수 있는 스크립트는 Node.js 또는 Python으로 작성할 수 있다. 또는 Canary 내에서 headless Google Chrome 브라우저에 액세스할 수 있다. 그래서 Canary 내에서 Chrome으로 수행하는 모든 작어을 수행할 수 있다.

스크립트를 한 번 실행하거나 정기적으로 실행할 수 있다.
예를 들어 엔드포인트의 가용성을 확인하려는 경우이다.

몇 가지 블루프린트가 있다

Heartbeat Monitor

- URL을 로드하고 스크린샷을 저장하고 HTTP 아카이브 파일을 저장하여 모든 것이 올바르게 작동하는지 확인
  API Canary
- REST API의 기본 읽기 및 쓰기 기능을 테스트하는
  Broken Link Checker
- 테스트하는 URL내의 모든 링크를 확인하여 깨진 링크로 연결되지 않는지 확인하는
  Visual monitoring
- Canary run 중에 캡쳐된 스크린샷을 baseline 스크린샷과 비교하는
  Canary Recorder
- CloudWatch Synthetics Recorder와 함께 사용되는, 웹사이트에서 수행한 작업을 기록하고 자동으로 스크립트가 생성되는
  GUI Workflow Builder
- 로그인 양식을 사용하여 웹 페이지에서 수행한 작업이 제대로 작동하는지 확인할 수 있는

**정리**
- CloudWatch Synthetics
  - CloudWatch에서 실행되는 스크립트를 통해 API, URL 또는 웹 사이트를 모니터링하는 툴
  - 스크립트를 통해 고객의 동작을 프로그래밍 방식으로 재현하는 것.
    예를 들어 고객이 제품 웹 페이지에 들어가고 클릭하고 장바구니에 담고 체크 아웃으로 이동하고 등등 이 모든 것을 CloudWatch Synthetics Canary로 테스트하고 재현할 수 있다.
  - 스크립트가 실패하면 문제를 발견하게 되고, 고객이 발견하기 전에 특정 흐름을 작동해 문제 여부를 발견하는 것이다.
  - 일부 엔드포인트의 가용성 및 지연 시간을 확인하거나, 로드 시간 데이터를 저장하고 UI의 스크린샷을 찍을 수도 있다.
  - 애플리케이션을 모니터링할 경우 문제 발생 시 CloudWatch Alarm이 트리거되어 Lambda 함수를 호출하고 Route53의 레코드를 다른 리전의 애플리케이션으로 업데이트해 리디렉션하는 장애조치를 할 수도 있다.
  - Synthetics Canary는 Node.js 또는 Python으로 작성 가능하고, Canary 내에서 headless Google Chrome 브라우저에 액세스할 수 있다. 그래서 Canary 내에서 Chrome으로 수행하는 모든 작업을 수행 가능.
  - 스크립트를 한 번 실행하거나 정기적으로 실행 가능. 예를 들어 엔드포인트의 가용성을 확인하려는 경우
  - 몇 가지 블루프린트가 있다.
    - Heartbeat Monitor: URL을 로드하고, 스크린샷을 저장하고 HTTP 아카이브 파일을 저장하여 모든 것이 올바르게 작동하는지 확인
    - API Canary: REST API의 기본 읽기 및 쓰기 기능을 테스트
    - Broken link Checker: 테스트하는 URL 내의 모든 링크를 확인하여 깨진 링크로 연결되지 않는지 확인
    - Visual Monitoring: Canary Run 중에 캡쳐된 스크린샷을 Baseline 스크린샷과 비교
    - Canary Recorder: CloudWatch Synthetics Recorder와 함께 사용되며, 웹사이트에서 수행한 작업을 기록하고 자동으로 스크립트가 생성됨
    - GUI Workflow Builder: 로그인 양식을 사용해 웹 페이지에서 수행한 작업이 제대로 작동하는지 확인할 수 있음


## **[SAA/DVA] Amazon EventBridge**

EventBridge를 사용하면 많은 일을 할 수 있다. 예를들어 우리는 클라우드에서 cron 작업을 예약할 수 있다.

따라서 스크립트를 예약할 수 있다.
예를 들어 "매 시간마다 Lambda 함수를 트리거하세요"라고 말하면 해당 Lambda 함수가 스크립트를 실행한다.

매 시간과 같은 일정 뿐만 아니라 이벤트 패턴에 반응할 수도 있다. 이벤트 Rule을 사용해 서비스가 무언가를 수행할 때 반응할 수 있다.
예를 들어 콘솔에서 IAM 루트 사용자 로그인 이벤트에 반응할 수 있다. 그러면 해당 이벤트가 발생할 때마다 SNS 주제로 메시지를 보내서 이메일 알림을 받을 수 있다.

또한 다양한 대상을 가질 수 있으며, Lambda 함수를 트리거하거나 SNS 및 SQS 메시지를 보낼 수 있다.

이벤트브릿지는 다양한 Source를 가진다.
이벤트 브릿지는 중앙에 위치하고 EventBridge로 이벤트를 보낼 수 있는 모든 소스가 있다.

- 예를 들어 EC2 인스턴스가 시작될 때, 중지될 때, 종료될 때 등이다.
- 예를 들어 CodeBuild에서 빌드가 실패하는 경우
- 예를 들어 S3에 객체가 업로드 될 때마다 이벤트가 발생한다.
- Trusted Advisor는 계정의 보안에 대한 새로운 발견이 있을 때 또는 CloudTrail과 EventBridge를 결합하여 AWS 계정 내에서 수행된 모든 API 호출을 가로챌 수 있다.
- 또한 일정이나 cron을 설정할 수 있으므로 매 네 시간마다 또는 매월 월요일 오전 8시에 실행되도록 설정할 수도 있다.

이런 이벤트들은 중앙에 있는 EventBridge로 보내지고 필터를 설정할 수 있다. 예를 들어 Amazon is free 와 같은 특정 버킷에 대한 이벤트만 필요한 경우 필터를 설정하면 된다. 그 다음 EventBridge는 이벤트에 대한 세부 정보를 나타내는 JSON 문서를 생성한다.

이 JSON 문서는 이벤트가 많은 종류의 다른 대상으로 전송될 수 있도록 허용한다.

이러한 대상으로는

- Lambda 함수를 예약하고 트리거
- AWS Batch에서 일괄 작업을 예약
- ECS에 대한 ECS 작업을 시작
- SQS, SNS 또는 Kinesis Data Stream으로 메시지를 보낼수 있고
- Step Function을 시작하거나
- CodePipeline 또는 CodeBuild와 같은 CI/CD 파이프라인을 시작하거나
- SSM 자동화
- 특정 EC2 작업을 시작하거나 중지하거나 restart할 수도 있다.

따라서 가능성은 무한하며 사용 사례에 따라 다르다

EventBridge는 Default 이벤트 버스라고하는 기능을 제공하지만 partner 이벤트 버스라는 것이 있다.
AWS가 SaaS와 같은 파트너와 통합되어 있으며 파트너가 직접 파트너 이벤트 버스로 이벤트를 보낼 수 있다.

따라서 Zendesk, Datadog, Auth0 등을 사용할 수 있다. 자세한 것은 파트너 목록을 확인해야 한다.

이들 파트너는 지정된 파트너 이벤트 버스로 이벤트를 외부에서 직접 보낼 수 있으므로 AWS 계정에서 직접 변경 사항에 반응할 수 있다.

마지막으로 사용자 정의 이벤트 버스가 있다.

사용자 정의 이벤트 버스를 생성할 수 있고, 사용자의 응용 프로그램은 자체 이벤트를 사용자 정의 이벤트 버스로 보낼 수 있으며, 이렇게 하면 이벤트브릿지 규칙을 통해 이러한 이벤트를 다양한 대상으로 보낼 수 있다.

또한 리소스 기반 정책을 사용하여 계정 간 이벤트 버스에 액세스할 수 있다.

이벤트를 아카이빙할 수도 있다. 모든 이벤트나 필터된 일부 이벤트를 아카이빙할 수 있으며, 아카이빙된 이벤트를 무기한 보유 또는 설정된 보유기간으로 설정할 수 있다.

아카이브된 이벤트는 Replay도 가능하다.
예를 들어 Lambda 함수에 버그가 있는 경우 이를 수정하고 이벤트를 다시 테스트하고자 할 때 아카이브된 이벤트를 다시 재생할 수 있다. 디버깅이나 문제 해결에 매우 편리하며 프로덕션을 수정하는 데도 매우 편리하다.

이벤트 브릿지는 스키마 레지스트리가 있다.
이벤트 브릿지는 다양한 위치에서 많은 이벤트를 수신하므로 이벤트가 어떻게 보일지 이해해야 한다.

이벤트 브릿지는 버스의 이벤트를 분석하고 스키마를 유추한 다음, 스키마를 추론하고 스키마 레지스트리의 스키마는 응용 프로그램의 코드를 생성할 수 있도록 한다.

이렇게 하면 이벤트 버스의 데이터 구조가 미리 알려진 상태로 애플리케이션에서 데이터를 어떻게 구조화할지 알 수 있다.

예를 들어 특정 CodePipeline의 동작에 대한 스키마가 있다.

또한 스키마는 버전 관리될 수 있으므로 애플리케이션의 스키마를 시간이 지남에 따라 반복할 수 있다.

이벤트브릿지를 위한 리소스 기반 정책이 있다.
이것은 특정 이벤트 버스에 대한 권한을 관리할 수 있음을 의미한다.

예를 들어 특정 이벤트 버스에서 다른 리전이나 계정의 다른 이벤트를 허용하거나 거부할 수 있다.
사용 사례는 AWS Organization 내에서 중앙 이벤트 버스를 보유하고 모든 이벤트가 집계되는 경우이다.
중앙 이벤트 버스가 특정 계정에 있고, 해당 이벤트 버스로 이벤트를 보낼 수 있도록 다른 계정을 허용하는 특정 리소스 기반 정책을 추가한다.

따라서 다른 계정은 중앙 이벤트 버스로 직접 이벤트를 보낼 수 있다.

**정리**
- Amazon EventBridge
  - Cron Job을 예약된 스크립트를 이용해 진행할 수 있다. 예를 들어 "매 시간마다 Lambda 함수를 트리거"라고 하면 EventBridge를 통해 스크립트를 실행할 수 있다.
  - 이벤트 Rule을 사용해 매 시간과 같은 일정 뿐만 아니라 서비스가 무언가를 수행할 때 반응할 수 있다. 예를 들어 콘솔에서 IAM 루트 사용자 로그인 이벤트에 반응해 SNS Topic으로 메시지를 보내서 이메일 알림을 받을 수 있다.
  - EventBridge는 다양한 Source를 가진다.
    - EC2 인스턴스 Start, Stop, Terminated
    - CodeBuild에서 빌드가 실패하는 경우
    - S3에 객체가 업로드 될때마다
    - Trusted Advisor 계정 보안에 새로운 발견이 있을 때
    - CloudTrail AWS 계정 내에서 수행된 모든 API 호출
    - Schedule이나 Cron을 설정해 매 네 시간 또는 매일 월요일 오전 8시 등
  - Source에서 Event가 발생하면 EventBridge로 보내지고 필터를 설정할 수 있다. 예를 들어 특정 Bucket에 대한 이벤트만 필요한 경우 그 이벤트에 대한 JSON 문서를 생성해 다른 대상으로 전송될 수 있도록 허용함.
  - 다양한 Destination
    - Lambda 함수 예약하거나 트리거
    - AWS Batch에서 Batch Job 예약
    - ECS에 대한 ECS Task
    - SQS, SNS으로 메시지 전송
    - Kinesis Data Stream으로 메시지 전송
    - Step Function 시작
    - CodePipeline 또는 CodeBuild와 같은 CI/CD 파이프라인 시작
    - SSM Automation
    - 특정 EC2 시작하거나 중지 또는 Restart
  - Default 이벤트 버스와 Partner 이벤트 버스라는 것이 있다.
    - AWS가 SaaS 같은 파트너와 통합되어 있고, 파트너가 직접 파트너 이벤트 버스로 이벤트를 보낼 수 있다.
    - Zendesk, Datadog, Auth0 등을 사용 가능하다.
    - 파트너는 지정된 파트너 이벤트 버스로 이벤트를 외부에서 직접 보낼 수 있고, AWS 계정에서 직접 변경 사항에 반응할 수 있다.
  - Custom Event Bus
    - 사용자 응용 프로그램은 자체 이벤트를 사용자 정의 이벤트 버스로 보낼 수 있으며, 이렇게 하면 EventBridge Rule을 통해 이벤트를 다양한 대상으로 보낼 수 있다.
  - Resource-based Policies를 이용해 계정 간 이벤트 버스에 액세스할 수 있다.
  - 모든 이벤트나 필터링된 일부 이벤트를 아카이빙할 수 있고, 아카이빙된 이벤트를 무기한 보유 또는 보유기간을 설정할 수 있다.
  - 아카이브 된 이벤트는 Replay도 가능하다. 예를 들어 Lambda 함수에 버그가 있는 경우 이를 수정하고 이벤트를 다시 테스트하고자 할 때 아카이브된 이벤트를 다시 재생할 수 있어 디버깅이나 문제 해결에 매우 편리하다.
  - Schema Registry
    - EventBridge가 이벤트 버스에 있는 이벤트를 분석하고 스키마를 유추할 수 있다.
    - 스키마 레지스트리를 통해 생성된 스키마는 애플리케이션에서 코드 생성에 사용될 수 있으며, 이 코드는 이벤트 버스 내 데이터의 구조를 미리 알게 해준다.
    - 예를들어 특정 CodePipeline의 동작에 대한 스키마가 있으면, 해당 스키마에 맞는 코드를 직접 다운로드할 수 있다.
    - 스키마는 버전 관리가 가능해 애플리케이션의 스키마를 반복적으로 수정할 수 있다.
  - Resource-based Policy
    - 특정 이벤트 버스에 대한 권한을 관리할 수 있음을 의미한다. 예를들어 특정 이벤트 버스에서 다른 리전이나 계정의 다른 이벤트를 허용하거나 거부할 수 있다.
    - 사용 사례는 AWS Organization 내에서 중앙 이벤트 버스를 보유하고 모든 이벤트가 집계되는 경우이다. 다른 계정이 특정 계정에 있는 중앙 이벤트 버스로 직접 이벤트를 보낼 수 있다.

## **Service Quotas Overview**

서비스 쿼터는 계정 내에서 가용한 할당량 및 임계값에 얼마나 가까운지를 알려주는 서비스이다.

서비스 쿼터 콘솔에서 CloudWatch 알람을 생성할 수 있다.
예를 들어 람다 동시 실행 수를 모니터링하고자 할 때, 알람 임계값을 설정할 수 있다. 그리고 해당 임계값에 도달하면 알림을 받게 된다.

서비스 쿼터는 여러가지 할당량을 계정 내에서 모니터링할 수 있다. 람다 동시 실행수가 900이고 기본적으로 제한이 1000인 경우 알람을 전송하는 트리거를 설정할 수 있다.

람다 뿐만이 아니라 오류나 쓰로틀링이 발생할 수 있는 어떤 종류의 작업에 대해서도 매우 유용하다.

대안으로는 Trusted Advisor와 CloudWatch 알람을 설정해 사용할 수 있지만 Trusted Advisor는 약 50개의 제한된 수의 서비스 Limit 검사만 수행되기 때문에 모니터링 할 Limit이 제한된다.

그러나 모든 결과는 여전히 CloudWatch에 저장되므로 서비스 Limit을 확인하려면 CloudWatch와 연결하고 다시 알림을 트리거할 수 있다.

주로 계정 내의 모든 할다량을 모니터링하기 위해 서비스 쿼터 서비스에 CloudWatch 알람을 사용하는 것을 권장한다.

**정리**
- Service Quotas Overview
  - Service Quotas는 계정 내에서 가용한 할당량 및 임계값에 얼마나 가까운지 알려주는 서비스이다.
  - 서비스 쿼터 콘솔에서 CloudWatch 알람을 생성해 Lambda Concurrent Execution 값을 모니터링할 수 있다. 임계값에 도달하면 CloudWatch 알람을 받게된다.
  - Service Quotas는 여러가지 할당량을 계정 내에서 모니터링할 수 있다. 람다 뿐만 아니라 error나 throttling이 발생할 수 있는 종류의 작업에 대해서도 유용하다.
  - 대안으로는 Trusted Advisor와 CloudWatch 알람을 설정해 사용할 수도 있지만 Trusted Advisor는 약 50개의 제한된 수의 서비스 Limit 검사만 수행돼 모니터링 할 Limit이 제한된다.
  - Trusted Advisor는 결과를 CloudWatch에 저장하므로 서비스 Limit을 확인하려면 CloudWatch와 연결하고 알림을 트리거할 수 있다.
  - 주로 계정 내의 모든 할당량을 모니터링하기 위해 Service Quotas 서비스에 CloudWatch 알람을 사용하는 것을 권장한다.

## **[SAA/DVA] CloudTrail**

CloudTrail에 대해 이야기 해보자

CloudTrail은 AWS 계정의 거버넌스, 컴프라이언스 및 감사를 위한 방법이다.
CloudTrail은 기본적으로 활성화되어 있으며, 이를 통해 AWS 계정 내에서 콘솔/SDK/CLI/기타 AWS의 서비스 등을 통해 수행된 모든 이벤트와 API 호출의 이력을 얻을 수 있다.

CloudTrail의 로그를 CloudWatch Logs 또는 Amazon S3로 전송할 수도 있다.

모든 리전에 적용할 수 있는 트레일을 생성하거나 단일 리전에 적용할 수도 있으며, 모든 리전에서 축적된 모든 이벤트 이력을 한 개의 특정 S3 버킷으로 모을 수 있다.

CloudTrail을 사용하면 AWS에서 무언가를 삭제한 사람이 누구인지 알아낼 수 있다.
예를 들어 EC2 인스턴스가 종료되었을 때 누가 그렇게 했는지 알아보려면 CloudTrail을 확인하면 된다.

CloudTrail에는 해당 API 호출이 포함되어 있으며, 누가 어떤 작업을 수행했는지 이해할 수 있다.

CloudTrail에는 세 가지 유형의 이벤트가 있다.

1. 관리 이벤트 (Management Events)

- 이는 AWS 계정의 리소스에 수행되는 작업을 나타낸다.
- 예를 들어 누군가 보안을 구성할 때 IAM AttachRolePolicy라는 API 호출을 사용할 것이다. 이러한 작업은 CloudTrail에 기록된다. EC2 CreateSubnet이나 CloudTrail CreateTrail 등의 작업도 기본적으로 기록된다.
- 기본적으로 트레일은 모든 관리 이벤트를 기록하도록 구성된다.
- 관리 이벤트는 두 가지 유형으로 분리할 수 있다.
  - 리소스를 수정하지 않는 읽기 이벤트
  - 리소스를 수정할 수 있는 쓰기 이벤트

2.  데이터 이벤트 (Data Events)

- 기본적으로 로깅되지 않는다. 이벤트가 고용량이기 때문에
- 데이터 이벤트는 S3 객체 수준의 활동이 포함된다.
- 읽기 및 쓰기 이벤트를 분리할 수 있는 옵션이 있다. 읽기 이벤트는 GetObject이며 쓰기 이벤트는 DeleteObject 또는 PutObject가 될 것이다.
- 또한 AWS Lambda 함수 실행 활동이 있다. 이는 누군가 Invoke API를 사용할 때마다 Lambda 함수가 몇 번 호출되었는지에 대한 통찰력을 얻을 수 있다.

3.  CloudTrail Insights 이벤트

CloudTrail Insight에 대해 자세히 알아보자

모든 종류의 서비스에서 많은 관리 이벤트와 계정에서 빠르게 발생하는 다양한 API가 있을 때 이를 감지하거나 비정상적으로 보이는지 여부를 이해하는 것은 꽤 어려운 일이다.

CloudTrail Insights를 사용하면 이벤트를 분석하고 계정에서 이상 활동을 감지하려고 노력한다.

예를 들어 아래와 같은 이상 활동을 감지한다.

- 부정확한 리소스 프로비저닝
- 서비스 Limit 초과
- AWS IAM 작업의 급증
- 주기적인 유지 관리 활동의 간격 등을 감지할 수 있다.

작동 방식은 CloudTrail이 정상적인 Management Event가 어떻게 보이는지를 분석하여 기준선을 생성한 다음 올바른 유형의 이벤트를 계속 분석해 비정상적인 Write 패턴을 감지하는 것이다.

Management 이벤트는 CloudTrail Insights에 의해 계속 분석되며, 이상 활동이 감지되면 이 이벤트는 CloudTrail 콘솔에 나타난다.

이상 활동 이벤트는 필요하다면 Amazon SNS에도 전송되고, 이벤트브릿지 이벤트로 전송된다.

CloudTrial Insight를 기반으로 자동화하려면 아래와 같다.

1. Management Event 발생
2. CloudTrail Insight에서 분석
3. Insight Event 생성
4. CloudTrail 콘솔에 출력 또는 Amazon S3로 로그 전송 또는 EventBridge Event로 전송

마지막으로 CloudTrail 이벤트의 Retention에 대해 이야기 해보자

기본적으로 CloudTrail에는 이벤트가 90일 동안 저장되며 그 후에 삭제된다.

그러나 경우에 따라 감사 목적으로 1년 전에 발생한 사건으로 돌아가고 싶은 경우가 있다.
90일 이상으로 이벤트를 유지하려면 이를 S3에 기록해야 한다.

S3에 기록된 로그들은 Athena를 이용해 분석하면 된다.

**정리**
- CloudTrail
  - CloudTrail은 AWS 계정의 거버넌스, 컴플라이언스 및 감사를 위한 방법이다.
  - CloudTrail은 기본적으로 활성화되어 있으며, AWS 계정 내에서 콘솔/SDK,CLI,기타 AWS 서비스 등을 통해 수행된 모든 이벤트와 API 호출의 이력을 얻을 수 있다.
  - CloudTrail의 로그를 CloudWatch Logs 또는 Amazon S3로 전송할 수도 있다.
  - 모든 리전 또는 단일 리전에 CloudTrail을 적용할 수 있으며, 모든 리전에서 축적된 모든 이벤트 이력을 한 개의 특정 S3 버킷으로 모을 수 있다.
  - CloudTrail을 사용하면 AWS에서 리소스를 삭제한 사람이 누구인지 알아낼 수 있다. CloudTrail에는 API 호출이 포함되어 있으며, 누가 어떤 작업을 수행했는지 이해할 수 있다.
  - CloudTrail에는 세 가지 유형의 이벤트가 있다.
    - 관리 이벤트 (Management Events)
      - 이는 AWS 계정의 리소스에 수행되는 작업을 나타낸다. 
      - 누군가 IAM Role에 Policy를 Attach 할 경우 IAM AttachRolePolicy 라는 API 호출을 사용하거나, EC2CreateSubnet 등의 작업이 기록된다.
      - CloudTrail은 기본적으로 모든 관리 이벤트를 기록하도록 구성된다.
      - 관리 이벤트는 **리소스를 수정하지 않는 읽기 이벤트**, **리소스를 수정할 수 있는 쓰기 이벤트**로 분리된다.
    - 데이터 이벤트 (Data Events)
      - 기본적으로 로깅되지 않는다. 이벤트가 고용량이기 때문이다.
      - 데이터 이벤트는 S3 객체 수준의 활동이 포함된다.
      - 읽기 및 쓰기 이벤트를 분리할 수 있는 옵션이 있다. 읽기는 GetObject이며, 쓰기는 DeleteObject 또는 PutObject가 될 것이다.
      - 또한 AWS Lambda Execution 활동이 있다. 누군가 Invoke API를 사용할 때마다 Lambda 함수가 몇 번 호출되었는지에 대한 이벤트이다.
    - CloudTrail Insights 이벤트
      - 모든 종류의 서비스에서 많은 관리 이벤트, 계정에서 빠르게 발생하는 API를 감지하거나 비정상적으로 보이는지 여부를 이해하기 위해 이벤트를 분석하고 계정에서 이상 활동을 감지한다.
      - 예를들어 부정확한 리소스 프로비저닝, 서비스 Limit 초과, AWS IAM 작업의 급증, 주기적인 유지 관리 활동의 간격 등을 감지한다.
      - 작동 방식은 CloudTrail이 정상적인 Management Event가 어떻게 보이는지를 분석해 기준선을 생성한 다음 올바른 유형의 이벤트를 계속 분석해 비정상적인 Write 패턴을 감지하는 것
      - Management Event는 CloudTrail Insights에 의해 계속 분석되고, 이상 활동이 감지되면 CloudTrail 콘솔에 나타난다. 또한 SNS 또는 EventBridge로도 전송할 수 있다.
      - Insights를 기반으로 자동화 하려면 이와 같은 과정을 거친다.
        1. Management Event 발생
        2. CloudTrail Insight에서 분석
        3. Insight Event 생성
        4. CloudTrail 콘솔에 출력 또는 Amazon S3로 로그 전송 또는 EventBridge Event로 전송
    - CloudTrail 이벤트의 Retention은 기본적으로 90일 동안 저장되며 그 후 삭제된다. 90일 이상 저장하기 위해서는 S3에 기록하고 Athena를 이용해 분석하면 된다.
        
## **[SAA/DVA] CloudTrail - EventBridge Integration**

CloudTrail과 EventBridge와의 Integration 중 하나는 DeleteTable API 호출을 통해 DynamoDB에서 테이블을 삭제할 때마다 SNS 알림을 수신하고자 하는 것이다.

AWS에서 API 호출을 할때 CloudTrail뿐만 아니라 EventBridge에서도 이벤트로 기록된다.
따라서 우리는 매우 구체적인 테이블 삭제 API 호출을 찾아 이를 기준으로 규칙을 생성할 수 있으며, 이 규칙은 목적지로 Amazon SNS를 갖게 되어 알람을 생성할 수 있다.

EventBridge 와 CloudTrail은 또한 아래와 같은 사용 사례가 있다.

사용자가 계정에서 AssumeRole 할 때마다 알림을 받고 싶다고 가정해보자
AssumeRole은 IAM 서비스의 API이며, 따라서 CloudTrail에 의해 로깅될 것이다.

그리고 EventBridge Integration을 사용해 SNS 주제로 메시지를 트리거할 수 있다.

마찬가지로 보안 그룹 인바운드 규칙을 변경하는 API 호출도 가로챌 수 있다.
보안 그룹 호출을 AutorizeSecurityGroupIngress이고, 이는 EC2 API 호출이다.

이러한 호출은 다시 한번 CloudTrail에 의해 기록되며, 그런 다음 EventBridge에 나타나고, SNS에서 알림을 트리거할 수 있다.

**정리**
- CloudTrail - EventBridge Integration
  - CloudTrail과 EventBridge를 통합해 DynamoDB에서 테이블을 삭제할 때마다 SNS 알림을 수신할 수 있다. DeleteTable API 호출을 통해 DynamoDB에서 테이블을 삭제할 때마다 SNS 알림을 수신하고자 하는 것
  - AWS에서 API 호출을 할 때 CloudTrail 뿐만 아니라 EventBridge에서도 이벤트로 기록된다. 구체적인 테이블 삭제 API 호출을 찾아 이를 기준으로 규칙을 생성할 수 있으며, 규칙은 목적지로 Amazon SNS를 설정해 알람을 생성할 수 있다.
  - 사용자가 계정에서 AssumeRole할 때마다 알림을 받고 싶으면 EventBridge Integration을 사용해 SNS Topic으로 메시지를 트리거할 수 있다.
  - API 호출은 CloudTrail에 의해 기록되고, EventBridge에 나타나고, SNS에서 알림을 트리거할 수 있다.
  

## **CloudTrail for SysOps**

시험을 준비할 때 CloudTrail에 대해 알아야 할 몇가지 사항이 있다.

첫 번째로 로그 파일 무결성 유효성 검사가 있다.

AWS 내에서 API 호출을 수행할 때마다 CloudTrail에서 이를 로그로 기록할 수 있으며, 이 로그를 매 시간마다 Amazon S3로 전송할 수 있다.

그러나 추가로 Digest File이라는 것도 생성할 수 있다.

- Digest 파일은 지난 1시간 동안의 모든 로그 파일을 참조하고 각 로그 파일의 해시를 포함하는 파일이다.
- 이는 로그 파일이 CloudTrail에 의해 전달된 후에 수정되거나 삭제되었는지를 확인하는 데 도움이 된다.
- 따라서 로그 파일 해시가 Digest 파일 해시와 일치하면 해당 로그 파일이 수정되지 않았음을 확신할 수 있다.
- 이는 규정 준수 목적으로 매우 유용하며, 해시는 SHA-256 알고리즘을 사용한다.
- Digest를 사용하여도 여전히 S3 버킷 내 파일이 안전하게 유지되도록 Bucket Policy, Versioning, MFA Delete Protection, encryption, object lock을 사용해야 한다. 그러나 규정 준수적인 관점에서 object가 수정되지 않았음을 보여주고 싶다면 CloudTrail의 Digest 파일을 사용하면 된다.
- CloudTrail이 로그 파일을 계속해서 S3로 전달할 수 있도록 CloudTrail을 IAM으로 보호해야 한다.

또한 CloudTrail을 EventBridge와 통합할 수 있다.

CloudTrail은 계정 내 수행된 모든 API 호출에 대해 EventBridge를 트리거할 수 있으며, 이를 통해 Lambda/SNS/SQS 등을 사용해 원하는 종류의 Integration을 수행할 수 있다.

만약 EventBridge에서 처리되지 않은 API 호출이 CloudTrail에 로그로 남는다면 이를 이용해 EventBridge와 Integration하여 CloudTrail에서 남은 API 호출을 EventBridge로 전송하고 EventBridge에서 다른 서비스와 통합해 원하는 작업을 할 수 있다.

CloudTrail은 실시간이 아니다.

이벤트는 API 호출 후 15분 이내에 전달되며 로그 파일의 이벤트는 5분 마다 S3로 전달된다.

그래서 API 호출에 대한 실시간 자동화는 아니지만, CloudTrail에서 EventBridge로 전달될 때의 이벤트를 기반으로 한 일종의 Integration을 얻을 수 있다.

마지막으로 Organization Trail을 설정할 수 있다.

Management 계정과 다른 Member 계정이 있다고 가정했을 때 조직 내 모든 회원 계정의 모든 API 호출 이벤트를 조직 전반에 걸쳐 대상 S3 버킷에 기록한다.

이는 계정 관리에 매우 편리하다. 모든 이벤트가 로깅되므로 Management 계정과 Member 계정 모두 포함이다.

모든 계정에 대해 Trail name은 동일하게 설정되며 Member 계정은 Organization Trail을 제거하거나 수정할 수 없다. 이는 규정 준수에 좋다.

**정리**
- CloudTrail for SysOps
  - 시험을 준비할 때 알아야할 사항이 있다.
  - 첫 번째로 로그 파일 무결성 유효성 검사가 있다.
    - AWS 내에서 API 호출을 수행할 때마다 CloudTrail에서 이를 로그로 기록할 수 있으며, 이 로그를 매 시간마다 S3로 전송 가능하다.
    - Digest File도 생성 가능하다.
      - Digest File은 지난 1시간 동안의 모든 로그 파일을 참조하고 각 로그 파일의 해시를 포함하는 파일이다.
      - 로그 파일이 CloudTrail에 의해 전달된 후에 수정되거나 삭제 되었는지를 확인하는 데 도움이 된다. 로그 파일 해시가 Digest 파일 해시와 일치하면 해당 로그 파일이 수정되지 않았음을 확인할 수 있다.
      - 규정 준수 목적으로 매우 유용하고, 해시는 SHA-256 알고리즘을 사용한다.
      - 규정 준수적인 관점에서 Object가 수정되지 않았음을 보여주고 싶다면 CloudTrail의 Digest를 사용하면 된다. Digest를 사용해도 S3 버킷 내 파일이 안전하게 유지 되도록 Bucket Policy, Versioning 등등을 사용해야 한다.
      - CloudTrail이 로그 파일을 S3로 전달할 수 있도록 IAM을 이용해 CloudTrail을 보호해야 한다.
    - CloudTrail은 EventBridge와 통합할 수 있다.
      - 계정 내 수행된 모든 API 호출에 대해 EventBridge를 트리거할 수 있고, 이를 통해 Lambda/SNS/SQS 등을 사용해 원하는 종류의 Integration을 수행할 수 있다.
      - EventBridge에서 처리되지 않은 API 호출이 CloudTrail에 로그로 남으면 EventBridge와 통합해 CloudTrail에서 남은 API 호출을 EventBridge로 전송하고 EventBridge에서 다른 서비스와 통합해 원하는 작업을 할 수 있다.
    - CloudTrail은 실시간이 아니다.
      - 이벤트는 API 호출 후 15분 이내에 전달되며 로그 파일의 이벤트는 5분마다 S3로 전달된다.
      - 그래서 실시간 자동화는 아니지만, CloudTrail에서 EventBridge로 전달될 때 이벤트를 기반으로한 일종의 Integration을 얻을 수 있다.
    - Organization CloudTrail을 설정할 수 있다.
      - Management 계정과 다른 Member 계정이 있다고 가정했을 때 조직 내 모든 회원 계정의 모든 API 호출 이벤트를 조직 전반에 걸쳐 대상 S3 버킷에 기록할 수 있다.
      - 계정 관리에 매우 편하며 모든 이벤트가 로깅되므로 Management 계정과 Member 계정 모두 포함이다.
      - 모든 계정에 대해 Trail에 대한 이름은 동일하게 설정되고 Member 계정의 경우 Organization Trail을 제거하거나 수정할 수 없다. 규정 준수에 매우 좋다.

## **[SAA] Config Overview**

Config는 AWS의 리소스에 대한 감사 및 준수 기록을 얻을 수 있는 서비스로, 설정한 몇 가지 규칙에 따라 리소스의 구성 및 변경 사항을 기록할 수 있다.

이를 통해 인프라에서 무엇이 발생했는지 빠르게 파악하여 필요한 경우 롤백하고 찾아낼 수 있다.

Config로 해결할 수 있는 예시는 아래와 같다.

- 보안 그룹에 무제한 SSH 액세스가 있는가?
- public access가 설정된 버킷이 있는가?
- 시간이 지나고 변경된 ALB configuration이 있는가?

이러한 규칙들의 준수 여부에 따라 변경 사항에 대한 alert이나 SNS Notification을 받을 수 있다.

Config는 리전 별 서비스이므로 필요한 경우 모든 리전에 대해 설정해야 한다.

또한 리전 및 계정 간 집계하여 한 곳에 중앙 집중화할 수도 있다.

모든 리소스의 구성을 S3에 저장하여 나중에 Athena와 같은 서버리스 쿼리 엔진을 통해 분석할 수도 있다.

Config에 들어가는 Rule은 무엇인가?

- AWS에서 관리되는 configuration rule을 사용할 수 있고, 75개 정도가 있다.
- 또한 Custom Config Rule을 만들 수 있다. 이 경우 Lambda 함수를 사용해 해당 규칙을 정의해야 한다.
  - 예를 들어 각 EBS 디스크가 gp2 유형인지, 또는 개발 계정의 각 인스턴스가 t2.micro 유형인지 확인할 수 있다.
- 일부 Rule은 구성이 변경될 때마다 평가되거나 트리거될 수 있다.
  - config가 변경될 경우
    - 예를 들어 새로 구성된 EBS 디스크가 있을 때마다 EBS 디스크 유형을 평가하도록 할 수 있다.
  - 또는 정기적인 시간 간격으로 규칙을 평가하도록 설정할 수도 있다.
    - 예를 들어 매 2시간마다 모든 EBS 디스크가 gp2 유형인지 확인하도록 설정할 수 있다.

Config는 단순히 준수를 위한 것이고 행동을 막거나 작업을 거부하는 것은 아니다. IAM과 작은 보안 메커니즘을 대체하지는 않으나, 구성 및 리소스의 준수를 제공한다.

Config는 free tier 가 없으며, 비용이 비쌀 수 있다. 리전 별 configuration 항목 당 0.003 달러 및 리전 별 config rule 당 0.001 달러가 부과된다.

Config는 시간 경과에 따른 리소스의 컴플라이언스를 볼 수 있다.
예를 들어 보안 그룹이 준수되지 않은 경우의 리소스 구성을 볼 수 있다.

또한 시간 경과에 따른 리소스의 변경 사항이 언제 발생했는지 및 누가 변경했는지 등을 볼 수 있으며 해당 리소스에 대한 API 호출을 보기 위해 CloudTrail과 연결할 수도 있다.

Config 내에서 어떤 작업도 막을수는 없으나 비준수 리소스의 개선 작업을 SSM Automation Documents를 사용해 수행할 수 있다.

예를 들어 IAM 액세스 키가 만료되었는지 여부를 모니터링할 수 있다.
예를 들어 90일 이상된 경우 비준수로 표시하고 해당 리소스를 개선할 수 있다.

AWS 관리형 문서를 사용하거나 Custom Automation Documents를 만들어서 준수하지 않는 리소스를 개선할 수 있다.

스크립팅을 완전히 활용하고 싶다면, Lambda 함수를 호출하는 Documents를 만들 수도 있으며, 거기서 원하는 작업을 수행할 수 있다.

마지막으로 개선(Remediation) 작업에는 재시도가 있을 수 있다.
Automation Remediation 이후에도 리소스가 여전히 준수하지 않으면 최대 다섯 번까지 재시도될 수 있다.

마지막으로 알림은 EventBridge를 사용해 리소스가 준수하지 않을 때 알림을 트리거할 수 있다.
예를들어 보안 그룹을 모니터링하고 준수하지 않게되면, 우리는 이벤트 브릿지에서 이벤트를 트리거하고 원하는 리소스로 전달할 수 있다.
또는 Config에서 모든 변경 사항과 모든 리소스의 준수 알림을 SNS로 전달할 수도 있다.

그리고 SNS 필터링을 사용해 일부 이벤트에 대해서만 필터링된 SNS 주제(Topic)를 만들고, 관리자 이메일이나 슬랙 채널로 이러한 알림을 전송할 수 있다.

**정리**
- Config Overview
  - AWS의 리소스에 대한 감사 및 준수 기록을 얻을 수 있는 서비스, 설정한 몇 가지 규칙에 따라 리소스의 구성 및 변경 사항 기록 가능
  - 예시는 "보안 그룹에 무제한 SSH 액세스가 있는지?", "Public Access"가 설정된 버킷이 있는지?", "시간이 지나고 변경된 ALB Configuration이 있는지?"
  - 이런 규칙의 준수 여부에 따라 변경사항에 대한 Alert나 SNS Notification 받을 수 있음.
  - Config는 리전 별 서비스이다. 또한 리전 및 계정 간 집계해 한 곳에 중앙 집중화할 수도 있다.
  - 모든 리소스 구성을 S3에 저장해 Athena로 분석할 수도 있다.
  - Config에 들어가는 Rule
    - 75개 정도의 AWS Managed Rule
    - Lambda 함수를 이용해 Custom Config Rule을 만들수 있음
      - 예를들어 "각 EBS 디스크가 gp2 유형인지", "개발 계정의 각 인스턴스가 t2.micro 유형인지" 확인 가능
    - 일부 Rule은 구성이 변경될 때마다 평가되거나 트리거될 수 있음
      - Config가 변경되거나, 정기적인 시간 간격으로 규칙을 평가하도록 설정하거나
        - 예를들어 "새로 구성된 EBS 디스크가 있을 때마다 EBS 디스크 유형을 평가", "정기적으로 매 2시간마다 모든 EBS 디스크가 gp2 유형인지 확인"
  - Config는 단순히 준수를 위한 것이고 행동을 막거나 작업을 거부하는 것은 아님. IAM과 같은 보안 매커니즘을 대체하지는 않고 구성 및 리소스의 준수를 제공함
  - Config는 Free Tier가 없고, 비용이 비쌀 수 있음. 리전 별 Configuration 항목 당 0.003 달러 및 리전 별 Config Rule 당 0.001 달러 부과됨
  - Config는 시간 경과에 따른 리소스의 컴플라이언스를 볼 수 있다.
    - 예를 들어 보안 그룹이 준수되지 않은 경우의 리소스 구성을 볼 수 있음
    - 시간 광과에 따라 리소스가 언제 변경 사항이 발생했는지 및 누가 변경했는지
    - CloudTrail과 연결해 해당 리소스에 대한 API 호출을 볼수도 있다.
  - Config 내에서 비준수 리소스의 개선 작업을 SSM Automation Documents를 사용해 수행할 수 있다.
    - 예를 들어 IAM 액세스 키가 만료됐는지 모니터링하고 90일 이상 된 경우 비준수로 표시하고 해당 리소스를 개선할 수 있다.
  - 스크립팅을 완전히 활용하고 싶다면 Lambda 함수를 호출하는 Documents를 만들어 원하는 작업을 수행할 수 있음
  - Remediation Retries(개선 작업 재시도) 는 Automation Remediation 이후에도 리소스가 여전히 준수하지 ㅇ낳으면 최대 5번까지 재시도될 수 있다.
  - Notification의 경우 EventBridge를 사용해 리소스가 준수하지 않을 때 알림을 트리거하거나, Config에서 모든 변경 사항과 모든 리소스의 준수 알림을 SNS로 전달할 수 있다.
    - 예를 들어 보안 그룹을 모니터링하고 준수하지 않게되면 EventBridge에서 이벤트를 트리거하고 원하는 리소스로 전달할 수 있다.
  - SNS Filtering을 사용해 일부 이벤트에 대해서만 필터링된 SNS Topic을 만들고, 관리자 이메일이나 슬랙 채널로 전송할 수 있다.
  


## **Config - Aggregators**

AWS Config Aggregator는 시험에 나오는 질문 중 하나이다.

Aggregator는
예를들어 여러 개의 계정과 이러한 계정 내의 여러 리전을 관리하고 있다고 가정 해보자
Accout A, Account B가 있을 때 이것들은 Source Account라고 불린다.

모두 AWS Config에 대한 deployment를 가지고 있기 때문이다. 하지만 이 정보를 중앙 AWS 계정으로 집계하고 싶을 때 중앙 AWS 계정을 Aggregator 계정이라고 한다.

그리고 Aggregator 계정에서만 Aggregator를 생성한다.

어그리게이터에서는 모든 계정 및 리전에서 준수 및 준수하지 않는 리소스를 모두 볼 수 있는 Aggregated View를 얻게 된다.

Aggregator는 단일 중앙 계정에서만 생성되며, 각 개별 소스 계정에서 생성되지 않는다.

그런 다음 이 어그리게이터는 대상 계정에서 사용 가능한 모든 것, 예를 들어 Config, Resource 등을 여러 계정 및 지역에서 집계한다.

AWS Organization을 사용하는 경우 개별 계정에서 인증을 수행할 필요가 없다.
단지 AWS Organization의 Management 계정에서 어그리게이터를 생성하면 인증이 자동으로 이루어진다.

그러나 AWS 조직을 사용하지 않는 경우 Account A 에서 "AWS 계정 어그리게이터가 데이터를 수집할 수 있도록 허용합니다." 라고 하는 인가를 생성해야한다.

모든 Source 계정에서 동일하기 때문에 Account B에서도 동일한 작업을 수행해야 한다.

어그리게이터는 데이터를 집계하는 용도로만 사용되며 Rule을 중앙화하는 것은 아니다. Rule에 대한 관리는 개별 계정 수준에서 이루어진다.

여러 개의 계정 및 여러 리전에 걸쳐 규칙을 배포하려면 클라우드포메이션 스택셋을 사용하는 것이 가장 좋은 방법이다. 클라우드포메이션 스택셋을 사용하면 여러 계정 및 여러 지역에 클라우드포메이션 스택을 배포할 수 있다.

**정리**
- Config - Aggregators
  - 시험에 나오는 질문 중 하나이다.
  - Aggregator는 여러 계정 환경에서 단일 중앙 계정을 두어 Config에 대한 정보를 중앙 집중화하고 싶을때 사용한다.
  - Aggregator 계정에서만 Aggregator를 생성하면 되고, 모든 계정 및 리전에서 준수 및 비준수 리소스를 모두 볼수 있는 Aggreagted View를 얻게 된다.
  - AWS Organization을 사용하는 경우 개별 계정에서 인증을 할 필요 없이 Organization의 Management 계정에서 Aggregator를 생성하면 인증이 자동으로 이루어진다.
  - Organization을 사용하지 않는 경우 개별 계정에서 Aggregator가 데이터를 수집할 수 있도록 허용하는 인가를 생성해야 한다.
  - Aggregator는 데이터를 집계하는 용도로만 사용되고, Rule을 중앙화하는 것은 아니다. Rule에 대한 관리는 개별 계정 수준에서 이뤄진다.
  - 여러 계정 및 여러 리전에서 규칙을 배포하려면 CloudFormation StackSets를 사용하면 여러 계정 및 여러 Region에 Stack을 배포할 수 있어 가장 좋은 방법이다.
  

## **[SAA] CloudWatch vs CloudTrail vs Config**

CloudWatch CloudTrail Config 사이의 차이점을 명확하게 이해해야 하는 것이 시험에서 매우 흔한 문제이다.

CloudWatch

- 는 성능 메트릭을 위한 것이다. CPU, 네트워크 같은 메트릭 및 대시보드를 생성할 수 있다.
- 사용자는 이벤트 및 경고를받을 수 있으며, 필요한 경우 로그 집계 및 분석 도구를 사용할 수도 있다.
  CloudTrail
- 기본적으로 계정 내의 모든 API 호출을 기록하는 것이다.
- 특정 리소스에 대한 Trail을 정의할 수도 있으므로 EC2에 대한 자세한 정보를 얻을 수 있다.
- Global 서비스이다.
  Config
- 구성 변경을 기록하고 리소스 구성을 규정 준수 규칙과 비교하는 것이다.
- 변경 사항과 규정 준수에 대한 타임라인을 얻게 된다.

ELB를 예를들어 각 서비스를 이해해보자

CloudWatch는 들어오는 Connection 수를 모니터링하고, 시간에 따른 Error 코드의 퍼센트를 시각화할 수 있으며, 로드 밸런서 성능에 대한 개요를 얻기 위한 대시보드를 만들 수 있다.

여러 개의 로드 밸런서가 있는 글로벌 응용 프로그램의 경우 글로벌 대시보드로 만들 수도 있다.

Config는 로드 밸런서의 보안 그룹 규칙을 추적할 수 있다. 누구도 이상한 일을 하거나 변경 사항을 가하지 않도록 하기 위한 것이다.

또한 로드밸런서 자체의 구성 변경도 추적할 수 있다. SSL 인증서를 수정한 사람이나 기타 변경 사항을 볼 수 있다.

또한 로드 밸런서에 항상 SSL 인증서가 할당되어야 한다는 규정 준수 규칙이 있을 수 있으며, 로드 밸런서로의 비 암호화 트래픽을 허용해서는 안된다는 규정 준수 규칙이 있을 수 있다.

CloudTrail은 API 호출을 총해 로드 밸런서에 대한 변경 사항을 추적한다.

따라서 보안 그룹 규칙을 변경한 사람이나 SSL 인증서를 제거한 사람 등을 알 수 있다.

**정리**
- CloudWatch vs CloudTrail vs Config
  - 위 리소스들의 차이점을 명확하게 이해해야 하는 것이 시험에서 흔한 문제이다.
  - CloudWatch
    - CPU, 네트워크 같은 메트릭에 대한 성능 모니터링이나, 대시보드를 생성할 수 있다.
    - 이벤트 및 경고를 받거나, 필요한 경우 로그 집계 및 분석 도구를 사용할 수 있다.
  - CloudTrail
    - 계정 내의 모든 API 호출을 기록한다.
    - 특정 리소스에 대한 Trail을 정의해 EC2에 대한 자세한 정보를 얻을 수도 있음
    - Global 서비스
  - Config
    - 구성 변경을 기록하고 리소스 구성을 규정 준수 규칙과 비교하는 것
    - 변경 사항과 규정 준수에 대한 타임라인을 얻게 된다.
  - ELB로 예를들어 각 서비스를 이해해보자
    - CloudWatch는 들어오는 Connection 수를 모니터링, Error 코드의 퍼센트 시각화, 로드 밸런서 성능에 대한 개요를 얻기 위한 대시보드 생성
    - Config는 로드 밸런서의 보안 그룹 규칙 추적, 로드 밸런서 자체 구성 변경 추적 등
    - CloudTrail은 API 호출을 통해 로드 밸런서에 대한 변경 사항 추적. 보안 그룹 규칙을 변경한 사람이나 SSL 인증서를 제거한 사람 등을 알 수 있음.

## **AWS Health Dashboard - Overview**

AWS Health Dashboard에 대해 이야기 해보자

Service History와 Account 두 부분으로 나눠져 있다.

Service Health Dashboard의 경우 모든 리전 및 서비스의 Health Status를 보여준다.
따라서 어떤 서비스에 문제가 있었는지, 해당 서비스가 어떻게 동작했는지를 현재 리전 기준으로 파악할 수 있다.
그리고 이력을 살펴볼 수 있다. 매일매일의 정보가 남으며, 구독할 수 있는 RSS 피드가 있다.

다음으로 계정을 위한 AWS Account Health Dashboard가 있다.

AWS가 우리에게 직접 영향을 주는 이벤트가 발생할 때 알람 및 개선 지침을 제공한다.
Service Health Dashboard의 경우 모든 서비스의 일반적인 상태를 표시하는 반면, Account Health Dashboard는 우리의 계정과 리소스에서 실제로 사용 중인 서비스의 성능과 가용성에 대한 View를 제공한다.

관련된 및 시의적절한 정보를 제공하며 스케줄된 유지 보수 활동에 대한 사전 통보를 받는다.

그리고 이 Account 대시보드에서 내 전체 Organization에 대한 데이터를 집계할 수 있다.

그리고 Global 서비스이며, 직접 우리에게 영향을 미치는 장애를 보여준다.
과거 이벤트를 볼 수 있는 Event Log를 제공한다.

예정된 변경 사항뿐만 아니라 예정된 활동에 대한 사전 통지, 경보, 개선 정보를 받게 된다.

## **AWS Health Dashboard - Events & Notifications**

AWS Health 서비스에 대한 이벤트 및 알람에 대해 이야기 해보자

AWS Health를 통해 우리 계정에서 발생하는 모든 종류의 이벤트에 반응하기 위해 EventBridge를 사용할 수 있다.

예를 들어, 우리 계정에서 EC2 인스턴스가 업데이트 예정인 경우 이메일 알림을 받을 수 있다.

우리는 계정 내의 영향을 받는 리소스에 대한 계정 이벤트와 서비스의 리전 가용성을 파악하기 위해 공개 이벤트도 수신할 수 있다.

Health 대시보드의 이러한 이벤트 알림의 사용 사례는 이벤트 정보를 캡쳐하여 자동으로 보정 조치를 취하기 위한 것이다.

EventBridge를 통해 모든 EventBridge 통합을 사용할 수 있다.
Lambda, SNS, SQS, Kinesis Data Stream 등을 사용할 수 있다.

Health 대시보드에 노출된 IAM 키를 찾는 이벤트가 있다고 가정해보자.
Health 대시보드가 EventBridge를 트리거하고, 해당 이벤트에 대해 Lambda 함수를 통합하여 자동으로 액세스 키를 삭제하여 문제를 보정할 수 있다.

또는 일부 인스턴스가 만료 예정이라는 것을 알고 있다. 따라서 그들을 다시 시작해야 한다.
Health 대시보드에서 인스턴스 만료 예정에 대한 이벤트를 EventBridge에 트리거하고, 그런 다음 EventBridge에서 해당 이벤트를 조작하여 EC2 action으로 인스턴스를 즉시 다시 시작할 수 있다.

> Instance retirement(인스턴스 만료)란?
> AWS에서 인스턴스를 호스팅하는 기본 하드웨어의 복구 불가능한 장애가 검색되는 경우 인스턴스가 만료 대상으로 예약됩니다. 예약된 만료 날짜에 도달하면 인스턴스가 AWS에 의해 중지되거나 종료됩니다.
>
> - 인스턴스 루트 디바이스가 Amazon EBS 볼륨인 경우 인스턴스가 중지되며 언제든지 이 인스턴스를 다시 시작할 수 있습니다. 중지된 인스턴스를 시작하면 새 하드웨어로 마이그레이션됩니다.
> - 인스턴스 루트 디바이스가 인스턴스 스토어 볼륨인 경우 인스턴스가 종료되어 다시 사용할 수 없습니다.

## **[SAA] Organizations Overview**

Organization은 전역 서비스로서 여러 AWS 계정을 동시에 관리할 수 있게 해준다.

Organization을 생성하면 조직 내 주 계정을 Management 계정이라고 하며, 조직에 가입하거나 조직에서 생성된 다른 계정을 Member 계정이라고 한다.

Member 계정은 한 조직의 일부만 될 수 있다.

Organization은 모든 계정 간에 청구가 통합되므로 관리 계정에서 단일 결제 방법을 사용하여 조직의 모든 비용을 지불할 수 있다는 것이다.

하나의 조직이 있고 조직의 크기가 큰 경우 연관된 리소스가 사용량으로 인한 가격 혜택을 받기도 한다.
따라서 모든 계정에서 EC2나 S3를 많이 사용하는 경우 모든 계정의 사용량을 요약하고 합산하기 때문에 큰 할인을 받게 된다.

또한 Reserved Instance 및 Saving Plans를 계정 간에 공유할 수도 있다.

따라서 하나의 계정에서 사용되지 않는 Reserved Instance가 다른 계정에서 혜택을 받을 수 있으며, 결과적으로 할인은 전체 조직에 적용되어 비용을 절약할 수도 있다.

또한 조직 내에서 계정 생성을 자동화하는 API 도 있다. 그래서 Organization을 사용해 계정을 매우 쉽게 생성할 수 있따.

이제 구조에 대해 알아보자

Root Organization Unit (Root OU) 이라는 계정 최상단의 Unit이 있다. 그 안에는 Management Account가 있다. 그리고 하위 OU를 생성할 수 있다.

예를 들어 개발용 계정을 위한 OU를 만들고 그 안에 Member 계정을 생성할 수 있다.
또는 프로덕션 계정을 위한 OU를 만들고 그 안에 Member 계정을 생성할 수 있다.

자유롭게 OU를 만들고 계정을 만들어 환경별 OU를 구성하거나, 프로젝트별 OU를 구성할 수 있다.

Oraganization을 사용하는 장점은 여러 계정을 가지고 있기 때문에 VPC를 여러 개 사용하는 것보다 계정 관점에서 분리하는 것이 VPC보다 더 분리되어 있기 때문에 더 나은 보안을 갖게 될 수 있다.

또한 청구 목적을 위해 태깅 표준을 강제할 수 있으며 모든 계정에 대해 한꺼번에 CloudTrail을 활성화하고 모든 로그를 중앙 S3 계정으로 보낼 수 있다.

또한 Management 계정에서 Member 계정에 대한 Cross Account Role을 자동으로 설정할 수 있다.

또한 Service Control Policy(SCP)를 정의할 수 있다.
SCP는 특정 OU 또는 계정에 적용되는 IAM 정책이며, 이를 통해 사용자 및 역할이 계정 내에서 수행할 수 있는 작업을 제한할 수 있다.

SCP는 Management 계정을 제외한 모든 것에 적용되고, Management 계정은 영원히 완전한 관리자 권한을 갖게 된다.

SCP는 기본적으로 IAM과 마찬가지로 아무것도 허용하지 않고 명시적으로 허용해야 한다.
Management 계정에 Deny SCP를 적용한다고 해도 아무 SCP가 적용되지 않으므로 관리 계정은 여전히 관리자 권한을 가지고 있을 것이다.

SCP에는 블록 목록 또는 허용 목록 두 가지 전략이 있다.

블록 목록은 "여기서는 사용하고 싶지 않은 서비스입니다."라고 하는 것과 동일하다.
보통 모든 서비스에서 모든 작업을 허용하는 Allow \* 을 먼저 첨부하고 DynamoDB 액세스를 거부하는 문을 추가하면 DynamoDB에 대한 액세스 만 거부된다.

허용 목록은 "특정 서비스 외에 허용하지 않는다."
따라서 예를 들어 EC2와 CloudWatch만이 SCP가 첨부되었다면 첨부된 해당 계정에서 사용할 수 있으며 다른 서비스는 명시적 허용이 필요하기 때문에 사용할 수 없다.

## **[CCP] AWS Control Tower Overview**

Control Tower는 Best Practice에 따라 안전하고 규정 준수되는 다중 계정 AWS 환경을 설정하고 관리하기 위한 간편한 방법이다.

Organization을 수동으로 생성하고 보안 정책을 적용하는 대신 Control Tower를 사용해 몇 번의 클릭으로 다중 계정 AWS 환경을 만들 수 있다.

Guardrail을 사용하면 지속적인 정책 관리를 자동화할 수 있다. 또한 정책 위반을 감지하고 해결할 수 있다.
대화형 대시보드를 통해 규정 준수를 모니터링할 수 있다.

Control Tower는 Organization 위에서 실행된다.
즉, 계정을 구성하는 데 Organization을 자동으로 설정한다.

Guardrail이 효과적으로 작동하는지 확인하기 위해 SCP를 자동으로 구현한다.

## **AWS Service Catalog Overview**

AWS를 시작하면 옵션이 너무 많아서 초보자들이 시작하기가 매우 복잡할 수 있으며 때론 사용자가 서비스를 사용하고 싶어할 때 스택을 생성할 수 있지만 조직의 나머지 부분과 일치하지 않을 수 있다.

사용자들은 스택을 빠르게 생성할 수 있는 셀프 서비스 포털이 필요하다.
이 포털은 관리자들이 서비스 카탈로그에서 미리 정의된 권한이 있는 제품 세트를 시작할 수 있게 해준다.

예를 들어 머신 러닝을 위한 가상 머신, 애플리케이션을 위한 데이터베이스, 저장 옵션 등을 원하는 사용자가 있을 수 있다.

Service Catalog는 admin과 user로 나누어지며, admin은 product를 생성한다.
product는 결국 CloudFormation 템플릿이다.

Portfolio 는 여러 개의 Product를 캡슐화한 것이라고 보면 된다. Product의 모음이다.

그리고 IAM policy와 같은 컨틀롤을 정의해 누가 이 Portfolio에 액세스할 수 있는지 권한을 설정한다.

user는 Product list를 사용할 수 있으며, IAM 권한이 있다면 해당 목록을 볼 수 있다.

Product를 시작하면 Product가 프로비저닝 되어 사용할 준비가되며, 적절히 구성되고, 적절한 유형으로 설정된다.

사용자들이 CloudFormation 템플릿 목록에서 선택하여 포트폴리오를 조직화하고 안전하게 시작할 수 있도록 한다.

사용자는 AWS에 직접 액세스하지 않고도 서비스 카탈로그에만 액세스할 수 있으며, 클라우드 포메이션을 직접 사용하는 것이 아니라 서비스 카탈로그에서 승인된 클라우드 포메이션 템플릿을 사용해 완전한 스택을 시작할 수 있다.

카탈로그는 공유가 가능하다.

우리 계정에 카탈로그가 있고, 이를 다른 계정 또는 조직 내에 공유될 수 있다.

포트폴리오는 두 가지 공유 옵션이 있다.

첫 번째는 포트폴리오에 대한 참조를 공유한 다음 수신 계정에 공유된 포트폴리오를 가져온다. 이 경우 원본 포트폴리오와 동기화된다.

이것은 계정 B의 관리자가 전체 포트폴리오를 가져와 제품을 시작할 수 있음을 의미한다.

그리고 계정 A의 포트폴리오에 제품을 추가하면 관리자가 그 제품을 볼 수 있기 때문에 동기화된다.
그리고 해당 제품을 시작할 수도 있다.

그리고 수신 계정에 포트폴리오의 사본을 배포하는 방법도 있다.

이 경우, 포트폴리오 A에서 업데이트가 발생하면 이를 계정 B로 복사해야 한다. 동기화가 아닌 복사이다.

또한 가져온 포트폴리오에서 로컬 포트폴리오로 제품을 생성할 수 있다.

서비스 카탈로그에서는 프로비저닝된 제품에 대한 태그를 관리할 수 있으며, 이를 TagOptiond이라고 한다.

이것은 서비스 카탈로그에서 사전 정의된 키 값 쌍으로 관리되며, 이를 통해 AWS에서 태그를 생성할 수 있다.

TagOption을 사용하면 포트폴리오의 특정 Product에서 스택을 시작할 때 키와 값을 상속받게 됨을 의미한다.

사용 사례는 적절한 리소스 태깅을 수행하거나, 서비스 카탈로그에서 정의된 허용된 태그만 사용하는 것이다.

TagOption은 다른 계정이나 조직과 공유할 수도 있다.

## **AWS Billing Alarms**

Billing Data는 하나의 리전에만 저장된다. us-east-1이며, CloudWatch에 저장된다.

이 데이터는 us-east-1의 리전 데이터만 있는 것은 아니고 리전 전체를 나타낸다.

그리고 이는 계정에 발생한 실제 비용을 나타낸다.

Alarm을 생성할 때는 일단 Billing 에서 실제로 알람을 활성화 해줘야한다.
Billing Preferences -> Receive Billing Alerts

활성화 시 사용량 요금 및 수수료를 모니터링하는 것을 가능하게 한다.

활성화 하고 2~3 시간 정도 기다리면 CloudWatch Metric에서 청구 데이터를 살펴볼 수 있다.

이 Metric 데이터를 이용해서 CloudWatch Alert를 설정하고 SNS 주제로 보내도록 할수도 있다.

## **[SAA] AWS Cost Explorer**

Cost Explorer는 청구 서비스이다.

이 서비스는 시간에 따라 AWS 비용과 사용량을 시각화하고 이해하며 관리하는 데 사용된다.

사용자 정의 보고서를 생성해 비용 및 사용량 데이터를 분석할 수 있다.

이를 통해 대시보드 및 다이어그램을 얻을 수 있다.

그래서 모든 계정에서의 총 비용 및 사용량과 같은 고수준에서 데이터를 분석할 수 있다.

월별, 시간별 또는 리소스 수준으로 내려갈 수도 있다.

그리고 Cost Explorer를 통해 최적의 Savings Plan을 선택해 청구서의 가격을 낮출 수 있다.

또한 이전 사용을 기반으로 미래 12개월 동안 사용량을 예측할 수 있으며 이는 비용 계획에 배우 유용할 수 있다.

Cost explorer를 살펴보면 "AWS 서비스별 월별 비용"과 같은 사례가 있다.

그래서 우리는 비용을 최적화하기 위해 "이러한 인스턴스들이 제대로 사용되고 있는가" "최대한 사용되고 있는가" "적절한 크기인가" 등의 질문을 할 수 있다.

또한 시간별 및 리소스 레벨을 얻을 수 있다.

이 예에서는 다시 한번 일부 인스턴스 리소스 레벨 정보를 쉽게 얻을 수 있으며 시간이 지남에 따른 비용을 얻을 수 있다.

그래서 청구서를 더 잘 분석하고 이해하기 위해 매 시간마다 무엇이 발생하는지 볼 수 있다.

Cost Explorer를 통해 사용량에 따라 Savings Plan을 설정하는 데 있어 몇 가지 권장 사항과 추정 월간 지출 등을 제공한다.

마지막으로 사용량을 예측할 수 있다.
이전에 발생한 비용을 기반으로 예측 및 예측의 신뢰도를 얻을 수 있으며 이전 사용량을 기반으로 청구서에 얼마나 지불할 것으로 예상되는지 알 수 있다.

이러한 유형의 사용 사례가 시험에서 나올 수 있다.

## **AWS Budgets**

실제 청구 또는 미래 예상 청구를 기반으로 예산을 생성하고 비용이 예산을 초과할 때마다 알림을 보내고 싶다면 AWS Budgets를 사용한다.

콘솔에서 설정할 수 있는 네 가지 유형의 예산이 있다.
사용량, 비용, 예약, 절약 계획을 사용할 수 있다

예약 인스턴스에 대한 예산을 설정할 경우 전체 예약 인스턴스의 사용률을 추적할 수 있으며 EC2, ElastiCache, RDS 및 다양한 서비스에 대한 예약 인스턴스를 지원한다.

예산당 최대 다섯 개의 알림을 설정할 수 있으며 서비스, 연결된 계정, 태그, 구매 옵션 등과 같은 다양한 옵션으로 예산을 필터링할 수 있다.

## **AWS Cost Allocation Tags & Cost & Usage Reports**

Cost Allocation Tag 비용 할당 태그를 살펴보자

비용 할당 태그는 AWS 비용을 자세히 추적하는 데 사용된다.

비용 및 보고서를 다운로드하면 User:Owner 와 같은 태그를 볼 수 있는데 이들이 비용 할당 태그이다.

이는 이러한 태그의 다른 값에 따라 비용 보고서를 분리하고 싶기 때문이다.

비용 할당 태그에는 두 가지 유형의 태그가 있다.

AWS에서 생성한 태그와 사용자 정의 태그이다.

AWS에서 생성한 태그는 자동으로 생성되어 AWS에서 생성된 리소스에 자동으로 적용된다. 그리고 AWS 접두사로 시작된다. 예를들어 "aws:createdBy" 등이 있다.

"aws:createdBy" 는 특정 리소스를 생성한 사람을 나타낸다. 따라서 누가 무엇을 생성했는지에 따라 비용 보고서를 생성할 수 있다.

사용자 정의 태그는 사용자가 정의하며 user:로 시작한다.

사용자 정의 태그의 경우 태그를 사용해 Environment를 분리할 때 사용되기도 한다.

리소스에 올바른 태그를 지정해 나타나고 분리되도록 해야한다. 이 태그를 사용해 비용 할당 태그 보고서에 대한 비용 및 사용 보고서로 이어진다.

이 보고서는 비용 및 사용을 더 깊이 파고들어 자세히 살펴보는 데 사용되며, 사용 가능한 가장 포괄적인 AWS 비용 및 사용 세트를 포함한다. 모든 서비스, 가격 및 예약에 대한 추가 메타데이터를 포함한다.

보고서에 EC2 Reserved Instance에 대한 정보가 포함될 것이다.
이 비용 및 사용 보고서는 각 서비스별로 계정에서 사용된 AWS 사용량을 시간별 또는 일일 항목으로 나열할 것이다.

그리고 비용 할당 용도로 활성화된 태그를 볼 수 있다.

매일 S3로 보고서를 내보낼 수도 있으며, 이 데이터를 Athena, Redshift 또는 QuickSight를 사용해 분석할 수 있다.

## **[CCP] AWS Compute Optimizer Overview**

Compute Optimizer는 워크로드에 대해 최적의 AWS 리소스를 추천하여 비용을 절감하고 성능을 향상시킨다.

이는 EC2 인스턴스 및 ASG 등의 분석을 수행해 과다 배치되거나 부적절하게 배치된 것을 식별하고 최적화를 제안합니다.

그런 다음 이러한 최적화를 구현하여 비용 및 성능을 개선할 수 있다.

이를 위해 Compute Optimizer는 리소스 구성을 분석하고 인스턴스의 활용도를 이해하기 위해 머신러닝을 사용한다.

Compute Optimizer에서 지원하는 리소스에는 EC2 인스턴스, ASG, EBS 볼륨, Lambda 함수 등이 포함된다.

추천 사항은 S3로 내보낼 수 있다.

## **[SAA] AWS DataSync**

DataSync는 데이터를 동기화하는 서비스로, 대량의 데이터를 이동시키거나 다른 위치로부터 AWS로 데이터를 가져올 수 있다.

위치는 예를 들어 온프레미스나 다른 클라우드(Azure, GCP 등)일 수 있다.
NFS, SMB, HDFS 또는 다른 프로토콜을 사용하여 서버에 연결해야 하며, 연결을 위해 온프레미스나 다른 클라우드에 에이전트가 필요하다.

또한 다른 AWS 서비스로 데이터를 이동할 수도 있다. 이 경우에는 에이전트가 필요하지 않다. 데이터를 Amazon S3, EFS, FSx로 동기화할 수 있으며, 모든 스토리지 클래스를 지원한다.

복제 작업은 시간 별, 일별, 주간 별로 예약되어 실행된다.

또한 DataSync는 파일 권한과 메타데이터를 유지할 수 있다.
즉, NFS POSIX 파일 시스템과 SMB 권한과 관련된 보안 및 메타데이터를 보존할 수 있다.

한 DataSync 에이전트는 하나의 작업을 실행할 수 있으며, 초당 최대 10 GB의 데이터를 사용할 수 있다.

그러나 네트워크를 최대로 활용하고 싶지 않다면 대역폭 제한을 설정할 수 있다.

사용 사례는 온프레미스 파일을 SMB 또는 NFS 프로토콜을 사용하여 AWS로 동기화할 수 있다.

AWS로 동기화될 때 사용되는 서비스는 S3, EFS, FSx가 될 수 있다.

데이터가 마이그레이션되는 과정은 아래와 같습니다.

온프레미스에는 AWS DataSync 에이전트가 설치되어 NFS 또는 SMB 서버에 연결하도록 지시한다.
그런 다음 DataSync 에이전트는 연결을 설정하고 데이터를 DataSync 서비스로 암호화하여 연결한다.
이후에는 원하는 위치로 데이터를 이동시킬 수 있다.

온프레미스에서 AWS로 단방향 동기화할 수도 있지만, AWS에서 다시 온프레미스로 동기화할 수도 있다.

시험에서는 DataSync를 사용하려고 하지만 네트워크 용량이 부족한 경우가 있다.
이 경우 AWS Snowcore 장치를 사용할 수 있다.

Snowcore 장치는 DataSync 에이전트가 미리 설치되어 있으므로 온프레미스에서 Snowcore를 실행하고 데이터를 가져와 DataSync 에이전트를 실행한 다음, AWS 리전으로 다시 발송하여 AWS의 스토리지 리소스로 데이터를 동기화할 수 있다.

DataSync를 사용하여 다른 AWS 스토리지 서비스 간에 동기화하는 경우
DataSync 서비스를 사용하고 데이터뿐만 아니라 메타데이터도 다른 AWS 스토리지 서비스간에 유지된다. **매우 중요한 부분**이다.

DataSync는 거의 모든 것을 동기화할 수 있지만 지속적으로 동기화하는 것은 아니고, 일회성으로 예약된 작업을 수행하는 것이다.
그리고 NFS 또는 SMB 서버에 연결하는 경우 DataSync 에이전트를 실행해야 한다.

## **[SAA] AWS Backup**

AWS 백업은 매니지드 서비스로, 모든 AWS 서비스에 대한 백업을 중앙에서 관리하고 자동화할 수 있다.

사용되는 서비스는 매우 다양하다. EC2, S3, RDS 및 모든 데이터베이스 엔진(Aurora, DynamoDB, DocumentDB, Amazon Neptune), EFS, FSx(Lustre 포함), Windows 파일 서버 등이 포함된다.

AWS 백업은 교차 리전 백업을 지원한다. 재해 복구 전략을 위해 백업을 다른 리전으로 이동할 수 있다. 또한 교차 계정 백업도 지원된다.

지원되는 서비스의 경우 Point-in-time recovery를 지원하며, 온디맨드 및 예약 백업을 지원한다.

Prod로 태그가 지정된 리소스만 백업하는 태그 기반 백업 정책도 있다.

백업 계획이라고 알려진 backup 정책을 생성할 수 있다.

- 주기 (매 12시간마다, 매일, 매 주, 매 월, Cron 표현식)
- Backup window (백업 기간)
- 백업을 Cold Storage로 전환. 보관 기간을 지정할 수 있다. (Never, Days, Weeks, Months, Years)

AWS 백업 계획을 생성한 다음 특정 AWS 리소스를 할당한다. 할당이 완료되면 데이터가 자동으로 AWS Backup에 특정한 내부 버킷에 백업된다.

Vault Lock 기능이 있다. 이를 사용하면 WORM(Write Once Read Many) 정책이 적용되어 백업 볼트에 저장된 모든 백업을 삭제할 수 없다.

Vault Lock 정책을 지정하면 루트 사용자조차도 백업을 삭제할 수 없다. 백업의 안전성에 대한 강력한 보증을 제공한다.

## **[CCP/SAA] Shared Responsibility Model**

공동 책임 모델(Shared Responsibility Model)이 있다.

AWS의 책임은 클라우드의 보안이다.
즉, AWS가 우리에게 제공하는 모든 인프라, 하드웨어, 소프트웨어, 시설, 네트워킹을 보호해야 한다.

왜나하면 이 인프라는 우리가 AWS에서 사용하는 모든 서비스를 실행할 것이기 때문이다.

또한 S3, DynamoDB, RDS와 같은 AWS에서 관리하는 서비스는 AWS의 책임이다.

그러나 한 번 서비스를 제공하면 그 서비스를 어떻게 사용하는지는 우리의 책임이다.

예를 들어 EC2 인스턴스의 경우 우리는 운영 체제의 모든 관리를 책임져야 한다.
또한 인스턴스가 올바른 IAM 인스턴스 역할을 사용해 적절한 IAM 정보를 가지고 있는지 확인해야 한다.

몇 가지 컨트롤은 공유된다.
예를 들어 패치 관리, 구성 관리, 인식 및 교육은 우리와 AWS 모두 사이에서 공유된다.
패치 관리의 경우 RDS를 사용하는 경우 AWS가 패치 관리를 수행한다. EC2를 사용하는 경우는 우리가 운영 체제를 패치해야 한다.

다음으로 RDS와 같은 기술에 대해 자세히 알아보면
AWS의 책임은 기본 EC2 인스턴스를 관리하고 SSH 액세스를 제공하며 데이터베이스 패치를 자동화하는 등의 작업을 보장하는 것이다.

우리는 RDS 사용자로서 데이터베이스 보안 그룹의 포트, IP 보안 그룹 인바운드 규칙이 올바르게 설정되어 있는지 확인하는 것이다.

또한 데이터베이스 내의 데이터를 암호화하려면 사용자가 책임져야 한다.

고개으로서 우리는 우리의 데이터, 응용 프로그램, 플랫폼, ID 및 액세스 관리에 책임이 있으며, 운영 체제, 네트워크 및 방화벽 구성도 마찬가지이다.

클라이언트 측 데이터 암호화, 서버 측 암호화 및 네트워크 트래픽 보호도 모두 우리의 책임이다.

반면에 AWS는 자사의 소프트웨어, 서비스, 사용자에게 제공할 때 컴퓨팅 저장소, 데이터베이스 및 네트워킹이 올바르게 작동하는지 확인해야 하며, 자사의 하드웨어 및 전역 인프라에 대한 책임을 져야 한다.

위에 해당하는 것들은 리전, 가용 영역, Edge Location 등이 있다.

시험에서 공동 책임 모델은 최소 두 번에서 세 번정도는 나올 내용이다.

## **[CCP] DDoS, AWS Shield and AWS WAF**

DDos 공격은 분산 서비스 거부 공격이다.

예를 들어 해커인 공격자가 우리의 애플리케이션 서버에 DDoS 공격을 하려고 할 때 공격자가 여러 마스터 서버를 시작하고, 이 서버들이 많은 봇을 시작하게 된다. 그리고 이 모든 봇들은 우리의 애플리케이션 서버에 요청을 보낸다.

이제 우리 서버는 많은 요청을 처리할 수 없기에 더 이상 작동하지 않게 될 것이다.

따라서 우리의 애플리케이션ㅅ 서버에 연결하려는 일반 사용자는 우리의 서버가 접근할 수 없거나 응답이 없는 것을 보게 될 것이며, 결과적으로 우리의 애플리케이션이 다운된다.

AWS Shiled Standard를 사용하면 모든 고객에게 추가 비용 없이 웹사이트 및 응용 프로그램에 대한 DDoS 공격으로부터 보호한다.

AWS Shield Advanced는 프리미엄 DDoS 공격에 대한 24/7 보호를 제공한다.

그런 다음 규칙을 기반으로 특정 요청을 필터링하는 웹 애플리케이션 방화벽(WAF)를 사용할 수 있다. CloudFront 및 Route 53을 사용해 Global Edge Network를 활용해 보호를 제공할 수 있다.

공격이 들어와도 서비스가 중지되지 않도록 Auto Scaling을 활용할 수 있다.

DDos 공격에 대한 대략적인 아키텍처는 이렇다.

사용자는 Route53의 DNS를 통해 라우팅되어 Shield로 보호된 DNS는 DDos 공격으로부터 안전하다.

그런 다음 콘텐츠가 엣지에서 캐시되도록 CloudFront 배포를 사용하고 이 역시 Shield로 보호된다.

공격을 필터링하고 보호하기 위해 WAF를 사용할 수 있으며, 이를 통해 애플리케이션을 제공하기 위해 Public Subnet의 로드 밸런서를 사용할 수 있다.

마지막으로 로드 밸런서 뒤에 있는 EC2 인스턴스를 사용해 수요가 높아질 경우에 대비하여 Scaling 할 수 있다.

Shield는 두 가지 구성 요소로 이루어져있다.

무료 서비스인 Shield Standard는 모든 AWS 고객에게 활성화되며 SYN/UDP Flood Attack이나 layer 3, layer 4에 대한 reflection attack과 같은 DDoS에 대한 일반적인 공격으로부터 보호한다.

Shield Advanced는 선택 사항이며, 조직 당 월 $3000의 비용이 든다.
이는 EC2, ELB, CloudFront, Global Accelerator 및 Route53에 대한 더 정교한 공격에 대한 보호를 제공한다.

24/7 접근 가능한 AWS DDos Response Team (DRT) 이 제공된다.
이는 DDoS 공격으로 발생하는 대응을 AWS에서 선제적으로 대응해주며, 공격 중 발생한 모든 비용은 AWS가 부담한다.

시험에서는 Shiel는 무료 버전은 기본적으로 모든 고객에게 활성화되며, 더 높은 수준의 방어가 필요한 경우 응답 팀이 필요하다면 Shield Advanced를 직접 활성화하면 된다.

다음으로 WAF가 있다.

이는 일반적인 웹 공격으로부터 웹 응용 프로그램을 보호하는 것이다. 예를 들어 레이어 7에서 발생하는 공격을 말한다.

레이어 7이므로 HTTP 친화적인 장치에만 배포할 수 있으며, ALB, API GW, CloudFront와 같은 곳에 배포할 수 있다.

WAF에서 Web ACL 을 정의할 수 있으며, 이 ACL의 규칙에는 IP 주소, HTTP 헤더, HTTP body, URI String 기반 필터링하는 것이 포함될 수 있다.

이를 통해 SQL Injection이나 Cross-Site Scripting과 같은 일반적인 공격으로부터 보호할 수 있다.

요청이 너무 커지지 않도록 크기 제약을 설정하고, 지리적 위치에 따라 특정 국가를 차단할 수도 있다.

마지막으로 DDoS 보호를 위해 Rate-based 규칙을 사용해 이벤트의 발생 횟수를 카운트할 수 있으며, 이를 통해 사용자가 초당 다섯 번 이상의 요청을 할 수 없도록 설정하여 DDoS 공격으로부터 보호할 수 있다.

요약하면, Shield, WAF, CloudFront, Route 53의 조합이 완전한 DDoS 보호를 제공할 것이다.

## **[CCP] Penetration testing on AWS**

클라우드 상에서의 침투 테스트에 대해 이야기 해보자

침투 테스트란 자체 인프라에 대한 보안을 테스트하기 위해 인프라를 공격하는 것을 말한다.

AWS의 고객은 8개의 서비스에 대해 사전 승인 없이 자체 인프라에 대한 보안 평가 및 침투 테스트를 수행할 수 있다.

이 서비스들은 EC2, NAT GW, ELB, RDS, CloudFront, Aurora, API GW, Lambda 및 Lambda Edge, Lightsail 리소스 및 Elastic Beanstalk 환경이다.

위 서비스에 대해서는 사전 승인이 필요하지 않으나 금지된 다른 유형의 활동을 수행하려면 승인이 필요하다.

예를 들어

- Route 53 호스팅 영역을 통한 zone walking을 수행할 수 없다.
- 시스템에 DDoS를 수행할 수 없으며, DoS, 시뮬레이트된 DoS, 시뮬레이트된 DDoS도 수행할 수 없다.
- 자체 인프라에 대한 서비스 거부 공격을 수행할 수 없다.
- 포트 플러딩
- 프로토콜 플러딩
- login Request 플러딩, API Request 플러딩 등 Request 플러딩도 수행할 수 없다.

이 밖에도 AWS의 보안 팀에 문의하여 승인을 받아야한다.

시험 관점에서는 일부는 승인되지만 특정 승인되지 않은 침투 테스트는 거부된다. AWS의 관점에서는 자신의 인프라를 공격하려는 것으로 보이기 때문이다.

## **[CCP/SAA/SAP] Amazon Inspector**

Inspector는 몇 가지 대상에 대해 자동 보안 평가를 실행할 수 있는 서비스이다.

EC2의 경우
- System Manager Agent를 활용, Inspector가 해당 EC2 인스턴스의 보안을 평가한다.
- 의도하지 않은 네트워크 접근성과 알려진 취약점을 가진 운영 체제를 지속적으로 분석
ECR에 Push할 때의 경우
- Docker 이미지의 경우 이미지가 ECR로 Push될 때 Inspector가 알려진 취약점을 대상으로 이미지를 분석한다.
Lambda Function
- 함수가 배포될 때 함수 코드 및 패키지 종속성의 소프트웨어 취약점을 위해 Inspector가 분석한다.

Inspector가 작업을 완료하면 AWS Security Hub에 보고하고 이러한 결과 및 이벤트를 EventBridge로 전송할 수도 있다.

이를 통해 인프라에서 실행 중인 취약성을 중앙에서 볼 수 있으며, EventBridge를 통해 일부 자동화를 실행할 수도 있다.

Amazon Inspector는 실행 중인 EC2 인스턴스, ECR의 컨테이너 이미지, Lambda 함수에만 해당된다.
필요할 때만 인프라를 지속적으로 스캔한다.

Amazon Inspector 취약성 데이터베이스에서 취약성 및 노출 (CVE) 을 검색하여 EC2, ECR 및 Lambda를 위한 패키지 취약점을 확인한다.

그리고 EC2의 네트워크 접근성을 확인한다.

CVE 데이터베이스가 업데이트 되면 Amazon Inspector가 자동으로 다시 실행되어 모든 인프라가 한번 더 테스트 되도록 한다.

매번 실행할 때마다 모든 취약점에 대해 위험 점수가 할당되어 우선 순위가 정해진다.

## **Logging in AWS**

기본적으로 규정 준수 요구 사항을 충족시키려면 AWS가 로그를 제공하는 많은 서비스가 있다. audit 로그나 security 로그일 수 있다.

서비스의 로그에는 여러가지가 포함된다.

- CloudTrail이 포함된다. CloudTrail은 모든 API 호출을 추적할 수 있다.
- Config rule은 구성 및 규정 준수를 시간이 지남에 따라 추적할 수 있다.
- CloudWatch Logs는 완전한 데이터 보유를 원하는 경우에 사용 가능하다. 예를 들어 애플리케이션 로그를 기록하려는 경우이다.
- VPC Flow 로그는 VPC 내에서 IP 트래픽을 검토하는 데 사용된다.
- 로드 밸런서에 대한 ELB Access Log가 있으며 로드 밸런서로 수행된 요청의 메타데이터를 제공한다.
- CloudFront 로그는 CloudFront 웹 Distribution에서 직접 가져온 로그를 확인하는 데 사용된다.
- WAF 로그는 WAF를 활성화하면 서비스에서 분석한 모든 요청에 대한 완전한 로깅을 제공한다.

이러한 모든 로그를 S3에 넣을 수 있고, 그런 다음 AWS Athena를 사용해 이를 분석할 수 있다.

우리는 EC2 인스턴스가 종료되고 머신에서 로그를 잃어버렸더라도 ELB Access Logs 와 S3를 결합하여 ELB에 대해 무슨 일이 발생했는지 신속하게 파악할 수 있다.

그뿐만 아니라, 모든 이와 관련된 감사 및 보안 로그 및 규정 준수 로그를 S3에 저장한다면 이 로그를 암호화하는 것이 좋으며, 이러한 로그를 저장하는 버킷의 액세스를 IAM 및 버킷 정책을 사용해 제어할 수 있다.

로그를 매우 오래 보관해야 하는 경우, 이러한 로그를 비용 절감을 위해 Glacier로 이동해야한다. Glacier 보관 로그는 7년간이나 일정 기간 동안 로그를 접근할 수 없게 만들 수 있다.

AWS에 존재하는 로깅의 범위를 기본적으로 이해하고 있으며, 어떻게 분석할지, 어떻게 저장할지, 비용을 절감하고 규정을 준수하는 방법을 알고 있으면 된다.

## **[CCP/SAA/SAP] Amazon GuardDuty**

GuardDuty는 AWS 계정을 보호하기 위해 지능적인 위협 탐지를 지원한다.

머신러닝 알고리즘을 사용하여 이상 징후를 탐지하고, 이상 징후를 찾기 위해 타사 데이터를 활용한다.

활성화하기 위해서는 클릭 한번만으로 가능하고, 30일 동안 무료로 소프트웨어 설치 없이 사용할 수 있다.

GuardDuty는 CloudTrail 이벤트 로그와 같은 다양한 입력 데이터를 검토하여 비정상적인 API 호출이나 무단 배포 등을 탐지한다.

입력 데이터는 아래와 같다.
CloudTrail Events Logs (비정상적 API 호출, 권한 없는 배포)

- CloudTrail Management Event
  - VPC 서브넷 생성 이벤트 등을 검토
- CloudTrail S3 Data Event
  - get object, list object, delete object 등을 검토한다.
- VPC Flow Logs: 비정상적인 인터넷 트래픽과 비정상적인 IP 주소를 살펴본다.
- DNS Logs: EC2 인스턴스가 DNS 쿼리 내에서 인코딩된 데이터를 보내는지 확인해 침해 여부를 판단.
- Optional Features: EKS Audit Logs, RDS 및 Aurora 로그인 이벤트, EBS, Lambda 및 S3 Data Events와 같은 입력 데이터 원본을 분석할 수도 있다.

또한 발견된 사항이 있을 경우 이를 자동으로 알릴 수 있도록 EventBridge 규칙을 설정할 수 있다. 이 규칙은 AWS Lambda 또는 SNS와 같은 EventBridge가 대상으로 등록할 수 있는 것들을 지정할 수 있다.

GuardDuty는 암호화폐 공격에 대비하여 매우 좋은 도구이다.
이에 대한 전용 발견 사항이 있다.

GuardDuty는 이러한 input 데이터를 분석하고 암호화폐 공격이 있음을 감지할 수 있다.

## **[CCP/SAA] Amazon Macie**

Macie는 AWS에서 기밀 데이터를 발견하고 보호하기 위해 머신러닝과 패턴 매칭을 사용하는 매니지드 데이터 보안 및 데이터 개인 정보 보호 서비스이다.

좀 더 구체적으로는 Macie는 개인 식별 정보(PII)와 같은 민감 데이터에 대한 경고를 발생시킨다.

S3 버킷에 PII 데이터가 있다고 하면 Macie가 데이터를 분석해 PII로 분류될수 있는 데이터를 발견한다.
발견 사항을 EventBridge를 통해 알려준다.

## **[CCP/SAA] Trusted Advisor**

Trusted Advisor는 계정에 대한 고수준의 평가를 제공한다.

예를 들어, EBS Public 스냅샷이 있는지, RDS Public 스냅샷이 있는지, 계정에 루트 계정을 사용하는지 등을 확인한다.

Trusted Advisor는 여섯 가지 범주로 그룹화되어 위와같은 사항들을 확인한다.

- 비용 최적화
- 성능
- 보안
- 내결함성
- 서비스 제한
- 운영 우수성

Business 와 Enterprise Support Plan을 사용한다면 AWS Support API를 통해 Trusted Advisor에 대한 프로그래밍 액세스를 얻을 수 있다.
그리고 전체 확인 항목에 대해 액세스할 수 있다.

## **[SAA/DVA] Encryption 101**

암호화가 어떻게 작동하는 지에 대해 알아보자

데이터 전송 중 암호화에 대해 알아보자

이는 TLS 또는 SSL로 참조된다. 데이터가 전송되기 전에 데이터가 암호화되고, 받은 후에는 해독 된다.

이는 클라이언트와 서버 간의 네트워크 통신에 사용되며, 암호화된 데이터를 전송하기 위해 TLS 인증서가 사용된다.

이는 웹 사이트에 HTTPS로 표시될 때 볼 수 있는 것이다.

이것은 우리와 서버 간의 연결이 TLS 인증서를 사용해 암호화된 것을 의미한다.

정송중 암호화를 하는 이유는 네트워크를 통해 데이터를 전송하고 때때로 Public 네트워크를 통해 데이터가 여러 다른 서버를 거쳐 이동하기 때문이다.

서버 간 데이터를 관찰하는 중간 서버가 데이터를 받고 패키지를 관찰할 수 있는 중간자 공격을 허용하게 될 수도 있다.

그래서 TLS, SSL을 이용해 HTTPS 통신을 하면 오직 대상 서버만 암호화된 데이터를 해독하게 된다.

이것이 전송 중 암호화에 대한 것이다.

다음으로는 서버 측 암호화에 대해 이야기 해보자

데이터가 서버에 수신된 후에 암호화되어 안전하게 저장되어야 한다는 것이다.

그리고 클라이언트에게 돌려보내기 전에 해독될 것이다. 데이터는 키를 통해 암호화되고, 그 키는 일반적으로 데이터 키이다.

암호화 및 해독에 대한 이러한 키 관리는 어딘가에서 관리되어야 하며 서버가 이러한 키에 액세스할 수 있어야 한다.

객체를 HTTP 또는 HTTPS 로 보내는 경우 Data key를 이용해 암/복호화를 하게 되고 복호화된 객체는 다시 클라이언트에게 보내진다.

이러한 경우는 서버 측 암호화이다.
왜냐하면 모든 암호화 및 해독이 서버에서 수행되기 때문이다.

그리고 클라이언트 측 암호화도 있다.

이번에는 데이터가 클라이언트 측에서 암호화되고 복호화될 것이며, 이 경우 서버는 데이터를 해독할 수 없어야 한다.

암호화된 객체는 어떤 스토리지 서비스로도 안전하게 보낼 수 있다.

FTP 서버나 S3, EBS 볼륨 등을 사용할 수 있다.

## **[SAA/DVA] KMS Overview**

AWS Key 관리 서비스가 있다.

AWS 서비스에서 암호화를 사용하는 경우 대부분 KMS 암호화를 사용한다.

KMS는 권한 부여를 위해 IAM과 완전히 통합되어 있으며, KMS로 암호화된 데이터에 대한 액세스를 제어하는 것은 매우 쉽다.

AWS KMS를 사용하는 장점은 CloudTrail을 통해 키를 사용하는 모든 API 호출을 감사할 수 있다는 것이다. (시험에 출제 가능 내용)

KMS는 다양한 AWS 서비스와 긴밀히 통합되어 있다.
예를 들어 KMS를 이용해 EBS 볼륨을 암호화 하거나, S3, RDS, SSM 도 동일하다.

KMS를 사용하면 평문으로 데이터를 저장하지 않고, 특히 코드에서 그대로 저장하지 않는다.

KMS key는 API 호출을 통해서도 암호화할 수 있다. AWS CLI 또는 SDK를 사용할 수 있다.

그리고 비밀로 저장하고 싶은 내용들을 KMS 키로 암호화할 수 있다. 예를 들어 코드나 환경 변수와 같은 것들

이제 사용 가능한 다양한 유형의 KMS 키에 대해 이야기 해보자

KMS Key는 두가지 유형의 KMS 키가 있다.
대칭 KMS 키와 비대칭 KMS 키가 있다.

대칭 KMS 키 (AES-256)

- 데이터를 암호화하고 해독하는 데 사용되는 단일 암호화 키
- 그래서 KMS와 통합된 AWS의 모든 서비스는 대칭 키를 사용한다.
- KMS 대칭 키를 생성하거나 사용할 때 우리는 키 자체에 액세스하지 않고 키를 활용하기 위해 KMS API 호출을 사용하기만 하면 된다.

비대칭 KMS 키 (RSA & ECC key pair)

- 데이터를 암호화하는 데 사용되는 공개 키와 데이터를 해독하는 데 사용되는 개인 키 두 가지가 있음을 의미한다.
- 암/복호화 또는 서명/검증 유형의 작업에 사용된다.
- 이 경우 KMS에서 공개 키를 다운로드할 수 있지만, 개인 키에는 액세스할 수 없다.
- Private 키에 액세스하기 위해서도 API 호출만 사용할 수 있다.
- 사용 사례는 암호화를 AWS 클라우드 외부에서 수행하려는 경우이다. KMS API 키에 액세스할 수 없거나 액세스할 수 없는 사용자가 데이터를 암호화하려는 경우이다.

AWS KMS 키는 여러 가지 유형의 KMS 키가 있다.

1.  AWS Owned key: 이것은 무료이며, SSE-S3 유형의 암호화 또는 SSE-DynamoDB와 같이 선택한 키를 사용하는 경우 사용하는 키이다. SSE-S3, SSE-SQS 등
2.  AWS Managed Key: 이것은 무료이며, "aws/서비스 이름" 등의 이름으로 시작한다.

- 예를 들어 aws/rds 또는 aws/ebs 등이 있다.
- 원하는대로 사용할 수 있지만 할당된 서비스 내에서만 사용할 수 있다.

3.  Customer Managed Key: 사용자 지정 키이며, 한 달에 $1의 비용이 든다.

- key를 추가하고 싶다면 한 달에 $1의 비용을 추가하여 가져올 수 있다.

KMS에는 KMS 서비스로 수행된 각 API 호출에 대해 지불해야 하는 가격이 있다. 10,000 API 호출 당 약 0.03$ 이다.

또한 자동 key rotation이 있다.
AWS KMS 키인 경우 자동으로 매년 1회 이루어진다.

그리고 KMS 내에서 생성한 CMK인 경우 Rotation을 활성화해야 하며, 매년 1회 발생한다.

Imported KMS key의 경우 수동으로만 Rotation할 수 있으며, alias로 별칭을 활용해야한다.

KMS 키는 리전 별 범위를 가지고 있다.

특정 리전의 KMS 키로 암호화된 EBS 볼륨이 있다면 특정 리전에서 다른 리전으로 복사하려면 여러 단계를 수행해야 한다.

먼저 EBS 볼륨의 스냅샷을 만들고(KMS key를 이용해 만들던지 아니던지) 다른 리전으로 복사하려면 다른 리전에 있는 다른 KMS 키를 사용해 스냅샷을 다시 암호화해야 한다.

그리고 다른 KMS 키를 이용해 EBS 볼륨으로 복원하면 된다.

KMS는 Key Policies가 있다.

KMS 키에 대한 액세스를 제어하기 위함이며, S3 버킷 정책과 유사하지만 KMS 키에 KMS 키 정책이 없으면 아무도 액세스할 수 없다.

KMS 키 정책에는 두 가지 유형이 있다.

- 기본 정책 (Default KMS key policy)
  - 특정 사용자 정의 KMS 키 정책을 제공하지 않으면 생성된다.
  - 계정 내 모든 사용자가 이 키에 액세스할 수 있도록 한다.
- Custom KMS key policy
  - 더 구체적으로 제어하려면 사용자가 KMS 키에 액세스할 수 있는 사용자 및 역할을 정의하는 Custom KMS key policy를 사용할 수 있다.
  - 특히 다른 계정에서 KMS 키에 대한 교차 계정 액세스를 원할 경우 유용하다.

스냅샷을 계정 간에 복사하는 경우

스냅샷을 자체 KMS 키로 암호화하고 고객 관리 키여야 하며 사용자 지정 키 정책을 첨부해야 한다.

그런 다음 암호화된 스냅샷을 대상 계정과 공유한다.

그리고 대상 계정에서 스냅샷의 사본을 만들고 해당 대상 계정에서 다른 고객 관리 키로 암호화한다.

그 다음 대상 계정에서 스냅샷에서 볼륨을 생성하면 된다.

## **KMS Key Rotation**

키 로테이션에 대해 알아보자

고객 관리형 CMK에 대해 key rotation을 활성화 할 수 있다.

AWS 관리형 CMK가 아닌 경우이며, 자동 키 Rotation을 활성화하면 매년 한 번 발생한다.
1년 후에 키가 변경되지만 이전 키는 이전 데이터를 복호화할 수 있도록 활성 상태로 유지된다.

새로운 키는 동일한 CMK ID를 가지며, 백업 키의 재료만 변경된다.

예를 들어 rotation 이후에는 백업 키가 변경되어 키의 재료가 변경되지만 CMK ID는 동일하게 유지되며 이전 백업 키는 이전 데이터를 복호화할 수 있도록 유지된다.

키를 수동으로도 Rotaion할 수 있다.

예를 들어 90일마다, 180일 마다 키를 Rotaion하려는 경우이다.

새로운 키는 수동으로 생성되므로 다른 CMK ID를 가진다.
따라서 이전 키를 활성 상태로 유지하여 이전 데이터를 복호화할 수 있어야 한다.
그렇지 않으며 다른 이전 데이터에 대한 액세스 권한을 잃게 된다.
이 경우 데이터를 암호화하고 복호화할 때 별칭(Alias)를 사용하는 것이 좋다.

왜냐하면 Alias를 사용하면 애플리케이션에서 키 변경을 숨길 수 있기 때문이다.
예를 들어 현재 클라이언트는 Alias MyCustomKey와 통신하고 있다. 그리고 CMK ID와 함께 백업 키가 있다.
그런 다음 새로운 키를 만들어 수동으로 키를 Rotation하고 Alias를 변경한다.

이 경우 새로운 CMK ID가 생긴다.

이전 백업 키는 여전히 유지되지만 이제 클라이언트는 새로운 Alias가 새로운 재료를 가리킨다고 생각한다.

Alias가 업데이트되는 방법은?
API 관점에서 응용 프로그램이 키 변경을 감지하지 못하도록 Alias를 업데이트 한다.

그런 다음 이전 키 Alias는 Rotation 전에 있던 것이며 Rotation 후에는 새 키를 생성하고 UpdateAlias API 코드를 발급하여 업데이트된 Alias를 사용한다.
이를 통해 응용 프로그램에서 변경 사항이 감지되지 않는다.

시험에서 기억해야 할 점은 자동 키 회전을 원하는 경우 기간이 1년이며, 수동 키 회전을 원하는 경우 요구 사항에 따라 90일 또는 180일까지 설정할 수 있다는 것이다.

## **KMS For SysOps**

KMS에 대해 더 알아보자

EBS 볼륨에서 사용되는 암호화 키를 변경할 수 없다.

- 만약 변경하려면 EBS 스냅샷을 만들어야 하며, 그런 다음 새로운 EBS 볼륨을 생성한다. 새로운 볼륨에서 새로운 KMS 키를 지정할 수 있다.
- 이미 암호화된 EBS 볼륨에서 스냅샷을 만들고, 동일한 CMK가 사용되도록 할 때와 매우 유사하다. 그런 다음 새로운 볼륨을 만들 때 새로운 CMK로 암호를 해독하고 다시 암호화할 수 있다.
- 이렇게 하면 한 볼륨에서 다른 볼륨으로 KMS 키를 전환할 수 있다.

여러 계정 간에 암호화된 KMS 스냅샷을 공유하는 것

- 대상 계정과 공유하려는 스냅샷에 대한 키 Policy를 작성해야 한다. 이 Key Policy를 사용해 다른 계정이 암호화 및 복호화 작업을 수행할 수 있도록 허용한다.
- 예를 들어 암호화된 RDS DB 스냅샷을 공유하면 다른 계정이 액세스할 수 있으며, 이렇게 하면 다른 계정에서 해당 암호화된 스냅샷을 사용해 DB 인스턴스를 생성할 수 있다.

KMS 키 삭제가 있다.

- CMK를 삭제하도록 예약할 수 있으며, 7일에서 30일 사이의 대기 기간이 있다. 이 기간동안 삭제를 취소하고 CMK가 여전히 필요한 것으로 인식하면 삭제를 취소할 수 있다.
- 삭제 중인 CMK는 암호 작업에 사용할 수 없다. 따라서 해당 CMK로 암호화된 객체에 액세스하려고 하면 작업이 실패하게 된다. 시험에서도 이러한 사항에 대해 테스트한다.
- 키가 Rotaion되도록 예약된 경우 Rotaion은 발생하지 않는다.
- 어떤 이유로든 해당 CMK를 여전히 사용 중이라고 판단된다면 삭제를 취소할 수 있다.

삭제된 후에도 키가 여전히 사용 중인지 확인할 수 있는 자동화가 있다.

- 그 다음 CloudTrail은 로그를 CloudWatch Logs로 보내고 메트릭 필터를 설정해 키가 삭제 대기 중인지 확인한다. 이 메트릭 필터가 한 번 이상 발생하면 CloudWatch Alert를 설정해 SMS 알림이나 이메일 알림을 받을 수 있다.
- 이러한 스케줄에 따라 CMK를 삭제하고 위와같은 과정을 구현하면 CMK를 사용하려는 경우 알림을 받아 해당 CMK가 여전히 다른 사용자에 의해 사용 중임을 파악할 수 있다.

## **[DVA] CloudHSM Overview**

CloudHSM에 대해 알아보자

KMS의 경우 AWS가 암호화를 위한 소프트웨어를 관리하고 암호화 키에 대한 제어권을 가지게 된다.
그러나 CloudHSM의 경우 AWS가 암호화 하드웨어를 프로비저닝 한다.

이것은 HSM(Hardware Security Module) 장치라고 불리는 전용 하드웨어이며, AWS가 아닌 우리가 암호화 키를 완전히 관리하게 된다. 따라서 우리는 암호화 키에 대한 완전한 제어권을 갖게 된다.

CloudHSM 장치는 AWS의 클라우드 내에서 설정될 것이지만, FIPS 140-2 Level 3 규정을 준수하는 방식으로 침입 저항성을 가지고 있어, 누군가가 HSM 장치에 수동으로 액세스하려고 하면 차단된다.

CloudHSM 장치는 대칭 및 비대칭 암호화 키를 모두 지원한다.
따라서 SSL 및 TLS 키와 같은 것들도 사용할 수 있다.

Free tier가 없다.

CloudHSM 장치를 사용하려면 클라이언트 소프트웨어를 사용해야 하며, 이는 상당히 복잡하며 현재 범위를 벗어난다.

RedShift와 CloudHSM 간에 통합이 있다.
이것을 통해 데이터베이스 암호화와 키 관리를 위해 CloudHSM을 활용할 수 있다.

CloudHSM은 예를들어 S3 위에 SSE-C 유형의 암호화를 구현하려는 경우에 매우 좋은 후보이다.
왜냐하면 우리가 암호화 키를 직접 관리하고 이를 CloudHSM에 저장하기 때문이다.

CloudHSM을 사용하면 AWS가 하드웨어를 관리하고 서비스 자체는 사용자의 것으로 사용할 수 있다.

CloudHSM Client 는 CloudHSM 서비스에 연결하기 위해 사용해야 하며, 그런 다음 전체적으로 키를 관리한다.

IAM 권한은 HSM 클러스터를 생성하고, 업데이트하고, 삭제하는 데 사용될 것이다.
그러나 키 및 사용자에 대한 권한을 관리하기 위해서는 CloudHSM 소프트웨어를 사용해야 한다.
KMS의 경우와 다른 것이 KMS의 경우 모든 것을 IAM을 사용하여 관리한다.

CloudHSM 클러스터는 고가용성을 가질 수 있으며 여러 가용 영역에 분산되어 있으므로 HA이다. 이것을 이애하는 것이 매우 중요하다.
따라서 두 가용 영역을 가질 수 있다. 하나는 다른 곳에서 복제되며 HSM 클라이언트는 양쪽 중 하나에 연결할 수 있다.

그렇다면 AWS 서비스 암호화에서 CloudHSM을 투명하게 어떻게 활용할 수 있을까?
CloudHSM과 KMS 간의 서비스 통합이 있다.

KMS에서 KMS Custom Key Store를 정의하면 CloudHSM이 된다. 이렇게 하면 EBS, S3, RDS 등에 대한 CloudHSM 암호화를 얻을 수 있다.

어떻게 작동되는가?
CloudHSM 클러스터를 생성하고 CloudHSM 클러스터에 연결된 KMS 사용자 지정 키 저장소를 정의한다.
이렇게 하면 KMS 암호화를 사용해 암호화된 EBS 볼륨을 가진 RDS 데이터베이스 인스턴스를 생성할 때 내부적으로 CloudHSM 클러스터 내의 암호화 키를 활용한다.

이렇게 하면 두 가지 이점이 있다.

1.  우리는 실제로 우리의 CloudHSM 클러스터를 사용한다.
2.  우리의 CloudHSM 클러스터에 도달하는 KMS를 통한 모든 API 호출은 CloudTrail에 로그된다.

따라서 CloudHSM과 KMS를 비교하면, KMS는 다중 테넌트이며 CloudHSM은 단일 테넌트이다.
둘은 모두 같은 표준을 갖고 있다.

KMS의 마스터 키는 AWS Owned, AWS Managed, Customer Managed CMK 세 가지 종류가 있다.
반면 CloudHSM의 경우 AWS가 사용자의 HSM 장치에 액세스할 수 없기 때문에 고객 관리형 CMK만 있다.

키 유형에 대해서는 대칭, 비대칭은 동일하게 있고, KMS의 경우 디지털 서명 CloudHSM의 경우 디지털 서명 및 해싱이 있다.

그리고 비대칭 키를 import하려면 CloudHSM에서만 가능하다.
따라서 온프레미스 키 관리 시스템이 비대칭 키를 사용하고 이를 AWS로 가져오고 싶다면 유일한 옵션은 AWS CloudHSM을 사용하는 것이다.

키 접근성 측면에서 KMS는 여러 리전에서 접근할 수 있지만 CloudHSM은 VPC에 배포되기 때문에 VPC Peering을 사용해 여러 VPC 간에 공유할 수 있다. 필요하면 여러 리전에서 접근할 수 있다는 이야기이다.

Cryptographic Acceleratio 측면에서는 KMS에서는 설정 없이도 가능하지만 CloudHSM에서는 SSL 및 TLS Acceleration을 사용할 수 있으며, 로드 밸런스 수준에서 사용할 수 있다.

또한 CloudHSM은 Oracle 기반의 데이터베이스에 대해 Oracle 및 TDE Acceleration을 사용할 수도 있다.

액세스 및 인증 측면에서 KMS에는 IAM을 사용하고 CloudHSM에서는 사용자 및 권한 및 키를 관리하기 위한 독자적인 보안 메커니즘이 있다.

마지막으로 고가용성 측면에서 KMS는 관리형 서비스이며 항상 사용 가능하며 CloudHSM은 여러 가용 영역에 걸쳐 여러 HSM 장치를 갖는다.

다른 기능으로는 KMS의 경우 CloudTrail 및 CloudWatch가 있고 CloudHSM에는 MFA가 지원된다.

마지막으로, KMS는 AWS의 Free Tier이지만 CloudHSM은 아니다.

## **[CCP] AWS Artifact Overview**

Artifact는 실제로 서비스는 아니지만 consult에서 하나의 서비스로 제공된다.

고객에게 컴플라이언스 보고서와 AWS 계약에 대한 온디맨드 액세스를 제공하는 포털이다.

이 Atrifacts 보고서는 다른 제 3자 감사인들로부터의 보안 및 컴플라이언스 문서를 다운로드할 수 있으며, 예를 들어 ISO 인증, PCI 보고서 및 SOC 보고서 등이 포함된다.

또한 Artifacts 계약은 BAA 계약이나 HIPAA와 같은 계약의 승인 및 상태를 검토, 승인 및 추적할 수 있도록 한다.

이러한 보고서는 회사 내부 감사 능력을 지원하거나 AWS 클라우드를 사용하여 회사의 컴플라이언스를 보여줄 때 사용할 수 있다.

AWS Artifacts에 접속하면 글로벌 서비스이며 일부 Artifacts를 얻을 수 있다.

보고서를 보거나 계약을 볼 수 있다.
이에 대한 NDA를 수락한 다음 보고서를 다운로드할 수 있다.

다양한 계약에 대해 승인을 받은 다음 다운로드할 수도 있다.

실제로 서비스가 아니며 컴플라이언스 문서를 다운로드할 수 있는 방법이다.

## **[SAA] AWS Certificate Manager Overview (ACM)**

AWS Certificate Manager 서비스에 대해 이야기 해보자

ACM을 사용하면 AWS에서 TLS 인증서를 쉽게 프로비저닝, 관리 및 배포할 수 있다.

TLS 인증서는 무엇에 사용되나? 이들은 웹 사이트에 대한 In-flight 암호화를 제공해준다. 웹 사이트에 접속할 때 "HTTPS" 가 표시되는 경우가 있다 여기서 S는 Secure를 의미하며, 따라서 해당 트랜잭션에서 TLS 인증서가 포함되어 있음을 알 수 있다.

그렇다면 ALB가 ASG에 연결되어 있지만 ALB를 HTTPS 엔드포인트로 노출하려는 경우, ACM과 통합하여 TLS 인증서를 직접 애플리케이션 로드 밸런서에 프로비저닝하고 유지할 수 있다.

그리고 사용자는 HTTPS 프로토콜을 사용해 웹 사이트 또는 API에 액세스할 수 있다.

ACM은 Public 및 Private TLS 인증서를 모두 지원하며, Public TLS를 사용하려는 경우 무료로 제공된다.

이러한 인증서를 자동으로 갱신하는 기능도 있다.

또한 여러 AWS 서비스와의 통합이 가능하다.
TLS 인증서를 ELB, CloudFront 배포 또는 API 게이트웨이의 모든 API에 로드할 수 있다.

ACM을 사용할 수 없는 것은 EC2 인스턴스이다. EC2 인스턴스에 대한 Public 인증서를 ACM을 통해 생성할 수 없다.

Public 인증서를 요청하는 프로세스는 먼저 인증서에 포함될 도메인 이름을 나열해야 한다.

이는 corp.example.com 과 같은 완전히 정규화된 도메인 이름(FQDN)이거나, \*.example.com과 같은 와일드카드 도메인일 수 있다.

원하는 만큼 많은 도메인을 포함할 수 있다.

그 다음 검증 방법을 선택한다.
DNS 검증 또는 이메일 검증일 수 있다.

SSL 인증서를 자동으로 갱신하는 자동화 목적으로 DNS 검증을 사용하는 것이 좋다.

이메일 검증의 경우 ACM은 도메인 등록시에 연락처 주소로 이메일을 보내고 해당 인증서를 요청했음을 확인한다.

DNS 검증을 선택한 경우 DNS 구성에 CNAME 레코드를 생성하여 도메인 소유권을 확인해야 한다.
예를 들어 Route 53을 사용하는 경우 자동으로 ACM과 통합되어 이 작업을 수행한다.

그 다음 몇 시간 동안 검증을 기다려야 하며, 그런 다음 인증서가 발급된다.

이러한 Public 인증서는 또한 자동 갱신된다.

이는 ACM에서 생성된 인증서가 만료되기 60일 전에 자동으로 갱신된다는 것을 의미하며, 우리에게 안정감을 준다.

ACM에 대해 Public 인증서를 Import하는 경우는 어떤가?
ACM 밖에서 인증서를 생성하고 ACM으로 가져올 수 있는 옵션이 있다.

하지만 이 경우 ACM 외부에서 생성되었기 때문에 자동 갱신이 없다. 따라서 기존 인증서가 만료되기 전에 새로운 인증서를 가져와야 한다.

인증서가 언제 만료될지를 어떻게 알 수 있을까?
ACM 서비스는 만료 45일 전부터 일일 만료 이벤트를 EventBridge 서비스로 보낸다. 일일 이벤트 횟수는 구성할 수 있다.

45일, 30일 등을 설정할 수 있다. 이것은 매일 만료된 인증서에 대한 이벤트가 EventBridge에 전송됨을 의미한다.
그리고 이후에 EventBridge에서 람다 함수, SNS 주제 또는 SQS를 트리거할 수 있다.

AWS Config를 사용하는 다른 방법도 있다.

Config에는 acm-certificate-expiration-check라는 매니지드 규칙이 있다. 이 규칙은 말료되는 인증서를 확인한다. 다시 한 번 일일 수를 구성할 수 있다.

Config 서비스에는 ACM 서비스를 확인할 규칙이 있으며, 인증서가 준수되지 않은 것으로 판명되면 비준수 이벤트가 이벤트 브릿지로 전송된다. 그리고 다시 한 번 우리는 람다, SNS 또는 SQS를 트리거할 수 있다.

이제 ACM 서비스가 ALB와 어떻게 통합되는지 살펴보자

우리는 백엔드에 ASG가 있는 ALB가 있으며, ACM 서비스를 통해 TLS 인증서를 프로비저닝 및 유지할 수 있다.
그러나 매우 좋은 것은 ALB에서 HTTP에서 HTTPS로 리디렉션 규칙을 설정할 수 있다.

이것은 사용자가 HTTP 프로토콜로 애플리케이션 로드 밸런서에 젖ㅂ근하는 경우 ALB가 리디렉션하여 HTTPS로 리디렉션해야 함을 알려준다

그래서 사용자는 HTTPS 프로토콜로 다시 애플리케이션 로드 밸런서에 도착하게 되며, 따라서 인증서 관리자에서 가져온 TLS 인증서를 활용하게 된다.

그리고 한 번 요청이 HTTPS 프로토콜을 통해 전달되면 ASG로 이동된다.

ACM이 API GW 와 어떻게 통합되는지 살펴보자

하지만 먼저 엔드포인트 유형을 기억해야 한다.

API GW에는 Edge-Optimized 엔드포인트(Default) 유형이 있다.
이는 클라이언트가 글로벌이고 요청이 먼저 CloudFront Edge Location을 통해 경로로 지나가고 그런 다음 하나의 리전에만 있는 API 게이트웨이로 전송되는 경우이다.
CloudFront를 사용해 지연 시간을 개선한다.

클라이언트가 API 게이트웨이와 동일한 리전에 있을 때 Regional 유형의 엔드포인트를 사용할 수 있다.
이 경우 CloudFront를 사용하지 않지만 원한다면 자체 CloudFront 배포를 생성해 캐싱 및 배포 전략을 더 잘 제어할 수 있다.

또한 인터페이스 VPC 엔드포인트(ENI)를 사용해 VPC 내부에서만 액세스할 수 있는 개인 API 게이트웨이 엔드포인트가 있다.

이러한 API GW에 대한 액세스를 정의하기 위해서 Resource Policy를 사용해야 한다.

ACM은 Edge-Optimized 및 Regional 엔드포인트에 적합하다.

API GW와 ACM을 통합하려면 먼저 API GW에서 Custom Domain Name이라는 리소스를 생성하고 구성해야 한다.

Edge-Optimized 엔드포인트의 경우 요청이 CloudFront를 통해 라우팅되므로 TLS 인증서가 CloudFront 배포에 연결된다.

따라서 TLS 인증서는 CloudFront와 동일한 리전에서 생성되어야 한다. us-east-1이다.

따라서 API 게이트웨이는 하나의 리전에 위치하지만 모든 것이 CloudFront를 통해 분산되므로 ACM 인증서는 CloudFront가 위치한 us-east-1에 있어야 한다. CloudFront의 모든 인증서는 us-east-1에 있다.

따라서 Route53 에서 CNAME 또는 A-Alias(더 나음) 레코드를 설정해야한다.

Regional 엔드포인트의 경우 API GW와 동일한 리전의 클라이언트를 대상으로 하므로 API GW에서 TLS 인증서를 Import 해와야 한다.
이도 동일하게 Route53에서 CNAME 또는 Alias 레코드를 설정해 DNS를 가리킨다.

## **[SAA/DVA] Secrets Manager Overview**

Secrets Manager는 Secret을 저장하기 위해서 고안된 최신 서비스이며 SSM 파라미터 스토어와 다르다.

Secrets Manager에서는 secert을 X일마다 강제로 Rotation 할 수 있어 더 나은 Secret 관리 일정을 갖게 된다.

또한 Secrets Manager 내부에서 Secret의 생성과 Rotation을 자동화할 수 있다.
이를 위해 새로운 Secret을 생성할 Lambda 함수를 정의해야 한다.

Secrets Manager는 AWS의 다양한 서비스와 높은 통합성을 갖고 있다.
예를 들어 Amazon RDS에서는 MySQL, PostgreSQL, SQL, Aurora를 비롯한 다양한 데이터베이스와 통합되어 있다.

이것은 데이터베이스에 접근하기 위한 사용자 이름과 비밀번호가 직접 Secrets Manager에 저장되어 Rotation될 수 있다는 것을 의미한다.

Secret은 KMS 서비스를 사용하여 암호화될 수 있다.

그래서 시험에서 Secrets, 또는 RDS 또는 Aurora의 Secrets Integration을 볼 때마다 Secrets Manager를 고려해야 한다.

우리가 알아야 할 또 다른 기능은 멀티 리전 Secrets 이다.
이것은 여러 AWS 리전에 걸쳐 Secrets를 복제할 수 있으며, Secrets Manager 서비스가 기본 Secrets와 동기화를 유지할 것이다.

주요 리전에서 Secrets을 생성하고 이를 보조 리전으로 동일한 Secret으로 복제한다.
이유는 특정 리전에서 문제가 발생한 경우 복제 Secret을 독립적인 Secret으로 승격시킬 수 있다.

그리고 복제 Secret이 여러 리전에 걸쳐 복제되어 있기 때문에 멀티 리전 앱을 구축할 수 있다.

또한 재해 복구 전략을 가질 수 있으며, 하나의 리전에서 다른 리전으로 복제되는 RDS 데이터베이스가 있다면 해당 리전의 해당 데이터베이스에 액세스하기 위해 동일한 Secret을 사용할 수 있다.

## **Secrets Manager - Monitoring & Troubleshooting**

Secrets Manager 모니터링에 대한 간단한 강의이다.

알아야 할 두 가지가 있다.

첫 째는 CloudTrail이 Secrets Manager API로 발생한 API 호출을 캡처하지만 다른 관련 이벤트도 캡처한다

이러한 이벤트는 보안이나 규정 준수에 영향을 줄 수 있거나 운영 문제 해결에 도움이 되는 것들이다.

이러한 이벤트를 non-API 서비스 이벤트라고 하며 Secrets Manager에 특화되어 있다.

그래서 CloudTrail은 API 호출과 non-API 이벤트를 모두 캡쳐한다.

이 non-API 서비스 이벤트는 어떤 것인가?

RotationStarted 이벤트이다.

- Rotation이 시작될 때마다 이벤트가 CloudTrail에 등록된다.
  RotationSucceeded 이벤트
- 성공적인 Rotation을 의미한다.
  RotationFailed 이벤트는 매우 중요하다
- 실패한 Rotation을 의미한다.
  RotationAbandoned
- Auto Rotation이 아닌 대상 Secrets에 대한 수동 변경이 있는 경우이다.
  StartSecretVersionDelete 이벤트, CancelSecretVersionDelete 이벤트 및 EndSecretVersionDelete 이벤트도 있다.

이런 모든 것들은 Secret Manager 내에서 무언가 발생할 때 CloudTrail에 기록된다.
이는 매우 중요한 이벤트이다.

Rotation이 실패하면 RotationFailed와 같은 이런 중요한 이벤트에 대한 Alert를 생성하기 위해 CloudWatch Logs 및 CloudWatch Alert 자동화를 결합할 수 있다.
Secrets Manager의 문제 또는 중요한 사항이 발생했음을 인식하는 한 가지 방법이다.

Rotation 자체의 문제를 해결하는 방법은 Rotation 그 자체를 해결하는 것이다.

따라서 Rotation이 실패한 경우 Secrets Manager는 모든 API 호출 및 non-API 이벤트를 CloudTrail에 저장한다.
그리고 Secrets Manager는 Secrets의 Rotation 진행 중 Rotation을 수행하는 Lambda 함수를 호출하려고 할 것이다.

이 Lambda 함수는 예를 들어 Amazon RDS 데이터베이스의 Secret을 변경하는 대상을 가질 수 있다.

오류가 발생하여 Rotation이 작동하지 않았을 때 이를 디버그하기 위해 CloudTrail이나 Lambda 함수 로그를 확인해야 한다.

분명히 봐야할 좋은 장소는 Lambda 함수 로그이다.

왜냐하면 실제 코드 실행을 포함하고 있으며 실행 중에 발생한 실제 오류 메시지를 제공하기 때문이다.

이 모든 로그는 CloudWatch Logs에 있으며, 관리자로서 Rotation 문제를 해결하는 데 도움이 된다.
Rotation이 실패했음을 알리려면 CloudTrail을 확인하거나 Lambda 함수 실패율에 대한 경고를 설정할 수도 있다.

## **[DVA] SSM Parameter Store vs Secrets Manager**

SSM Parameter Store 와 Secrets Manager와의 차이를 알아보자

Secrets Manager

- 비용이 더 많이 들고, Lambda 함수를 사용해 Secret의 회전을 자동화할 수 있다.
- Lambda 함수 중 일부는 RDS, RedShift 또는 DocumentDB와 같은 강력한 Secrets Manager 통합을 갖춘 상태로 제공된다.
- 시크릿에 대해 KMS 암호화가 필수적이며 CloudFormation과 통합할 수 있다.
  Parameter Store
- 더 넓은 유형의 사용 사례를 갖추고 있으며 비용이 덜 든다.
- 간단한 API를 제공한다.
- Secret Rotation 기능이 없다
- EventBridge로 트리거된 람다 함수를 사용해 자체적으로 Rotation을 활성화할 수는 있다.
- 선택 사항으로 KMS 암호화를 사용할 수 있다. 파라미터 저장소는 기본즉어르 파라미터만 저장할 수 있기 때문이다.
- 파라미터 저장소 API를 이용해서 Secrets Manager에서 시크릿을 가져올 수 있다.

SSM Parameter Store 와 Secrets Manager 간의 Secert rotation을 살펴보자.

먼저 Secerts Manager의 경우 RDS 데이터베이스의 암호를 Rotation 시키려면 매 30일마다 Lambda 함수를 자동으로 호출하도록 설정할 것이다.

이 Lambda 함수는 RDS의 경우 AWS에서 제공되며 AWS에 의해 계정에 배포된다.
우리는 Secrets Manager를 사용하기만 하면 된다. 그러면 자동으로 데이터베이스의 암호를 변경할 것이다.

Secrets Manager 를 사용하지 않는 경우 Rotation 기능이없다.
그래서 자체 람다 함수를 작성해야한다.

RDS 데이터베이스 암호를 Parameter Store에 저장하는 경우 30일 마다 호출되는 Amazon EventBridge 규칙을 생성하고 자체적으로 작성해야 하는 Lambda 함수를 호출하면 된다.

이 Lambda 함수는 RDS 데이터베이스의 암호를 변경하고 SSM Parameter Store에 저장된 값도 변경할 것이다.

## **[CCP/SAA/DVA] IAM Security Tools**

IAM 에서 사용하는 보안 도구에 대해 이야기 해보자

IAM Credentials Report를 생성할 수 있다. 이는 우리 Account 수준에서 이루어지며, 보고서에는 모든 계정 사용자와 사용자들의 다양한 자격 증명 상태가 포함될 것이다.

IAM에서 사용하는 두 번째 보안 도구는 IAM Access Advisor이다. 이는 우리 User 수준에서 이루어지며, 사용자에게 부여된 서비스 권한과 해당 서비스에 마지막으로 액세스한 시간을 보여준다.

최소 권한 원칙에 대해 이 도구를 사용하여 사용되지 않는 권한을 확인하고 사용자가 얻을 수 있는 권한을 최소 권한 원칙에 따라 줄일 수 있다.

## **IAM Access Analyzer**

IAM Access Analyzer는 외부에서 공유할 리소스를 찾는데 사용되는 IAM 콘솔 내의 서비스이다.

S3 버킷, IAM 역할, KMS 키, Lambda 함수 및 레이어, SQS 대기열 및 Secrets Manager Secrets 등등 이리헌 항목 중 일부는 리소스 정책이 첨부되어 있거나 다른 계정과 공유할 수 있다.

때로는 이러한 항목을 공유하고 있는 사실을 잊어버리고 외부 소스에서 일부 앱에 액세스할 수 있기 때문에 회사에 보안 위험이 될 숭 있다.

따라서 Alias 계정또는 전체 Alias Organization에 해당하는 신뢰 영역(Trust Zone)을 정의한 다음, 위에서 언급한 리소스에 액세스할 수 있는 신뢰 영역 외부의 모든 항목은 발견 사항으로 보고된다.

예를 들어 S3 버킷이 있다고 가정하면 특정 역할, 사용자, 계정, 외부 클라이언트와 IP 또는 VPC 엔드포인트 별로 공유할 수 있다.

하지만 신뢰 영역을 계정으로 정의하고 사용자 역할과 VPC 엔드포인트만 계정 내에 있는 경우, 계정과 외부 클라이언트는 발견 사항으로 플래그가 지정된다.

그리고 컨설턴트 내에서 이를 살펴보고 보안 위험이라고 생각되면 조치를 취할 수 있다.

예를 들어 S3 내의 버킷 정책으로 외부 계정에게 버킷을 공개 했을 때 해당 정책을 Analyzer를 통해 발견 가능하다.

그리고 이 정책을 삭제할 수도 있으며, 이러한 S3 공개 정책을 항상 공개하고 싶다면 Archive rule로 이동해서 어떤 기준이 검색 결과를 자동으로 관련성이 없는 것으로 만들지 지정하는 자신만의 규칙을 생성할 수도 있다.

## **Identity Federation with SAML & Cognito**

Identity Federation을 먼저 알아보자

AWS에서 Identity Federation라는 용어를 많이 들어봤을 것이다.

Federation은 AWS 외부의 사용자가 일시적인 역할을 가정해 AWS 리소스에 액세스할 수 있도록 해준다.
사용자들은 AWS에 직접적인 계정이 없어도 AWS를 이용할 수 있다는 뜻이다.

기본적으로 사용자들은 제공된 Identity Access Role을 가정한다.

이해를 돕기 위해 상황을 가정해보자.
우리는 사용자이다. 회사에 속한 사용자이거나 모바일 앱 사용자일 수 있다.
그러나 AWS 계정은 없다. 대신 로그인을 위한 third party 서버에 액세스할 수 있다.

이 서버는 우리 회사의 것이거나 다른 어떤 것이든 될 수 있다.
이 Third party는 AWS에서 신뢰하는데, 우리는 미리 이 Third party와 AWS 사이에 신뢰를 정의했다.

사용자는 Third party에 연결하고, 복잡한 프로세스를 통해 Third party가 자격 증명을 제공할 것이다.

이 자격 증명은 우리에게 임시로 부여되며, 이를 사용자로서 AWS에 직접 액세스할 수 있다.

이것이 페더레이션이 작동하는 방식이다.

이렇게 되는 이유는 Identity가 다른 곳에 저장되거나 Third party에 의해 저장되기 때문이다.

이제 Third party 인증은 무엇인가?

- LDAP 일수도 있고,
- Microsoft Active Directory 일 수도 있다. AD는 SAML과 유사하다. SAML은 표준이고 Active Directory는 그를 이용한 구현이라고 보면 된다.
- SSO
- Open ID
- Cognito

이 모든 것들이 Third party가 될 수 있다.
그래서 페더레이션을 사용하면 개별 IAM 사용자를 생성할 필요가 없다는 것을 기억해야 한다.

사용자 관리는 AWS 외부에서 수행된다.

시험에서는 Identity Federation의 특정 형태에 대해 매우 구체적으로 물어볼 수 있다.

SAML 페더레이션은 기업을 위한 것이다.
큰 기업이라면 Microsoft Active Directory를 이미 관리하거나 SAML 2.0 호환성을 갖춘 무언가를 갖고 있을 것이다.

그리고 이를 AWS 와 통합하게 되면 모든 사용자가 임시 자격 증명을 통해 AWS 콘솔 또는 CLI에 자동으로 액세스할 수 있으므로 각 직원마다 새 IAM 사용자를 생성할 필요가 없어서 좋다.

인증되는 과정을 알아보자.

클라이언트 앱이 기업 내에 있다고 가정해보자. 우리가 할 일은 IDP에 인증을 받아야 한다. 이것은 SAML 규정을 준수하므로 Microsoft Active Directory와 같은 것일 수 있으며 사용자 데이터베이스를 기반으로 사용자를 인증한다.

그럼 우리가 IDP에 인증되면 IDP는 SAML Assertion을 다시 보낼 것이다. SAML Assertion은 기본적으로 토큰이라고 생각하면 된다.

우리는 어떤 SAML 어설션을 받았고, 우리가 할 일은 자동으로 STS에 SAML을 Assume하면 된다.

Assume은 STS 의 특수한 API이고, STS는 이 SAML 어설션을 인식하고 이를 임시 보안 자격 증명으로 교환할 것이다.

그렇게 되면 기본적으로 로그인을 하고, SAML 어설션을 받고, STS에서 이 SAML 어설션을 보안 자격 증명으로 교환했으므로 이제 보안 자격 증명으로 S3 버킷에 액세스 하거나 서비스를 이용할 수 있다.

CLI 기반 액세스를 원하는 경우도 있다.
위의 인증 과정과 매우 유사하다.

우리의 브라우저에서 IDP 포털에 액세스할 것이다.
이것은 웹 기반이므로 동일한 방식으로 인증을 받고, 그럼 IDP가 SAML 어설션을 반환하고 이 SAML 어설션을 사용해 AWS SSO Endpoint에 빠르게 로그인할 수 있다.

이 엔드포인트는 STS와 대화하며, 유효성이 검사되고 나면 AWS 관리 콘솔로 리디렉션 된다.

내부적으로 Identity 정보를 AWS 자격 증명으로 교환하고, 기본적으로 다양한 요청과 응답이 발생한다.

SAML 2.0으로 사용자를 식별할 수 없는 경우에는 사용자 지정 식별 브로커를 사용해야 한다.

기본적으로는 "식별 브로커" 라는 것을 프로그래밍해야 한다. 그리고 이 식별 브로커를 사용해 적절한 IAM Policy를 결정해야 한다.

우리는 사용자, 브라우저, 애플리케이션이다.
우리의 식별 브로커에 액세스하고 이것은 우리가 프로그래밍해야 하는 것이다.

식별 브로커는 우리의 Identity를 회사 Identity store와 같은 것으로 확인하고 인증하고 어떤 정책에 대한 보안 자격 증명을 STS에서 요청할 수 있다.

그래서 실제로 연결된 사용자에게 policy를 맞춤화하는 것이 Identity broker에게 달려 있으므로 더 많은 작업을 필요로 한다.
그래서 이를 Custom Identity broker Application이라고 부르는 것이다.

SAML과 동일한 원리이지만 SAML은 아니므로 많은 수동 작업을 수행해야 하며 이를 통합하기 위해 더 많은 작업을 해야 한다.

따라서 사용자 지정 식별 브로커가 있는 것은 기업이지만 SAML 2.0이 없는 경우이다.

이전에 SAML 2.0이 있는 경우 직접 AWS와 통합된 Identity Federation이라는 뜻이다.

AWS 사용자들을 위한 것은 없을까?
AWS 리소스 액세스를 앱 사용자에게 제공하려면 어떻게 하는가?

예를 들어 S3 버킷에 앱 사용자들이 파일을 넣어야 한다면 앱 당 사용자를 생성해야하나? 이렇게 하면 확장 가능성이 사라진다.

그래서 목표는 우리 앱의 사용자에게 AWS 리소스 액세스를 직접 제공하는 것이고, 식별 페더레이션을 통해 로그인하거나 익명으로 유지하면 된다.

그런 다음 Cognito에서 직접 온라인 식별 풀이라는 것에서 AWS 자격 증명을 받아올 것이다.

그리고 이 자격 증명은 사용자가 수행해야 하는 작업을 기본적으로 허용하는 미리 정의된 IAM 정책이 함께 제공될 것이다.

예를 들어 언제든지 Facebook 로그인을 사용해 S3 버킷에 쓰기 임시 액세스를 제공하려면 AWS Cognito와 식별 페더레이션 풀을 사용해야 한다.

웹 식별 페더레이션이라는 것이 있지만 이것은 Cognito가 대안이다.
AWS 에서는 웹 식별 페더레이션을 권장하지 않으며 Cognito를 사용해야 한다고 한다.

Cognito는 Public 응용 프로그램이 AWS 리소스에 액세스하는 방법이 될 것이다.

이것이 어떻게 작동하는지 간단히 설명해보자

우리 앱이 있고 우리 앱이 직접 IDP에 연결된다. 이것은 Cognito User pool, Google, Facebook, Twitter, SAML, Open ID 일 수 있다.

그러나 웹이 있고 공개되어 있으므로 우리의 앱은 IDP에 로그인하고 토큰을 받아온다.
그 다음 앱은 Cognito에서 직접 페더레이트 식별 공급자에게 말하고 토큰을 확인할 것이다.

그런 다음 IDP는 STS에서 자격 증명을 받아오고, 이전과 동일한 패턴이며 Cognito의 페더레이트 식별은 우리에게 임시 자격 증명을 보내고 이 자격 증명을 사용해 우리 S3 버킷에 직접 연결하고 하고 싶은 일을 확인할 수 있다.

그래서 여기서 다른 점은 우리는 Cognito User pool, Google, Facebook과 같은 Public IDP에 연결된다.

우리는 제3자로부터 얻은 토큰을 AWS의 서비스로 교환하여 임시 AWS 자격 증명을 얻는다.

## **STS & Cross Account Access**

STS에 대해 이야기 해보자
STS는 AWS 의 중심에 있는 보안 서비스이다.

그래서 이것을 보안 서비스라고 한다. 이 서비스는 AWS 리소스에 대한 제한적이고 일시적인 액세스를 부여할 수 있게 해준다.

따라서 토큰을 부여하고 1시간 이상 유효하며, 무효화될 때 Refresh 된다.

토근을 얻고 싶다면 먼저 STS 서비스에 API 호출을 발행해야 한다. 예를 들어 Role을 Assume할 때는 STS AssumeRole API 호출이 일어난다.

호출 시 계정 내에서 Role을 가정해 보안을 강화해 일정 시간이 지난 후에 무효화될 자격 증명을 가진다.

또는 대상 계정에서 Role을 가정해 거기서 작업을 수행할 수 ㅣㅇㅆ다. AssumeRole은 자격 증명을 제공하고 나중에 만료된다.

또한 AssumeRoleWithSAML을 할 수 있다.

- 그러면 사용자가 SAML로 로그인되어 있고, 그 SAML 토큰을 확장하여 STS에서 자격 증명을 받을 수 있다. 먼저 SAML 토큰을 교환하고 검증할 수 있어야하긴 한다.

또한 AssumeRoleWithWebIdnetity도 할 수 있다. 이 방법은 사용자가 Facebook 로그인, Google 로그인 또는 OIDC 호환 기타 로그인과 같은 IDP로 식별되었을 때 이 자격 증명을 다시 STS 자격 증명으로 교환한다.
이 API 호출은 때때로 사용되지 않으며 AWS는 대신 Cognito를 사용하도록 권장한다.

GetSessionToken 도 있다. 이것은 사용자 또는 계정 루트 사용자로부터 MFA를 수행하고 MFA로 로그인한 후에 실제 자격 증명을 얻고자 할 때 사용된다.
역할을 가정하기 위해 STS 를 사용할 때는 먼저 계정 내 또는 계정 간에 IAM 역할을 정의한 다음 어떤 principal이 이 IAM 역할에 액세스할 수 있는지 정의해야 한다.
그 다음 STS 서비스를 사용해 자격 증명을 검색한 다음 예를들자면 AssumeRole API를 사용해 액세스할 수 있는 IAM 역할을 가장한다.

그래서 사용자가 동일한 또는 다른 계정의 역할에 액세스하려면 AssumeRole API를 STS에 대해 수행한다.
물론 API 호출을 수행할 권한이 있어야 하며, STS는 권한을 확인하고 일시적인 자격 증명을 제공하고 이 자격 증명을 사용해 역할을 가정하게 된다.

## **[DVA] Cognito User Pools Overview**

Cognito User Pool 또는 CPU는 웹 및 모바일 애플리케이션 사용자를 위한 서버리스 데이터베이스를 생성하는 방법이다.

서버리스 데이터베이스는 무엇인가? 이것은 사용자가 간간한 로그인으로 자신의 사용자 이름이나 이메일과 비밀번호 조합을 상요해 응용 프로그램에 연결할 수 있는 것을 의미한다.

또한 당연히 비밀번호를 재생성할 수 있으며 CUP를 통해 이메일 및 전화번호 확인, 사용자를 위한 MFA 기능을 활성화할 수 있으며, 사용자들에게 Google, Facebook, 또는 심지어 SAML로 로그인할 수 있다고 알려줄 수 있다.

이를 "Federated ID"라고 한다.

또한 다른 곳에서 자격 증명이 침해되었다면 사용자를 차단할 수 있는 기능이 있다. AWS는 침해된 자격 증명을 위해 웹을 스캔하고 CUP에서 사용자에게 알려줄 것이다.

마지막의로 사용자가 CUP로 로그인할 때 API에서 받는 것은 JWT 즉 JSON Web Token이다.

CUP는 사용자의 데이터베이스이고, 우리가 볼 수 있는 사용자의 내부 데이터베이스가 있다.
그리고 우리의 모바일 애플리케이션과 웹 애플리케이션은 CUP에 대해 로그인할 수 있으며, 로그인한 후 CUP는 사용자, 모바일 애플리케이션 및 웹 애플리케이션에게 JSON Web Token을 반환할 것이다.

IDP를 SAML 또는 OpenID Connect와 같은 더 구체적인 것으로 통합할 수 있다.

CUP의 통합에 대해 이야기 해보자

CUP는 APU 게이트웨이와 ALB와 자연스럽게 통합도니다.

API를 사용하는 경우 사용자는 CUP로 인증하고 거기서 JSON Web Token을 가져올 것이며, 그 다음 API 게이트웨이에 웹 토큰을 전달하여 Cognito 토큰을 평가하고 유효한지 확인한 후 백엔드에 액세스할 수 있도록 한다.

ALB를 사용하면 ALB 리스너 및 규칙을 사용해 사용자를 CUP에 인증한 다음 완료되는 사용자를 Target Group의 백엔드로 전달할 수 있다. 백엔드는 EC2 인스턴스, 람다 함수 또는 ECS 컨테이너가 될 수 있다.

## **[DVA] Cognito Identity Pools Overview**

Cognito Identity Pools 또는 Federated Identities를 알아보자

우리의 사용자들은 AWS 환경 외부에 있으며, 웹 애플리케이션 사용자 또는 모바일 사용자가 될 수 있다.
그리고 그들은 AWS 환경 내의 것들에 액세스하고자 한다.

예를들어 DynamoDB 테이블이나 S3 버킷에 액세스하려면 임시 AWS 자격 증명이 필요하다.

이러한 사용자를 위해 일반 IAM 사용자를 생성할 수 없다. 왜냐하면 사용자가 너무 많고, 확장성이 없으며, 우리가 그들을 신뢰하지 않기 때문이다.

대신 우리는 이러한 사용자에게 Cognito Idnetity Pool을 통한 AWS 액세스를 제공할 것이다.

Cognito Idnetity Pool은 사용자가 신뢰할 수 있는 제 3자를 통해 로그인하도록 허용할 수 있다.

예를 들어 Amazon 로그인, Facebook, Google 및 Apple과 같은 Public Provider로 로그인하거나 이미 Amazon Cognito CUP로 로그인한 사용자를 허용하거나 OpenID Connect 제공자 및 SAML 제공자를 허용할 수 있다.

또한 사용자가 AWS 자격 증명을 교환하기 전에 자격을 부여하기 위해 사용자가 인증되지 않은 게스트 사용자에게 AWS 액세스를 허용할 수도 있다.

그래서 우리는 게스트 정책을 정의하고 게스트 사용자에게 AWS 자격 증명을 부여할 수 있다.

사용자가 AWS 자격 증명을 획득하면 API 호출에 SDK를 사용하거나 API 게이트웨이를 통해 직접 AWS 서비스에 액세스할 수 있다.

사용자가 받는 자격 증명은 Cognito Idnetity Pool에서 정의한 IAM 정책을 기반으로 사용자 ID의 값에 따라 사용자에게 맞춤화될 수 있다.

Cognito Idnetity Pool를 활용할 때 먼저 사용자가 로그인하고 이 로그인에서 토큰을 획득하도록 해야한다.

그래서 사용자가 CUP에 연결하거나 Google 로그인, Facebook 로그인과 같은 소셜 ID 제공자 또는 SAML 또는 OpenID Connect로 연결할 수 있다.

그러면 사용자는 로그인해 토큰을 받고 이 토큰을 임시 AWS 자격 증명으로 교환하기 위해 Cognito Idnetity Pool 서비스와 통신할 것이다.

먼저 Cognito Idnetity Pool는 우리가 정의한 제공자로부터의 로그인을 확인하고, 인증된 후에 웹 및 모바일 애플리케이션 사용자를 위한 임시 자격 증명을 얻기 위해 STS 서비스와 통신할 것이다.

이것이 완료되면 자격 증명은 애플리케이션으로 반환되고, 이를 통해 사용자는 이 자격 증명과 관련된 IAM 정책을 통해 AWS에 직접 액세스할 수 있다.

Cognito Idnetity Pool를 Cognito User Pool과 함께 사용할 때는 어떻게 작동하는가?

다이어그램 상 거의 모든 것이 비슷하나 사용자가 로그인하기 위해 Cognito User Pool을 이용해 모든 사용자를 데이터베이스에 중앙 집중화하기 위해 Cognito User Pool 를 사용한다.

그래서 내부 사용자 데이터베이스가 될 수도 있고, Cognito User Pool에 소셜 ID 제공자, SAML 및 OpenID Connect를 통한 통합 ID 제공자로 활성화할 수도 있지만, 어쨌든 모든 사용자는 내 Cognito User Pool에 나타날 것이다.

Cognito Idnetity Pool은 인증된 사용자와 게스트 사용자 모두를 위한 기본 IAM 역할을 정의할 수 있다.
그래서 게스트 사용자에게는 하나의 IAM 역할이 있고 다른 사용자에게는 다른 IAM 역할이 있게 된다.

그리고 사용자 ID를 기반으로 어떤 사용자에게 어떤 역할이 적용될지를 선택하는 규칙을 정의할 수 있다.

정책 변수(policy variable)를 사용해 IAM 정책을 사용자가 DynamoDB 또는 S3에서 필요한 것만 액세스할 수 있도록 사용자 지정할 수 있다.

게스트 사용자에게 AWS 액세스 권한을 부여하려면 특정 역할에 특정 기능을 부여한 IAM policy를 생성하고, 게스트 사용자에게 매우 간단하고 당연히 제한된 IAM 정책으로 AWS 액세스 권한을 부여할 수 있다.

그리고 인증된 사용자에 대해서는 Amazon S3에 대한 정책 변수를 정의할 수 있다.
사용자가 연결되었지만, 사용자가 정의한 버킷 내의 접두사에만 액세스할 수 있도록 가능하며, 렇게 하면 사용자 ID의 접두사로 시작하는 버킷 내에서만 액세스할 수 있도록 하기 위해 정책 변수를 사용할 수 있다.

이로써 우리는 사용자가 자신의 ID로 액세스할 수 있는 것만 액세스하도록 제한된 액세스를 제공할 수 있다.

아래는 예시 Policy이다.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": ["s3:ListBucket"],
      "Effect": "Allow",
      "Resource": ["arniaws:s3:::mybucket"],
      "Condition": {
        "StringLike": {
          "s3:prefix": ["$(cognito-identity.amazonaws.com/sub)/*"]
        }
      }
    },
    {
      "Action": ["s3: GetObject", "s3:PutObject"],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::mybucket/${cognito-identity.amazonaws.com:sub}/*"
      ]
    }
  ]
}
```

## **[DVA] Cognito User Pools vs Cognito Identity Pools**

Cognito User Pools와 Identity Pool 간의 차이를 이해해보자

Cognito User Pools

- 인증 즉, 신원 확인에 사용된다. 그래서 웹 및 모바일 애플리케이션의 사용자 데이터베이스가 될 것이다.
- 로그인을 위한 페더레이션을 가지고 있으므로 Google, Facebook, Amazon 또는 OIDC와 같은 소셜 로그인 또는 SAML을 활용한 기업 로그인을 할 수 있다.
- 인증 과정 동안 호스팅된 UI를 사용자 정의할 수 있어서 로고를 포함시킬 수 있다.
- 인증 전/후에 Lambda와의 통합을 할 수 있다.
- 로그인 환경을 다양한 위험 수준에 맞게 조정할 수도 있다. 적응형 인증 또는 MFA를 사용되도록 한다.
  Cognito Identity Pool
- 권한 또는 액세스 제어를 위한 것이다.
- AWS 내부에서의 액세스 제어를 의미하며, 간단히 모바일 애플리케이션이 있고 사용자 데이터 베이스만 필요한 경우 Cognito User Pool을 사용하면 되지만 이러한 사용자가 DynamoDB 및 S3 버킷 등 AWS 환경에 액세스할 수 있도록 하려면 권한을 부여해야 하며, 이는 Cognito Identity Pool를 사용하여 수행된다.
- 사용자에게 임시 자격 증명을 제공하고 이 자격 증명을 얻기 위해 토큰을 교환하는 방법이 소셜, OIDC, SMAL 또는 Cognito User Pool을 사용할 수 있다. 사용자가 식별된 위치에 관계없이 토큰을 교환하여 권한을 얻을 수 있다.
- Cognito Identity Pool을 사용하는 장점은 사용자가 인증되지 않은 게스트일 수 있다.
- 한 번 Cognito Identity Pool에 설정되면 사용자는 특정 IAM 역할과 정책에 매핑되고 policy variable을 활용할 수 있으며 이로 인해 DynamoDB 테이블 또는 S3 버킷에 액세스할 수 있다.

결국 CUP와 CIP를 동시에 사용하면 Authentication 과 Authorization이 제공되는 것이다.

## **[SAA/DVA] What is a DNS?**

Route53을 이해하기 전에 DNS가 무엇인지부터 이야기 해보자

DNS는 Domain Name System 으로 인간 친화적인 호스트 이름을 대상 서버 IP 주소로 변환해준다.

예를 들어 웹 브라우저에 www.google.com을 입력하면 결국 IP 주소를 반환해 주는데, 이 IP 주소를 통해 웹 브라우저가 Gogle에서 데이터를 가져올 수 있다.
www.google.com -> 172.217.18.36

DNS는 인터넷의 중추이다. 이것은 URL이나 호스트 이름을 IP로 번역하는 방법을 이해하는 데 도움이 된다.

DNS에는 계층적인 네이밍 구조가 있으며 예를 들어 www.google.com의 루트에는 .com이 있지만 조금 더 구체적으로 example.com이 있다. 그 다음 www.example.com이나 api.example.com이 있다.

이 모든 것들이 도메인 이름의 계층 구조이다.

**DNS 용어**
- Domain Registrar: Amazon Route 53, GoDaddy 와 같이 도메인 이름을 등록하는 곳
- DNS Records: A, AAAA, CNAME, NS 등이 있다.
- Zone File: 모든 DNS Records를 포함하는 존 파일. 호스트 이름을 IP나 주소에 매핑하는 방법
- Name Server: 실제로 DNS 쿼리를 해결하는 서버
- Top Level Domain: .com, .us, .in, .gov, .org 등등
- Second Level Domain: amazon.com, google.com 등등

도메인의 수준의 경우 최상위 도메인은 .com, .us 등이지만 두 번째 수준 도메인은 amazon.com이나 google.com 이다.
예를 들어 FQDN(전체 정규 도메인 이름)을 보면 http://api.www.example.com. 과 같은데, 
마지막 점을 루트라고 하며, 모든 도메인 이름의 루트이다.
그런 다음 .com은 Top Level Domain이다.
example.com이 Second Level Domain이다.
www.example.com은 Sub Domain이다.
api.www.example.com은 FQDN 즉, 전체 정규 도메인 이름이다.
http는 프로토콜이다.

위와 같은 모든 것들이 함께 URL이 된다.

**DNS는 어떻게 동작하는가?**
웹 서버가 있고, 공용 IP를 가진 EC2 인스턴스의 경우 9.10.11.12의 IP를 가지고 있다고 했을 때 이 IP가 example.com 도메인 이름을 사용하여 액세스할 수 있기를 원한다.

우리는 이 example.com 도메인 이름을 DNS에 등록한 다음 컴퓨터, 웹 브라우저가 어떻게 액세스하고 응답을 받을 수 있는지 알아보자

1.  우리의 웹 브라우저는 example.com에 액세스하려고 할 것이다.
2.  그리고 도메인에 접근하기 위해 Local DNS 서버에 질의할 것이다. "당신은 example.com을 알고 있나요?", 이 경우 로컬 DNS 서버는 보통 회사에 의해 할당되고 관리되거나 동적으로 우리의 ISP에 의해 할당된다.
3.  그리고 로컬 DNS 서버가 이 쿼리를 이전에 본 적 없다면, ICANN이 관리하는 루트 DNS 서버에 물어볼 것이다.
4.  그리고 루트 DNS 서버는 "해당 도메인을 본적 없지만, .com을 알고 있어"라고 답변할 것이다. 그리고 .com은 NS이므로, 네임 서버이고 네임 서버의 공용 IP인 1.2.3.4 를 알려준다.
5.  그리고 다시 ICANN의 branch인 IANA가 관리하는 TLD DNS Server인 .com 네임 서버에 쿼리 된다. "example.com에 대해 알고 있나요?"
6.  그럼 결국 TLD DNS Server는 "example.com에 대해 알고 있지만, 쿼리에 대한 답을 즉시 가지고 있지는 않아. example.com은 5.6.7.8의 공용 IP에 있어" 라고 말할 것이다.
7.  그래서 로컬 DNS 서버는 최종적으로 Domain Registrar가 관리하는 SLD DNS Server인 example.com으로 이동할 것이다. "안녕 example.com에 대해 알고 있니?"라고 질의를 로컬 DNS 서버가 하게 되면 "example.com에 대해 알고 있어. example.com은 A 레코드이고 결과는 IP 9.10.11.12야" 라고 말할 것이다.
8.  DNS 서버는 결국 재귀적으로 DNS Server에게 질의하여 답을 알게 되었다.
9.  그리고 Local DNS Server는 누군가가 example.com을 물으면 즉시 대답을 해주기 위해 답을 캐시하게 된다.
10. 따라서 Local DNS Server는 답을 캐시하고, 우리의 브라우저로 답을 보내고, 이제 우리의 브라우저는 답을 가지고 있고 이 IP 주소를 사용해 웹 서버에 액세스할 수 있을 것이다.

## **[SAA/DVA] Route 53 Overview**

Route53은 고가용성, 확장 가능성, 완전 관리형의 Authoritative DNS이다.

Authoritative란 고객이 DNS 레코드를 업데이트할 수 있으므로 이 DNS에 완전한 제어권을 갖게 되며, 우리가 클라이언트를 가지고 있고, 클라이언트가 우리의 EC2 인스턴스 example.com에 액세스하려고 할 때 Route53 서비스가 클라이언트의 example.com 요청을 우리 서버의 공용 IP인 54.22.33.44로 반환해주는 것이다.

따라서 Route53은 Domain Registrar이기도 하기 때문에, example.com과 같은 자체 도메인 이름을 등록할 수 있게 된다.

Route53 내의 리소스의 상태를 확인 (health check)할 수 있는 능력을 갖고 있다.

AWS에서 100% 가용성 SLA를 제공하는 유일한 서비스이다.

Route53은 53이 전통적인 DNS 포트 번호이기 때문에 이렇게 부르는 것이다.

**Route53 - Records**
Route53에서는 여러 DNS 레코드를 정의하게 되며, 이 레코드들은 특정 도메인으로의 트래픽 라우팅 방법을 정의한다.

각 레코드는 아래와 같은 것을 포함하고 있다.
- Domain/subdomain Name: example.com과 같은 도메인
- RecordType: A 나 AAAA 와 같은 레코드 유형
- Value: 12.34.56.78과 같은 값
- Routing Policy: Route53이 쿼리에 응답하는 방법
- TTL: 레코드가 DNS 리졸버에서 캐시될 시간, Time To Live

그리고 Route53에서 지원하는 다양한 DNS 레코드 유형이 있다.
- 반드시 알아야하는 A, AAAA, CNAME, NS
- 그 외에 CAA, DS, MX, NAPTR, PTR, SOA, TXT, SPF, SRV

레코드 타입에 대해 자세히 알아보자
- A 레코드는 호스트 이름을 IPv4 IP에 매핑하는 것이다. 예를 들어 example.com을 1.2.3.4로 지정하는 것이다.
- AAAA 레코드는 호스트 이름을 IPv6 주소에 매핑하는 것이다.
- CNAME은 호스트 이름을 다른 호스트 이름으로 매핑하는 데 사용된다. 그리고 대상 호스트 이름은 A 또는 AAAA 레코드가 될 수 있다. DNS 네임 스페이스의 탑 노드 또는 Zone Apex에서 CNAME을 생성할 수 없다. 예를 들어 example.com에 대해서는 CNAME을 생성할 수 없지만, www.example.com에 대해서는 CNAME 레코드를 생성할 수 있다.
- NS는 호스팅된 존의 이름 서버를 의미한다. 이는 우리가 호스팅된 존에 대한 DNS 쿼리에 응답할 수 있는 서버의 DNS Name 또는 IP 주소이며, 이는 트래픽이 도메인으로 라우팅되는 방식을 제어한다.

Route53에서 Hosted Zones란 무엇인가?
호스팅된 존은 레코드들의 컨테이너이며, 트래픽을 도메인과 서브도메인으로 어떻게 라우팅할지를 정의한다.

Public Hosted Zone과 Private Hosted Zone이 있다.

Public Hosted Zone의 경우 mypublicdomain.com과 같은 public domain name을 구매할 때마다 생성될 수 있으며, 이는 공개적인 도메인 이름이므로 Public Hosted Zone을 생성할 수 있으며 이 공개적인 존은 쿼리에 답할 수 있다.

Private Hosted Zone의 경우 공개적으로 이용할 수 없는 도메인 이름에 사용된다. 이것은 1개 또는 그 이상의 우리 VPC 내에서만 이 URL을 해결할 수 있다.
예를 들어 application1.company.internal과 같은 것이다. 때때로 회사 내부에서만 액세스할 수 있는 URL이 있을텐데 이 URL이 비공개이며, 비공개 DNS 레코드가 있기 때문이다.

AWS에서 생성하는 모든 hosted zone 별로 0.05$를 지불해야한다. Route53을 사용하는 것이 무료가 아님을 알수 있다.

Public Hosted Zone의 경우 브라우저가 example.com에 대한 쿼리를 요청하면 IP가 반환된다.

Private Hosted Zone의 경우 VPC 내부에서 존재하며, VPC 내부의 비공개 리소스를 비공개 도메인 이름으로 식별할 수 있게 해준다.
예를 들어 특정 A 인스턴스에서 B 인스턴스로 트래픽을 전송하기 위해 api.example.internal을 Private Hosted Zone에 요청하면 B 인스턴스의 IP를 답변해준다.


## **[SAA/DVA] Route 53 - Registering a Domain**

우리는 Route53에서 도메인을 등록할 수 있다.

example.com 등의 특정 도메인 이름을 등록할 수 있다. 

도메인 이름을 등록하기 위해서는 연간 12달러를 지불해야 한다.

Duration을 설정할 수 있으며 자동 갱신(Auto-renew)을 사용할 수 있다. 

도메인을 유지하려면 자동 갱신을 둘 수 있으며, 자동 갱신을 사용하지 않으면 사용자가 도메인을 잃었을 때 다른 사람이 내 도메인을 사게될 것이다.

Registrant contact 란에서 계정의 정보를 설정할 수 있으며, Admin Contact와 Tech Contact를 registrant contact와 동일하게 설정할 수 있다.

Privacy protection을 설정하면 스팸을 받지 않을 수 있다. 웬만하면 개인 정보 보호를 활성화 하는 것이 좋다.
그래서 우리의 실제 연락처 정보, 우리의 개인 주소, 전화 번호 등이 인터넷에서 숨겨진다.

생성된 도메인을 확인하기 위해 Hosted Zone에서 우리가 생성한 도메인 이름을 클릭하면 여러 개의 레코드가 있을 것이다.

기본적으로 NS 레코드와 SOA 레코드 두 개를 가지고 있을 것이다.

## **[SAA/DVA] Route 53 - TTL**

TTL은 Time to Live 이다.

만약 클라이언트가 myapp.example.com에 대한 DNS 요청을 하면 DNS로부터 "이것은 A 레코드입니다. IP 주소는 ~~이고, TTL은 300초 입니다." 라는 응답을 받는다.

TTL 300초는 클라이언트에게 결과를 300초 동안 캐시하라는 의미이다. 그렇게 하면 클라이언트가 같은 호스트 이름을 다시 요청하더라도 DNS 시스템에 쿼리를 보내지 않고 캐시된 응답을 사용해 웹 서버에 HTTP 요청/응답을 주고 받을 수 있다.

약 24시간 정도의 긴 TTL을 설정하면 Route53 트래픽이 적어지지만 레코드 변경 시 모든 클라이언트가 새 레코드를 캐시하는데 24시간이 걸리며,

약 60초 정도의 짧은 TTL을 설정하면 Route53에 더 많은 트래픽과 요금이 발생하지마, 레코드 변경이 빨리 전파된다.

그래서 적절한 TTL 값을 설정하는 것이 중요하다. 레코드 변경 전에는 TTL을 낮춰 두었다가, 변경 후에는 TTL을 높여 트래픽을 줄이는 전략을 사용할 수 있다.

TTL은 Alias 레코드를 제외한 모든 레코드에 필수이다.

특정 도메인에 대해 nslookup, dig 명령으로 정상적인 A 레코드 응답을 확인할 수 있으며, 명령어를 통해 TTL 값을 확인할 수 있다.

캐시가 만료되기 전까지는 새로 질의하지 않고 캐시된 응답을 사용하며, 캐시 기간 중 레코드 값을 변경하여도 기존 캐시된 응답을 계속 사용한다.

따라서 TTL 값에 따라 캐싱 기간이 결정되고, 이는 Route53 트래픽과 레코드 전파 시간에 영향을 미친다.

## **[SAA/DVA] CNAME vs Alias**

로드밸런서와 CloudFront와 같은 AWS 리소스에는 호스트 이름(LB 예: lb 1-1234.us-east-2.elb.amazonaws.com)이 할당된다. 이 호스트 이름을 사용자 지정 도메인에 매핑하고 싶을 때 두 가지 옵션이 있다.

1.  CNAME
  - CNAME은 호스트 이름을 다른 호스트 이름으로 매핑할 수 있다.
  - 예를 들어 app.mydomain.com을 blabla.anything.com으로 매핑할 수 있다.
  - 단, 루트 도메인 mydomain.com에는 사용할 수 없고, something.mydomain.com과 같은 서브 도메인에만 가능하다.
2.  Alias 레코드
  - Route53에 특화된 기능이다. 이를 통해 호스트 이름을 AWS 리소스로 직접 매핑할 수 있다.
  - 예를 들어 app.mydomain.com을 blabla.amazonaws.com 리소스로 매핑한다.
  - Alias는 루트/서브 도메인 모두에서 작동한다.

Alias는 무료이며 네이티브 Health check 기능도 제공하므로 매우 유용하다.

Alias는 AWS 리소스에만 매핑할 수 있다.
예를 들어 Route53에서 example.com을 A 타입 Alias로 생성하고 로드밸런서 DNS 이름을 값으로 설정할 수 있다.
기존 DNS 기능을 확장한 것이며, 대상 ALB의 IP가 변경되어도 Alias 레코드에 자동으로 반영된다.

Alias는 CNAME과 달리 example.com과 같은 Zone Apex에도 사용 가능하다.
레코드 타입은 IPv4(A) IPv6(AAAA)여야 하고, TTL을 수동으로 설정할 수 없고 Route53에서 자동 설정한다.

Alias 대상으로는 ELB, CloudFront, API Gateway, Elastic Beanstalk 환경, S3 웹사이트, VPC 인터페이스 엔드포인트, Global Accelerator, 동일 호스팅 영역의 Route 53 레코드 등이 있다.

단, EC2 DNS 이름에는 Alias를 설정할 수 없다.

예를 들어 CNAME 레코드를 myapp.example.com으로 하고 ALB의 DNS 이름을 값으로 넣었을 때, ALB에 myapp.example.com로 접근할 수 있게 된다.

그런데, CNAME은 AWS 기반 방식이 아니기 때문에 ALB에 리디렉션하는 경우에는 Alias 레코드를 생성하는 것이 더 낫다.

CNAME은 Zone Apex에서 사용할 수 없지만, Alias 레코드는 Zone Apex에서도 작동한다는 것을 유의하면 좋다. 시험에서 나올 수 있음

## **[SAA/DVA] Routing Policy - Simple**
Route53의 라우팅 정책은 Route53이 DNS 쿼리에 응답하는 방식을 결정한다.

라우팅은 로드 밸런서가 실제 트래픽을 백엔드 EC2 인스턴스로 라우팅하는 것과는 다르고, DNS 라우팅은 DNS 관점에서의 라우팅이다.

DNS는 트래픽을 라우팅하지 않고 단지 DNS 쿼리에 응답하여 클라이언트가 어디로 HTTP 쿼리를 보내야 하는지 알려줄 뿐이다.

DNS는 호스트 이름을 실제 엔드포인트로 변환해주는 역할을 한다.

Route53은 다음과 같은 라우팅 정책을 지원한다.
- Simple
- Weighted
- Failover
- Latency Based
- Geolocation

그 중에서 Simple 라우팅 정책을 알아보자

일반적으로 단일 리소스로 트래픽을 라우팅하는 것이다.

예를 들어 클라이언트가 foo.example.com에 접근하면 Route53은 특정 IP 주소(A 레코드)로 응답한다.

하나의 레코드에 여러 IP 값을 지정할 수 있으며, 그 경우 클라이언트가 무작위로 하나를 선택하게 된다.

Simple 정책에 Alias 레코드를 사용하면 AWS 리소스 하나만 대상으로 지정할 수 있다.

Simple 라우팅 정책은 Health check와 연결할 수 없다.

## **[SAA/DVA] Routing Policy - Weighted**

가중치 기반 라우팅 정책을 이용하면 가중치를 기반으로 특정 리소스로 전송되는 요청의 비율을 제어할 수 있다.

예를 들어 3개의 EC2 인스턴스가 있을 때 70 20 10으로 가중치가 설정되어 있다면, 70%의 Route53 DNS 응답이 첫 번째 EC2로 20%는 두 번째 10%는 세 번째 인스턴스로 리디렉션 된다.

각 레코드에 상대적 가중치를 할다하면 레코드 가중치를 모든 가중치 합으로 나눈 비율만큼의 트래픽이 해당 레코드로 전송된다.
그래서 가중치의 합이 꼭 100%일 필요는 없지만 상대적 비율을 나타내는 지표가 될 것이다.

이 정책을 사용하려면 DNS 레코드의 이름과 타입이 동일해야 하며, Health check와도 연결할 수 있다.

가중지 기반 정책의 사용 사례로는 로드밸런싱, 신규 애플리케이션 버전 테스트를 위한 트래픽 분기 등이 있다.

특정 리소스로의 트래픽을 중지하려면 해당 레코드의 가중치를 0으로 설정하면 된다.

모든 레코드의 가중치가 0이면 균등하게 분산된다.

example.com 레코드 이름의 값으로 A 인스턴스의 IP를 넣고 가중치를 10으로, example.com 레코드 이름의 값으로 B 인스턴스의 IP를 넣고 가중치를 70으로 설정하면 70%의 트래픽은 B로 가고 10%의 트래픽은 A로 갈 것이다.

## **[SAA/DVA] Routing Policy - Latency**

지연 시간 기반 라우팅 정책은 지연 시간이 가장 낮은 리소스로 리디렉션하는 것을 목표로 한다.

웹사이트나 애플리케이션에서 지연 시간이 주된 관심사일 때 유용하다.

지연 시간은 사용자가 해당 레코드에 대해 식별된 가장 가까운 AWS 리전에 연결하는 데 걸리는 시간을 기준으로 측정된다.
예를 들어 독일 사용자의 경우 미국 리소스에 대한 지연 시간이 가장 낮으면 그곳으로 리디렉션 된다.

Health check와 결합할 수 있다.

예를 들어 두 개의 서로 다른 Region인 미국 동부와 싱가포르에 애플리케이션을 배포했다고 가정했을 때, 전 세계 사용자들의 지연 시간은 Route53에 의해 평가되며, 미국 동부 리소스에 가장 가까운 사용자는 그곳으로, 나머지는 싱가포르로 리디렉션 된다.

latency.example.com 레코드를 생성하고 첫 번째 값으로 ap-southeast-1 리전의 EC2 IP를 넣는다.
latency.example.com 레코드를 생성하고 두 번째 값으로 us-east-1 리전의 EC2 IP를 넣는다.

dig 명령어로 확인 시 사용자에게 가장 가까운 리전에서 제공해주는 EC2 인스턴스에서 응답이 되고 있음을 알 수 있다.

지연 시간 기반 라우팅 정책은 사용자의 위치에 따라 가장 가까운 리소스로 트래픽을 효과적으로 분산시킨다. 온라인 서비스에서 매우 일반적으로 사용되는 정책이다.

## **[SAA/DVA] Route 53 Health Checks**

Route53은 Health check를 할 수 있다.
주로 Public 리소스의 상태를 확인하지만, Private 리소스에 대해서도 방법이 있다.

예를 들어 서로 다른 Region에 2개의 Public 로드밸런서가 있고, 그 뒤에 애플리케이션이 실행중일 때, 높은 가용성을 위해 Multi Region 설정을 해야 한다. 그리고 Route53을 사용해 DNS 레코드를 생성한다.
사용자가 mydomain.com에 접속하면 가장 가까운 로드밸런서로 리디렉션한다.

한 Region에 문제가 있다면 그 Region에는 사용자를 보내고 싶지 않을 것이다. 
이를 위해 Route53에서 Health check를 생성하고 각각 Region에 대한 Health check를 진행해 Route53 레코드와 연결하면 자동으로 DNS Fail over가 가능해진다.

헬스 체크는 여러가지 방법이 있다.
1.  애플리케이션, 서버 또는 다른 AWS 리소스 등의 공인 엔드포인트를 모니터링하는 헬스 체크
2.  다른 헬스 체크를 확인하는 Calculated 헬스 체크
3.  프라이빗 리소스에 유용한 CloudWatch 경보를 모니터링하는 헬스 체크 예를 들면 DynamoDB throttle, RDS의 알람, 커스텀 메트릭 등등...

예를 들어 eu-west-1 ALB에 대한 헬스 체크를 예로 들자면 AWS의 약 15개 글로벌 헬스 체크 지점에서 Public 엔드포인트로 요청을 보내고, 200 OK 또는 설정한 코드가 응답되면 리소스를 정상으로 간주한다.

그리고 헬스 체크의 확인 횟수 Threshold를 설정할 수 있다. 기본적으로 3번이다.

헬스 체크의 확인 간격은 30초 또는 고비용이지만 10초의 빠른 헬스 체크 간격을 선택할 수 있다.

HTTP, HTTPS, TCP 등 다양한 프로토콜을 지원한다.

헬스 체크를 하는 여러 개의 엔드포인트에서 18% 이상이 정상이라고 판단하면 Route53은 Healthy라고 간주하고 18% 이하면 Unhealthy라고 간주한다.

원하는 위치의 상태 확인 지점을 선택할 수 있다.

헬스 체크는 부하 분산 경로 추적, 문자열 매칭, 암호화 등의 고급 기능이 있다.

헬스 체크는 로드 밸런서에서 상태 코드가 2xx 또는 3xx를 응답할 경우에만 통과된다.

만약 텍스트 기반 응답인 경우 Health checker는 응답 자체에서 특정 텍스트를 찾기 위해 응답의 첫 5,120바이트를 확인할 수 있다.

네트워크 관점에서 중요한 것은 Health checker가 ALB나 기타 엔드포인트에 액세스할 수 있어야 한다. 따라서 Health checker의 IP Range에서 오는 수신 요청을 허용해야 한다.

Calculated Health check의 경우가 있다.

여러 헬스 체크의 결과를 하나의 헬스 체크로 결합할 수 있다.
Route53을 사용해 세 개의 EC2 인스턴스로 볼 때, 우리는 세 개의 헬스 체크를 만들 수 있다.

이들은 모두 자식 헬스 체크가 될 것이고, 각각의 EC2 인스턴스를 하나씩 모니터링할 것이다. 그 다음 이러한 모든 자식 헬스 체크에 정의된 부모 헬스 체크를 정의할 수 있다.

모든 헬스 체크를 결합하기 위한 조건은 OR, AND, NOT일 수 있다.

최대 256개의 자식 헬스 체크를 모니터링할 수 있으며 부모를 통과시키기 위해 몇 개의 헬스 체크가 통과해야 하는지를 지정할 수 있다.

사용 사례는 웹 사이트의 유지 보수를 수행하려는 경우 모든 헬스 체크가 실패하지 않고도 부모 헬스 체크를 실행하려는 경우이다.

Private 리소스의 헬스 체크를하는 방법은 무엇일까?
모든 Route53 Health checker가 Public Web에서 살고 있고, 우리의 VPC 외부에 있기 때문에 Private 리소스를 모니터링하는 것은 어려울 것이다.

우리가 할 수 있는 방법은 CloudWatch Metric을 생성하고 해당 CloudWatch Alarm을 할당하는 것이다.
그 다음 CloudWatch Alarm을 Health checker에 할당할 수 있다.

CloudWatch Metric으로 Private 서브넷의 EC2 인스턴스의 health status를 모니터링하고, 지표가 위반되면 CloudWatch Alarm을 생성할 것이다.
그리고 알람이 경보 상태로 진입하게 되면 Health checker가 자동으로 Unhealthy 상태로 되며 우리가 원하는 대로 될 것이다.

결국 Private 리소스에 대한 Health check를 생성하는 가장 일반적인 사용 사례가 될 것이다.

## **[SAA/DVA] Routing Policy - Failover**

장애 조치(Failover) 라우팅 정책에 대해 이야기 해보자

Route53이 중간에서 2개의 인스턴스가 있다. 한 개는 Primary 인스턴스이고 두 번째는 Secondary인 재해 복구 용 인스턴스이다.

이 경우 Primary 인스턴스를 헬스 체크 설정을 하고 헬스 체크가 비정상이되면 Route53이 자동으로 두 번째 EC2 인스턴스로 장애 조치를 수행하고 두 번째 EC2에서 결과를 반환하게 된다.

Primary와 Secondary는 각각 하나씩만 설정 가능하다.

클라이언트가 DNS 요청을 할 때 자동으로 Health 상태로 간주되는 리소스를 받게 된다.

따라서 Primary에 대한 Health check가 비정상이되면 자동으로 두 번째 레코드의 응답을 받게 된다.

예를 들어 failover.example.com 의 A 레코드로 Primary 인스턴스를, 라우팅 정책은 failover로 지정한다.
TTL의 경우 60초와 같이 매우 낮게 설정한다.

failover record type은 Primary와 Secondary로 설정 가능하다.

## **[SAA/DVA] Routing Policy - Geolocation**
Geolocation은 사용자의 실제 위치에 기반한다.

Latency 라우팅 정책과는 다르다

예를 들어 특정 대륙, 국가 또는 구체적으로 이야기하자면 미국의 주에서 사용자가 오는 경우를 말할 수 있고, 구체적인 위치가 먼저 선택되고 이 IP를 기반으로 라우팅된다.

위치가 일치하지 않는 경우를 대비해 Default 레코드를 생성해야 한다.

사용 사례는 웹 사이트 지역화, 콘텐츠 배포 제한, 로드 밸런싱 등이 될 것이다.

Health check와 연결할 수 있다.

예를 들어 독일 사용자는 독일어 버전 앱이 포함된 A 레코드의 IP로 이동해야 하고, 프랑스 사용자는 프랑스어 버전 앱이 포함된 IP로 이동해야 하고, 다른 곳에서는 Default IP로 이동해야할 때 지리적 위치 기반 라우팅 정책을 사용해야한다.

다른 라우팅 정책과 동일하게 레코드 네임을 일치하지만 라우팅 정책과 지리적 위치 기반 라우팅 정책에 해당하는 Location을 설정해줘야 한다. 

## **[SAA/DVA] Routing Policy - Geoproximity**

지리적 근접 라우팅(Goeproximity Routing)에 대해 알아보자

이 기능을 사용하면 사용자 및 리소스의 지리적 위치를 기반으로 트래픽을 리소스로 라우팅할 수 있다.

이 정책을 사용하면 특정 위치를 기반으로 트래픽을 리소스로 라우팅하는 데 사용할 수 있는 숫자인 bias를 사용할 수 있다.

지리적 위치의 크기를 변경하려면 bias를 지정해야 한다.

특정 리소스로 더 많은 트래픽을 유도하려면 bias 값을 증가시켜 bias 값을 확장하고, 적게 유도하려면 bias를 축소해 음수로 설정한다.

리소스가 AWS 리소스인 경우 해당 Region을 지정하고 자동으로 올바른 라우팅을 계산한다. 또는 온프레미스와 같이 AWS 리소스가 아닌 경우 위도와 경도를 지정하여 AWS가 현재 리소스의 위치를 알 수 있게 한다.

bias를 활용하려면 고급 설정인 Route53 Traffic Flow를 사용해야 한다.

예를들어 us-west-1의 리소스와 us-east-1의 리소스가 있다고 가정했을 때, 모든 사용자가 이 리소스에 액세스하려고 할 때 미국을 두 부분으로 나누는 일종의 선이 생긴다는 것을 의미한다.

이 선의 왼쪽 사용자는 us-west-1으로 이동하고, 오른쪽 사용자는 us-east-1으로 이동한다.

bias가 없을 경우 완벽히 위와 같이 이동하며, 사용자 위치를 기반으로 가장 가까운 리소스 리전으로 이동하는 것처럼 보인다.

만약 us-east-1에서 bias가 50으로 설정되면 일종의 나누는 선이 조금 더 왼쪽으로 이동하게 된다. bias가 높아진다는 것은 조금 더 트래픽을 많이 받아온다는 것을 의미한다.

이렇게 하는 이유는 만약 전 세계의 리소스를 설정하고 특정 리적으로 더 많은 트래픽을 이동해야 하는 경우에는 특정 리전에서 bias를 증가시키기 위해 지리적 근접 라우팅 정책을 사용하면 된다.

따라서 해당 리전으로 사용자를 더 유도하고 트래픽을 이끌어낼 수 있다.

## **[SAA/DVA] Routing Policy - Traffic Flow & Geoproximity Hands On**

Traffic Flow라는 기능이 있다.

Goeproximity에만 적용되는 것이 아니라 모든 것에 적용되며 UI를 통해 복잡한 라우팅 결정 트리를 관리할 수 있는 시각적 편집기가 제공되며, 다양한 규칙을 지정할 수 있다.

Traffic Flow는 특정 rule로 저장되며 버전이 지정될 수 있고, 다른 호스팅 영역에 적용할 수 있으며 손쉽게 변경하고 적용할 수 있다.

Traffic Policy를 만들 수 있으며 Policy에는 Start Point가 있으며 Start Point는 만들려는 레코드 유형을 지정해야 한다.

Start Point에는 특정 규칙을 연결해야 한다. 이 규칙은 가중치 규칙, 장애 조치 규칙, 지리적 위치 규칙, 지연 시간 규칙, 다중 값, 지리적 근접 또는 엔드포인트 등을 설정 가능하다.

Geoproximity의 경우 지도를 표시하여 시각적으로 확인할 수도 있다.

## **[SAA/DVA] Routing Policy - IP-based**

IP 기반 라우팅이라는 정책이 있다.

클라이언트 IP 주소를 기반으로 라우팅을 정의한다.

Route53에서는 클라이언트의 IP 범위인 CIDR 목록을 정의하고, CIDR에 따라 트래픽을 보낼 위치를 지정한다.

사용 사례는 성능을 최적화하거나 IP가 어디에서 왔는지를 알기 때문에 네트워크 비용을 줄이는 것이다.

예를 들어 특정 인터넷 제공업체가 특정 CIDR IP 주소를 사용하는 것을 알고 있다면, 이 전략을 통해 그들을 특정 엔드포인트로 라우팅할 수 있다.

예를 들어 200.5.4.100 IP를 가진 Client A와 203.0.113.56 IP를 가진 Client B가 있을 때 Location-1은 203.0.113.0/24 Location-2는 200.5.4.0/24로 지정하고 Record 값에서 A 인스턴스는 Location-1로 B 인스턴스틑 Location-2로 지정하게 되면 IP 기반으로 라우팅할 수 있는 것이다.

## **[SAA/DVA] Routing Policy - Multi Value**

이 정책은 여러 리소스로 트래픽을 라우팅하고자 할 때 사용된다.

Route53은 여러 개의 값 또는 리소스를 반환한다.

이들을 Health check와 연결할 수 있으므로 Multi Value 정책을 통해 반환되는 유일한 리소스는 Healthy한 리소스이다.

각 Multi Value 쿼리에 대해 최대 여덟 개의 Healthy 레코드가 반환된다.
이게 ELB를 대체하는 것은 아니고, 클라이언트 측의 로드 밸런싱이다.

예를 들어 example.com에 대해 여러 개의 A 레코드를 설정하고 Health check와 연결했을 때 클라이언트가 Multi Value 쿼리를 수행하면 최대 여덟 개의 레코드가 반환되고 그 중 하나를 클라이언트가 선택한다.
그러나 Health check와 결합해 최소한 여덟 개 중 하나의 레코드가 건강한 것임을 알 수 있고, Simple 라우팅에 여러 값이 있는 경우와는 다르다.

Simple 라우팅 정책에는 Health check가 허용되지 않으므로 쿼리에서 반환되는 리소스 중 하나가 건강하지 않을 수 있다.
이것이 Multi Value가 더 강력한 레코드 유형인 이유이다.

## **[SAA/DVA] 3rd Party Domains & Route 53**

Domain Registrar(도메인 등록 대행자)와 DNS 서비스의 차이점에 대해 알아보자

도메인 이름은 원하는 Registrar에서 구매할 수 있으며, 연간 요금을 지불해야 한다. Route53을 통해 Amazon Registrar를 사용하거나, GoDaddy, Google Domain 등 다른 Registrar를 이용할 수도 있다.

일반적으로 Domain Registrar를 통해 도메인을 등록하면 DNS 레코드 관리를 위한 DNS 서비스도 제공된다.

Amazon에서 도메인을 등록하면 Route53 Hosted Zone에서 DNS 레코드를 관리할 수 있다.

하지만 Amazon Domain Registrar에서 도메인을 구매했다고 해서 반드시 Route53을 DNS 서비스로 사용핧 필요는 없다. 반대로 GoDaddy에서 도메인을 구매하고 DNS 레코드 관리를 위해 Route53 을 사용할 수도 있다.

GoDaddy에서 도메인을 등록하고 Route53을 사용하는 경우에는 네임서버 옵션에서 사용자 지정 네임서버 (custom name server)를 지정해야 한다.

입력할 값은 Route 53의 퍼블릭 호스팅 영역에서 찾을 수 있고, 호스팅 영역 세부 정보에서 오른쪽에 있는 4개의 네임서버 값을 GoDaddy 웹사이트에 입력하면 된다.

이렇게 하면 GoDaddy에서 "어떤 네임서버를 사용해야 하나?" 라는 쿼리가 올 때, 해당 네임서버가 Route 53 네임서버를 가리키게 된다. 그러면 Rotue 53 콘솔에서 DNS 레코드를 관리할 수 있다.

요약하면 제 3자 Registrar에서 도메인을 구매했더라도 Route53을 DNS 서비스 제공자로 사용할 수 있다.

Domain Registrar는 DNS 기능을 일부 제공하지만 DNS 서비스 제공자와는 다르다.

## **S3 Website with Route 53**

S3 웹사이트를 Route 53과 연결하는 방법을 알아보자

먼저 S3 버킷을 생성할 때 도메인 이름과 정확히 같은 이름으로 만든다. Route53 레코드 이름과 일치해야 한다. 예를 들어 domain.example.com과 같이 버킷 네임을 만들어야함

버킷에 Web site hosting을 활성화하고 객체를 공개적으로 액세스 가능하도록 설정한다.

Route 53으로 이동해 A 레코드 유형의 Alias 레코드를 생성한다.
레코드 이름은 domain.example.com이고, 값은 S3 웹사이트 엔드포인트인 s3-website.{특정 region 값}.amazonaws.com

버킷 이름과 레코드 이름이 정확히 일치하면 해당 URL(domain.example.com)로 S3 버킷에 액세스할 수 있다.

HTTP 트래픽에만 적용되며, HTTPS 지원을 위해서는 CloudFront 같은 CDN 솔루션을 사용해야 한다.

## **Route 53 Resolvers & Hybrid DNS**

우리는 리전과 Route 53 리졸버를 가지고 있다.

기본적으로 리졸버는 EC2 인스턴스의 로컬 도메인 이름에 대한 DNS 쿼리에 자동으로 응답할 것이다.

프라이빗 호스팅 영역의 레코드 및 Public Hosted Zone이나 인터넷에 공개된 다른 모든 네임서버의 레코드에 쉽게 응답할 수 있다.

이제 VPC와 다른 Private Network, 다른 DNS 리졸버가 있는 자신의 네트워크 간에 DNS 쿼리를 해결하려면 하이브리드 DNS가 필요하다.

이러한 네트워크는 예를들어 Peered VPC이거나 Direct Connect 또는 AWS VPN을 통해 VPC에 연결되는 온프레미스 네트워크일 수 있다.

이를 이해하기 위해서 리졸버 엔드포인트를 이해해야한다.
인바운드 엔드포인트와 아웃바운드 엔드포인트가 있다.

인바운드 엔드포인트는 외부 네트워크의 DNS 리졸버가 DNS 쿼리를 Route53 리졸버로 전달하고 이러한 쿼리에 응답할 수 있게 한다.

이러한 리졸버는 EC2 인스턴스 또는 Route 53 Private Hosted Zone에 생성한 레코드와 같은 AWS 리소스의 도메인 이름을 Resolve하는 데 도움이 된다.

내부 시스템과 AWS Private Hosted Zone에 대한 Response를 모두 받게 된다.

아웃바운드 엔드포인트는 조건부로 DNS 쿼리를 온프레미스 DNS 리졸버로 전달하는 것이다.

이를 위해 전달할 리졸버 규칙을 생성하면 된다. 이러한 엔드포인트를 동일 리전 내의 하나 이상의 VPC와 연결하고, 고가용성을 위해 두 개의 가용성 영역에 생성한다.

각 엔드포인트는 IP 주소 당 초당 약 10,000개의 쿼리를 지원한다.
더 많이 필요하다면 더 많은 IP 주소를 생성하면 된다.

이러한 리졸버를 통해 이전에는 AWS에서 자체 DNS 리졸버를 실행하고 온프레미스 리졸버와 연결해야 했던 필요성이 없어진다.


예를 들어 VPC에 있는 EC2 인스턴스와 aws.private라는 Private Hosted zone, 그리고 서버가 있는 온프레미스 데이터 센터가 있다고 가정 해보자
EC2 인스턴스에는 app.aws.private라는 CNAME을 부여했다.

여기서 web.onpremises.private의 서버가 AWS에 있는 EC2 인스턴스에 액세스하려고 한다. 그래서 먼저 온프레미스 센터와 AWS 클라우드가 VPN 연결 또는 Direct Connect를 사용하여 연결한다.

온프레미스에도 몇 개의 DNS 리졸버가 있을 것이다. onpremise.private 영역을 위한 것을 말한다.
그래서 서버가 app.aws.private에 대한 DNS 쿼리를 발행하면 온프레미스에 있는 DNS 리졸버는 "잘 모르겠는데?"라고 할 것이다.

그래서 리졸버 인바운드 엔드포인트를 만들어야한다. 이 인바운드 엔드포인트 뒤에는 고가용성을 위해 두 개의 ENI가 있다. 이 ENI에는 프라이빗 IP 주소가 연결되어 있다.

그래서 온프레미스 DNS 리졸버에서는 우리가 레코드 설정을 하듯이 aws.private 도메인 이름에 대해 이 두 개의 IP로 전달하도록 설정할 것이다. 

그러면 app.aws.private에 대한 DNS 쿼리가 온프레미스에 구성된 이 도메인 이름과 일치하므로, DNS 리졸버는 "이 정보를 가진 DNS 서버로 이 쿼리를 전달해야겠구나"라고 말할 것이다. 그래서 두 개의 IP로 전달한다.

이제 리졸버 인바운드 엔드포인트는 Route 53 리졸버와 연결되어 있고, Private Hosted Zone에서 최종 조회를 하여 이 쿼리에 대한 최종 정보를 제공한다.

이것이 인바운드 엔드포인트라고 불리는 이유이다. 외부(온프레미스)에서 요청이 들어와 AWS 내부로 인바운드되기 때문이다.

아웃바운드 엔드포인트는 반대 방향이다. 똑같은 설정이지만, 이번에는 온프레미스 데이터 센터의 DNS 이름을 해결할 수 있어야 한다.

우리 EC2 인스턴스가 Route 53 Resolver에게 "web.onprem.private에 대해 알고 있니?"라고 묻는다. 이 과정이 진행되기 위해서는 두 개의 ENI를 가진 리졸버 아웃바운드 엔드포인트를 만들 것이다. 그리고 onprem.private 도메인 네임에 대한 온프렘 서버의 IP 172.16.0.10을 전달할 수 있도록 전달 규칙을 만든다.

Route 53 리졸버는 이 쿼리를 이 엔드포인트로 보내고, 엔드포인트는 DNS 쿼리를 온프레미스 DNS 리졸버로 전달한다.
그러면 온프레미스 데이터 센터 DNS에 저장된 레코드에서 자동으로 응답을 받게 된다.

아웃바운드 엔드포인트를 관리하려면 Resolver Rule이 필요하다.
이 규칙은 네트워크에서 DNS 쿼리를 어떻게 전달할지 설명한다.
- Conditional Forwarding Rule (Forwarding Rule)
  - 특정 DNS 쿼리에 대해 이 도메인은 이 대상 IP 주소로 전달하라고 말하는 것이다.
  - 예를 들어 example.com 또는 acme.example.com에 대해서는 이 대상 IP를 사용하라고 말할 수 있다.
- System Rule
  - 전체 서브도메인에 대해 이 전달 규칙을 사용하지 말라고 정의하는 것이다.
  - 일종의 Deny 규칙이라고 생각하면 될듯
- Auto-defined System Rule
  - 내부에서 해결되는 도메인에 대한 규칙이다.
  - 예를 들어 AWS 내부나 Private Hosted Zone의 도메인 이름인 compute.amazonaws.com이나 ec2.internal 같은 것들이다.
- 여러 규칙이 일치하는 경우 Route 53 리졸버는 적용할 규칙을 선택할 때 가장 적합한 규칙을 선택한다.
- Resolver Rule은 AWS Resource Access Manager(RAM)를 사용해 계정 간에 공유할 수 있다. 
  - 이 Resolver Rule을 위한 전용 계정에서 중앙 집중식으로 관리할 수 있다. 중앙 계정에서 리졸버 규칙을 중앙 집중식으로 관리할 수 있는 방법이다.
  - 여러 VPC에서 규칙에 정의된 대상 IP로 DNS 쿼리를 보낼 수 있다.

## **[SAA] CIDR, Private vs Public IP**
CIDR은 CIDRs 또는 Classless Inter-Domain Routing이라고 한다.

이것은 IP 주소를 할당하는 방법이다. AWS 네트워크 내에서는 IP주소/숫자 형태로 CIDR을 볼 수 있다.

IP주소/32 일 때는 단일 IP를 나타내고 0.0.0.0/0일 때는 모든 IP를 나타낸다.

예를 들어 192.168.0.0/26 을 정의하면 64개의 IP 주소 범위를 나타낸다.

CIDR은 두 가지 구성 요소가 있다. 베이스 IP와 서브넷 마스크이다.

베이스 IP는 범위에 보함된 IP이며 보통 범위의 시작 IP이지만, 범위 내에 있기만 하면 된다.
예를 들어 10.0.0.0 또는 192.168.0.0이다.

서브넷 마스크는 IP에서 몇 비트가 변경될 수 있는지를 정의한다.
/0에서 /32까지 있다.

/8은 255.0.0.0 서브넷 마스크와 동일하고, /16은 255.255.0.0이다.

IPv4 공간에서 Public IP와 Private IP에 대해 논의해보자
IANA는 특정 IPv4 주소 블록을 LAN이나 인터넷 주소로 지정했다.

Private IP는 제한된 범위만 사용할 수 있다.

10.0.0.0/8 범위는 큰 규모의 네트워크에서 사용하는 사설 IP이다.
172.16.0.0/12도 사설 IP 범위이며, 기본 VPC가 여기에 포함된다.
192.168.0.0/16은 가정용 네트워크에서 흔히 볼 수 있다.

이 외의 다른 IP 주소는 인터넷 상의 공인 IP 주소이다.

## **[SAA] VPC Overview**

VPC는 Virtual Private Cloud의 약자이다.

하나의 AWS 리전 내에서 여러 개의 VPC를 가질 수 있다.

각 리전 당 최대 다섯 개의 VPC를 가질 수 있지만, 이것은 Soft한 제한이므로 증가시킬 수 있다.

VPC 당 할당된 CIDR에 대한 최소 크기는 /28이고, 적어도 16개의 IP 주소가 있어야 한다. 최대 크기는 /16으로 최대 65,536 개의 IP 주소가 있을 수 있다.

VPC는 Private 자원이므로 사설 IPv4 범위만 허용된다.

VPC에 할당할 유형에 따라 범위를 선택할 수 있지만 기타 네트워크 또는 기업 네트워크와 CIDR이 겹치지 않도록 주의해야 한다.

이들을 함께 연결하는 경우가 생길 것이며 연결하려면 한 CIDR의 IP 주소가 다른 네트워크의 IP 주소 범위와 겹치지 않도록 해야 하기 때문이다.

## **[SAA] Subnet Overview**

VPC는 서브넷을 추가할 수 있다.

하나는 Public Subnet이고, 하나는 Pricate Subnet이다.

서브넷은 다시 말해 VPC 내에서의 IPv4 주소의 하위 범위이다. 그리고 이 범위에서 AWS는 다섯 개의 IP 주소를 예약한다. (중요한 내용)

각 서브넷에서 첫 네 개의 IP 주소와 마지막 하나는 사용할 수 없으며, 이를 EC2 인스턴스의 IP로 할당할 수 없다.

예를 들어 CIDR 블록이 10.0.0.0/24인 경우
10.0.0.0: Network 주소
10.0.0.1: VPC 라우터를 위해 AWS가 예약한 주소
10.0.0.2: Amazon이 제공하는 DNS에 매핑하기 위해 AWS에 의해 예약된 주소
10.0.0.3: 아직 사용되지 않지만 미래를 위해 예약되어 있는 주소
10.0.0.255: 네트워크 브로드캐스트 주소인데, AWS는 VPC에서 브로드캐스트를 지원하지 않기 때문에 주소는 예약되어 사용할 수 없다.

그래서 예를 들어 EC2 인스턴스에 29개의 IP 주소가 필요한 경우 /27의 서브넷을 선택할 수 없다.
/27의 경우 32개의 IP 주소가 있는데 예약된 5개의 IP 주소를 제외하면 27개의 주소를 얻을 수 있기 때문이다.

## **[SAA] Internet Gateways & Route Tables**

서브넷에 인터넷 액세스를 어떻게 제공할 수 있는지 알아보자

처음에는 Public 서브넷과 Private 서브넷이 무엇인지 알 수 없으며, 두 서브넷이 있다고 가정했을 때 두 서브넷 모두 인터넷 액세스가 없다.

인터넷 게이트웨이는 VPC 내의 리소스가 인터넷에 연결할 수 있게 하며, EC2 인스턴스가 기능을 허용하는 등의 작업이 가능하다.

인터넷 게이트웨이는 수평 확장이 가능하고 고가용성 및 장애 조치 기능이 있다. 관리가 잘 되는 리소스이며, VPC와 별도로 생성되어야 한다.

한 VPC는 하나의 인터넷 게이트웨이에만 연결될 수 있으며 그 반대도 마찬가지이다.

인터넷 게이트웨이 자체로는 인터넷 액세스를 허용하지 않고, 액세스를 허용하기 위해서는 라우팅 테이블을 수정해야한다.

Public EC2 인스턴스를 Public 서브넷에 만든 다음, 라우팅 테이블을 편집하여 EC2 인스턴스가 라우터에 연결하고, 거기서 인터넷 게이트웨이에 연결한 다음, 인터넷 게이트웨이를 통해 인터넷에 연결할 수 있도록 해야 한다.

## **[SAA] Bastion Hosts**

예를 들어 사용자는 Private 서브넷에 있는 EC2 인스턴스에 액세스하려고 하지만 우리 사용자는 Public 인터넷에서 컴퓨터를 사용하고 있다.

Private 서브넷에 있는 EC2 인스턴스는 직접적인 인터넷 액세스가 없는데 액세스하려면 어떻게 해야하는가?

Bastion Host라는 EC2를 사용하면 된다.

이 EC2는 Public 서브넷에 있으며, VPC 내에 있기 때문에 Private 서브넷에 있는 EC2 인스턴스에 액세스할 수 있다.

먼저 Bastion EC2 인스턴스에 SSH를 사용해 연결한 다음 Private 서브넷에 있는 EC2에 SSH를 사용해 연결하면 된다.

Bastion EC2 인스턴스는 Public 서브넷에 있어야 외부 사용자가 접근 가능하다.

인터넷 어디서나 액세스를 허용하는 대신, 회사나 인터넷 액세스의 공용 CIDR에서 액세스를 제한할 수 있다.

최대한 제한하여 몇 개의 선택된 IP만 액세스할 수 있도록 보장해야 한다. 어떤 무작위 공격자가 EC2 인스턴스에 액세스할 수 있다면 인프라에 대한 보안 위협이 될 수 있기 때문이다.

Private 서브넷에 있는 EC2 인스턴스의 보안 그룹 측면에서는 Bastion의 사설 IP의 SSH 액세스를 허용해야 한다. Private EC2 기준에서 받는 트래픽이 Bastion Host 에서 시작되었기 때문이다.

## **[SAA] NAT Instances**

NAT 인스턴스는 더 이상 사용되지 않는 기술이다.

NAT는 Network Address Translation을 의미하며, 이러한 NAT 인스턴스를 사용하면 Private 서브넷에 있는 EC2 인스턴스가 인터넷에 연결할 수 있다.

이를 위해서 NAT 인스턴스는 Public 서브넷에 있어야하고, 이후 Public 서브넷과 Private 서브넷을 연결해야 한다.

또한 Source / destination Check 설정을 EC2에서 비활성화 해야 한다.

NAT 인스턴스에는 고정된 Elastic IP가 연결되어 있어야 한다.

Private 서버에서 Public 서브넷에 있는 NAT 인스턴스에 접근하기 위해서는 Private 서브넷에서 Public 서브넷으로 트래픽을 보낼 수 있도록 Routing Table을 수정해야 한다.

그리고 NAT 인스턴스는 보안 그룹을 갖고 있다.

NAT 인스턴스는 결국 EIP를 기준으로 Private EC2 인스턴스에서 오는 트래픽을 본인 EIP로 src ip를 변경해서 도착지에 트래픽을 전달하는 것

출발지/목적지 확인을 비활성화 해야하는 이유는 IP가 재 작성하는 동안 일부 IP가 비활성화되기 때문에.

> 각각의 EC2 인스턴스는 기본적으로 원본/대상 확인을 수행합니다. 이는 인스턴스가 보내거나 받는 트래픽의 원본 또는 대상이어야 한다는 의미입니다. 하지만, NAT 인스턴스는 원본 또는 대상이 그 자신이 아닐 때 트래픽을 보내고 받을 수 있어야 합니다. 따라서 NAT 인스턴스에서 원본/대상 확인을 비활성화해야 합니다.

NAT 인스턴스는 사전 구성된 Amazon Linux AMI가 제공된다. 그러나 2020년 12월 31일에 표준 지원이 종료 되었다.

이제는 NAT Gateway가 권장되며, NAT 인스턴스는 고가용성이 떨어진다.

기본 설정으로는 내구성이 부족하기 때문에, 여러 개를 여러 가용 영역에 생성하고, ASG를 가질 수 있고, 내구성 있는 User data Script를 갖는 것이 좋다.

또한 작은 인스턴스를 선택하면 큰 인스턴스보다 대역폭이 적게 제공된다.

또한 인스턴스의 보안 그룹과 규칙을 관리해야 한다.

인바운드에서는 Private 서브넷에서 HTTP와 HTTPS 트래픽을 허용하고 Home 네트워크에서는 SSH를 허용하는 것이 좋다.

아웃바운드에서도 일부 트래픽을 허용해야 한다.

## **[SAA] NAT Gateways**

NAT 게이트웨이 특징
- NAT 게이트웨이는 관리형이며 인스턴스에 비해 대역폭이 높다. 
- 또한 고가용성을 제공하며 관리가 필요 없다. 
- 대역폭과 사용량에 따라 시간 당 요금을 지불한다. 
- NAT 게이트웨이는 특정 AZ에 생성되며 Elastic IP를 가지게 된다. 
- 동일한 서브넷 내에서는 EC2 인스턴스와 함께 사용할 수 없다.  NAT 게이트웨이는 다른 서브넷에서 액세스할 때만 유용하다.
- 트래픽은 프라이빗 서브넷에서 NAT 게이트웨이를 거쳐 인터넷 게이트웨이로 이동한다.
- NAT 게이트웨이는 인터넷 게이트웨이 없이는 작동하지 않는다.
- 대역폭은 초당 5Gbps에서 최대 100Gbps까지 자동 확장된다.
- 보안 그룹이 필요 없고 관리할 필요 또한 없다.

NAT 게이트웨이는 높은 가용성을 가지고 있다. NAT 게이트웨이는 단일 AZ 내에서만 중복성을 갖는다. 장애 허용을 위해서는 다중 AZ에 NAT 게이트웨이를 만들어야 한다.

NAT 게이트웨이와 NAT 인스턴스의 차이점은 NAT 게이트웨이는 특정 AZ 내에서 고가용성을 제공한다. NAT 인스턴스의 경우 인스턴스 간 장애 조치를 관리하는 스크립트가 있어야 고가용성이 제공된다.

NAT 게이트웨이는 관리형 서비스이지만 소프트웨어나 OS 패치 등의 관리를 NAT 인스턴스는 해야한다.

## **[SAA] DNS Resolution Options & Route 53 Private Zones**
DNS Resolution이라고 하는 enableDNSSupport 옵션이 있다.

이 옵션은 VPC에서 Route 53 Resolver로부터 DNS Resolution이 지원되는지 여부를 결정한다. 기본 설정은 true이다.

이는 VPC 내의 169.254.169.253 IP를 갖고 있는 Amazon 제공 DNS 서버와, 이전에 언급한 서브넷 IP에 2를 더한 예약 IP에 있는 DNS 서버에 쿼리할 수 있음을 의미한다.

enableDNSSupport가 true이면 Route 53 Resolver에 자동으로 연결하게 되는데 false인 경우 Route 53 Resolver 없이 자체 사용자 지정 DNS 서버를 만들고 도메인 쿼리에 대한 답변을 사용자 지정 서버에서 받아야한다. 대체로 AWS 관리형 서비스를 사용하는 것이 더 좋을 것이다.

DNS Hostname의 경우 Default VPC에서는 true로 되어 있지만 새로 생성하는 VPC에서는 false로 되어 있다.

앞서 언급한 enableDnsSupport가 true 가 아니라면 아무 작동도하지 않는다.

DNS Hostname이 true면 EC2 인스턴스에 Public Hostname이 부여된다. 그리고 Public IP도 있어야 한다.

DNS Hostname 설정이 disable이면 Public 서브넷에 있는 EC2 인스턴스라도 Private DNS만 가진다. 하지만 DNSSupport와 DNS Hostname이 모두 enable이면 EC2 인스턴스에 Private DNS 외에도 Public IP에 해당하는 Public DNS도 할당된다.

두 가지 설정을 모두 활성화하는 이유는 Route 53의 Private Hosted Zone에 web.mycompany.private와 같은 사용자 지정 DNS 도메인 이름을 A 레코드로 만들 수 있기 때문이다.

이렇게 하면 Private 서브넷의 EC2 인스턴스에 Private IP와 연결된 Private DNS 이름을 가질 수 있다.

EC2 인스턴스가 해당 Pirvate DNS 이름을 요청하면 Route 53 Resolver를 통해 Private Hosted Zone을 조회해 서버의 IP를 알 수 있다. 그러면 EC2 인스턴스 간 통신이 가능해진다.


## **[SAA] NACL & Security Groups**

Stateless와 Stateful에 대해 알아보자
- 먼저 NACL의 경우 Stateless 여서 요청이 서브넷에 들어갈 때의 규칙과 나갈때의 규칙을 둘다 명시적으로 허용해줘야 한다.
- 보안 그룹의 경우 Stateful 방식이기 때문에 보안 그룹의 인바운드 규칙을 통과해 EC2 인스턴스에 도달하면, EC2 인스턴스가 애플리케이션 관점에서 필요한 응답을 보낼 때의 아웃바운드 트래픽은 보안 그룹 수준에서 자동으로 허용된다.

NACL (Network ACL, Network Access Control List)은 서브넷의 추가 보호 계층이다.

NACL은 무엇일까?
- 서브넷 수준에서 트래픽의 출입을 제어하는 방화벽과 같다.
- 각 서브넷 별로 하나의 NACL이 있으며, 새 서브넷이 생성되면 기본 NACL이 할당된다.
- NACL 규칙
  - 1부터 32,766까지의 번호가 있으며, 번호가 작을수록 우선 순위가 높다.
  - 번호가 작은 규칙부터 순차적으로 확인하며 첫 번째로 일치하는 규칙에 따라 결정된다.
  - 예를 들어 허용 규칙의 번호가 100 거부 규칙의 번호가 200이라면 100이 우선 적용되어 해당 IP 주소가 허용된다.
  - 마지막 규칙은 *로 표시되며, 어떤 규칙과도 일치하지 않으면 모든 요청을 거부한다. 
  - AWS에서는 규칙을 100씩 증가시키는 것을 권장한다. 그렇게 하면 중간에 규칙을 추가하기 쉽기 때문이다.
- 새로 생성된 NACL은 기본적으로 모든 것을 거부한다.
- NACL은 특정 IP 주소를 서브넷 수준에서 차단하는 데 매우 유용하다.

기본 NACL
- 연결된 서브넷으로의 모든 인바운드와 아웃바운드 트래픽을 허용한다.
- 기본 NACL을 수정하는 대신 사용자 지정 네트워크 ACL을 생성하는 것이 좋다.

Ephemeral Port(임시 포트)
- 클라이언트와 서버가 연결될 때 포트를 사용해야 한다.
- 서버가 서비스를 제공하면 클라이언트는 정의된 포트로 연결한다. 그런데 클라이언트도 서버로부터 응답을 받아야하기 때문에 서버 또한 클라이언트에 응답을 보내기 위해 연결해야 한다.
- 그러나 클라이언트는 기본적으로 열린 포트가 없다. 따라서 클라이언트가 서버에 연결할 때 자신에게 특정 포트를 임시적으로 열고, 클라이언트와 서버 간 연결이 지속되는 동안만 살아있다.
- Windows 10의 경우 49,152 ~ 65,535 까지의 포트 범위 중 무작위로 임시 포트가 선택된다. Linux의 경우 32,768 ~ 60,999 까지의 범위가 일반적이다.
- Ephemeral Port를 연결하는 것은 NACL과 관련이 있다.

Ephemeral Port(임시 포트)와 NACL
- 클라이언트가 데이터베이스에 연결할 때 프라이빗 서브넷과 퍼블릭 서브넷, 각 서브넷과 연결된 웹 NACL과 DB NACL을 고려해야 한다.
- 클라이언트가 데이터베이스 인스턴스에 연결을 시작할 때 허용해야하는 규칙은 첫 번째 웹 NACL에서는 데이터베이스 서브넷 CIDR로 향하는 아웃바운드를 허용해야한다.
- 그리고 DB NACL의 경우 웹 서브넷 CIDR로 향하는 아웃바운드 TCP에 대해 임시 포트 범위인 1024 부터 65535 포트를 허용해야 한다.
- 그리고 웹 NACL 또한 DB 서브넷 CIDR에서 오는 이 임시 포트 범위에 대한 인바운드 TCP를 허용해야 한다.

다중 NACL과 다중 서브넷이 있는 경우 CIDR을 사용하고 각 서브넷에 자체 CIDR이 있기 때문에 각 NACL 조합을 NACL에서 허용해야 한다. 따라서 NACL에 서브넷을 추가할 때 모든 NACL 규칙을 업데이트하여 연결 조합이 가능하도록 하는 것이 매우 중요하다.

보안 그룹과 NACL의 차이점
- 보안 그룹은 인스턴스 수준에서 작동하지만 NACL은 서브넷 수준
- 보안 그룹은 허용 규칙만 지원하지만 NACL은 허용 및 거부 규칙을 지원하므로 특정 IP 주소를 NACL에서 거부할 수 있다.
- 보안 그룹은 Stateful이라서 규칙에 관계없이 반환 트래픽이 자동으로 허용, NACL은 Stateless라서 인바운드와 아웃바운드 규칙이 평가된다.(NACL의 경우 Ephemeral Port를 기억해야 함)
- 보안 그룹의 경우 모든 규칙이 트래픽 허용 여부를 결정하는 데 평가되지만, NACL에서는 우선 순위가 가장 높은 규칙부터 평가되며 제일 첫 번째로 일치한 규칙이 적용된다.
- 보안 그룹은 지정된 EC2 인스턴스에 적용되지만 NACL은 연결된 서브넷의 모든 EC2 인스턴스에 적용된다.


## **[SAA] VPC Reachability Analyzer**

VPC Reachability Analyzer는 VPC내 두 엔드포인트 간의 네트워크 연결성 문제를 해결하는 데 도움이 되는 네트워크 진단 도구이다.

네트워크 구성을 파헤치고 오류가 발생한 곳을 이해하는 대신 이 도구는 두 엔드포인트 간 네트워크 구성 모델을 만들고, AWS 계정 내 구성을 기반으로 연결성을 구축하고 확인한다.

실제로 소스에서 대상으로 패킷을 보내지는 않고 단지 구성을 분석하고 무슨 일이 일어나는 지 알려준다.

인스턴스 A와 B가 있을 때 인스턴스 A가 B와 통신할 수 있는지 알아내려한다. 인스턴스 A는 ENI가 있을 것이고 이 ENI는 Security Group을 거치고 NACL을 지나 인스턴스 B에 이르는 전체 경로를 VPC Reachability Analyzer가 확인 해준다.

이 과정에서 VPC Reachability Analyzer는 각 지점의 구성이 제대로 되어 있는지 확인하고 통신이 가능하다면 "연결 가능"하다고 알려주고, 보안 그룹 문제 등으로 인해 연결이 불가능하다면 그 이유를 자동으로 감지하여 알려준다.

예를 들어 라우팅 테이블이 제대로 구성되지 않았다는 등의 구체적인 사항을 알려준다.

## **[SAA] VPC Peering**

VPC 피어링을 사용하면 우리가 AWS 네트워크를 사용해 서로 다른 Region, 다른 계정에 있는 VPC를 만들고 이들을 연결할 수 있다.

이를 하는 것은 그들이 마치 동일한 네트워크에 있는 것처럼 동작하도록 하기 위해서이다.

이 VPC들을 연결하기 위해서는 VPC 네트워크 CIDR이 서로 겹치지 않아야 한다. 왜냐하면 CIDR이 겹치는 경우 통신할 수 없게 된다.

VPC 피어링은 두 VPC 간에 발생할 수 있고, 이들은 전이적이지 않다. 즉, 서로 통신하려는 각 VPC는 VPC 피어링이 활성화되어 있어야 한다.

예를 들어 VPC A, B, C 가 있다고 했을 때 A-B의 피어링을 설정하고 B-C의 피어링을 설정한다고 했을 때 A-C의 피어링도 자동으로 활성화되는 것이 아니라는 이야기다. A-C 간에도 VPC 피어링을 활성화해야 통신할 수 있다.

VPC가 서로 연결되어 있더라도 각 VPC의 서브넷 라우팅 테이블을 업데이트하여 서로 다른 VPC에 있는 두 인스턴스가 통신할 수 있도록 해야 한다.

VPC 피어링은 동일한 계정 내에서 발생할 수 있지만, 다른 계정 간에도 발생할 수 있다.

따라서 계정 A의 VPC를 계정 B에 있는 VPC와 연결할 수도 있으며, Region 간에도 가능하다.

또한 같은 Region의 다른 계정에 있는 피어링 된 VPC의 보안 그룹을 참조할 수도 있다.

## **[SAA] VPC Endpoints**

VPC 엔드포인트는 특정 서비스를 Private하게 액세스하기 위해서 사용하는 것이다.

전체 인프라가 DynamoDB나 CloudWatch 및 S3와 같은 다른 서비스에 접속하려면 모든 트래픽이 Public 인터넷을 통해 이동해야 했다. 

인스턴스가 Public 인터넷을 통과하지 않고 이러한 서비스로 직접 AWS의 비공개 네트워크를 통해 이동할 수 있다.

예를 들어 SNS 서비스에 접근하기 위해서 NAT GW -> IGW 를 거쳐서 SNS 서비스에 접근하는 방식이 있다. 이는 NAT 게이트웨이를 통해 가야 하기 때문에 비용이 발생하고 IGW를 통해 여러 단계를 거치게 되어 효율적이지 않다.

대신 VPC 엔드포인트를 이용해서 Private 서브넷의 EC2 인스턴스가 VPC 엔드포인트를 통해 직접 SNS 서비스로 이동하도록할 수 있다. 어느 Public 인터넷에도 노출되지 않고 AWS PrivateLink에 의해 Private하게 액세스할 수 있다.

VPC 엔드포인트는 중복되며, 수평적으로 확장되며, AWS 서비스에 액세스하기 위해 IGW나 NAT GW가 필요하지 않으므로 네트워크 인프라를 훨씬 간단하게 만들어 준다.

문제가 발생한 경우에는 VPC의 DNS Resolution Setting를 확인하거나, Route Table을 확인해야 한다.

두 가지 유형의 VPC 엔드포인트가 있다.

PrivateLink로 제공되는 Interface Endpoint와 Gateway Endpoint가 있다.

Interface Endpoint
- VPC 내의 Private IP 주소인 ENI를 제공하며 이 ENI는 AWS 서비스로의 입구이다. 그리고 보안 그룹을 연결해야 한다.
- 거의 모든 AWS 서비스를 지원한다.
- GB당 데이터 처리 비용과 시간 당 비용이 부과된다.

Gateway Endpoint
- 게이트웨이를 프로비저닝하고 이를 Route Table의 대상으로 사용해야 한다. IP 주소를 활용하지 않고 보안 그룹을 활용하지 앟는다.
- 게이트웨이 엔드포인트의 대상은 Amazon S3와 DynamoDB 두 가지 뿐이다.
- 무료이며 자동으로 확장된다.

Interface Endpoint가 Gateway Endpoint보다 우선하는 경우는 온프레미스에서 액세스가 필요한 경우일 수 있다.

예를 들어 온프레미스 데이터 센터에서 Private 액세스를 원하는 경우, 이를 통해 Site to Site VPN 또는 Direct Connect를 통해 연결할 수 있다.

또는 다른 VPC에서 이 Interface Endpoint를 통해 연결하고자 하는 경우에도 Interface Endpoint가 선호될 수 있다.

대부분의 경우 Amazon S3와 DynamoDB에 대해 Gateway Endpoint가 선호된다.


## **[SAA] VPC Flow Logs**

VPC Flow Logs를 사용하면 인터페이스로 들어오는 IP 트래픽에서 정보를 캡처할 수 있다.

이는 VPC 수준, 서브넷 수준, ENI 수준에서 가능하다. 세 가지 종류의 Flow logs가 있다.

이 Log는 VPC 내에서 발생하는 연결 문제를 모니터링하고 해결하는 데 매우 유용하다.

로그는 Amazon S3, CloudWatch Logs, Kinesis Data Firehose로 전송될 수 있다.

ELB, RDS, ElastiCache, Redshift, WorkSpaces, NAT GW, Transit Gateway 등과 같은 AWS 관리형 인터페이스에 대한 정보도 캡쳐한다.

버전, 계정 ID, 인터페이스 ID, 출발지 주소, 목적지 주소, 출발지 포트, 목적지 포트, 프로토콜, 패킷, 시작 및 작업, 로그 상태와 같은 메타데이터가 포함된다.

VPC Flow Logs를 사용해 사용 패턴을 분석하거나 관리 동작, 포트 스캔 등을 감지하는 데 사용할 수 있다.

Flow Logs를 쿼리하려면 Athena on S3를 사용하거나 Streaming 분석을 수행하려면 CloudWatch Logs Insights를 사용할 수 있다.

Flow Logs를 사용해 보안 그룹 및 NACL 문제를 해결하는 방법은 무엇일까?

ACTION 필드를 살펴보면 된다. NACL은 상태를 유지하지 않고 보안 그룹은 상태를 유지한다.

Inbound 트래픽이 REJECT되는 것은 NACL이나 Security Group 의 문제일 수 있다. 그러나 Inbound 트래픽이 ACCEPT 되었는데, Outbound는 REJECT된다면 무조건 NACL의 문제이다.

위와 동일하게 Outbound 트래픽이 ACCEPT 되었는데, Inbound는 REJECT된다면 무조건 NACL의 문제이다.

몇 가지 VPC Flow Log 아키텍처를 살펴보자

1.  VPC Flow Logs를 CloudWatch Logs로 보낼 수 있다.
  - 이후 CloudWAtch Contributor Insights를 사용해 VPC에서 네트워크에 가장 많은 양을 기여하는 상위 10개의 IP 주소를 찾을 수 있다.
  - 또는 CW Alarm으로 보내서 SSH 또는 RDP 프로토콜이 평소보다 훨씬 많은 것을 발견하면 CloudWatch 알람을 트리거하고 SNS Topic으로 경고를 보낼 수 있다. 네트워크에서 뭔가 수상한 일이 일어나고 있을 수 있기 때문이다.
2.  Amazon S3 버킷으로 Flow Logs를 보낸다.
  - Athena를 사용해 SQL로 VPC Flow Logs를 분석할 수 있다.
  - Athena로 분석된 결과를 Amazon QuickSight로 시각화할 수도 있다.

## **[SAA] Site to Site VPN, Virtual Private Gateway & Customer Gateway**

Site to Site VPN은 AWS와 기업의 데이터 센터를 연결하기 위한 기술이다.

Site-to-Site VPN을 이용해 기업 데이터 센터를 연결하기 위해서는

첫번째로 가상 프라이빗 게이트웨이(VGW)가 필요하다

VFW는 AWS 측 VPN 연결의 VPN 연결기이다. VGW는 사이트 간 VPN 연결을 생성하려는 VPC에 생성되고 연결된다.

ASN(Autonomous System Number) 번호를 아록 있다면 이를 사용자 정의할 수 있다.

둘째로 고객 게이트웨이(CGW)는 데이터 센터 측의 실제 소프트웨어 애플리케이션 또는 물리적 디바이스이다.

AWS에서 테스트한 많은 디바이스가 있어 [목록](https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html#DevicesTested)을 살펴볼 수 있다.

**Site-to-Site VPN Connections**

Site to Site 연결을 설정하려면 고객 게이트웨이가 있는 기업 데이터 센터와 VGW가 있는 VPC가 있으면 된다.

온프레미스 고객 게이트웨이 디바이스를 어떤 IP 주소를 사용하여 설정해야 하는가?

고객 게이트웨이가 공개되어 있다면 고객 게이트웨이 디바이스의 공인 인터넷 라우팅 가능한 IP 주소를 사용하면 된다. 그러면 VGW와 CGW 간 연결이 해당 CGW의 Public IP를 통해 설정된다.

고객 게이트웨이가 사설일 수도 있으며, 사설 IP를 가질 수도 있다.
이경우 일반적으로 NAT traversal(NAT-T)가 활성화된 NAT 디바이스 뒤에 있다. 그러면 해당 NAT 디바이스에 Public IP가 있으므로, CGW에 사용해야 할 IP 주소는 NAT 디바이스의 Public IP이다.

시험에 나올 수 있는 내용은 VPC 내 서브넷에서 Route Propagation을 설정하지 않으면 VGW 연결이 작동하지 않는다.
그리고 온프레미스에서 AWS의 EC2 인스턴스에 ping을 보내려면 보안 그룹의 인바운드에서 ICMP 프로토콜을 허용해야 한다. 그렇지 않으면 연결이 작동하지 않는다.

마지막으로 알아야 할 한 가지는 AWS VPN CloudHub이다.

VGW가 있는 VPC와 각각 자체 고객 게이트웨이가 있는 여러 고객 네트워크, 여러 데이터 센터가 있다는 개념이다.

CloudHub는 다중 VPN 연결을 사용해 사이트 간의 안전한 통신을 제공하기 위한 것이다.
이는 서로 다른 위치 간의 기본 또는 보조 네트워크 연결을 위한 저렴한 허브-앤-스포크 모델이지만 VPN만 사용한다.

따라서 VPC 내의 단일 VGW와 CGW 간에 사이트 간 VPN을 설정하게 된다.

설정 방법은 동일한 VGW에 여러 Site to Site VPN 연결을 설정하고, 동적 라우팅을 활성화한 후 라우팅 테이블을 구성하면 된다.


## **[SAA] Direct Connect & Direct Connect Gateway**

Direct Connect는 DX라고도 불리며 원격 네트워크에서 VPC로의 전용 개인 연결을 제공한다.

Dedicated Connection을 설정해야하고, Direct Connect Location을 사용해야 한다.
또한 온프레미스 데이터 센터와 AWS 간 연결을 위해 VPC 측에 VGW를 설정해야 한다.

동일한 연결에서 S3와 같은 공용 리소스와 EC2 인스턴스와 같은 프라이빗 리소스에 모두 액세스할 수 있다.
S3와 같은 공용 리소스는 Public VIF EC2와 같은 프라이빗 리소스는 Private VIF를 사용한다.

Direct Connect의 사용 사례
- 대역폭 처리량이 증가하므로 대규모 데이터 세트 작업 시 Public 인터넷을 통하지 않아 속도가 빨라진다.
- Private한 connect를 사용하므로 비용이 절감된다.
- Public 인터넷 사용 시 연결 문제가 있다면 Dircet Connect를 사용하면 Private 연결이므로 더 일관된 네트워크 환경을 구현할 수 있다.
- 실시간(real-time) 데이터 피드를 사용하는 애플리케이션에 특히 도움이 된다.
- 온프레미스 데이터 센터와 클라우드 간 연결이 지원되므로 하이브리드 환경을 지원한다.

IPv4와 IPv6 를 모두 지원한다.

Direct Connect는 아래와 같은 다이어 그램으로 구성된다.

Region 안의 VPC 안의 VGW - AWS Direct Connect Location 안에 AWS Direct Connect Endpoint(AWS의 Cage) - AWS Direct Connect Location 안에 Customer or partner router(Customer or partner Cage) - Customer Network 안에 Customer router/firewall

이 다이어 그램에서는 Private VIF를 사용하는 경우와 Public VIF를 사용하는 경우가 있다.
Private VIF를 통해 EC2 인스턴스가 있는 프라이빗 서브넷에 액세스할 수 있으며, Public VIF의 경우 Amazon Glacier, Amazon S3와 같은 AWS 내 Public 서비스에 연결할 수 있다.

Private 설정의 경우 수동으로 연결을 설정해야 하며, 1개월이 소요될 수 있지만 Public 인터넷을 통하지 않고 전체가 프라이빗하게 연결된다.

Public의 경우 Private과 동일한 경로를 거치지만 VGW에 연결되지 않고 AWS에 직접 연결된다.


그림으로는 자세히는 [링크](https://docs.aws.amazon.com/ko_kr/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html)에서 확인하면 된다.



다른 리전의 하나 이상의 VPC에 연결하려면 Direct Connect 게이트웨이를 사용해야 한다.

Private VIF를 이용해서 Direct Connect Gateway와 VPC 여러 개를 연결해주면 된다.

Direct Connect의 연결 유형
- Dedicated Connections: 1,10 또는 100Gbps 대역폭 용량이고, 전용 물리적 이더넷 포트를 제공한다.
  - 설정하기 위해서는 먼저 AWS에 요청을 해야 하고, AWS Direct Connect 파트너사에 의해 완료된다.
- Hosted Connections: 50M, 500M, 10G bps 까지 다양한 속도가 있다.
  - 동일하게 AWS Direct Connect 파트너사를 통해 연결을 요청한다.
  - 필요에 따라 용량을 추가하거나 제거할 수 있어 전용 연결보다 유연하다.
  - 특정 파트너사를 선택할 경우 1,2,5,10 Gbps를 사용할 수 있다.
- 전용 또는 호스팅 연결을 설정하려면 대개 새 연결 설정에 1개월 이상의 시간이 소요된다.

시험에서는 1주일 내에 데이터를 빠르게 전송해야한다는 문제가 나올 수 있으며, 이 경우 Direct Connect는 해당 사항이 없다.

Direct Connect에는 암호화가 없다. 데이터 전송은 암호화되지 않지만 Private 연결이므로 보안은 유지된다.

암호화가 필요하다면 VPN과 함께 Direct Connect를 설정하여 IPSec 암호화 Private 연결을 제공할 수 있다.

설정 시 Direct Connect Location을 받은 후 연결에 VPN 연결을 설정하여 Direct Connect에 암호화를 추가하면 기업 데이터 센터와 AWS 간 모든 트래픽이 암호화된다.


Direct Connect에 대한 Resiliency 문제가 나올 수 있다.

복원력을 위한 두 가지 모드와 아키텍처가 있으며 둘 다 알아야 한다.

중요 워크로드에 대한 높은 복원력을 위해 여러 Direct Connect를 설정하거나,

두 개의 기업 데이터 센터와 두 개의 서로 다른 Direct Connect Location을 사용해 이중화를 제공한다.

[링크](https://aws.amazon.com/ko/directconnect/resiliency-recommendation/) 에서 High Resiliency와 Maximum Resiliency를 참고하면 된다.

## **[SAA] Site to Site VPN as a backup to Direct Connect**

시험에서 다룰 수 있는 간단한 아키텍쳐

기업 데이터 센터가 DX를 통해 VPC에 연결되어 있고, 이것이 주요 연결 방식이며 비용이 많이 든다.

때때로 DX 연결에 문제가 생길 수 있다. VPC로 인터넷 연결이 전혀 없게 되는 것은 바람직 하지 않고, DX를 보조 연결로 사용할 수 있지만, 그것 또한 비용이 많이 든다.

백업 연결로 Site-to-Site VPN 연결을 설정하고, 주 연결에 장애가 발생하면 VPN이 작동하도록 설정할 수 있다.

공용 인터넷을 통해 연결되므로 공용 인터넷이 언제나 접속 가능하다면 좀 더 안정적일 수 있다.

[다이어그램](https://docs.aws.amazon.com/ko_kr/whitepapers/latest/aws-vpc-connectivity-options/images/aws-direct-connect-and-aws-transit-gateway-and-vpn-with-transit-vif.png)

## **[SAA] AWS PrivateLink - VPC Endpoint Services**

VPC 내 서비스를 다른 VPC에 노출하는 방법은 여러 개 있다.
1.  Public으로 노출하는 것.
  - 이 경우 인터넷을 통해 트래픽이 이동하므로 접근 관리가 어렵다.
  - 공용 인터넷을 통해 통신할 수 있지만 최적화되지 않고, 신뢰성이 낮다.
2.  VPC 피어링 사용
  - 하나의 VPC를 여러 고객 VPC에 연결해야 한다면 모든 VPC 간에 피어링 연결을 설정해야 하므로 관리가 어렵다.
  - VPC 피어링 연결을 설정하면 한 VPC의 전체 네트워크가 다른 VPC에 열리게 되지만 실제로는 특정 애플리케이션 서비스만 외부에 노출하고 싶을 것이다.

위 방법들을 개선한 방법이 바로 AWS PrivateLink 또는 VPC Endpoint 서비스이다.

서비스를 수천 개의 VPC에 노출하려면 PrivateLink를 사용해야 한다.
PrivateLink는 VPC 피어링, 인터넷 게이트웨이, NAT, 라우팅 테이블이 필요 없다.

작동 방식은 다음과 같다.
서비스 VPC에 애플리케이션 서비스가 있고, 고객 VPC에 소비자 애플리케이션이 있다.

서비스를 노출하려면 네트워크 로드 밸런서와 ENI 또는 Gateway 로드 밸런서가 필요하다.
네트워크 로드 밸런서가 가장 일반적이며, 네트워크 로드 밸런서가 애플리케이션 서비스를 노출한다.

고객 VPC 쪽에서는 ENI를 생성하고, 이 ENI가 PrivateLink를 통해 네트워크 로드 밸런서에 연결된다.

모든 것이 AWS Private 네트워크를 통해 이뤄진다.

NLB와 ENI간 연결을 설정할 때 VPC 피어링을 설정할 필요가 없다는 것이 PrivateLink의 강력한 개념이다.

NLB가 여러 가용성 영역에 있다면 ENI도 여러 영역에 있어야 하며, 이렇게 하면 내결함성 솔루션이 된다.

ECS와 함께 PrivateLink를 설정할 수 있다.
여러 개의 태스크가 있는 ECS 서비스가 ALB에 노출되어 있다고 가정했을 때, 이를 노출하려면 NLB가 필요하다.

ALB를 NLB의 대상으로 연결하고, PrivateLink를 NLB에 직접 연결할 수 있어서 다른 VPC의 경우 ENI와 PrivateLink를 직접적으로 연결하고, 기업 데이터 센터의 경우 Direct Connect나 VPN 연결과 같은 Private 연결을 사용할 수 있다.



## **[SAA] Transit Gateway**

일반적인 네트워크 토폴로지는 많은 VPC가 있고 서로 피어링 하고, 일부 VPN 연결과 DX를 설정하고 등등 네트워크 토폴로지가 꽤 복잡해질 수 있다.

이러한 문제를 해결하기 위해 AWS는 Transit Gateway를 도입했다.
이를 통해 수천 개의 VPC, 온프레미스 데이터 센터, Site-to-Site VPN, Direct Connect 등이 Hub-and-Spoke Star 형태로 전이적인 피어링 연결을 구축할 수 있다.

중앙에 Transit Gateway를 두고 여러 VPC가 Transit Gateway에 연결되어 있는 다이어그램이 있다. 이렇게 구성하면 VPC 간 피어링이 필요 없다. VPC들이 Transit Gateway를 통해 전이적으로 연결되어 있기 때문이다.

또한 Direct Connect 게이트웨이를 Transit Gateway에 연결해 Direct Connect 연결을 다양한 VPC에 바로 연결할 수 있다.

Site-to-Site VPN을 선호한다면 Customer Gateway와 VPN 연결을 Transit Gateway에 연결할 수 있다.

Transit Gateway는 리전 리소스이며 교차 리전에서 작동하고, Resource Access Manager(RAM)을 사용해 여러 계정 간 공유가 가능하다. 리전 간에도 Transit Gateway 피어링이 가능하다.

어떤 VPC가 서로 통신할 수 있는지 정의하려면 Transit Gateway의 라우팅 테이블을 생성해 VPC 간 통신과 액세스 등을 제한해야 한다. 이렇게 하면 Transit Gateway 내 모든 트래픽 라우팅을 완전히 제어해 네트워크 보안을 강화할 수 있다.

Transit Gateway는 Direct Connect 게이트웨이와 VPN 연결을 지원하며, AWS에서 유일하게 IP 멀티캐스트를 지원하는 서비스이다.
시험에서 IP 멀티캐스트가 나오면 Transit Gateway를 사용해야 한다는 것을 기억하면 좋다.

또한 Transit Gateway는 ECMP(Equal-Cost Multi-Path Routing)를 사용해 Site-to-Site VPN 연결 대역폭을 높일 수 있다.
ECMP는 패킷을 다중 최적 경로로 전달할 수있는 라우팅 전략이다. Site-to-Site VPN을 사용해 AWS 연결 대역폭을 늘리는 데 사용된다.

Site-to-Site VPN을 설정하면 실제로는 순방향과 역방향의 두 개 터널이 생긴다. Transit Gateway를 사용하면 두 개의 터널이 하나의 연결로 사용된다. Transit Gateway를 사용하면 두 개의 터널을 동시에 사용할 수 있기 때문에 다이어그램에서는 두 개의 선으로 표시되는 것으로 보인다.

결국 Transit Gateway를 사용하면 여러 개의 Site-to-Site VPN 연결을 Transit Gateway에 추가할 수 있고, 추가할 수록 2개의 터널이 늘어나는 것이다.

이렇게 Site-to-Site VPN 터널이 늘어나면 기업 데이터 센터를 VPC에 직접 연결했을 때보다 연결 대역폭이 늘어나게 된다.

VPC의 VGW에 VPN 연결을 하면 하나의 터널로 하나의 VPC 연결만 가능하고 최대 처리량은 1.25Gbps로 제한된다.

반면 Transit Gateway에 VPN 연결을 하면 하나의 Site-to-Site VPN 연결로 여러 VPC에 연결할 수 있다. ECMP 전략 덕분에 하나의 Site-to-Site VPN 연결로 2.5Gbps의 처리량을 얻을 수 있다.

Transit Gateway에 Site-to-Site VPN 연결을 2~3개 더 추가하면 ECMP를 통해 처리량을 2배 또는 3배까지 높일 수 있다.


Transit Gateway를 사용하면 Direct Connect 연결을 여러 계정 간에 공유할 수 있다.

방법은 기업 데이터 센터와 Direct Connect Location 사이에 Direct Connect Connection을 설정하고, 두 개의 다른 계정에 Transit Gateway를 설정한다.

그 다음 Direct Connect Location을 Direct Connect 게이트웨이에 연결하고 그 게이트웨이를 Transit Gateway에 연결한다.

정확한 다이어그램은 아니지만 유사한 그림은 [링크](https://docs.aws.amazon.com/ko_kr/vpc/latest/tgw/images/direct-connect-tgw.png)에서 확인할 수 있다.

## **[SAA] VPC Traffic Mirroring**

VPC Traffic Mirroring은 VPC 내의 네트워크 트래픽을 비침투적인 방식으로 캡처하고 검사하는 것이다.

이를 위해 트래픽을 우리가 관리하는 보안 어플라이언스로 라우팅하고자 한다.

먼저 캡처할 소스 ENI를 정의하고 트래픽을 어디로 보낼지 대상을 정한다. 대상은 우리의 ENI 또는 네트워크 로드 밸런서 등이 될 수 있다.

예를 들어 EC2 인스턴스가 인터넷에 접속하고 있고, 외부에서도 접속되고 있어서 ENI를 통해 들어오고 나가는 트래픽이 많은데, 이 트래픽을 분석하고 싶다.

그래서 먼저 NLB를 설정하고 보안 소프트웨어가 설치된 EC2 인스턴스의 ASG를 만들고 소스 A의 기능을 방해하지 않고 소스 A에서 나가는 모든 트래픽을 캡쳐하고자 한다.

이를 위해 VPC 트래픽 미러링을 설정하고, 선택적으로 필터를 적용하여 일부 정보만 얻을 수 있다. 

트래픽 미러링 기능을 사용하면 소스 A의 ENI로 송신되는 트래픽이 NLB로도 복제되어 전송된다.

소스 A인 EC2 인스턴스는 정상 작동하고 트래픽 미러링 사실을 모르지만, 트래픽은 NLB로 미러링 된다. 이렇게 해서 NLB에서 트래픽 자체를 분석할 수 있다.

꼭 단일 소스만 적용할 수 있는 것은 아니고 여러 소스에 적용 가능하다.

이 기능을 사용하려면 소스와 대상이 동일한 VPC 또는 VPC 피어링이 활성화된 다른 VPC에 있어야 한다.

VPC 트래픽 미러링의 사용 사례는 콘텐츠 검사, 위협 모니터링, 네트워킹 관점에서의 문제 해결 등이 있다.

## **[SAA] IPv6 for VPC**

IPv4는 설계 당시 43억 개의 주소를 제공하도록 만들어졌다.

IPv4는 곧 고갈될 것이라고 예상되며, 그래서 나온게 IPv6이다.

IPv6는 3.4 X 10^38 개의 고유한 IP 주소를 제공하도록 설계되었다.

AWS에서 모든 IPv6는 공인이며 인터넷 라우팅이 가능하다.

형식은 x.x.x.x.x.x.x.x 이며 x 는 0000부터 ffff 사이의 16진수이다.

VPC는 IPv6 지원을 활성화할 수 있고, VPC와 서브넷에 대해 IPv4는 절대 비활성화할 수 없다.

IPv6 공인 IP를 사용해 이중 스택 모드로 작동하도록 설정할 수 있다.
VPC에서 시작된 EC2 인스턴스는 최소한 프라이빗 내부 IPv4와 공인 IPv6 주소를 받게되며, IPv4 또는 IPv6를 통해 인터넷 게이트웨이로 인터넷에 접속할 수 있다.

EC2 인스턴스에 IPv6 프라이빗 IP가 있다고 했을 때 인터넷에 접속하려면 인터넷 게이트웨이를 통해야 한다. 인터넷 게이트웨이는 IPv4와 IPv6 모두에 연결성을 제공해야 한다.

IPv6 활성화 VPC에서 EC2 인스턴스를 시작할 수 없다면 서브넷에 사용 가능한 IPv4 주소가 없기 때문에 서브넷에 IPv4 CIDR을 추가하면 된다.

## **[SAA] Egress Only Internet Gateway**

Egress Only Internet Gateway은 IPv6 트래픽에만 사용됨.
IPv6 버전의 NAT 게이트웨이와 유사하다.

NAT 게이트웨이가 IPv4 용이라면 Egress Only Internet Gateway는 IPv6 용이다.

이 게이트웨이는 VPC 내 인스턴스가 IPv6를 통해 아웃바운드 연결을 할 수 있게 해주지만, 인터넷에서 IPv6 연결을 인스턴스에 초기화하는 것은 방지한다. 이를 위해서는 라우팅 테이블을 업데이트 해야 함

라우팅 테이블에 등록할 때는 ::/0 등으로 Egress Only Internet Gateway를 타겟으로 하는 IPv6 트래픽을 나타내도록 해야한다.

## **[SAA] Networking Costs in AWS**

AWS에서 기가 바이트 당 네트워킹 비용(미국 지역 기준)에 대해 알아보자

- 외부에서 EC2 인스턴스로 들어오는 트래픽은 무료
- 같은 AZ에 EC2 인스턴스끼리 프라이빗 IP를 사용하여 통신하는 경우 무료
- 다른 AZ에 EC2 인스턴스끼리 통신하려면 Public IP 또는 EIP를 사용해야 하는데, 이 경우 0.02$ 부과
- 다른 AZ에 EC2 인스턴스끼리 Private IP를 사용하는 경우 0.01$ 부과. 두 AZ 간 연결에 내부 AWS 네트워크를 사용해 공인 IP를 사용하는 것보다 절반 가격임
- 인스턴스 간 통신 속도를 높이고 비용을 절감하려면 가능한 Private IP를 사용하는 것이 좋다.
- 리전 간 트래픽은 기가 바이트 당 0.02$ 부과된다.

위 사실들로 몇 가지 핵심 사항이 있다.
1.  비용 절감과 네트워크 성능 향상을 위해서는 가능한 공인 IP 대신 Private IP를 사용해야 한다.
2.  동일 리전 내 AZ 간 인스턴스 통신에는 공인 IP를 사용하지 않는 것이 좋다.
3.  컴퓨팅 작업을 수행하고 EC2 인스턴스 간 통신이 많이 필요한 클러스터가 있을 경우, 최대 비용 절감을 위해 동일 AZ를 사용하는 것이 좋다.

읽기 전용 복제본의 경우가 있는데, 최소 비용으로 하려면 동일한 AZ에 생성해야하고, 다른 AZ에 복제본을 생성하는 경우 가용성은 보장되지만 Primary 데이터베이스와 데이터 전송에 대해 기가 바이트 당 0.01$가 부과된다.

Egress 트래픽은 AWS에서 외부로 나가는 아웃바운드 트래픽이고, Ingress 트래픽은 외부에서 AWS로 들어오는 인바운드 트래픽이다. Egress의 경우 비용이 발생한다.

Egress는 온프레미스에 전송하는 것도 동일하다. 예를 들어 AWS에서 온프레미스로 100MB 데이터를 전송하고 온프레미스의 애플리케이션이 사용자에게 50KB의 쿼리 결과를 반환한다고 했을 때 송신 트래픽이 매우 크고 비용이 높아지게 돼 네트워크 비용을 최소화하려면 애플리케이션을 클라우드로 옮기는 것이 비용을 최소화하는 방법이다.

또한 송신 네트워크 비용을 최소화하려면 Direct Connect를 사용할 때 동일한 AWS 리전에 있는 Direct Connect Location을 선택해야 한다.

S3 데이터 전송 요금의 경우
- S3 버킷으로 데이터를 전송하는 것은 수신 트래픽이므로 무료이다.
- S3에서 인터넷을 통해 우리 컴퓨터로 데이터를 다운로드하면 기가 바이트 당 0.09 달러의 송신 트래픽 비용이 부과된다.
- S3 Transfer Acceleration를 사용해 전송 속도를 50~500% 향상 시키려면 데이터 전송 요금 외에 기가바이트 당 0.04~0.08$의 추가 비용이 발생한다.
- S3에서 CloudFront로의 데이터 전송은 무료이다. S3 버킷 앞에 CloudFront 배포를 설정하면 S3와 CloudFront 간 데이터 전송이 무료이다.
- CloudFront에서 인터넷으로의 전송에는 기가바이트 당 0.085달러의 비용이 발생하며, S3보다 약간 저렴하다. 캐싱 기능을 통해 데이터 액세스 대기 시간을 줄이고 요청 시 비용을 절감할 수 있다.
- S3 버킷에 요청을 보내면 요청에 대한 비용을 지불해야 한다. CloudFront로 요청을 보내는 것은 훨씬 저렴하고 약 7배 정도 비용을 절감할 수 있기 때문에 사용 사례가 맞는다면 S3 버킷 앞에 CloudFront를 사용해 비용을 많이 절감할 수 있다.

S3 버킷에 대한 교차 리전 복제를 수행하면 기가 바이트당 0.02$ 비용이 부과된다.

NAT 게이트웨이 비용은 시간 당 0.045$ 이며, NAT 게이트웨이를 통과하는 데이터에 0.045$/GB 그리고 VPC 내부 인스턴스에서 S3로 데이터를 송신하는 경우 다른 리전인 경우에는 0.09$/GB 같은 리전의 경우 무료이다.

VPC 엔드포인트를 설정해 S3 버킷의 데이터에 프라이빗으로 접근하는 경우 엔드포인트를 사용하는 비용은 따로 없고 동일 리전 내 S3 버킷으로 전송되는 데이터에 대해 0.01$/GB만 지불하면 된다.

NAT 게이트웨이 대신 VPC 엔드포인트를 사용하면 비용을 상당히 절감할 수 있다. 시험에서 이 부분을 다룰 수 있다.

https://aws.amazon.com/ko/blogs/networking-and-content-delivery/exploring-data-transfer-costs-for-classic-and-application-load-balancers/

## **[SAA] Network Firewall**

NACL, Security Group, WAF, Shield 등의 네트워크 보호 방법이 있었는데 AWS Firewall Manager를 사용하면 여러 계정에 걸쳐 WAF, Shield 등의 규칙을 통합 관리할 수 있다.

AWS Firewall Manager은 전체 VPC를 방화벽으로 보호하는 데 상요된다. VPC 주변에 방화벽이 배치되어 레이어 3에서 레이어 7까지 모든 종류의 트래픽을 모든 방향에서 검사할 수 있다. VPC 간 트래픽, 인터넷 아웃바운드/인바운드, Direct Connect 및 Site-to-Site VPN 연결로부터의 트래픽까지 전부 보호한다.

Rule을 정의하여 모든 트래픽을 제어할 수 있다.
Network Firewall은 내부적으로 AWS Gateway Load Balancer를 사용하지만, 트래픽 검사를 위해 타사 어플라이언스를 설치할 필요 없이 AWS 자체 어플라이언스로 관리된다.

방화벽에 대한 규칙을 직접 설정할 수 있으며, AWS Firewall Manager 서비스를 통해 여러 계정과 VPC에 걸쳐 중앙 집중식으로 관리할 수 있다.

Network Firewall을 사용하면 모든 네트워크 트래픽에 대해 세밀한 제어가 가능하다.
- VPC 수준에서 수천 개의 규칙을 지원
- IP와 포트로 필터링할 수 있고 수만 개의 IP가 가능
- 프로토콜 별로 필터링할 수 있음. 예를 들어 SMB 프로토콜의 아웃바운드 통신을 비활성화할 수 있음
- 도메인 수준에서 필터링하여 우리 VPC에서 *.mycorp.com이나 허용된 타사 소프트웨어 저장소로만 아웃바운드 트래픽을 허용할 수 있다.
- 정규 표현식을 사용한 일반 패턴 일치도 가능하다.

트래픽을 Allow, Drop 하거나 규칙과 매칭되는 트래픽에 대해 알람을 받도록 설정할 수 있다.

Gateway Load Balancer와 마찬가지로 능동적인 트래픽 검사와 침입 방지 기능도 AWS에서 모두 관리한다.

규칙 일치 내역은 Amazon S3, CloudWatch Logs, Kinesis Data Firehose로 전송되어 분석할 수 있다.

Network Firewall은 VPC 수준에서 작동하는 방화벽이며, 트래픽 필터링과 흐름 검사가 가능하다는 점을 기억하면 된다.



## **[CCP] X-Ray**

X-Ray에 대해 알아보자

기본적으로 많은 사람들이 프로덕션 환경에서 디버깅을 수행한다.

애플리케이션이 배포된 이후에는 기존 방식으로는 로컬에서 테스트한 다음 log statement를 곳곳에 추가하고, 로그를 확인하며, 프로덕션에 재배포한 후 문제를 찾아내느 식이다.

문제는 서로 다른 서비스와 애플리케이션에서 로그가 발생하므로 로그 분석이 매우 어렵다는 점이다. 모든 로그를 결합해야하기 때문이다.

하나의 거대한 모놀리식 애플리케이션이라면 디버깅이 비교적 쉽지만, 분산 서비스들이 SQS 큐 또는 SNS Topic을 통해 연결되어 있고 분리되어 있다면 시스템 내부에서 발생하는 일을 추적하고 파악하기가 매우 어려워진다.

전체 아키텍쳐에 대한 통합된 뷰가 없기 때문이다.

위와 같은 문제를 해결하기 위해 X-Ray를 사용하면 된다.
X-Ray는 애플리케이션의 추적 및 시각적 분석이 가능해진다.

X-Ray를 각 서비스에서 활성화하면 각 서비스에서 발생하는 모든 상황을 완벽하게 파악할 수 있다.
서비스가 실패하는 지점, 성능, 특정 요청이 잘못된 경우 X-Ray 콘솔에서 직접 시각화할 수 있다.

X-Ray의 장점은
- 병목 현상을 통한 성능 문제 해결
- 마이크로서비스 아키텍쳐의 종속성 이해가 가능함
- Tracing을 통해 서비스 이슈를 정확히 찾아낸다.
- 특정 요청의 동작을 검토하여 오류와 예외를 찾을 수 있다.
- 모든 요청에 시간 내에 응답하는지 등의 SLA를 충족하는지
- 쓰로틀링이 발생하는 지점과 서비스를 파악할 수 있고
- 어떤 사용자가 이러한 중단 상황의 영향을 받는지 알수 있다.

X-Ray는 분산 추적, 문제 해결, 서비스 그래프 시각화가 필요한 경우 매우 유용하다.

## **AWS Amplify**

Amplify는 핵심적으로 웹 및 모바일 애플리케이션 개발 도구이다.

Amplify를 사용하면 AWS의 다양한 스택을 한곳에 통합해 웹 및 모바일 애플리케이션을 구축할 수 있다.

먼저 백엔드를 만들기 위해 Amplify CLI를 사용해 Amplify 백엔드를 만든다.

이 백엔드는 내부적으로 우리가 잘 아는 AWS의 많은 리소스를 사용한다.
S3는 데이터 스토리지로, Amazon Cognito는 인증으로, AppSync는 API로, API Gateay는 API로, SageMaker는 머신 러닝으로, Lex는 텍스트 감지로, Lambda는 함수 데이터 서비스로, DynamoDB는 데이터베이스로 활용된다.

Amplify 덕분에 인증, 스토리지, REST API 또는 GraphQL API, CI/CD, Pub/Sub, 분석, AI/ML 예측, 모니터링 등을 한 곳에서 구성할 수 있다.

그 다음 GitHub, AWS의 CodeCommit, Bitbucket, GitLab 등 어디에서나 코드를 가져오거나, 직접 업로드해 코드를 연결한다.

이처럼 Amplify 내에서 백엔드 서비스를 모두 통합할 수 있다.

그 후 Amplify 프런트엔드 라이브러리를 추가하여 Amplify 백엔드에 연결한다. 

프런트엔드 라이브러리는 웹 애플리케이션, 모바일 애플리케이션뿐만 아니라 여러 프레임워크를 지원한다.

마지막으로, 준비가 되면 Amplify 콘솔을 사용하여 Amplify 자체와 Amazon CloudFront를 통해 웹 또는 모바일 애플리케이션을 배포한다.

복잡해보일 수 있지만, Amplify를 웹 및 모바일 애플리케이션을 위한 Elastic Beanstalk라고 생각하면 된다.

AWS의 다양한 기능을 하나의 플랫폼에서 통합하여 개발자가 웹 및 모바일 애플리케이션을 쉽게 만들 수 있도록 도와준다.