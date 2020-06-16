import { ITimeline } from 'types';

export default (t): ITimeline[] => [
  {
    id: 'experience',
    name: t('experience.name'),
    shortName: t('experience.shortName'),
    groups: [
      {
        name: t('experience.osome.name'),
        dates: [t('experience.osome.dates.0'), null],
        color: '#2978fd',
        events: [
          {
            name: t('experience.osome.events.0.name'),
            text: t('experience.osome.events.0.text'),
          },
        ],
        images: {
          icon: {
            dark: '/images/osome-icon.png',
            light: '/images/osome-icon.png',
          },
          logo: {
            dark: '/images/osome-logo.png',
            light: '/images/osome-logo.png',
          },
        },
      },
      {
        name: t('experience.profi.name'),
        dates: [t('experience.profi.dates.0'), t('experience.profi.dates.1')],
        color: '#c00027',
        events: [
          {
            name: t('experience.profi.events.1.name'),
            text: t('experience.profi.events.1.text'),
          },
          {
            name: t('experience.profi.events.0.name'),
            text: t('experience.profi.events.0.text'),
          },
        ],
        images: {
          icon: {
            dark: '/images/profi-icon.png',
            light: '/images/profi-icon.png',
          },
          logo: {
            dark: '/images/profi-logo.png',
            light: '/images/profi-logo.png',
          },
        },
      },
      {
        name: t('experience.mosreg.name'),
        dates: [t('experience.mosreg.dates.0'), t('experience.mosreg.dates.1')],
        color: '#e21c2a',
        events: [
          {
            name: t('experience.mosreg.events.1.name'),
            text: t('experience.mosreg.events.1.text'),
          },
          {
            name: t('experience.mosreg.events.0.name'),
            text: null,
          },
        ],
        images: {
          icon: {
            dark: '/images/mosreg-icon.png',
            light: '/images/mosreg-icon.png',
          },
          logo: null,
        },
      },
    ],
  },
  {
    id: 'opensource',
    name: t('opensource.name'),
    shortName: t('opensource.shortName'),
    groups: [
      {
        name: t('opensource.ansible.name'),
        dates: [t('opensource.ansible.dates.0')],
        color: '#bb261a',
        events: [
          {
            name: null,
            text: t('opensource.ansible.events.0.text'),
          },
        ],
        images: {
          icon: {
            dark: '/images/ansible-icon.png',
            light: '/images/ansible-icon.png',
          },
          logo: {
            dark: '/images/ansible-logo-dark.png',
            light: '/images/ansible-logo-light.png',
          },
        },
      },
      {
        name: t('opensource.rosr.name'),
        dates: [t('opensource.rosr.dates.0')],
        color: '#2f74ba',
        events: [
          {
            name: null,
            text: t('opensource.rosr.events.0.text'),
          },
        ],
        images: {
          icon: {
            dark: '/images/rosr-icon.png',
            light: '/images/rosr-icon.png',
          },
          logo: null,
        },
      },
    ],
  },
  {
    id: 'certification',
    name: t('certification.name'),
    shortName: t('certification.shortName'),
    groups: [
      {
        name: t('certification.aws.name'),
        dates: [t('certification.aws.dates.0')],
        color: '#f29d38',
        events: [
          {
            name: t('certification.aws.events.0.name'),
            text: t('certification.aws.events.0.text'),
          },
        ],
        images: {
          icon: {
            dark: '/images/aws-icon-dark.png',
            light: '/images/aws-icon-light.png',
          },
          logo: null,
        },
      },
      {
        name: null,
        dates: [t('certification.mos.dates.0')],
        color: '#d94b24',
        events: [
          {
            name: t('certification.mos.events.0.name'),
            text: t('certification.mos.events.0.text'),
          },
        ],
        images: {
          icon: {
            dark: '/images/office-icon.png',
            light: '/images/office-icon.png',
          },
          logo: {
            dark: '/images/office-logo.png',
            light: '/images/office-logo.png',
          },
        },
      },
      {
        name: null,
        dates: [t('certification.ielts.dates.0')],
        color: '#c7002b',
        events: [
          {
            name: null,
            text: t('certification.ielts.events.0.text'),
          },
        ],
        images: {
          icon: null,
          logo: {
            dark: '/images/ielts-logo.png',
            light: '/images/ielts-logo.png',
          },
        },
      },
    ],
  },
  {
    id: 'education',
    name: t('education.name'),
    shortName: t('education.shortName'),
    groups: [
      {
        name: t('education.tsu.name'),
        color: '#439cdb',
        events: [
          {
            name: t('education.tsu.events.3.name'),
            dates: [t('education.tsu.events.3.dates.0')],
            text: t('education.tsu.events.3.text'),
          },
          {
            name: t('education.tsu.events.2.name'),
            dates: [t('education.tsu.events.2.dates.0')],
            text: t('education.tsu.events.2.text'),
          },
          {
            name: t('education.tsu.events.1.name'),
            dates: [t('education.tsu.events.1.dates.0')],
            text: t('education.tsu.events.1.text'),
          },
          {
            name: t('education.tsu.events.0.name'),
            dates: [t('education.tsu.events.0.dates.0')],
            text: t('education.tsu.events.0.text'),
          },
        ],

        images: {
          icon: {
            dark: '/images/tsu-icon.png',
            light: '/images/tsu-icon.png',
          },
          logo: null,
        },
      },
    ],
  },
];
