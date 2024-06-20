import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_19_2 from '@/public/images/new/interview/article_1_19_2.svg';
import GbIntroduceImg from '@/public/images/new/interview/clientintroduceimage/GbImage.png';

const headerContent: ClientHeader = {
  title: '경상북도청',
  bgImage: 'bg-gb-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_19_2 />,
  introduceDescription: (
    <p>
      경상북도청은 대한민국에서 면적이 가장 넓은 구역인 경상북도의 도청으로, 지방자치행정을
      민주적이고 능률적으로 수행하고 지방을 균형있게 발전시키며, 대한민국을 민주적으로 발전시켜
      나가는것을 목적으로 합니다.
      <br />
      <br />
      경상북도청은 IoT 기반의 스마트시티 플랫폼과 관련된 행정 애플리케이션을 위한 인프라로
      ABLESTACK을 선택하여 운영 중으로 유연한 네트워크 구성 제공 및 단순한 인프라 패브릭의 효과를
      거두고 있습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[461px] py-8'>
      <Image src={GbIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      경상북도청은 기존 사용중인 스마트 행정 애플리케이션을 효율적으로 활용할 수 있는 요구사항을
      요청하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>지자체 인프라로써의 단순한 패브릭 구성</li>
        <li>IoT 인프라 데이터 수집을 위한 유연한 네트워크 구성</li>
        <li>다양한 형식의 애플리케이션 수용</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      경상북도청이 ABLESTACK을 선택하여 얻은 효과는 아래와 같습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          유연한 가상네트워크 제공으로 물리적인 네트워크 패브릭은 단순하면서도 복잡한 네트워크
          요구사항 수용
        </li>
        <li>
          가상머신 및 컨테이너를 모두 제공하여 어떠한 애플리케이션도 수용가능하여 효율적인 인프라
          운영 가능
        </li>
      </ul>
    </div>
  ),
};

//고령군청
export default function GbPage() {
  return (
    <>
      <NextSeo
        title='고령군청 / HCI 구축사례'
        description='고령군청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/gb',
          images: [
            {
              url: '',
              alt: '고령군청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
