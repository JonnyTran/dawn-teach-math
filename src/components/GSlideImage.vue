<template>
    <div>
        <img :src="slideImage" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'

const GSlideImage = defineComponent({
    name: 'GSlideImage',
    props: {
        gslide_id: {
            type: String,
            required: true
        }
    },
    computed: {
        slideImage() {
            const credentials = {
                client_id: '309618326384-rvu64ig6ifrh7b1n8ftdtq6blolis9oc.apps.googleusercontent.com',
                client_secret: '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',
                redirect_uris: ['urn:ietf:wg:oauth:2.0:oob', 'http://localhost']
            }
            const oAuth2Client = new OAuth2Client(
                credentials.client_id,
                credentials.client_secret,
                credentials.redirect_uris[0]
            )

            console.log('oAuth2Client', oAuth2Client)

            // const token = 'your_access_token_here'
            // oAuth2Client.setCredentials({ access_token: token })

            const drive = google.drive({ version: 'v3', auth: oAuth2Client })
            const slides = google.slides({ version: 'v1', auth: oAuth2Client })

            const response = drive.files.export({
                fileId: this.gslide_id,
                mimeType: 'image/png',
                exportOptions: {
                    pageRange: '1'
                }
            })
            console.log('response', response.data)
            const slideImage = URL.createObjectURL(response.data)
            return slideImage
        },
    },
});
export default GSlideImage;
</script>