import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Page() {

  return (
    <Container className="bg-slate-900 rounded-xl p-10 mx-auto my-8">

      <Typography variant="h4" component="h1" gutterBottom>
        <b>Terms and Conditions</b>
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle2" paragraph>
          Last updated: March 7, 2024
        </Typography>
        <Typography variant="body1" paragraph>
          Please read these Terms of Service (the “Agreement”) carefully. By accepting these “Terms of Service, you consent to this Agreement.
        </Typography>

        <Typography variant="body1" paragraph>
          This Agreement is between you and BV MAXFLOW, a limited liability company under Belgian law with registered office at Ketelmakerij 20, 3010 Kessel-Lo, Belgium, registered under company
          registration number 0550.758.377 (RLE Leuven), with trade name “CrazyGames” (hereinafter: “CrazyGames”, “us", "we", or "our") which operates the following sites:
        </Typography>

        <Typography variant="body1" paragraph>
          This Agreement concerns your use of (including any access to) our website currently (together with any materials and services available therein, and successor site(s) thereto, the “Site”).
        </Typography>

        <Typography variant="body1" paragraph sx={{ fontWeight: '600' }}>
          BY USING THE SITE, YOU ACCEPT THESE TERMS OF SERVICE AND AFFIRM THAT YOU ARE OLDER THAN 13 YEARS.
        </Typography>

        <Typography variant="body1" gutterBottom>
          References to “you” and “your” in this Agreement will refer to both the individual using the Site.
        </Typography>

        <Typography variant="body1" gutterBottom>
          THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION PROVISION THAT, AS FURTHER SET FORTH IN SECTION 18 BELOW, REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER
          THAN JURY TRIALS OR ANY OTHER COURT PROCEEDINGS, OR CLASS ACTIONS OF ANY KIND.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>1. Changes</b>
        </Typography>
        <Typography variant="body1" paragraph>
          We may change this Agreement from time to time by notifying you of such changes by any reasonable means, including by posting a revised Agreement through the Site. Any such changes will not
          apply to any dispute between you and us arising prior to the date on which we posted the revised Agreement incorporating such changes, or otherwise notified you of such changes.
        </Typography>
        <Typography variant="body1" paragraph>
          You agree that your continued use of the Site following any changes to this Agreement will constitute an irrefutable presumption of your acceptance of such changes. The “Last Updated” legend
          above indicates when this Agreement was last changed. We may, at any time and without liability, modify or discontinue all or part of the Site (including access to the Site via any
          third-party links); charge, modify or waive any fees (which shall remain free for the foreseeable future) required to use the Site; or offer opportunities to some or all Site users.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>2. Information Submitted Through the Site</b>
        </Typography>
        <Typography variant="body1" paragraph>
          Your submission of information through the Site is governed by the CrazyGames Privacy Policy, located at
          <Link href="mailto:https://www.crazygames.com/privacy-policy" color="primary" underline="always" sx={{ margin: '0 8px' }}>https://www.crazygames.com/privacy-policy</Link>
          (the “Privacy Policy”). You represent and warrant that any information you provide in connection with the Site is and will remain accurate and complete, and that you will maintain and update
          such information as needed. To the extent that there is any contradiction between the provisions of this Agreement and the Privacy Policy regarding personal data, the provisions of the
          Privacy Policy shall prevail.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>3. Jurisdictional Issues</b>
        </Typography>
        <Typography variant="body1" paragraph>
          The Site is controlled or operated (or both) from the European Economic Area, and is not intended to subject us to any jurisdiction or law outside this area. The Site may not be appropriate
          or available for use in some jurisdictions. Any use of the Site is at your own risk, and you must comply with all applicable laws, rules and regulations in doing so. We may limit the Site’s
          availability at any time, in whole or in part, to any person, geographic area or jurisdiction that we choose.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>4. Rules of Conduct</b>
        </Typography>
        <Typography variant="body1" paragraph>
          In connection with the Site, you must not:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Post, transmit or otherwise make available through or in connection with the Site any materials that are or may be: (a) threatening, harassing, degrading, hateful or intimidating, or otherwise fail to respect the rights and dignity of others; (b) defamatory, libelous, fraudulent or otherwise tortious; (c) obscene, indecent, pornographic or otherwise objectionable; or (d) protected by copyright, trademark, trade secret, right of publicity or privacy or any other proprietary right, without the express prior written consent of the applicable owner." />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Post, transmit or otherwise make available through or in connection with the Site any virus, worm, Trojan horse, Easter egg, time bomb, spyware or other computer code, file or program that is or is potentially harmful or invasive or intended to damage or hijack the operation of, or to monitor the use of, any hardware, software or equipment (each, a “Virus”)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use the Site for any commercial purpose other than the one agreed upon by CrazyGames, or for any purpose that is fraudulent or otherwise tortious or unlawful." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harvest or collect information about users of the Site unless this is done in accordance with the Privacy Policy." />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Interfere with or disrupt the operation of the Site or the servers or networks used to make the Site available, including by hacking or defacing any portion of the Site; or violate any requirement, procedure or policy of such servers or networks." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Restrict or inhibit any other person from using the Site." />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare, distribute or otherwise exploit any portion of (or any use of) the Site except as expressly authorized herein, without our express prior written consent." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reverse engineer, decompile or disassemble any portion of the Site, except where such restriction is expressly prohibited by applicable law." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Remove any copyright, trademark or other proprietary rights notice from the Site." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Frame or mirror any portion of the Site, or otherwise incorporate any portion of the Site into any product or service, without our express prior written consent." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Systematically download and store Site content." />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Use any robot, spider, site search/retrieval application or other manual or automatic device to retrieve, index, “scrape,” “data mine” or otherwise gather Site content, or reproduce or circumvent the navigational structure or presentation of the Site, without our express prior written consent. You are responsible for obtaining, maintaining and paying for all hardware and all telecommunications and other services needed to use the Site." />
          </ListItem>
        </List>

        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>5. Embedding Games</b>
        </Typography>
        <Typography variant="body1" paragraph>
          CrazyGames allows other websites to iframe portions of the website only when it provides a button “embed” to retrieve an iframe source code.
        </Typography>
        <Typography variant="body1" paragraph>
          When embedded, there will be in-game advertisements inside the game.
        </Typography>
        <Typography variant="body1" paragraph>
          The site reserves the right to withdraw qualification at any time and block sites from embedding games at its own discretion, without warning or the requirement to provide justification.
        </Typography>

        <Typography variant="body1" paragraph>
          It is strictly forbidden to:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Reproduce, modify, adapt, translate, create derivative works of any iframed portion of the Site" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Remove, hide or in any other way hinder the viewability of any copyright, trademark or other proprietary rights notice from the iframed portion of the Site." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Remove, block, hide or in any other way hinder the performance of links in the iframed portion of the Site." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Remove, block, make invisible or in any other way hinder the operation of advertising included in the iframed portion of the Site." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Add any layers above the iframed portion of the Site." />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          The site reserves the right to discontinue an iframed portion of the Site at any time.
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions regarding embedding our games, please reach out to publisher-support@crazygames.com.
          <Link href="mailto:publisher-support@crazygames.com" color="primary" underline="always" sx={{ margin: '0 8px' }}>publisher-support@crazygames.com</Link>
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>6. Products</b>
        </Typography>
        <Typography variant="body1" paragraph>
          The Site may make available listings, descriptions and images of goods or services or related coupons or discounts (collectively, “Products”), as well as references and links to Products.
          Such Products may be made available by us or by third parties, and may be made available for any purpose, including general information purposes. The availability through the Site of any
          listing, description or image of a Product does not imply our endorsement of such Product or affiliation with the provider of such Product. We make no representations as to the completeness,
          accuracy, reliability, validity or timeliness of such listings, descriptions or images (including any features, specifications and prices contained therein). Such information and the
          availability of any Products (including the validity of any coupon or discount) is subject to change at any time without notice. It is your responsibility to ascertain and obey all
          applicable local, state, federal and foreign laws (including minimum age requirements) regarding the possession, use and sale of any Product.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>7. Profiles and Forums.</b>
        </Typography>
        <Typography variant="body1" paragraph>
          If we decide to implement this functionality, Site visitors may make available certain materials (each, a “Submission”) through or in connection with the Site, including on profile pages or
          on the Site’s interactive services, such as message boards and other forums, and chatting, commenting and other messaging functionality in accordance with the Rules of Conduct set out in
          Section 4. CrazyGames has no control over and is not responsible or liable for any use or misuse (including any distribution) by any third party of Submissions. IF YOU CHOOSE TO MAKE ANY OF
          YOUR PERSONALLY IDENTIFIABLE OR OTHER INFORMATION PUBLICLY AVAILABLE THROUGH THE SITE, YOU DO SO AT YOUR OWN RISK. See however Section V.3 of the Privacy Policy as it relates to the
          collection of personal information.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>8. License.</b>
        </Typography>
        <Typography variant="body1" paragraph>
          For purposes of clarity, you retain ownership of your Submissions. For each Submission, you hereby grant to us a worldwide, royalty-free, fully paid-up, non-exclusive, perpetual,
          irrevocable, transferable and fully sub-licensable (through multiple tiers) license, without additional consideration to you or any third party, to reproduce, distribute, perform and display
          (publicly or otherwise), create derivative works of, adapt, modify and otherwise use, analyze and exploit such Submission, in any format or media now known or hereafter developed, and for
          any purpose (including promotional purposes, such as testimonials).
        </Typography>

        <Typography variant="body1" paragraph>
          In addition, if you provide to us any ideas, proposals, suggestions or other materials through any means (“Feedback”), whether related to the Site or otherwise, such Feedback will be deemed
          a Submission, and you hereby acknowledge and agree that such Feedback is not confidential, and that your provision of such Feedback is gratuitous, unsolicited and without restriction, and
          does not place CrazyGames under any fiduciary or other obligation.
        </Typography>

        <Typography variant="body1" gutterBottom>
          You represent and warrant that you have all rights necessary to grant the licenses granted in this section, and that your Submissions, and your provision thereof through and in connection
          with the Site, are complete and accurate, and are not fraudulent, tortious or otherwise in violation of any applicable law or any right of any third party. To the extent permitted by
          applicable law, you further irrevocably waive any “moral rights” or other rights with respect to attribution of authorship or integrity of materials regarding each Submission that you may
          have under any applicable law under any legal theory.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>9. Monitoring</b>
        </Typography>
        <Typography variant="body1" paragraph>
          We may (but have no obligation to) monitor, evaluate, alter or remove Submissions before or after they appear on the Site, or analyze your access to or use of the Site. We may disclose
          information regarding your access to and use of the Site, and the circumstances surrounding such access and use, to anyone for any reason or purpose without prejudice to the Privacy Policy.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>10. Your Limited Rights</b>
        </Typography>
        <Typography variant="body1" paragraph>
          Subject to your compliance with this Agreement, and solely for so long as you are permitted by us for you to use the Site, you may view any portion of the Site to which we provide you access
          under this Agreement solely for your personal, non-commercial use.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>11. CrazyGames’ Proprietary Rights</b>
        </Typography>
        <Typography variant="body1" paragraph>
          We and our suppliers own the Site, which is protected by proprietary rights and laws. Our trade names, trademarks and service marks include CrazyGames, 1001Juegos and any associated logos.
          All trade names, trademarks, service marks and logos on the Site not owned by us are the property of their respective owners. You may not use our trade names, trademarks, service marks or
          logos in connection with any product or service that is not ours, or in any manner that is likely to cause confusion. Nothing contained or made available on the Site should be construed as
          granting any right to use any trade names, trademarks, service marks or logos without the express prior written consent of the owner.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>12. Third Party Materials; Links</b>
        </Typography>
        <Typography variant="body1" paragraph>
          Certain Site functionality may make available access to information, products, services and other materials (including, without limitation, advertisements and promotional material) made
          available by third parties (including, without limitation, through techniques such as iFrames), including Submissions (“Third Party Materials”), or allow for the routing or transmission of
          such Third Party Materials, including via links. By using such functionality, you are directing us to access, route and transmit to you the applicable Third Party Materials.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We neither control nor endorse, nor are we responsible for, any Third Party Materials, including the accuracy, validity, timeliness, completeness, reliability, integrity, quality, legality,
          usefulness or safety of Third Party Materials, or any intellectual property rights therein. Certain Third Party Materials may, among other things, be inaccurate, misleading or deceptive.
          Nothing in this Agreement shall be deemed to be a representation or warranty by CrazyGames with respect to any Third Party Materials including, without limitation, any cookies or web beacons
          for whatever purposes pursued. We have no obligation to monitor Third Party Materials, and we may block or disable access to any Third Party Materials (in whole or part) through the Site at
          any time. In addition, the availability of any Third Party Materials through the Site does not imply our endorsement of, or our affiliation with, any provider of such Third Party Materials,
          nor does such availability create any legal relationship between you and any such provider.
        </Typography>
        <Typography variant="body1" gutterBottom>
          YOUR USE OF THIRD PARTY MATERIALS IS AT YOUR OWN RISK AND IS SUBJECT TO ANY ADDITIONAL TERMS, CONDITIONS AND POLICIES APPLICABLE TO SUCH THIRD PARTY MATERIALS (SUCH AS TERMS OF SERVICE OR
          PRIVACY POLICIES OF THE PROVIDERS OF SUCH THIRD PARTY MATERIALS).
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>13. Promotions</b>
        </Typography>
        <Typography variant="body1" paragraph>
          Any sweepstakes, contests, raffles, surveys, games or similar promotions (collectively, “Promotions”) made available through the Site may be governed by rules that are separate from this
          Agreement. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with this Agreement, the Promotion
          rules will govern.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>14. Disclaimer Of Warranties</b>
        </Typography>
        <Typography variant="body1" paragraph>
          TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW: (A) THE SITE AND ANY PRODUCTS AND THIRD PARTY MATERIALS ARE MADE AVAILABLE TO YOU ON AN “AS IS,” “WHERE IS” AND “WHERE AVAILABLE” BASIS,
          WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY; AND (B) CrazyGames DISCLAIMS ALL WARRANTIES WITH RESPECT TO THE SITE AND ANY PRODUCTS AND THIRD PARTY MATERIALS,
          INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND TITLE. ALL DISCLAIMERS OF ANY KIND (INCLUDING IN THIS SECTION AND ELSEWHERE IN THIS
          AGREEMENT) ARE MADE FOR THE BENEFIT OF BOTH CrazyGames AND ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, REPRESENTATIVES, LICENSORS,
          SUPPLIERS AND SERVICE PROVIDERS (COLLECTIVELY, THE “AFFILIATED ENTITIES”), AND THEIR RESPECTIVE SUCCESSORS AND ASSIGNS.
        </Typography>
        <Typography variant="body1" gutterBottom>
          While we try to maintain the timeliness, integrity and security of the Site, we do not guarantee that the Site is or will remain updated, complete, correct or secure, or that access to the
          Site will be uninterrupted. The Site may include inaccuracies, errors and materials that violate or conflict with this Agreement. Additionally, third parties may make unauthorized
          alterations to the Site. If you become aware of any such alteration, contact us at\
          <Link href="mailto:legal@crazygames.com" color="primary" underline="always" sx={{ margin: '0 8px' }}>legal@crazygames.com</Link>
          with a description of such alteration and its location on the Site.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>15. Limitation Of Liability</b>
        </Typography>
        <Typography variant="body1" paragraph>
          TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW: (A) CrazyGames WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES OF ANY KIND, UNDER
          ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHER THEORY, INCLUDING DAMAGES FOR LOSS OF PROFITS, USE OR DATA, LOSS OF OTHER INTANGIBLES, LOSS OF SECURITY OF SUBMISSIONS
          (INCLUDING UNAUTHORIZED INTERCEPTION BY THIRD PARTIES OF ANY SUBMISSIONS (B) WITHOUT LIMITING THE FOREGOING, WE SHALL NOT BE LIABLE FOR DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF OR
          INABILITY TO USE THE SITE OR FROM ANY PRODUCTS OR THIRD PARTY MATERIALS, INCLUDING FROM ANY VIRUS THAT MAY BE TRANSMITTED IN CONNECTION THEREWITH; (C) YOUR SOLE AND EXCLUSIVE REMEDY FOR
          DISSATISFACTION WITH THE SITE OR ANY PRODUCTS OR THIRD PARTY MATERIALS IS TO STOP USING THE SITE; AND (D) OUR MAXIMUM AGGREGATE LIABILITY OF FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION,
          WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, SHALL BE THE GREATER OF THE TOTAL AMOUNT, IF ANY, PAID BY YOU TO US TO USE THE SITE BUT NO MORE THAN 100 EUR CONSIDERING USE OF
          THE SITE IS FREE OF CHARGE. ALL LIMITATIONS OF LIABILITY OF ANY KIND (INCLUDING IN THIS SECTION AND ELSEWHERE IN THIS AGREEMENT) ARE MADE FOR THE BENEFIT OF BOTH US AND THE AFFILIATED
          ENTITIES, AND THEIR RESPECTIVE SUCCESSORS AND ASSIGNS.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>16. Indemnity</b>
        </Typography>
        <Typography variant="body1" paragraph>
          To the fullest extent permitted under applicable law, you agree to defend, indemnify and hold us and the Affiliated Entities harmless including their respective successors and assigns, from
          and against all claims, liabilities, damages, judgments, awards, losses, costs, expenses and fees (including attorneys’ fees) arising out of or relating to (a) your use of, or activities in
          connection with, the Site (including all Submissions); and (b) any violation or alleged violation of this Agreement by you.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>17. Termination</b>
        </Typography>
        <Typography variant="body1" paragraph>
          This Agreement is effective until terminated. We may terminate or suspend your use of the Site at any time and without prior notice, for any or no reason, including, without limitation, if
          CrazyGames determines in its sole discretion that you have not adhered to the Rules of Conduct or if CrazyGames believes that you have violated or acted inconsistently with the letter or
          spirit of this Agreement. Upon any such termination or suspension, your right to use the Site will immediately cease, and CrazyGames may, without liability to you or any third party,
          immediately deactivate or delete your user name, password and account, and all associated materials, without any obligation to provide any further access to such materials.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>18. Governing Law; Arbitration</b>
        </Typography>
        <Typography variant="body1" paragraph>
          The terms of this Agreement are governed by the laws of Belgium without regard to its principles of conflicts of law, and regardless of your location. ALL DISPUTES ARISING OUT OF OR RELATED
          TO THIS AGREEMENT OR ANY ASPECT OF THE RELATIONSHIP BETWEEN YOU AND CrazyGames, WHETHER BASED IN CONTRACT, TORT, STATUTE, FRAUD, MISREPRESENTATION OR ANY OTHER LEGAL THEORY, WILL BE RESOLVED
          THROUGH FINAL AND BINDING ARBITRATION BEFORE A NEUTRAL ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY AND YOU AGREE THAT YOU AND CrazyGames ARE EACH WAIVING THE RIGHT TO TRIAL BY A
          JURY. YOU AGREE THAT ANY ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED AND YOU ARE AGREEING TO GIVE UP THE
          ABILITY TO PARTICIPATE IN A CLASS ACTION. The arbitration will be administered by CEPINA by a single arbitrator in accordance with the rules of procedure of CEPINA. The place of arbitration
          will be Brussels, Belgium and the language of the proceedings will be English unless the parties decide otherwise. The arbitrator will conduct hearings, if any, by teleconference or
          videoconference, rather than by personal appearances, unless the arbitrator determines upon request by you or by us that an in-person hearing is appropriate. The arbitrator’s decision will
          follow the terms of this Agreement and will be final and binding. The arbitrator will have authority to award temporary, interim or permanent injunctive relief or relief providing for
          specific performance of this Agreement, but only to the extent necessary to provide relief warranted by the individual claim before the arbitrator. The award rendered by the arbitrator may
          be confirmed and enforced in any court having jurisdiction thereof.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>19. Filtering</b>
        </Typography>
        <Typography variant="body1" paragraph>
          We hereby notify you that parental control protections (such as computer hardware, software or filtering services) are commercially available that may assist you in limiting access to
          material that is harmful to minors. Information identifying current providers of such protections is available from
          <Link href="https://en.wikipedia.org/wiki/Comparison_of_content-control_software_and_providers." color="primary" underline="always"
                sx={{ margin: '0 8px' }}>https://en.wikipedia.org/wiki/Comparison_of_content-control_software_and_providers.</Link>
          Please note that CrazyGames does not endorse any of the products or services listed on such site.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>20. Information or Complaints</b>
        </Typography>
        <Typography variant="body1" paragraph>
          If you have a question or complaint regarding the Site, please fill in our contact form at
          <Link href="https://www.crazygames.com" color="primary" underline="always" sx={{ margin: '0 8px' }}>https://www.crazygames.com</Link>
          or send an e-mail to
          <Link href="mailto:legal@crazygames.com" color="primary" underline="always" sx={{ margin: '0 8px' }}>legal@crazygames.com</Link>. You may also contact us by writing to Ketelmakerij 20, 3010
          Kessel-Lo, Belgium.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>21. Copyright Infringement Claims</b>
        </Typography>
        <Typography variant="body1" paragraph>
          If you believe in good faith that materials available on the Site infringe your copyright, you (or your agent) may send us a written notice by courier, mail or e-mail, requesting that we
          remove such material or block access to it. If you believe in good faith that someone has wrongly filed a notice of copyright infringement against you, you can send us a counter-notice.
          Notices and counter-notices must be sent in writing to : BV MAXFLOW, IP Infringement Desk, Ketelmakerij 20, 3010 Kessel-Lo, Belgium or by e-mail to
          <Link href="https://www.crazygames.com" color="primary" underline="always" sx={{ margin: '0 8px' }}>https://www.crazygames.com.</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          We suggest that you consult your legal advisor before filing a notice or counter-notice.
        </Typography>


        <Typography variant="h6" sx={{ margin: '0.6em 0' }}>
          <b>22. Miscellaneous</b>
        </Typography>
        <Typography variant="body1" paragraph>
          This Agreement does not, and shall not be construed to, create any partnership, joint venture, employer-employee, agency or franchisor-franchisee relationship between you and CrazyGames. If
          any provision of this Agreement is found to be unlawful, void or for any reason unenforceable, that provision will be deemed severable from this Agreement and will not affect the validity
          and enforceability of any remaining provision. You may not assign, transfer or sublicense any or all of your rights or obligations under this Agreement without our express prior written
          consent. We may assign, transfer or sublicense any or all of our rights or obligations under this Agreement without restriction. No waiver by either party of any breach or default under this
          Agreement will be deemed to be a waiver of any preceding or subsequent breach or default. All terms defined in the singular shall have the same meanings when used in the plural, where
          appropriate and unless otherwise specified. Any use of the term “including” or variations thereof in this Agreement shall be construed as if followed by the phrase “without limitation.” This
          Agreement, including any terms and conditions incorporated herein, is the entire agreement between you and CrazyGames relating to the subject matter hereof, and supersedes any and all prior
          or contemporaneous written or oral agreements or understandings between you and CrazyGames relating to such subject matter. Notices to you (including notices of changes to this Agreement)
          may be made via posting on the Site or by e-mail (including in each case via links), or by regular mail. Without limitation, a printed version of this Agreement and of any notice given in
          electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business
          documents and records originally generated and maintained in printed form. CrazyGames will not be responsible for any failure to fulfill any obligation due to any cause beyond its control.
        </Typography>

      </Box>
    </Container>

  );
}
