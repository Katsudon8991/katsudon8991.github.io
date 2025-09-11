---
title: GitFlow & Trunk-based 전략
tag:
    - git
    - github
    - gitflow
    - trunk-based
    - colaboration
---

## 서론

github로 협업할 때 아무렇게나 commit하고, pr하고, branch 만들고... 하다가 git graph 확인해보면,

<div class="card mb-3">
    <img class="card-img-top" src="https://external-preview.redd.it/PTouvCCERQC0ryNztJEsdFOYHYc9GonhwY9NFAzDEO4.png?auto=webp&s=61b2ba4a1c47cb8ffb0128540b41e4135cc4592e"/>
    <div class="card-body bg-light">
        <div class="card-text">
            스파게티가 되버린 git graph
        </div>
    </div>
</div>

이런 모습이 되어 있는 것을 볼 수 있습니다.
이 경우 몇가지 문제가 발생하는데
* 프로젝트의 현재 상황을 한 눈에 확인하기 어렵습니다.
* 브랜치간 충돌이 발생했을 때, 우선하는 브랜치가 무엇인지 확인하기 어렵습니다.
* 문제가 발생하여 reset이 필요할 때, 언제의 commit으로 돌아갈 지 확인하기 어렵습니다.

그래서 개발 고수들은 협업 전략을 사용해서 상기된 문제들을 해결합니다. 많은 전략이 있지만, 대표적으로 GitFlow 전략과 Trunk-based 전략이 있습니다. 이 둘에 대해서 알아봅시다.

## 본론

### GitFlow 전략
이 전략은 크게 5개 역할을 가진 브랜치를 가집니다.

<div class="card mb-3">
    <img class="card-img-top" src="https://github.com/Katsudon8991/katsudon8991.github.io/blob/main/img/gitflow.PNG?raw=true"/>
    <div class="card-body bg-light">
        <div class="card-text">
            GitFlow 전략이 적용된 원격 저장소 브랜치
        </div>
    </div>
</div>

각 브랜치는 아래와 같은 의미를 가집니다.

* main : 현재 코드의 상태를 나타내는 브랜치
* develop : 신기능 개발을 위한 main 브랜치의 복사본
* feature : 신기능의 테스트를 위한 브랜치
* release : 출시 직전 테스트 브랜치
* hotfix : 현재 버전의 급한 버그를 수정하는 브랜치

GitFlow 전략은 안정적으로 버전별 배포가 가능하다는 장점을 가지고 있지만, 여러 단계의 배포 절차를 가지고 있기 때문에 CI/CD를 적용하기 어렵다는 단점이 있습니다.

CI/CD를 적용하기 위해서는 다른 전략을 사용해야 하는데, 대표격으로 Trunk-based 전략이 있습니다.

### Trunk-based 전략

<div class="card mb-3">
    <img class="card-img-top" src="https://github.com/Katsudon8991/katsudon8991.github.io/blob/main/img/trunk-based.PNG?raw=true"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Trunk-based 전략이 적용된 원격 저장소 브랜치
        </div>
    </div>
</div>

이 전략은 main 브랜치를 하나만(혹은, 배포를 위한 release 브랜치와 main브랜치 2개만) 살려두고, 새로운 기능이 필요하면 브랜치를 만들고 테스트 후 main브랜치에 병합하는 방법입니다.

이 전략을 사용할 경우 CI/CD를 적용하기 한결 쉽고, main브랜치 하나만 사용하기 때문에 관리하면 되는 장점이 있습니다. 그러나 새로운 기능에 문제가 있는데 main 브랜치에 병합할 경우 배포된 프로그램에 문제를 일으킬 수 있기 때문에 테스트를 많이, 자주 해야합니다.

## 결론
많은 회사에서 협업 시 위와 같은 전략을 사용하기 때문에, 취직 후 github와 같은 협업 도구 가이드라인을 파악해두면 좋습니다. 이러한 전략을 이해하는 것은 모든 전문 개발자에게 중요한 기술입니다.

### 참고자료 및 출처
* [(무료) 매우쉽게 알려주는 git & github](https://codingapple.com/course/git-and-github/)
* [Reddit - How do you navigate branch spaghetti?](https://www.reddit.com/r/git/comments/2yt9ox/how_do_you_navigate_branch_spaghetti/)