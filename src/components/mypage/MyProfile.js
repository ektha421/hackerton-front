import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "5px"
  }
}));

const MyProfile = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="contents">
      <div id="profile">
        <h3 className="name">
          이다솜 <span>님, 안녕하세요 :)</span>
        </h3>
        <p className="email">ektha421@gmail.com</p>
        <p className="join">
          <span>Google</span>에서 가입
        </p>
        <button type="button" onClick={handleOpen}>
          내 정보 수정
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 className="modal-title">내 정보 수정</h2>
              <div className="modal-description">
                <form name="form">
                  <span class="input-area">
                    <label for="name">NAME</label>
                    <input type="text" name="name" className="" value="" />
                  </span>
                  <span class="input-area confirm">
                    <label for="password">PW</label>
                    <input
                      type="password"
                      name="password"
                      className=""
                      value=""
                    />
                  </span>
                  <span class="input-area confirm">
                    <label for="rePassword">PW(RE)</label>
                    <input
                      type="rePassword"
                      name="rePassword"
                      className=""
                      value=""
                    />
                  </span>
                  <div className="btn-wrap">
                    <button type="submit">적용</button>
                    <button type="button" onClick={handleClose}>
                      취소
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default MyProfile;
