import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_20_2 from '@/public/images/new/interview/article_1_20_2.svg';
import EkrIntroduceImg from '@/public/images/new/interview/clientintroduceimage/EkrImage.png';

const headerContent: ClientHeader = {
  title: '한국농어촌공사',
  bgImage: 'bg-ekr-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_20_2 />,
  introduceDescription: (
    <p>
      한국농어촌공사는 환경 친화적으로 농어촌 정비 사업과 농지 은행 사업을 시행하고 농업 기반 시설을
      종합 관리하며 농업인의 영농 규모 적정화를 촉진함으로써 농업 생산성의 증대 및 농어촌의 경제,
      사회적 발전에 이바지함을 목적으로 설립된 농림축산식품부 산하 위탁집행형 준정부기관입니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[437px] py-8'>
      <Image src={EkrIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      한국농어촌공사는 드론을 통한 데이터 수집을 진행하고 있으며, 그에 따른 요구사항은 아래와
      같습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>단순한 인프라 구조의 구축</li>
        <li>드론 운영 및 영상정보 수집을 위한 고효율 인프라</li>
        <li>재해 발생에 신속하게 대응하기 위한 재해 복구 환경 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      한국농어촌공사는 드론 운영 시스템 및 드론 영상 수집을 위해 ABLESTACK을 도입하여 인프라를
      구성/운영하고 있으며 별도의 재해복구  ABLESTACK 클러스터를 통해 운영시스템의 재해에 대비하고
      있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          드론 운영을 위한 다양한 애플리케이션을 빠르게 배포할 수 있는 단순한 아키텍처 제공으로 쉬운
          인프라 관리 환경 제공
        </li>
        <li>고효율, 고성능 아키텍처를 제공하여 사용자 서비스 만족도 향상</li>
        <li>가상머신 미러링을 통해 운영 시스템의 장애에도 빠르게 서비스 복구 가능</li>
      </ul>
    </div>
  ),
};

//한국농어촌공사
export default function EkrPage() {
  return (
    <>
      <NextSeo
        title='한국농어촌공사 / HCI 구축사례'
        description='한국농어촌공사 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/ekr',
          images: [
            {
              url: '',
              alt: '한국농어촌공사 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
