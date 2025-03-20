const About = () => {
  return (
    <div className='content-section'>
      <div className='card'>
        <p>
          I graduated with a B.S. in Chemical Engineering from UT Austin. Upon graduating, I had two
          choices in Texas: oil and gas (in the middle of nowhere) or the &quot;materials science
          internship lottery&quot; (1 available position between thousands of graduates). I went
          with the third option - working minimum wage as a &quot;Chemical Software Intern&quot;. It
          turns out software is a lot like chemical engineering - complex systems relying on
          precision, creativity, a bit of physics, and many interconnected processes.
        </p>

        <p>I'm interested in:</p>
        <ul>
          <li>Distributed Systems</li>
          <li>Databases</li>
          <li>Sports Performance & Nutrition</li>
          <li>Music Theory</li>
          <li>Chemistry</li>
          <li>
            <a
              href='https://www.chess.com/member/mawnisss'
              target='_blank'
              rel='noopener noreferrer'
            >
              Chess
            </a>{' '}
            and{' '}
            <a href='https://lichess.org/@/Mawniss' target='_blank' rel='noopener noreferrer'>
              Open-Source Chess
            </a>
          </li>
        </ul>

        <hr />

        <h2>Projects</h2>
        <p>
          <a
            href='https://github.com/MaanasSathaye/swiss'
            target='_blank'
            rel='noopener noreferrer'
          >
            Swiss
          </a>{' '}
          - investigating load balancing algorithms and (eventually) testing my own.
        </p>

        <hr />

        <h2>Work</h2>
        <p>
          I'm currently a software engineer at{' '}
          <a href='https://www.sightly.com/' target='_blank' rel='noopener noreferrer'>
            Sightly
          </a>
          , the leader in real-time marketing and intelligence, following its acquisition of{' '}
          <a href='https://www.brandguard.ai/' target='_blank' rel='noopener noreferrer'>
            Brandguard AI
          </a>
          , an enterprise platform for omnichannel brand governance. The latter involved lots of
          Golang, PostgreSQL, Terraform, and Typescript React; the former involves lots of Python
          and Airflow.
        </p>
      </div>
    </div>
  )
}

export default About
