import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Gallery from "../components/Gallery/Gallery";
import InvitationCard from "../components/InvitationCard/InvitationCard";

const images = [
  "https://phx02pap002files.storage.live.com/y4mBZWEIKOU6fCuHRZOG0-Qf2EV-mdGIfyNW7AwpLTTo5J4QKbMfa8wq6diL1AgnhrI0bMLIyHsQmWDqrJS0XJtgyRIiB3U6X4nZqCIzg2KIqwppQTC1N1XITf-Cmz1feSmdxBJ4un7UK0i5XLpVNYVWLe8DMvlTbzoo3OldzR3mjdP7LSUC_l9SCbLvnpv6Jln?width=1024&height=768&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mcbiKUYkcykBIPC4CocPRUERPaeRPxJG5ZZ8hQhg9KWOENSzQcRarOGr_Ao8t_l1E09Hg_MYdBfmCyR5AWFFhMQSMFxs37KHtEVi5BfR_GnXTTqysn4Aa-cbc7mPuz5ZSkTmvCSUoaJeKAZ24T5EYfjIz4kUBwLEEo11EODPS-CI6vFdQQRRGyTnb9AwKuHp5?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4m4GyFROtFxwL3O2zm_nJiH7d4sk6eKtbbHo1idvhLSg_ktqvmM4nQ1YF_iUdTXJdmHTfTorR2r0GbBYGjOuDcqdfNsiL3ltYm-XzHciJ4rLnIW510BePzngaqSHUvppS38QEiPxIhgu2uVA5VtqaIFGzVA3E_JCG22GxhAswQ0HjWHqYQRs72rmznY01C1JK1?width=768&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mavPRcfwWst3CNM3duYJt_7f3cbF1o3T8ovIYtdaL85Q8ALCHwyjDdnLRr7w9EUldt2iqkbgUHgsORZjoNf1_trOOZG8N5F-57WCeoupogsHPOoE7GV5kw9qqL5VigeDJxuZxh-l7of16Pq9jLlOACe-hdb4ogOJuzlIyhiD5mKhXL0o2UKjb02c6LrPW0hyL?width=768&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mfgUICB1oTLNVIxKX_J53ru3Kg-JyYDxDtP60RD4h7CL8NtRlYZvbvLgOKIgvD8Xz0k9SR4CCdHr0K2qxQrPmXvpz1PGk54KtFsFiCqNh_cRiHjEmh1jbLiDi2-t1kW2Gw7FhrtCm2XDvDiNl6YpFFHXDNwjAstRA4R_gEMjVThficcZZCP4d78uirWh43eEO?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mmn2SzZIHQExGUm2-eVWIB5CGSwYQin9MxyzzWpoWOCYvPfuAs9KzKXkef1QMto5TLUM6x31KlFeY0fXSAgZBb7OwnqCmOZuA712PA9-Y0DyAaHa6AFhk5RVB-3yqkXN8PjQH3F6_fZvOjRsAQ2baWu7AXMIcqxbODqvhig46v_VI6cDLxwYcFjWGIMLjQFQf?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4m0zhs82a1kBLx4h0JBGEDACDvI4zpoIy_cDwBgMlih_dbR3fhoJ44I-gWkGCP0T4b0wmYKzuRsXWRKbSZ9-CRH2TwE9t1Ut_hP-wyBbV8Do-7QwC_VCU5OVxvISCPDPk7k7ZtEVFtVfrB_xz1KlMP2WdcQQuoPdG3iHSSWKDVPe_P0w7AlaIW9d3RD8IRimZt?width=4608&height=3072&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mh1nIvXMc2qo4bhoBndtS2mgpvTnXozsqe83spDEJeGT9UOfryfX1jQ8dKaZUb1pgNhawA6A7OiwiOKUmSSz7q31q5T1HzTZ5OjXsGBBWU4W_Lv6N-j1m5wb5pT43pXkZbyxxMgVuCG58yWt3cOjtYm_oXhPiBmHBPiCOMZxd1AnE9lYujDrqESMCkj2xpOBf?width=768&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mXwIvJy9UaWn13vM9S6etPpVr9mAOPKiOtvzpyYReg5NDjjBPQKBUmFKo2cNLmNtegSC4bWAUFy260_9lLxtNyJbJtk9dU2I6ux_zn-QZFo63yn4ghOw57GSPccNPnPzwkcFOZVvkQZuA8xdBdENZ-G6mwkjpefwszkoqrQLja7M0CI7M26tlYJPS-doIwBJx?width=1024&height=768&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4m1lyFvj6TcwryT5YkgUKO1P0c8XzNB2fLEBTOLe4VKc6kgJ0fuXX7AQrFSby_oB-XOCtdDsqKqcuc4Abccm2gyYLbQawngqplIctf7t5jtGuD_Nyu0VAu_XRFcg4Yg88e1L5ZBX-T_WsmfJbhQfrNHfDCIF3lw-plmnvCjvD7bOslwI8Rn5j3WFTTIGdY8DeE?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mc5T--tmVyXQgU-QAxRVxERTZIWk_j6t_vmDLePpLUYt1ZHr4VCIlBtTtZ-Pf_UzYL1x7kZzzHRM9Bxorge7b-kDqqs2XMiwQoNhMwrzGQsnol40qklft9l2-igwStDMUWFG-9noUEMbEZ94ekVFW3M56TiNDWpYdUYfdQy_7jsPCREVykjpjWClrG8V07_fA?width=683&height=1024&cropmode=none",
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <InvitationCard images={images} />,
    },
    {
      path: "/gallery/:initvalue",
      element: <Gallery images={images} />,
    },
    {
      path: "/gallery",
      element: <Gallery images={images} />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  {
    basename: "/oww-invi-card/",
  }
);

export default router;
