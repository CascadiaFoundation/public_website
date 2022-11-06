import Layout from '@/layout';

const ContentList = [
  {
    title: 'Information Collection and Use',
    description: [
      `
                <span class="font-bold">Cascadia Foundation</span> is the sole owner of the information collected on this site. We will
                not sell, share, or rent this information to others in ways different from what is disclosed
                in this statement. <span class="font-bold">Cascadia Foundation</span> collects information from our users at several
                different points on our Web site.
            `,
    ],
  },
  {
    title: 'Web Site Registration',
    description: [
      `
                In order to use some features of this Web site, users must first complete the registration form. 
                During registration, users are required to give their contact information (name and e-mail address). 
                This information is used to contact users about the topics on our site for which they have expressed 
                interest and to enable users to retrieve lost passwords.
            `,
    ],
  },
  {
    title: 'Cookies',
    description: [
      `
                <span class="font-bold">Cascadia Foundation</span> may use cookies to remember if users have logged in while on our site. This allows 
                web site users to avoid logging in more than once, thereby saving time. Users have the option of disabling
                or not accepting cookies by changing the preferences on their browsers*. If users opt to disable cookies,
                they will still be able to use our Web site. However, they will not be able to use some functionality or post
                to the message boards. No personally identifiable information (e-mail address, name, etc.) is collected with
                the cookies that we set. Accepting cookies while on the <span class="font-bold">Cascadia Foundation</span> site will not put the user at
                risk for marketing to other sites.
            `,
      `
                *Different browsers have different cookie settings. With Netscape, you can ask the browser to allow, warn 
                you, or completely disable cookies. Internet Explorer has an additional feature where you can specify different
                settings for different security zones. You can choose to allow Web sites to create cookies for you in your
                "trusted sites" (like <span class="font-bold">Cascadia Foundation</span>), to warn you before you create them in your local Intranet zone,
                and to give you an option to never allow them in a "restricted zone." See the "Help" section of your particular
                browser for more information on working with cookies.
            `,
    ],
  },
  // {
  //     title: "",
  //     description: [
  //         ``,
  //     ],
  // }
  {
    title: 'Web Statistics',
    description: [
      `
                We use IP addresses to analyze trends, administer the site, track user movement, and gather broad demographic 
                information for aggregate use for reporting and sponsorship purposes. IP addresses are not linked to personally
                identifiable information.
            `,
    ],
  },
  {
    title: 'Sharing',
    description: [
      `
                We will share aggregated demographic information with our partners, sponsors, and donors. This is not linked to 
                any personal information that can identify any individual person. We only share this information so that we can secure
                funding to continue providing services at a reasonable price.
            `,
    ],
  },
  {
    title: 'Links',
    description: [
      `
                This Web site contains links to other sites. Please be aware that <span class="font-bold">Cascadia Foundation</span> 
                does not claim any responsibility for the privacy practices of such other sites. We encourage our users to be aware when
                they leave our site and to read the privacy statements of each and every Web site that collects personally identifiable
                information. This privacy statement applies solely to information collected by this Web site.
            `,
    ],
  },
  {
    title: 'Security',
    description: [
      `
                This Web site takes every precaution to protect our users' information, and we have security measures in place to protect 
                the loss, misuse, and alteration of the information under our control.
            `,
    ],
  },
  {
    title: 'Surveys',
    description: [
      `
                Occasionally, our site requests information from users via Web surveys. Participation in these surveys or contests is 
                completely voluntary and the user therefore has a choice whether or not to disclose this information. Information requested
                may include demographic data (such as zip code and age), but nothing that can identify any individual person will be collected.
                Survey results will be used for purposes of monitoring or improving the use and satisfaction of this site.
            `,
    ],
  },
  {
    title: 'Updates',
    description: [
      `
                We may also send the user site and service announcement updates. Members are not able to unsubscribe from service announcements 
                that contain important information about the service. We communicate with users to provide requested services and to discuss issues
                relating to their accounts via e-mail or phone.
            `,
    ],
  },
  {
    title: 'Correction/Updating Personal Information',
    description: [
      `
                If a user's personally identifiable information changes (such as name or e-mail address), or if a user no longer desires our service, 
                we will endeavor to provide a way to correct, update, or remove that the personal data that was provided to us. Users can use the "My
                Personal Info" link from their homepage or they can e-mail our Help Desk to change, correct, or remove information.
            `,
    ],
  },
  {
    title: 'Choice/Opt-in',
    description: [
      `
                Our users are given the opportunity to "opt in" to newsletters and site update e-mail messages. To unsubscribe from mailings, please 
                see that section above. To unsubscribe from any updates, users can use the "My Personal Info" link from their homepage. To avoid receiving
                certain topic updates, the user can simply deselect the topics and select the "Update" button.
            `,
    ],
  },
  {
    title: 'Notification of Changes',
    description: [
      `
                If we decide to change our privacy policy, we will post those changes on our home page so our users are always aware of what information 
                we collect, how we use it, and under what circumstances, if any, we disclose it. If at any point we decide to use personally identifiable
                information in a manner different from that stated at the time it was collected, we will notify users by e-mail. Users will have a choice
                as to whether or not we use their information in this different manner. We will use information in accordance with the privacy policy under
                which the information was collected.
            `,
    ],
  },
];

const Privacy = (): JSX.Element => {
  return (
    <div>
      <Layout>
        <div className='space-y-10 px-10 py-48 lg:px-32'>
          <div className='text-base font-black text-primary-900'>
            Privacy Policy
          </div>
          <div className='text-base font-normal leading-10 text-primary-500'>
            This privacy statement discloses the privacy practices for Cascadia
            Foundation.
          </div>
          <div className='space-y-8'>
            {ContentList.map((item, index) => (
              <div key={index}>
                <div className='text-base font-bold leading-[44px] text-primary-900'>
                  {item.title}
                </div>
                <div className='space-y-6'>
                  {item.description.map((desItem, index) => (
                    // <div className="text-base font-normal text-primary-500">
                    //     {/* <div className="text-base font-normal text-primary-500" dangerouslySetInnerHTML={{ __html: desItem }}> */}
                    //     {desItem}
                    // </div>
                    <div
                      key={index}
                      className='text-base font-normal leading-7 text-primary-500'
                      dangerouslySetInnerHTML={{ __html: desItem }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Privacy;
