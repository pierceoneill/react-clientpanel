import user1 from '../../assets/images/users/1.jpg';
import user2 from '../../assets/images/users/2.jpg';
import user3 from '../../assets/images/users/3.jpg';
import user4 from '../../assets/images/users/4.jpg';
import atch1 from '../../assets/images/big/img1.jpg';
import atch2 from '../../assets/images/big/img2.jpg';
import atch3 from '../../assets/images/big/img3.jpg';

const emails = [
    {
        "from": "Maxime Preaux",
        "address": "maxime@codepen.io",
        "profile": user1,
        "time": "Today",
        "message": "This is my first attempt at using React.\nDuis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "Messing with React.js",
        "tag": "inbox",
        "label": "work",
        "read": false
    },
    {
        "from": "Dribbble",
        "address": "digest@dribbble.com",
        "profile": user2,
        "time": "Today",
        "message": "Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
        "attachments": [],
        "subject": "Dribbble Digest",
        "tag": "inbox",
        "label": "work",
        "read": false
    },
    {
        "from": "Christopher Medina",
        "address": "dolor@luctusutpellentesque.net",
        "profile": user3,
        "time": "Today",
        "message": "Woops, that last pull request messed up the csproj. Mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",
        "attachments": [],
        "subject": "Broken PR?",
        "tag": "draft",
        "label": "work",
        "read": true
    },
    {
        "from": "Wylie Roberson",
        "address": "mi@utnisi.edu",
        "profile": user4,
        "time": "20 Jan",
        "message": "Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices",
        "attachments": [],
        "subject": "Learn latin in 10 days!",
        "tag": "deleted",
        "label": "work",
        "read": true
    },
    {
        "from": "Slack HQ",
        "address": "fishbowl@slack.com",
        "profile": user1,
        "time": "19 Jan",
        "message": "Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",
        "attachments": [],
        "subject": "Join the Fishbowl Team",
        "tag": "inbox",
        "label": "work",
        "read": true
    },
    {
        "from": "Ray Lamb",
        "address": "ut.erat.Sed@volutpatNulla.co.uk",
        "profile": user2,
        "time": "19 Jan",
        "message": "Trepalium is going on tour! Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris",
        "attachments": [],
        "subject": "Concert tickets on sale",
        "tag": "draft",
        "label": "work",
        "read": true
    },
    {
        "from": "StackOverflow",
        "address": "non@semmolestie.com",
        "profile": user3,
        "time": "17 Jan",
        "message": "You're almost done! Finish registering your account, and you'll be able to demand answers from random people that are smarter than you. Cum sociis natoque penatibus et magnis dis parturient",
        "attachments": [],
        "subject": "Verify your StackOverflow account",
        "tag": "draft",
        "label": "work",
        "read": true
    },
    {
        "from": "Pastebin.com",
        "address": "Phasellus.dapibus.quam@vitaenibh.org",
        "profile": user4,
        "time": "17 Jan",
        "message": "Buy a cheap lifetime subscrition today! Or we'll remind you every two weeks until you die. Quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "Pastebin PRO",
        "label": "work",
        "tag": "important",
        "read": true
    },
    {
        "from": "TurboTax Online",
        "address": "quam.a.felis@montesnasceturridiculus.co.uk",
        "profile": user1,
        "time": "17 Jan",
        "message": "Your tax refund for 2015 entitles you to $12.03. Fantastic! Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "Your refund is waiting",
        "tag": "deleted",
        "label": "friends",
        "read": true
    },
    {
        "from": "Codepen Info",
        "address": "pharetra.Nam@lacus.com",
        "profile": user2,
        "time": "14 Jan",
        "message": "Great job! Having a terrible sleep schedule is paying off! Cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac",
        "attachments": [],
        "subject": "Your pen reached 1,000 views!",
        "tag": "spam",
        "label": "work",
        "read": true
    },
    {
        "from": "Lithium Hosting",
        "address": "magna@nequepellentesquemassa.edu",
        "profile": user3,
        "time": "14 Jan",
        "message": "Oh noes! Your website (deammer.com) is about to be disconnected. metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer",
        "attachments": [],
        "subject": "LH - Renewal",
        "tag": "inbox",
        "label": "family",
        "read": true
    },
    {
        "from": "American Airlines",
        "address": "magna.Ut@nibhPhasellus.co.uk",
        "profile": user4,
        "time": "11 Jan",
        "message": "Thank you for booking two overpriced tickets for Seattle. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.",
        "attachments": [],
        "subject": "Trip to Seattle",
        "tag": "important",
        "label": "work",
        "read": true
    },
    {
        "from": "Carol Bender",
        "address": "tristique.neque.venenatis@at.edu",
        "profile": user1,
        "time": "10 Jan",
        "message": "Hi Max, please fill out the attached form to complete your enrollment and avoid living under a bridge when you retire. Ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "401k Paperwork",
        "tag": "inbox",
        "label": "work",
        "read": true
    },
    {
        "from": "Steam Support",
        "address": "sapien.gravida.non@pharetraut.com",
        "profile": user2,
        "time": "10 Jan",
        "message": "Firewatch is on sale to celebrate the launch! Vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "An item from your wishlist is on sale",
        "tag": "spam",
        "label": "business",
        "read": true
    },
    {
        "from": "DekDev",
        "address": "non.ante.bibendum@Morbimetus.com",
        "profile": user3,
        "time": "9 Jan",
        "message": "PttS is on Early Access! Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus",
        "attachments": [],
        "subject": "Path to the Sky",
        "tag": "inbox",
        "label": "work",
        "read": true
    },
    {
        "from": "Fitbit",
        "address": "sit.amet@vitaerisus.org",
        "profile": user4,
        "time": "8 jan",
        "message": "Wow! Impressive! We thought your Fitbit was off, but it turns out that you're just really lazy! Risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat,",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "You took a few steps!",
        "tag": "inbox",
        "label": "work",
        "read": true
    },
    {
        "from": "Emery Forbes",
        "address": "elit.Etiam.laoreet@Nullatemporaugue.co.uk",
        "profile": user1,
        "time": "8 Jan",
        "message": "Hey dude, I opened a new repo for our latest prototype. nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a",
        "attachments": [],
        "subject": "New repo",
        "tag": "sent",
        "label": "family",
        "read": true
    },
    {
        "from": "Amazon Pantry",
        "address": "massa.Integer.vitae@turpis.org",
        "profile": user2,
        "time": "8 Jan",
        "message": "Your food is on the way. You will be able to eat soon! Nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut",
        "attachments": [
            {
                "atch1": atch1,
                "atch2": atch2,
                "atch3": atch3
            }
        ],
        "subject": "Your item(s) have shipped.",
        "tag": "sent",
        "label": "friends",
        "read": true
    }
]

export { emails };