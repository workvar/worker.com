interface NotificationPosition {
  position: {
    top: string;
    left: string;
  };
  notification: {
    photo: string;
    platform: string;
    name: string;
    message: string;
  };
}

const notifications: NotificationPosition[] = [
  {
    position:
    {
      top: "10%",
      left: "15%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/1__Cd2VdUSF.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/slack_4vCjAfAYl.png",
      name: "Mason Ward",
      message: "Approval for JUL-2025 is pending"
    }
  },
  {
    position:
    {
      top: "80%",
      left: "5%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/3_l_f1VObGT.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/slack_4vCjAfAYl.png",
      name: "Tess O'Connor",
      message: "I could not get through to the client"
    }
  },
  {
    position:
    {
      top: "15%",
      left: "75%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/4_iqQFtlq37.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/instagram_ij5aYrF88.png",
      name: "Mark Evans",
      message: "Drinks are on you tonight!"
    }
  },
  {
    position:
    {
      top: "40%",
      left: "10%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/2_on7a8be9Y.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/messages_hWQle6Blf.png",
      name: "Garry Peterson",
      message: "It was not my fault!!"
    }
  },
  {
    position:
    {
      top: "45%",
      left: "80%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/6_7P98etEcKB.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/whatsapp_hArWhzqaV.png",
      name: "Janet Hawkins",
      message: "We have not received our invoice yet!"
    }
  },
  {
    position:
    {
      top: "60%",
      left: "20%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/7_6udF0l5tB.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/outlook_TRAyTGNUY.png",
      name: "Samuel Hopkins",
      message: "Can you review this?"
    }
  },
  {
    position:
    {
      top: "65%",
      left: "70%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/9_9zQyBV9Nt.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/tinder_xm1arlUIL.png",
      name: "Diana Lartey",
      message: "I hope we could do this again soon!"
    }
  },
  {
    position:
    {
      top: "20%",
      left: "50%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/5_YgEOwW8Et.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/messages_hWQle6Blf.png",
      name: "Lisa Peterson",
      message: "I am heading home early today"
    }
  },
  {
    position:
    {
      top: "85%",
      left: "35%"
    },
    notification: {
      photo: "https://ik.imagekit.io/canarygrapher/workvar/main-website/random%20people/8_KIEFqQbyy.png",
      platform: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/outlook_TRAyTGNUY.png",
      name: "Hendrick Visser",
      message: "Let's sync on this"
    }
  },
];

export default notifications;