import tw, { css, theme } from 'twin.macro'

const Signup: import('blitz').BlitzPage = () => {
  return (
    <div data-class="contact-form-content">
      {/* <script>var submitting=!1;"#signup"==location.hash&&(document.getElementById("contact-form").className+=" is-active no-transition")</script> */}
      <iframe
        name="hidden_form_iframe"
        id="hidden_form_iframe"
        data-style="display:none"
        // onLoad="if(submitting){submitting=!1;var a=document.getElementById('signup-form');a.className+=' submitted',a.reset(),a.querySelector('button').classList.remove('is-loading')}"
        frameBorder="0"
      ></iframe>
      <form
        data-class="form signup-form"
        id="signup-form"
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScQm8B6b4g1Uv185Qey32oGQKon_kQnapJb_08nh3D95N5B4A/formResponse"
        autoComplete="on"
        method="post"
        target="hidden_form_iframe"
        // onSubmit="submitting=!0,document.getElementById('signup-form-button').className+=' is-loading'"
      >
        <input type="hidden" name="entry.1503727909" value="Jarvix AI" />
        <div data-class="form-fields">
          <div data-class="field is-grouped field-first-last-name">
            <div data-class="field field-last-name">
              <label data-class="label">姓氏</label>
              <div data-class="control">
                <input
                  id="input-last-name"
                  data-class="input"
                  type="text"
                  placeholder=""
                  name="entry.101427066"
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div data-class="field field-first-name">
              <label data-class="label">名字</label>
              <div data-class="control">
                <input
                  id="input-first-name"
                  data-class="input"
                  type="text"
                  placeholder=""
                  name="entry.528002122"
                  autoComplete="given-name"
                />
              </div>
            </div>
          </div>
          <div data-class="field">
            <label data-class="label">公司名稱</label>
            <div data-class="control">
              <input
                id="input-company-name"
                data-class="input"
                type="text"
                placeholder=""
                name="entry.1098219127"
                autoComplete="org"
              />
            </div>
          </div>
          <div data-class="field">
            <label data-class="label">行業</label>
            <div data-class="control">
              <input
                id="input-industry"
                data-class="input"
                type="text"
                placeholder=""
                name="entry.630895034"
              />
            </div>
          </div>
          <div data-class="field">
            <label data-class="label">聯絡電話 (必填)</label>
            <div data-class="control">
              <input
                id="input-contact-tel"
                data-class="input"
                type="tel"
                placeholder=""
                minLength={8}
                maxLength={8}
                name="entry.125274804"
                autoComplete="tel"
                required
              />
            </div>
          </div>
          <div data-class="field field-submit">
            <div data-class="control">
              <button
                id="signup-form-button"
                data-class="button is-medium is-ja-primary is-fullwidth"
              >
                提交
              </button>
            </div>
          </div>
        </div>
      </form>
      <div data-class="thankyou has-text-centered">
        <h4 data-class="title is-4">謝謝，我們會盡快聯絡您！</h4>
        <h4 data-class="subtitle is-5">如有任何問題，請隨時聯絡我們。</h4>
        <a data-class="button is-secondary is-outlined contact-form-close">返回</a>
      </div>
    </div>
  )
}

export default Signup
