# Overview

정리 부분만을 다룬 파일입니다.

SOA.md 파일보다 정확할 수 있으며, 강의 내용+AWS Docs 기반 재검증을 하려고 노력 했습니다. ~~검증이 안된 부분도 있습니다.~~

시험 화이팅 하세요

# 목차

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

인스턴스는 중지(Stop)와 종료(Terminate)가 있음

종료는 또한 종료 방지(Termination Protection) 설정을 할 수 있어서 인스턴스를 생성하거나 생성하고 나서 종료 방지 설정을 할 수 있음. 훨씬 안전함
AWS Console이나 CLI의 우발적인 종료 동작을 막아준다.

종료 설정이 되어 있어도 OS 내에서 shutdown 명령어를 내리게 되면 Terminate 된다.
`$ sudo shutdown` 하게 되면 Terminated 되기 때문에 주의해야 함
> init 0 또는 systemctl poweroff 명령어도 동일하다.

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

이러한 내용은 시험에서 2~3문제의 주요 내용일 수 있으므로 차이를 알아두는 것이 중요합니다.

SYSTEM status checks
시스템 상태 확인은 인스턴스가 실행 중인 AWS 시스템을 모니터링합니다.

기본 호스트에 문제가 있는 경우, 예를 들면:

- 네트워크 연결 손실
- 시스템 전원 손실
- 물리 호스트에서의 소프트웨어 문제
- 물리 호스트에서의 하드웨어 문제로 네트워크 접근성에 영향을 미침
- AWS가 호스트를 수정하기를 기다리거나, EC2 인스턴스를 새 호스트로 이동시킬 수 있음 = 인스턴스 중지 및 시작 (EBS로 백업된 경우)

INSTANCE status checks
인스턴스 상태 확인은 개별 인스턴스의 소프트웨어 및 네트워크 구성을 모니터링합니다.

문제의 예:

- 올바르지 않은 네트워킹 또는 시작 구성
- 메모리 부족
- 손상된 파일 시스템
- 호환되지 않는 커널
- 수정이 필요할 때는 직접 개입이 필요함
- EC2 인스턴스를 restart하거나, EC2 인스턴스 구성 변경

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
