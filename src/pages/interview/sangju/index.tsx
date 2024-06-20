import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_15_2 from '@/public/images/new/interview/article_1_15_2.svg';
import SangjuIntroduceImg from '@/public/images/new/interview/clientintroduceimage/SangjuImage.png';

const headerContent: ClientHeader = {
  title: '상주시청',
  bgImage: 'bg-sangju-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_15_2 />,
  introduceDescription: (
    <p>
      상주시는 전국 시군구 중 6위의 넓은 면적을 가진 지역으로, 스마트팜 혁신밸리로 지정된 농업
      기술이 발달된 혁신 도시 중 한 곳입니다.
      <br />
      <br />
      상주시청은 기존의 영상수집 서버를 ABLESTACK을 통해 가상화 하여 영상수집 인프라 상면을 절약하고
      있으며, ABLESTACK의 외장 스토리지 연결 기능을 이용해 10PB 급의 스토리지를 운영하고 있으며 그
      용량이 지속적으로 증가하고 있습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[901px] py-8'>
      <Image src={SangjuIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      상주시청은 계속 축적되는 영상 데이터로 인해 비례적으로 늘어나는 영상수집 인프라의 부담을
      줄이고자 아래의 요구사항을 전달하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>기존의 영상수집 서버의 가상화</li>
        <li>인프라의 상면 절약</li>
        <li>대용량 저장을 위한 외장 스토리지 연결</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      상주시청은 ABLESTACK HCI 도입을 통해 영상수집 서버를 가상화하고, 인프라를 집적하여 아래와 같은
      효과를 얻었습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>기존 인프라 대비 약 50% 이상 상면 절약 효과를 기대</li>
        <li>내장된 고가용성 제공을 통해 PB급의 안정적 영상 데이터 운영 환경 제공 가능</li>
      </ul>
    </div>
  ),
};

//상주시청
export default function SangjuPage() {
  return (
    <>
      <NextSeo
        title='상주시청 / HCI 구축사례'
        description='상주시청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/sangju',
          images: [
            {
              url: '',
              alt: '상주시청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
