import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_23_2 from '@/public/images/new/interview/article_1_23_2.svg';
import UscIntroduceImg from '@/public/images/new/interview/clientintroduceimage/UscImage.png';

const headerContent: ClientHeader = {
  title: '의성군청',
  bgImage: 'bg-usc-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_23_2 />,
  introduceDescription: (
    <p>
      도전과 혁신 능동적인 정신으로 고결한 역사를 지켜온 의성군청은 낙동강의 주요 지류 중 하나인
      위천이 흐르는 아름다운 농업 도시입니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[439px] py-8'>
      <Image src={UscIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      <ul className='list-disc pl-8'>
        <li>영상수집 서버 가상화</li>
        <li>상면 절약</li>
        <li>대용량 저장을 위한 외장 스토리지 연결</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      의성군청은 기존의 영상수집 서버를 ABLESTACK을 통해 가상화 하여 영상수집 인프라 상면을 절약하고
      있으며, ABLESTACK의 외장 스토리지 연결 기능을 이용해 PB 급의 스토리지를 운영하고 있으며 그
      용량이 지속적으로 증가하고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          영상수집 서버를 ABLESTACK HCI로 가상화 하고 인프라를 집적하여 기존 인프라 대비 약 50%의
          상면 절약 효과 기대
        </li>
        <li>내장된 고가용성 제공을 통해 PB 급의 안정적 영상 데이터 운영 환경 제공 가능</li>
      </ul>
    </div>
  ),
};

//의성군청
export default function UscPage() {
  return (
    <>
      <NextSeo
        title='의성군청 / HCI 구축사례'
        description='의성군청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/usc',
          images: [
            {
              url: '',
              alt: '의성군청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
