import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Page() {

  return (
    <Container className="bg-slate-900 rounded-xl p-10 mx-auto my-8">
      <Typography variant="h4" component="h1" gutterBottom>
       <b>Privacy Policy</b>
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle2" paragraph>
          Last updated: March 7, 2024
        </Typography>
        <Typography variant="body1" gutterBottom>
          MAXFLOW BV, a limited liability company under Belgian law with registered office at Ketelmakerij 20, 3010 Kessel-Lo, Belgium, registered under company registration number 0550.758.377 (RLE
          Leuven), with trade name "<b>CrazyGames</b>" (hereinafter: "<b>CrazyGames</b>", "<b>us</b>", "<b>we</b>", or "<b>our</b>") operates the following sites:
        </Typography>
        <Typography variant="body1" gutterBottom>
          (the "<b>Site</b>"). This privacy policy applies to all of CrazyGames services and products. You should be aware that CrazyGames cannot be held responsible for the privacy policy of other
          sites and sources.
        </Typography>
        <Typography variant="body1" gutterBottom>
          CrazyGames will act as the data controller in the framework of this Privacy Policy. By using this Site, you accept this Privacy Policy and you affirm that you are of legal age to agree to
          the terms of this Privacy Policy.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Whenever important changes are made to this Privacy Policy, your continued use of the Site will be considered as your consent with the revised Privacy Policy. CrazyGames respects the privacy
          of all users of its Site and shall ensure the personal information you provide is treated confidentially.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are aware of the trust you place in us. We see it as our responsibility to protect your privacy. On this page, we will let you know what information we collect when you use our Site, why
          we collect it and how we improve your user experience. Thus, you will understand exactly how we work.
        </Typography>

        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>I. WHICH DATA DO WE COLLECT?</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>1. Data we receive from you</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Contact form
        </Typography>
        <Typography variant="body1" gutterBottom>
          When you fill in the contact form provided on our Site or send us an e-mail, we will optionally process the following types of personal data on the basis of consent:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="First name" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Name" />
          </ListItem>
          <ListItem>
            <ListItemText primary="E-mail" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Other information that you provide" />
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          <b>Account registration</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you register an account with us you give explicit consent to collect a password, email address, phone number, user agent, and IP address. We do not store this data ourselves but work with
          Google Firebase authentication services to do so. The data is used to enable end-user authentication, and facilitate end-user account management. It also uses user-agent strings and IP
          addresses to provide added security and prevent abuse during sign-up and authentication. We use Firebase as described in
          <Link href="https://policies.google.com/technologies/partner-sites" color="primary" underline="always" sx={{ margin: '0 8px' }}> “How Google Uses Information From Sites Or Apps That Use Our
            Services”.</Link>
          “How Google Uses Information From Sites Or Apps That Use Our Services”.
        </Typography>
        <Typography variant="body1" gutterBottom>
          IP addresses are logged for a few weeks. Other authentication information is retained until you initiate deletion of the associated user, after which data is removed from live and backup
          systems within 180 days. You can delete your account via Account Settings.
        </Typography>


        <Typography variant="h6" gutterBottom>
          <b>2. Data we receive automatically</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          We can collect some personal data through the use of cookies: see Section V of this Privacy Policy.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Some other (personal) data may be collected without the use of cookies. Said data can only be read and used during your visit to our Site:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="1. Your IP-address (used e.g. for preventing double voting and location based advertising);" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Your browser type and revision;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. The last visited internet page;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. (mobile) device ID’s;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. cookie data;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="6. user level data (i.e. whether a user viewed or clicked on an advertisement);" />
          </ListItem>
        </List>


        <Typography variant="h6" gutterBottom>
            <b>3. Data we receive from third parties</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          When we receive Personal Information from third parties we will inform you personally.
        </Typography>
        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>II. WHY DO WE COLLECT THESE DATA? BASED ON WHICH LEGAL GROUND?</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your personal data will be used to enable us to optimise the services we render and the content we provide on the Site. In certain cases when we are under a legal requirement to process
          personal data, like age limits, we will process said personal data.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may also use your personal data for direct marketing purposes, such as updates on new or existing games and newsletters.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may opt to use your personal data for statistical purposes and to improve our services and product. These processing activities are thus based on a justified legitimate interest of
          CrazyGames.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Advertisers on our website might use information gathered by the use cookies and/or web beacons for the purpose of online behavioral advertising and/or multisite advertising. Further
          information as regards the use of cookies and web beacons is set out in Section V below.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Additionally, we may share information that we collect from you, such as your email (in hashed form), IP address or information about your browser or operating system, with our identity
          partners/service providers. These partners return an online identification code that we may store in our first-party cookie for our use in advertising and it may be shared with advertising
          companies to enable interest-based and targeted advertising. To opt out of this use, please click
          <Link href="https://optout.aboutads.info/?c=2&lang=EN" color="primary" underline="always" sx={{ margin: '0 8px' }}>here.</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          CrazyGames is not responsible for any personal data collected via any third party software or methods present on the Site and to which said third parties’ general terms and conditions may
          apply.
        </Typography>
        <Typography variant="body1" gutterBottom>
          You are advised not to use your real name or share any other personal information in any of the games provided on our Site including, without limitation, when engaging in multi-player.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We have the right to share your data with all Google CPS Vendors so that Google DV360 may return GDPR compliant bids for ad delivery.
        </Typography>


        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>III. DATA RETENTION PERIODS</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your personal data will only be processed for as long as this is necessary for the purposes mentioned above. Unless there is a justified reason to retain the personal data, for example
          within the framework of customer relation management, your personal data will be deleted one month after you failed to visit our site during a consecutive period of [2] years.
        </Typography>


        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>IV. YOUR RIGHTS</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can get access to your personal data and rectify or erase them, free of charge. You also have the right to restrict the processing of your personal data.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you do not wish to receive newsletters or information about our products or services, you can at any moment and without any need for justification, object to the processing of your
          personal data for these purposes (“unsubscribe”). You can do this by sending us an e-mail or by contacting as at the address mentioned below. You can also do this by clicking on the
          unsubscribe link in our advertising e-mails.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Moreover, you have the right to data portability for the personal data you have provided to CrazyGames if any and to the extent that CrazyGames has retained your personal data. If you want
          more information on your rights, you can always contact us or take a look at the website of the Belgian Data Protection Authority:
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Link href="https://www.dataprotectionauthority.be/." color="primary" underline="always" sx={{ margin: '0 8px' }}>https://www.dataprotectionauthority.be/.</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          You should specifically motivate your request if you want to rectify or erase personal data or restrict the processing thereof. Once these conditions are fulfilled, CrazyGames will execute
          your request as soon as possible and send you a message on this matter.
        </Typography>


        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>IV. YOUR RIGHTS</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>What are cookies?</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cookies are small files that are saved on your computer when you visit web pages. They contain information linked to a web browser and the specific website. They are saved in a specific
          folder on your hard drive. If you return to a specific website, this page can recognize the visitor by means of the cookie and further elaborate the history. A web beacon is an (often
          transparent) graphic image, usually no larger than 1 pixel, that is placed on a website and that is used to monitor the behavior of the user visiting the website.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cookies are used to increase visitor-friendliness: by identifying visitors with a cookie, they do not always have to enter the same data such as login information or screen settings every
          time you visit the website.
        </Typography>

        <Typography variant="h6" gutterBottom>
          <b>Which kind of cookies exist?</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Often a distinction is made between two large groups of cookies:
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>First party cookies:</b> these cookies are created by a website to have the web page function better. They regulate the technical part of a site, such as language choice or remembering
          the products in the shopping basket in an online store. The visited website creates and places first party cookies.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b> Third party cookies:</b> these cookies are created and placed on your computer by another (third) party than the website you visit. They remember the behavior of a surfer. Examples are
          social media such as Facebook or Twitter, but Google Analytics as well. This is the system used most to measure website visits.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cookies required for the correct functioning of the Site do not require permission. All other cookies do.
        </Typography>

        <Typography variant="h6" gutterBottom>
          <b>Which cookies do we use?</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          We will only use first party cookies to help improve your user experience on the Site. We would do this by recording specific information about the user such as the language chosen, the
          pages visited and the duration of the visits.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may offer games from third-party game distributors on our portal. By playing a third-party game, your Personal Data may be processed by the third-party game distributor (directly or
          through the use of cookies or similar technology). Please note that if you choose to play a third-party game, you are playing that game in the environment of that game's third-party
          developer, over which we have no control. We, therefore, recommend that you read the privacy statement of that game distributor before playing the game.
        </Typography>

        <List>
          <ListItem>
            Game Distribution:
            <Link href="https://azerion.com/business/privacy.html" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Famobi:
            <Link href="https://famobi.com/privacy-policy/?locale=en" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Gamerina:
            <Link href="https://prinxy.app/tos/privacy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Coolgames:
            <Link href="https://www.coolgames.com/privacy-policy" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            FRVR:
            <Link href="https://frvr.com/legal#PrivacyPolicy" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          <b>Your acceptance of this Privacy Policy by using the Site, entails that third parties may drop cookies and/or use web beacons for advertising and tracking purposes.
          </b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Third parties might use information gathered by cookies and/or web beacons for the purpose of online behavioral advertising and/or multisite advertising. The types of information that is
          gathered by third party cookies and/or web beacons as well as the purpose(s) for which this information is used, are set out in the privacy policy of said third parties which CrazyGames
          encourages you to review. CrazyGames declines all and any liability for any third party cookies or web beacons deployed by third parties for whatever purpose.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Site may therefore use third party cookies such as cookies from:
        </Typography>

        <List>
          <ListItem>
            Appnexus:
            <Link href="https://www.appnexus.com/platform-privacy-policy" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Google Ad Exchange:
            <Link href="https://policies.google.com/technologies/ads" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Google Adsense:
            <Link href="https://policies.google.com/technologies/ads" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Magnite:
            <Link href="https://www.magnite.com/legal/advertising-technology-privacy-policy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Index Exchange:
            <Link href="http://www.indexexchange.com/privacy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Pubmatic:
            <Link href="https://pubmatic.com/legal/privacy-policy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Amazon:
            <Link href="https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_sib?ie=UTF8&nodeId=468496" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            OpenX:
            <Link href="https://www.openx.com/legal/privacy-policy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            AppMonet:
            <Link href="https://appmonet.com/privacy-policy/8" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            TripleLift:
            <Link href="https://triplelift.com/privacy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            IpOnWeb:
            <Link href="https://www.iponweb.com/privacy-policy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Media.net:
            <Link href="https://www.media.net/privacy-policy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Sharethrough:
            <Link href="https://www.sharethrough.com/privacy-center/website-privacy-notice" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            YieldMo:
            <Link href="https://yieldmo.com/privacy-policy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Fluct:
            <Link href="https://corp.fluct.jp/privacy/ads/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            SmartAdServer:
            <Link href="https://smartadserver.com/end-user-privacy-policy/  " sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Unruly:
            <Link href="https://unruly.co/legal/privacy/" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Venatus:
            <Link href="https://venatus.com/privacy" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Headerlift:
            <Link href="https://www.headerlift.com/privacy.html" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Adagio:
            <Link href="https://adagio.io/privacy" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            Rise:
            <Link href="https://risecodes.com/wp-content/uploads/2023/03/Risecodes.com-Privacy-Policy-March-23-2023.pdf" sx={{ marginLeft: '4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          In addition, the Site also uses third party cookies such as cookies from Google Analytics.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Google Analytics is a free service by Google to collect statistics of websites and to represent them in detail. The website administrator thus has a clear view on visitor flows, traffic
          flows and page displays. This way it is possible to adapt parts of a website or complete websites to the behavior and interests of the visitors.
        </Typography>

        <Typography variant="h6" gutterBottom>
          How to manage cookies?
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can do so by adapting your browser settings. Modern browsers allow you to choose to block cookies or to accept only cookies from specific websites. Contact us if you need any help in
          doing so.
        </Typography>

        <Typography variant="body1" gutterBottom>
          We also work with the following ID providers:
        </Typography>
        <List>
          <ListItem>
            <Link href="https://www.thetradedesk.com/industry-initiatives/unified-id-solution" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Unified ID
            </Link>
            -
            <Link href="https://www.thetradedesk.com/general/privacy" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.id5.io/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              ID5
            </Link>
            -
            <Link href="https://www.id5.io/privacy-policy" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.criteo.com/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Criteo
            </Link>
            -
            <Link href="https://www.criteo.com/privacy/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://liveramp.com/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              LiveRamp
            </Link>
            -
            <Link href="https://liveramp.com/privacy/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.lotame.com/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Lotame
            </Link>
            -
            <Link href="https://www.lotame.com/about-lotame/privacy/lotames-products-services-privacy-policy/" sx={{ margin: '0 4px' }} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </ListItem>
        </List>


        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>VI. SECURITY MEASURES</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          CrazyGames has taken all reasonable and appropriate technical and organizational measures to ensure that your Personal Information is processed securely.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions on these security measures, feel free to contact us at the address mentioned below.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Within CrazyGames, personal data is only available to people who need to have access to it in relation to their job.
        </Typography>
        <Typography variant="body1" gutterBottom>
          At no moment in time will we directly sell or rent out your personal data to third parties. Occasionally we may use an external processor. If we do this, we will always ensure that your
          information is handled confidentially and in a safe manner. We also always draw up a contract with these processors. This way the processor will never be allowed to use your data on its own
          initiative and your data has to be erased as soon as the processor has finished the assignment.
        </Typography>


        <Typography variant="h5" sx={{margin: '0.6em 0'}}>
          <b>VII. CONTACT INFORMATION OF DATA CONTROLLER</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          For all your questions or complaints regarding this Privacy Policy, you should contact us at the following e-mail address:
          <Link href="mailto:data-protection@crazygames.com" color="primary" underline="always" sx={{ margin: '0 8px' }}>data-protection@crazygames.com</Link>
          data-protection@crazygames.com
          or through
          <Link href="https://www.crazygames.com/?contact=1" color="primary" underline="always" sx={{ margin: '0 8px' }}>our contact form.</Link>
          If you have any complaints regarding the processing of Your personal data, you can also address this complaint to the following address by registered mail:
        </Typography>

        <Typography variant="overline" display="block" gutterBottom>
          BV MAXFLOW <br />
          Data Protection desk <br />
          Ketelmakerij 20 <br />
          3010 Kessel-Lo <br />
          Belgium
        </Typography>
        <Typography variant="body1" gutterBottom>
          Afterwards, you can contact your Data Protection Authority to assist you or to file a complaint.
        </Typography>
      </Box>
    </Container>

  );
}
