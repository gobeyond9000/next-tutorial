import Image from 'next/image';
import Link from 'next/link';
import JSlogo from '../static/JSlogo.png'
import Layout from '../components/Layout';

function About() {
    return (
        <Layout title="About Page">
            <div>
                <h1>About Page</h1>
                <Link href="/"><a>Go to Home Page</a></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae dolor, et quas aspernatur quisquam maxime quis voluptas ducimus enim!</p>  
                {/* <img src="/static/JSlogo.png" alt="JS Logo" /> */}
                <Image src={JSlogo} alt="JS Logo" height="200px" width="200px" />
            </div>
        </Layout>
    )
}
export default About
