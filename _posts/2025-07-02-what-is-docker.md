---
title : docker 배우기 0강. docker란 무엇인가?
tag:
    - docker
    - Learn docker
    - Virtualization Technology
    - Service Distribution
    - Welcome Feedback
---

## 서론

<div class="card mb-3">
    <img class="card-img-top" src="https://www.docker.com/app/uploads/2023/08/logo-guide-logos-1.svg"/>
    <div class="card-body bg-light">
        <div class="card-text">
            사실상 업계 표준이 된 docker
        </div>
    </div>
</div>

내 컴퓨터에서 잘만 돌아가던 웹 서비스를 배포하기만 하면 오류가 발생한 경험이 있다. 이는 두 컴퓨터의 OS, 설치된 소프트웨어, 소프트웨어 버전, 하드웨어 환경 등이 서로 달라 완전히 동일한 소스코드라도 다른 컴퓨터에서 제대로 작동하지 않을 수 있다.

이 문제는 개발 환경을 100% 그대로 카피해서 서버에 배포하는 방법을 통해 해결할 수 있는데, 그중 가장 대표적인 도구로 docker가 있다. 이번 포스팅에서는 이 docker에 대해 알아보자.

## 본론

### 1. docker란 무엇인가?

> Linux container를 기반으로 만든 OS레벨 가상화 구현을 도와주는 프로그램

Linux에는 원래 container라고 부르는 가벼운 가상화 기술이 있는데, 소스코드와 그 종속을 패키징해서 서로 다른 컴퓨터 환경에서도 동일한 처리를 수행하는 것을 보장한다. 이 container를 좀 더 사용하기 쉽도록 도와주는 프로그램이 docker라고 할 수 있다.

### 2. docker의 원리

<div class="card mb-3">
    <img class="card-img-top" src="https://www.docker.com/app/uploads/2021/11/container-what-is-container-1110x961.png"/>
    <div class="card-body bg-light">
        <div class="card-text">
            docker와 container 구조 이미지
        </div>
    </div>
</div>

모든 container는 docker 위에서 실행된다. 이는 docker 아래에 전혀 다른 운영체제(OS), 하드웨어 시스템이 있더라도 내 컴퓨터의 container를 서버에 옮기기만 해도 동일하게 작동할 수 있다.

### 3. 가상머신과 Linux container의 차이

가상머신(대표적으로, VirtualBox)과 비교했을 때, 가상화 기술을 독립적으로 프로그램을 실행할 수 있다는 공통점을 지니지만 많은 차이가 있는데, 간단하게 정리하면 아래와 같은 차이가 있다.

| 특징     | 가상 머신 (VirtualBox)                    | Linux 컨테이너 (Docker)                            |
| ------ | ------------------------------------- | ---------------------------------------------- |
| 격리 수준  | 하드웨어 수준 (완전한 OS 격리)                   | OS 커널 수준 (사용자 공간 격리)                           |
| 커널 사용  | 각 VM마다 독립적인 게스트 OS 커널 사용              | 호스트 OS의 커널 공유                                  |
| 자원 소모  | 높음 (각 VM마다 독립적인 OS 부팅 및 자원 할당)        | 낮음 (커널 공유, 경량화된 사용자 공간)                        |
| 시작 시간  | 느림 (OS 부팅 시간 필요)                      | 빠름 (OS 부팅 과정 불필요)                              |
| 이미지 크기 | 기가바이트(GB) 단위 (OS 포함)                  | 메가바이트(MB) 단위 (애플리케이션과 종속성만 포함)                 |
| 오버헤드   | 높음 (하이퍼바이저 및 게스트 OS의 오버헤드)            | 낮음 (커널 직접 사용, 컨테이너 런타임 오버헤드)                   |
| 이식성    | 게스트 OS 이미지 기반으로 이식되지만, 자원 소모 많음       | 컨테이너 이미지 기반으로 매우 높은 이식성                        |
| 주요 용도  | 다양한 OS 환경 테스트, 레거시 시스템 운영, 보안이 중요한 환경 | 마이크로서비스, CI/CD, 개발 및 배포 환경 표준화, 애플리케이션 격리 및 확장 |

## 결론

docker의 등장으로 웹서비스 시장에서도 큰 변화가 있었다. 개발한 웹 서비스를 서버에 오류 없이 배포할 수 있게 되었고, container를 통해 커다란 프로그램을 잘게 쪼개는 기술인 MSA 기술이 만들어졌고, 심지어 클라우드 컴퓨팅 서비스 회사 자체에서 docker container만 배포해도 되는 서비스를 제공하기도 한다.

필자는 이번 docker 배우기 포스팅을 통해서 웹서비스를 쉽게 배포하는 방법을 배우고, 1년 전에 죽은 프로젝트를 재생하는 프로젝트를 진행할 계획이다. 이 글을 보는 독자 여러분도 docker 배우기 포스팅을 통해서 도움이 되길 바란다.

### 참고

* 메타코딩. 도커 입문 1강 - 개념.[YouTube](https://youtu.be/BivQIVzsiTM?si=R5IHde3-KE2dgRd9).2023
* 코딩 애플. 도커가 바꾼 개발 바닥.[YouTube](https://youtu.be/e0koWWAmXSk?si=imUwo0ciN9DUzlIH).2024
* [docker logo](https://www.docker.com/company/newsroom/media-resources/)
* [What is a container](https://www.docker.com/resources/what-container/)

### Out of record

사실상 처음 써보는 포스팅이라 틀린 정보가 들어 있을 수 있습니다. 문제나 오류를 발견하시면 doneson7@gmail.com으로 연락 주시면 감사하겠습니다. 좋은 하루 되세요.