import { ReactNode } from '@mdx-js/react/lib';

import Logo_Article_4_2 from '@/public/images/new/partner/article_4_2.svg';
import Logo_Article_4_5 from '@/public/images/new/partner/article_4_5.svg';
import Logo_Article_4_7 from '@/public/images/new/partner/article_4_7.svg';
import Logo_Article_4_9 from '@/public/images/new/partner/article_4_9.svg';
import Logo_Article_4_11 from '@/public/images/new/partner/article_4_11.svg';
import Logo_Article_4_12 from '@/public/images/new/partner/article_4_12.svg';
import Logo_Article_4_14 from '@/public/images/new/partner/article_4_14.svg';
import Logo_Article_4_17 from '@/public/images/new/partner/article_4_17.svg';
import Logo_Article_4_18 from '@/public/images/new/partner/article_4_18.svg';
import Logo_Article_4_19 from '@/public/images/new/partner/article_4_19.svg';
import Logo_Article_4_20 from '@/public/images/new/partner/article_4_20.svg';
import Logo_Article_4_22 from '@/public/images/new/partner/article_4_22.svg';
import Logo_Article_4_23 from '@/public/images/new/partner/article_4_23.svg';
import Logo_Article_4_25 from '@/public/images/new/partner/article_4_25.svg';
import Logo_Article_4_26 from '@/public/images/new/partner/article_4_26.svg';
import Logo_Article_4_27 from '@/public/images/new/partner/article_4_27.svg';
import Logo_Article_4_28 from '@/public/images/new/partner/article_4_28.svg';
import Logo_Article_4_29 from '@/public/images/new/partner/article_4_29.svg';
import Logo_Article_4_34 from '@/public/images/new/partner/article_4_34.svg';
import Logo_Article_4_35 from '@/public/images/new/partner/article_4_35.svg';
import Logo_Article_4_37 from '@/public/images/new/partner/article_4_37.svg';
import Logo_Article_4_38 from '@/public/images/new/partner/article_4_38.svg';
import Logo_Article_4_39 from '@/public/images/new/partner/article_4_39.svg';
import Logo_Article_4_40 from '@/public/images/new/partner/article_4_40.svg';
import Logo_Article_4_41 from '@/public/images/new/partner/article_4_41.svg';
import Logo_Article_4_42 from '@/public/images/new/partner/article_4_42.svg';
import Logo_Article_4_43 from '@/public/images/new/partner/article_4_43.svg';
import Logo_Article_4_44 from '@/public/images/new/partner/article_4_44.svg';

interface BaseTabItem {
  title: string;
  subItems: BaseSubItems[];
  textColor?: string;
  backgroundColor?: string;
}

interface BaseSubItems {
  name: string;
  src: ReactNode;
}

export const partnerItems: Array<BaseTabItem> = [
  {
    title: '전체',
    textColor: 'text-[white]',
    backgroundColor: 'bg-[#2151A2]',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },

      {
        name: '델 테크놀로지스',
        src: <Logo_Article_4_19 />,
      },
      {
        name: '효성인포메이션시스템(주)',
        src: <Logo_Article_4_37 />,
      },
      {
        name: 'SK쉴더스(주)',
        src: <Logo_Article_4_39 />,
      },
      {
        name: 'NHN 크로센트(주)',
        src: <Logo_Article_4_40 />,
      },
      {
        name: 'AJICT',
        src: <Logo_Article_4_38 />,
      },
      {
        name: '(주)정원엔시스',
        src: <Logo_Article_4_41 />,
      },
      {
        name: '(주)지엔텔',
        src: <Logo_Article_4_2 />,
      },
      {
        name: '시트릭스',
        src: <Logo_Article_4_22 />,
      },
      {
        name: '한드림넷',
        src: <Logo_Article_4_42 />,
      },
      {
        name: '(주)틸론',
        src: <Logo_Article_4_9 />,
      },
      {
        name: '슈퍼마이크로 컴퓨터(주)',
        src: <Logo_Article_4_27 />,
      },

      {
        name: 'HP(주)',
        src: <Logo_Article_4_28 />,
      },
      {
        name: '후지쯔(주)',
        src: <Logo_Article_4_29 />,
      },
      {
        name: '(주)슈퍼솔루션',
        src: <Logo_Article_4_34 />,
      },
      {
        name: '레노버(유)',
        src: <Logo_Article_4_25 />,
      },
      {
        name: '(주)케이티엔에프',
        src: <Logo_Article_4_11 />,
      },
      {
        name: '(주)유니와이드',
        src: <Logo_Article_4_26 />,
      },
      {
        name: '(주)이노그리드',
        src: <Logo_Article_4_20 />,
      },
      {
        name: '아콘소프트',
        src: <Logo_Article_4_44 />,
      },
      {
        name: '(주)클로잇',
        src: <Logo_Article_4_43 />,
      },
      {
        name: '(주)에스엔에이',
        src: <Logo_Article_4_18 />,
      },
      {
        name: '대원씨티에스(주)',
        src: <Logo_Article_4_14 />,
      },
      { name: '(주)티쓰리큐', src: <Logo_Article_4_17 /> },
      {
        name: '(주)오우션테크놀러지',
        src: <Logo_Article_4_12 />,
      },
      {
        name: '(주)엑세스랩',
        src: <Logo_Article_4_35 />,
      },
      {
        name: '(주)이노뎁',
        src: <Logo_Article_4_7 />,
      },
      {
        name: '제노솔루션(주)',
        src: <Logo_Article_4_23 />,
      },
    ],
  },
  {
    title: '플래티늄',
    textColor: 'text-[black]',
    backgroundColor: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: '골드',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: '실버',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: 'VAD',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
];
