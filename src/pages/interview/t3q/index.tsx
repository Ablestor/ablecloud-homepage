import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_21_2 from '@/public/images/new/interview/article_1_21_2.svg';
import T3qIntroduceImg from '@/public/images/new/interview/clientintroduceimage/T3qImage.png';

const headerContent: ClientHeader = {
  title: '티쓰리큐',
  bgImage: 'bg-t3q-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clientImage: <Logo_Article_1_21_2 />,
  introduceDescription: (
    <p>
      티쓰리큐 주식회사는 대용량의 데이터 처리 및 실시간 지능형 분석 기술 적용을 위한
      ‘인공지능,빅데이터 통합 플랫폼’ 을 기반으로 데이터만 있다면 다양한 AI 서비스를 쉽게 구현하도록
      제공하는 기업입니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[446px] py-8'>
      <Image src={T3qIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      <ul className='list-disc pl-8'>
        <li>인프라 패브릭의 단순화</li>
        <li>신속한 인프라 배포 및 확장</li>
        <li>인공지능 및 문서중앙화 플랫폼 개발 환경 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      티쓰리큐는 인공지능/빅데이터 전문 기술회사로써 관련 플랫폼 연구개발을 위해 ABLESTACK을
      도입하여 인공지능기반의 문서중앙화 플랫폼을 연구개발하고 향 후 제품화를 기획하고 있습니다. 
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          ABLESTACK HCI를 기반으로 단순한 인프라 패브릭을 제공하여 개발 인프라가 단순화 되어
          효율적인 인프라 관리가 가능
        </li>
        <li>
          신속한 배포로 빠른 개발환경을 제공하고 확장성과 자동화를 통하여 기민한 제품 개발 환경을
          제공
        </li>
        <li>
          인공지능 기반의 문서중앙화 플랫폼이 에이블스택 아키텍처 위에 구성된 단일 어플라이언스 제품
          출시 기대
        </li>
      </ul>
    </div>
  ),
};

//티쓰리큐
export default function GoryeongPage() {
  return (
    <>
      <NextSeo
        title='티쓰리큐 / HCI 구축사례'
        description='티쓰리큐 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/t3q',
          images: [
            {
              url: '',
              alt: '티쓰리큐 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
