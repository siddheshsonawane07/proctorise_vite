// import React from 'react';
// import './Home.css'; // Import CSS file for global styles

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="hero">
//         <h1 className="title">Welcome to Proctorise</h1>
//         <p className="subtitle">Secure your online exams with our advanced proctoring solutions.</p>
//         <button className="get-started-btn">Get Started</button>
//       </div>
//       <div className="features">
//         <div className="feature">
//           <h2>Real-time Face Verification</h2>
//           <p>Ensure the identity of exam takers through live face verification.</p>
//         </div>
//         <div className="feature">
//           <h2>Face Recognition</h2>
//           <p>Recognize registered users' faces during exams to prevent impersonation.</p>
//         </div>
//         <div className="feature">
//           <h2>Pose Detection</h2>
//           <p>Detect the Face Position of the examinee to avoid any cheating attempts.</p>
//         </div>
//         <div className="feature">
//           <h2>Cheating Detection</h2>
//           <p>Detect cheating behaviors such as looking away from the screen or using unauthorized materials.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: '#2980b9',
    color: '#fff',
    padding: theme.spacing(4),
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(4),
    flexWrap: 'wrap', // Allow features to wrap to the next line if needed
  },
  feature: {
    width: 'calc(25% - 20px)', // Adjust width to fit all features in one line with some gap
    height: 100, // Increase height of feature segments
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    marginBottom: theme.spacing(4), // Add bottom margin for spacing
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hero}>
        <Typography variant="h4" gutterBottom>Welcome to Proctorise</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Secure your online exams with our advanced proctoring solutions.
        </Typography>
        <Button variant="contained" color="secondary" size="large">Sign In Bro</Button>
      </div>
      <div className={classes.features}>
        <div className={classes.feature}>
          <Typography variant="h6" gutterBottom>Real-time Face Verification</Typography>
          <Typography variant="body2">
            Ensure the identity of exam takers through live face verification.
          </Typography>
        </div>
        <div className={classes.feature}>
          <Typography variant="h6" gutterBottom>Face Recognition</Typography>
          <Typography variant="body2">
            Recognize registered users' faces during exams to prevent impersonation.
          </Typography>
        </div>
        <div className={classes.feature}>
          <Typography variant="h6" gutterBottom>Pose Detection</Typography>
          <Typography variant="body2">
            Detect the Face Position of the examinee to avoid any cheating attempts.
          </Typography>
        </div>
        <div className={classes.feature}>
          <Typography variant="h6" gutterBottom>Cheating Detection</Typography>
          <Typography variant="body2">
            Detect cheating behaviors such as looking away from the screen or using unauthorized materials.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
