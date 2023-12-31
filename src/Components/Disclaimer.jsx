// TermsOfService.jsx

import React from 'react';

const Disclaimer = () => {
  const termsStyle = {
    maxWidth: '600px', // Adjust the maximum width as needed
    margin: 'auto', // Center the component horizontally
    padding: '20px', // Add some padding for better readability
    textAlign: 'left', // Align text to the left
  };

  return (
    <div style={termsStyle}>
      <h2 style={{textAlign:'center'}}>Disclaimer</h2>

      <p>
      All the information on this website - https://scriptologic.vercel.app/ - is published in good faith and for general information purpose only. Scriptologic does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Scriptologic), is strictly at your own risk. Scriptologic will not be liable for any losses and/or damages in connection with the use of our website.
      </p>

      <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

      <p>
      Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
      </p>

      <h3>Consent</h3>

      <p>
      By using our website, you hereby consent to our disclaimer and agree to its terms.
      </p>

      <h3>Update</h3>

      <p>
      Should we update, amend or make any changes to this document, those changes will be prominently posted here.
      </p>
    </div>
  );
};

export default Disclaimer;