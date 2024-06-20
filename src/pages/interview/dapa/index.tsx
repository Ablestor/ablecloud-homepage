import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_17_2 from '@/public/images/new/interview/article_1_17_2.svg';
import DapaIntroduceImg from '@/public/images/new/interview/clientintroduceimage/DapaImage.png';

const headerContent: ClientHeader = {
  title: '방위사업청',
  bgImage: 'bg-dapa-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_17_2 />,
  introduceDescription: (
    <p>
      방위사업청은 방위력 개선사업, 군수물자 조달 및 방위산업 육성에 관한 사무를 관장하는 대한민국의
      중앙행정기관입니다.
      <br />
      <br />
      방위사업청은 원가관리 업무의 효율성을 높이기 위해 원가 정보를 분석하기 위한 빅데이터 플랫폼을3
      위한 인프라로 ABLESTACK을 사용하여 상면을 절약하고, 빅데이터 플랫폼을 효율적으로 운영하고
      있습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[521px] py-8'>
      <Image src={DapaIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      방위사업청은 빅데이터 플랫폼을 운영하기 위한 인프라를 구축하는 것을 포함한 아래의 요구사항을
      요청하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>빅데이터 플랫폼 운영</li>
        <li>오브젝트를 저장하기 위한 고성능 인프라</li>
        <li>국방 데이터 센터 클라우드 표준을 준수할 것</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      방위사업청는 최신 인프라 구성을 위해 ABLESTACK HCI를 선택하여 얻은 내역은 아래와 같습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>모비젠 빅데이터 플랫폼을 기반으로 하는 효율적인 빅데이터 인프라 환경 제공</li>
        <li>베어메탈 환경의 빅데이터 플랫폼에 비해 높은 상면 절약 및 관리 효율성 제공</li>
        <li>
          국방 데이터 센터 자원 관리 표준을 준수하여 효과적으로 인프라를 관리할 수 있는 환경 제공
        </li>
      </ul>
    </div>
  ),
};

//방위사업청
export default function DapaPage() {
  return (
    <>
      <NextSeo
        title='방위사업청 / HCI 구축사례'
        description='방위사업청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/dapa',
          images: [
            {
              url: '',
              alt: '방위사업청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
