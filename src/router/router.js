import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Gallery from "../components/Gallery/Gallery";
import InvitationCard from "../components/InvitationCard/InvitationCard";

const images = [
  "https://phx02pap002files.storage.live.com/y4mkE4Zs-15B3Cp_zjmaHsrzPZnBd9W8kRUbuTpbcN6cVcvgfRN9Z5Xq9aEyNzSPDBRFxC8f5gs92eLdPa498XyepSXKSE9DfJBiYisDSaxkbws9zlooC_5YmFOlfsNqDS_nqEPvuT4jtQXF9tsXhdaAnnUbVb3Ny7vaJcfLFnrHZpdassKCAfM7XSbGIvhDVgJ?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mhst_sV2T-_jJKobRuHulOsGaBR1nSEQkK6_vCyH9HbUNkwQhzqr4HS20SftbgFUoeWkKuMx8UaJHzb45mHnKqaTJz8Zlp4-FSDKFTxIPrvzMZhOu6H07MV4QgLRIqJfAVzarG7yP5sOZGd7MBLVWP8Jt9emrHA_gbT9fV9fMPJZxQaT7cvEhNAGgSEFcbyWB?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mJ9qSoFR76W1_i99yJJ1ST7SzjwdX7wzYqPl2gwU0x2X4lYuq8BjXnX1ctGDmlg8_bVGjHFo3z_Q29j5ZWh3bLiDNd947MeaxHNUPU5AM99rYhcTsAQ7HF4w8HnZcgqEays4z-pwJF_Va6vD5Mf9FQuMJZ3WMVvhTwcswq_rIRhdyvhsKsiiS4DZAQO6XBEuc?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mJXf_5dA9CSU7Tr5SNNcGX42SwzPQH6HLcXJXw_RhWpKQ9hcm6HH8qf0GFU0WsHdL1gQ9cKcJiIJQUR3bL0hCqIfE1v144Mr1k0jBTIjWvDVYlbXRBzXQPXBMVPVCW4nNfBhWBwrPRTNj7u5ZdAqE1OWLcm9zCxsz8oXFWEaf9g6VYrvQaePfOONCzLJpFx7a?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mpOHiK6h1zXUhCfPkoJ5CrSUwWTg66MHhc2OTnttINH5wJs5_HgdgwDoLQ59vO3CNKqmusiQZ4ZUIb-Jv2dlya_L_bxn4l53eYDNd1ypbuU39mgg00cTAaR2v4O9wbPr585NByIpZiyZMLXsOYIoK5QwJPNTJ6wYZRjGa2QWVogYyNXLC9usxDQ7gMR_8eVUY?width=683&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mISWZPyYNFeo56gVa-apOMRMlfoywNNXYqSSq8k1i24AXm4SY-VCUy5Ca1d0zgHmrm-QKdsvbr9SiKtZtwyyoTrFw-HR37g39t98gV8OqooF-2pzZlLKwEu3M_PtNJuk2VI4oqeSj1Mbl4f5Bij8ojjhD1rxDoTsxP-lkNUOZRx0zaAkp2JGdGH5iIehwPVSj?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4m1p5jkA2bJrY_F8h-F8Cs0RDw3ZZxKHCn-dsqZF3vMwc5VIosesXGgbTXL0l09qQBhULfD_kfVqqk1_Sdxsa0x9ES2VFguQ3IZAz66-loSJfCIYitlmf2U8pIAj-NAYBpQwbEx8wvDDxxj0M-Fc_an36o5CCQDikinV4AH4b5EE5Y_GWS7dw8vKPYPmxMpefk?width=1024&height=768&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mGNqzZS1rhlbcjmaxkd9X4Wya5ecPcd7AB5eMrLMxXf1ITnQhZ3-DEqfP-na0BjCjguwNqbgMzk5wMOwrV8vEqiFOs6FXvwIahMp7RgCuV7JqMVHS4efaQTr096c1vcfCZtUolIg7oMKjS18XYOECzxqBm-23CwCnkyPI7s7nP8QlJmDIMvbumt3n5WOGPKty?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4meB1zdpkp-lBWcujdudS5kQcDsRAxPuWjrldFQRA1sWZkZQSulhZZPlmPGWLkcwckwdIHTNMESD638YCECuk4cdxHCS_irzEwf1ipCCzODve3GJ1eZD1s0dZlwxvvfhmaYecoZDSqCpNElYhQqZTsZdgQ1N2yCk9TO8I9bZHUUCNnD087V1b2YxTEe3t1ypoN?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mh33O1g2fRBiXapp_A6Gaq-PdRshgiHwX3PfPCkm7dgHTQgkZWZolccKzznTP3jbUfvFfXwb-N92PppA75Mbhdsv7QKsj9Csw6YHO8s314_m4UKQPeF4UmVf61kpIssTLsir4sFXUr1PGKjieaqe_6hq8Ta3ZL3uoJznai8S-zjW2UE0VWwpYPQhihtBmRRKb?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mqlgdtd57x57BUKeBpElg-3TUDN11jUk-ZCaKV9T4UJUigUAJ1rcdeN63OC1-flRIS72zb-ab8qQcoEUwlvyPzDwKk9zzp--iqgSw2BAM68zqH5gZUIFIclvzO0mk8CSza90teHTzb403LiVDSqw3YCs8upMBZtMxC_WtUsktahRtL7NjjGiMQ1ShcGA9qNVJ?width=683&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mj84aAEdI-768qUX5_fq11EVbrFlj_Q9zZO_7acrR18YzQEGwq_5qbhe4o_Mg7iLnGouOBFgHBy1AmIXIxzFC30F4l4rMXggrbwq9ONUzQHtG4ljN6ja1ToKgzfj_WcEhV1jjRPnqXsXtw8WdlpgQgLXWDSCielh8g137WX9YX027CH3yJAwJ00qIyuBsySR0?width=683&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mjScatZzzGOu1aLuvNIFr7nmBLvtasWR25zglHAqfBt6tljkUMwWMZfAnt7augSFXHH8yfRxbmmA7eRioT6_tqCzfD5rNZdP6p4Vg-LC0o6g6C5Uf7dpfUCxh0ylc_qGi6kupRVmkGlXGtniqvlYPj09ZoKAtKyExI3nsJbDXMtVnE_DTV9z8Oa2Jb1jorJ00?width=768&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mhdXXsJdZppc33lbeIUYVNC9XqeBek9ad_Qw_Z32BuM6FqJANC4JpJnwmXAjAx_M3uv91PS6vYgVIZlaCCbvE9AZx141SCVEFP1jxl1kapn6rgJYRhB5sATYCOIhW6k42qVz1k1LFw5s5ssM_bUYJSEAXUl213Y1FHau0ocrFI3omfIKTPBkjA5LnJp0s-nTt?width=683&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mgi2IQx6nwu0dNjFZf4QJViI7R7EyBE1WkVmHeiOcld5p_j05_jzd9wERlHZOCq1ps6Gs8AHAreQ1HhgVvB3jp6kjnCfE6nZfTD2F6VORGWtjDwMCPGzjld988OU9RgYXnxDbMtQnGea7nPiUtRzTC8Cb_cCZp4MXOPbcRFfhiXvh92L9o_x-pG8gQGkyb_z_?width=683&height=1024&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mDuNLMEnoVwGhAMgb7fNXQtSYHWIE2IqANewLKq2iLtt8c2z9iXB87qJnYcjqupScc_-g8SnotmxCGMq4NydK0kZjTrdHZVAgQ6LWgKb0_6VwiK9yAeyTDWHKlbpGkrJcc43SdtZG_atB2s5thB_bNE-pH98EefKB5s2FaAELiOppA2cyKt4PPiYPoYowWRPh?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mZIZy9312PyIXzPUYmoOC2QbA1PsMTSNRohwkbQbb-apVEryuKasxFizO3UktGFFH4X-m-YM9UhLPVGsGvtw0lDpWDi8mJy8zzzjBclosEnjNsQ56KvseLWk2nLy6oDt1sdxMT2I8KknfkKPs3LKLK4_yrVlplGXnPCcKhAJWrzl3ONnGYGjxB_5Nrl8lSOaw?width=1024&height=683&cropmode=none",
  "https://phx02pap002files.storage.live.com/y4mXz6Qi9BHqh_2nxnHLSmOlm6di9XXVzKB8F_EMRigYhIfQfZWY_6ENYiAUKRUarTpRkIl6Eba8jsN9t31dFe3BeeIV6Lpzp74PYzR6Z_D7psbJ3NCKLJIlgSKTBWfvbqsS8YckDVfUNERnkSiRRcY9hNjiMULhrZHMvBJ_9b1TLaFatxRJRphYWDvsdvyWbja?width=1024&height=683&cropmode=none",
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
