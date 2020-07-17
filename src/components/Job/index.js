import React from 'react'
import {
    JobCardContainer,
    JobHeader,
    JobTitle,
    Date,
    Company,
    CompanyLogo,
    JobLocation,
    HeaderLine,
    TitleSection,
    Divider
} from './jobs.styles'
import Projects from '../Projects'
import {FaCircle} from 'react-icons/fa';



const Job = ({job}) => 
    (<JobCardContainer>
        <JobHeader>
        <CompanyLogo src={job.imgUrl}/>
        <TitleSection>
        <HeaderLine>
        <JobTitle>{job.title}</JobTitle>
        <Company href={job.organizationUrl} target="_blank">{` @${job.organization}`}</Company>
        </HeaderLine>
        <HeaderLine>
        <JobLocation>{job.location}</JobLocation>
        <Divider/>
        <Date>{job.from}</Date> - <Date>{job.to}</Date>
        </HeaderLine>
        </TitleSection>
        </JobHeader>
        <Projects projects={job.work} />
    </JobCardContainer>)

export default Job;
