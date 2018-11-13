using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;


namespace DistanceTransformDemo
{
    public partial class Form1 : Form
    {
        private string curFileName = null;
        private Bitmap srcBitmap = null;
        BasicImageProcess basicImageprocess = null;
        DistanceTransform disTransform = null;
        
        public Form1()
        {
            InitializeComponent();
            basicImageprocess = new BasicImageProcess();
            disTransform = new DistanceTransform();
        }
        //open
        private void button1_Click(object sender, EventArgs e)
        {
            OpenImage();
            if (srcBitmap != null)
            {
                pictureBox1.Image = srcBitmap;
                pictureBox1.Width = srcBitmap.Width;
                pictureBox1.Height = srcBitmap.Height;
            }
        }
        //save
        private void button3_Click(object sender, EventArgs e)
        {
            if (pictureBox1.Image != null)
                SaveImage();
        }

        //distance transform
        private void button2_Click(object sender, EventArgs e)
        {
            if (srcBitmap != null)
            {
                Bitmap temp = basicImageprocess.PBinary(srcBitmap, 128);
                DateTime startTime = DateTime.Now;
                pictureBox1.Image = (Image)disTransform.DistanceTransformer(temp,1);
                DateTime endTime = DateTime.Now;
                label2.Text = (endTime - startTime).ToString();
            }
        }
        //city block distance transform
        private void button4_Click(object sender, EventArgs e)
        {
            if (srcBitmap != null)
            {
                Bitmap temp = basicImageprocess.PBinary(srcBitmap, 128);
                DateTime startTime = DateTime.Now;
                pictureBox1.Image = (Image)disTransform.DistanceTransformer(temp, 2);
                DateTime endTime = DateTime.Now;
                label2.Text = (endTime - startTime).ToString();
            }
        }
        //chess board distance transform
        private void button5_Click(object sender, EventArgs e)
        {
            if (srcBitmap != null)
            {
                Bitmap temp = basicImageprocess.PBinary(srcBitmap, 128);
                DateTime startTime = DateTime.Now;
                pictureBox1.Image = (Image)disTransform.DistanceTransformer(temp, 3);
                DateTime endTime = DateTime.Now;
                label2.Text = (endTime - startTime).ToString();
            }
        }
        //Chamfer distance transform
        private void button6_Click(object sender, EventArgs e)
        {
            if (srcBitmap != null)
            {
                Bitmap temp = basicImageprocess.PBinary(srcBitmap, 128);
                DateTime startTime = DateTime.Now;
                pictureBox1.Image = (Image)disTransform.ChamferDistancetransfrom(temp);
                DateTime endTime = DateTime.Now;
                label2.Text = (endTime - startTime).ToString();
            }
        }

        #region open and save
        //open
        private void OpenImage()
        {
            try
            {
                OpenFileDialog ofd = new OpenFileDialog();
                ofd.Filter = "All files (*.*)|*.*|bmp files (*.bmp)|*.bmp|jpeg files (*.jpg)|*.jpg|png files (*.png)|*.png";
                ofd.Title = "打开";
                ofd.ShowHelp = true;
                if (ofd.ShowDialog() == DialogResult.OK)
                {
                    curFileName = ofd.FileName;
                    srcBitmap = new Bitmap(curFileName);

                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        //save
        private void SaveImage()
        {
            try
            {
                SaveFileDialog sfd = new SaveFileDialog();
                sfd.Filter = "保存(*.bmp)|*.bmp|(*.jpg)|*.jpg|(*.png)|*.png";
                sfd.Title = "保存";
                sfd.ShowHelp = true;
                if (sfd.ShowDialog() == DialogResult.OK)
                {
                    Bitmap temp = (Bitmap)pictureBox1.Image;
                    temp.Save(sfd.FileName, System.Drawing.Imaging.ImageFormat.Bmp);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        #endregion
    }
}
