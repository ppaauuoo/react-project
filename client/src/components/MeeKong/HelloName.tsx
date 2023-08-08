import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton, Typography } from "@mui/material";

const { user, isLoading } = useAuth0();

export default function HelloName() {
  return (
    <>
      return (
      <>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              {isLoading ? (
                <Skeleton width="100%">
                  <Typography variant="h1">.</Typography>
                </Skeleton>
              ) : (
                <h1 className="mb-5 text-5xl font-bold">Hello {user?.name}</h1>
              )}

              {isLoading ? (
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
              ) : (
                <p className="mb-5">{user?.email}</p>
              )}

              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </>
      );
    </>
  );
}
