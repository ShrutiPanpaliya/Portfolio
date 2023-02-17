import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='brown'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2016-2017'
        iconStyle={{backgroundColor:'brown',color:'white'}}
        icon={<i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>}>
          <h3 className='vertical-timeline-element-title'>S.D Jain Modern School,Surat,Gujarat</h3>
          <p>SSC</p>
          <p>9.6 CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2018-2019'
        iconStyle={{backgroundColor:'brown',color:'white'}}
        icon={<i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>}>
          <h3 className='vertical-timeline-element-title'>S.D Jain Modern School,Surat,Gujarat</h3>
          <p>HSC</p>
          <p>96%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2019-2023'
        iconStyle={{backgroundColor:'brown',color:'white'}}
        icon={<i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>}>
          <h3 className='vertical-timeline-element-title'>Sarvajanik College of Engineering and Technology</h3>
          <p>Graduation</p>
          <p>9.48</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2022'
        iconStyle={{backgroundColor:'salmon',color:'white'}}
        icon={<i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>}>
          <h3 className='vertical-timeline-element-title'>Lobus Solution</h3>
          <p>15 Days Internship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2023'
        iconStyle={{backgroundColor:'salmon',color:'white'}}
        icon={<i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>}>
          <h3 className='vertical-timeline-element-title'>Lobus Solution</h3>
          <p>3 Months Internship</p>
        </VerticalTimelineElement>
        

      </VerticalTimeline>
      
      
    </div>
  );
}

export default Experience;
