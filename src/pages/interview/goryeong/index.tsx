import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_13_2 from '@/public/images/new/interview/article_1_13_2.svg';
import YcgIntroduceImg from '@/public/images/new/interview/clientintroduceimage/YcgImage.png';

const headerContent: ClientHeader = {
  title: '고령군청',
  bgImage: 'bg-goryeong-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_13_2 />,
  introduceDescription: (
    <p>
      대가야의 역사가 살아있는 고령군 다양한 역사문화와 아름다운 자연이 어우러진 곳으로, 경상북도에
      위치하고 있습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[488px] py-8'>
      <Image src={YcgIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      고령군청은 기존 운영중인 하드웨어를 교체하지 않고 인프라를 교체하길 원했습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>기존 하드웨어 교체 없이 설치</li>
        <li>최소한의 다운타임으로 서비스 이관</li>
        <li>안정성 및 편의성 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      고령군청은 기존 타사의 HCI 환경에서 운영되고 있던 인프라를 하드웨어는 변경 없이 ABLESTACK HCI
      인프라로 변경한 후 운영 중인 시스템을 마이그레이션 하여 향상되고 효율적인 인프라 환경에서
      자원을 운영하고 있습니다. 
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>별도 추가되는 하드웨어 비용 없이 구성하여 도입 비용 절감</li>
        <li>
          자체 보유중인 마이그레이션 솔루션을 통한 신속한 마이그레이션으로 서비스의 다운타임을
          최소화하여 대민 서비스 영향도 제로
        </li>
        <li>고가용성 및 사용자 친화적인 관리 UI/UX를 통해 고객 만족도 향상</li>
      </ul>
    </div>
  ),
};

//고령군청
export default function GoryeongPage() {
  return (
    <>
      <NextSeo
        title='고령군청 / HCI 구축사례'
        description='고령군청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/goryeong',
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
