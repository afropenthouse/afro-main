import './styles.scss'
import PageHeaderBg from '@/components/(mission)/page-header/PageHeader'
import MissionVision from '@/components/(mission)/mission-vision/MissionVision'
import Values from '@/components/(mission)/values/Value'
import LogoSlider from "@/components/(landing)/home-slider/Slider";
import RequestQuoteBanner from '@/components/(landing)/footer/RequestQuoteBanner'
import CoreValues from '@/components/(mission)/Values-mobile';

export default function page() {
  return (
    <>
        <PageHeaderBg />
        <MissionVision />
       <div className='values-desktop'>
       <Values />
       </div>
       <div className='values-mobile'>
       <CoreValues />
       </div>
        <LogoSlider />
        <RequestQuoteBanner />
    </>
  )
}
