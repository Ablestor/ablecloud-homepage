import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_16_2 from '@/public/images/new/interview/article_1_16_2.svg';
import KepriIntroduceImg from '@/public/images/new/interview/clientintroduceimage/KepriImage.png';

const headerContent: ClientHeader = {
  title: '한국전력공사',
  bgImage: 'bg-kepri-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_16_2 />,
  introduceDescription: (
    <p>
      한국전력공사는  대한민국의 전력공급을 위해 설립된 산업통상자원부 산하 시장형 공기업입니다.
      <br />
      <br />
      베어메탈로 구성되어 있는 노후화된 데스크톱 인프라를 HCI를 이용해 최신의 인프라로 구성하고
      상면을 절약하면서도 최종 사용자에게 높은 만족도의 사용자 경험을 제공하기 위해 ABLESTACK을
      선택하였습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[440px] py-8'>
      <Image src={KepriIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      한국전력공사는 노후화된 인프라 변경이 필요한 환경에서 다음과 같은 인프라 요구사항이
      있었습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>베어메탈 인프라를 HCI 인프라로 교체</li>
        <li>기존의 하이퍼바이저 (Citrix Hypervisor) 환경을 그대로 사용하길 원함</li>
        <li>상면 절약 필요</li>
        <li>높은 최종 사용자 경험 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      한국전력공사는 최신 인프라 구성을 위해 ABLESTACK HCI를 선택하여 얻은 내역은 아래와 같습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          국내 HCI 최초 Citrix Ready 인증을 받은 ABLESTACK 도입으로 기존의 애플리케이션 그대로 사용
          가능
        </li>
        <li>노후화된 베어메탈 인프라 교체를 통해 인프라 최신화 및 상면 절약 가능</li>
        <li>VM Read Cache 적용 등을 통해 높은 최종 사용자 경험 및 안정적 서비스 제공</li>
      </ul>
    </div>
  ),
};

//한국전력공사
export default function KepriPage() {
  return (
    <>
      <NextSeo
        title='한국전력공사 / HCI 구축사례'
        description='한국전력공사 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/kepri',
          images: [
            {
              url: '',
              alt: '한국전력공사 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
