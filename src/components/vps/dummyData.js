import { relible, enhance, easy, secure } from "../../assets/images";

export const gridData = {
  gridData1: [
    {
      img: relible,
      des: "Reliable Security and Disaster Recovery",
    },
    {
      img: easy,
      des: "Wider Competitive Reach Easy to Manage",
    },
    {
      img: "data:image/png;base64,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",
      des: "Increased Flexibility, Reduced Costs",
    },
    {
      img: enhance,
      des: "Enhanced Customer Satisfaction & Web Access",
    },
  ],
  gridData2: [
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8CqP4vNkYApf4ApP4Ao/7///17yf7H6v8Aof/p9v8oMEGAzP4Apv0kLD6T0/4cJTmF0P4Aqv30+/2f2fzz8/QWITbL6/y85P5vxvzv+f3v7/Dh9Pxnw/xaX2ogKTwNGjFFuP1Zv/wfr/zW7/1NU2DU1dg0O0uw3/u1trs1sv2HipGytLnLzNCPkplNu/xtcnuho6oADyvj4+VARlVgZm+44P54e4SanKOJzP2x4PuLjpXc3N5QVWEAByfAwsYHIiTtAAALiklEQVR4nO2dDVfiOhPHS9MEFMJLyzsoQruKqCs+sqvXdR+//7e6mbQUmiaAu0nBe/I75567uwLt35nMTCZpcByLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFsuJQcix78AExCHBeVSZt1u18mBQrrUa7X40Hv5HtBIy7LUH09BHGHsowfOwR8PFrNWPnK+tkwSV1tRHHqKUlkTYvyGvFM7a0Vf1XBLMZyWEJNqyOhENW70vqJH0Z8jboy5ViTy/Mf5aIoctHx+mLhWJH/tfRiOJBsw5P6MvFonDdvAVRJLoAqFPy4s1ekzjse9/H2Q8oH+ob23H0zYjaZT+Ql+scXrCgZVUFt7nx19OIxqcqquS8h/EFxnIr5ykGaPQ06KvBK5aO0GJbQ0OusFbjI8tSIBcYI36GLR0WgXA+VSbh6YSvVPKG1H4lzlCinc6g7Hn6xyCG9DFaUgklZIZgUzi7CQk9jRlQanExxOQGB04CfxDice34tjQGFzjDY4rkQShWYGlEm4cVSJ5NJEmsqD+MRW2tCf6PNSPjiewb96CIHFxtNnU0HCUWXO04qaIQRiDjzQU55qnE2poeBQ/LcpHgaP4KRkU5aNc4hHiaVSYjwJ0WrgRybQ4HwVwBa761ClOYeWsUIEsKYIRH+oPhSks2IRQvIHEb/97Kkhgr9BRCMQj8bbZXRYikMyKNiEzIozEjutOfo8KUDguXN+6a3NXd+urZ/MKGzvmFFS2aK8B6p+zK19fuW61AIkLlQbqYX86XZSwrBygso4OxZiv5meRfb7Xhku7jOqNaYk9VTkD6/FQQgaVQf4mUVh+zNmehr0+on5ZQNY6oI9w7V91LtHwWGwpFOLa5jVjsQ0OTSUyF9+JmWGmXkW8QiDNRrCW8dDlVlwZFRgonBTNCaxyz9t9PhW4yKihPvyjGISpP3QCj+aqTtKXjHTM3XQCCt36D5MKx3ITojYzUiXEsOOpFoiFnfeTv7ecfS8qE1i1ChsZmGCZQjqDT1hWucTmd4MK29J0T7kXJptM8JRJrGypAR8dRnmFkUPYmMsEGq80dMiFbCCGQ3b1p9iIbvPDmEAykDopZYMpSuOLN2Av3Hgz9cfsfRVRIQSPimgt1FIlXAzefN2NFbrmAqp8GEK6IrP0/ikLC6SW/hU8uHeWU+i9ScojxAJKTZpweb7oJDZ068bqt6E8ztDyuL31E9x3yM+1HCgqyTSnELoTOWtB7aLoH6AyXP9bNZHYNFWFVxRVN83sNPHmjpMqBLM0EBYVeg2Sb7mesde25bGMTuH6L2uFbtOQn7YPagNDf+xn8krcgJFFcwrp2MktC9BHokxHccZ5XbupW700IpD8c1iDZjMOaejwISoqhOiba9jhHksVqrkZhtL0vrlW6HZvjSg8aOYEpiCJfaCNNPdKOYXs77lmCJ8GPqquwHsZD91UoVs3ovCg6T3tpfnQayWhQ1BIQ8LSi6jhbdf0GrPB7TxvKZy8mpB4yIIabpH1r4K3cwdeKaeQFWG5liQ4tFDubcPTxWjjpWwomuhNHdAJ9mDpNgmIsDoWW0W0YZDPClB6nqvHOWqAwqpr1ojBfoEIBlMv3sCAoLiJzZ5ViGokF5ahEFfOXOA9/7Ab6Nxs23Cl34jB3mTBBSbL3/E9x2/JKsTjNBSleKxgIzs+H8H0rLPaUug29YfTYF+bbVsg1GVOtE6L2woh2Iq1Ay2d7063vKjprLbd1EBO3GdDBNOKcWIdNNsKvhmFUNWJeWfLow9W6Na1FzZ7FMYCEwvClGJjlG2FvCQVvYEqJoabD8+NQxZr9FenBwhc2wG1oVxbPw3EK++zuM3EoiIRQwqfYe7MtlzhKCPQhJvudKOMwBJlI7JfayXUmEHf2P9Z1cnni+JuMVQh6iYXx+PZoi5I1O6mylYiu8dFQLYEcoV5hhimSGQupoop7FPdrRAy/nZNw6Op7sk+UVaNOYHMF7clkvg/Agp7eX/EbwRmILsU8gX9a0Fh/U63wrLq14wWgbgNDE1rG8pQgZdrtZBCfS36I/XZKJTP7TcKoY3x0cwqrF7qXj1VtfTRYkhy+9y2e0w80mCINMzbcv4Ie4L37Q1AMD98mriCRN1lzZtcIRPokJ0b+dJsAYXOufirKAUOkXfxNq/hezLuhEjjdnWHmlwai6/OBDrRThukCqH4EksXmGOp5vbpNXjD9EdVUKg91ARyGWNCIh9nGp+CH6YK2ZQ4J4ae78n2pbjPKCZ8EzlfGkz5OvvwPIvQWF0r5F1SQT00v/fOrXkofb4SFda1t79lOxLjJpGA0P73KnEghhsVS1JQv3cDC9jZuW3mFOpOF/IuA50xNxUQyjI6C/hAxT1nnGsDX5BAnWiT9/Nm4i8x0LhV7a3hobRuo/hMREyc9Iwva1D/n/wn0LOzfVNrPjt0VqJAt6p9HUq6bPIZpIvB+2GFkGwYGlDovBW+1wSIs+F9bhiaUFjktsQNiG9QvBSzoYlxuG8GYEohOGkn76Ru/UW7wvyaXwHQBVxZ4qRu/Zd+hWRPeWUCxJ/W+5Z3UjON78PWn3QClTmbG0pM6DbvDSgkhccaqMwd5yWX7hndawMKd+77MgKCXQojiT5mQyPbh3JtJNMCuQlfxckv55uZncN7JquaoRRG4ehGEmfcqoFkARQbTuPHnuUmNNASjlFtWDBBnAvlo9DtvhtSuGMhUzuwuO84d1ITugbW1xKKq07jivS9KxWof/67QdF0007yeJ6k5gaaJh9QGBQikZa4j97LTWjQSR31RlO9xAXps6xeg0hqchem40QF5P3kZIXfch81sECaRbl7SRvx40DOq8KE5jYormkbfv6J73RwnAeFQENVd4aaUStSyk/ieVboM7V3LwMZGJRIKT/4qyOb93KujNUzGYnGcgYtxUdiLeXFTBGj0KxEmpz5dacahO6kiIe8QKKZoxVoGJ9N912R6lmYKephRJgs6s+LKDnuSy2wXkCYSaloP4bHewz2CDSwzWQXms+poWetePuBegy6XRMtNjWB1skiWp/WtlQLnBicNcnQ2UClaHbOP3R0qUoTBQ9CQOOz3chPzqK7Xsm6o8kYXBWUKNYMtRU2FF/EBnTuJ6pKhgl0C40yjj4npXianOzZeVEHUbdaLaJa20bTGRLUC+fJDq6HlXoIMoXmZxQCimcuP6kPp/o6d021hzKKtqCOVQyK8DQ9z/PWVYcYoFm4CSX9b0pLh5c5lCK/HK31XV/uGIGxkxrq46uJclq8sD9uT318wOEDFCF/1k/PKn9+udrpoBzte/X2ITopRS12x8QZt2chnK6vPJ+A+aa/GFSG6Se9vzR3O2iM4QZbDtFJ8bS3/gkZRu0LZkvMvwEikcr/hDyMwsfaz7Gz+YqLh+XkEH0gsViF2QfQKH84aQNxgvNo3ijPpgvfp7B/1g8Xjxe1duV8uP260f3v3QF0GyML22oyE2A8jVSbkoOU3I86H0v3cH1wbIRZScKNbzkpRX9wvvHodlk9aPht0TX3NH6eXmpCih8/+/04o4/vq6u91qtXq+JDFgVOLTZP3SN/fri+zuj69nV5c7XfeNXmza/n0V09+8JJcVl//TQ2RRefMeD7i/v/q12151pe9cdtJ35DZq5hYquXgmS1G4WfPUS98/Dr96RZ3zFFmnRvlveb5H69zLhzUVk/fsCEerXh/tfmeb69u6xeNSdsoGW01SfN7s2P7w/CNPfhspu+zsxDzjKgBYXCv/jajc777dPd8nLldq84TXf14+7141m68vmxSotWo0ujW/QxC6EtPZ/VGTH23fe9m3SnDDwfK6WBvYUyx5vhqc4jVFEJYzgo/jsMOt95euwWdIjiUb41bfTC0mNBK0/H4n05mRRanB6B65cia1OLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFst/j38BZmzg/4PwQa8AAAAASUVORK5CYII=",
      des: "24*7 support Call & Chats",
      link: "/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HkwCUkCsraJkN07-IqfVqOTZH7Od57Vnsw&usqp=CAU",
      des: "Data Backup ",
    },
    {
      img: "https://www.shutterstock.com/image-vector/operator-logo-vector-icon-online-260nw-2126789186.jpg",
      des: "Strong Expert Support",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSM9pj-ieM_-922tzzy3eO8cszjZcZwgxaKA&usqp=CAU",
      des: "99.9% uptime",
    },
    {
      img: "data:image/png;base64,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",
      des: "Help in Migration",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J5V3Czk9OWf152G6ML6oCDjderK5eNITxA&usqp=CAU",
      des: "Encryption data security",
    },
  ],
  gridData3: [
    {
      img: relible,
      des: "Server resources are not shared. When you choose a dedicated hosting",
    },
    {
      img: easy,
      des: "Increased Flexibility, Reduced Costs",
    },
    {
      img: secure,
      des: "Reliable Security and Disaster Recovery",
    },
    {
      img: enhance,
      des: "Enhanced performance and security",
    },
  ],
  gridData4: [
    // {
    //   img:"https://miro.medium.com/max/766/1*hxwh1DxpabwY1H6zzRljgA.jpeg",
    //   des:"Pay-as-you-go for computing",
    // },
    {
      img: easy,
      des: "Creates a Professional Impression",
    },
    {
      img: "https://www.tanaza.com/classichotspot/wp-content/uploads/2014/10/Tecnology-Performance1.jpg",
      des: "Helps in Branding & Visibility",
    },
    // {
    //     img:enhance,
    //     des:"Full-time availability",

    //   },
    // {
    //   img:"https://thumbs.dreamstime.com/b/24-7-availability-21060798.jpg",
    //   des:"Full-time availability",

    // },
    {
      img: "https://uploads-ssl.webflow.com/5f1b4085f4118a504729a0ea/5f1b425d1f6646b216fc8be6_planet%201.svg",
      des: "Gives Control,Ownership & Flexibility",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJckHTm4qB2Y8KGBKuliPnakOq9HHiAPUNLe7cak7fYZCpNkkA0Jw4z2Kxtsp_6RzXe8&usqp=CAU",
      des: "Instills Credibility & Trustworthiness",
    },
    // {
    //   img:"https://www.shutterstock.com/image-vector/plumber-he-running-carries-spanner-260nw-384955384.jpg",
    //   des:"FAST Services (Feasible, Accessible, Secure and Trusted)",

    // }
  ],
  gridData5: [
    {
      img: relible,
      des: "Kick out the Hackers",
    },
    {
      img: easy,
      des: "SSL Boost Website SEO Rankings",
    },
    {
      img: secure,
      des: "Secure Payments to Experience Safe Shopping",
    },
    {
      img: enhance,
      des: "SSL Increase Customer Trust & Revenue",
    },
  ],
  gridDataSSL: [
    {
      img: easy,
      des: "Kick out the Hackers",
    },
    {
      img: "https://www.tanaza.com/classichotspot/wp-content/uploads/2014/10/Tecnology-Performance1.jpg",
      des: "SSL Boost Website SEO Rankings",
    },
    // {
    //     img:enhance,
    //     des:"Full-time availability",

    //   },
    // {
    //   img:"https://thumbs.dreamstime.com/b/24-7-availability-21060798.jpg",
    //   des:"Full-time availability",

    // },
    {
      img: "https://uploads-ssl.webflow.com/5f1b4085f4118a504729a0ea/5f1b425d1f6646b216fc8be6_planet%201.svg",
      des: "Secure Payments to Experience Safe Shopping",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJckHTm4qB2Y8KGBKuliPnakOq9HHiAPUNLe7cak7fYZCpNkkA0Jw4z2Kxtsp_6RzXe8&usqp=CAU",
      des: "SSL Increase Customer Trust & Revenue",
    },
    // {
    //   img:"https://www.shutterstock.com/image-vector/plumber-he-running-carries-spanner-260nw-384955384.jpg",
    //   des:"FAST Services (Feasible, Accessible, Secure and Trusted)",

    // }
  ],

  gridDataBackup: [
    {
      img: relible,
      des: "Low Capital Investment",
    },
    {
      img: easy,
      des: "Scalability and Ease of Management",
    },
    {
      img: secure,
      des: "Reliable Data Protection",
    },
    {
      img: enhance,
      des: " Flexible Storage Choice",
    },
  ],

  gridDataHosting: [
    {
      img: relible,
      des: "Improved Site Performance",
    },
    {
      img: easy,
      des: "Effective Data Management",
    },
    {
      img: secure,
      des: "Improved Security",
    },
    {
      img: enhance,
      des: "Consistent Tech Support",
    },
  ],

  gridDataLicence: [
    {
      img: relible,
      des: "Clarity on usage rights.",
    },
    {
      img: easy,
      des: "Get access to updates, upgrades, and security",
    },
    {
      img: secure,
      des: "Receive technical help",
    },
    {
      img: enhance,
      des: "Copyright laws, impacting your reputation.",
    },
  ],

  gridDataLicence1: [
    {
      img: "https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297-300x297.jpg",
      des: "Microsoft",
    },
    {
      img: "https://tsplus.net/wp-content/uploads/2021/01/square-transparent.png",
      des: "Ts Plus",
    },
    {
      img: "https://w7.pngwing.com/pngs/876/879/png-transparent-coreldraw-keygen-computer-software-graphics-editor-others-cdr-balloon-logo-thumbnail.png",
      des: "Corel Draw",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1477px-Adobe_Systems_logo_and_wordmark.svg.png",
      des: "Adobe",
    },
    {
      img: "https://w7.pngwing.com/pngs/727/102/png-transparent-autocad-logo-autocad-civil-3d-computer-aided-design-autodesk-mechanical-miscellaneous-angle-3d-computer-graphics-thumbnail.png",
      des: "Autocad",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/60/DS-CATIA-Logo.png",
      des: "Catia 3D",
    },
  ],
};
