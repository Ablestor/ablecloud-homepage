import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_14_2 from '@/public/images/new/interview/article_1_14_2.svg';
import YcgIntroduceImg from '@/public/images/new/interview/clientintroduceimage/YcgImage.png';

const headerContent: ClientHeader = {
  title: '합천군청',
  bgImage: 'bg-hc-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_14_2 />,
  introduceDescription: (
    <p>
      합천군은 합천군은 대한민국 경상남도 서북부에 있는 군으로, 세계문화유산인 장경판전과
      세계기록유산인 팔만대장경을 보관중인 해인사가 있는 지역입니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[452px] py-8'>
      <Image src={YcgIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      합천군청은 통합관제센터의 CCTV로 인해 생성되는 수 많은 영상 데이터의 저장방식 및 영상을
      실시간으로 모니터링할 수 있는 플랫폼을 유연하게 운영해야하는 이슈에 직면하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>전살실 상면 최소화</li>
        <li>신속하고 서비스 중단 없는 확장</li>
        <li>시스템에 대한 통합 모니터링</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      합천군청은 통합관제센터의 CCTV를 여러 기관과 실시간으로 연계하는 스마트 도시안정망 통합
      플랫폼에 대한 인프라 아키텍처를 ABLESTACK을 통한 HCI 인프라로 구성하여 운영하고 있습니다. 
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>최소한의 인프라 패브릭을 통한 상면 및 유지관리 비용 절감</li>
        <li>서비스 중단 없는 선형적인 확장을 통하여 서비스의 연속성 및 안정성 확보</li>
        <li>자체 제공되는 통합모니터링 도구(Wall)을 통하여 전체 시스템의 통합 모니터링</li>
        <li>자체 제공되는 고가용성을 통하여 스마트 도시전망 통합 플랫폼의 무중단 서비스 가능</li>
      </ul>
    </div>
  ),
};

//합천군청
export default function HcPage() {
  return (
    <>
      <NextSeo
        title='합천군청 / HCI 구축사례'
        description='합천군청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/goryeong',
          images: [
            {
              url: '',
              alt: '합천군청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
