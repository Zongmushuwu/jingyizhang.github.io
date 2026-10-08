export interface NewsItem {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  text: string;
  href: string;
}

// Updates confirmed by Jingyi, with publication dates from the existing site.
// Add new updates here; the homepage displays them newest first.
export const newsItems: NewsItem[] = [
  {
    id: 'xjtlu-seminar-2025',
    date: '2025-09',
    displayDate: 'Sep 2025',
    title: 'Research seminar at Xi’an Jiaotong-Liverpool University',
    text: 'I gave a research seminar at Xi’an Jiaotong-Liverpool University (XJTLU), China.',
    href: 'https://www.xjtlu.edu.cn/en',
  },
  {
    id: 'uist-2025',
    date: '2025-09',
    displayDate: 'Sep 2025',
    title: 'Do You See What I See? Bring Live Pedestrians into an Outdoor Collaborative Mixed Reality Experience',
    text: 'Our paper on bringing live pedestrians into an outdoor collaborative mixed reality experience was published at UIST 2025.',
    href: '/publications/uist2025',
  },
  {
    id: 'ucl-research-photo-2025',
    date: '2025-06',
    displayDate: 'Jun 2025',
    title: 'Photo featured on the UCL Computer Science research webpage',
    text: 'A photo of me is featured on the UCL Computer Science research webpage!',
    href: 'https://www.ucl.ac.uk/engineering/computer-science/research',
  },
  {
    id: 'vr-2025',
    date: '2025-03',
    displayDate: 'Mar 2025',
    title: 'Single Actor Controlling Multiple Avatars for Social Virtual Realities',
    text: 'I presented our paper, “Single Actor Controlling Multiple Avatars for Social Virtual Realities”, at IEEE VR 2025.',
    href: '/publications/vr2025',
  },
  {
    id: 'goldsmiths-seminar-2024',
    date: '2024-04',
    displayDate: 'Apr 2024',
    title: 'Research seminar at Goldsmiths, University of London',
    text: 'I gave a seminar on my research at Goldsmiths, University of London, UK.',
    href: 'https://www.gold.ac.uk/',
  },
  {
    id: 'ieee-vr-volunteer-2024',
    date: '2024-03',
    displayDate: 'Mar 2024',
    title: 'Student volunteer at IEEE VR 2024',
    text: 'I served as a student volunteer at IEEE VR 2024 in Orlando, USA.',
    href: 'https://ieeevr.org/2024/contribute/studentVolunteers/',
  },
  {
    id: 'ismar-adjunct-2023',
    date: '2023-10',
    displayDate: 'Oct 2023',
    title: 'Reviving the Euston Arch: A Mixed Reality Approach to Cultural Heritage Tours',
    text: 'Our project, “Reviving the Euston Arch”, received an Honorable Mention for the Best Design Award at the ISMAR 2023 Student Competition.',
    href: '/publications/ismaradj2023',
  },
  {
    id: 'ismar-2023',
    date: '2023-10',
    displayDate: 'Oct 2023',
    title: 'Supporting Co-Presence in Populated Virtual Environments by Actor Takeover of Animated Characters',
    text: 'Our paper on supporting co-presence through actor takeover of animated characters was published at ISMAR 2023.',
    href: '/publications/ismar2023',
  },
  {
    id: 'vrst-2023',
    date: '2023-10',
    displayDate: 'Oct 2023',
    title: 'Comparing Mixed Reality Agent Representations: Studies in the Lab and in the Wild',
    text: 'Our paper comparing mixed reality agent representations in the lab and in the wild was published at VRST 2023.',
    href: 'https://dl.acm.org/doi/abs/10.1145/3611659.3615719',
  },
  {
    id: 'web3d-2023',
    date: '2023-10',
    displayDate: 'Oct 2023',
    title: 'Extending the Open Source Social Virtual Reality Ecosystem to the Browser in Ubiq',
    text: 'Our paper on extending Ubiq’s social VR ecosystem to the browser was published at Web3D 2023.',
    href: 'https://doi.org/10.1145/3611314.3615903',
  },
];
