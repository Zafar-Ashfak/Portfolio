import styles from './SkillsStyles.module.css';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import checkMarkLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="HTML" />
        <SkillList src={checkMark} skill="CSS" />
        <SkillList src={checkMark} skill="JavaScript" />
        <SkillList src={checkMark} skill="ReactJs" />
        <SkillList src={checkMark} skill="Tailwind CSS" />
        <SkillList src={checkMark} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="React-Router-Dom" />
        <SkillList src={checkMark} skill="Context-API" />
        <SkillList src={checkMark} skill="Redux-Toolkit" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Java" />
        <SkillList src={checkMark} skill="C/C++" />
        <SkillList src={checkMark} skill="OOPs" />
        <SkillList src={checkMark} skill="DSA" />

      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="SQL" />
        <SkillList src={checkMark} skill="PostgreSQL" />
        <SkillList src={checkMark} skill="MongoDB" />
        <SkillList src={checkMark} skill="NodeJs" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="JSON" />
        <SkillList src={checkMark} skill="Git" />
        <SkillList src={checkMark} skill="GitHub" />
      </div>
    </section>
  );
}

export default Skills;
