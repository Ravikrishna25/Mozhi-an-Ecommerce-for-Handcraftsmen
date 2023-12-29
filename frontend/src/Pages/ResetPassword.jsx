import React, { useEffect, useState } from "react";
import Meta from "../mainpageComponents/Meta";
import BreadCrumb from "../mainpageComponents/BreadCrumb";
import { Link } from "react-router-dom";
import CustomInputs from "../mainpageComponents/CustomInputs";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, resetPassword } from "../actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.authState);
  const navigate = useNavigate();
  const { token } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    dispatch(resetPassword(formData, token));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast("Password Reset Success!!", {
        type: "success",
        position: "bottom-center",
      });
      navigate("/");
      return;
    }
    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [isAuthenticated, error, navigate, dispatch]);
  return (
    <div>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="mb-3" style={{ marginTop: "5px" }}>
                  Reset Password
                </h3>
                <form
                  onSubmit={submitHandler}
                  className="d-flex flex-column gap-15"
                >
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    placeholder="New Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    id="confirm_password_field"
                    className="form-control"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="mt-3 d-flex justify-content-center gap-30 align-items-center">
                    <button  type="submit" className="button border-0">Ok</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
