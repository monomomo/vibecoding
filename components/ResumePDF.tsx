import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { resumeData } from '@/data/resume';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  title: {
    fontSize: 16,
    color: '#ea580c',
    marginTop: 4,
  },
  tagline: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    borderBottom: '2 solid #ea580c',
    paddingBottom: 4,
    marginBottom: 10,
  },
  text: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.5,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#ea580c',
    marginTop: 2,
  },
  itemPeriod: {
    fontSize: 9,
    color: '#9ca3af',
    marginTop: 2,
  },
  itemDescription: {
    fontSize: 10,
    color: '#4b5563',
    marginTop: 4,
    lineHeight: 1.4,
  },
  tag: {
    fontSize: 9,
    backgroundColor: '#fff7ed',
    color: '#ea580c',
    padding: '2 6',
    borderRadius: 4,
    marginRight: 4,
    marginTop: 4,
  },
  contactRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  contactItem: {
    fontSize: 10,
    color: '#4b5563',
    marginRight: 12,
  },
});

export default function ResumePDF() {
  const { personalInfo, about, experiences, skillCategories, projects, contact } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <Text style={styles.tagline}>{personalInfo.tagline}</Text>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>📧 {contact.email}</Text>
            {contact.phone && <Text style={styles.contactItem}>📱 {contact.phone}</Text>}
            {contact.location && <Text style={styles.contactItem}>📍 {contact.location}</Text>}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>关于我</Text>
          <Text style={styles.text}>{about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>工作经历</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 12 }}>
              <Text style={styles.itemTitle}>{exp.company}</Text>
              <Text style={styles.itemSubtitle}>{exp.position}</Text>
              <Text style={styles.itemPeriod}>{exp.period}</Text>
              {exp.description.map((desc, i) => (
                <Text key={i} style={styles.itemDescription}>• {desc}</Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>技能</Text>
          {skillCategories.map((category, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#374151' }}>
                {category.category}
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {category.skills.map((skill, i) => (
                  <Text key={i} style={styles.tag}>
                    {skill.name} ({skill.level})
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>项目经验</Text>
          {projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.itemTitle}>{project.name}</Text>
              <Text style={styles.itemDescription}>{project.description}</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {project.technologies.map((tech, i) => (
                  <Text key={i} style={styles.tag}>{tech}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}