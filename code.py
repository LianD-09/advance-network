from mininet.topo import Topo

class MyTopo( Topo ):
    "Simple topology example."

    def __init__( self ):
        "Create custom topo."

        Topo.__init__( self )
        # add host
        h1 = self.addHost('h1', ip='10.0.1.1', mac='00:00:00:00:00:01')
        h2 = self.addHost('h2', ip='10.0.2.1', mac='00:00:00:00:00:02')
        h3 = self.addHost('h3', ip='10.0.3.1', mac='00:00:00:00:00:03')
        h4 = self.addHost('h4', ip='10.0.4.1', mac='00:00:00:00:00:04')
        h5 = self.addHost('h5', ip='10.0.5.1', mac='00:00:00:00:00:05')
        h6 = self.addHost('h6', ip='10.0.6.1', mac='00:00:00:00:00:06')
        h7 = self.addHost('h7', ip='10.0.7.1', mac='00:00:00:00:00:07')
        h8 = self.addHost('h8', ip='10.0.8.1', mac='00:00:00:00:00:08')

        # add switch
        s1 = self.addSwitch('s1')
        s2 = self.addSwitch('s2')
        s3 = self.addSwitch('s3')
        s4 = self.addSwitch('s4')
        s5 = self.addSwitch('s5')
        s6 = self.addSwitch('s6')
        s7 = self.addSwitch('s7')
        s8 = self.addSwitch('s8')
        s9 = self.addSwitch('s9')
        s10 = self.addSwitch('s10')

        # add connection
        self.addLink(s1, h1)
        self.addLink(s2, h2)
        self.addLink(s3, h3)
        self.addLink(s4, h4)
        self.addLink(s5, h5)
        self.addLink(s6, h6)
        self.addLink(s7, h7)
        self.addLink(s8, h8)

        self.addLink(s1, s2)
        self.addLink(s2, s3)
        self.addLink(s2, s9)
        self.addLink(s3, s4)
        self.addLink(s3, s9)
        self.addLink(s3, s10)
        self.addLink(s4, s5)
        self.addLink(s4, s10)
        self.addLink(s5, s6)
        self.addLink(s6, s7)
        self.addLink(s6, s10)
        self.addLink(s7, s8)
        self.addLink(s7, s9)
        self.addLink(s7, s10)
        self.addLink(s8, s1)
        self.addLink(s8, s9)

	# sudo mn --controller=remote,ip=127.0.0.1,port=6653 --custom code.py --topo tp

topos = { 'tp': ( lambda: MyTopo() ) }
