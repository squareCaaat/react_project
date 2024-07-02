import PropTypes from "prop-types";
import styles from "./Button.module.css"; // css를 module 처럼 사용 가능!
// css module로 생성되는 className은 랜덤 즉 해당 컴포넌트는 고유한 클래스를 가짐!
function Button({text}){
    return (
        <button className={styles.btn}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;