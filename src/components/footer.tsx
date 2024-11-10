
export default function  Footer() {
    return (
      <footer style={{ padding: '10px', backgroundColor: '#222', color: '#fff', textAlign: 'center' }}>
        <p>&copy; 2024 Alishba Shabbir. All rights reserved.</p>
  
        <p>Connect with me on:</p>
        <div style={{ margin: '10px 0' }}>
          <a
            href="https://github.com/Alishba-Shabbir"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/Alishba Shabbir
"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          
        </div>
  
        <p>Email: <a href="mailto:alishbashabbir312@gmail.com"
         style={{ color: '#fff', textDecoration: 'none' }}>alishbashabbir312@gmail.com</a></p>
  
        <p>Built with Next.js | Designed by Alishba Shabbir.</p>
      </footer>
    );
  };
  
  