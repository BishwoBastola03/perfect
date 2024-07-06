const axios = require('axios');

module.exports = {
  config: {
    name: "fun",
    version: "2.0",
    author: "kshitiz",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "bot will send you random video to entertain you",
    category: "𝗙𝗨𝗡",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "let me entertain you wait...🤡",
    });

    const driveLinks = [
      "https://drive.google.com/file/d/1nQomeKrHI7-7vahGQsfijO-5Rt_tGdYG/view?usp=drive_link",
      "https://drive.google.com/file/d/1zbD5B9ku22u09d6zz-NupgMnyeJ_VpYP/view?usp=drive_link",
      "https://drive.google.com/file/d/1zT-MTCwvxTEseusKpWu1CwrxuRjZLvvb/view?usp=drive_link",
      "https://drive.google.com/file/d/1zHgAS0nKfHzGeF1KdFwYYLF6glEGWIPX/view?usp=drive_link",
      "https://drive.google.com/file/d/1z6rOKepFGfMA1akKBvKF0ywGiltkPVYH/view?usp=drive_link",
      "https://drive.google.com/file/d/1ybNhbKiLJ6csxjnRCJ-h-usAVR7k_d1_/view?usp=drive_link",
      "https://drive.google.com/file/d/1yVfBOEaDZIkFhRWvuJy37cyPF2yENXWG/view?usp=drive_link",
      "https://drive.google.com/file/d/1yT1vnYWnS-sxB3EHwgjfTiiiv_bxroq_/view?usp=drive_link",
      "https://drive.google.com/file/d/1yPTNUDL2bKdbHHZEVX3jUux1ISS04BwQ/view?usp=drive_link",
      "https://drive.google.com/file/d/1xxSpPT9kzjmgAa0fZ0Hlcg3k5i9_KywP/view?usp=drive_link",
      "https://drive.google.com/file/d/1xewYAnHIv8rZbDgmn0vmVzquMqTUoavK/view?usp=drive_link",
      "https://drive.google.com/file/d/1xe3IAKKgndnKNW2a6M-uk5wOgfAuDon3/view?usp=drive_link",
      "https://drive.google.com/file/d/1xYB0Y0Rcsm2RfMjfCRbnIH0YdLxdT4M6/view?usp=drive_link",
      "https://drive.google.com/file/d/1xWKqCNOY2BI1HgHW7rd30LaW1gPTx5o0/view?usp=drive_link",
      "https://drive.google.com/file/d/1xPDlVYOiX0tCBJQzKhHZJtV912LeeFi1/view?usp=drive_link",
      "https://drive.google.com/file/d/1xMOCUFUAJABKwUy2fxqOFrgkNx1Rwfl7/view?usp=drive_link",
      "https://drive.google.com/file/d/1x9qls_cZZfxTdfJ-5xchGXntPypx0cuN/view?usp=drive_link",
      "https://drive.google.com/file/d/1x6Ef9EsU49xREiMVw-ekg6NRjL69j9lR/view?usp=drive_link",
      "https://drive.google.com/file/d/1wvjVeYhL4rvLKHr9WMuuTI_AhDx5NbFK/view?usp=drive_link",
      "https://drive.google.com/file/d/1woIwoJGCFGNFdoDw05jlQtsnkHc7XWqz/view?usp=drive_link",
      "https://drive.google.com/file/d/1wbkpgnWCxoiGh109sUASqz2IrgIgqrl1/view?usp=drive_link",
      "https://drive.google.com/file/d/1wYbOFPvOH1mT4oNOEDW6dE-7p5JSp_VY/view?usp=drive_link",
      "https://drive.google.com/file/d/1w-5Yd4AXfA5gAEq7Dgzsh-Q-lmt9w8k_/view?usp=drive_link",
      "https://drive.google.com/file/d/1vVdYcgW8PzJYQGTiGT6ZFAS_4QIDyhAM/view?usp=drive_link",
      "https://drive.google.com/file/d/1vQvo6QHCJee5KCx9ruvyoe782oNC6V7B/view?usp=drive_link",
      "https://drive.google.com/file/d/1v41gD8bRGLDlfEZ0aL3z3yBa6U6CzEID/view?usp=drive_link",
      "https://drive.google.com/file/d/1v2ttqI9piXZuw3OQXoz9OviE2eZJ-Fe2/view?usp=drive_link",
      "https://drive.google.com/file/d/1uokqpLLY46lGi0lNrQDw2057nC4eZz6C/view?usp=drive_link",
      "https://drive.google.com/file/d/1unNcvMLi_xj_BtiqQ8BnUHabdO8mHB5o/view?usp=drive_link",
      "https://drive.google.com/file/d/1unNcvMLi_xj_BtiqQ8BnUHabdO8mHB5o/view?usp=drive_link",
      "https://drive.google.com/file/d/1uj77Foa7RXiNuWZqbCwayXuiu_a4doro/view?usp=drive_link",
      "https://drive.google.com/file/d/1uJ6bTDKbBnbKEhKhu2fD7dJm-EnxurKR/view?usp=drive_link",
      "https://drive.google.com/file/d/1u4YLMxZ8SOFWTtM_kNSPdeh46CvceoyL/view?usp=drive_link",
      "https://drive.google.com/file/d/1u3kO3sHaAQo9iH8MaYTgL_RG0OmLvu6Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1tyZJ3d_hBk0v5Jq9F9CpDz95R8ABWPzC/view?usp=drive_link",
      "https://drive.google.com/file/d/1tpQ6WTWAhR1LT8moFq-Rfh3GHl3nSzaE/view?usp=drive_link",
      "https://drive.google.com/file/d/1ti5upw8wTjhcVGAgq7g5GB9uztgJxSp_/view?usp=drive_link",
      "https://drive.google.com/file/d/1tUNZHzERtg8GBvIwx5eb2xQiD-dumHtW/view?usp=drive_link",
      "https://drive.google.com/file/d/1tKSgPS0KJsnROOdo-cGSWvCNWtlI6k0g/view?usp=drive_link",
      "https://drive.google.com/file/d/1tEF626-xg1VfHdVdJQyP-o4AIm0eqyg8/view?usp=drive_link",
      "https://drive.google.com/file/d/1sbku6rmhZnglfwwUD82Ey5S7Du_SUEjB/view?usp=drive_link",
      "https://drive.google.com/file/d/1sNgj36qJd51BIk2XUMfy3hRGdQs8-PfE/view?usp=drive_link",
      "https://drive.google.com/file/d/1sJC0ylyr54tJSDEPOg9uY8eyj5_xClUy/view?usp=drive_link",
      "https://drive.google.com/file/d/1rfH4LnDb6kB07VkDXFGUTZvfwdCEyOGw/view?usp=drive_link",
      "https://drive.google.com/file/d/1r_ytgUK5i78jFUD40S-ZrgR6HNoFS9Pv/view?usp=drive_link",
      "https://drive.google.com/file/d/1rUK5FMrKfcNGgyNY9INvkk3mne4lvjbu/view?usp=drive_link",
      "https://drive.google.com/file/d/1qpB50iNJl8dzLK5Ff_WR2_r-Jn7Rq4lW/view?usp=drive_link",
      "https://drive.google.com/file/d/1qWzcHUKPHQ1JPvCXziNCbnbmqRwZcgtN/view?usp=drive_link",
      "https://drive.google.com/file/d/1qVTg6cZ1FHyV2WOHuroI1SsyOAZ0Fp3A/view?usp=drive_link",
      "https://drive.google.com/file/d/1qTHn28KMHaV1JTqaQKan6y5gjQMlr5Gk/view?usp=drive_link",
      "https://drive.google.com/file/d/1pvKrSrJAg-7NErp02uHvIAnAxs6_ZmZq/view?usp=drive_link",
      "https://drive.google.com/file/d/1po6wi-HVoUMQpi-c7jghueopMHNTTccW/view?usp=drive_link",
      "https://drive.google.com/file/d/1pkVZEPC5fxXogLYHqCeLnloBYHmlCPbV/view?usp=drive_link",
      "https://drive.google.com/file/d/1pjNTZLxyK7fmKG5A_xLhvJF0ks2niWTF/view?usp=drive_link",
      "https://drive.google.com/file/d/1pU4gksrjJhDgDqPeSVSJ9pshw_VO9Evr/view?usp=drive_link",
      "https://drive.google.com/file/d/1p8G0jo0f_KxyE7Svw1TDBFbIvUJa6p6V/view?usp=drive_link",
      "https://drive.google.com/file/d/1p7EDI6LBYnWPpEyhOb3K6RLmABrrTwgu/view?usp=drive_link",
      "https://drive.google.com/file/d/1_kGsktkVwGgiKlWmhTVbJqbFirOJP9R7/view?usp=drive_link",
      "https://drive.google.com/file/d/1ouqvUlICJbvNs5y0mU7zNZ1Nk4xyy8Gv/view?usp=drive_link",
      "https://drive.google.com/file/d/1ouHKrRsoUrHyqeyhLEZBfSWg0hx2KYyR/view?usp=drive_link",
      "https://drive.google.com/file/d/1osIiX9ZVVZroGhb-s5KQAFHcoFXJfORg/view?usp=drive_link",
      "https://drive.google.com/file/d/1o7Cygiyy3ksOyTDi5evZTtZYoYMDYj_v/view?usp=drive_link",
      "https://drive.google.com/file/d/1o2oI3cTJfARQDh0D2sc7l5DsHRvz3NPm/view?usp=drive_link",
      "https://drive.google.com/file/d/1nnFOMIJw3bZL7yMUbIxJzyuUKdY8ogrw/view?usp=drive_link",
      "https://drive.google.com/file/d/1nSndn26Ys686qQjPt4KJytob4_aumrFi/view?usp=drive_link",
      "https://drive.google.com/file/d/1n4Qd1V87ZD6pXc5Vgl2xHor8eOW2cByg/view?usp=drive_link",
      "https://drive.google.com/file/d/1mymr-BJmhf4nv75UaFhO77yWS-YJWvG2/view?usp=drive_link",
      "https://drive.google.com/file/d/1mnuNrtS5quTOOjNJrFJuEut2UHqcenRe/view?usp=drive_link",
      "https://drive.google.com/file/d/1mjXplYq1hfFAPIpDPAVRhTgKtNsYTory/view?usp=drive_link",
      "https://drive.google.com/file/d/1mZQwEIjPDF_Hjw1zv_bnXQdoQIrYRgRF/view?usp=drive_link",
      "https://drive.google.com/file/d/1mXlrJWeq3-YYn_Y_V5TFxDen7gnhLkOQ/view?usp=drive_link",
      "https://drive.google.com/file/d/1mNGdZ4xe5MmZjUjKdu6n4m89YWBeVYkO/view?usp=drive_link",
      "https://drive.google.com/file/d/1mDtUaFDLbIgY3A6568UHAH8impthkr6E/view?usp=drive_link",
      "https://drive.google.com/file/d/1lYSXXk8tESGHDGnPAwYIznXxl7gGpOQK/view?usp=drive_link",
      "https://drive.google.com/file/d/1lTqLjchT0JD_sS_CFlhDnUQmvO108R6m/view?usp=drive_link",
      "https://drive.google.com/file/d/1lJfU8CfkNHyP3tQGjkeLSXTOd0gjGrAE/view?usp=drive_link",
      "https://drive.google.com/file/d/1lDFB42XPFe47YzfMqRZ9cHnEv-MCfKHH/view?usp=drive_link",
      "https://drive.google.com/file/d/1l6KU6Q1Ms5wLL6E8JrgjVcVYAh2A_wnD/view?usp=drive_link",
      "https://drive.google.com/file/d/1l4eXR-YGzAf_NNcSl2HNGCFMOEmALN6U/view?usp=drive_link",
      "https://drive.google.com/file/d/1l2hYCyz6g8K6StNlSJezT-ovnF2KQUle/view?usp=drive_link",
      "https://drive.google.com/file/d/1ksWHNZLdrSyCXEmd4k5rIuy9COv7yHyl/view?usp=drive_link",
      "https://drive.google.com/file/d/1kpqOn4Hh4DKAMCRWO7OwI8E9l_BkmqKm/view?usp=drive_link",
      "https://drive.google.com/file/d/1kiOFyjYrKjNn5crHk0TFOWb2WVRlCfzZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1kUtKzkchcVpQqCz8Cg7vrpT7keesvQRy/view?usp=drive_link",
      "https://drive.google.com/file/d/1kO0au2LX2AsdvAE4LfANFvI_grIUTXYw/view?usp=drive_link",
      "https://drive.google.com/file/d/1jrAJA0es65gzT9W1IrumZrv8GUnYYQwf/view?usp=drive_link",
      "https://drive.google.com/file/d/1jn5qQfkl3tmqHwBRlFLIG8DeIp-_-R-K/view?usp=drive_link",
      "https://drive.google.com/file/d/1jjWurwgnDK6zfX_DyRXoaZZRS1EEybQy/view?usp=drive_link",
      "https://drive.google.com/file/d/1jYDudBTLdiAcvzfnw4pjLGKElQSRWPU9/view?usp=drive_link",
      "https://drive.google.com/file/d/1jOGlef0jkIZDcubvDqdmllxiOHErFyM6/view?usp=drive_link",
      "https://drive.google.com/file/d/1jLRTKtXjJSb6W5uyPj7qUKd2mTJHKswr/view?usp=drive_link",
      "https://drive.google.com/file/d/1jEa6PbzCruM3DhfKxvxytudViPjCn3o9/view?usp=drive_link",
      "https://drive.google.com/file/d/1j6xFFt35jb8y83QP_P0awiVlULD7aqY4/view?usp=drive_link",
      "https://drive.google.com/file/d/1izIsbuTRIbkWVDc1u8IUkvVndlwYFKcT/view?usp=drive_link",
      "https://drive.google.com/file/d/1iwTzKmJMUC8khUnLZ_ATR2246-Ufm1-A/view?usp=drive_link",
      "https://drive.google.com/file/d/1icaNf1LwZARlh0autWXpnCFOIQo2O1tj/view?usp=drive_link",
      "https://drive.google.com/file/d/1iX7-BBt8g9uaHgHZORlwWNaC6iBKKHkc/view?usp=drive_link",
      "https://drive.google.com/file/d/1iJNMNu4xkXT_zdE7S1nk2XVqyXEdA0_d/view?usp=drive_link",
      "https://drive.google.com/file/d/1hetGOxvex8YItQhsKtWoqd9-fpsqHAy5/view?usp=drive_link",
      "https://drive.google.com/file/d/1haNGWh9paHge4eHiI0_wnhlozMMcCgcZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1hUz2M7Tga_gNuBOsRtd_b9w8UITzlrLL/view?usp=drive_link",
      "https://drive.google.com/file/d/1hM3PuatJWSUbPEHGCf14xoJtoPV-32Ok/view?usp=drive_link",
      "https://drive.google.com/file/d/1hLhXpA_1dWK9FE9bQsVc-4sh6nabNXmy/view?usp=drive_link",
      "https://drive.google.com/file/d/1hCoW8wMrS-3GraS3Hn4Xs_aOoT1AHZsz/view?usp=drive_link",
      "https://drive.google.com/file/d/1hAGaH9ayV1QiuZu7ojBln_Vc9_Gd0BiQ/view?usp=drive_link",
      "https://drive.google.com/file/d/1gcLq5RWtrfCmTsFkbuoQCk6C_h1xy0Jh/view?usp=drive_link",
      "https://drive.google.com/file/d/1gaKjAjJlV4F7b-gUunFyz2WxvNSF60mf/view?usp=drive_link",
      "https://drive.google.com/file/d/1ga5W5UsTsA8YjjMF1PLsCnlOXvicr7o_/view?usp=drive_link",
      "https://drive.google.com/file/d/1gHf6C7ojSJWakqUEbXsoVSvwXF9xEz-P/view?usp=drive_link",
      "https://drive.google.com/file/d/1g9CDaO7BzO55NrPDG7LTejalPfGHvOht/view?usp=drive_link",
      "https://drive.google.com/file/d/1g6EUbn2tIw6aOd_Xa7wTyaLsx0dwaKML/view?usp=drive_link",
      "https://drive.google.com/file/d/1fudm5XD_dIbUxxq0PvppI0r8u4UTEm2i/view?usp=drive_link",
      "https://drive.google.com/file/d/1fjiikiXp_yExC1Dyu0-pwsBlIfe5wB6g/view?usp=drive_link",
      "https://drive.google.com/file/d/1fh7h9jpVMHVhkHST0xvC-bQJubyBltF1/view?usp=drive_link",
      "https://drive.google.com/file/d/1fYGYmWC32Jz6PABy1ay29gSHs1wWX6ok/view?usp=drive_link",
      "https://drive.google.com/file/d/1fS8pNmNQYqJsd_7bxuRSPLWH4lZU__Zv/view?usp=drive_link",
      "https://drive.google.com/file/d/1fMuVqmZLWJ9PXtuB6yuNkj0CKJsEdd4b/view?usp=drive_link",
      "https://drive.google.com/file/d/1ek8aoRmlNg4NLH3cjeicbuVMKczPpm_2/view?usp=drive_link",
      "https://drive.google.com/file/d/1ecnzdbdDpdxUmEWfl0DxVOWujvJgCvfO/view?usp=drive_link",
      "https://drive.google.com/file/d/1eYfiIOQiohJ58eOKSBQrPQbX5L7Tqxl7/view?usp=drive_link",
      "https://drive.google.com/file/d/1eYIjVpIGTN8dOKxukdYmJaLqSWsiaHQF/view?usp=drive_link",
      "https://drive.google.com/file/d/1eLJ5N8eVqHZIqAYRiK2sJ8GPCkx5y3LT/view?usp=drive_link",
      "https://drive.google.com/file/d/1dXYSDU3hb5DOZjc7W9S5N2z1RzaEGRhW/view?usp=drive_link",
      "https://drive.google.com/file/d/1dTJRaUudXbdt4Okw88zVnkqPXJP5c8_q/view?usp=drive_link",
      "https://drive.google.com/file/d/1dRbesYj4K9QKAy_MAVwt4QE0nptViEtG/view?usp=drive_link",
      "https://drive.google.com/file/d/1dQBb1aM0iXXmHzDBIFgylSMsfH2XUD2k/view?usp=drive_link",
      "https://drive.google.com/file/d/1dLiw5q6UIPJMKINWOWFjEvGUkme_LMGk/view?usp=drive_link",
      "https://drive.google.com/file/d/1dC6L6iFM252XlV0STpN6Z3bceWEJjGvD/view?usp=drive_link",
      "https://drive.google.com/file/d/1d6pFbBv34cYEQ1v71iQ67O-T2dBzZf4x/view?usp=drive_link",
      "https://drive.google.com/file/d/1cyRNW-3pJXf0K6sL5JwZhuIhAsSSl-OB/view?usp=drive_link",
      "https://drive.google.com/file/d/1cjsMZIvGT2N0t1pcsi9mEP5xf0CphX09/view?usp=drive_link",
      "https://drive.google.com/file/d/1cX4FbM_Jp5sTL1LeV5nNslkleZAvmZnK/view?usp=drive_link",
      "https://drive.google.com/file/d/1cSwJOZ1PBPoi4lA-pZVu45BYAPqwdPzn/view?usp=drive_link",
      "https://drive.google.com/file/d/1cQeVXobVy7ZNmKoDR9AnEZs_8JHos_FP/view?usp=drive_link",
      "https://drive.google.com/file/d/1cQIm13qWd4SbdyyVs6is0nTcwTpf9v2U/view?usp=drive_link",
      "https://drive.google.com/file/d/1cO8zMg4d-sof4Q1Rkar1zXT-9cbBne8Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1cEK9Dth8ye-ImCKzaZxy4LWxackrhss3/view?usp=drive_link",
      "https://drive.google.com/file/d/1bsDMfrATPrTxYPvN0nMGCeQy6yxhHKLE/view?usp=drive_link",
      "https://drive.google.com/file/d/1bnvV_IHbQfZUucEhSa9y2Qvv-bugHBiA/view?usp=drive_link",
      "https://drive.google.com/file/d/1bjFFaZ5o-DeMSrmQkHtfZKZyzMcB4bbx/view?usp=drive_link",
      "https://drive.google.com/file/d/1bZhGZzIpj-jm-_XLcjY4LL2mz9nAZXvY/view?usp=drive_link",
      "https://drive.google.com/file/d/1bKkGZD0-MJhhTxKLH1l0SaEpp4B923zR/view?usp=drive_link",
      "https://drive.google.com/file/d/1bKkGZD0-MJhhTxKLH1l0SaEpp4B923zR/view?usp=drive_link",
      "https://drive.google.com/file/d/1b7Fpf9hi1PvrSwgMa3y39JBskJ30tUmv/view?usp=drive_link",
      "https://drive.google.com/file/d/1ao0koa8GgYeCN9NdNcsLlSRjjSB_XPsV/view?usp=drive_link",
      "https://drive.google.com/file/d/1akqc8hC4tJStMW_-WSLLUT7psihR_vII/view?usp=drive_link",
      "https://drive.google.com/file/d/1akjz5f_f8JBHotVh2sl_arvpb4FAddWT/view?usp=drive_link",
      "https://drive.google.com/file/d/1adCOyWzle3BgkChEymUQrpFc3j7sonzx/view?usp=drive_link",
      "https://drive.google.com/file/d/1aWapD7OsINxV27wxCQCZqWuFn7Zeozdv/view?usp=drive_link",
      "https://drive.google.com/file/d/1aVJkwg4F0ghgw3WBchYceD7N-omOEzyC/view?usp=drive_link",
      "https://drive.google.com/file/d/1aRvOoH28anup1JiAc-dC7cr1iLM09Vcd/view?usp=drive_link",
      "https://drive.google.com/file/d/1a0oh_sIt_7iVWRNFKWjJX-ilxwYM6dea/view?usp=drive_link",
      "https://drive.google.com/file/d/1_nElknQwjnyuEiq0pbNACxqF547KkxHS/view?usp=drive_link",
      "https://drive.google.com/file/d/1_mUsPfDkk0VSfKy5qk8oPySo8T11LMg3/view?usp=drive_link",
      "https://drive.google.com/file/d/1NL9MRmp-yX95Gx-gxklNjTL2cR8nM2HU/view?usp=drive_link",
      "https://drive.google.com/file/d/1_hIm_KG6RE6RjUJzIlNg77qIZVecBPpF/view?usp=drive_link",
      "https://drive.google.com/file/d/1_a_BjvSJnBxDxg-UkMDt1kNuS1X1QUsB/view?usp=drive_link",
      "https://drive.google.com/file/d/1_SSRPXqpGNnY_Fg88O-uxgC-vMYD3ta5/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZpcU0WGrOHCW_ojPWWZ5D-6X-rBkvS5i/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZWinqO_yXoN3VEjNF7ACrowkq-uAiGwJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZTJnpqt6joAvuVHNhH9GyLNJj4vNeKyf/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZNNrEqqP6r6-BRgkwkBH6_Y7lEJB4F8X/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZGSk69aZ70xn9llC22yx0SAV7x9qHwo8/view?usp=drive_link",
      "https://drive.google.com/file/d/1YVr-TKUOfqZO3VC-7MCzKqitJLBMTG98/view?usp=drive_link",
      "https://drive.google.com/file/d/1YJF398Ye4Tly_7ySwQgwM0TzBmI0cFWF/view?usp=drive_link",
      "https://drive.google.com/file/d/1YB6JxDICRCsRW4JmIgDfrIyIrn7XbknS/view?usp=drive_link",
      "https://drive.google.com/file/d/1YA3FTjLu4GBzrVJfjAznLQq337FNgRhQ/view?usp=drive_link",
      "https://drive.google.com/file/d/1Xnw12S0i8F1j7XvnYK-flkYT4kx0yrQQ/view?usp=drive_link",
      "https://drive.google.com/file/d/1XmMGor0XGix7-36HMFP2GCLtLWh99Y5k/view?usp=drive_link",
      "https://drive.google.com/file/d/1XcC5mjEoJmO4QdhjvWzJo7xVXDeN2hN8/view?usp=drive_link",
      "https://drive.google.com/file/d/1Xb6eO2cAga5lJh937WNgfDUDpr-820uo/view?usp=drive_link",
      "https://drive.google.com/file/d/1X_Tkx1XuAhxBiOPFjiOhi7SftXRKjqwr/view?usp=drive_link",
      "https://drive.google.com/file/d/1XPRmbCKgtVOJY2f_pat0tUfszNgLRBue/view?usp=drive_link",
      "https://drive.google.com/file/d/1XNsnGuZdLW6tOCXuBwxGuDa0YoFA9jRh/view?usp=drive_link",
      "https://drive.google.com/file/d/1X4zboYK1Taqtp-tGhnvHSDRR7VadtobW/view?usp=drive_link",
      "https://drive.google.com/file/d/1X01jq3vXwGF-7mTT9FgS1srJzZa_9IWI/view?usp=drive_link",
      "https://drive.google.com/file/d/1WOWuZr-EiA6rBLZCu8iYhrUKABlZEQMv/view?usp=drive_link",
      "https://drive.google.com/file/d/1WMUwsrQusH1MhylChi7XSDQR7kt7s5XM/view?usp=drive_link",
      "https://drive.google.com/file/d/1WIxlJeMJSOMxTvCZGNRJyb5Y6TTX49wl/view?usp=drive_link",
      "https://drive.google.com/file/d/1W6e3i8YO0rROXfulmh6hptAITb3PJeTa/view?usp=drive_link",
      "https://drive.google.com/file/d/1Vm40wCgMjrtxg0TPOlcU3_YztWPnclBu/view?usp=drive_link",
      "https://drive.google.com/file/d/1VkohtUBtIbxHylJ7VKLeqF7vmzjPR5IN/view?usp=drive_link",
      "https://drive.google.com/file/d/1VkohtUBtIbxHylJ7VKLeqF7vmzjPR5IN/view?usp=drive_link",
      "https://drive.google.com/file/d/1VYg4FwaFck59zfDJNuPRAImMaNxceTec/view?usp=drive_link",
      "https://drive.google.com/file/d/1UvcyN5Cie2hIlXQ7KAGl4u_x6yxL7c5l/view?usp=drive_link",
      "https://drive.google.com/file/d/1Uh1DVXnzPsF18bA20GeJmz7GaERhPec0/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ug9_C0SYLpoI96H-CMlXeHxue0oN3CFq/view?usp=drive_link",
      "https://drive.google.com/file/d/1USpOEGpISTFCZjNIqIr7sXL3Xd_6qDAc/view?usp=drive_link",
      "https://drive.google.com/file/d/1UN_ILPhMzt3sNyqIND60-py3rfjru1jf/view?usp=drive_link",
      "https://drive.google.com/file/d/1UDHhbMK056HT5I9kvP5NUpk7cWt6jZ_7/view?usp=drive_link",
      "https://drive.google.com/file/d/1TqXcK-LxVxe3t9Zi26qR2Rsxyq_FfOCj/view?usp=drive_link",
      "https://drive.google.com/file/d/1Tl1rsuLDIcz1CtO8nYRkHWVdVBWZ12Nu/view?usp=drive_link",
      "https://drive.google.com/file/d/1TVNUxvi24acHAUcWIzmcqAzjE2ap0hPh/view?usp=drive_link",
      "https://drive.google.com/file/d/1TUGlQ9IIIbpVZmagOkznPY6yq8602Gon/view?usp=drive_link",
      "https://drive.google.com/file/d/1TPdQW8YatsG2_d6OwSfKNNXj880ePQaE/view?usp=drive_link",
      "https://drive.google.com/file/d/1TOcJkx7q_Rw0xpFW-czUN9ZEpk41SGRr/view?usp=drive_link",
      "https://drive.google.com/file/d/1TLQFyjQztKKYu2-9zZnqsks9f_KBqLV7/view?usp=drive_link",
      "https://drive.google.com/file/d/1TFN5fy5OaQ44Slh8et7PraQNjgulJ_ZR/view?usp=drive_link",
      "https://drive.google.com/file/d/1SqkYZNVsSUPr9s9UBKJf8LEG9uxPoT8-/view?usp=drive_link",
      "https://drive.google.com/file/d/1ScFrJCPLLrLbIP0i9q64JDn0O4w9XAo4/view?usp=drive_link",
      "https://drive.google.com/file/d/1SN50ByFwRtmwL1tbhHhz9JOYbwZ6-65p/view?usp=drive_link",
      "https://drive.google.com/file/d/1RuiPYwGxkdgeAk4Fx_bEA3jfhNSh7wfk/view?usp=drive_link",
      "https://drive.google.com/file/d/1RogU7EHZ2CS5v70RnaEGeD7ZaugZ9vZl/view?usp=drive_link",
      "https://drive.google.com/file/d/1RfnTY0p_tpYHJ7FBzELvNFel8XSMtW5S/view?usp=drive_link",
      "https://drive.google.com/file/d/1RfaBm3rhqMQ1uDwpy2qU-CUC4W-AQtvC/view?usp=drive_link",
      "https://drive.google.com/file/d/1RQznWaBujvmGFXnx4rHDneL85sJkAYYA/view?usp=drive_link",
      "https://drive.google.com/file/d/1ROod-qpdWCaNjk_BBGPMAaQ98-aCtR81/view?usp=drive_link",
      "https://drive.google.com/file/d/1R2PsMjIUHoqWqORdInXAQofyQ-KvaeQn/view?usp=drive_link",
      "https://drive.google.com/file/d/1R1GKwWjzb4KIDi-ntBr_UFWhh9QcS5Y0/view?usp=drive_link",
      "https://drive.google.com/file/d/1QobTULwBl_bt3PPzG_kqRtTF9eAQRnpb/view?usp=drive_link",
      "https://drive.google.com/file/d/1Q_x3zPUKKCrgKAGHAdVwu-dwe4RP8CcI/view?usp=drive_link",
      "https://drive.google.com/file/d/1QQ6a-VrsNK4P2tpe_9YoFQPZbCKSjK6b/view?usp=drive_link",
      "https://drive.google.com/file/d/1PzcMlGefD6cH4irvVCCgKrSoZaFCryub/view?usp=drive_link",
      "https://drive.google.com/file/d/1PypkN83dy_Yd84cOhUwTZ7a2EkvLChW6/view?usp=drive_link",
      "https://drive.google.com/file/d/1PxuEfYwcUfwWjgL5oLWZDqImGPIsK50j/view?usp=drive_link",
      "https://drive.google.com/file/d/1PxeHLQu4ZbygCrH_obWUEq_TIw9aBGjZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1PViqyam4IDtK5w_1o6m2e1MBunHNvOe1/view?usp=drive_link",
      "https://drive.google.com/file/d/1PVZ15qF5roHNQ9cj9txNLS70aQZwaf6g/view?usp=drive_link",
      "https://drive.google.com/file/d/1PU9-JIyRv3NPdidEJ7LAc9oZ99Qc14Qk/view?usp=drive_link",
      "https://drive.google.com/file/d/1PU8Ee8Qx9yL3F8Bs6_K4l89g3zOSCTyP/view?usp=drive_link",
      "https://drive.google.com/file/d/1PDalVWNREMSLjglsTDboDhSU7GKRIhFD/view?usp=drive_link",
      "https://drive.google.com/file/d/1P4kZKyzOiIuK1BsxjMOuWD8yhl68CxGy/view?usp=drive_link",
      "https://drive.google.com/file/d/1OvDAYdWmiZKpzVoFPNG7EX6h3eMr5FAt/view?usp=drive_link",
      "https://drive.google.com/file/d/1OpQih9D1U6HWVVpfmEjYZdlBDnbVURUa/view?usp=drive_link",
      "https://drive.google.com/file/d/1OcixiAJo9X7v3qdWuMis8WlsFtqQB35o/view?usp=drive_link",
      "https://drive.google.com/file/d/1OH5xNcIJ6ZDQRqe7pf9MsE9ke5243Joy/view?usp=drive_link",
      "https://drive.google.com/file/d/1O-hCOAQnSPHGiXCMXZ9gm13l2YYPrmS_/view?usp=drive_link",
      "https://drive.google.com/file/d/1NvHv6wvr9EtX8LCRZILPc_n7sn0Jm81y/view?usp=drive_link",
      "https://drive.google.com/file/d/1Nfe9PCF4_eVCuytE3IhJpA0LJVwD1zOc/view?usp=drive_link",
      "https://drive.google.com/file/d/1NeiHnQnJH2BPp6Zhb3ORjCKoxS89eVal/view?usp=drive_link",
      "https://drive.google.com/file/d/1Nd4w6V2torGYPBOZat4qNUJ5SAQC2mpl/view?usp=drive_link",
      "https://drive.google.com/file/d/1Nc88r74C4k1mm7ly0tII2fEcd6Ng4lno/view?usp=drive_link",
      "https://drive.google.com/file/d/1NIXLTi0nwCcTGAssHoV2vMHzA2QksKjU/view?usp=drive_link",
      "https://drive.google.com/file/d/1MwNc84zX_6oAS60hHXtIDz98kX18FZ5g/view?usp=drive_link",
      "https://drive.google.com/file/d/1MtDHf_t4LvG54oESHasqFigJLYmk3UhD/view?usp=drive_link",
      "https://drive.google.com/file/d/1MrKQo45kWHk4IxYTgTps35boRrD5xJvb/view?usp=drive_link",
      "https://drive.google.com/file/d/1Mo9aa5inFputwIVLzCWMA4G9-pGylK6A/view?usp=drive_link",
      "https://drive.google.com/file/d/1Mi04rYOTgqaoDTd5EgkP4y0dL-BaeEbC/view?usp=drive_link",
      "https://drive.google.com/file/d/1MXXmBxuwFR8I_b0wSWGcxz9JCBciIGtJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1M3AqkBxeTRofpggJCnE6jtv8yqH-GQ-5/view?usp=drive_link",
      "https://drive.google.com/file/d/1LvsBxXFhZZCx7L-ClZJv0tNZxgkEdVMr/view?usp=drive_link",
      "https://drive.google.com/file/d/1LhfurzDkjuo0tp0sKQQMD2dRJ96d6idc/view?usp=drive_link",
      "https://drive.google.com/file/d/1LYjroB9X3QvkIiubxySoBgus36cpN5hn/view?usp=drive_link",
      "https://drive.google.com/file/d/1LTvGxMkdleYU2wO7satB03w15WeXR-2A/view?usp=drive_link",
      "https://drive.google.com/file/d/1LQNRQ3Q2AIQXyfOhkMcNNj04ljRzajbe/view?usp=drive_link",
      "https://drive.google.com/file/d/1LOdrZeHroR0Yp43LKLNeckMdCOPskr09/view?usp=drive_link",
      "https://drive.google.com/file/d/1LJYJ-upNLTCMsHWZDY6-Bycu2w__mupx/view?usp=drive_link",
      "https://drive.google.com/file/d/1LEpvckXEGHk-PvpMifis8K-hlrFAf_Si/view?usp=drive_link",
      "https://drive.google.com/file/d/1LANYVOYAzzdDLepIYSCdddZQHhX2v5pZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1L60xBFNovJvdOtIoSzDSNa6Ta7veDMVK/view?usp=drive_link",
      "https://drive.google.com/file/d/1KUiiaAlghEv3gcCQROAjfLMHDV-aI_21/view?usp=drive_link",
      "https://drive.google.com/file/d/1KCUzlgKBJolCqDem0HTFgGd3aCGOW0yW/view?usp=drive_link",
      "https://drive.google.com/file/d/1K8yBqNfaOjJlb6vWvYVN0Vm_pYOoYx0M/view?usp=drive_link",
      "https://drive.google.com/file/d/1Jv-eziISNQUhXQhxqqAPwuR28zy2R1PX/view?usp=drive_link",
      "https://drive.google.com/file/d/11AOW984Ipk799jUY-WkSArHVCLVKXI66/view?usp=drive_link",
      "https://drive.google.com/file/d/1JYFh2TqNZ3WQzLFToFPRvAkLC3TQvrnd/view?usp=drive_link",
      "https://drive.google.com/file/d/1JU4vcB_5YJImXVOUR2YpNXuOyHpY6wAC/view?usp=drive_link",
      "https://drive.google.com/file/d/1JU4vcB_5YJImXVOUR2YpNXuOyHpY6wAC/view?usp=drive_link",
      "https://drive.google.com/file/d/1IieKKS0D-Otj3yLY8MK6jxbgr0yNbUqH/view?usp=drive_link",
      "https://drive.google.com/file/d/1Id6s_BTll4c8o0jobT2dTTd5DiqHFN8X/view?usp=drive_link",
      "https://drive.google.com/file/d/1IVSXif0sxUAq-agu4zzj3n_QMNqpm52V/view?usp=drive_link",
      "https://drive.google.com/file/d/1ITQsxGIyk_MXtOQAwNcm9vp3XG4yiiYP/view?usp=drive_link",
      "https://drive.google.com/file/d/1IGml-RtliS1N1uOozN-lS9cVkMO8OvNw/view?usp=drive_link",
      "https://drive.google.com/file/d/1ICYnE9LJIhfbAWQLLx_iE7HU2tsMfjaW/view?usp=drive_link",
      "https://drive.google.com/file/d/1Hf1UQygJ55LGYcMbWRR01RCGkLJSAAeg/view?usp=drive_link",
      "https://drive.google.com/file/d/1HYYoelXSwl8xcRlmaxchsM148botK93K/view?usp=drive_link",
      "https://drive.google.com/file/d/1H07RCbwWgjgS8pZ-bsP9RnahrUQABJ2r/view?usp=drive_link",
      "https://drive.google.com/file/d/1G_W1vg4M1wMut94Gf93aMrpakWNUS3cK/view?usp=drive_link",
      "https://drive.google.com/file/d/1GMpZcjbaUimcubcjETTTo4GkAeL39dDb/view?usp=drive_link",
      "https://drive.google.com/file/d/1GJomfY3Kj9VeLqAeEloHxyFsHzmctSbT/view?usp=drive_link",
      "https://drive.google.com/file/d/1GAfi11EEXl16k-eM1tGbuoccbYwF8W57/view?usp=drive_link",
      "https://drive.google.com/file/d/1G6iukpAGfpXDuODqnP-wazc3zBYY7_wr/view?usp=drive_link",
      "https://drive.google.com/file/d/1FkXUw-NmI3w887Cpi69WnXkdsMfuhsIv/view?usp=drive_link",
      "https://drive.google.com/file/d/1F_UMEpupru6h7tY_6M8UlE1bPnvDJK32/view?usp=drive_link",
      "https://drive.google.com/file/d/1FE9zJKjtYW8bGwEsWOOz5HArGglFrzPz/view?usp=drive_link",
      "https://drive.google.com/file/d/1EvydRndltd6l1-wqxzeSSIs6GebGMIZt/view?usp=drive_link",
      "https://drive.google.com/file/d/1EhNFeyEtIt6PWOCbhBIfywKknH324QeP/view?usp=drive_link",
      "https://drive.google.com/file/d/1ENoGxlPW7GiIcno0mN87Zs23HOb-eSQB/view?usp=drive_link",
      "https://drive.google.com/file/d/1ELSbohXrgy_dDYgQ6EIvlaVFvHgALLhD/view?usp=drive_link",
      "https://drive.google.com/file/d/1E-3dQK1oVQ2A1O2JoLzgvj2vQv-u-gOe/view?usp=drive_link",
      "https://drive.google.com/file/d/1DtM1XPvVVBtzX312dYJtJ-8Gs1mvgE1K/view?usp=drive_link",
      "https://drive.google.com/file/d/1DoXOlydZBc0cMW9HhAb9qdj0Kn-zaT7U/view?usp=drive_link",
      "https://drive.google.com/file/d/1DcCTBk_imKxTSWpXSiBB01WroowDYV-w/view?usp=drive_link",
      "https://drive.google.com/file/d/1DXwXhPwFwN16RybNEtFGNEIiCVPvsh9Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1CyuFNFIQlWmS6lj24WV7mJ6gMjTbMqbl/view?usp=drive_link",
      "https://drive.google.com/file/d/1CnwE4LywcIKcDSIxHjpNreDCrWX3TBfw/view?usp=drive_link",
      "https://drive.google.com/file/d/1ChMkhnfTH1hmPiqVt3jncJQKG3TfNI1k/view?usp=drive_link",
      "https://drive.google.com/file/d/1CZBsmyvGVY4AFHZBQT3hmULH97vPRDP8/view?usp=drive_link",
      "https://drive.google.com/file/d/1CJwUc8sKG-OricjlPzHI4mZAHwWqyiiL/view?usp=drive_link",
      "https://drive.google.com/file/d/1C2BqudH3jM2_Tv27R3-kJpMW3k40Gy17/view?usp=drive_link",
      "https://drive.google.com/file/d/1BpyPCVIxZXbtp4V7u44yE4lJs0JFUEvt/view?usp=drive_link",
      "https://drive.google.com/file/d/1BQpooaGbNf4zPCDl_c4GKia2uDK8MYv-/view?usp=drive_link",
      "https://drive.google.com/file/d/1B-ZQKFsCiYFvsncW8hveGKPBGfdt8MEM/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ax_B0ugkHZrKFCYqrZTDTDBcqke4_eV7/view?usp=drive_link",
      "https://drive.google.com/file/d/1AsWVFD3_6uRwe_jj34xWFIybTo8CZutr/view?usp=drive_link",
      "https://drive.google.com/file/d/1A3jud5ciOPekXmd75RhRrMRnEe9rSr2H/view?usp=drive_link",
      "https://drive.google.com/file/d/19yP13NxqQsWA5Z4A4OIUXii7J7e7HdUo/view?usp=drive_link",
      "https://drive.google.com/file/d/19XeWOSKcp0s3d-hD33l3qEtbM-MTNFD3/view?usp=drive_link",
      "https://drive.google.com/file/d/19MwUtpewBUhyWxHrVq4WtCFNA9RPnsE1/view?usp=drive_link",
      "https://drive.google.com/file/d/19FG_eTOVcsNPpqYsF9l44KBqlQPmJ0k4/view?usp=drive_link",
      "https://drive.google.com/file/d/19Ai557PEViGS4gjAmdlnzHLpfcRcKcpK/view?usp=drive_link",
      "https://drive.google.com/file/d/1950Rpk-ZXiuMhzEPFwBUDXyzvjmEKvT9/view?usp=drive_link",
      "https://drive.google.com/file/d/1912VkjqgXV4wZdyNuezHCr9rxlfeGiYV/view?usp=drive_link",
      "https://drive.google.com/file/d/18tfjXBi-d8ugY19bSPiAGU5rFNUQP4_x/view?usp=drive_link",
      "https://drive.google.com/file/d/18oxI4M4axqX0XYggM6yQi6Wjsf-YrRSV/view?usp=drive_link",
      "https://drive.google.com/file/d/18oR55WOxt2TzVgzeK7uXQuAuP9jj1ZwR/view?usp=drive_link",
      "https://drive.google.com/file/d/18nTyQXmwSPw3l5gC5QJiRISISd9pAzCh/view?usp=drive_link",
      "https://drive.google.com/file/d/18QtomvIxHRfF7eXFQBJmInLYVRgZsDfH/view?usp=drive_link",
      "https://drive.google.com/file/d/18Kzw2TVZaDaZU2n5-m_AVBypB6CQPfrC/view?usp=drive_link",
      "https://drive.google.com/file/d/17csn6fbQUcLph9UmnuVpC1FtkxiQfZ2d/view?usp=drive_link",
      "https://drive.google.com/file/d/17SyFezqGcd4vA60Gb07Jj4BWxq8TsFcA/view?usp=drive_link",
      "https://drive.google.com/file/d/17QUx_4s40MVmKnZ0xuVeBlgH8CWreePO/view?usp=drive_link",
      "https://drive.google.com/file/d/17Gq9MDyOxMf1pfvJStuzFE-s_iQVVYnw/view?usp=drive_link",
      "https://drive.google.com/file/d/16dOUS2hLgggBz7YLzIhn3Tps75Hir-in/view?usp=drive_link",
      "https://drive.google.com/file/d/16SOKIWZKf_B11OnqW6KJ7Ti9gFeeffgF/view?usp=drive_link",
      "https://drive.google.com/file/d/16CE9AKlEx5usb57gdvjEfBQzezmgQdP1/view?usp=drive_link",
      "https://drive.google.com/file/d/166UBu361RbPwr_7sHEQPp6HPC4nSaEaP/view?usp=drive_link",
      "https://drive.google.com/file/d/15aj-rh38w2wS5BGuWVbVRMLW9gdL629D/view?usp=drive_link",
      "https://drive.google.com/file/d/15LA8-e0PeMsWl0KbLFV6WezMvrHj_sr3/view?usp=drive_link",
      "https://drive.google.com/file/d/15Ch_ooZllvPwyQWAho0qw3SNh-Vszx2A/view?usp=drive_link",
      "https://drive.google.com/file/d/152oT5tWAYLA3nS2ydC0-Qe2mp8E_9Pk5/view?usp=drive_link",
      "https://drive.google.com/file/d/151GH_mwdOjM2-v6-Yqc6zDTe7KbfwJLk/view?usp=drive_link",
      "https://drive.google.com/file/d/150afSELGFq2tkN9z9CJFVul83Qcs-vVQ/view?usp=drive_link",
      "https://drive.google.com/file/d/14ysmNrWAy22GKQROv4kS9QmRcexlKve9/view?usp=drive_link",
      "https://drive.google.com/file/d/14vqThL1c7NbRg-tzWHglivdjgXmHUqxq/view?usp=drive_link",
      "https://drive.google.com/file/d/14h1aY-sJG9EGAbe5mchO4QcwUutN0Ty0/view?usp=drive_link",
      "https://drive.google.com/file/d/14bn0jjY5yb87b1EETQ3IR3U3v3u1FIwi/view?usp=drive_link",
      "https://drive.google.com/file/d/14CDEmGDcrNE5h2Q892Mbq5G8KeFUku_f/view?usp=drive_link",
      "https://drive.google.com/file/d/140o5DmEFV_TmBsNPP07D5I1GWLPMofKC/view?usp=drive_link",
      "https://drive.google.com/file/d/13qUN2iehfWrar2IK6mulPLtl8uZ8KIqd/view?usp=drive_link",
      "https://drive.google.com/file/d/12yTocEKzJ2ysT9HmmePsnqy_lmZoZ0q1/view?usp=drive_link",
      "https://drive.google.com/file/d/12a6lHqiXXgIn0z9qR_nSxPsa0SCE1pXc/view?usp=drive_link",
      "https://drive.google.com/file/d/12Q3RoZrdtlAlYiu2BuKh7Op7H_i5anGN/view?usp=drive_link",
      "https://drive.google.com/file/d/123m6VfwDSmHPXv7ILQTNmcnEBBFOA3MS/view?usp=drive_link",
      "https://drive.google.com/file/d/11xxBWlqZU9nObgHk_szf_uwiLculJJRm/view?usp=drive_link",
      "https://drive.google.com/file/d/11sYu7jpDAig5Sk-OH2_6MgrCshQOKKO_/view?usp=drive_link",
      "https://drive.google.com/file/d/11pKf55yyCVd_uOA8_F_20fqtzkH7H2oR/view?usp=drive_link",
      "https://drive.google.com/file/d/11mvRma9lZ1njRSiAKr5E88Ki8Ep5T6Lx/view?usp=drive_link",
      "https://drive.google.com/file/d/11kNF17kRvEnTzxJ9CP7-0VKRIlk2QKv0/view?usp=drive_link",
      "https://drive.google.com/file/d/11Fai0bqtPXR0t6JW1q5aCHWLnRZ-GKSI/view?usp=drive_link",
      "https://drive.google.com/file/d/11BLx1rVfdunDaYwons4LueTvPlcLrT8d/view?usp=drive_link",
      "https://drive.google.com/file/d/10yiCG_whAFv-KbhyouYsb5WX7ynuf9L7/view?usp=drive_link",
      "https://drive.google.com/file/d/10H7OozvPl1umPhHkuN--TTVBCpQBGJUC/view?usp=drive_link",
      "https://drive.google.com/file/d/1045hl3JFiUhl-oP3a-Zm8ft9QxH_G_Yc/view?usp=drive_link",
      "https://drive.google.com/file/d/1-m9vGEiLS-ZEd2Ej3cBZw5BB_k4aRjVw/view?usp=drive_link",
      "https://drive.google.com/file/d/1-i2BrwmxH3S7fnEL6WJ5HwAOiZZ9mtBq/view?usp=drive_link",
      "https://drive.google.com/file/d/1-cWze_3leT1CfFcOG7lok0xSYxafMPMa/view?usp=drive_link",
      "https://drive.google.com/file/d/1-VbuEitC9LTunnXW8IC5ZeA4NV9T3OoW/view?usp=drive_link",
      "https://drive.google.com/file/d/1-SQK4RG75uTOXZzhtMeDkOwDM3gm1dyz/view?usp=drive_link",
      "https://drive.google.com/file/d/1-GUuM8yNNkMpuB3mrpYxI9Vo_fIBkAeq/view?usp=drive_link",
      "https://drive.google.com/file/d/1-Dmbpnu2R5qEV3Z7c3xafhfTTecE4nQX/view?usp=drive_link",
      "https://drive.google.com/file/d/1-0A6MoP13O1yRPX-Q3_zkqave-wwSrsM/view?usp=drive_link",
      "https://drive.google.com/file/d/1nQomeKrHI7-7vahGQsfijO-5Rt_tGdYG/view?usp=drive_link",
      
    ];

    const availableVideos = driveLinks.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomDriveLink = availableVideos[randomIndex];

   
    const fileId = randomDriveLink.match(/\/d\/(.+?)\//)[1];

  
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    this.sentVideos.push(randomDriveLink);

    if (senderID !== null) {
      try {
        const response = await axios({
          method: 'GET',
          url: downloadLink,
          responseType: 'stream',
        });

        message.reply({
          body: '',
          attachment: response.data,
        });

        setTimeout(() => {
          api.unsendMessage(loadingMessage.messageID);
        }, 10000);
      } catch (error) {
        console.error('Error downloading video:', error);
        message.reply({
          body: 'Error downloading the video. Please try again later.',
        });
      }
    }
  },
};