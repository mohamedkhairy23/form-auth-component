import { Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className="d-flex">
            {userInfo ? (
              <>
                <Button
                  onClick={logoutHandler}
                  variant="primary"
                  className="me-3"
                >
                  Logout
                </Button>
                <LinkContainer to="/profile">
                  <Button variant="secondary">Profile</Button>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Button variant="primary" className="me-3">
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="secondary">Sign Up</Button>
                </LinkContainer>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
