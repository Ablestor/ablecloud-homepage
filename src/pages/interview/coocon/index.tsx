import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_22_2 from '@/public/images/new/interview/article_1_22_2.svg';
import CooconIntroduceImg from '@/public/images/new/interview/clientintroduceimage/CooconImage.png';

const headerContent: ClientHeader = {
  title: '쿠콘',
  bgImage: 'bg-coocon-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_22_2 />,
  introduceDescription: (
    <p>
      쿠콘은 40여개 국가 2,500여개 기관의 금융·공공·실물 데이터를 250여개 API 상품으로 제공하고 있는
      글로벌 회사로, 디지털 혁신서비스를 위해 노력하고 있습니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[469px] py-8'>
      <Image src={CooconIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      <ul className='list-disc pl-8'>
        <li>뉴타닉스를 통해 사용하던 모든 기능을 제공하여 인프라 대체</li>
        <li>기존 인프라와 동등 이상의 성능 제공</li>
        <li>핀테크 서비스 특성 상 무중단 운영이 가능한 안정성 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      쿠콘은 핀테크 서비스를 위해 운영 중인 뉴타닉스 HCI를 ABLESTACK HCI로 교체하여 운영 중으로,
      구독형 외산 제품으로 인해 소요되는 높은 운영 비용을 영구 단일 라이선스를 제공하는
      ABLESTACK으로 교체해 운영 비용을 절감하고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          뉴타닉스 대체를 통해 고비용의 구독형 운영 환경을 탈피하고, 영구 단일 라이선스 인프라로
          교체함으로써 전반적인 운영 비용 감소
        </li>
        <li>
          고성능 제공 및 높은 안정성을 제공하여 서비스의 품질을 제고함으로써 시스템의 무중단 운영
          가능
        </li>
      </ul>
    </div>
  ),
};

//쿠콘
export default function CooconPage() {
  return (
    <>
      <NextSeo
        title='쿠콘 / HCI 구축사례'
        description='쿠콘 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/coocon',
          images: [
            {
              url: '',
              alt: '쿠콘 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
