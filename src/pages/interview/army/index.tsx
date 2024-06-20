import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_18_2 from '@/public/images/new/interview/article_1_18_2.svg';
import ArmyIntroduceImg from '@/public/images/new/interview/clientintroduceimage/ArmyImage.png';

const headerContent: ClientHeader = {
  title: '육군본부',
  bgImage: 'bg-army-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_18_2 />,
  introduceDescription: (
    <p>
      육군본부는 대한민국 육군을 총괄하는 대한민국 국방부 산하의 기관입니다.
      <br />
      <br />
      육군본부는 경계업무 수행의 효율성 및 국가 안전관리를 위한 감시 인프라 운영을 위한 스마트 부대
      운영을 위한 핵심 인프라로 ABLESTACK을 적용하여 단순하면서도 높은 성능, 유연성의 효과를 거두고
      있습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[469px] py-8'>
      <Image src={ArmyIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      육군본부는 국가 안전 관리를 위한 감시 인프라 운영을 획기적인 스마트 부대로 변화하기 위한 핵심
      인프라 구축을 요청하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>단순한 인프라 구성을 통한 각 부대 레퍼런스 인프라 제시</li>
        <li>IoT 환경 대응을 위한 유연한 네트워크 구성</li>
        <li>다양한 스마트 애플리케이션 운영을 위한 높은 호환성 및 유연성 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      육군본부가 ABLESTACK HCI를 선택하여 얻은 내역은 아래와 같습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          HCI 구성을 통해 단순하게 스마트 인프라를 구성할 수 있어 전 부대로 스마트 부대 인프라를
          확산할 수 있는 참조 모델 제공 가능
        </li>
        <li>가상화를 이용한 유연한 네트워크 구성을 통해 복잡한 네트워크 패브릭 구성 단순화</li>
        <li>
          가상 머신 및 컨테이너를 이용해 다양한 스마트 애플리케이션 운영을 통해 인프라에 높은 유연성
          제공 가능
        </li>
      </ul>
    </div>
  ),
};

//육군본부
export default function ArmyPage() {
  return (
    <>
      <NextSeo
        title='육군본부 / HCI 구축사례'
        description='육군본부 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/army',
          images: [
            {
              url: '',
              alt: '육군본부 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
