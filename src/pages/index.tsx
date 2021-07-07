import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStrava, faInstagram, faTwitter, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Logo from '../components/Logo'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Link from "../components/Link"
import { icon, title, section, narrow, logo } from './scss/index.module.scss'

const IndexPage = () => (
  <Layout hideFooter>
    <SEO title="Erin Marchak" />
    <section className={section}>
      <Logo className={logo} />

      <header>
        <h1 className={title} aria-label="Erin Marchak">E<span className={narrow}>ri</span>n<br/> Ma<span className={narrow}>rc</span>hak</h1>
      </header>
      <p>
        <Link className={icon} href="mailto:hello@erin.computer"><FontAwesomeIcon icon={faEnvelope}/>
        </Link><Link className={icon} href="https://www.linkedin.com/in/emarchak/"><FontAwesomeIcon icon={faLinkedin}/>
        </Link><Link className={icon} href="https://www.github.com/emarchak/"><FontAwesomeIcon icon={faGithubAlt}/>
        </Link><Link className={icon} href="https://twitter.com/emarchak"><FontAwesomeIcon icon={faTwitter}/>
        </Link><Link className={icon} href="https://www.instagram.com/emarchak/"><FontAwesomeIcon icon={faInstagram}/>
        </Link><Link className={icon} href="https://www.strava.com/athletes/1105447"><FontAwesomeIcon icon={faStrava}/></Link>
      </p>
    </section>
  </Layout>
)

export default IndexPage
