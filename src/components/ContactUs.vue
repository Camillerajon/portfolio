<template>
    <section class="contact-us-area section-padding bg-color-dark img-cover">
        <div class="container">
            <div class="row d-none">
                <div class="col-12">
                    <div class="section-title text-center">
                        <span class="water-text">{{ data.sectionTitleWaterText }}</span>
                        <h2 class="title">{{ data.sectionTitle }}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <form class="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                        <div class="row">
                            <div class="col-12">
                                <input name="name" type="text" placeholder="Your Name">
                            </div>
                            <div class="col-12">
                                <input name="subject" type="subject" placeholder="Your Subject">
                            </div>
                            <div class="col-12">
                                <input name="email" type="email" placeholder="Your Email">
                            </div>
                            <div class="col-12">
                                <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-default">Send Message</button>
                            </div>
                            <div class="col-6">
                              <div data-netlify-recaptcha="true"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import data from '../data/contact.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>