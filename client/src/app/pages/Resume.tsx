import React, { FC } from 'react';
import { Box, Grid, Avatar, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import ResumeCard from './ResumeCard';
import { ForkLeft } from '@mui/icons-material';

interface ResumePortfolioProps {
  profile: {
    name: string;
    avatar: any;
    address: string;
    contacts: {
      icon: FC;
      label: string;
      value: string;
    }[];
    skills: {
      category: string;
      skills: string;
    }[];
    socialMedia: {
      icon: FC;
    }[];
    education: {
      degree: string;
      date: string;
      school: string;
      gpa: string;
    }[];
    certificate: {
      certName: string;
      school: string;
      year: string;
    }[];
    nonprofit: {
      orgName: string;
      position: string;
      date: string;
    }[];
    experience: {
      title: string;
      date: string;
      description: {
        dutyOne: string;
        dutyTwo: string;
        dutyThree: string;
        dutyFour: string;
        dutyFive: string;
        dutySix: string;
        dutySeven: string;
        dutyEight: string;
        dutyNine: string;
        dutyTen: string;
      };
    }[];
  };
}

const ResumePortfolio: FC<ResumePortfolioProps> = ({ profile }) => {
  return (
    <Box>
      <Grid container spacing={2}>

        {/* Left Column */}
        <Grid item xs={12} md={4}>

          {/* Profile */}
          <ResumeCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 100, height: 100 }} />
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                {profile.name}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {profile.address}
              </Typography>
            </Box>

            {/* Contact Details */}
            <Divider sx={{ mt: 2 }} />
            <List component="nav" dense>
              {profile.contacts.map((contact, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <contact.icon />
                  </ListItemIcon>
                  <ListItemText primary={contact.label} secondary={contact.value} />
                </ListItemButton>
              ))}
            </List>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5" component="div" sx={{ mt: 2 }}>
              Professional Summary
            </Typography>
            <List component="nav" dense>
              <text style={{marginLeft: "1vw"}}>
                Accomplished Senior Leader with more than seven years of experience within<br />
              </text>
              <text style={{marginLeft: "1vw"}}>
                Logistics / Supply Management, including multifunctional logistics<br />
              </text>
              <text style={{marginLeft: "1vw"}}>
                management to support a global workforce. Depth of experience with<br />
              </text> 

              <text style={{marginLeft: "1vw"}}>
              non-profits, non-governmental agencies, and elected officials.<br /> 
              </text>
                <br />
              <text style={{marginLeft: "1vw"}}>
                A natural communicator, effectively liaising at all levels and across divisions,<br />  
              </text>
              <text style={{marginLeft: "1vw"}}>
              while guiding multifunctional teams toward a common goal. Success derived<br />  
              </text>
              <text style={{marginLeft: "1vw"}}>
              from application of lessons learned analysis and industry best practices used to<br />  
              </text>
              <text style={{marginLeft: "1vw"}}>
              develop and implement strategy, planning, personnel management, and ensure<br />  
              </text>
              <text style={{marginLeft: "1vw"}}>
              effective communications. Possesses a keen aptitude for team dynamics,<br />  
              </text>
              <text style={{marginLeft: "1vw"}}>
              consensus-building, and collaboration. United States Army Veteran,<br />  
              </text>
              <text style={{marginLeft: "1vw"}}>
              TS-SCI Security Clearance.<br /> 
              </text>
            </List>


            <Divider sx={{ mb: 2 }} />
            {/* Skills */}
            <Typography variant="h5" component="div" sx={{ mt: 2 }}>
              Skills
            </Typography>
            <List component="nav" dense>
              {profile.skills.map((skill, index) => (
                <ListItemButton key={index}>
                  <ListItemText primary={skill.category} secondary={skill.skills} />
                </ListItemButton>
              ))}
            </List>
          </ResumeCard>

          {/* Social Media Links */}
          <ResumeCard>
            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
              Social Media
            </Typography>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              {profile.socialMedia.map((media, index) => (
                <IconButton color="primary" key={index}>
                  <media.icon />
                </IconButton>
              ))}
            </Box>
          </ResumeCard>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          {/* Education */}
          <ResumeCard>
            <Typography variant="h5" component="div">
              Education
            </Typography>
            <Box sx={{ mt: 2 }}>
              {profile.education.map((education, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">{education.degree}</Typography>
                    <Typography variant="body2" color="text.secondary">{education.date}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {education.school}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {education.gpa}
                    </Typography>
                  </Box>

                  {/* Divider but not for single or last item */}
                  {index !== profile.education.length - 1 && (
                    <Divider sx={{ mb: 2 }} />
                  )}

                </React.Fragment>
              ))}
            </Box>
          </ResumeCard>

          {/* Certifications */}
          <ResumeCard>
            <Typography variant="h5" component="div">
              Certificates
            </Typography>
            <Box sx={{ mt: 2 }}>
              {profile.certificate.map((certificate, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">{certificate.certName}</Typography>
                    <Typography variant="body2" color="text.secondary">{certificate.year}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {certificate.school}
                    </Typography>
                  </Box>
                  {/* Divider but not for single or last item */}
                  {index !== profile.certificate.length - 1 && (
                    <Divider sx={{ mb: 2 }} />
                  )}

                </React.Fragment>
              ))}
            </Box>
          </ResumeCard>
          {/* Work Experience */}
          <ResumeCard>
            <Typography variant="h5" component="div">
              Work Experience
            </Typography>
            <Typography variant="h6" component="div">
              United States Army
            </Typography>
            <Box sx={{ mt: 2 }}>
              {profile.experience.map((experience, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">{experience.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{experience.date}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {experience.description.dutyOne}
                      {experience.description.dutyTwo}
                      {experience.description.dutyThree}
                      {experience.description.dutyFour}
                      {experience.description.dutyFive}
                      {experience.description.dutySix}
                      {experience.description.dutySeven}
                      {experience.description.dutyEight}
                      {experience.description.dutyNine}
                      {experience.description.dutyTen}
                    </Typography>
                  </Box>

                  {/* Divider but not for single or last item */}
                  {index !== profile.experience.length - 1 && (
                    <Divider sx={{ mb: 2 }} />
                  )}

                </React.Fragment>
              ))}
            </Box>
          </ResumeCard>

          {/* Nonprofit Experience*/}
          <ResumeCard>
            <Typography variant="h5" component="div">
              Non-Profit Experience
            </Typography>
            <Box sx={{ mt: 2 }}>
              {profile.nonprofit.map((nonprofit, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">{nonprofit.orgName}</Typography>
                    <Typography variant="body2" color="text.secondary">{nonprofit.position}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {nonprofit.date}
                    </Typography>
                  </Box>

                  {/* Divider but not for single or last item */}
                  {index !== profile.experience.length - 1 && (
                    <Divider sx={{ mb: 2 }} />
                  )}

                </React.Fragment>
              ))}
            </Box>
          </ResumeCard>

        </Grid>

      </Grid>
    </Box>
  );
}

export default ResumePortfolio;