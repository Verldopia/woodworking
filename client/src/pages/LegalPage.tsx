import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumbs, Link } from '@mui/material';
import { Capitalize } from '../utilities';
import { useLocation } from 'react-router-dom';

const LegalPage: React.FC = () => {
  const fullTitle = useLocation();
  const title = fullTitle.pathname.split('/');

  return (
    <div className="box">
      <div className="container--box">
        <Breadcrumbs
          className="bread--box"
          separator="›"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">
            {Capitalize(title[1])}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="container--info__images larger">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>ABC Private Limited</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SmartHomes.com (ABC Private Limited) prioritizes your privacy.
            </Typography>
            <br />
            <Typography>
              SmartHomes.com collects private information for the purposes of:
            </Typography>
            <br />
            <ul>
              <Typography>
                Delivery of products and services
              </Typography>
              <br />
              <Typography>
                Providing you with great deals, personalized services
                and recommendations to improve your experience
              </Typography>
              <br />{' '}
              <Typography>
                Keeping you informed about marketing and promotional
                campaigns based on your profile
              </Typography>
              <br />
              <Typography>
                Preventing fraud, monetary loss, illegal activity, and
                harm.
              </Typography>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Third Parties</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We do not believe in selling, trading or otherwise sharing your personal information. 
              Accumulated data may be shared for marketing purposes. 
              This Privacy Policy limits the use of this information.
            </Typography>
            <br />
            <Typography>
              Any information obtaines by SmartHomes.com
              will be accurate, complete, and anonymous.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Copyright and Trademark License </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The information on this website is protected by ABC Private Limited copyright.
              SmartHomes.com is registered under the trademarks of ABC Private Limited.
              Unless written consent has been provided, information cannot be modified, copied, reproduced, or distributed. 
              If you feel that this information is a copyright infringement of another parties’ rights, please contact us immediately at legal@smarthomes.com.
            </Typography>
            <br />
            <Typography>
              For non-commercial use, portions of the materials can be printed or downloaded.
              Materials are not permitted to change any information without written permission of SmartHomes.com.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default LegalPage;
